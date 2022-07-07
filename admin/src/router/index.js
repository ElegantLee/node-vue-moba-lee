import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
// import CategoryEdit from '../views/CategoryEdit.vue'
// import CategoryList from '../views/CategoryList.vue'

// import ItemEdit from '../views/ItemEdit.vue'
// import ItemList from '../views/ItemList.vue'

// import HeroEdit from '../views/HeroEdit.vue'
// import HeroList from '../views/HeroList.vue'

// import ArticleEdit from '../views/ArticleEdit.vue'
// import ArticleList from '../views/ArticleList.vue'

// import AdEdit from '../views/AdEdit.vue'
// import AdList from '../views/AdList.vue'

// import AdminUserEdit from '../views/AdminUserEdit.vue'
// import AdminUserList from '../views/AdminUserList.vue'

// import RuneEdit from '../views/RuneEdit.vue'
// import RuneList from '../views/RuneList.vue'

// import VideoEdit from '../views/VideoEdit.vue'
// import VideoList from '../views/VideoList.vue'

// import ApiRightEdit from '../views/permission/ApiRightEdit.vue'
// import ApiRightList from '../views/permission/ApiRightList.vue'

// import AdminWebEdit from '../views/menu/AdminWebEdit.vue'
// import AdminWebList from '../views/menu/AdminWebList.vue'

// import MenuEdit from '../views/menu/MenuEdit.vue'
// import MenuList from '../views/menu/MenuList.vue'

// import RoleEdit from '../views/permission/RoleEdit.vue'
// import RoleList from '../views/permission/RoleList.vue'

Vue.use(VueRouter)

