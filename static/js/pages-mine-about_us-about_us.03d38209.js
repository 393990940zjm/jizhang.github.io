(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-about_us-about_us"],{"047c":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.logo_icon[data-v-083f35f4]{margin:%?127?% %?0?% %?45?% %?0?%;width:%?126?%;height:%?126?%}.version_num[data-v-083f35f4]{font-weight:400;font-size:%?28?%;color:#818181}.us_content_view[data-v-083f35f4]{width:calc(100% - %?52?%);margin:%?70?% %?28?% %?50?% %?24?%;background-color:#fff;border-radius:%?10?%}.us_desp[data-v-083f35f4]{position:absolute;bottom:%?70?%;color:#bbb;font-size:%?20?%}',""]),t.exports=e},"0611":function(t,e,n){"use strict";n.r(e);var o=n("873c"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"0ffb":function(t,e,n){"use strict";n.r(e);var o=n("ca13"),i=n("0611");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("8f4e");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"083f35f4",null,!1,o["a"],s);e["default"]=c.exports},"1efa":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uPopup:n("ca14").default,uLineProgress:n("9e3d").default,uToast:n("3afc").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"hot_submit_item"},[n("u-popup",{attrs:{"mask-close-able":!1,mode:"center","border-radius":"10",width:"500"},model:{value:t.hotShow,callback:function(e){t.hotShow=e},expression:"hotShow"}},[n("v-uni-view",{staticClass:"hot_item lf_column_a_f"},[n("v-uni-image",{staticClass:"hot_item_icon",attrs:{src:"/static/images/main/hot_update.png"}}),n("v-uni-text",{staticClass:"hot_item_title"},[t._v(t._s(t.updateInfo.versionDesc))]),n("v-uni-scroll-view",{staticClass:"hot_item_content",attrs:{"scroll-y":"true"}},[n("v-uni-rich-text",{attrs:{nodes:t.updateInfo.versionContent}})],1),n("u-line-progress",{directives:[{name:"show",rawName:"v-show",value:t.isPercent,expression:"isPercent"}],attrs:{striped:!0,"active-color":t.themeColor,percent:t.percent}}),t.restartShow?t._e():n("v-uni-view",{staticClass:"lf_row_a_f",staticStyle:{width:"100%"}},[n("v-uni-view",{staticClass:"bottom_btn bottom_btn_one",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnClick(1)}}},[t._v("稍后提醒")]),n("v-uni-button",{staticClass:"bottom_btn bottom_btn_two",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnClick(2)}}},[t._v(t._s(t.btnText))])],1),t.restartShow?n("v-uni-view",{staticClass:"restart_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.restartClick.apply(void 0,arguments)}}},[t._v("重启更新")]):t._e()],1)],1),n("u-toast",{ref:"uToast"})],1)},a=[]},"3a09":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"list_row_item",props:{title:{type:String,default:""},desp:{type:String,default:""},despColor:{type:String,default:"#BBBBBB"},arrowShow:{type:Boolean,default:!0},lineShow:{type:Boolean,default:!0}},methods:{clickWay:function(){this.$emit("chooseClick",this.title)}}};e.default=o},"41ca":function(t,e,n){"use strict";n.r(e);var o=n("cbb2"),i=n("93d7");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("5074");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"bc8ed412",null,!1,o["a"],s);e["default"]=c.exports},"469f":function(t,e,n){var o=n("bef5");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("000a7462",o,!0,{sourceMap:!1,shadowMode:!1})},"48b4":function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.CommonApi=void 0;var i=o(n("d4ec")),a=o(n("bee2")),s=o(n("262e")),r=o(n("2caf")),c=n("3909"),u="fileResource/",l="appVersion/",d=function(t){(0,s.default)(n,t);var e=(0,r.default)(n);function n(){return(0,i.default)(this,n),e.apply(this,arguments)}return(0,a.default)(n,[{key:"uploadBatchFile",value:function(t){var e=u+"uploadBatchFile.action";this.commonAjax(null,e,2,t)}},{key:"deleteByIdFile",value:function(t,e){var n=u+"deleteById.action";this.commonAjax({id:t},n,2,e)}},{key:"getAboutUs",value:function(t){var e=l+"aboutUs.action";this.commonAjax(null,e,2,t)}},{key:"appVersionDown",value:function(t,e){var n=l+"appVersionDown.action";this.httpsAjax({versionCode:t},n,2,e)}},{key:"getPageMyTaskByFactoryId",value:function(t,e,n){var o=getApp().globalData.factoryId,i="myTask/getPageMyTaskByFactoryId.action?current="+t+"&size="+e+"&factoryId="+o;this.commonAjax(null,i,1,n)}},{key:"getProcessConfiguration",value:function(t,e){var n="configuration/getProcessConfiguration.action";this.commonAjax({configurationRelationTypeEnum:t},n,2,e)}},{key:"getHomeDevStatus",value:function(t){var e=getApp().globalData.factoryId,n="deviceStateScale/getMainControlRoomStatistics.action?factoryId="+e;this.commonAjax(null,n,2,t)}},{key:"getCountStatistics",value:function(t){var e=getApp().globalData.factoryId,n="appIndex/getCountStatistics.action?factoryId="+e,o={};e&&(o={conditionJson1:[{column:"factoryId",ptype:"int",type:"eq",value:e}]}),this.commonAjax(o,n,1,t)}},{key:"getProductionStatistics",value:function(t,e){var n="appIndex/getProductionStatistics.action?timeType="+t;this.commonAjax(null,n,2,e)}},{key:"getEnergyStatistics",value:function(t,e){var n="appIndex/getEnergyStatistics.action?timeType="+t;this.commonAjax(null,n,2,e)}},{key:"deviceGroupGetTreeFunc",value:function(t){var e="deviceGroup/getTree.action";this.commonAjax(null,e,2,t)}},{key:"selectGroup",value:function(t){var e="deviceGroup/selectGroup.action";this.commonAjax(null,e,2,t)}},{key:"deviceWorkshopTypeTree",value:function(t){var e="deviceWorkshopType/getTree.action";this.commonAjax(null,e,2,t)}}]),n}(c.Request);e.CommonApi=d},5074:function(t,e,n){"use strict";var o=n("6ad9"),i=n.n(o);i.a},"6ad9":function(t,e,n){var o=n("8ecf");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("7d919236",o,!0,{sourceMap:!1,shadowMode:!1})},"7bbc":function(t,e,n){"use strict";var o=n("469f"),i=n.n(o);i.a},"7f23":function(t,e,n){"use strict";n.r(e);var o=n("acd3"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"873c":function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("41ca")),a=o(n("d194")),s=n("48b4"),r=new s.CommonApi,c={components:{listRowItem:i.default,hotUpdate:a.default},data:function(){return{uploadInfo:{isHot:!1,version:"",version_desp:"",iosUrl:"",andoridUrl:"",wgtUrl:""},curVersion:"",list:[{title:"客服电话",desp:"",despColor:"",arrow:!1},{title:"公司官网",desp:"",despColor:"",arrow:!1},{title:"版本更新",despColor:"",desp:"",arrow:!0}]}},onLoad:function(){var t=this;r.getAboutUs((function(e){"0000"===e.code&&(t.list[0].desp=e.rows.consumerHotLine,t.list[1].desp=e.rows.companyWebSite)}))},methods:{chooseWay:function(t){"版本更新"==t?this.curVersion!=this.uploadInfo.versionCode&&this.uploadInfo.versionCode&&this.$refs.hotUpdateRef.showWay():"客服电话"==t&&this.list[0].desp&&uni.makePhoneCall({phoneNumber:this.list[0].desp})}}};e.default=c},"8ecf":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.user_list_item[data-v-bc8ed412]{height:%?98?%;justify-content:space-between;font-weight:400}.user_list_item_title[data-v-bc8ed412]{margin-left:%?44?%;font-size:%?28?%;color:#818181}.user_list_item_right_desp[data-v-bc8ed412]{font-size:%?24?%;color:#bbb}.user_list_item_right_arrow[data-v-bc8ed412]{width:%?60?%;height:%?60?%}.user_list_line[data-v-bc8ed412]{margin:%?0?% %?20?% %?0?% %?18?%;height:%?1?%;background-color:#eee}',""]),t.exports=e},"8f4e":function(t,e,n){"use strict";var o=n("d0fd5"),i=n.n(o);i.a},"93d7":function(t,e,n){"use strict";n.r(e);var o=n("3a09"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},acd3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"hot_update",data:function(){return{percent:0,isPercent:!1,hotShow:!1,btnText:"立即下载",restartShow:!1,loading:!1}},props:{updateInfo:{type:Object,default:function(){return{}}}},watch:{updateInfo:{handler:function(t){t.versionId&&(1==t.isLargeVersion?"ios"==this.phoneType?this.btnText="前往下载":"android"==this.phoneType&&(this.btnText="立即安装"):1==t.isHot&&(this.btnText="立即下载"))},immediate:!0}},computed:{themeColor:function(){return this.$store.state.config.lfColorConfig.themeColor},phoneType:function(){return uni.getSystemInfoSync().platform}},methods:{btnClick:function(t){var e=this;if(1==t)e.$emit("cancelClick"),e.closeWay();else if(2==t)if("前往下载"===this.btnText)if(this.updateInfo.iosAppId){var n=this.updateInfo.iosAppId;plus.runtime.launchApplication({action:"itms-apps://itunes.apple.com/cn/app/id".concat(n,"?mt=8")},(function(t){}))}else this.common.toastErrorWay("请检查APPId是否正确",this);else"立即安装"===this.btnText?this.downUpdateWay(2):"立即下载"===this.btnText&&this.downUpdateWay(1)},downUpdateWay:function(t){var e=this,n=e.updateInfo,o=2===t?n.androidUrl:n.wgtUrl;if(e.loading=!0,e.isPercent=!0,console.log("数据",e.updateInfo,o),o){var i=uni.downloadFile({url:"http://"+o,success:function(t){200===t.statusCode&&(e.loading=!1,plus.runtime.install(t.tempFilePath,{force:!1},(function(){e.restartShow=!0}),(function(t){uni.showModal({title:"温馨提示",content:t.message,showCancel:!1,confirmText:"确定",success:function(t){t.confirm}}),uni.showToast({icon:"none",title:"安装失败"})})))}});i.onProgressUpdate((function(t){e.percent=t.progress}))}},closeWay:function(){this.hotShow=!1},showWay:function(){this.hotShow=!0},restartClick:function(){plus.runtime.restart()}}};e.default=o},bef5:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */[data-v-5fed3b4d] .u-mode-center-box{background-color:transparent!important}.hot_item[data-v-5fed3b4d]{text-align:center;margin-top:%?80?%;width:100%;border-radius:%?10?%;color:#828282;font-size:%?28?%;background-color:#fff;padding:%?0?% %?20?% %?40?% %?20?%}.hot_item_icon[data-v-5fed3b4d]{margin-top:%?-80?%;width:%?200?%;height:%?200?%}.hot_item_title[data-v-5fed3b4d]{color:#0871db;font-size:%?32?%;font-weight:500;margin-bottom:%?20?%}.hot_item_content[data-v-5fed3b4d]{width:calc(100% - %?40?%);padding:%?20?%;text-align:left;font-size:%?26?%;max-height:%?240?%}.hot_item .bottom_btn[data-v-5fed3b4d]{width:%?200?%;height:%?84?%;font-size:%?30?%;margin-top:%?20?%;border-radius:%?42?%}.hot_item .bottom_btn_one[data-v-5fed3b4d]{text-align:center;line-height:%?84?%;color:#0871db;border:%?2?% solid #0871db}.hot_item .bottom_btn_two[data-v-5fed3b4d]{line-height:%?80?%;color:#fff;background-color:#0871db}.hot_item .restart_btn[data-v-5fed3b4d]{width:%?300?%;height:%?80?%;line-height:%?80?%;border-radius:%?40?%;margin-top:%?20?%;color:#fff;font-size:%?32?%;background-color:#0871db}',""]),t.exports=e},ca13:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"lf_column_a_f"},[n("v-uni-image",{staticClass:"logo_icon",attrs:{src:"/static/images/user/logo.png"}}),n("v-uni-text",{staticClass:"version_num"},[t._v(t._s("版本 "+t.curVersion))]),n("v-uni-view",{staticClass:"us_content_view"},t._l(t.list,(function(e,o){return n("list-row-item",{key:o,attrs:{title:e.title,desp:e.desp,despColor:e.despColor,arrowShow:e.arrow},on:{chooseClick:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseWay.apply(void 0,arguments)}}})})),1),n("v-uni-view",{staticClass:"us_desp lf_column_f"},[n("v-uni-text",[t._v("沙塔信息技术有限公司")]),n("v-uni-text",[t._v("copyright©2005-2020")])],1),n("hot-update",{ref:"hotUpdateRef",attrs:{updateInfo:t.uploadInfo}})],1)},a=[]},cbb2:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickWay.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"user_list_item lf_row_a_f ",style:{"padding-right":t.arrowShow?"0rpx":"44rpx"}},[n("v-uni-text",{staticClass:"user_list_item_title"},[t._v(t._s(t.$t(t.title)))]),n("v-uni-view",{staticClass:"user_list_item_right lf_row_a_f"},[n("v-uni-text",{staticClass:"user_list_item_right_desp",style:{color:t.despColor}},[t._v(t._s(t.desp))]),t.arrowShow?n("v-uni-image",{staticClass:"user_list_item_right_arrow",attrs:{src:"/static/images/user/gray_arrow.png"}}):t._e()],1)],1),t.lineShow?n("v-uni-view",{staticClass:"user_list_line"}):t._e()],1)},a=[]},d0fd5:function(t,e,n){var o=n("047c");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("9b6ccc12",o,!0,{sourceMap:!1,shadowMode:!1})},d194:function(t,e,n){"use strict";n.r(e);var o=n("1efa"),i=n("7f23");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("7bbc");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"5fed3b4d",null,!1,o["a"],s);e["default"]=c.exports}}]);