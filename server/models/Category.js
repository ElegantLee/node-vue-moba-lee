const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' } // ref -- 指定关联的集合
})
module.exports = mongoose.model('Category', schema)
