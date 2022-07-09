import axios from 'axios'
import Vue from 'vue'
import router from './router/index.js'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api'
  // baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.request.use(
  function (config) {
    /* 请求注入token */
    if (sessionStorage.token) {
      config.headers.Authorization = 'Bearer ' + (sessionStorage.token || '') // Bearer是规范，token可能为空
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  res => {
    return res
  },
  error => {
    // console.log(error.response.data.message)
    if (error.response.data.message) {
      Vue.prototype.$message({
        type: 'error',
        message: error.response.data.message
      })
    }
    if (error.response.status === 401) {
      // Vue.prototype.$router.push('/login')
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default http
