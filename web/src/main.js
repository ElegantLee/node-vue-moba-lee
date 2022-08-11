import Vue from 'vue'
import App from './App.vue'

import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import swiper module styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'
Vue.component('m-card', Card)
Vue.component('m-list-card', ListCard)

Vue.config.productionTip = false

import axios from 'axios'

// console.log(process.env)

Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://localhost:3000/web/api'
})

const width = document.body

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
