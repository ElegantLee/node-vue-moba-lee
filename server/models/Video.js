/**
 * 视频
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  title: { type: String },
  cover: { type: String },
  fre: { type: String },
  date: { type: String },
  category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
  url: { type: String }
})

module.exports = mongoose.model('Video', schema, 'videoes')
