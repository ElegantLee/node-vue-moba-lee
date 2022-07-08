<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}分类</h1>
    <el-form
      :model="model"
      :rules="rules"
      ref="CategoryForm"
      label-width="120px"
      @submit.native.prevent="save"
    >
      <el-form-item prop="parent" label="上一级分类">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parents"
            :label="item.name"
            :value="item._id"
            :key="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="name" label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CategoryEdit',
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      parents: [],
      rules: {
        name: [{ required: true, message: '请输入分类名称', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 新建分类
    async save() {
      this.$refs['CategoryForm'].validate(async valid => {
        if (valid) {
          if (this.id) {
            await this.$http.put(`rest/categories/${this.id}`, this.model)
          } else {
            await this.$http.post('rest/categories', this.model)
          }
          this.$router.push('/categories/list')
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
    // 根据id查询分类
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`)
      this.model = res.data
    },
    // 根据id查询父级分类
    async fetchParents() {
      const res = await this.$http.get(`rest/categories`)
      this.parents = res.data
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的分类信息
    this.id && this.fetch()
    // 查询所有的父级分类信息
    this.fetchParents()
  }
}
</script>

<style>
</style>
