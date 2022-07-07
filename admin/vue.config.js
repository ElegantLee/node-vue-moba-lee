module.exports = {
  // eslint-disable-next-line no-path-concat
  outputDir: __dirname + '/../server/admin', // 编译后的位置
  publicPath: process.env.NODE_ENV === 'production' // 部署在服务器上的位置
    ? '/admin/'
    : '/'
}
