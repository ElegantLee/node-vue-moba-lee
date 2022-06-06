/**
 * 资源请求中间件模块，每次请求前先做转换，得到正确的集合名称。
 * @param {*} options 自定义参数
 * @returns 处理资源请求的中间件
 */
module.exports = options => {
  return async (req, res, next) => {
    // categories(前端请求字段) ==> Category(数据库集合名称)，
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}
