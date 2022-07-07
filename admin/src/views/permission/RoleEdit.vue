<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}角色</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称" prop="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input type="textarea" v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-tabs type="border-card">
          <el-tab-pane label="权限">
            <div class="d-flex" style="padding: 0 20 px;">
              <div class="flex-grow">
                <h4>前端界面权限：</h4>
                <el-tree
                  :data="adminWebTreeData"
                  show-checkbox
                  node-key="id"
                  :indent="44"
                  :expand-on-click-node="false"
                  :check-on-click-node="true"
                  :default-expand-all="1 ? true : false"
                  :default-expanded-keys="[]"
                  :default-checked-keys="defaultAdminWebCheckedKeys"
                  ref="webTree"
                  class="right-tree"
                  @check="clickWebTree"
                >
                  <template v-slot="{ data }">
                    <span
                      class="tree-item cate"
                      v-if="data.type=='category'"
                    >
                      <el-tag type="info">{{data.label}}</el-tag>
                    </span>
                    <span
                      class="tree-item"
                      v-else-if="data.type=='right'"
                    >
                      <el-tag
                        :type="methodType[data.right]"
                        class="method"
                      >{{data.right}}</el-tag>
                      <span>{{data.desc}}</span>
                    </span>
                    <span
                      class="tree-item"
                      v-else-if="data.type =='page'"
                    >
                      <el-tag
                        type="info"
                      >{{data.label.replace('页面', '')}}</el-tag>
                      <span
                        style="color: #606266;margin-left: -5px;"
                      >页面</span>
                    </span>
                    <span
                      class="tree-item"
                      v-else-if="data.type =='group'"
                    >
                      <el-tag class="group" type="info">{{data.name}}</el-tag>
                      <span
                        style="color: #606266;margin-left: -5px;"
                      >分组</span>
                    </span>
                  </template>
                </el-tree>
              </div>

              <div class="flex-grow">
                <h4>API接口权限：</h4>
                <el-tree
                  :data="apiRightTreeData"
                  show-checkbox
                  node-key="id"
                  :indent="44"
                  :expand-on-click-node="false"
                  :check-on-click-node="true"
                  :default-expand-all="1 ? true : false"
                  :default-expanded-keys="[]"
                  :default-checked-keys="defaultApiRightCheckedKeys"
                  class="right-tree"
                  ref="apiTree"
                  @check="clickApiTree"
                >
                  <template v-slot="{ data }">
                    <span
                      class="tree-item cate"
                      v-if="data.type == 'category'"
                    >
                      <el-tag type="info">{{data.name}}</el-tag>
                    </span>
                    <span
                      class="tree-item"
                      v-else-if="data.type == 'right'"
                    >
                      <el-tag
                        :type="methodType[data.right]"
                        class="method"
                      >{{data.right}}</el-tag>
                      <span>{{data.desc}}</span>
                    </span>
                    <span class="tree-item" v-else>
                      <el-tag type="info">{{data.path}}</el-tag>
                      <span
                        style="color: #606266;margin-left: -5px;"
                      >接口</span>
                    </span>
                  </template>
                </el-tree>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { makeWebTree } from '@/utils/util.js'
