/**
 * 登录校验中间件
 * @param {*} options 自定义参数
 * @returns 登录校验中间件
 */
module.exports = options => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')
  return async (req, res, next) => {
    /* 服务端验证token */
    const token = String(req.headers.authorization || '') // 挂载user对象到req对象上，后续的请求也会有user对象
      .split(' ')
      .pop()
    assert(token, 401, '请先登录') // token可能为空，为空时抛出一个异常
    const { id } = jwt.verify(token, req.app.get('secret')) // 使用jwt验证前端携带的token与后端的secret是否一致
    assert(id, 401, '请先登录') // id可能无效，为空时抛出一个异常
    req.user = await AdminUser.findById(id).lean() // 挂载user对象到req对象上，后续的请求也会有user对象
    // console.log(req.user)
    assert(req.user, 401, '请先登录') // user可能不存在，不存在时抛出一个异常
    next()
  }
}
