(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Hero"],{"14c3":function(e,t,r){var a=r("da84"),s=r("c65b"),n=r("825a"),i=r("1626"),l=r("c6b6"),o=r("9263"),c=a.TypeError;e.exports=function(e,t){var r=e.exec;if(i(r)){var a=s(r,e,t);return null!==a&&n(a),a}if("RegExp"===l(e))return s(o,e,t);throw c("RegExp#exec called on incompatible receiver")}},"466d":function(e,t,r){"use strict";var a=r("c65b"),s=r("d784"),n=r("825a"),i=r("50c4"),l=r("577e"),o=r("1d80"),c=r("dc4a"),u=r("8aa5"),m=r("14c3");s("match",(function(e,t,r){return[function(t){var r=o(this),s=void 0==t?void 0:c(t,e);return s?a(s,t,r):new RegExp(t)[e](l(r))},function(e){var a=n(this),s=l(e),o=r(t,a,s);if(o.done)return o.value;if(!a.global)return m(a,s);var c=a.unicode;a.lastIndex=0;var p,d=[],f=0;while(null!==(p=m(a,s))){var h=l(p[0]);d[f]=h,""===h&&(a.lastIndex=u(s,i(a.lastIndex),c)),f++}return 0===f?null:d}]}))},8568:function(e,t,r){"use strict";var a=r("c7eb"),s=r("1da1"),n=(r("ac1f"),r("466d"),r("99af"),r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{staticClass:"d-flex jc-between"},[r("el-form-item",{staticClass:"el-form-search-item d-flex"},[r("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},on:{change:function(t){return e.$emit("keywordChange",t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.searchFetch("search")}},slot:"append"})],1),r("el-button",{attrs:{title:"刷新",icon:"el-icon-refresh-left"},on:{click:function(t){return e.searchFetch("refresh")}}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.$router.push("/"+e.modelName+"/create")}}},[e._v("添加")]),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{action:"DELETE",effect:"disabled"},expression:"{action: 'DELETE', effect: 'disabled'}"}],attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.removeMany}},[e._v("批量删除")])],1)],1)}),i=[],l=(r("a9e3"),{name:"ListForm",props:{modelName:{required:!0,type:String},currentPage:{required:!0,type:Number},size:{required:!0,type:Number},selectionList:{required:!0,type:Array},removeMany:{required:!0,type:Function}},data:function(){return{keyword:""}},methods:{searchFetch:function(e){var t=this;return Object(s["a"])(Object(a["a"])().mark((function r(){var s,n;return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("search"!==e){r.next=11;break}if(!t.keyword){r.next=8;break}return r.next=4,t.$http.get("rest/".concat(t.modelName,"?page=").concat(t.currentPage,"&size=").concat(t.size).concat(t.keyword?"&search="+t.keyword:""));case 4:s=r.sent,t.$emit("searchData",s.data.items),r.next=9;break;case 8:t.$message({message:"请输入搜索关键字",type:"warning"});case 9:r.next=16;break;case 11:if("refresh"!==e){r.next=16;break}return r.next=14,t.$http.get("rest/".concat(t.modelName,"?page=").concat(t.currentPage,"&size=").concat(t.size).concat(t.keyword?"&search="+t.keyword:""));case 14:n=r.sent,t.$emit("searchData",n.data.items);case 16:case"end":return r.stop()}}),r)})))()}}}),o=l,c=r("2877"),u=Object(c["a"])(o,n,i,!1,null,null,null),m=u.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.editBtnPermission,expression:"editBtnPermission"}],attrs:{type:"primary",size:"small"},on:{click:function(t){return e.$router.push("/"+e.modelName+"/edit/"+e.row._id)}}},[e._v("编辑")]),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.deleteBtnPermission,expression:"deleteBtnPermission"}],attrs:{type:"danger",size:"small"},on:{click:function(t){return e.removeOne(e.row)}}},[e._v("删除")])],1)},d=[],f={name:"ListOptionBtn",props:{modelName:{type:String,required:!0},row:{type:Object,required:!0},removeOne:{type:Function,required:!0},editBtnHide:{type:Boolean,required:!1},deleteBtnHide:{type:Boolean,required:!1}},computed:{editBtnPermission:function(){return this.editBtnHide?{action:"PUT"}:{action:"PUT",effect:"disabled"}},deleteBtnPermission:function(){return this.deleteBtnHide?{action:"DELETE"}:{action:"DELETE",effect:"disabled"}}}},h=f,g=Object(c["a"])(h,p,d,!1,null,null,null),b=g.exports;t["a"]={components:{ListForm:m,ListOptionBtn:b},data:function(){return{items:[],selectionList:[],pageSize:10,currentPage:1,totalSize:0,searchKeyword:"",modelName:this.$route.path.match(/\/(\w+?)\//i)[1]}},methods:{fetch:function(){var e=this;return Object(s["a"])(Object(a["a"])().mark((function t(){var r;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/".concat(e.modelName,"?page=").concat(e.currentPage,"&size=").concat(e.pageSize).concat(e.searchKeyword?"&search="+e.searchKeyword:""));case 2:r=t.sent,e.items=r.data.items,e.totalSize=r.data.totalCount;case 5:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(s["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除"'.concat(e.name?e.name:e.path,'"?'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(Object(a["a"])().mark((function r(){return Object(a["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/".concat(t.modelName,"/").concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return r.stop()}}),r)})))()},removeMany:function(){var e=this;return Object(s["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.selectionList.length?e.$confirm("是否确定要删除已选中的".concat(e.selectionList.length,"条数据?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.delete("rest/".concat(e.modelName,"/"),{data:e.selectionList});case 2:e.$message({type:"success",message:"删除成功!"}),e.fetch();case 4:case"end":return t.stop()}}),t)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})})):e.$message({message:"请选择要删除的数据",type:"warning"});case 1:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){this.currentPage=e,console.log(this.currentPage),this.fetch()},handleSearchedData:function(e){this.items=e},handleSelectionChange:function(e){this.selectionList=e}},created:function(){this.fetch()}}},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"99af":function(e,t,r){"use strict";var a=r("23e7"),s=r("da84"),n=r("d039"),i=r("e8b5"),l=r("861d"),o=r("7b0b"),c=r("07fa"),u=r("8418"),m=r("65f0"),p=r("1dde"),d=r("b622"),f=r("2d00"),h=d("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",v=s.TypeError,x=f>=51||!n((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),k=p("concat"),w=function(e){if(!l(e))return!1;var t=e[h];return void 0!==t?!!t:i(e)},y=!x||!k;a({target:"Array",proto:!0,arity:1,forced:y},{concat:function(e){var t,r,a,s,n,i=o(this),l=m(i,0),p=0;for(t=-1,a=arguments.length;t<a;t++)if(n=-1===t?i:arguments[t],w(n)){if(s=c(n),p+s>g)throw v(b);for(r=0;r<s;r++,p++)r in n&&u(l,p,n[r])}else{if(p>=g)throw v(b);u(l,p++,n)}return l.length=p,l}})},c8ef:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("英雄列表")]),r("list-form",{attrs:{modelName:"heroes",currentPage:e.currentPage,size:e.pageSize,selectionList:e.selectionList,removeMany:e.removeMany},on:{keywordChange:function(t){e.searchKeyword=t},searchData:e.handleSearchedData}}),r("el-table",{attrs:{data:e.items},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{prop:"_id",label:"ID"}}),r("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),r("el-table-column",{attrs:{prop:"title",label:"称号"}}),r("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.avatar,alt:""}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("ListOptionBtn",{attrs:{modelName:e.modelName,row:t.row,removeOne:e.remove}})]}}])})],1),r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":10,background:"",layout:"total, sizes, prev, pager, next, jumper",total:e.totalSize},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},s=[],n=r("8568"),i={name:"HeroList",mixins:[n["a"]]},l=i,o=r("2877"),c=Object(o["a"])(l,a,s,!1,null,null,null);t["default"]=c.exports},d784:function(e,t,r){"use strict";r("ac1f");var a=r("e330"),s=r("cb2d"),n=r("9263"),i=r("d039"),l=r("b622"),o=r("9112"),c=l("species"),u=RegExp.prototype;e.exports=function(e,t,r,m){var p=l(e),d=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),f=d&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!d||!f||r){var h=a(/./[p]),g=t(p,""[e],(function(e,t,r,s,i){var l=a(e),o=t.exec;return o===n||o===u.exec?d&&!i?{done:!0,value:h(t,r,s)}:{done:!0,value:l(r,t,s)}:{done:!1}}));s(String.prototype,e,g[0]),s(u,p,g[1])}m&&o(u[p],"sham",!0)}},f367:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),r("el-form",{ref:"HeroForm",attrs:{model:e.model,rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[r("el-tabs",{attrs:{value:"basic",type:"border-card"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"basic"}},[r("el-form-item",{attrs:{prop:"name",label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{prop:"avatar",label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":e.afterUpload}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{prop:"banner",label:"Banner"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"banner",t.url)}}},[e.model.banner?r("img",{staticClass:"avatar",attrs:{src:e.model.banner}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{prop:"title",label:"称号"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{prop:"categories",label:"类型"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{prop:"items1",label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},on:{change:e.bindItemsChange},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{prop:"items2",label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},on:{change:e.bindItemsChange},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{prop:"usageTips",label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{prop:"battleTips",label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{prop:"teamTips",label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1),r("el-form-item",{attrs:{prop:"scores.difficult",label:"难度"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:10,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),r("el-form-item",{attrs:{prop:"scores.skills",label:"技能"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:10,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{prop:"scores.attack",label:"攻击"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:10,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{prop:"scores.survive",label:"生存"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:10,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加技能 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"felx"}},e._l(e.model.skills,(function(t,a){return r("el-col",{key:a,attrs:{md:12}},[r("el-form-item",{attrs:{prop:"skills."+a+".name",rules:{required:!0,message:"请输入技能名称",trigger:"blur"},label:"名称"}},[r("el-input",{model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{prop:"skills."+a+".icon",rules:{required:!0,message:"请上传技能图标",trigger:"blur"},label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(r){return e.$set(t,"icon",r.url)}}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{prop:"skills."+a+".delay",rules:{required:!0,message:"请输入技能的冷却值",trigger:"blur"},label:"冷却值"}},[r("el-input",{model:{value:t.delay,callback:function(r){e.$set(t,"delay",r)},expression:"item.delay"}})],1),r("el-form-item",{attrs:{prop:"skills."+a+".cost",rules:{required:!0,message:"请输入技能的消耗",trigger:"blur"},label:"消耗"}},[r("el-input",{model:{value:t.cost,callback:function(r){e.$set(t,"cost",r)},expression:"item.cost"}})],1),r("el-form-item",{attrs:{prop:"skills."+a+".description",rules:{required:!0,message:"请输入技能描述",trigger:"blur"},label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",{attrs:{prop:"skills."+a+".tips",rules:{required:!0,message:"请输入技能小提示",trigger:"blur"},label:"小提示"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(r){e.$set(t,"tips",r)},expression:"item.tips"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(e.i,1)}}},[e._v("删除")])],1)],1)})),1)],1),r("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.partners.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"felx"}},e._l(e.model.partners,(function(t,a){return r("el-col",{key:a,attrs:{md:12}},[r("el-form-item",{attrs:{prop:"partners."+a+".hero",rules:{required:!0,message:"请选择最佳搭档",trigger:"blur"},label:"英雄"}},[r("el-select",{attrs:{filterable:""},model:{value:e.model.partners[a].hero,callback:function(t){e.$set(e.model.partners[a],"hero",t)},expression:"model.partners[index].hero"}},e._l(e.heroes,(function(e){return r("el-option",{key:e._id,attrs:{value:e._id,label:e.name}})})),1)],1),r("el-form-item",{attrs:{prop:"partners."+a+".description",rules:{required:!0,message:"请输入描述",trigger:"blur"},label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.partners[a].description,callback:function(t){e.$set(e.model.partners[a],"description",t)},expression:"model.partners[index].description"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.partners.splice(a,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),r("el-form-item",[r("el-button",{staticStyle:{"margin-top":"5rem"},attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},s=[],n=r("c7eb"),i=r("1da1"),l={name:"HeroEdit",props:{id:{}},data:function(){return{model:{name:"",avatar:"",nanner:"",scores:{difficult:0,skills:0,attack:0,survive:0},skills:[],partners:[]},categories:[],items:[],heroes:[],rules:{name:[{required:!0,message:"请输入英雄名称",tigger:"blur"}],avatar:[{required:!0,message:"请上传英雄头像",trigger:"blur"}],banner:[{required:!0,message:"请上传英雄背景图",trigger:"blur"}],title:[{required:!0,message:"请输入英雄称号",trigger:"blur"}],categories:[{required:!0,message:"请至少选择一个英雄类型",trigger:"change"}],items1:[{required:!0,message:"请选择顺风出装",trigger:"change"}],items2:[{required:!0,message:"请选择逆风出装",trigger:"change"}],usageTips:[{required:!0,message:"请输入使用技巧",trigger:"blur"}],battleTips:[{required:!0,message:"请输对抗技巧",trigger:"blur"}],teamTips:[{required:!0,message:"请输入团战思路",trigger:"blur"}],difficult:[{required:!0,message:"请选择难度",trigger:"change"}],skills:[{required:!0,message:"请选择技能",trigger:"change"}],attack:[{required:!0,message:"请选择攻击",trigger:"change"}],survive:[{required:!0,message:"请选择生存",trigger:"change"}]}}},methods:{save:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs["HeroForm"].validate(function(){var t=Object(i["a"])(Object(n["a"])().mark((function t(r){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=12;break}if(!e.id){t.next=6;break}return t.next=4,e.$http.put("rest/heroes/".concat(e.id),e.model);case 4:t.next=8;break;case 6:return t.next=8,e.$http.post("rest/heroes",e.model);case 8:e.$router.push("/heroes/list"),e.$message({type:"success",message:"保存成功"}),t.next=14;break;case 12:return e.$message({type:"error",message:"表单信息不完整"}),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},bindItemsChange:function(e){console.log(e),6!==e.length?this.$message({message:"最多只能选择6件装备",type:"warning"}):this.$message({message:"已选择6件装备",type:"success"})},fetch:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data.items;case 4:case"end":return t.stop()}}),t)})))()},fetchItems:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data.items;case 4:case"end":return t.stop()}}),t)})))()},fetchHeroes:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.heroes=r.data.items;case 4:case"end":return t.stop()}}),t)})))()},afterUpload:function(e){this.$set(this.model,"avatar",e.url)}},created:function(){this.id&&this.fetch(),this.fetchCategories(),this.fetchItems(),this.fetchHeroes()}},o=l,c=r("2877"),u=Object(c["a"])(o,a,s,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=Hero.b7226711.js.map