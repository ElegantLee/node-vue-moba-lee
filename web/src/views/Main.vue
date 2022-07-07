<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="35" />
      <div class="px-2 flex-grow-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-sm">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1 jc-around">
        <div
        v-for="(navItem, index) in navItems"
        :key="navItem.name"
        :class="{active: active === index}"
        class="nav-item"
        @click="active=index">
          <router-link class="nav-link" tag="div" :to="`/${navItem.uri}`">{{ navItem.name }}</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      navItems: [
        {
          name: '首页',
          uri: ''
        },
        {
          name: '攻略中心',
          uri: 'strategy'
        },
        {
          name: '赛事中心',
          uri: 'match'
        },
        {
          name: 'IP新游',
          uri: 'ipng'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.topbar {
  /* 固定顶部栏 */
  // TODO: 考虑兼容性
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
