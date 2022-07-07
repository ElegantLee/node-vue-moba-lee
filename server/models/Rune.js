/**
 * 铭文
 */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  icon: { type: String },
  description: {type: String}
})

module.exports = mongoose.model('Rune', schema)
