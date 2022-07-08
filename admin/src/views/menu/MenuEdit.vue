<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}侧边栏菜单</h1>
    <el-form
      :model="model"
      :rules="rules"
      ref="MenuForm"
      label-width="120px"
      @submit.native.prevent="save"
    >
      <el-form-item label="上一级菜单">
        <el-select
          v-model="model.parent"
          placeholder="一级菜单不选"
        >
          <el-option
            v-for="item in parents"
            :label="item.name"
            :value="item._id"
            :key="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="name" label="名称">
        <el-input v-model="model.name" placeholder="输入菜单名称"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-select
          clearable
          filterable
          v-model="model.icon"
          placeholder="选择图标（可选）"
        >
          <el-option
            v-for="icon in iconArr"
            :key="icon"
            :label="icon"
            :value="icon"
          >
            <i class="menu-icon" :class="icon"></i>
            <span>{{ icon }}</span>
          </el-option>
        </el-select>
        <el-switch
          style="display: inline-block; padding-left: 40px;"
          v-model="model.isShow"
          active-color="#409eff"
          inactive-color="#dcdfe6"
        ></el-switch>
      </el-form-item>
      <el-form-item prop="description" label="描述">
        <el-input type="textarea" v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import iconArr from '@/assets/js/iconArr'
export default {
  name: 'MenuEdit',
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      parents: [],
      iconArr,
      rules: {
        name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
        description: [{ required: true, message: '请输入菜单描述', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 新建侧边栏菜单
    async save() {
      this.$refs['MenuForm'].validate(async valid => {
        if (valid) {
          if (this.id) {
            await this.$http.put(`rest/menus/${this.id}`, this.model)
          } else {
            await this.$http.post('rest/menus', this.model)
          }
          this.$router.push('/menus/list')
          this.$message({
            type: 'success',
            message: '保存成功'
          })
        } else {
          this.$message({
            message: '表单信息不完整',
            type: 'error'
          })
          return false
        }
      })
    },
    // 根据id查询侧边栏菜单
    async fetch() {
      const res = await this.$http.get(`rest/menus/${this.id}`)
      this.model = res.data
    },
    // 根据id查询父级侧边栏菜单
    async fetchParents() {
      const res = await this.$http.get(`rest/menus`)
      this.parents = res.data.items
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的侧边栏菜单信息
    this.id && this.fetch()
    // 查询所有的父级侧边栏菜单信息
    this.fetchParents()
  }
}
</script>

<style scoped>
.menu-icon {
  font-size: 16px;
  vertical-align: -2px;
  margin-right: 8px;
}
</style>
