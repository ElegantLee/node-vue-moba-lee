(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Video"],{"14c3":function(e,t,r){var n=r("da84"),a=r("c65b"),c=r("825a"),o=r("1626"),i=r("c6b6"),s=r("9263"),l=n.TypeError;e.exports=function(e,t){var r=e.exec;if(o(r)){var n=a(r,e,t);return null!==n&&c(n),n}if("RegExp"===i(e))return a(s,e,t);throw l("RegExp#exec called on incompatible receiver")}},"466d":function(e,t,r){"use strict";var n=r("c65b"),a=r("d784"),c=r("825a"),o=r("50c4"),i=r("577e"),s=r("1d80"),l=r("dc4a"),u=r("8aa5"),d=r("14c3");a("match",(function(e,t,r){return[function(t){var r=s(this),a=void 0==t?void 0:l(t,e);return a?n(a,t,r):new RegExp(t)[e](i(r))},function(e){var n=c(this),a=i(e),s=r(t,n,a);if(s.done)return s.value;if(!n.global)return d(n,a);var l=n.unicode;n.lastIndex=0;var m,p=[],f=0;while(null!==(m=d(n,a))){var h=i(m[0]);p[f]=h,""===h&&(n.lastIndex=u(a,o(n.lastIndex),l)),f++}return 0===f?null:p}]}))},8568:function(e,t,r){"use strict";var n=r("c7eb"),a=r("1da1"),c=(r("ac1f"),r("466d"),r("99af"),r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{staticClass:"d-flex jc-between"},[r("el-form-item",{staticClass:"el-form-search-item d-flex"},[r("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},on:{change:function(t){return e.$emit("keywordChange",t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.searchFetch("search")}},slot:"append"})],1),r("el-button",{attrs:{title:"刷新",icon:"el-icon-refresh-left"},on:{click:function(t){return e.searchFetch("refresh")}}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.$router.push("/"+e.modelName+"/create")}}},[e._v("添加")]),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{action:"DELETE",effect:"disabled"},expression:"{action: 'DELETE', effect: 'disabled'}"}],attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.removeMany}},[e._v("批量删除")])],1)],1)}),o=[],i=(r("a9e3"),{props:{modelName:{required:!0,type:String},currentPage:{required:!0,type:Number},size:{required:!0,type:Number},selectionList:{required:!0,type:Array},removeMany:{required:!0,type:Function}},data:function(){return{keyword:""}},methods:{searchFetch:function(e){var t=this;return Object(a["a"])(Object(n["a"])().mark((function r(){var a,c;return Object(n["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("search"!==e){r.next=11;break}if(!t.keyword){r.next=8;break}return r.next=4,t.$http.get("rest/".concat(t.modelName,"?page=").concat(t.currentPage,"&size=").concat(t.size).concat(t.keyword?"&search="+t.keyword:""));case 4:a=r.sent,t.$emit("searchData",a.data.items),r.next=9;break;case 8:t.$message({message:"请输入搜索关键字",type:"warning"});case 9:r.next=16;break;case 11:if("refresh"!==e){r.next=16;break}return r.next=14,t.$http.get("rest/".concat(t.modelName,"?page=").concat(t.currentPage,"&size=").concat(t.size).concat(t.keyword?"&search="+t.keyword:""));case 14:c=r.sent,t.$emit("searchData",c.data.items);case 16:case"end":return r.stop()}}),r)})))()}}}),s=i,l=r("2877"),u=Object(l["a"])(s,c,o,!1,null,null,null),d=u.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.editBtnPermission,expression:"editBtnPermission"}],attrs:{type:"primary",size:"small"},on:{click:function(t){return e.$router.push("/"+e.modelName+"/edit/"+e.row._id)}}},[e._v("编辑")]),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.deleteBtnPermission,expression:"deleteBtnPermission"}],attrs:{type:"danger",size:"small"},on:{click:function(t){return e.removeOne(e.row)}}},[e._v("删除")])],1)},p=[],f={name:"ListOptionBtn",props:{modelName:{type:String,required:!0},row:{type:Object,required:!0},removeOne:{type:Function,required:!0},editBtnHide:{type:Boolean,required:!1},deleteBtnHide:{type:Boolean,required:!1}},computed:{editBtnPermission:function(){return this.editBtnHide?{action:"PUT"}:{action:"PUT",effect:"disabled"}},deleteBtnPermission:function(){return this.deleteBtnHide?{action:"DELETE"}:{action:"DELETE",effect:"disabled"}}}},h=f,b=Object(l["a"])(h,m,p,!1,null,null,null),g=b.exports;t["a"]={components:{ListForm:d,ListOptionBtn:g},data:function(){return{items:[],selectionList:[],pageSize:10,currentPage:1,totalSize:0,searchKeyword:"",modelName:this.$route.path.match(/\/(\w+?)\//i)[1]}},methods:{fetch:function(){var e=this;return Object(a["a"])(Object(n["a"])().mark((function t(){var r;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/".concat(e.modelName,"?page=").concat(e.currentPage,"&size=").concat(e.pageSize).concat(e.searchKeyword?"&search="+e.searchKeyword:""));case 2:r=t.sent,e.items=r.data.items,e.totalSize=r.data.totalCount;case 5:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(a["a"])(Object(n["a"])().mark((function r(){return Object(n["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除"'.concat(e.name,'"?'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(Object(n["a"])().mark((function r(){return Object(n["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/".concat(t.modelName,"/").concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return r.stop()}}),r)})))()},removeMany:function(){var e=this;return Object(a["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.selectionList.length?e.$confirm("是否确定要删除已选中的".concat(e.selectionList.length,"条数据?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.delete("rest/".concat(e.modelName,"/"),{data:e.selectionList});case 2:e.$message({type:"success",message:"删除成功!"}),e.fetch();case 4:case"end":return t.stop()}}),t)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})})):e.$message({message:"请选择要删除的数据",type:"warning"});case 1:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){this.currentPage=e,console.log(this.currentPage),this.fetch()},handleSearchedData:function(e){this.items=e},handleSelectionChange:function(e){this.selectionList=e}},created:function(){this.fetch()}}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),c=r("d039"),o=r("e8b5"),i=r("861d"),s=r("7b0b"),l=r("07fa"),u=r("8418"),d=r("65f0"),m=r("1dde"),p=r("b622"),f=r("2d00"),h=p("isConcatSpreadable"),b=9007199254740991,g="Maximum allowed index exceeded",v=a.TypeError,w=f>=51||!c((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),y=m("concat"),x=function(e){if(!i(e))return!1;var t=e[h];return void 0!==t?!!t:o(e)},k=!w||!y;n({target:"Array",proto:!0,arity:1,forced:k},{concat:function(e){var t,r,n,a,c,o=s(this),i=d(o,0),m=0;for(t=-1,n=arguments.length;t<n;t++)if(c=-1===t?o:arguments[t],x(c)){if(a=l(c),m+a>b)throw v(g);for(r=0;r<a;r++,m++)r in c&&u(i,m,c[r])}else{if(m>=b)throw v(g);u(i,m++,c)}return i.length=m,i}})},b0b7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"video-edit"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"视频")]),r("el-form",{ref:"VideoForm",attrs:{model:e.model,rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[r("el-form-item",{attrs:{prop:"category",label:"所属分类"}},[r("el-select",{model:{value:e.model.category,callback:function(t){e.$set(e.model,"category",t)},expression:"model.category"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{prop:"title",label:"标题"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{prop:"url",label:"链接"}},[r("el-input",{model:{value:e.model.url,callback:function(t){e.$set(e.model,"url",t)},expression:"model.url"}})],1),r("el-form-item",{attrs:{prop:"fre",label:"点击率"}},[r("el-input",{model:{value:e.model.fre,callback:function(t){e.$set(e.model,"fre",t)},expression:"model.fre"}})],1),r("el-form-item",{attrs:{prop:"date",label:"发布日期"}},[r("el-input",{attrs:{type:"date"},model:{value:e.model.date,callback:function(t){e.$set(e.model,"date",t)},expression:"model.date"}})],1),r("el-form-item",{attrs:{prop:"cover",label:"封面"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":e.afterUpload}},[e.model.cover?r("img",{staticClass:"avatar",attrs:{src:e.model.cover}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},a=[],c=r("c7eb"),o=r("1da1"),i={name:"VideoEdit",props:{id:{}},data:function(){return{model:{},categories:[],rules:{category:[{required:!0,message:"请选择至少一个分类",trigger:"change"}],title:[{required:!0,message:"请输入视频标题",trigger:"blur"}],url:[{required:!0,message:"请输入视频链接",trigger:"blur"}],fre:[{required:!0,message:"请输入点击率",trigger:"blur"}],date:[{type:"date",required:!0,message:"请输入视频发布日期",trigger:"change"}],cover:[{required:!0,message:"请上传视频封面",trigger:"blur"}]}}},methods:{save:function(){var e=this;return Object(o["a"])(Object(c["a"])().mark((function t(){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs["VideoForm"].validate(function(){var t=Object(o["a"])(Object(c["a"])().mark((function t(r){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=12;break}if(!e.id){t.next=6;break}return t.next=4,e.$http.put("rest/videoes/".concat(e.id),e.model);case 4:t.next=8;break;case 6:return t.next=8,e.$http.post("rest/videoes",e.model);case 8:e.$router.push("/videoes/list"),e.$message({type:"success",message:"保存成功"}),t.next=14;break;case 12:return e.$message({type:"error",message:"表单信息不完整"}),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(o["a"])(Object(c["a"])().mark((function t(){var r;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/videoes/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},afterUpload:function(e){this.$set(this.model,"cover",e.url)},fetchCategories:function(){var e=this;return Object(o["a"])(Object(c["a"])().mark((function t(){var r;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchCategories(),this.id&&this.fetch()}},s=i,l=(r("c6a6"),r("2877")),u=Object(l["a"])(s,n,a,!1,null,"136af67d",null);t["default"]=u.exports},c6a6:function(e,t,r){"use strict";r("c8cf")},c8cf:function(e,t,r){},d784:function(e,t,r){"use strict";r("ac1f");var n=r("e330"),a=r("cb2d"),c=r("9263"),o=r("d039"),i=r("b622"),s=r("9112"),l=i("species"),u=RegExp.prototype;e.exports=function(e,t,r,d){var m=i(e),p=!o((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),f=p&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[m]=/./[m]),r.exec=function(){return t=!0,null},r[m](""),!t}));if(!p||!f||r){var h=n(/./[m]),b=t(m,""[e],(function(e,t,r,a,o){var i=n(e),s=t.exec;return s===c||s===u.exec?p&&!o?{done:!0,value:h(t,r,a)}:{done:!0,value:i(r,t,a)}:{done:!1}}));a(String.prototype,e,b[0]),a(u,m,b[1])}d&&s(u[m],"sham",!0)}},f0d0:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("视频列表")]),r("list-form",{attrs:{modelName:"videoes",currentPage:e.currentPage,size:e.pageSize,selectionList:e.selectionList,removeMany:e.removeMany},on:{keywordChange:function(t){e.searchKeyword=t},searchData:e.handleSearchedData}}),r("el-table",{attrs:{data:e.items},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{prop:"_id",label:"ID"}}),r("el-table-column",{attrs:{prop:"category.name",label:"所属分类"}}),r("el-table-column",{attrs:{prop:"title",label:"视频标题"}}),r("el-table-column",{attrs:{prop:"url",label:"链接"}}),r("el-table-column",{attrs:{prop:"fre",label:"点击率"}}),r("el-table-column",{attrs:{prop:"date",label:"发布日期"}}),r("el-table-column",{attrs:{prop:"cover",label:"封面"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.cover,alt:""}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("ListOptionBtn",{attrs:{modelName:e.modelName,row:t.row,removeOne:e.remove}})]}}])})],1),r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":10,background:"",layout:"total, sizes, prev, pager, next, jumper",total:e.totalSize},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},a=[],c=r("8568"),o={name:"VideoList",mixins:[c["a"]]},i=o,s=r("2877"),l=Object(s["a"])(i,n,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=Video.a562ac9f.js.map