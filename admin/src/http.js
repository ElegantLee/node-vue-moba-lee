import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

// 响应拦截器
http.interceptors.response.use(res => {
  return res
}, error => {
  // console.log(error.response.data.message)
  if (error.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: error.response.data.message
    })
  }
  return Promise.reject(error)
})

export default http
