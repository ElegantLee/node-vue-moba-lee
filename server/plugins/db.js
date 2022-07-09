module.exports = app => {
  // 连接数据库
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true
  })

  // models目录下的文件都引用一遍。（为什么要在数据库模块中把所有的数据模型都先引用一遍？）
  require('require-all')(__dirname + '/../models')
}
