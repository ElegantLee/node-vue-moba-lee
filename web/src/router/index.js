import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import HeroDetail from '../views/HeroDetail.vue'
import strategy from '../views/Strategy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/strategy', name: 'strategy', component: strategy },
      { path: '/article/:id', name: 'article', component: Article, props: true }
      // {path: '/', name: 'home', component: Home},
    ]
  },
  { path: '/heroes/:id', name: 'hero', component: HeroDetail, props: true },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
