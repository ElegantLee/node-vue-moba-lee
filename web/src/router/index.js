import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
// import Home from '../views/Home.vue'
// import Article from '../views/Article.vue'
// import HeroDetail from '../views/HeroDetail.vue'
// import strategy from '../views/Strategy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      },
      {
        path: '/strategy',
        name: 'strategy',
        component: () => import(/* webpackChunkName: "Strategy" */ '../views/Strategy.vue')
      },
      {
        path: '/article/:id',
        name: 'article',
        component: () => import(/* webpackChunkName: "Article" */ '../views/Article.vue'),
        props: true
      }
      // {path: '/', name: 'home', component: Home},
    ]
  },
  {
    path: '/heroes/:id',
    name: 'hero',
    component: () => import(/* webpackChunkName: "HeroDetail" */ '../views/HeroDetail.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
