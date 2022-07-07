const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  path: { type: String }, // 接口请求路径
  category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }, // 接口操作的哪个模型
  description: { type: String }, // 接口功能描述
  methods: [
    // 接口有哪些请求方法
    {
      type: String,
      validate: {
        validator: function (val) {
          return ['GET', 'POST', 'PUT', 'DELETE', 'SEARCH'].indexOf(val) !== -1
        },
        message: 'api method is wrong'
      }
    }
  ]
})

module.exports = mongoose.model('ApiRight', schema)
