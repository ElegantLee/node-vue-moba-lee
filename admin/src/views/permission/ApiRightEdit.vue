<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}接口权限</h1>
    <el-form
      :model="model"
      :rules="rules"
      ref="ApiRightForm"
      label-width="120px"
      @submit.native.prevent="save"
    >
      <el-form-item prop="path" label="接口地址">
        <el-input
          v-model="model.path"
          placeholder="输入API接口地址，前缀/admin/api不用填"
        ></el-input>
      </el-form-item>
      <el-form-item prop="category" label="操作的模型">
        <el-select
          v-model="model.category"
          @change="bindCategoryChange"
          placeholder="选择接口所对应的模型"
        >
          <el-option
            clearable
            v-for="item in apiCategories"
            :label="item.name"
            :value="item._id"
            :key="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="methods" label="接口请求方法">
        <el-select
          multiple
          v-model="model.methods"
          @change="bindMethodChange"
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
      <el-form-item prop="description" label="描述">
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
        category: '',
        methods: [],
        description: ''
      },
      categories: [],
      apiMethods: { '查看 GET': 'GET', '新增 POST': 'POST', '修改 PUT': 'PUT', '删除 DELETE': 'DELETE', '搜索 SEARCH': 'SEARCH' },
      rules: {
        path: [{ required: true, message: '请输入接口请求地址', trigger: 'blur' }],
        category: [{ required: true, message: '请选择接口操作的模型', trigger: 'change' }],
        methods: [{ required: true, message: '请选择接口的请求方式', trigger: 'change' }],
        description: [{ required: true, message: '请输入接口的描述', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 新建接口权限
    async save() {
      this.$refs['ApiRightForm'].validate(async valid => {
        if (valid) {
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
        } else {
          this.$message({
            type: 'error',
            message: '表单信息不完整'
          })
          return false
        }
      })
    },

    bindCategoryChange(categories) {
      if (categories.length !== 1) {
        this.$message({
          message: '最多只能操作一个模型',
          type: 'warning'
        })
      } else {
        this.$message({
          message: '已选择一个模型',
          type: 'success'
        })
      }
    },
    bindMethodChange(methods) {
      if (methods.length < 1) {
        this.$message({
          message: '请选择至少一个请求方法',
          type: 'warning'
        })
      }
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
