module.exports = options => {
  const Role = require('../models/Role')
  const assert = require('http-assert')

  return async (req, res, next) => {
    const user = req.user
    const role = await Role.findById(user.role)
      .populate({ path: 'apiRights.url' })
      .lean()
    // console.log(role)
    let originalUrl = req.query
      ? req.originalUrl.split('?')[0]
      : req.originalUrl
    let originalRight = req.query.search ? 'SEARCH' : req.method

    const result = role.apiRights.filter(apiRight => {
      let path =
        '/admin/api' + (apiRight.url ? apiRight.url.path : '')
      // console.log(apiRight.url)
      // console.log(apiRight.url.path)
      if (req.params.id) {
        path = path.replace(':id', req.params.id)
      }

      console.log(path)
      console.log(originalUrl)
      console.log(originalRight)
      return (
        path === originalUrl &&
        apiRight.rights.indexOf(originalRight.toUpperCase()) !== -1
      )
    })
    assert(result.length, 405, '没有操作权限，请联系管理员处理')
    next()
  }
}
