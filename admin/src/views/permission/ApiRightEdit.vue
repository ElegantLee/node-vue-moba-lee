<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}接口权限</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="接口地址">
        <el-input
          v-model="model.path"
          placeholder="输入API接口地址，前缀/admin/api不用填"
        ></el-input>
      </el-form-item>
      <el-form-item label="操作的模型">
        <el-select v-model="model.category" placeholder="选择接口所对应的模型">
          <el-option
            clearable
            v-for="item in apiCategories"
            :label="item.name"
            :value="item._id"
            :key="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接口请求方法">
        <el-select
          multiple
          v-model="model.methods"
          placeholder="选择接口请求方法"
        >
          <el-option
            v-for="(method, methodName, index) in apiMethods"
            :key="'tmds'+index"
            :label="methodName"
            :value="method"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          type="textarea"
          v-model="model.description"
          placeholder="描述与接口方法对应，用、分隔"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ApiRightEdit',
  props: {
    id: {}
  },
  computed: {
    apiCategories() {
      return this.categories.filter(cate => {
        if (cate.parent) {
          return cate.parent.name === '接口权限'
        }
      })
    }
  },
  data() {
    return {
      model: {
        path: '',
        category: {},
        methods: [],
        description: ''
      },
      categories: [],
      apiMethods: { '查看 GET': 'GET', '新增 POST': 'POST', '修改 PUT': 'PUT', '删除 DELETE': 'DELETE', '搜索 SEARCH': 'SEARCH' }
    }
  },
  methods: {
    // 新建接口权限
    async save() {
      // let res = null; // eslint-disable-line
      if (this.id) {
        await this.$http.put(`rest/api_rights/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/api_rights', this.model)
      }
      this.$router.push('/api_rights/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 根据id查询接口权限
    async fetch() {
      const res = await this.$http.get(`rest/api_rights/${this.id}`)
      this.model = res.data
    },
    // 查询所有分类
    async fetchCategory() {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data.items
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的接口权限信息
    this.id && this.fetch()
    // 查询所有的父级接口权限信息
    this.fetchCategory()
  }
}
</script>

<style>
</style>
