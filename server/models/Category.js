const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' } // ref -- 指定关联的集合
})

/* 子分类 */
schema.virtual('children', {
  localField: '_id',
  foreignField: 'parent',
  justOne: false,
  ref: 'Category'
})

schema.virtual('newsList', {
  localField: '_id',
  foreignField: 'categories',
  justOne: false,
  ref: 'Article'
})

schema.virtual('heroList', {
  localField: '_id',
  foreignField: 'categories',
  justOne: false,
  ref: 'Hero'
})

schema.virtual('videoList', {
  localField: '_id',
  foreignField: 'category',
  justOne: false,
  ref: 'Video'
})

module.exports = mongoose.model('Category', schema)
