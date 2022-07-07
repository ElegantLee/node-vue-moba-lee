<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="model.role">
          <el-option v-for="role in roles" :key="role._id" :label="role.name" :value="role._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AdminUserEdit',
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      roles: []
    }
  },
  methods: {
    // 新建管理员
    async save() {
      // let res = null; // eslint-disable-line
      if (this.id) {
        await this.$http.put(`rest/admin_users/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/admin_users', this.model)
      }
      this.$router.push('/admin_users/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 根据id查询管理员
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`)
      this.model = res.data
    },
    async fetchRoles() {
      const roles = await this.$http.get('rest/roles')
      this.roles = roles.data.items
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的管理员信息
    this.id && this.fetch()
    this.fetchRoles()
  }
}
</script>

<style>
</style>
