import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './http'

import './style.css'

Vue.config.productionTip = false
Vue.prototype.$http = http // 绑定axios实例到Vue根实例上

/* 全局混入 */
Vue.mixin({
  computed: {
    /* 文件上传的请求路径 */
    uploadUrl() {
      return http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    /* 文件上传时注入token */
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
