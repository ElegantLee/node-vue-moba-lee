<template>
  <div class="video-edit">
    <h1>{{ id ? '编辑' : '新建' }}视频</h1>
    <el-form
      :model="model"
      :rules="rules"
      ref="VideoForm"
      label-width="120px"
      @submit.native.prevent="save"
    >
      <el-form-item prop="category" label="所属分类">
        <el-select v-model="model.category">
          <el-option
            v-for="category in categories"
            :label="category.name"
            :value="category._id"
            :key="category._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="title" label="标题">
        <el-input type="textarea" v-model.trim="model.title"></el-input>
      </el-form-item>
      <el-form-item prop="url" label="链接">
        <el-input v-model.trim="model.url"></el-input>
      </el-form-item>
      <el-form-item prop="fre" label="点击率">
        <el-input v-model.trim="model.fre"></el-input>
      </el-form-item>
      <el-form-item prop="date" label="发布日期">
        <el-date-picker type="date" placeholder="选择发布日期" v-model="model.date"></el-date-picker>
      </el-form-item>
      <el-form-item prop="cover" label="封面">
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
      categories: [],
      rules: {
        category: [{required: true, message: '请选择至少一个分类', trigger: 'change'}],
        title: [{ required: true, message: '请输入视频标题', trigger: 'blur' }],
        url: [{ required: true, message: '请输入视频链接', trigger: 'blur' }],
        fre: [{ required: true, message: '请输入点击率', trigger: 'blur' }],
        date: [{ required: true, message: '请输入视频发布日期', trigger: 'change' }],
        cover: [{ required: true, message: '请上传视频封面', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 新建视频
    async save() {
      this.$refs['VideoForm'].validate(async valid => {
        if (valid) {
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
        } else {
          this.$message({
            type: 'error',
            message: '表单信息不完整'
          })
          return false
        }
      })
    },
    // 根据id查询视频
    async fetch() {
      const res = await this.$http.get(`rest/videoes/${this.id}`)
      this.model = {...res.data}
    },
    // 上传图片
    afterUpload(res) {
      this.$set(this.model, 'cover', res.url)
      // this.model.icon = res.url
    },
    async fetchCategories() {
      const res = await this.$http.get('rest/categories')
      this.categories = res.data.items
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
