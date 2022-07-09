(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ApiRight"],{"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),c=n("825a"),i=n("1626"),s=n("c6b6"),o=n("9263"),l=r.TypeError;e.exports=function(e,t){var n=e.exec;if(i(n)){var r=a(n,e,t);return null!==r&&c(r),r}if("RegExp"===s(e))return a(o,e,t);throw l("RegExp#exec called on incompatible receiver")}},"407d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v(e._s(e.id?"编辑":"新建")+"接口权限")]),n("el-form",{ref:"ApiRightForm",attrs:{model:e.model,rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[n("el-form-item",{attrs:{prop:"path",label:"接口地址"}},[n("el-input",{attrs:{placeholder:"输入API接口地址，前缀/admin/api不用填"},model:{value:e.model.path,callback:function(t){e.$set(e.model,"path",t)},expression:"model.path"}})],1),n("el-form-item",{attrs:{prop:"category",label:"操作的模型"}},[n("el-select",{attrs:{placeholder:"选择接口所对应的模型"},on:{change:e.bindCategoryChange},model:{value:e.model.category,callback:function(t){e.$set(e.model,"category",t)},expression:"model.category"}},e._l(e.apiCategories,(function(e){return n("el-option",{key:e._id,attrs:{clearable:"",label:e.name,value:e._id}})})),1)],1),n("el-form-item",{attrs:{prop:"methods",label:"接口请求方法"}},[n("el-select",{attrs:{multiple:"",placeholder:"选择接口请求方法"},on:{change:e.bindMethodChange},model:{value:e.model.methods,callback:function(t){e.$set(e.model,"methods",t)},expression:"model.methods"}},e._l(e.apiMethods,(function(e,t,r){return n("el-option",{key:"tmds"+r,attrs:{label:t,value:e}})})),1)],1),n("el-form-item",{attrs:{prop:"description",label:"描述"}},[n("el-input",{attrs:{type:"textarea",placeholder:"描述与接口方法对应，用、分隔"},model:{value:e.model.description,callback:function(t){e.$set(e.model,"description",t)},expression:"model.description"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},a=[],c=n("c7eb"),i=n("1da1"),s=(n("4de4"),n("d3b7"),n("b0c0"),{name:"ApiRightEdit",props:{id:{}},computed:{apiCategories:function(){return this.categories.filter((function(e){if(e.parent)return"接口权限"===e.parent.name}))}},data:function(){return{model:{path:"",category:{},methods:[],description:""},categories:[],apiMethods:{"查看 GET":"GET","新增 POST":"POST","修改 PUT":"PUT","删除 DELETE":"DELETE","搜索 SEARCH":"SEARCH"},rules:{path:[{required:!0,message:"请输入接口请求地址",trigger:"blur"}],category:[{required:!0,message:"请选择接口操作的模型",trigger:"change"}],methods:[{required:!0,message:"请选择接口的请求方式",trigger:"change"}],description:[{required:!0,message:"请输入接口的描述",trigger:"blur"}]}}},methods:{save:function(){var e=this;return Object(i["a"])(Object(c["a"])().mark((function t(){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs["ApiRightForm"].validate(function(){var t=Object(i["a"])(Object(c["a"])().mark((function t(n){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=12;break}if(!e.id){t.next=6;break}return t.next=4,e.$http.put("rest/api_rights/".concat(e.id),e.model);case 4:t.next=8;break;case 6:return t.next=8,e.$http.post("rest/api_rights",e.model);case 8:e.$router.push("/api_rights/list"),e.$message({type:"success",message:"保存成功"}),t.next=14;break;case 12:return e.$message({type:"error",message:"表单信息不完整"}),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},bindCategoryChange:function(e){1!==e.length?this.$message({message:"最多只能操作一个模型",type:"warning"}):this.$message({message:"已选择一个模型",type:"success"})},bindMethodChange:function(e){e.length<1&&this.$message({message:"请选择至少一个请求方法",type:"warning"})},fetch:function(){var e=this;return Object(i["a"])(Object(c["a"])().mark((function t(){var n;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/api_rights/".concat(e.id));case 2:n=t.sent,e.model=n.data;case 4:case"end":return t.stop()}}),t)})))()},fetchCategory:function(){var e=this;return Object(i["a"])(Object(c["a"])().mark((function t(){var n;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:n=t.sent,e.categories=n.data.items;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch(),this.fetchCategory()}}),o=s,l=n("2877"),u=Object(l["a"])(o,r,a,!1,null,null,null);t["default"]=u.exports},"466d":function(e,t,n){"use strict";var r=n("c65b"),a=n("d784"),c=n("825a"),i=n("50c4"),s=n("577e"),o=n("1d80"),l=n("dc4a"),u=n("8aa5"),d=n("14c3");a("match",(function(e,t,n){return[function(t){var n=o(this),a=void 0==t?void 0:l(t,e);return a?r(a,t,n):new RegExp(t)[e](s(n))},function(e){var r=c(this),a=s(e),o=n(t,r,a);if(o.done)return o.value;if(!r.global)return d(r,a);var l=r.unicode;r.lastIndex=0;var p,m=[],h=0;while(null!==(p=d(r,a))){var f=s(p[0]);m[h]=f,""===f&&(r.lastIndex=u(a,i(r.lastIndex),l)),h++}return 0===h?null:m}]}))},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,c=n("1dde"),i=c("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},8568:function(e,t,n){"use strict";var r=n("c7eb"),a=n("1da1"),c=(n("ac1f"),n("466d"),n("99af"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{staticClass:"d-flex jc-between"},[n("el-form-item",{staticClass:"el-form-search-item d-flex"},[n("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},on:{change:function(t){return e.$emit("keywordChange",t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.searchFetch("search")}},slot:"append"})],1),n("el-button",{attrs:{title:"刷新",icon:"el-icon-refresh-left"},on:{click:function(t){return e.searchFetch("refresh")}}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.$router.push("/"+e.modelName+"/create")}}},[e._v("添加")]),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:{action:"DELETE",effect:"disabled"},expression:"{action: 'DELETE', effect: 'disabled'}"}],attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.removeMany}},[e._v("批量删除")])],1)],1)}),i=[],s=(n("a9e3"),{props:{modelName:{required:!0,type:String},currentPage:{required:!0,type:Number},size:{required:!0,type:Number},selectionList:{required:!0,type:Array},removeMany:{required:!0,type:Function}},data:function(){return{keyword:""}},methods:{searchFetch:function(e){var t=this;return Object(a["a"])(Object(r["a"])().mark((function n(){var a,c;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("search"!==e){n.next=11;break}if(!t.keyword){n.next=8;break}return n.next=4,t.$http.get("rest/".concat(t.modelName,"?page=").concat(t.currentPage,"&size=").concat(t.size).concat(t.keyword?"&search="+t.keyword:""));case 4:a=n.sent,t.$emit("searchData",a.data.items),n.next=9;break;case 8:t.$message({message:"请输入搜索关键字",type:"warning"});case 9:n.next=16;break;case 11:if("refresh"!==e){n.next=16;break}return n.next=14,t.$http.get("rest/".concat(t.modelName,"?page=").concat(t.currentPage,"&size=").concat(t.size).concat(t.keyword?"&search="+t.keyword:""));case 14:c=n.sent,t.$emit("searchData",c.data.items);case 16:case"end":return n.stop()}}),n)})))()}}}),o=s,l=n("2877"),u=Object(l["a"])(o,c,i,!1,null,null,null),d=u.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.editBtnPermission,expression:"editBtnPermission"}],attrs:{type:"primary",size:"small"},on:{click:function(t){return e.$router.push("/"+e.modelName+"/edit/"+e.row._id)}}},[e._v("编辑")]),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:e.deleteBtnPermission,expression:"deleteBtnPermission"}],attrs:{type:"danger",size:"small"},on:{click:function(t){return e.removeOne(e.row)}}},[e._v("删除")])],1)},m=[],h={name:"ListOptionBtn",props:{modelName:{type:String,required:!0},row:{type:Object,required:!0},removeOne:{type:Function,required:!0},editBtnHide:{type:Boolean,required:!1},deleteBtnHide:{type:Boolean,required:!1}},computed:{editBtnPermission:function(){return this.editBtnHide?{action:"PUT"}:{action:"PUT",effect:"disabled"}},deleteBtnPermission:function(){return this.deleteBtnHide?{action:"DELETE"}:{action:"DELETE",effect:"disabled"}}}},f=h,g=Object(l["a"])(f,p,m,!1,null,null,null),b=g.exports;t["a"]={components:{ListForm:d,ListOptionBtn:b},data:function(){return{items:[],selectionList:[],pageSize:10,currentPage:1,totalSize:0,searchKeyword:"",modelName:this.$route.path.match(/\/(\w+?)\//i)[1]}},methods:{fetch:function(){var e=this;return Object(a["a"])(Object(r["a"])().mark((function t(){var n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/".concat(e.modelName,"?page=").concat(e.currentPage,"&size=").concat(e.pageSize).concat(e.searchKeyword?"&search="+e.searchKeyword:""));case 2:n=t.sent,e.items=n.data.items,e.totalSize=n.data.totalCount;case 5:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(a["a"])(Object(r["a"])().mark((function n(){return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$confirm('是否确定要删除"'.concat(e.name,'"?'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(Object(r["a"])().mark((function n(){return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.delete("rest/".concat(t.modelName,"/").concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return n.stop()}}),n)})))).catch((function(){t.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return n.stop()}}),n)})))()},removeMany:function(){var e=this;return Object(a["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.selectionList.length?e.$confirm("是否确定要删除已选中的".concat(e.selectionList.length,"条数据?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.delete("rest/".concat(e.modelName,"/"),{data:e.selectionList});case 2:e.$message({type:"success",message:"删除成功!"}),e.fetch();case 4:case"end":return t.stop()}}),t)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})})):e.$message({message:"请选择要删除的数据",type:"warning"});case 1:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){this.currentPage=e,console.log(this.currentPage),this.fetch()},handleSearchedData:function(e){this.items=e},handleSelectionChange:function(e){this.selectionList=e}},created:function(){this.fetch()}}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),c=n("d039"),i=n("e8b5"),s=n("861d"),o=n("7b0b"),l=n("07fa"),u=n("8418"),d=n("65f0"),p=n("1dde"),m=n("b622"),h=n("2d00"),f=m("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",v=a.TypeError,y=h>=51||!c((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),w=p("concat"),x=function(e){if(!s(e))return!1;var t=e[f];return void 0!==t?!!t:i(e)},k=!y||!w;r({target:"Array",proto:!0,arity:1,forced:k},{concat:function(e){var t,n,r,a,c,i=o(this),s=d(i,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(c=-1===t?i:arguments[t],x(c)){if(a=l(c),p+a>g)throw v(b);for(n=0;n<a;n++,p++)n in c&&u(s,p,c[n])}else{if(p>=g)throw v(b);u(s,p++,c)}return s.length=p,s}})},c942:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("接口权限列表")]),n("list-form",{attrs:{modelName:"api_rights",currentPage:e.currentPage,size:e.pageSize,selectionList:e.selectionList,removeMany:e.removeMany},on:{keywordChange:function(t){e.searchKeyword=t},searchData:e.handleSearchedData}}),n("el-table",{attrs:{data:e.items},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"_id",label:"ID"}}),n("el-table-column",{attrs:{prop:"path",label:"接口路径"}}),n("el-table-column",{attrs:{prop:"category.name",label:"操作的模型"}}),n("el-table-column",{attrs:{prop:"methods",label:"接口权限"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row.methods;return e._l(r,(function(t,r){return n("el-tag",{key:"rtag"+r,attrs:{type:e.methodType[t]}},[e._v(e._s(t))])}))}}])}),n("el-table-column",{attrs:{prop:"description",label:"描述"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("ListOptionBtn",{attrs:{modelName:e.modelName,row:t.row,removeOne:e.remove}})]}}])})],1),n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":10,background:"",layout:"total, sizes, prev, pager, next, jumper",total:e.totalSize},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},a=[],c=n("8568"),i={name:"api-right-list",mixins:[c["a"]],data:function(){return{methodType:{POST:"success",PUT:"warning",DELETE:"danger"}}}},s=i,o=n("2877"),l=Object(o["a"])(s,r,a,!1,null,null,null);t["default"]=l.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("cb2d"),c=n("9263"),i=n("d039"),s=n("b622"),o=n("9112"),l=s("species"),u=RegExp.prototype;e.exports=function(e,t,n,d){var p=s(e),m=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=m&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!m||!h||n){var f=r(/./[p]),g=t(p,""[e],(function(e,t,n,a,i){var s=r(e),o=t.exec;return o===c||o===u.exec?m&&!i?{done:!0,value:f(t,n,a)}:{done:!0,value:s(n,t,a)}:{done:!1}}));a(String.prototype,e,g[0]),a(u,p,g[1])}d&&o(u[p],"sham",!0)}}}]);
//# sourceMappingURL=ApiRight.b3ae7050.js.map