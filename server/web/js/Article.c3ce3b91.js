(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Article"],{1399:function(t,e,s){"use strict";s("ef4a")},"3ad6":function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex py-3 px-2 border-bottom text-blue"},[s("i",{staticClass:"iconfont icon-Back",on:{click:function(e){return t.$router.push("/")}}}),s("strong",{staticClass:"flex-grow-1"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-grey fs-xs"},[t._v("2022-06-09")])]),s("div",{staticClass:"px-3 article-body fs-xl",domProps:{innerHTML:t._s(t.model.body)}})]):t._e()},n=[],a=s("c7eb"),r=s("1da1"),i={props:{id:{required:!0}},data:function(){return{model:null}},methods:{fetchArticles:function(){var t=this;return Object(r["a"])(Object(a["a"])().mark((function e(){var s;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchArticles()}},o=i,l=(s("1399"),s("2877")),u=Object(l["a"])(o,c,n,!1,null,null,null);e["default"]=u.exports},ef4a:function(t,e,s){}}]);
//# sourceMappingURL=Article.c3ce3b91.js.map