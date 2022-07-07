module.exports = {
  // eslint-disable-next-line no-path-concat
  outputDir: __dirname + '/../server/web',
  publicPath: process.env.NODE_ENV === 'production' ? '/web' : '/'
}
