<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="skills" type="border-card">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="图标">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.avator" :src="model.avator" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option v-for="item of categories" :label="item.name" :value="item._id" :key="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option v-for="item of items" :label="item.name" :value="item._id" :key="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option v-for="item of items" :label="item.name" :value="item._id" :key="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate v-model="model.scores.difficult" :max="10" show-score style="margin-top: 0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate v-model="model.scores.skills" :max="10" show-score style="margin-top: 0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate v-model="model.scores.attack" :max="10" show-score style="margin-top: 0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate v-model="model.scores.survive" :max="10" show-score style="margin-top: 0.6rem"></el-rate>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button type="text" @click="model.skills.push({})">
            <i class="el-icon-plus"></i>添加技能
          </el-button>
          <el-row type="felx" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, i) in model.skills" :key="i">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :show-file-list="false"
                  :on-success="(res) => $set(item, 'icon', res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input v-model="item.tips" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.skills.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button type="primary" native-type="submit" style="margin-top: 5rem">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        name: '',
        avator: '',
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        },
        skills: []
      },
      categories: [],
      items: []
    }
  },
  methods: {
    // 新建英雄
    async save() {
      // let res = null; // eslint-disable-line
      if (this.id) {
        await this.$http.put(`rest/heroes/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/heroes', this.model)
      }
      this.$router.push('/heroes/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 根据id查询英雄
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`)
      // 直接赋值会覆盖model的字段
      this.model = Object.assign({}, this.model, res.data)
    },
    // 获取英雄分类
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    // 获取装备分类
    async fetchItems() {
      const res = await this.$http.get(`rest/items`)
      this.items = res.data
    },
    // 上传英雄头像
    afterUpload(res) {
      this.$set(this.model, 'avator', res.url)
      // this.model.icon = res.url
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的英雄信息
    this.id && this.fetch()
    this.fetchCategories()
    this.fetchItems()
  }
}
</script>

<style>

</style>
