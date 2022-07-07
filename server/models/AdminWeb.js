const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String }, // 页面权限名称
  path: { type: String }, // 页面路由的路径
  menu: { type: mongoose.SchemaTypes.ObjectId, ref: 'Menu' }, // 页面对象
  rights: [
    // 拥有页面的哪些权限
    {
      type: String,
      validate: {
        validator: function (val) {
          return (
            ['GET', 'POST', 'PUT', 'DELETE', 'SEARCH'].indexOf(
              val
            ) !== -1
          )
        },
        message: 'web right is wrong'
      }
    }
  ],
  description: { type: String }
})

module.exports = mongoose.model('AdminWeb', schema)
