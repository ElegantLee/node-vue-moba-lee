const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String }, // 侧边栏菜单名
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Menu' }, // 父级菜单
  icon: { type: String }, // 菜单图标
  isShow: { type: Boolean }, // 是否显示该菜单
  description: { type: String } // 菜单功能描述
})

schema.virtual('page', {
  localField: '_id',
  ref: 'AdminWeb',
  foreignField: 'menu',
  justOne: true
})

module.exports = mongoose.model('Menu', schema)
