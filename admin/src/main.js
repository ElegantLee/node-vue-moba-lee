import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './http'

import './style.css'

Vue.config.productionTip = false
Vue.prototype.$http = http // 绑定axios实例到Vue根实例上

/* 全局混入---图片上传注入token */
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
        Authorization: `Bearer ${sessionStorage.token || ''}`
      }
    }
  }
})

/* 自定义全局指令---控制按钮权限 */
Vue.directive('permission', {
  inserted(el, binding) {
    const rights = router.currentRoute.meta.rights // 当前用户的角色对当前页面的操作权限
    const { action, effect } = binding.value
    // console.log(action)
    if (rights) {
      if (rights.indexOf(action.toUpperCase()) === -1) {
        if (effect === 'disabled') {
          el.disabled = true
          el.querySelector('input') &&
            (el.querySelector('input').disabled = true)
          el.querySelector('button') &&
            (el.querySelector('button').disabled = true)
          el.title = '无操作权限'
          el.classList.add('is-disabled')
        } else {
          el.parentNode.removeChild(el)
        }
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
