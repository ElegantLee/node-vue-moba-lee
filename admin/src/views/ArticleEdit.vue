<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :label="item.name" :value="item._id" :key="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  props: {
    id: {}
  },
  components: { VueEditor },
  data() {
    return {
      model: {},
      categories: []
    }
  },
  methods: {
    // 新建分类
    async save() {
      // let res = null; // eslint-disable-line
      if (this.id) {
        await this.$http.put(`rest/articles/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 根据id查询分类
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
    // 根据id查询父级分类
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    // 富文本编辑器自定义上传图片
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData()
      formData.append('file', file)

      const res = await this.$http.post('upload', formData)
      Editor.insertEmbed(cursorLocation, 'image', res.data.url)
      resetUploader()

      // axios({
      //   url: 'https://fakeapi.yoursite.com/images',
      //   method: 'POST',
      //   data: formData
      // })
      //   .then(result => {
      //     const url = result.data.url // Get url from response
      //     Editor.insertEmbed(cursorLocation, 'image', url)
      //     resetUploader()
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的分类信息
    this.id && this.fetch()
    // 查询所有的父级分类信息
    this.fetchCategories()
  }
}
</script>

<style>
</style>
