const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const path = require('path');
let externals = {}; // 打包时需要排除的第三方包
let cdn = { css: [], js: [] }; // CDN
let compression = null;
const isProd = process.env.NODE_ENV === 'production'; // 项目是否在生产环境下运行
/**
 * 拼接当前项目的绝对路径
 * @param {String} dir
 * @returns 项目源码根目录
 */
function resolve(dir) {
  return path.join(__dirname, dir);
}
if (isProd) {
  externals = {
    vue: 'Vue',
    'element-ui': 'ELEMENT',
    'vue-router': 'VueRouter',
    quill: 'Quill'
    // 'core-js': 'core-js'
    // 'vue2-editor': 'VueEditor'
  };
  cdn = {
    css: [
      'https://unpkg.com/element-ui/lib/theme-chalk/index.css' // 提前引入elementUI样式
    ],
    js: [
      'https://unpkg.com/vue@2.6.14/dist/vue.min.js', // vuejs
      'https://unpkg.com/vue-router@3.2.0/dist/vue-router.js', // vue-router
      'https://unpkg.com/element-ui/lib/index.js', // element
      'https://cdn.quilljs.com/1.3.6/quill.min.js' // quill
      // 'https://cdn.jsdelivr.net/npm/core-js-bundle@3.6.5/index.min.js'
    ]
  };
}
const title = 'node-vue-moba-admin';
module.exports = {
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html',
  //     title: '王者荣耀后台管理系统'
  //   },
  //   page404: {
  //     entry: 'src/main404.js',
  //     template: 'public/404.html',
  //     filename: '404.html',
  //     title: '页面不存在'
  //   }
  // },
  // eslint-disable-next-line no-path-concat
  outputDir: __dirname + '/../server/admin', // 编译后的位置
  publicPath:
    process.env.NODE_ENV === 'production' // 部署在服务器上的位置
      ? '/admin/'
      : '/',
  chainWebpack(config) {
    // 注入CDN变量到html模板(public/index.html)中
    config.plugin('html').tap(args => {
      args[0].cdn = cdn;
      return args;
    });

    /* 使用pug预编译html */
    // config.module
    //   .rule('pug')
    //   .test(/\.pug$/)
    //   .use('pug-html-loader')
    //   .loader('pug-html-loader')
    //   .end()

    if (process.env.use_analyzer) {
      // 分析
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
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
    externals: externals
    // devtool: 'souce-map' // VS Code调试
  }
};
