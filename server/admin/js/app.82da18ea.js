(function(e){function t(t){for(var r,i,d=t[0],s=t[1],u=t[2],c=0,l=[];c<d.length;c++)i=d[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var d=n[i];0!==o[d]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o={app:0},a=[];function d(e){return s.p+"js/"+({Ad:"Ad",AdminUser:"AdminUser",AdminWeb:"AdminWeb",ApiRight:"ApiRight",Article:"Article",Category:"Category",Hero:"Hero",Item:"Item",Login:"Login","Menu~Role":"Menu~Role",Menu:"Menu",Role:"Role",Video:"Video"}[e]||e)+"."+{Ad:"8eb8f6d4",AdminUser:"38351cf8",AdminWeb:"8e153def",ApiRight:"b3ae7050",Article:"d1cd6ef0",Category:"e2b1fb18",Hero:"4c2fb23e",Item:"bdce41fc",Login:"cd595828","Menu~Role":"270d199e",Menu:"72581ec1",Role:"66a63875",Video:"a562ac9f","chunk-441ca384":"5c1d41dd"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={Login:1,Menu:1,Video:1,"chunk-441ca384":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({Ad:"Ad",AdminUser:"AdminUser",AdminWeb:"AdminWeb",ApiRight:"ApiRight",Article:"Article",Category:"Category",Hero:"Hero",Item:"Item",Login:"Login","Menu~Role":"Menu~Role",Menu:"Menu",Role:"Role",Video:"Video"}[e]||e)+"."+{Ad:"31d6cfe0",AdminUser:"31d6cfe0",AdminWeb:"31d6cfe0",ApiRight:"31d6cfe0",Article:"31d6cfe0",Category:"31d6cfe0",Hero:"31d6cfe0",Item:"31d6cfe0",Login:"a90ced0e","Menu~Role":"31d6cfe0",Menu:"d7fb9153",Role:"31d6cfe0",Video:"a0c17058","chunk-441ca384":"ea71daa3"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),d=0;d<a.length;d++){var u=a[d],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===o))return t()}var l=document.getElementsByTagName("style");for(d=0;d<l.length;d++){u=l[d],c=u.getAttribute("data-href");if(c===r||c===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[e],p.parentNode.removeChild(p),n(a)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=d(e);var l=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/admin/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"38c8":function(e,t,n){},"53aa":function(e,t,n){"use strict";n("ed7a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),i=n.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],d=(n("034f"),n("2877")),s={},u=Object(d["a"])(s,o,a,!1,null,null,null),c=u.exports,l=n("5f72"),p=n.n(l);n("0fae");i.a.use(p.a);n("d3b7"),n("3ca3"),n("ddb0"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("00b4"),n("d9e2"),n("159b"),n("b0c0");var m=n("6389"),h=n.n(m),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"100vh"}},[r("el-aside",{attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","unique-opened":"","background-color":"#252a40","text-color":"#fff","active-text-color":"#fdb933","default-active":e.$route.path}},e._l(e.menuData,(function(t,n){return r("el-submenu",{key:t._id,attrs:{index:n+1+""}},[r("template",{slot:"title"},[r("i",{class:t.icon}),e._v(" "+e._s(t.name)+" ")]),e._l(t.children,(function(t){return r("el-menu-item-group",{key:t._id},[r("template",{slot:"title"},[e._v(e._s(t.name))]),e._l(t.children,(function(t){return[t.menu.isShow?r("el-menu-item",{key:t._id,attrs:{index:t.path}},[e._v(e._s(t.name))]):e._e()]}))],2)}))],2)})),1)],1),r("el-container",[r("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[r("div",{staticClass:"logo-title"},[r("img",{attrs:{src:n("e159"),alt:"王者荣耀"}}),r("h2",{staticStyle:{padding:"12px"}},[e._v("王者荣耀后台管理系统")])]),r("el-dropdown",{on:{command:e.handleCommand}},[r("span",{staticClass:"el-dropdown-link",staticStyle:{color:"grey"}},[e._v(" "+e._s(e.adminUser.username)+" "),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"web"}},[e._v("前台")]),r("el-dropdown-item",{attrs:{command:"logout"}},[e._v("注销")]),r("el-dropdown-item",{attrs:{divided:"",command:"github"}},[e._v("github")])],1)],1)],1),r("el-main",[r("router-view",{key:e.$route.path})],1)],1)],1)},b=[],g=n("c7eb"),v=n("1da1"),A=(n("d81d"),n("e9c4"),n("ca00")),y={computed:{menuData:function(){var e=[];if(this.adminUser.adminWebs&&this.adminUser.adminWebs.length>0){var t=this.adminUser.adminWebs.map((function(e){return e.web}));e=Object(A["a"])(t)}return e}},data:function(){return{adminUser:{}}},methods:{handleCommand:function(e){"logout"===e?(localStorage.removeItem("token"),localStorage.removeItem("adminWebs"),this.$message({type:"success",message:"注销成功"}),this.$router.push("/login")):"web"===e?this.$router.push():"github"===e&&window.open("")},fetchAdminUserInfo:function(){var e=this;return Object(v["a"])(Object(g["a"])().mark((function t(){var n;return Object(g["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/user_info");case 2:n=t.sent,e.adminUser=n.data,sessionStorage.setItem("adminWebs",JSON.stringify(n.data.adminWebs)),L();case 6:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchAdminUserInfo()}},_=y,w=(n("53aa"),Object(d["a"])(_,f,b,!1,null,"0e0cb780",null)),R=w.exports;i.a.use(h.a);var E={"/categories/create":{path:"/categories/create",name:"CategoryCreate",component:function(){return n.e("Category").then(n.bind(null,"5821"))}},"/categories/list":{path:"/categories/list",name:"CategoryList",component:function(){return n.e("Category").then(n.bind(null,"5ec1"))}},"/categories/edit/:id":{path:"/categories/edit/:id",name:"CategoryEdit",props:!0,component:function(){return n.e("Category").then(n.bind(null,"5821"))}},"/items/create":{path:"/items/create",name:"ItemCreate",component:function(){return n.e("Item").then(n.bind(null,"f27d"))}},"/items/list":{path:"/items/list",name:"ItemList",component:function(){return n.e("Item").then(n.bind(null,"7773"))}},"/items/edit/:id":{path:"/items/edit/:id",name:"ItemEdit",props:!0,component:function(){return n.e("Item").then(n.bind(null,"f27d"))}},"/heroes/create":{path:"/heroes/create",name:"HeroCreate",component:function(){return n.e("Hero").then(n.bind(null,"f367"))}},"/heroes/list":{path:"/heroes/list",name:"HeroList",component:function(){return n.e("Hero").then(n.bind(null,"c8ef"))}},"/heroes/edit/:id":{path:"/heroes/edit/:id",name:"HeroEdit",props:!0,component:function(){return n.e("Hero").then(n.bind(null,"f367"))}},"/articles/create":{path:"/articles/create",name:"ArticleCreate",component:function(){return n.e("Article").then(n.bind(null,"04d0"))}},"/articles/list":{path:"/articles/list",name:"ArticleList",component:function(){return n.e("Article").then(n.bind(null,"7f05"))}},"/articles/edit/:id":{path:"/articles/edit/:id",name:"ArticleEdit",props:!0,component:function(){return n.e("Article").then(n.bind(null,"04d0"))}},"/videoes/create":{path:"/videoes/create",name:"VideoCreate",component:function(){return n.e("Video").then(n.bind(null,"b0b7"))}},"/videoes/list":{path:"/videoes/list",name:"VideoList",component:function(){return n.e("Video").then(n.bind(null,"f0d0"))}},"/videoes/edit/:id":{path:"/videoes/edit/:id",name:"VideoEdit",props:!0,component:function(){return n.e("Video").then(n.bind(null,"b0b7"))}},"/ads/create":{path:"/ads/create",name:"AdCreate",component:function(){return n.e("Ad").then(n.bind(null,"93b9"))}},"/ads/list":{path:"/ads/list",name:"AdList",component:function(){return n.e("Ad").then(n.bind(null,"c098"))}},"/ads/edit/:id":{path:"/ads/edit/:id",name:"AdEdit",props:!0,component:function(){return n.e("Ad").then(n.bind(null,"93b9"))}},"/roles/create":{path:"/roles/create",name:"RoleCreate",component:function(){return Promise.all([n.e("Menu~Role"),n.e("Role")]).then(n.bind(null,"d5a0"))}},"/roles/list":{path:"/roles/list",name:"RoleList",component:function(){return Promise.all([n.e("Menu~Role"),n.e("Role")]).then(n.bind(null,"26bf"))}},"/roles/edit/:id":{path:"/roles/edit/:id",name:"RoleEdit",props:!0,component:function(){return Promise.all([n.e("Menu~Role"),n.e("Role")]).then(n.bind(null,"d5a0"))}},"/menus/create":{path:"/menus/create",name:"MenuCreate",component:function(){return Promise.all([n.e("Menu~Role"),n.e("Menu")]).then(n.bind(null,"7877"))}},"/menus/list":{path:"/menus/list",name:"MenuList",component:function(){return Promise.all([n.e("Menu~Role"),n.e("Menu")]).then(n.bind(null,"e63d"))}},"/menus/edit/:id":{path:"/menus/edit/:id",name:"MenuEdit",props:!0,component:function(){return Promise.all([n.e("Menu~Role"),n.e("Menu")]).then(n.bind(null,"7877"))}},"/admin_webs/create":{path:"/admin_webs/create",name:"AdminWebCreate",component:function(){return n.e("AdminWeb").then(n.bind(null,"ffcc"))}},"/admin_webs/list":{path:"/admin_webs/list",name:"AdminWebList",component:function(){return n.e("AdminWeb").then(n.bind(null,"9b93"))}},"/admin_webs/edit/:id":{path:"/admin_webs/edit/:id",name:"AdminWebEdit",props:!0,component:function(){return n.e("AdminWeb").then(n.bind(null,"ffcc"))}},"/api_rights/create":{path:"/api_rights/create",name:"ApiRightCreate",component:function(){return n.e("ApiRight").then(n.bind(null,"407d"))}},"/api_rights/list":{path:"/api_rights/list",name:"ApiRightList",component:function(){return n.e("ApiRight").then(n.bind(null,"c942"))}},"/api_rights/edit/:id":{path:"/api_rights/edit/:id",name:"ApiRightEdit",props:!0,component:function(){return n.e("ApiRight").then(n.bind(null,"407d"))}},"/admin_users/create":{path:"/admin_users/create",name:"AdminUserCreate",component:function(){return n.e("AdminUser").then(n.bind(null,"8f91"))}},"/admin_users/list":{path:"/admin_users/list",name:"AdminUserList",component:function(){return n.e("AdminUser").then(n.bind(null,"355a"))}},"/admin_users/edit/:id":{path:"/admin_users/edit/:id",name:"AdminUserEdit",props:!0,component:function(){return n.e("AdminUser").then(n.bind(null,"8f91"))}}},C=[{path:"/login",name:"login",component:function(){return n.e("Login").then(n.bind(null,"a55b"))},meta:{isPublic:!0}},{path:"/",name:"main",component:R},{path:"*",name:"NotFound",component:function(){return n.e("chunk-441ca384").then(n.bind(null,"9703"))}}],S=new h.a({routes:C});function L(){if(sessionStorage.token&&sessionStorage.adminWebs){var e=0,t=S.options.routes;t.forEach((function(t,n){"/"===t.path&&"main"===t.name&&(e=n)}));var n=JSON.parse(sessionStorage.getItem("adminWebs"));t[e].children=[],n.forEach((function(n){var r=E[n.web.path];r&&(r.meta={rights:n.rights},t[e].children.push(r))})),S.$addRoutes(t)}}S.beforeEach((function(e,t,n){if(e.meta.isPublic||sessionStorage.token)if(e.params.id&&t.meta.rights){var r=new RegExp("/edit"+e.params.id,"i");if(r.test(e.path)&&-1===t.meta.rights.indexOf("PUT"))return i.a.prototype.$alert("没有编辑权限","错误",{type:"error"}),Promise.reject(new Error("无权限进行此操作"));n()}else n();else i.a.prototype.$message({type:"error",message:"请先登录"}),n("/login")})),S.$addRoutes=function(e){S.matcher=(new h.a).matcher,S.addRoutes(e)},L();var M=S,U=n("bc3a"),x=n.n(U),P=x.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});P.interceptors.request.use((function(e){return sessionStorage.token&&(e.headers.Authorization="Bearer "+(sessionStorage.token||"")),e}),(function(e){return Promise.reject(e)})),P.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&i.a.prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&M.push("/login"),Promise.reject(e)}));var k=P;n("38c8");i.a.config.productionTip=!1,i.a.prototype.$http=k,i.a.mixin({computed:{uploadUrl:function(){return k.defaults.baseURL+"/upload"}},methods:{getAuthHeaders:function(){return{Authorization:"Bearer ".concat(sessionStorage.token||"")}}}}),i.a.directive("permission",{inserted:function(e,t){var n=M.currentRoute.meta.rights,r=t.value,i=r.action,o=r.effect;n&&-1===n.indexOf(i.toUpperCase())&&("disabled"===o?(e.disabled=!0,e.querySelector("input")&&(e.querySelector("input").disabled=!0),e.querySelector("button")&&(e.querySelector("button").disabled=!0),e.title="无操作权限",e.classList.add("is-disabled")):e.parentNode.removeChild(e))}}),new i.a({router:M,render:function(e){return e(c)}}).$mount("#app")},"5f72":function(e,t){e.exports=ELEMENT},6389:function(e,t){e.exports=VueRouter},"6c81":function(e,t){e.exports=Quill},"85ec":function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},ca00:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b0c0"),n("d81d"),n("d3b7"),n("159b"),n("a9e3");var r={GET:"获取数据",POST:"新增操作",PUT:"修改操作",DELETE:"删除操作",SEARCH:"搜索操作"};function i(e,t){return e.type="page",t&&(e.label=e.name,e.id=e._id,e.children=e.rights.map((function(t){return{id:t+"-"+e._id,label:t,type:"right",right:t,parentId:e._id,desc:r[t]}}))),e}function o(e,t){var n=[],r=[];e.forEach((function(e){e.menu?n.push(e):r.push(e)}));var o={},a=n.reduce((function(e,t){var n=t.menu.parent.parent;return o[n._id]||(o[n._id]=!0,e.push(n)),e}),new Array),d=n.reduce((function(e,t){var n=t.menu.parent;return o[n._id]||(o[n._id]=!0,e.push({_id:n._id,name:n.name,parentId:n.parent._id})),e}),new Array),s=a.map((function(e,r){return t&&(e.label=e.name+"分类",e.id=r+1),e.type="category",e.children=[],d.forEach((function(r,o){t&&(r.label=r.name+"分组",r.id=Number(e.id+"00"+(o+1))),r.type="group",r.children=[],n.forEach((function(e){e=i(e,t),e.menu.parent._id===r._id&&r.children.push(e)})),r.parentId===e._id&&e.children.push(r)})),e}));if(r.length>0&&t){var u={id:99999,label:"无菜单页面分类",type:"category",children:[]};r.forEach((function(e){e=i(e,t),u.children.push(e)})),s.push(u)}return s}},e159:function(e,t,n){e.exports=n.p+"img/logo1.d555ce04.png"},ed7a:function(e,t,n){}});
//# sourceMappingURL=app.82da18ea.js.map