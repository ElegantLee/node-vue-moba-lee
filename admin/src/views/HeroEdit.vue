<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form
      :model="model"
      :rules="rules"
      ref="HeroForm"
      label-width="120px"
      @submit.native.prevent="save"
    >
      <el-tabs value="basic" type="border-card">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item prop="name" label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item prop="avatar" label="图标">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img
                v-if="model.avatar"
                :src="model.avatar"
                class="avatar"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item prop="banner" label="Banner">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res => $set(model, 'banner', res.url)"
            >
              <img
                v-if="model.banner"
                :src="model.banner"
                class="avatar"
              />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item prop="title" label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item prop="categories" label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item of categories"
                :label="item.name"
                :value="item._id"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="items1" label="顺风出装">
            <el-select
              v-model="model.items1"
              multiple
              @change="bindItemsChange"
            >
              <el-option
                v-for="item of items"
                :label="item.name"
                :value="item._id"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="items2" label="逆风出装">
            <el-select
              v-model="model.items2"
              multiple
              @change="bindItemsChange"
            >
              <el-option
                v-for="item of items"
                :label="item.name"
                :value="item._id"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="usageTips" label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item prop="battleTips" label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item prop="teamTips" label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
          <el-form-item prop="difficult" label="难度">
            <el-rate
              v-model="model.scores.difficult"
              :max="10"
              show-score
              style="margin-top: 0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item prop="skills" label="技能">
            <el-rate
              v-model="model.scores.skills"
              :max="10"
              show-score
              style="margin-top: 0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item prop="attack" label="攻击">
            <el-rate
              v-model="model.scores.attack"
              :max="10"
              show-score
              style="margin-top: 0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item prop="survive" label="生存">
            <el-rate
              v-model="model.scores.survive"
              :max="10"
              show-score
              style="margin-top: 0.6rem"
            ></el-rate>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button type="text" @click="model.skills.push({})">
            <i class="el-icon-plus"></i>添加技能
          </el-button>
          <el-row type="felx" style="flex-wrap: wrap">
            <el-col
              :md="12"
              v-for="(item, index) in model.skills"
              :key="index"
            >
              <el-form-item
                :prop="'skills.' + index + '.name'"
                :rules="{required: true, message: '请输入技能名称', trigger: 'blur'}"
                label="名称"
              >
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item
                :prop="'skills.' + index + '.icon'"
                :rules="{required: true, message: '请上传技能图标', trigger: 'blur'}"
                label="图标"
              >
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="(res) => $set(item, 'icon', res.url)"
                >
                  <img
                    v-if="item.icon"
                    :src="item.icon"
                    class="avatar"
                  />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item
                :prop="'skills.' + index + '.delay'"
                :rules="{required: true, message: '请输入技能的冷却值', trigger: 'blur'}"
                label="冷却值"
              >
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item
                :prop="'skills.' + index + '.cost'"
                :rules="{required: true, message: '请输入技能的消耗', trigger: 'blur'}"
                label="消耗"
              >
                <el-input v-model="item.cost"></el-input>
              </el-form-item>
              <el-form-item
                :prop="'skills.' + index + '.description'"
                :rules="{required: true, message: '请输入技能描述', trigger: 'blur'}"
                label="描述"
              >
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item
                :prop="'skills.' + index + '.tips'"
                :rules="{required: true, message: '请输入技能小提示', trigger: 'blur'}"
                label="小提示"
              >
                <el-input v-model="item.tips" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  size="small"
                  type="danger"
                  @click="model.skills.splice(i, 1)"
                >删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button type="text" @click="model.partners.push({})">
            <i class="el-icon-plus"></i>添加
          </el-button>
          <el-row type="felx" style="flex-wrap: wrap">
            <el-col
              :md="12"
              v-for="(item, index) in model.partners"
              :key="index"
            >
              <el-form-item
                :prop="'partners.' + index + '.hero'"
                :rules="{required: true, message: '请选择最佳搭档', trigger: 'blur'}"
                label="英雄"
              >
                <el-select
                  filterable
                  v-model="model.partners[index].hero"
                >
                  <el-option
                    v-for="hero in heroes"
                    :key="hero._id"
                    :value="hero._id"
                    :label="hero.name"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                :prop="'partners.' + index + '.description'"
                :rules="{required: true, message: '请输入描述', trigger: 'blur'}"
                label="描述"
              >
                <el-input
                  v-model="model.partners[index].description"
                  type="textarea"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  size="small"
                  type="danger"
                  @click="model.partners.splice(index, 1)"
                >删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          style="margin-top: 5rem"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'HeroEdit',
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        name: '',
        avatar: '',
        nanner: '',
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        },
        skills: [],
        // TODO: 最佳搭档的option展示有问题
        partners: []
      },
      categories: [],
      items: [],
      heroes: [],
      rules: {
        name: [{ required: true, message: '请输入英雄名称', tigger: 'blur' }],
        avatar: [{ required: true, message: '请上传英雄头像', trigger: 'blur' }],
        banner: [{ required: true, message: '请上传英雄背景图', trigger: 'blur' }],
        title: [{ required: true, message: '请输入英雄称号', trigger: 'blur' }],
        categories: [{ required: true, message: '请至少选择一个英雄类型', trigger: 'change' }],
        items1: [{ required: true, message: '请选择顺风出装', trigger: 'change' }],
        items2: [{ required: true, message: '请选择逆风出装', trigger: 'change' }],
        usageTips: [{ required: true, message: '请输入使用技巧', trigger: 'blur' }],
        battleTips: [{ required: true, message: '请输对抗技巧', trigger: 'blur' }],
        teamTips: [{ required: true, message: '请输入团战思路', trigger: 'blur' }],
        difficult: [{ required: true, message: '请选择难度', trigger: 'blur' }],
        skills: [{ required: true, message: '请选择技能', trigger: 'blur' }],
        attack: [{ required: true, message: '请选择攻击', trigger: 'blur' }],
        survive: [{ required: true, message: '请选择生存', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 新建英雄
    async save() {
      this.$refs['HeroForm'].validate(async valid => {
        if (valid) {
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
        } else {
          this.$message({
            type: 'error',
            message: '表单信息不完整'
          })
          return false
        }
      })
    },
    bindItemsChange(items) {
      console.log(items)
      if (items.length !== 6) {
        this.$message({
          message: '最多只能选择6件装备',
          type: 'warning'
        })
      } else {
        this.$message({
          message: '已选择6件装备',
          type: 'success'
        })
      }
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
      this.categories = res.data.items
    },
    // 获取装备分类
    async fetchItems() {
      const res = await this.$http.get(`rest/items`)
      this.items = res.data.items
    },
    // 获取所有英雄
    async fetchHeroes() {
      const res = await this.$http.get(`rest/heroes`)
      this.heroes = res.data.items
    },
    // 上传英雄头像
    afterUpload(res) {
      this.$set(this.model, 'avatar', res.url)
      // this.model.icon = res.url
    }
  },
  created() {
    // 编辑操作时，查询当前编辑的英雄信息
    this.id && this.fetch()
    this.fetchCategories()
    this.fetchItems()
    this.fetchHeroes()
  }
}
</script>

<style>
</style>
