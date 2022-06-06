const express = require('express')
const path = require('path')

const app = express()

app.set('secret', 'isahfsbuaerhgfuwe') // 'isahfsbuaerhgfuwe'应该设置为一个全局的环境变量
app.use(require('cors')()) // 处理跨域请求
app.use(express.json()) // 解析JSON格式的数据
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))) // 将uploads文件夹下的内容托管为静态资源

require('./plugins/db')(app) // 引入db模块，并向其中传入express对象
require('./routes/admin')(app) // 引入路由模块，并向其中传入express模块

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
