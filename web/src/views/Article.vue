<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom text-blue">
      <i class="iconfont icon-Back" @click="$router.push('/')"></i>
      <strong class="flex-grow-1">{{model.title}}</strong>
      <div class="text-grey fs-xs">2022-06-09</div>
    </div>
    <!-- end of title -->
    <div v-html="model.body" class="px-3 article-body fs-xl"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      model: null
    }
  },
  methods: {
    async fetchArticles() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetchArticles()
  }
}
</script>

<style lang="scss">
.page-article {
  .icon-Back {
    font-size: 1.5rem;
  }
  .article-body {
    img {
      width: auto;
      max-width: 100%;
      height: auto;
      margin: 0.1rem auto;
      display: block;
    }
  }
  iframe {
    width: 100%;
    height: 450;
  }
  span {
    line-height: 1.75rem;
  }
  p {
    line-height: 1.75rem;
  }
}
</style>
