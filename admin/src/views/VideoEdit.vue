<template>
  <div class="video-edit">
    <h1>{{ id ? '编辑' : '新建' }}视频</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.category">
          <el-option v-for="category in categories" :label="category.name" :value="category._id" :key="category._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input type="textarea" v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input v-model="model.url"></el-input>
      </el-form-item>
      <el-form-item label="点击率">
        <el-input v-model="model.fre"></el-input>
      </el-form-item>
      <el-form-item label="发布日期">
        <el-input type="date" v-model="model.date"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.cover" :src="model.cover" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'VideoEdit',
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      categories: []
    }
  },
  methods: {
    // 新建视频
    async save() {
      // let res = null; // eslint-disable-line
      if (this.id) {
        await this.$http.put(`rest/videoes/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/videoes', this.model)
      }
      this.$router.push('/videoes/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 根据id查询视频
    async fetch() {
      const res = await this.$http.get(`rest/videoes/${this.id}`)
      this.model = res.data
    },
    // 上传图片
    afterUpload(res) {
      this.$set(this.model, 'cover', res.url)
      // this.model.icon = res.url
    },
    async fetchCategories() {
      const res = await this.$http.get('rest/categories')
      this.categories = res.data
    }
  },
  created() {
    this.fetchCategories() // 获取分类信息
    this.id && this.fetch() // 编辑操作时，查询当前编辑的视频信息
  }
}
</script>

<style lang="scss" scoped>
.video-edit {
  .el-input {
    width: 30%;
  }
}
</style>
