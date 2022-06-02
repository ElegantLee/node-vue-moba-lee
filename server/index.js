const express = require('express')

const app = express()

app.use(require('cors')()) // 处理跨域请求
app.use(express.json()) // 解析JSON格式的数据

require('./plugins/db')(app) // 引入db模块，并向其中传入express对象
require('./routes/admin')(app) // 引入路由模块，并向其中传入express模块

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
