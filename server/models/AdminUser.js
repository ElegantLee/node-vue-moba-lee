const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false, // 查询时查不着
    set: function (val) {
      return require('bcrypt').hashSync(val, 10)
    }
  },
  role: { type: mongoose.SchemaTypes.ObjectId, ref: 'Role' }
})
module.exports = mongoose.model('AdminUser', schema)
