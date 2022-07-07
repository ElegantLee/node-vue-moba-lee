<template>
  <el-form class="d-flex jc-between">
    <el-form-item class="el-form-search-item d-flex">
      <el-input
        clearable
        v-model="keyword"
        placeholder="请输入内容"
        @change="(keyword) => $emit('keywordChange', keyword)"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="searchFetch('search')"
        ></el-button>
      </el-input>
      <el-button
        title="刷新"
        icon="el-icon-refresh-left"
        @click="searchFetch('refresh')"
      ></el-button>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="$router.push('/' + modelName + '/create')"
      >添加</el-button>
      <el-button
        type="danger"
        icon="el-icon-delete"
        v-permission="{action: 'DELETE', effect: 'disabled'}"
        @click="removeMany"
      >批量删除</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    modelName: {
      required: true,
      type: String
    },
    currentPage: {
      required: true,
      type: Number
    },
    size: {
      required: true,
      type: Number
    },
    selectionList: {
      required: true,
      type: Array
    },
    removeMany: {
      required: true,
      type: Function
    }
  },
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    async searchFetch(flag) {
      if (flag === 'search') {
        if (this.keyword) {
          const res = await this.$http.get(
            `rest/${this.modelName}?page=${this.currentPage}&size=${this.size}${this.keyword ? '&search=' + this.keyword : ''}`
          )
          this.$emit('searchData', res.data.items)
        } else {
          this.$message({ message: '请输入搜索关键字', type: 'warning' })
        }
      } else if (flag === 'refresh') {
        const res = await this.$http.get(
          `rest/${this.modelName}?page=${this.currentPage}&size=${this.size}${this.keyword ? '&search=' + this.keyword : ''}`
        )
        this.$emit('searchData', res.data.items)
      }
    }
  }
}
</script>

<style>
</style>
