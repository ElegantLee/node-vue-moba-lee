<template>
  <!-- 头部 -->
  <el-container style="height: 100vh;">
    <el-aside width="200px" style>
      <el-menu
        router
        unique-opened
        background-color="#252a40"
        text-color="#fff"
        active-text-color="#fdb933"
        :default-active="$route.path"
      >
        <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-fold"></i>分类管理
            </template>
            <el-menu-item-group>
              <template slot="title">分类</template>
              <el-menu-item index="/categories/create">新建分类</el-menu-item>
              <el-menu-item index="/categories/list">分类列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>物品管理
            </template>
            <el-menu-item-group>
              <template slot="title">物品</template>
              <el-menu-item index="/items/create">新建物品</el-menu-item>
              <el-menu-item index="/items/list">物品列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">铭文</template>
              <el-menu-item index="/runes/create">新建铭文</el-menu-item>
              <el-menu-item index="/runes/list">铭文列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-help"></i>英雄管理
            </template>
            <el-menu-item-group>
              <template slot="title">英雄</template>
              <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
              <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-document"></i>内容管理
            </template>
            <el-menu-item-group>
              <template slot="title">视频</template>
              <el-menu-item index="/videoes/create">新建视频</el-menu-item>
              <el-menu-item index="/videoes/list">视频列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">文章</template>
              <el-menu-item index="/articles/create">新建文章</el-menu-item>
              <el-menu-item index="/articles/list">文章列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-opportunity"></i>运营管理
            </template>
            <el-menu-item-group>
              <template slot="title">广告位</template>
              <el-menu-item index="/ads/create">新建广告位</el-menu-item>
              <el-menu-item index="/ads/list">广告位列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-data-board"></i>后台界面管理
            </template>
            <el-menu-item-group>
              <template slot="title">菜单</template>
              <el-menu-item index="/menus/create">新建菜单</el-menu-item>
              <el-menu-item index="/menus/list">菜单列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">后台页面</template>
              <el-menu-item index="/admin_webs/create">新建后台页面</el-menu-item>
              <el-menu-item index="/admin_webs/list">后台页面列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-lock"></i>权限管理
            </template>
            <el-menu-item-group>
              <template slot="title">角色</template>
              <el-menu-item index="/roles/create">新建角色</el-menu-item>
              <el-menu-item index="/roles/list">角色列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">接口权限</template>
              <el-menu-item index="/api_rights/create">新建接口权限</el-menu-item>
              <el-menu-item index="/api_rights/list">接口权限列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-user-solid"></i>管理员管理
            </template>
            <el-menu-item-group>
              <template slot="title">管理员</template>
              <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
              <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
            </el-menu-item-group>
        </el-submenu>-->
        <el-submenu
          v-for="(menu, index) in menuData"
          :key="menu._id"
          :index="index + 1 + ''"
        >
          <template slot="title">
            <i :class="menu.icon"></i>
            {{menu.name}}
          </template>
          <el-menu-item-group
            v-for="group in menu.children"
            :key="group._id"
          >
            <template slot="title">{{group.name}}</template>
            <template v-for="webPage in group.children">
              <el-menu-item
                v-if="webPage.menu.isShow"
                :key="webPage._id"
                :index="webPage.path"
              >{{webPage.name}}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="logo-title">
          <img src="../assets/img/home/logo1.png" alt="王者荣耀" />
          <h2 style="padding: 12px;">王者荣耀后台管理系统</h2>
        </div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link" style="color: grey;">
            {{adminUser.username}}
            <i
              class="el-icon-arrow-down el-icon--right"
            ></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="web">前台</el-dropdown-item>
            <el-dropdown-item command="logout">注销</el-dropdown-item>
            <el-dropdown-item divided command="github">github</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 默认以组件区分不同的路由 -->
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { initDynamicRoutes } from '@/router/index.js'
import { makeWebTree } from '@/utils/util.js'
export default {
  computed: {
    menuData() {
      let res = []
      if (this.adminUser.adminWebs && this.adminUser.adminWebs.length > 0) {
        let arr = this.adminUser.adminWebs.map(adminWeb => adminWeb.web)
        // console.log(arr)
        res = makeWebTree(arr)
        // console.log(res)
      }
      return res
    }
  },
  data() {
    return {
      adminUser: {}
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'logout') {
        localStorage.removeItem('token')
        localStorage.removeItem('adminWebs')
        this.$message({
          type: 'success',
          message: '注销成功'
        })
        this.$router.push('/login')
      } else if (command === 'web') {
        window.open('http://moba.elegantlee.top/web')
      } else if (command === 'github') {
        window.open('https://github.com/ElegantLee/node-vue-moba-lee/tree/main')
      }
    },
    /* 获取管理员信息 */
    async fetchAdminUserInfo() {
      const res = await this.$http.get('/user_info')
      this.adminUser = res.data
      // console.log(res.data.adminWebs)
      sessionStorage.setItem('adminWebs', JSON.stringify(res.data.adminWebs)) // 页面访问权限持久化
      initDynamicRoutes() // 添加动态路由表
    }
  },
  created() {
    this.fetchAdminUserInfo()
  }
}
</script>

<style scoped>
.el-menu {
  height: 100%;
  width: 100%;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#11131f, #252a40);
  color: #eee;
}

.el-aside {
  background-color: #252a40;
}

.logo-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