export default {
  name: 'RoleEdit',
  props: {
    id: {}
  },
  computed: {
    /* 树形数据(逐级嵌套) */
    apiRightTreeData() {
      let data = []
      const obj = {}
      const uniqueCate = this.apiRights.reduce((arr, apiRight) => {
        let cate = apiRight.category
        // 找到唯一的分类
        if (!obj[cate._id]) {
          obj[cate._id] = true
          arr.push(cate)
        }
        return arr
      }, new Array())

      data = uniqueCate.map((cate, index) => {
        // 设置每个分类的信息
        cate.id = index + 1
        cate.label = cate.name
        cate.type = 'category'
        cate.children = []
        // 找到属于这个分类的apiRight
        this.apiRights.forEach(api => {
          if (api.category._id === cate._id) {
            api.id = api._id
            api.label = api.path + ' ' + '接口'
            api.type = 'url'
            api.children = []
            // 将请求方法名称与请求描述对应起来
            const methodDesc = api.description.split('、') // description需要与methods一一对应
            api.methods.forEach((method, index) => {
              api.children.push({
                label: method + ' ' + methodDesc[index],
                id: method + '-' + api._id,
                type: 'right',
                right: method,
                desc: methodDesc[index],
                parentId: api._id
              })
            })
            cate.children.push(api)
          }
        })
        return cate
      })
      return data
    },
    adminWebTreeData() {
      let data = []
      if (this.adminWebs.length > 0) {
        data = makeWebTree(this.adminWebs, true)
      }
      return data
    }
  },
  data() {
    return {
      model: {}, // role对象
      apiRights: [], // 所有的api权限数据
      adminWebs: [], // 所有的页面权限数据
      defaultProps: {
        // ElementUI树形组件的配置
        children: 'children',
        label: 'label'
      },
      methodType: {
        // ELementUI的tag组件，不同颜色tag与角色权限的映射表
        POST: 'success',
        PUT: 'warning',
        DELETE: 'danger'
      },
      defaultAdminWebCheckedKeys: [], // 编辑角色时，存储角色已有的权限数据
      defaultApiRightCheckedKeys: []
    }
  },
  methods: {
    // 新建角色
    async save() {
      // let res = null; // eslint-disable-line
      if (this.id) {
        await this.$http.put(`rest/roles/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/roles', this.model)
      }
      this.$router.push('/roles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 根据id查询角色
    async fetch() {
      const res = await this.$http.get(`rest/roles/${this.id}`)
      this.model = res.data
    },
    // 查询所有的接口权限
    async fetchApiRights() {
      const res = await this.$http.get(`rest/api_rights`)
      this.apiRights = res.data.items
    },
    // 查询所有的页面数据
    async fetchAdminWebs() {
      const res = await this.$http.get(`rest/admin_webs`)
      this.adminWebs = res.data.items
    },
    clickWebTree(node, tree) {
      // eslint-disable-line no-unused-vars
      const { checkedNodes } = tree
      this.model.adminWebs = [...this.checkTree(checkedNodes, 'web')]
    },
    clickApiTree(node, tree) {
      // eslint-disable-line no-unused-vars
      const { checkedNodes } = tree
      this.model.apiRights = [...this.checkTree(checkedNodes, 'url')]
    },
    checkTree(arr, key) {
      const rightNodes = arr.filter(item => item.type === 'right') // 已经选中的所有权限节点
      const obj = {}
      // console.log(key)
      // console.log(rightNodes)
      // 记录权限节点与对应的页面id
      rightNodes.forEach(item => {
        if (obj[item.parentId]) {
          obj[item.parentId].push(item.right)
        } else {
          obj[item.parentId] = [item.right]
        }
      })

      // console.log(obj)

      const data = []
      // 封装成adminWeb数据，即角色拥有的页面访问权限
      for (const [pageId, rights] of Object.entries(obj)) {
        const adminWeb = {
          rights: rights
        }
        adminWeb[key] = pageId
        // console.log(adminWeb)
        data.push(adminWeb)
      }
      // console.log(data)
      return data
    },
    // （编辑）获取已经有的权限
    getDefaultTreeCheckedKeys(arr, key) {
      const tree = key === 'web' ? this.$refs.webTree : this.$refs.apiTree
      // console.log(tree)
      // console.log(tree.getNode(arr[0][key]))
      return arr.reduce((res, item) => {
        let node = tree.getNode(item[key])
        if (node) {
          item.rights.forEach(right => {
            node.data.children.forEach(item => {
              if (right === item.right) {
                res.push(item.id)
              }
            })
          })
        }
        return res
      }, new Array())
    },
    getDefaultAdminWebCheckedKeys() {
      if (this.id && this.model.adminWebs) {
        return this.getDefaultTreeCheckedKeys(this.model.adminWebs, 'web')
      } else {
        return []
      }
    },
    getDefaultApiRightCheckedKeys() {
      if (this.id && this.model.adminWebs) {
        return this.getDefaultTreeCheckedKeys(this.model.apiRights, 'url')
      } else {
        return []
      }
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的角色信息
    this.id && this.fetch()
    // 查询接口权限和界面列表
    this.fetchApiRights()
    this.fetchAdminWebs()
  },
  mounted () {
    this.id && setTimeout(() => {
      this.defaultAdminWebCheckedKeys = [...this.getDefaultAdminWebCheckedKeys()]
      this.defaultApiRightCheckedKeys = [...this.getDefaultApiRightCheckedKeys()]
    }, 500)
  }
}
</script>

<style>
</style>
