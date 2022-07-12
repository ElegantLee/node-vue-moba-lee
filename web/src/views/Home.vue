<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img class="w-100" src="../assets/images/slid1.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/slid2.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/slid3.jpeg" alt />
      </swiper-slide>
      <!-- Optional controls -->
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-1"
        slot="pagination"
      ></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    <!-- end of swiper -->
    <div
      class="nav-icons bg-white mt-3 text-center pt-3 text-grey"
      :class="{ 'nav-collapse': navCollapse}"
    >
      <div class="nav-list d-flex flex-wrap">
        <div
          class="nav-item mb-3"
          v-for="(spriteItem, index) in spriteItems"
          :key="index"
        >
          <a :href="spriteItem.url">
            <i
              class="sprite"
              :class="`sprite-${spriteItem.positionName}`"
            ></i>
          </a>
          <div class="py-1 fs-sm">{{spriteItem.name}}</div>
        </div>
      </div>
      <div class="bg-light py-2" @click="navCollapse=!navCollapse">
        <i class="sprite sprite-sq mr-1"></i>
        <span>{{navCollapse ? '收起': '展开'}}</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{ category }">
        <router-link
          v-for="(news, index) in category.newsList"
          :key="index"
          tag="div"
          :to="`/article/${news._id}`"
          class="py-2 fs-lg d-flex"
        >
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span
            class="flex-grow-1 text-dark text-ellipsis pr-2"
            style="width: 0"
          >{{ news.title }}</span>
          <span
            class="text-grey-1 fs-sm"
          >{{ news.createdAt | newsDate }}</span>
        </router-link>
      </template>
    </m-list-card>
    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{ category }">
        <div class="d-flex flex-wrap">
          <router-link
            v-for="(hero, index) in category.heroList"
            :key="index"
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="p-2 text-center"
            style="width: 20%"
          >
            <img :src="hero.avatar" class="w-100" />
            <div>{{ hero.name }}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <m-list-card
      sprite="sprite-video"
      icon="hero"
      title="精彩视频"
      :categories="videoCats"
    >
      <template #items="{ category }">
        <div class="d-flex flex-wrap">
          <div
            v-for="(video, index) in category.videoList"
            :key="index"
            class="p-2"
            style="width: 50%"
          >
            <a :href="video.url" target="_blank" class="text-dark">
              <img :src="video.cover" class="w-100" />
              <div class="video-title pt-2">{{ video.title }}</div>
              <div class="d-flex jc-between p-2">
                <span>
                  <span class="sprite sprite-video"></span>
                  {{video.fre}}
                </span>
                <span>{{video.date | videoDate}}</span>
              </div>
            </a>
          </div>
        </div>
      </template>
    </m-list-card>
    <m-card sprite="sprite-bai" icon title="百态王者">
      <div class="btwz-icons bg-white text-center">
        <div class="btwz-list d-flex flex-wrap">
          <div class="btwz-item mt-1">
            <a
              href="https://wangzhe.recogame.com/wangzhe.html"
              class="pt-1"
            >
              <i class="sprite sprite-lywzk"></i>
            </a>
            <div class="pt-1 fs-sm">龙翼王者卡</div>
          </div>
        </div>
      </div>
    </m-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    newsDate(val) {
      return dayjs(val).format('MM/DD')
    },
    videoDate(val) {
      return dayjs(val).format('MM-DD')
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2000
        },
        pagination: {
          el: '.pagination-home'
        }
      },
      spriteItems: [
        { name: '爆料站', url: 'https://pvp.qq.com/m/m201706/coming/index.htm', positionName: 'blz' },
        { name: '故事站', url: 'https://pvp.qq.com/act/a20160510story/index.htm?ADTAG=PC.QrCode.TG', positionName: 'gsz' },
        { name: '周边商城', url: 'https://pvp.qq.com/mall/m', positionName: 'zbsc' },
        { name: '体验服', url: 'https://pvp.qq.com/cp/a20161116tyf/page01.htm', positionName: 'tyf' },
        { name: '新人专区', url: 'https://pvp.qq.com/m/m201606/goCenter.shtml', positionName: 'xrzq' },
        { name: '荣耀传承', url: 'https://pvp.qq.com/m/memory/index.shtml', positionName: 'rycc' },
        { name: '王者营地', url: 'https://image.ttwz.qq.com/wzry/wzryzs_download_4001.htm?ADTAG=mpvp.qq.com', positionName: 'wzyd' },
        {
          name: '公众号',
          url: 'https://game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90102708&appid=wx95a3a4d7c627e07d&url=https%3A%2F%2Fgame.weixin.qq.com%2Fcgi-bin%2Fh5%2Fstatic%2Fsubscribe%2Findex.html%3Fappid%3Dwx95a3a4d7c627e07d#wechat_redirect',
          positionName: 'gzh'
        },
        { name: '版本介绍', url: 'https://pvp.qq.com/cp/a20190320bbgxsmm/index.html', positionName: 'bbjs' },
        { name: '对局环境', url: 'https://pvp.qq.com/cp/a20190917station/index.html', positionName: 'djhj' },
        { name: 'IP共创计划', url: 'https://pvp.qq.com/cp/a20210428ipgc', positionName: 'IP' },
        { name: '创意互动营', url: 'https://pvp.qq.com/m/hdy/p1/index.html', positionName: 'cyhdy' }
      ],
      newsCats: [],
      heroCats: [],
      videoCats: [],
      navCollapse: false // 展开
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    },
    async fetchVideoCats() {
      const res = await this.$http.get('videoes/list')
      this.videoCats = res.data
    }
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroCats()
    this.fetchVideoCats()
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
.pagination-home {
  .swiper-pagination-bullet {
    border-radius: 0.1538rem;
    opacity: 1;
    background-color: map-get($colors, 'white');
    &.swiper-pagination-bullet-active {
      background-color: map-get($colors, 'info');
    }
  }
}

.nav-icons {
  .nav-list {
    width: 100%;
    height: 4rem;
    overflow-x: auto;
    overflow-y: hidden;
    transition: height 0.2s;
  }
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
    // $:nth-last-child()
  }
  &.nav-collapse {
    .nav-list {
      height: 16rem;
    }
    .sprite-sq {
      transform: rotate(360deg);
    }
  }
}

.video-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btwz-list {
  .btwz-item {
    width: 25%;
    border-right: 1px solid $border-color;
  }
}
</style>
