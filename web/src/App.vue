<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted () {
    alert("使用手机浏览体验更佳；若使用 PC 端访问请打开浏览器开发者调试工具，选择面板“Welcome”左侧的图标调整设备为移动设备，并刷新一次")
  }
}
</script>
<style>
</style>
