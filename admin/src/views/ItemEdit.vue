<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}物品</h1>
    <el-form
      :model="model"
      :rules="rules"
      ref="ItemForm"
      label-width="120px"
      @submit.native.prevent="save"
    >
      <el-form-item prop="name" label="名称">
        <el-input v-model.trim="model.name"></el-input>
      </el-form-item>
      <el-form-item prop="icon" label="图标">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
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
  name: 'ItemEdit',
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      rules: {
        name: [{ required: true, message: '请输入物品名称', trigger: 'blur' }],
        icon: [{ required: true, message: '请上传物品图标', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 新建物品
    async save() {
      this.$refs['ItemForm'].validate(async valid => {
        if (valid) {
          if (this.id) {
            await this.$http.put(`rest/items/${this.id}`, this.model)
          } else {
            await this.$http.post('rest/items', this.model)
          }
          this.$router.push('/items/list')
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
    // 根据id查询物品
    async fetch() {
      const res = await this.$http.get(`rest/items/${this.id}`)
      this.model = res.data
    },
    // 上传图片
    afterUpload(res) {
      this.$set(this.model, 'icon', res.url)
      // this.model.icon = res.url
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的物品信息
    this.id && this.fetch()
  }
}
</script>

<style></style>
