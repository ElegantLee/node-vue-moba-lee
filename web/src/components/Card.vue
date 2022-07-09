<template>
  <div class="card bg-white p-3 mt-1">
    <div class="card-header d-flex pb-3" :class="{'border-bottom': !plain}">
      <i v-if="sprite" class="sprite" :class="`${sprite}`"></i>
      <i v-else class="iconfont" :class="`icon-${icon}`"></i>
      <div v-if="plain" class="fs-xl flex-grow-1 px-2">
        <strong>{{title}}</strong>
      </div>
      <div v-else class="fs-xl flex-grow-1 px-2">
        {{title}}
      </div>
      <i class="iconfont icon-menu" v-if="!plain"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    sprite: {
      type: String,
      required: false
    },
    plain: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
// .card-header {
//   border-bottom: 1px solid $border-color;
// }

.card {
  border-bottom: 1px solid $border-color;
}
</style>
