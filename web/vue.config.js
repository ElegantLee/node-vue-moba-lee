const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
let externals = {}
let cdn = { css: [], js: [] }

const isProd = process.env.NODE_ENV === 'production'

/**
 * 拼接当前项目的绝对路径
 * @param {String} dir
 * @returns 项目源码根目录
 */
function resolve(dir) {
  return path.join(__dirname, dir)
}

if (isProd) {
  externals = {
    'vue': 'Vue',
    'element-ui': 'ELEMENT',
    'vue-awesome-swiper': 'VueAwesomeSwiper',
    'swiper': 'Swiper',
    'vue-router': 'VueRouter'
  }
  cdn = {
    css: [
      'https://unpkg.com/element-ui/lib/theme-chalk/index.css', // 提前引入elementUI样式
      'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css'
    ],
    js: [
      'https://unpkg.com/vue@2.6.14/dist/vue.min.js', // vuejs
      'https://unpkg.com/vue-router@3.2.0/dist/vue-router.js',
      'https://unpkg.com/element-ui/lib/index.js', // element
      'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js', // vue-awesome-swiper依赖swiper，因此在vue-awesome-swiper之前引入
      'https://unpkg.com/vue-awesome-swiper@3.1.3/dist/vue-awesome-swiper.js'
    ]
  }
}

const title = 'node-vue-moba-web'

module.exports = {
  // eslint-disable-next-line no-path-concat
  outputDir: __dirname + '/../server/web',
  publicPath: process.env.NODE_ENV === 'production' ? '/web' : '/',
  chainWebpack(config) {
    // 注入CDN变量到html模板(public/index.html)中
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    })

    if (process.env.use_analyzer) {
      // 分析
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: title,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // 要排除的包名
    // key---要排除的包名，value---引入的CDN文件中的全局变量名
    // externals: externals
    // devtool: 'souce-map' // VS Code调试
  }
}
