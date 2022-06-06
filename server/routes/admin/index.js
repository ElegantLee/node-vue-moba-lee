module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  })
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../../models/AdminUser')

  /* 接口-新建数据 */
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  /* 接口-查询数据列表 */
  router.get('/', async (req, res) => {
    // .populate('parent') --- 关联查询，查找关联的parent字段
    /* 针对某个集合设置特殊操作 */
    // console.log(req.user)
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    // const items = await req.Model.find().populate('parent').limit(10)
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })

  /* 接口-根据id查询数据 */
  router.get('/:id', async (req, res) => {
    const item = await req.Model.findById(req.params.id)
    res.send(item)
  })

  /* 接口-更新数据 */
  router.put('/:id', async (req, res) => {
    const item = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(item)
  })

  /* 接口-根据id删除数据 */
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })

  /* 引入中间件 */
  const authMiddleware = require('../../middlewares/auth') // 服务器端登录校验
  const resourceMiddleware = require('../../middlewares/resource') // 资源请求处理中间件

  // 资源请求
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  /* 上传图片接口 */
  const multer = require('multer')
  const path = require('path')
  // console.log(__dirname)
  const destDir = path.join(__dirname, '/../../uploads')
  // console.log(destDir)
  const upload = multer({ dest: destDir })
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  /* 登录接口 */
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户

    // Schema中默认不查询password，这里加上
    const user = await AdminUser.findOne({ username: username }).select('+password')
    // if (!user) {
    //   return res.status(422).send({
    //     message: '用户不存在'
    //   })
    // }
    assert(user, 422, '用户不存在') // 抛出异常
    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    // if (!isValid) {
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }
    assert(isValid, 422, '密码错误')
    // 3.返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  /* 错误处理函数 */
  app.use(async (err, req, res, next) => {
    // console.log(err)
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}
