(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],p=0,u=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},n=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1337e371"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=r(t);var l=new Error;n=function(e){o.onerror=o.onload=null,clearTimeout(p);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,s[1](l)}i[t]=void 0}};var p=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var p=0;p<o.length;p++)e(o[p]);var d=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0972":function(t,e,s){},"114b":function(t,e,s){t.exports=s.p+"img/banner3.b3f462ce.jpg"},1399:function(t,e,s){"use strict";s("ef4a")},"21bb":function(t,e,s){"use strict";s("2dad")},"2dad":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=s("2877"),c={},o=Object(r["a"])(c,i,n,!1,null,null,null),l=o.exports,p=(s("78a7"),s("be35"),s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"bg-primary pt-3 pb-2"},[s("div",{staticClass:"nav nav-inverse pb-1 jc-around"},t._l(t.navItems,(function(e,a){return s("div",{key:e.name,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){t.active=a}}},[s("router-link",{staticClass:"nav-link",attrs:{tag:"div",to:"/"+e.uri}},[t._v(t._s(e.name))])],1)})),0)]),s("router-view")],1)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:s("cf05"),height:"35"}}),a("div",{staticClass:"px-2 flex-grow-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-grey-1 fs-sm"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],m={data:function(){return{active:0,navItems:[{name:"首页",uri:""},{name:"攻略中心",uri:"strategy"},{name:"赛事中心",uri:"match"},{name:"IP新游",uri:"ipng"}]}}},v=m,f=(s("a006"),Object(r["a"])(v,d,u,!1,null,null,null)),h=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("8d2d"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("6d52"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("a577"),alt:""}})]),a("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons bg-white mt-3 text-center pt-3 text-grey",class:{"nav-collapse":t.navCollapse}},[a("div",{staticClass:"nav-list d-flex flex-wrap"},t._l(t.spriteItems,(function(e,s){return a("div",{key:s,staticClass:"nav-item mb-3"},[a("a",{attrs:{href:e.url}},[a("i",{staticClass:"sprite",class:"sprite-"+e.positionName})]),a("div",{staticClass:"py-1 fs-sm"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"bg-light py-2",on:{click:function(e){t.navCollapse=!t.navCollapse}}},[a("i",{staticClass:"sprite sprite-sq mr-1"}),a("span",[t._v(t._s(t.navCollapse?"收起":"展开"))])])]),a("m-list-card",{attrs:{icon:"menu1",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/article/"+e._id}},[a("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-grow-1 text-dark text-ellipsis pr-2",staticStyle:{width:"0"}},[t._v(t._s(e.title))]),a("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("newsDate")(e.createdAt)))])])}))}}])}),a("m-list-card",{attrs:{icon:"card-hero",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap"},t._l(s.heroList,(function(e,s){return a("router-link",{key:s,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar}}),a("div",[t._v(t._s(e.name))])])})),1)]}}])}),a("m-list-card",{attrs:{sprite:"sprite-video",icon:"hero",title:"精彩视频",categories:t.videoCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap"},t._l(s.videoList,(function(e,s){return a("div",{key:s,staticClass:"p-2",staticStyle:{width:"50%"}},[a("a",{staticClass:"text-dark",attrs:{href:e.url,target:"_blank"}},[a("img",{staticClass:"w-100",attrs:{src:e.cover}}),a("div",{staticClass:"video-title pt-2"},[t._v(t._s(e.title))]),a("div",{staticClass:"d-flex jc-between p-2"},[a("span",[a("span",{staticClass:"sprite sprite-video"}),t._v(" "+t._s(e.fre)+" ")]),a("span",[t._v(t._s(t._f("videoDate")(e.date)))])])])])})),0)]}}])}),a("m-card",{attrs:{sprite:"sprite-bai",icon:"",title:"百态王者"}},[a("div",{staticClass:"btwz-icons bg-white text-center"},[a("div",{staticClass:"btwz-list d-flex flex-wrap"},[a("div",{staticClass:"btwz-item mt-1"},[a("a",{staticClass:"pt-1",attrs:{href:"https://wangzhe.recogame.com/wangzhe.html"}},[a("i",{staticClass:"sprite sprite-lywzk"})]),a("div",{staticClass:"pt-1 fs-sm"},[t._v("龙翼王者卡")])])])])])],1)},C=[],b=s("c7eb"),_=s("1da1"),w=s("5a0c"),x=s.n(w),y={filters:{newsDate:function(t){return x()(t).format("MM/DD")},videoDate:function(t){return x()(t).format("MM-DD")}},data:function(){return{swiperOption:{autoplay:{delay:2e3},pagination:{el:".pagination-home"}},spriteItems:[{name:"爆料站",url:"https://pvp.qq.com/m/m201706/coming/index.htm",positionName:"blz"},{name:"故事站",url:"https://pvp.qq.com/act/a20160510story/index.htm?ADTAG=PC.QrCode.TG",positionName:"gsz"},{name:"周边商城",url:"https://pvp.qq.com/mall/m",positionName:"zbsc"},{name:"体验服",url:"https://pvp.qq.com/cp/a20161116tyf/page01.htm",positionName:"tyf"},{name:"新人专区",url:"https://pvp.qq.com/m/m201606/goCenter.shtml",positionName:"xrzq"},{name:"荣耀传承",url:"https://pvp.qq.com/m/memory/index.shtml",positionName:"rycc"},{name:"王者营地",url:"https://image.ttwz.qq.com/wzry/wzryzs_download_4001.htm?ADTAG=mpvp.qq.com",positionName:"wzyd"},{name:"公众号",url:"https://game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90102708&appid=wx95a3a4d7c627e07d&url=https%3A%2F%2Fgame.weixin.qq.com%2Fcgi-bin%2Fh5%2Fstatic%2Fsubscribe%2Findex.html%3Fappid%3Dwx95a3a4d7c627e07d#wechat_redirect",positionName:"gzh"},{name:"版本介绍",url:"https://pvp.qq.com/cp/a20190320bbgxsmm/index.html",positionName:"bbjs"},{name:"对局环境",url:"https://pvp.qq.com/cp/a20190917station/index.html",positionName:"djhj"},{name:"IP共创计划",url:"https://pvp.qq.com/cp/a20210428ipgc",positionName:"IP"},{name:"创意互动营",url:"https://pvp.qq.com/m/hdy/p1/index.html",positionName:"cyhdy"}],newsCats:[],heroCats:[],videoCats:[],navCollapse:!1}},methods:{fetchNewsCats:function(){var t=this;return Object(_["a"])(Object(b["a"])().mark((function e(){var s;return Object(b["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:s=e.sent,t.newsCats=s.data;case 4:case"end":return e.stop()}}),e)})))()},fetchHeroCats:function(){var t=this;return Object(_["a"])(Object(b["a"])().mark((function e(){var s;return Object(b["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:s=e.sent,t.heroCats=s.data;case 4:case"end":return e.stop()}}),e)})))()},fetchVideoCats:function(){var t=this;return Object(_["a"])(Object(b["a"])().mark((function e(){var s;return Object(b["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("videoes/list");case 2:s=e.sent,t.videoCats=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchNewsCats(),this.fetchHeroCats(),this.fetchVideoCats()}},k=y,q=(s("21bb"),Object(r["a"])(k,g,C,!1,null,null,null)),j=q.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2 border-bottom text-blue"},[s("i",{staticClass:"iconfont icon-Back",on:{click:function(e){return t.$router.push("/")}}}),s("strong",{staticClass:"flex-grow-1"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-grey fs-xs"},[t._v("2022-06-09")])]),s("div",{staticClass:"px-3 article-body fs-xl",domProps:{innerHTML:t._s(t.model.body)}})]):t._e()},S=[],N={props:{id:{required:!0}},data:function(){return{model:null}},methods:{fetchArticles:function(){var t=this;return Object(_["a"])(Object(b["a"])().mark((function e(){var s;return Object(b["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchArticles()}},z=N,$=(s("1399"),Object(r["a"])(z,O,S,!1,null,null,null)),D=$.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("div",[a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:s("cf05"),height:"35"}})]),t._m(0),a("router-link",{staticClass:"text-white",attrs:{to:"/"}},[t._v("更多英雄 >")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white p-3 d-flex flex-column h-100 jc-end"},[a("div",[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),a("div",{staticClass:"d-flex jc-between ai-center"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center pt-2"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-attack"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-survive"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("router-link",{staticClass:"text-grey fs-sm",attrs:{tag:"span",to:"/"}},[t._v("皮肤：2 >")])],1)])]),a("div",[a("div",{staticClass:"bg-white px-3"},[a("div",{staticClass:"nav d-flex jc-around py-3 pb-2 border-bottom"},t._l(t.slideTitles,(function(e,s){return a("div",{key:e,staticClass:"nav-item",class:{active:t.active===s},on:{click:function(e){return t.$refs.heroSwiper.swiper.slideTo(s)}}},[a("div",{staticClass:"nav-link"},[t._v(t._s(e))])])})),0),a("swiper",{ref:"heroSwiper",on:{"slide-change":function(){return t.active=t.$refs.heroSwiper.swiper.realIndex}}},[a("swiper-slide",[a("div",[a("div",{staticClass:"p-3 bg-white border-bottom"},[a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"btn btn-lg flex-grow-1",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")]),a("router-link",{staticClass:"btn flex-grow-1 ml-2",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")])],1),a("div",{staticClass:"skills mt-4"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(e,s){return a("img",{key:e.name,staticClass:"skill-icon",class:{active:t.currentSkillIndex===s},attrs:{src:e.icon,width:"60",height:"60"},on:{click:function(e){t.currentSkillIndex=s}}})})),0),t.currentSkill?a("div",[a("div",{staticClass:"d-flex py-4"},[a("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"text-grey-1 ml-4"},[t._v(" (冷却值："+t._s(t.currentSkill.delay)+" 消耗："+t._s(t.currentSkill.cost)+") ")])]),a("p",[t._v(t._s(t.currentSkill.description))])]):t._e(),a("div",{staticClass:"border-bottom"}),a("p",{staticClass:"text-grey-1"},[t._v("小提示："+t._s(t.currentSkill.tips))])])]),a("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"menu1",title:"出装推荐"}},[a("div",{staticClass:"fs-xl"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items1,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"item-icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-sm"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"border-bottom"}),a("div",{staticClass:"fs-xl mt-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex jc-around text-center mt-3"},t._l(t.model.items2,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"item-icon",attrs:{src:e.icon}}),a("div",{staticClass:"fs-sm"},[t._v(t._s(e.name))])])})),0)]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"使用技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.usageTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"对抗技巧"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"团战思路"}},[a("p",{staticClass:"m-0"},[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"英雄关系"}},[a("div",{staticClass:"fs-xl"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(e){return a("div",{key:e.name,staticClass:"d-flex pt-4"},[a("img",{staticClass:"partner-icon",attrs:{src:e.hero.avatar,height:"50"}}),a("p",{staticClass:"flex-grow-1 m-0 ml-3"},[t._v(t._s(e.description))])])})),a("div",{staticClass:"border-bottom"})],2)],1)]),a("swiper-slide")],1)],1)])])]):t._e()},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-3 flex-grow-1 text-white"},[s("span",[t._v("王者荣耀")]),s("span",{staticClass:"fs-md ml-2"},[t._v("攻略站")])])}],P={props:{id:{required:!0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},data:function(){return{model:null,currentSkillIndex:0,slideTitles:["英雄初识","进阶攻略"],active:0}},methods:{fetchHeroInfo:function(){var t=this;return Object(_["a"])(Object(b["a"])().mark((function e(){var s;return Object(b["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/heroes/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchHeroInfo()}},T=P,E=(s("9234"),Object(r["a"])(T,A,I,!1,null,null,null)),F=E.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("d81f"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("8813"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("114b"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("8973"),alt:""}})]),a("div",{staticClass:"swiper-pagination pagination-strategy text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons bg-white mt-3 text-center pt-3 text-grey",class:{"nav-collapse":t.navCollapse}},[a("div",{staticClass:"nav-list d-flex flex-wrap"},t._l(t.spriteItems,(function(e,s){return a("div",{key:s,staticClass:"nav-item mb-3"},[a("a",{attrs:{href:e.url}},[a("i",{staticClass:"sprite",class:"sprite-"+e.positionName})]),a("div",{staticClass:"py-1 fs-sm"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"bg-light py-2",on:{click:function(e){t.navCollapse=!t.navCollapse}}},[a("i",{staticClass:"sprite sprite-sq mr-1"}),a("span",[t._v(t._s(t.navCollapse?"收起":"展开"))])])]),a("m-list-card",{attrs:{icon:"menu1",title:"新闻资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/article/"+e._id}},[a("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-grow-1 text-dark text-ellipsis pr-2",staticStyle:{width:"0"}},[t._v(t._s(e.title))]),a("span",{staticClass:"text-grey-1 fs-sm"},[t._v(t._s(t._f("newsDate")(e.createdAt)))])])}))}}])}),a("m-list-card",{attrs:{icon:"card-hero",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap"},t._l(s.heroList,(function(e,s){return a("router-link",{key:s,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar}}),a("div",[t._v(t._s(e.name))])])})),1)]}}])}),a("m-list-card",{attrs:{icon:"card-hero",title:"精彩视频",categories:t.videoCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap"},t._l(s.videoList,(function(e,s){return a("div",{key:s,staticClass:"p-2",staticStyle:{width:"50%"}},[a("a",{staticClass:"text-dark",attrs:{href:e.url,target:"_blank"}},[a("img",{staticClass:"w-100",attrs:{src:e.cover}}),a("div",{staticClass:"video-title pt-2"},[t._v(t._s(e.title))]),a("div",{staticClass:"d-flex jc-between p-2"},[a("span",[a("span",{staticClass:"sprite sprite-video"}),t._v(" "+t._s(e.fre)+" ")]),a("span",[t._v(t._s(t._f("videoDate")(e.date)))])])])])})),0)]}}])}),a("m-card",{attrs:{icon:"",title:"百态王者"}},[a("div",{staticClass:"btwz-icons bg-white text-center"},[a("div",{staticClass:"btwz-list d-flex flex-wrap"},[a("div",{staticClass:"btwz-item mt-1"},[a("a",{staticClass:"pt-1",attrs:{href:"https://wangzhe.recogame.com/wangzhe.html"}},[a("i",{staticClass:"sprite sprite-lywzk"})]),a("div",{staticClass:"pt-1 fs-sm"},[t._v("龙翼王者卡")])])])])])],1)},L=[],H={filters:{newsDate:function(t){return x()(t).format("MM/DD")},videoDate:function(t){return x()(t).format("MM-DD")}},data:function(){return{swiperOption:{autoplay:{delay:2e3},pagination:{el:".pagination-strategy"}},spriteItems:[{name:"爆料站",url:"https://pvp.qq.com/m/m201706/coming/index.htm",positionName:"blz"},{name:"故事站",url:"https://pvp.qq.com/act/a20160510story/index.htm?ADTAG=PC.QrCode.TG",positionName:"gsz"},{name:"周边商城",url:"https://pvp.qq.com/mall/m",positionName:"zbsc"},{name:"体验服",url:"https://pvp.qq.com/cp/a20161116tyf/page01.htm",positionName:"tyf"},{name:"新人专区",url:"https://pvp.qq.com/m/m201606/goCenter.shtml",positionName:"xrzq"},{name:"荣耀传承",url:"https://pvp.qq.com/m/memory/index.shtml",positionName:"rycc"},{name:"王者营地",url:"https://image.ttwz.qq.com/wzry/wzryzs_download_4001.htm?ADTAG=mpvp.qq.com",positionName:"wzyd"},{name:"公众号",url:"https://game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90102708&appid=wx95a3a4d7c627e07d&url=https%3A%2F%2Fgame.weixin.qq.com%2Fcgi-bin%2Fh5%2Fstatic%2Fsubscribe%2Findex.html%3Fappid%3Dwx95a3a4d7c627e07d#wechat_redirect",positionName:"gzh"},{name:"版本介绍",url:"https://pvp.qq.com/cp/a20190320bbgxsmm/index.html",positionName:"bbjs"},{name:"对局环境",url:"https://pvp.qq.com/cp/a20190917station/index.html",positionName:"djhj"},{name:"IP共创计划",url:"https://pvp.qq.com/cp/a20210428ipgc",positionName:"IP"},{name:"创意互动营",url:"https://pvp.qq.com/m/hdy/p1/index.html",positionName:"cyhdy"}],newsCats:[],heroCats:[],videoCats:[],navCollapse:!1}},methods:{fetchNewsCats:function(){var t=this;return Object(_["a"])(Object(b["a"])().mark((function e(){var s;return Object(b["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:s=e.sent,t.newsCats=s.data;case 4:case"end":return e.stop()}}),e)})))()},fetchHeroCats:function(){var t=this;return Object(_["a"])(Object(b["a"])().mark((function e(){var s;return Object(b["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:s=e.sent,t.heroCats=s.data;case 4:case"end":return e.stop()}}),e)})))()},fetchVideoCats:function(){var t=this;return Object(_["a"])(Object(b["a"])().mark((function e(){var s;return Object(b["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("videoes/list");case 2:s=e.sent,t.videoCats=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchNewsCats(),this.fetchHeroCats(),this.fetchVideoCats()}},G=H,V=(s("6ab3"),Object(r["a"])(G,M,L,!1,null,null,null)),U=V.exports;a["a"].use(p["a"]);var B=[{path:"/",name:"main",component:h,children:[{path:"/",name:"home",component:j},{path:"/strategy",name:"strategy",component:U},{path:"/article/:id",name:"article",component:D,props:!0}]},{path:"/heroes/:id",name:"hero",component:F,props:!0},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],R=new p["a"]({routes:B}),J=R,Q=s("7212"),K=s.n(Q),W=(s("dfa4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card bg-white p-3 mt-1"},[s("div",{staticClass:"card-header d-flex pb-3",class:{"border-bottom":!t.plain}},[t.sprite?s("i",{staticClass:"sprite",class:""+t.sprite}):s("i",{staticClass:"iconfont",class:"icon-"+t.icon}),t.plain?s("div",{staticClass:"fs-xl flex-grow-1 px-2"},[s("strong",[t._v(t._s(t.title))])]):s("div",{staticClass:"fs-xl flex-grow-1 px-2"},[t._v(" "+t._s(t.title)+" ")]),t.plain?t._e():s("i",{staticClass:"iconfont icon-menu"})]),s("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),X=[],Y={props:{title:{type:String,required:!0},icon:{type:String,required:!0},sprite:{type:String,required:!1},plain:{type:Boolean,required:!1}}},Z=Y,tt=(s("e60d"),Object(r["a"])(Z,W,X,!1,null,null,null)),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{sprite:t.sprite,icon:t.icon,title:t.title}},[s("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.$refs.list.swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0),s("div",{staticClass:"pt-3"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)])},at=[],it={props:{sprite:{type:String,required:!1},icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{active:0}}},nt=it,rt=Object(r["a"])(nt,st,at,!1,null,null,null),ct=rt.exports,ot=s("bc3a"),lt=s.n(ot);a["a"].use(K.a),a["a"].component("m-card",et),a["a"].component("m-list-card",ct),a["a"].config.productionTip=!1,a["a"].prototype.$http=lt.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),new a["a"]({router:J,render:function(t){return t(l)}}).$mount("#app")},"6ab3":function(t,e,s){"use strict";s("725e")},"6d52":function(t,e,s){t.exports=s.p+"img/slid2.f7f918b4.jpeg"},"725e":function(t,e,s){},"78a7":function(t,e,s){},"78c1":function(t,e,s){},8813:function(t,e,s){t.exports=s.p+"img/banner2.aaf9890d.png"},8973:function(t,e,s){t.exports=s.p+"img/banner4.6b90de61.jpg"},"8d2d":function(t,e,s){t.exports=s.p+"img/slid1.95433e3d.jpeg"},9234:function(t,e,s){"use strict";s("78c1")},a006:function(t,e,s){"use strict";s("0972")},a577:function(t,e,s){t.exports=s.p+"img/slid3.754079cc.jpeg"},be35:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.b3b3bca8.png"},d81f:function(t,e,s){t.exports=s.p+"img/banner1.b1ebe68d.png"},e60d:function(t,e,s){"use strict";s("e9ec")},e9ec:function(t,e,s){},ef4a:function(t,e,s){}});
//# sourceMappingURL=app.18b55f23.js.map