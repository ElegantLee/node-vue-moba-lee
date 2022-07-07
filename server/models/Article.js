const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    title: { type: String }, // 文章标题
    body: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }] // 文章类型
  },
  {
    timestamps: true
  }
)

// collection名称省略了，默认是模型名小写加复数，这里是articles
module.exports = mongoose.model('Article', schema)
