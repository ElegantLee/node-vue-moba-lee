<template>
  <div class="page-hero" v-if="model">
    <div>
      <div class="topbar bg-black py-2 px-3 d-flex ai-center">
        <router-link to="/">
          <img src="../assets/logo.png" height="35" />
        </router-link>
        <div class="px-3 flex-grow-1 text-white">
          <span>王者荣耀</span>
          <span class="fs-md ml-2">攻略站</span>
        </div>
        <!-- <button type="button" class="btn bg-primary">更多英雄</button> -->
        <router-link to="/" class="text-white">更多英雄 &gt;</router-link>
      </div>
      <!-- end of header -->
      <div class="top" :style="{'background-image': `url(${model.banner})`}">
        <div class="info text-white p-3 d-flex flex-column h-100 jc-end">
          <div>{{model.title}}</div>
          <h2 class="my-2">{{model.name}}</h2>
          <div class="fs-sm">{{model.categories.map(item => item.name).join('/')}}</div>
          <div class="d-flex jc-between ai-center">
            <div class="scores d-flex ai-center pt-2" v-if="model.scores">
              <span>难度</span>
              <span class="badge bg-primary">{{model.scores.difficult}}</span>
              <span>技能</span>
              <span class="badge bg-blue-1">{{model.scores.skills}}</span>
              <span>攻击</span>
              <span class="badge bg-attack">{{model.scores.attack}}</span>
              <span>生存</span>
              <span class="badge bg-survive">{{model.scores.survive}}</span>
            </div>
            <router-link tag="span" to="/" class="text-grey fs-sm">皮肤：2 &gt;</router-link>
          </div>
        </div>
      </div>
      <!-- end of banner -->
      <div>
        <div class="bg-white px-3">
          <div class="nav d-flex jc-around py-3 pb-2 border-bottom">
            <div
              v-for="(title, index) in slideTitles"
              :key="title"
              :class="{active: active === index}"
              class="nav-item"
              @click="$refs.heroSwiper.swiper.slideTo(index)"
            >
              <div class="nav-link">{{title}}</div>
            </div>
          </div>
          <swiper ref="heroSwiper" @slide-change="() => active = $refs.heroSwiper.swiper.realIndex">
            <swiper-slide>
              <div>
                <div class="p-3 bg-white border-bottom">
                  <div class="d-flex">
                    <router-link tag="button" to="/" class="btn btn-lg flex-grow-1">
                      <i class="iconfont icon-menu1"></i>
                      英雄介绍视频
                    </router-link>
                    <router-link tag="button" to="/" class="btn flex-grow-1 ml-2">
                      <i class="iconfont icon-menu1"></i>
                      英雄介绍视频
                    </router-link>
                  </div>

                  <!-- skills -->
                  <div class="skills mt-4">
                    <div class="d-flex jc-around">
                      <img
                        v-for="(item, index) in model.skills"
                        :key="item.name"
                        class="skill-icon"
                        :class="{active: currentSkillIndex===index}"
                        @click="currentSkillIndex = index"
                        :src="item.icon"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div v-if="currentSkill">
                      <div class="d-flex py-4">
                        <h3 class="m-0">{{currentSkill.name}}</h3>
                        <span class="text-grey-1 ml-4">
                          (冷却值：{{currentSkill.delay}}
                          消耗：{{currentSkill.cost}})
                        </span>
                      </div>
                      <p>{{ currentSkill.description }}</p>
                    </div>
                    <div class="border-bottom"></div>
                    <p class="text-grey-1">小提示：{{currentSkill.tips}}</p>
                  </div>
                  <!-- end of skill -->
                </div>
                <!-- end of whole skill -->
                <m-card plain icon="menu1" title="出装推荐" class="hero-items">
                  <div class="fs-xl">顺风出装</div>
                  <div class="d-flex jc-around text-center mt-3">
                    <div v-for="item in model.items1" :key="item.name">
                      <img :src="item.icon" class="item-icon" />
                      <div class="fs-sm">{{item.name}}</div>
                    </div>
                  </div>
                  <div class="border-bottom"></div>
                  <div class="fs-xl mt-3">逆风出装</div>
                  <div class="d-flex jc-around text-center mt-3">
                    <div v-for="item in model.items2" :key="item.name">
                      <img :src="item.icon" class="item-icon" />
                      <div class="fs-sm">{{item.name}}</div>
                    </div>
                  </div>
                </m-card>
                <m-card plain icon="menu1" title="使用技巧">
                  <p class="m-0">{{model.usageTips}}</p>
                </m-card>
                <m-card plain icon="menu1" title="对抗技巧">
                  <p class="m-0">{{model.battleTips}}</p>
                </m-card>
                <m-card plain icon="menu1" title="团战思路">
                  <p class="m-0">{{model.teamTips}}</p>
                </m-card>
                <m-card plain icon="menu1" title="英雄关系">
                  <div class="fs-xl">最佳搭档</div>
                  <div v-for="partner in model.partners" :key="partner.name" class="d-flex pt-4">
                    <img :src="partner.hero.avatar" class="partner-icon" height="50" />
                    <p class="flex-grow-1 m-0 ml-3">{{partner.description}}</p>
                  </div>

                  <div class="border-bottom"></div>
                </m-card>
              </div>
            </swiper-slide>
            <swiper-slide></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: 幻灯片切换
export default {
  props: {
    id: {
      required: true
    }
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex]
    }
  },
  data() {
    return {
      model: null,
      currentSkillIndex: 0,
      slideTitles: ['英雄初识', '进阶攻略'],
      active: 0
    }
  },
  methods: {
    async fetchHeroInfo() {
      const res = await this.$http.get(`/heroes/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetchHeroInfo()
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.5rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  .skills {
    img.skill-icon {
      width: 70px;
      height: 70px;
      border: 2px solid map-get($colors, 'white');
      border-radius: 45%;
      &.active {
        border-color: map-get($colors, 'primary');
      }
    }
  }

  .hero-items {
    .item-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
