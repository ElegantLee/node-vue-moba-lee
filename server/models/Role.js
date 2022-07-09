const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String }, // 角色名称
  description: { type: String }, // 角色权限描述
  adminWebs: [ // 角色拥有的页面访问权限
    {
      web: { type: mongoose.SchemaTypes.ObjectId, ref: 'AdminWeb' },
      rights: [{ type: String }]
    }
  ],
  apiRights: [ // 角色拥有的接口访问权限
    {
      url: { type: mongoose.SchemaTypes.ObjectId, ref: 'ApiRight' },
      rights: [{ type: String }]
    }
  ]
})

module.exports = mongoose.model('Role', schema)
