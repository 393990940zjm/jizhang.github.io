(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-application-production_manage-edit_task-edit_task"],{"0ffc":function(t,e,a){"use strict";a.r(e);var i=a("b12a"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"108e":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},n=[]},"2d3b":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.list[data-v-22bacc20]{width:calc(100% - %?50?%);border-radius:%?20?%;margin:%?25?%;padding:%?20?%;background-color:#fff}.submit_btn[data-v-22bacc20]{width:calc(100% - %?250?%);color:#fff}.remove_btn[data-v-22bacc20]{text-align:center;width:%?220?%;height:%?80?%;line-height:%?80?%;border-radius:%?40?%;margin-right:%?30?%;color:#0871db;font-size:%?32?%;background-color:#fff}',""]),t.exports=e},"3909a":function(t,e,a){"use strict";a.r(e);var i=a("8589"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"3afc":function(t,e,a){"use strict";a.r(e);var i=a("a303"),o=a("4e46");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("f9fb");var r,s=a("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"007217ff",null,!1,i["a"],r);e["default"]=l.exports},4626:function(t,e,a){"use strict";var i=a("6b0e"),o=a.n(i);o.a},"4a9c":function(t,e,a){var i=a("c3b2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("6f1edbe4",i,!0,{sourceMap:!1,shadowMode:!1})},"4e46":function(t,e,a){"use strict";a.r(e);var i=a("9e63"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"58bf":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uButton:a("5f80").default,uToast:a("3afc").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"list"},[a("two-type-row",{attrs:{title:"产线名称",value:t.groupName,disabled:!0,placeholder:"请选择",typeModel:"multiSelector",range:t.rangs,rangeKey:"groupName",isPicker:!1,defaultSelector:t.normalSelector,arrowShow:!0},on:{columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.columnchange.apply(void 0,arguments)},getItems:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseItem.apply(void 0,arguments)}}}),a("two-type-row",{attrs:{title:"任务数",inputType:"number"},model:{value:t.params.taskCount,callback:function(e){t.$set(t.params,"taskCount",e)},expression:"params.taskCount"}}),a("two-type-row",{attrs:{title:"物料代码",isFill:!1,value:t.params.materialsCode,isGo:!0,goType:"1",disabled:!0,placeholder:"请选择物料代码"}}),a("two-type-row",{attrs:{title:"物料名称",isFill:!1,value:t.material_name,disabled:!0,placeholder:"自动生成",bgColor:"#FFFFFF"}}),a("two-type-row",{attrs:{title:"规格型号",isFill:!1,value:t.material_model,disabled:!0,placeholder:"自动生成",bgColor:"#FFFFFF"}}),a("two-type-row",{attrs:{title:"模号/夹具号",isFill:!1},model:{value:t.params.modelNumber,callback:function(e){t.$set(t.params,"modelNumber",e)},expression:"params.modelNumber"}}),a("two-type-row",{attrs:{title:"任务交期",value:t.taskFinshDate,disabled:!0,placeholder:"请选择交期日期",typeModel:"time",timeType:"2",isPicker:!1},on:{chooseDate:function(e){arguments[0]=e=t.$handleEvent(e),t.selectDate.apply(void 0,arguments)}}}),a("two-type-row",{attrs:{title:"操作工",value:t.operator,isGo:!0,goType:"2",disabled:!0,placeholder:"请选择"}}),a("two-type-row",{attrs:{title:"客户",isFill:!1,placeholder:"请输入客户名称"},model:{value:t.params.client,callback:function(e){t.$set(t.params,"client",e)},expression:"params.client"}}),a("two-type-row",{attrs:{type:"2",isFill:!1,typeShow:!0,borderShow:!1,title:"备注",placeholder:"可输入0/200字"},model:{value:t.params.remark,callback:function(e){t.$set(t.params,"remark",e)},expression:"params.remark"}})],1),a("v-uni-view",{staticClass:"lf_row_a_f",staticStyle:{margin:"50rpx 25rpx"}},[a("v-uni-view",{staticClass:"remove_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeClick.apply(void 0,arguments)}}},[t._v(t._s(t.$t("删除任务")))]),a("u-button",{staticClass:"submit_btn",attrs:{shape:"circle",loading:t.loading,"custom-style":t.btnStyle,"hair-line":!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitClick.apply(void 0,arguments)}}},[t._v(t._s(t.$t("提交任务")))])],1),a("pop-submit-item",{ref:"popSubmitRef",attrs:{text:"你确定要删除该条任务?",newId:t.dataInfos.productionTaskId,typeFlag:!1,typeClick:"3",type:"4"},on:{popYesClick:function(e){arguments[0]=e=t.$handleEvent(e),t.popYesWay.apply(void 0,arguments)}}}),a("u-toast",{ref:"uToast"})],1)},n=[]},"5f80":function(t,e,a){"use strict";a.r(e);var i=a("108e"),o=a("0ffc");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("4626");var r,s=a("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"4ed92bb2",null,!1,i["a"],r);e["default"]=l.exports},"6b0e":function(t,e,a){var i=a("be61");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("d529a3a4",i,!0,{sourceMap:!1,shadowMode:!1})},8589:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"two_type_row",data:function(){return{show:!1,pickerValue:""}},props:{type:{type:[String,Number],default:"1"},typeShow:{type:Boolean,default:!1},value:{type:String,default:""},title:{type:String,default:""},titleDesp:{type:String,default:""},titleTag:{type:String,default:"："},titleWidth:{type:String,default:"180rpx"},textAlign:{type:String,default:"right"},placeholder:{type:String,default:"请输入内容"},placeholderStyle:{type:String,default:"color:#000000"},bgColor:{type:String,default:"#EEEEEE"},disabled:{type:Boolean,default:!1},arrowShow:{type:Boolean,default:!1},borderBottomColor:{type:String,default:"#BBBBBB"},textHeight:{type:String,default:"160rpx"},isPicker:{type:Boolean,default:!0},inputType:{type:String,default:"text"},typeModel:{type:String,default:"time"},timeType:{type:String,default:"1"},range:{type:Array,default:function(){return[]}},rangeKey:{type:String,default:""},defaultSelector:{type:Array,default:function(){return[0,0]}},isGo:{type:Boolean,default:!1},goType:{type:String,default:""},isMulti:{type:Boolean,default:!1},iconType:{type:String,default:"1"},isFill:{type:Boolean,default:!0}},computed:{valueStr:function(){if(this.isPicker)return this.value;switch(this.typeModel){case"multiSelector":return this.pickerValue?this.pickerValue:this.value;case"selector":return this.pickerValue?this.pickerValue:this.value;default:return this.value}},iconUrl:function(){switch(this.iconType){case"1":return"/static/images/common/down_arrow.png";case"2":return"/static/images/common/blue_scan_code.png";default:return""}},inputStyle:function(){var t="calc(100% - "+this.titleWidth+")";return"2"==this.type?{width:t,"background-color":this.bgColor,"min-height":this.textHeight}:{width:t,"background-color":this.bgColor}},paramsType:function(){switch(this.timeType){case"1":return{year:!0,month:!0,day:!0,hour:!0,minute:!0,second:!1};case"2":return{year:!0,month:!0,day:!0,hour:!1,minute:!1,second:!1};default:return{year:!0,month:!0,day:!0,hour:!0,minute:!0,second:!0}}}},methods:{inputWay:function(t){this.$emit("input",t.detail.value)},pickerClick:function(){if(this.disabled)if(this.isPicker){if(this.isGo)switch(this.goType){case"1":uni.navigateTo({url:"/pages/common/material_code/material_code"});break;case"2":uni.navigateTo({url:"/pages/common/choose_person/choose_person?type="+this.goType+"&isMulti="+this.isMulti});break;case"3":uni.navigateTo({url:"/pages/common/choose_person/choose_person?type="+this.goType+"&isMulti="+this.isMulti});break;case"4":uni.navigateTo({url:"/pages/common/choose_person/choose_person?type="+this.goType+"&isMulti="+this.isMulti});break;case"5":uni.navigateTo({url:"/pages/application/equipment_manage/maintenance/repair_equipment_list/repair_equipment_list"});break;default:break}}else this.show=!0},iconClick:function(){var t=this;switch(this.iconType,this.iconType){case"1":this.isPicker||(this.show=!0);break;case"2":uni.scanCode({success:function(e){t.$emit("scanCodeWay",e)}});break;default:break}},columnchange:function(t){this.$emit("columnchange",t)},confirm:function(t){if("multiSelector"==this.typeModel){var e=t.length-1,a=this.range.length-1,i=this.range[a],o=i[t[e]];this.pickerValue=o[this.rangeKey],this.$emit("getItems",o)}else if("selector"==this.typeModel){console.log(this.range,t);var n=t[0],r={};n?r=this.range[n]:(r=this.range[0],n=0),console.log(r,this.rangeKey),this.pickerValue=r[this.rangeKey],this.$emit("chooseI",n)}else"time"==this.typeModel&&this.$emit("chooseDate",t)}}};e.default=i},8662:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uPicker:a("2d4a").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"item",class:"2"==t.type&&t.typeShow?"lf_row_f":"lf_row_a_f",style:{"border-bottom-color":t.borderBottomColor}},[a("v-uni-view",{staticClass:"item_title",style:{width:t.titleWidth,"text-align":t.textAlign,"margin-top":"2"==t.type&&t.typeShow?"20rpx":"0rpx"}},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.isFill,expression:"isFill"}],staticClass:"mustFill"},[t._v("✳")]),t._v(t._s(t.$t(t.title)+t.titleDesp))],1),a("v-uni-view",{staticClass:"item_title",staticStyle:{"font-size":"28rpx"},style:{"margin-top":"2"==t.type&&t.typeShow?"20rpx":"0rpx"}},[t._v(t._s(t.titleTag))]),"2"!=t.type?a("v-uni-view",{staticClass:"item_right lf_row_a_f",style:t.inputStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}}},["3"==t.type?a("v-uni-view",{staticClass:"item_right_text",style:{width:t.arrowShow?"calc(100% - 60rpx)":"100%"}},[t._v(t._s(t.valueStr))]):t._e(),"1"==t.type?a("v-uni-input",{staticClass:"item_right_input",style:{width:t.arrowShow?"calc(100% - 60rpx)":"100%"},attrs:{type:t.inputType,value:t.valueStr,disabled:t.disabled||t.disabledVal,placeholder:t.placeholder,"placeholder-style":t.placeholderStyle},on:{click:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"top",void 0,e.key,void 0))return null;arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputWay.apply(void 0,arguments)}}}):t._e(),t.arrowShow?a("v-uni-image",{staticClass:"item_right_icon",attrs:{src:t.iconUrl},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.iconClick.apply(void 0,arguments)}}}):t._e()],1):t._e(),"2"==t.type?a("v-uni-textarea",{staticClass:"item_texrarea",style:t.inputStyle,attrs:{value:t.valueStr,disabled:t.disabled,"auto-height":!0,maxlength:"200",placeholder:t.placeholder,"placeholder-style":t.placeholderStyle},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputWay.apply(void 0,arguments)}}}):t._e(),a("u-picker",{attrs:{"default-time":t.valueStr,mode:t.typeModel,range:t.range,"range-key":t.rangeKey,params:t.paramsType,defaultSelector:t.defaultSelector},on:{columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.columnchange.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},n=[]},"8c9b":function(t,e,a){"use strict";var i=a("4ea4");a("4de4"),a("4160"),a("d81d"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("c834")),n=i(a("e598")),r=a("a119"),s=a("c35e"),l=new r.DeviceApi,c=new s.TasksApi,u={components:{twoTypeRow:o.default,popSubmitItem:n.default},data:function(){return{pageCount:3,dataInfos:{},groupName:"",operator:"",material_name:"",material_model:"",taskFinshDate:"",params:{productionTaskId:"",groupId:"",taskCount:"",modelNumber:"",taskDeliveryTime:"",materialsCode:"",materialsId:"",operatorUserId:"",client:"",remark:""},rangs:[[],[]],allRangs:[],normalSelector:[0,0],loading:!1}},onLoad:function(t){this.dataInfos=JSON.parse(t.taskInfo),this.taskFinshDate=this.dataInfos.taskDeliveryTime.substring(0,10),this.dealWithDataInfo()},onReady:function(){this.common.setNavTitleWay(this,"编辑任务"),this.getAllGroupByFactoryId()},onShow:function(){var t=this.$store.state.operatingInfo;if(t.userId){var e=t.userName;this.operator=e||"",this.params.operatorUserId=t.userId}var a=this.$store.state.materialInfo;a.materialsId&&(this.params.materialsCode=a.materialsCode,this.material_name=a.materialsName,this.params.materialsId=a.materialsId,this.material_model=a.materialsModel)},onUnload:function(){this.$store.commit("setOperatingInfo",{}),this.$store.commit("setCustomerInfo",{}),this.$store.commit("setMaterialInfo",{})},computed:{themeColor:function(){return this.$store.state.config.lfColorConfig.themeColor},btnStyle:function(){return{"font-size":"32rpx",color:"#FFFFFF","background-color":this.themeColor}}},methods:{dealWithDataInfo:function(){var t=this.dataInfos;this.groupName=t.groupName,this.params.productionTaskId=t.productionTaskId,this.params.groupId=t.groupId,this.params.taskCount=String(t.taskCount),this.params.modelNumber=t.modelNumber,this.params.taskDeliveryTime=t.taskDeliveryTime,this.params.materialsCode=t.materialsCode,this.params.materialsId=t.materialsId,this.material_name=t.materialsName,this.material_model=t.materialsModel,this.params.operatorUserId=t.operatorUserId,this.operator=t.operatorUserRealName,this.params.client=t.client,this.params.remark=t.remark},columnchange:function(t){switch(t.column){case 0:this.normalSelector[0]=t.index,this.rangs[1]=this.allRangs[t.index].children.length>0?this.allRangs[t.index].children:[this.allRangs[t.index]];break;case 1:this.normalSelector[1]=t.index;break;default:this.normalSelector=[0,0];break}},chooseItem:function(t){this.params.groupId=t.groupId,this.groupName=t.groupName},selectDate:function(t){this.taskFinshDate=t.year+"-"+t.month+"-"+t.day,this.params.taskDeliveryTime=t.year+"-"+t.month+"-"+t.day+" 00:00:00"},removeClick:function(){this.$refs.popSubmitRef.showWay()},submitClick:function(){var t=this;this.params.productionTaskId?this.params.groupId?this.params.taskCount?this.params.materialsCode?this.params.modelNumber?this.params.taskDeliveryTime?this.params.operatorUserId?this.params.client?(this.loading=!0,c.setInsertOrUpdate(this.params,(function(e){setTimeout((function(){t.loading=!1}),500),"0000"===e.code&&(t.backRefreshDataWay(),t.common.toastSuccessWay(e.message,t))}))):this.common.toastWarningWay("请输入客户名称",this):this.common.toastWarningWay("请选择操作工",this):this.common.toastWarningWay("请选择任务交期日期",this):this.common.toastWarningWay("请输入模号、夹具号",this):this.common.toastWarningWay("请选择物料代码",this):this.common.toastWarningWay("请输入任务数",this):this.common.toastWarningWay("请选择任务产线",this):this.common.toastWarningWay("生产任务单异常，请检查",this)},popYesWay:function(){var t=this;this.loading=!0,c.setdeleteTaskById(this.dataInfos.productionTaskId,(function(e){"0000"===e.code&&setTimeout((function(){t.$refs.popSubmitRef.loadingWay(),t.backRefreshDataWay()}),500)}))},backRefreshDataWay:function(){var t=this;setTimeout((function(){var e=getCurrentPages(),a=e[e.length-t.pageCount];a.$vm.refreshData(),uni.navigateBack({delta:t.pageCount-1})}),500)},getAllGroupByFactoryId:function(){var t=this;l.getAllGroupByFactoryId((function(e){if("0000"===e.code){var a=[];a=e.rows.filter((function(t){if("2"==t.groupType)return t}));var i=[];i=e.rows.filter((function(t){if("3"==t.groupType)return t})),a.map((function(t){var e=[];i.forEach((function(a){t.groupId==a.parentId&&e.push(a)})),t.children=e})),t.allRangs=a,t.allRangs.length>0&&(t.rangs[0]=t.allRangs,t.rangs[1]=t.allRangs[0].children.length>0?t.allRangs[0].children:[t.allRangs[0]])}}))}}};e.default=u},"9e63":function(t,e,a){"use strict";a("c975"),a("a9e3"),a("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=i},a119:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.DeviceApi=void 0;var o=i(a("d4ec")),n=i(a("bee2")),r=i(a("262e")),s=i(a("2caf")),l=a("3909"),c="deviceGroup/",u="deviceLive/",d="appStatisticsDevice/",p=function(t){(0,r.default)(a,t);var e=(0,s.default)(a);function a(){return(0,o.default)(this,a),e.apply(this,arguments)}return(0,n.default)(a,[{key:"getCodeToDeviceDetail",value:function(t,e){var a="device/getPageDeviceByDeviceCode.action?deviceCode="+t;this.commonAjax(null,a,1,e)}},{key:"getAllDeviceGroupInformation",value:function(t){var e=getApp().globalData.factoryId,a=c+"getAllDeviceGroupInformation.action?factoryId="+e;this.commonAjax(null,a,1,t)}},{key:"getPageDeviceListInformationVo",value:function(t,e,a,i){var o=c+"getPageDeviceListInformationVo.action?current="+e+"&size="+a;this.commonAjax(t,o,1,i)}},{key:"getAllGroupByFactoryId",value:function(t){var e=getApp().globalData.factoryId,a=c+"getAllGroupByFactoryId.action?factoryId="+e;this.commonAjax(null,a,1,t)}},{key:"getDeviceListInformationQueryParameter",value:function(t){var e=getApp().globalData.factoryId,a=c+"getDeviceListInformationQueryParameter.action?factoryId="+e;this.commonAjax(null,a,1,t)}},{key:"getDeviceInfo",value:function(t,e){var a=u+"getDeviceInfo.action?deviceCode="+t;this.commonAjax(null,a,1,e)}},{key:"getPageHamsterInformation",value:function(t,e,a,i,o){var n=u+"getPageHamsterInformation.action?deviceCode="+t+"&current="+e+"&size="+a+"&time="+i;this.commonAjax(null,n,1,o)}},{key:"getListAPPQueryParameter",value:function(t,e){var a=u+"getListAPPQueryParameter.action?deviceCode="+t;this.commonAjax(null,a,1,e)}},{key:"getPageAPPHamsterInformation",value:function(t,e,a,i,o){var n=u+"getPageAPPHamsterInformation.action?deviceCode="+t+"&relationshipIds="+e+"&current="+a+"&size="+i;this.commonAjax(null,n,1,o)}},{key:"getOneDayDetailStateClockInfo",value:function(t,e,a,i,o){var n=u+"getOneDayDetailStateClockInfo.action?deviceCode="+t+"&current="+e+"&size="+a+"&time="+i;this.commonAjax(null,n,1,o)}},{key:"getOneDayDetailStateClock",value:function(t,e,a){var i=u+"getOneDayDetailStateClock.action?deviceCode="+t+"&time="+e;this.commonAjax(null,i,1,a)}},{key:"getOEEVaildStartingUp",value:function(t,e,a){var i=d+"getDeviceTimeAvailability.action";this.commonAjax(t,i,2,a)}},{key:"getWarnStatistics",value:function(t,e,a){var i=d+"getDeviceTimeWarnCount.action";this.commonAjax(t,i,2,a)}},{key:"getProduction",value:function(t,e,a){var i=d+"getDeviceTimeProduction.action";this.commonAjax(t,i,2,a)}},{key:"selectDeviceByCondition",value:function(t,e){var a="device/selectDeviceByCondition.action";this.commonAjax(t,a,2,e)}},{key:"updateBatchDevice",value:function(t,e){var a="device/updateBatchDevice.action";this.commonAjax(t,a,2,e)}},{key:"getPageDeviceComplexByCondition",value:function(t,e,a,i){var o="device/getPageDeviceComplexByCondition.action?current="+e+"&size="+a;this.commonAjax(t,o,1,i)}},{key:"getImage",value:function(t,e){var a="fileResource/getById.action";this.commonAjax(t,a,2,e)}},{key:"extendPropertyInsertOrUpdateBatch",value:function(t,e){var a="extendPropertyValue/insertOrUpdateBatch.action";this.commonAjax(t,a,3,e)}}]),a}(l.Request);e.DeviceApi=p},a303:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uIcon:a("d7b2").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?a("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),a("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},n=[]},a6bb:function(t,e,a){"use strict";var i=a("f239"),o=a.n(i);o.a},b12a:function(t,e,a){"use strict";a("c975"),a("a9e3"),a("d3b7"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(a){var i=a[0];if(i.width&&i.width&&(i.targetWidth=i.height>i.width?i.height:i.width,i.targetWidth)){e.fields=i;var o="",n="";o=t.touches[0].clientX,n=t.touches[0].clientY,e.rippleTop=n-i.top-i.targetWidth/2,e.rippleLeft=o-i.left-i.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var a="";a=uni.createSelectorQuery().in(t),a.select(".u-btn").boundingClientRect(),a.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=i},be61:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.u-btn[data-v-4ed92bb2]::after{border:none}.u-btn[data-v-4ed92bb2]{position:relative;border:0;display:inline-flex;overflow:visible;line-height:1;\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;transition:all .15s}.u-btn--bold-border[data-v-4ed92bb2]{border:1px solid #fff}.u-btn--default[data-v-4ed92bb2]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-4ed92bb2]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-4ed92bb2]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-4ed92bb2]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-4ed92bb2]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-4ed92bb2]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-4ed92bb2]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-4ed92bb2]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-4ed92bb2]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-4ed92bb2]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-4ed92bb2]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-4ed92bb2]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-4ed92bb2]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-4ed92bb2]{border-radius:%?100?%}.u-round-circle[data-v-4ed92bb2]::after{border-radius:%?100?%}.u-loading[data-v-4ed92bb2]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-4ed92bb2]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-4ed92bb2]{display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-4ed92bb2]{display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-4ed92bb2]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-4ed92bb2]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-4ed92bb2]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-4ed92bb2]{background:#18b566!important;color:#fff}.u-info-hover[data-v-4ed92bb2]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-4ed92bb2]{background:#f29100!important;color:#fff}.u-error-hover[data-v-4ed92bb2]{background:#dd6161!important;color:#fff}',""]),t.exports=e},c3b2:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.u-toast[data-v-007217ff]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-007217ff]{opacity:1}.u-icon[data-v-007217ff]{margin-right:%?10?%;\ndisplay:flex;flex-direction:row;\nalign-items:center;line-height:normal}.u-position-center[data-v-007217ff]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-007217ff]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-007217ff]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-007217ff]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-007217ff]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-007217ff]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-007217ff]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-007217ff]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-007217ff]{color:#fff;background-color:#585858}',""]),t.exports=e},c834:function(t,e,a){"use strict";a.r(e);var i=a("8662"),o=a("3909a");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("a6bb");var r,s=a("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"276d4a52",null,!1,i["a"],r);e["default"]=l.exports},e56a:function(t,e,a){var i=a("2d3b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("3359cbba",i,!0,{sourceMap:!1,shadowMode:!1})},e59b:function(t,e,a){"use strict";a.r(e);var i=a("58bf"),o=a("f35d");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("fc47");var r,s=a("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"22bacc20",null,!1,i["a"],r);e["default"]=l.exports},e968:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.item[data-v-276d4a52]{width:100%;min-height:%?85?%;border-bottom:%?1?% solid #bbb}.item[data-v-276d4a52]:last-child{border-bottom-width:%?0?%}.item_title[data-v-276d4a52]{color:#828282;font-size:%?24?%}.item_title .mustFill[data-v-276d4a52]{color:red;font-weight:700}.item_right[data-v-276d4a52]{height:%?64?%;padding:%?0?% %?15?%}.item_right_input[data-v-276d4a52]{color:#000;font-size:%?24?%;pointer-events:none}.item_right_text[data-v-276d4a52]{color:#000;font-size:%?24?%}.item_right_icon[data-v-276d4a52]{width:%?60?%;height:%?60?%}.item_texrarea[data-v-276d4a52]{margin:%?10?% %?0?%;background-color:#eee;padding:%?10?%;font-size:%?24?%}',""]),t.exports=e},f239:function(t,e,a){var i=a("e968");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("4753d58f",i,!0,{sourceMap:!1,shadowMode:!1})},f35d:function(t,e,a){"use strict";a.r(e);var i=a("8c9b"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},f9fb:function(t,e,a){"use strict";var i=a("4a9c"),o=a.n(i);o.a},fc47:function(t,e,a){"use strict";var i=a("e56a"),o=a.n(i);o.a}}]);