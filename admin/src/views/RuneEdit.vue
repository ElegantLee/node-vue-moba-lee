<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}铭文</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload class="avatar-uploader"
        :action="uploadUrl"
        :headers="getAuthHeaders()"
        :show-file-list="false"
        :on-success="afterUpload">
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
  name: 'RuneEdit',
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    // 新建铭文
    async save() {
      // let res = null; // eslint-disable-line
      if (this.id) {
        await this.$http.put(`rest/runes/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/runes', this.model)
      }
      this.$router.push('/runes/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 根据id查询铭文
    async fetch() {
      const res = await this.$http.get(`rest/runes/${this.id}`)
      this.model = res.data
    },
    // 上传图片
    afterUpload(res) {
      this.$set(this.model, 'icon', res.url)
      // this.model.icon = res.url
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的铭文信息
    this.id && this.fetch()
  }
}
</script>

<style></style>
