(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-application-production_manage-work_record-work_record"],{"0de9":function(t,e,n){"use strict";n.r(e);var o=n("83a2"),i=n("3109");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("1ffc");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"660ff293",null,!1,o["a"],r);e["default"]=u.exports},"168a":function(t,e,n){"use strict";var o=n("4ea4");n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("638b")),a=o(n("0de9")),r=n("c35e"),c=new r.TasksApi,u={components:{topTypeRow:i.default,oneTypeRow:a.default},data:function(){return{width:"200rpx",minHeight:"40rpx",lists:[]}},onLoad:function(t){var e=this;t&&(this.pageCount=t.pageNum),t.taskId&&c.getPageProductionTaskRecordById(t.taskId,(function(t){t.rows.map((function(t){if(t.deviceProductionCountRecordList){var e=t.deviceProductionCountRecordList.map((function(t){var e=t.recordCount?t.recordCount:"";return"["+t.deviceName+"]"+e}));t.deviceRecord=e.join("，")}if(t.userProductionCountRecordList){var n=t.userProductionCountRecordList.map((function(t){var e=t.recordCount?t.recordCount:"";return"["+t.deviceName+"]"+e}));t.userRecord=n.join("，")}})),e.lists=t.rows}))},methods:{goBtnClick:function(t){uni.navigateTo({url:"../equipment_snapshot/equipment_snapshot?type=1&typeEnum="+t.deviceRecordParameterTypeEnum+"&recordId="+t.taskRecordId+"&date="+t.reportTime+"&typeName="+t.reportTypeName})}}};e.default=u},"19d6":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"lf_row_a_f top_type",style:{"border-bottom":t.borderBottom,"min-height":t.minHeight,"padding-left":t.paddingLeft+"rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goClickWay.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"top_type_title",style:{color:t.titleColor,"font-size":t.titleSize}},[t._v(t._s(t.$t(t.title))),t.fhShow?n("v-uni-text",[t._v("：")]):t._e(),n("v-uni-text",{staticClass:"top_type_text"},[t._v(t._s(t.text))])],1),n("v-uni-view",{staticClass:"lf_row_a_f"},[t.newStatusShow?n("v-uni-view",{staticClass:"top_type_status",staticStyle:{margin:"0"},style:{"background-color":t.newTypeBgColor}},[t._v(t._s(t.$t(t.newTypeText)))]):t._e(),t.statusShow?n("v-uni-view",{staticClass:"top_type_status",style:{"background-color":t.typeBgColor}},[t._v(t._s(t.$t(t.typeText)))]):t._e(),t.btnShow?n("v-uni-view",{staticClass:"top_type_btn_text",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.btnClick.apply(void 0,arguments)}}},[t._v(t._s(t.btnText))]):t._e(),t.arrowShow?n("v-uni-image",{staticClass:"top_type_icon",class:t.downUpShow?"top_type_active_icon":"",attrs:{src:t.iconUrl},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.arrowClick.apply(void 0,arguments)}}}):t._e()],1)],1)},a=[]},"1ffc":function(t,e,n){"use strict";var o=n("d800"),i=n.n(o);i.a},"26b9":function(t,e,n){"use strict";n.r(e);var o=n("94c4"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},2942:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.type_row[data-v-660ff293]{width:100%}.type_row .content[data-v-660ff293]{word-wrap:break-word}.type_row .title[data-v-660ff293]{max-width:%?320?%}',""]),t.exports=e},"2fb9":function(t,e,n){var o=n("565d");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("5fc908ed",o,!0,{sourceMap:!1,shadowMode:!1})},"2ff4":function(t,e,n){"use strict";var o=n("a774"),i=n.n(o);i.a},3109:function(t,e,n){"use strict";n.r(e);var o=n("4cb9"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"4cb9":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"one_type_row",props:{customStyle:{type:Object,default:function(){return{"font-size":"24rpx",color:"#828282","font-weight":400}}},title:{type:String,default:""},content:{type:[String,Number],default:""},contentColor:{type:String,default:""},fhShow:{type:Boolean,default:!0},minHeight:{type:String,default:"60rpx"},minWidth:{type:String,default:"120rpx"},width:{type:String,default:""},textAlign:{type:String,default:"left"},lineShow:{type:Boolean,default:!0},marginLeft:{type:String,default:"0rpx"},isLang:{type:Boolean,default:!0},slotName:{type:String,default:""}}};e.default=o},"4cd3":function(t,e,n){"use strict";var o=n("2fb9"),i=n.n(o);i.a},"4f9a":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",t._l(t.lists,(function(e,o){return n("v-uni-view",{key:o,staticClass:"list_item"},[n("top-type-row",{attrs:{title:t.$t("报工时间"),text:"："+e.reportTime,btnShow:!0,btnText:"设备快照"},on:{btnClick:function(n){arguments[0]=n=t.$handleEvent(n),t.goBtnClick(e)}}}),n("v-uni-view",{staticStyle:{padding:"10rpx 0rpx 20rpx 0rpx"}},[n("one-type-row",{attrs:{title:"报工类型",content:e.reportTypeName,minHeight:t.minHeight,lineShow:!1}}),n("one-type-row",{attrs:{title:"设备记录数",content:e.deviceRecord,width:t.width,minHeight:t.minHeight,lineShow:!1}}),n("one-type-row",{attrs:{title:"员工报工数",content:e.userRecord,width:t.width,minHeight:t.minHeight,lineShow:!1}}),n("one-type-row",{attrs:{title:"报工数量",content:e.allCountReport,minHeight:t.minHeight,lineShow:!1}}),n("one-type-row",{attrs:{title:"操作工",content:e.recordOperatorUserRealName,minHeight:t.minHeight,lineShow:!1}})],1)],1)})),1)},a=[]},"565d":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.top_type[data-v-4114448e]{justify-content:space-between;width:100%;font-size:%?24?%;border-bottom:%?2?% solid #bbb}.top_type_title[data-v-4114448e], .top_type_btn_text[data-v-4114448e]{color:#0871db;white-space:nowrap}.top_type_text[data-v-4114448e]{color:#0871db;display:inline-block;vertical-align:top;white-space:pre-wrap}.top_type_status[data-v-4114448e]{text-align:center;padding:%?0?% %?20?%;min-width:%?100?%;height:%?48?%;line-height:%?48?%;border-radius:%?24?%;color:#fff;margin:%?0?% %?20?%;background-color:#eee}.top_type_icon[data-v-4114448e]{width:%?60?%;height:%?60?%;transition:.3s}.top_type_active_icon[data-v-4114448e]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}',""]),t.exports=e},"638b":function(t,e,n){"use strict";n.r(e);var o=n("19d6"),i=n("26b9");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("4cd3");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"4114448e",null,!1,o["a"],r);e["default"]=u.exports},"83a2":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"type_row lf_column_a_f",style:t.customStyle},[n("v-uni-view",{staticClass:"lf_row_a_f",staticStyle:{width:"100%"},style:{"min-height":t.minHeight}},[n("v-uni-view",{staticClass:"title",style:{"min-width":t.minWidth,width:t.width,"text-align":t.textAlign}},[t._v(t._s(t.isLang?t.$t(t.title):t.title)),t.fhShow?n("v-uni-text",[t._v("：")]):t._e()],1),t.slotName?t._t(t.slotName):n("v-uni-view",{staticClass:"content",style:{"margin-left":t.marginLeft,color:t.contentColor}},[t._v(t._s(t.content))])],2),t.lineShow?n("v-uni-view",{staticStyle:{"background-color":"#EEEEEE",height:"1rpx"}}):t._e()],1)},a=[]},"94c4":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"top_type_row",data:function(){return{downUpShow:!0}},props:{title:{type:String,default:""},titleColor:{type:String,default:"#0871DB"},text:{type:String,default:""},fhShow:{type:Boolean,default:!1},titleSize:{type:String,default:"24rpx"},minHeight:{type:String,default:"84rpx"},typeText:{type:String,default:""},typeBgColor:{type:String,default:"#BBBBBB"},statusShow:{type:Boolean,default:!1},newTypeText:{type:String,default:""},newTypeBgColor:{type:String,default:"#BBBBBB"},newStatusShow:{type:Boolean,default:!1},arrowShow:{type:Boolean,default:!1},btnShow:{type:Boolean,default:!1},btnText:{type:String,default:""},borderBottom:{type:String,default:"2rpx solid #BBBBBB"},iconType:{type:String,default:"1"},paddingLeft:{type:[String,Number],default:"20"}},computed:{iconUrl:function(){switch(this.iconType){case"1":return"/static/images/common/down_arrow.png";case"2":return"/static/images/common/blue_scan_code.png";default:return""}}},methods:{arrowClick:function(){switch(this.iconType){case"1":this.downUpShow=!this.downUpShow,this.$emit("upOrDownClick",this.downUpShow);break;case"2":uni.scanCode({success:function(t){}});break;default:break}},btnClick:function(){this.$emit("btnClick")},goClickWay:function(){this.$emit("goClick")}}};e.default=o},a5e9:function(t,e,n){"use strict";n.r(e);var o=n("4f9a"),i=n("af90");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("2ff4");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"9dedc948",null,!1,o["a"],r);e["default"]=u.exports},a774:function(t,e,n){var o=n("ef0f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("93f57d22",o,!0,{sourceMap:!1,shadowMode:!1})},af90:function(t,e,n){"use strict";n.r(e);var o=n("168a"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},c35e:function(t,e,n){"use strict";var o=n("4ea4");n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.TasksApi=void 0;var i=o(n("d4ec")),a=o(n("bee2")),r=o(n("262e")),c=o(n("2caf")),u=n("3909"),s="productionTask/",d="productionTaskStart/",l="productionTaskEnd/",p="productionTaskInspection/",f=function(t){(0,r.default)(n,t);var e=(0,c.default)(n);function n(){return(0,i.default)(this,n),e.apply(this,arguments)}return(0,a.default)(n,[{key:"getOperatorUser",value:function(t){var e=s+"getOperatorUser.action";this.commonAjax(null,e,1,t)}},{key:"setInsertTask",value:function(t,e){var n=s+"insert.action";this.commonAjax(t,n,2,e)}},{key:"setInsertOrUpdate",value:function(t,e){var n=s+"insertOrUpdate.action";this.commonAjax(t,n,2,e)}},{key:"setdeleteTaskById",value:function(t,e){var n=s+"deleteById.action";this.commonAjax({id:t},n,2,e)}},{key:"setProductionupdateById",value:function(t,e,n){var o=s+"updateById.action";this.commonAjax({productionTaskId:t,taskState:parseInt(e)},o,2,n)}},{key:"getProductionTaskById",value:function(t,e){var n=s+"getProductionTaskById.action";this.commonAjax({productionTaskId:t},n,2,e)}},{key:"getListByGroupId",value:function(t,e){var n="deviceRealProduction/getListByGroupId.action";this.commonAjax({groupId:t},n,2,e)}},{key:"getDeviceRealProductionByDeviceCode",value:function(t,e){var n="deviceRealProduction/getDeviceRealProductionByDeviceCode.action";this.commonAjax({deviceCode:t},n,2,e)}},{key:"getListAppProductionTaskStartQueryParameter",value:function(t){var e=getApp().globalData.factoryId,n=d+"getListAppProductionTaskStartQueryParameter.action?factoryId="+e;this.commonAjax(null,n,1,t)}},{key:"getPageProductionTaskStartByCondition",value:function(t,e,n,o){var i=s+"getPageProductionTaskStartByCondition.action?current="+e+"&size="+n;this.commonAjax(t,i,1,o)}},{key:"insertProductionTaskStartRecord",value:function(t,e,n,o,i){var a=d+"insertProductionTaskStartRecord.action?productionTaskId="+e+"&inspectCount="+n+"&ngCount="+o;this.commonAjax(t,a,3,i)}},{key:"getListAppProductionTaskEndQueryParameter",value:function(t){var e=getApp().globalData.factoryId,n=l+"getListAppProductionTaskEndQueryParameter.action?factoryId="+e;this.commonAjax(null,n,1,t)}},{key:"getPageProductionTaskEndByCondition",value:function(t,e,n,o){var i=s+"getPageProductionTaskEndByCondition.action?current="+e+"&size="+n;this.commonAjax(t,i,1,o)}},{key:"getProductionTaskStartRecordByProductionId",value:function(t,e){var n=l+"getProductionTaskStartRecordByProductionId.action";this.commonAjax({productionTaskId:t},n,2,e)}},{key:"insertProductionTaskEndRecord",value:function(t,e,n){var o=l+"insertProductionTaskEndRecord.action?productionTaskId="+e.productionTaskId+"&inspectCount="+e.inspectCount+"&ngCount="+e.ngCount+"&completeCount="+e.completeCount+"&taskStartId="+e.taskStartId;this.commonAjax(t,o,3,n)}},{key:"getListInspectionType",value:function(t){var e=p+"getListInspectionType.action";this.commonAjax(null,e,1,t)}},{key:"getListAppProductionTaskEndQueryParameter",value:function(t){var e=getApp().globalData.factoryId,n=p+"getListAppProductionTaskInspectionQueryParameter.action?factoryId="+e;this.commonAjax(null,n,1,t)}},{key:"getPageProductionTaskInspectionByCondition",value:function(t,e,n,o){var i=s+"getPageProductionTaskInspectionByCondition.action?current="+e+"&size="+n;this.commonAjax(t,i,1,o)}},{key:"insertProductionTaskInspection",value:function(t,e){var n=p+"insertProductionTaskInspection.action";this.commonAjax(t,n,2,e)}},{key:"getListAppProductionTaskQueryParameter",value:function(t){var e=s+"getListAppProductionTaskQueryParameter.action";this.commonAjax(null,e,1,t)}},{key:"getPageProductionTaskByCondition",value:function(t,e,n,o){var i=s+"getPageProductionTaskByCondition.action?current="+e+"&size="+n;this.commonAjax(t,i,1,o)}},{key:"getPageProductionTaskRecordById",value:function(t,e){var n=s+"getPageProductionTaskRecordById.action?productionTaskId="+t;this.commonAjax(null,n,1,e)}},{key:"getPageDeviceProductionSnapshot",value:function(t,e,n,o,i){var a="deviceRealParameterValue/getPageDeviceProductionSnapshot.action?typeId="+t+"&deviceRecordParameterTypeEnum="+e+"&current="+n+"&size="+o;this.commonAjax(null,a,1,i)}}]),n}(u.Request);e.TasksApi=f},d800:function(t,e,n){var o=n("2942");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("216d7e48",o,!0,{sourceMap:!1,shadowMode:!1})},ef0f:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.list_item[data-v-9dedc948]{width:calc(100% - %?50?%);margin:%?25?%;padding:%?0?% %?20?%;border-radius:%?20?%;background-color:#fff}',""]),t.exports=e}}]);