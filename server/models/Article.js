const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String }, // 文章标题
  body: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }] // 文章类型
})

module.exports = mongoose.model('Article', schema)
