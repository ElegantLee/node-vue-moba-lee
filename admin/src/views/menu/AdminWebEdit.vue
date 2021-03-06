<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}后台页面</h1>
    <el-form
      :model="model"
      :rules="rules"
      ref="AdminWebForm"
      label-width="120px"
      @submit.native.prevent="save"
    >
      <el-form-item prop="name" label="名称">
        <el-input v-model.trim="model.name" placeholder="以 页面 两个字结尾"></el-input>
      </el-form-item>
      <el-form-item prop="path" label="页面地址">
        <el-input v-model.trim="model.path" placeholder="输入页面的路由地址"></el-input>
      </el-form-item>
      <el-form-item prop="menu" label="所属菜单">
        <el-select
          filterable
          clearable
          v-model="model.menu"
          placeholder="一个菜单对应一个页面"
          @change="bindMenuChange"
        >
          <el-option
            v-for="item in menuList"
            :key="item._id"
            :label="item.name"
            :value="item._id"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="rights" label="页面权限">
        <el-select multiple v-model="model.rights" placeholder="选择权限">
          <el-option
            v-for="(method, methodName, index) in apiMethods"
            :key="'mds'+index"
            :label="methodName"
            :value="method"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="description" label="描述">
        <el-input
          type="textarea"
          v-model.trim="model.description"
          placeholder="描述"
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
  name: 'AdminWebEdit',
  props: {
    id: {}
  },
  computed: {
    menuList() {
      return this.menus.filter(menu => {
        if (menu.parent) {
          if (menu.parent.parent) {
            if (menu.page) {
              menu.disabled = true // 这个菜单项已经绑定了页面，不能选中
            }
            return menu
          }
        }
      })
    }
  },
  data() {
    return {
      model: {
        name: '',
        path: '',
        menu: '',
        rights: [],
        description: ''
      },
      menus: [],
      apiMethods: { '查看 GET': 'GET', '新增 POST': 'POST', '修改 PUT': 'PUT', '删除 DELETE': 'DELETE', '搜索 SEARCH': 'SEARCH' },
      rules: {
        name: [{ required: true, message: '请输入页面名称', trigger: 'blur' }],
        path: [{ required: true, message: '请输入页面的路由地址', trigger: 'blur' }],
        menu: [{ required: true, message: '请选择一个菜单', trigger: 'change' }],
        rights: [{ required: true, message: '请选择页面拥有的操作', trigger: 'change' }],
        description: [{ required: true, message: '请输入页面描述', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 新建页面权限
    async save() {
      this.$refs['AdminWebForm'].validate(async valid => {
        if (valid) {
          if (this.id) {
            await this.$http.put(`rest/admin_webs/${this.id}`, this.model)
          } else {
            if (this.model.menu.length === 0) {
              this.$message({
                message: '请选择一个菜单项',
                type: 'warning'
              })
              return false
            }
            await this.$http.post('rest/admin_webs', this.model)
          }
          this.$router.push('/admin_webs/list')
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
    bindMenuChange(menus) {
      if (menus.length !== 1) {
        this.$message({
          message: '只能选择一个菜单',
          type: 'warining'
        })
      }
    },
    // 根据id查询页面权限
    async fetch() {
      const res = await this.$http.get(`rest/admin_webs/${this.id}`)
      this.model = res.data
    },
    // 查询所有菜单项
    async fetchMenu() {
      const res = await this.$http.get(`rest/menus`)
      this.menus = res.data.items
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的页面权限信息
    this.id && this.fetch()
    // 查询所有的父级页面权限信息
    this.fetchMenu()
  }
}
</script>

<style>
</style>
