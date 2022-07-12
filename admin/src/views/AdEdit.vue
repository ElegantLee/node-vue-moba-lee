<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}广告位</h1>
    <el-form
      :model="model"
      ref="AdForm"
      label-width="120px"
      @submit.native.prevent="save"
    >
      <el-form-item
        label="名称"
        prop="name"
        :rules="{ required: true, message: '请输入广告名称', trigger: 'blur' }"
      >
        <el-input v-model.trim="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button type="text" @click="model.items.push({})">
          <i class="el-icon-plus"></i>添加广告
        </el-button>
        <el-row type="felx" style="flex-wrap: wrap">
          <el-col
            :md="24"
            v-for="(item, index) in model.items"
            :key="index"
          >
            <el-form-item
              :prop="'items.' + index + '.url'"
              :rules="{ required: true, message: '请输入图片的跳转链接', trigger: 'blur' }"
              label="跳转链接(URL)"
            >
              <el-input v-model.trim="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top: 0.5rem">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="(res) => $set(item, 'image', res.url)"
              >
                <img
                  v-if="item.image"
                  :src="item.image"
                  class="avatar"
                />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button
                size="small "
                type="danger"
                @click="model.items.splice(index, 1)"
              >删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button
          type="primary"
          native-type="submit"
          style="margin-top: 1rem;"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AdEdit',
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        name: '',
        items: []
      }
    }
  },
  methods: {
    // 新建广告位
    save() {
      this.$refs['AdForm'].validate(async (valid) => {
        if (valid) {
          if (this.id) {
            await this.$http.put(`rest/ads/${this.id}`, this.model)
          } else {
            await this.$http.post('rest/ads', this.model)
          }
          this.$router.push('/ads/list')
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
    // 根据id查询广告位
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的广告位信息
    this.id && this.fetch()
  }
}
</script>

<style>
</style>

