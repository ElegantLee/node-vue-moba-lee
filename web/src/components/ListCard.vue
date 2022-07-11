<template>
  <m-card :sprite="sprite" :icon="icon" :title="title">
    <div class="nav jc-between">
      <div
        class="nav-item"
        :class="{ active: active === index }"
        v-for="(category, index) in categories"
        :key="index"
        @click="$refs.list.swiper.slideTo(index)"
      >
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper ref="list" :options="{ autoHeight: true }" @slide-change="() => (active = $refs.list.swiper.realIndex)">
        <swiper-slide v-for="(category, index) in categories" :key="index">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    sprite: {type: String, required: false}, // 是否使用精灵图中的图标
    icon: { type: String, required: true }, // 图标
    title: { type: String, required: true }, // 标题
    categories: { type: Array, required: true } // 显示的什么内容
  },
  data() {
    return {
      active: 0 // 控制选中高亮
    }
  }
}
</script>

<style></style>