// eslint-disable-next-line no-unused-vars
// 动态路由表
const routerMapping = {
  '/categories/create': {
    path: '/categories/create',
    name: 'CategoryCreate',
    component: () => import('../views/CategoryEdit.vue')
  },
  '/categories/list': {
    path: '/categories/list',
    name: 'CategoryList',
    component: () => import('../views/CategoryList.vue')
  },
  '/categories/edit/:id': {
    path: '/categories/edit/:id',
    name: 'CategoryEdit',
    props: true,
    component: () => import('../views/CategoryEdit.vue')
  },

  '/items/create': {
    path: '/items/create',
    name: 'ItemCreate',
    component: () => import('../views/ItemEdit.vue')
  },
  '/items/list': {
    path: '/items/list',
    name: 'ItemList',
    component: () => import('../views/ItemList.vue')
  },
  '/items/edit/:id': {
    path: '/items/edit/:id',
    name: 'ItemEdit',
    props: true,
    component: () => import('../views/ItemEdit.vue')
  },

  '/heroes/create': {
    path: '/heroes/create',
    name: 'HeroCreate',
    component: () => import('../views/HeroEdit.vue')
  },
  '/heroes/list': {
    path: '/heroes/list',
    name: 'HeroList',
    component: () => import('../views/HeroList.vue')
  },
  '/heroes/edit/:id': {
    path: '/heroes/edit/:id',
    name: 'HeroEdit',
    props: true,
    component: () => import('../views/HeroEdit.vue')
  },

  '/articles/create': {
    path: '/articles/create',
    name: 'ArticleCreate',
    component: () => import('../views/ArticleEdit.vue')
  },
  '/articles/list': {
    path: '/articles/list',
    name: 'ArticleList',
    component: () => import('../views/ArticleList.vue')
  },
  '/articles/edit/:id': {
    path: '/articles/edit/:id',
    name: 'ArticleEdit',
    props: true,
    component: () => import('../views/ArticleEdit.vue')
  },
  '/videoes/create': {
    path: '/videoes/create',
    name: 'VideoCreate',
    component: () => import('../views/VideoEdit.vue')
  },
  '/videoes/list': {
    path: '/videoes/list',
    name: 'VideoList',
    component: () => import('../views/VideoList.vue')
  },
  '/videoes/edit/:id': {
    path: '/videoes/edit/:id',
    name: 'VideoEdit',
    props: true,
    component: () => import('../views/VideoEdit.vue')
  },

  '/ads/create': {
    path: '/ads/create',
    name: 'AdCreate',
    component: () => import('../views/AdEdit.vue')
  },
  '/ads/list': {
    path: '/ads/list',
    name: 'AdList',
    component: () => import('../views/AdList.vue')
  },
  '/ads/edit/:id': {
    path: '/ads/edit/:id',
    name: 'AdEdit',
    props: true,
    component: () => import('../views/AdEdit.vue')
  },

  '/roles/create': {
    path: '/roles/create',
    name: 'RoleCreate',
    component: () => import('../views/permission/RoleEdit.vue')
  },
  '/roles/list': {
    path: '/roles/list',
    name: 'RoleList',
    component: () => import('../views/permission/RoleList.vue')
  },
  '/roles/edit/:id': {
    path: '/roles/edit/:id',
    name: 'RoleEdit',
    props: true,
    component: () => import('../views/permission/RoleEdit.vue')
  },

  '/menus/create': {
    path: '/menus/create',
    name: 'MenuCreate',
    component: () => import('../views/menu/MenuEdit.vue')
  },
  '/menus/list': {
    path: '/menus/list',
    name: 'MenuList',
    component: () => import('../views/menu/MenuList.vue')
  },
  '/menus/edit/:id': {
    path: '/menus/edit/:id',
    name: 'MenuEdit',
    props: true,
    component: () => import('../views/menu/MenuEdit.vue')
  },

  '/admin_webs/create': {
    path: '/admin_webs/create',
    name: 'AdminWebCreate',
    component: () => import('../views/menu/AdminWebEdit.vue')
  },
  '/admin_webs/list': {
    path: '/admin_webs/list',
    name: 'AdminWebList',
    component: () => import('../views/menu/AdminWebList.vue')
  },
  '/admin_webs/edit/:id': {
    path: '/admin_webs/edit/:id',
    name: 'AdminWebEdit',
    props: true,
    component: () => import('../views/menu/AdminWebEdit.vue')
  },
  '/api_rights/create': {
    path: '/api_rights/create',
    name: 'ApiRightCreate',
    component: () => import('../views/permission/ApiRightEdit.vue')
  },
  '/api_rights/list': {
    path: '/api_rights/list',
    name: 'ApiRightList',
    component: () => import('../views/permission/ApiRightList.vue')
  },
  '/api_rights/edit/:id': {
    path: '/api_rights/edit/:id',
    name: 'ApiRightEdit',
    props: true,
    component: () => import('../views/permission/ApiRightEdit.vue')
  },

  '/admin_users/create': {
    path: '/admin_users/create',
    name: 'AdminUserCreate',
    component: () => import('../views/AdminUserEdit.vue')
  },
  '/admin_users/list': {
    path: '/admin_users/list',
    name: 'AdminUserList',
    component: () => import('../views/AdminUserList.vue')
  },
  '/admin_users/edit/:id': {
    path: '/admin_users/edit/:id',
    name: 'AdminUserEdit',
    props: true,
    component: () => import('../views/AdminUserEdit.vue')
  }
}

