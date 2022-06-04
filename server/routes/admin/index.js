module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  })

  // 新建分类接口
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 查询数据列表
  router.get('/', async (req, res) => {
    // .populate('parent') --- 关联查询，查找关联的parent字段
    // 针对某个集合设置特殊操作
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    // const items = await req.Model.find().populate('parent').limit(10)
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })
  // 根据id查询数据
  router.get('/:id', async (req, res) => {
    const item = await req.Model.findById(req.params.id)
    res.send(item)
  })
  // 更新数据
  router.put('/:id', async (req, res) => {
    const item = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(item)
  })
  // 根据id删除数据
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })

  app.use(
    '/admin/api/rest/:resource',
    async (req, res, next) => {
      // categories(前端请求字段) ==> Category(数据库集合名称)，
      // 每次请求前先做转换，得到正确的集合名称。
      const modelName = require('inflection').classify(req.params.resource)
      req.Model = require(`../../models/${modelName}`)
      next()
    },
    router
  )

  // 上传图标
  const multer = require('multer')
  const path = require('path')
  console.log(__dirname)
  const destDir = path.join(__dirname, '/../../uploads')
  console.log(destDir)
  const upload = multer({ dest: destDir })
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  // 登录接口
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户
    const AdminUser = require('../../models/AdminUser')
    // Schema中默认不查询password，这里加上
    const user = await AdminUser.findOne({ username: username }).select('+password')
    if (!user) {
      return res.status(422).send({
        message: '用户不存在'
      })
    }
    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    if (!isValid) {
      return res.status(422).send({
        message: '密码错误'
      })
    }
    // 3.返回token
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })
}