// 静态路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { isPublic: true }
  },
  {
    path: '/',
    name: 'main',
    component: Main
    // children: [
    //   { path: '/categories/create', component: CategoryEdit },
    //   { path: '/categories/list', component: CategoryList },
    //   {
    //     path: 'categories/edit/:id',
    //     component: CategoryEdit,
    //     props: true
    //   },
    //   { path: '/items/create', component: ItemEdit },
    //   { path: '/items/list', component: ItemList },
    //   { path: 'items/edit/:id', component: ItemEdit, props: true },
    //   { path: '/runes/create', component: RuneEdit },
    //   { path: '/runes/list', component: RuneList },
    //   { path: 'runes/edit/:id', component: RuneEdit, props: true },
    //   { path: '/videoes/create', component: VideoEdit },
    //   { path: '/videoes/list', component: VideoList },
    //   { path: 'videoes/edit/:id', component: VideoEdit, props: true },
    //   { path: '/heroes/create', component: HeroEdit },
    //   { path: '/heroes/list', component: HeroList },
    //   { path: 'heroes/edit/:id', component: HeroEdit, props: true },
    //   { path: '/articles/create', component: ArticleEdit },
    //   { path: '/articles/list', component: ArticleList },
    //   {
    //     path: 'articles/edit/:id',
    //     component: ArticleEdit,
    //     props: true
    //   },
    //   { path: '/ads/create', component: AdEdit },
    //   { path: '/ads/list', component: AdList },
    //   { path: 'ads/edit/:id', component: AdEdit, props: true },
    //   { path: '/admin_users/create', component: AdminUserEdit },
    //   { path: '/admin_users/list', component: AdminUserList },
    //   {
    //     path: 'admin_users/edit/:id',
    //     component: AdminUserEdit,
    //     props: true
    //   },
    //   { path: '/api_rights/create', component: ApiRightEdit },
    //   { path: '/api_rights/list', component: ApiRightList },
    //   {
    //     path: 'api_rights/edit/:id',
    //     component: ApiRightEdit,
    //     props: true
    //   },
    //   { path: '/admin_webs/create', component: AdminWebEdit },
    //   { path: '/admin_webs/list', component: AdminWebList },
    //   {
    //     path: 'admin_webs/edit/:id',
    //     component: AdminWebEdit,
    //     props: true
    //   },
    //   { path: '/menus/create', component: MenuEdit },
    //   { path: '/menus/list', component: MenuList },
    //   {
    //     path: 'menus/edit/:id',
    //     component: MenuEdit,
    //     props: true
    //   },
    //   { path: '/roles/create', component: RoleEdit },
    //   { path: '/roles/list', component: RoleList },
    //   {
    //     path: 'roles/edit/:id',
    //     component: RoleEdit,
    //     props: true
    //   }
    // ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

// 挂载静态路由表
const router = new VueRouter({
  routes
})

/* 全局导航守卫 */
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  /* 要访问的页面不是公开访问的页面，且用户没有登录，则跳转到登录页 */
  if (!to.meta.isPublic && !sessionStorage.token) {
    Vue.prototype.$message({ type: 'error', message: '请先登录' })
    next('/login')
  } else if (to.params.id && from.meta.rights) {
    // 用户进入编辑页面时判断是否有操作权限
    // console.log(to.params.id)
    // console.log(from.meta.rights)
    const regExp = new RegExp('/edit' + to.params.id, 'i')
    if (
      regExp.test(to.path) &&
      from.meta.rights.indexOf('PUT') === -1
    ) {
      Vue.prototype.$alert('没有编辑权限', '错误', {
        type: 'error'
      })
      return Promise.reject(new Error('无权限进行此操作'))
    } else {
      next()
    }
  } else {
    next()
  }
})

/**
 * 自定义一个$addRoutes的方法，更新路由配置
 * @param {*} routes 路由表
 */
router.$addRoutes = routes => {
  router.matcher = new VueRouter().matcher
  router.addRoutes(routes)
}

/**
 * 用户登录成功时，从用户角色的权限中生成有权限访问的路由表（侧边栏菜单）
 * @returns
 */
export function initDynamicRoutes() {
  if (sessionStorage.token && sessionStorage.adminWebs) {
    /* 找到main页面在动态路由表中的索引位置 */
    let mainRouteIndex = 0
    const routes = router.options.routes
    routes.forEach((route, index) => {
      if (route.path === '/' && route.name === 'main') {
        mainRouteIndex = index
      }
    })

    /* 根据用户角色的页面访问权限生成路由表，并动态添加到路由中 */
    const adminWebs = JSON.parse(sessionStorage.getItem('adminWebs'))
    routes[mainRouteIndex].children = []
    adminWebs.forEach(adminWeb => {
      let newAdminWeb = routerMapping[adminWeb.web.path]
      if (newAdminWeb) {
        newAdminWeb.meta = { rights: adminWeb.rights }
        routes[mainRouteIndex].children.push(newAdminWeb)
      }
    })
    router.$addRoutes(routes)
  } else {
    return
  }
}

initDynamicRoutes() // 预防刷新页面时丢失路由信息进入404页面，相当于在刷新后又添加一次动态路由表。

export default router
