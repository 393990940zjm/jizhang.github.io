(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-statistical-statistical_report"],{"15fa":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-scroll-view",{style:{width:"100%",height:"100%"},attrs:{"scroll-y":!0}},[e("v-uni-view",{style:{margin:"20rpx 24rpx 0rpx 24rpx","margin-top":t.topH+24+"rpx"}},[e("statistical-report-item",{on:{loadUpDate:function(a){arguments[0]=a=t.$handleEvent(a),t.loadDataWay.apply(void 0,arguments)}}}),t._l(t.listCharts,(function(t,a){return e("chart-item",{key:a,attrs:{id:"chart"+a,typeI:a,yText:t.title,chartData:t,isPercent:!1}})}))],2)],1)},n=[]},"18e5":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"statistical_report_items"},[e("v-uni-view",{staticClass:"statistical_report_item"},[e("v-uni-text",{staticClass:"statistical_report_item_title"},[t._v(t._s(t.$t("当日产量")))]),e("v-uni-text",{staticClass:"statistical_report_item_data"},[t._v(t._s(t._f("dataRule")(t.reportData.todayProduction)))]),e("v-uni-view",{staticClass:"compare",style:t.compare[0]<0?{"background-color":"#FF9D9D"}:{"background-color":"#A0D287"}},[e("v-uni-text",{staticClass:"compare_title"},[t._v("↑较昨日")]),e("v-uni-text",{staticClass:"compare_data"},[t._v(t._s(t._f("compareDataRule")(t.compare[0])))])],1)],1),e("v-uni-view",{staticClass:"statistical_report_item"},[e("v-uni-text",{staticClass:"statistical_report_item_title"},[t._v(t._s(t.$t("平均日产量")))]),e("v-uni-text",{staticClass:"statistical_report_item_data"},[t._v(t._s(t._f("dataRule")(t.reportData.avgDayProduction)))])],1),e("v-uni-view",{staticClass:"statistical_report_item"},[e("v-uni-text",{staticClass:"statistical_report_item_title"},[t._v(t._s(t.$t("周总产量")))]),e("v-uni-text",{staticClass:"statistical_report_item_data"},[t._v(t._s(t._f("dataRule")(t.reportData.weekProduction)))]),e("v-uni-view",{staticClass:"compare",style:t.compare[1]<0?{"background-color":"#FF9D9D"}:{"background-color":"#A0D287"}},[e("v-uni-text",{staticClass:"compare_title"},[t._v("↑较昨日")]),e("v-uni-text",{staticClass:"compare_data"},[t._v(t._s(t._f("compareDataRule")(t.compare[1])))])],1)],1)],1),e("v-uni-view",{staticClass:"statistical_report_items"},[e("v-uni-view",{staticClass:"statistical_report_item"},[e("v-uni-text",{staticClass:"statistical_report_item_title"},[t._v(t._s(t.$t("当日警告")))]),e("v-uni-text",{staticClass:"statistical_report_item_data"},[t._v(t._s(t._f("dataRule")(t.reportData.todayWarn)))]),e("v-uni-view",{staticClass:"compare",style:t.compare[2]<0?{"background-color":"#FF9D9D"}:{"background-color":"#A0D287"}},[e("v-uni-text",{staticClass:"compare_title"},[t._v("↑较昨日")]),e("v-uni-text",{staticClass:"compare_data"},[t._v(t._s(t._f("compareDataRule")(t.compare[2])))])],1)],1),e("v-uni-view",{staticClass:"statistical_report_item"},[e("v-uni-text",{staticClass:"statistical_report_item_title"},[t._v(t._s(t.$t("平均日警告")))]),e("v-uni-text",{staticClass:"statistical_report_item_data"},[t._v(t._s(t._f("dataRule")(t.reportData.avgDayWarn)))])],1),e("v-uni-view",{staticClass:"statistical_report_item"},[e("v-uni-text",{staticClass:"statistical_report_item_title"},[t._v(t._s(t.$t("周警告")))]),e("v-uni-text",{staticClass:"statistical_report_item_data"},[t._v(t._s(t._f("dataRule")(t.reportData.weekWarn)))]),e("v-uni-view",{staticClass:"compare",style:t.compare[3]<0?{"background-color":"#FF9D9D"}:{"background-color":"#A0D287"}},[e("v-uni-text",{staticClass:"compare_title"},[t._v("↑较昨日")]),e("v-uni-text",{staticClass:"compare_data"},[t._v(t._s(t._f("compareDataRule")(t.compare[3])))])],1)],1)],1)],1)},n=[]},"2b24":function(t,a,e){var i=e("76a6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("64f23512",i,!0,{sourceMap:!1,shadowMode:!1})},"315a":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"lf_column_f chart_item"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.yText)),t.isPercent?e("v-uni-text",{staticStyle:{"font-size":"24rpx"}}):t._e()],1),e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":t.canvasId,id:t.canvasId,"disable-scroll":!1}})],1)],1)},n=[]},"398f":function(t,a,e){"use strict";e.r(a);var i=e("3a0e"),r=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=r.a},"3a0e":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e("547f"),r=new i.StatisticalApi,n={created:function(){var t=this;r.getProductionAndWarnCount((function(a){t.reportData=a.rows?a.rows:{}}))},filters:{dataRule:function(t){return t?t>=1e4?(t/1e4).toFixed(1)+"W":t.toFixed(0):0},compareDataRule:function(t){return t?t<=0?t:"+"+t:0}},data:function(){return{reportData:{},compare:[1,30,-1,-30]}}};a.default=n},"547f":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.StatisticalApi=void 0;var r=i(e("d4ec")),n=i(e("bee2")),s=i(e("262e")),c=i(e("2caf")),o=e("3909"),u="appStatisticsReport/",l="appStatisticsDevice/",d="deviceGroup/",p=function(t){(0,s.default)(e,t);var a=(0,c.default)(e);function e(){return(0,r.default)(this,e),a.apply(this,arguments)}return(0,n.default)(e,[{key:"getRecentDayProductionCount",value:function(t,a){var e=getApp().globalData.factoryId,i=u+"getRecentDayProductionCount.action";this.commonAjax({recentDay:t,factoryId:e},i,2,a)}},{key:"getProductionAndWarnCount",value:function(t){var a=getApp().globalData.factoryId,e=u+"getProductionAndWarnCount.action";this.commonAjax({factoryId:a},e,2,t)}},{key:"getAllGroupByFactoryId",value:function(t){var a=getApp().globalData.factoryId,e=d+"getAllGroupByFactoryId.action";this.commonAjax({factoryId:a},e,2,t)}},{key:"getDeviceProductionStatistics",value:function(t,a){var e=l+"getDeviceProductionStatistics.action";this.commonAjax({current:t.current,endTime:t.endTime,groupId:t.groupId,size:t.size,startTime:t.startTime},e,2,a)}},{key:"getDeviceStateStatistics",value:function(t,a){var e=l+"getDeviceStateStatistics.action";this.commonAjax({current:t.current,endTime:t.endTime,groupId:t.groupId,size:t.size,startTime:t.startTime},e,2,a)}}]),e}(o.Request);a.StatisticalApi=p},6817:function(t,a,e){"use strict";var i=e("a057"),r=e.n(i);r.a},"763b":function(t,a,e){"use strict";var i=e("2b24"),r=e.n(i);r.a},"76a6":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.chart_item[data-v-deabe180]{width:100%;padding:%?20?% %?0?%;margin-bottom:%?20?%;border-radius:%?10?%;background-color:#fff}.chart_item .title[data-v-deabe180]{padding:%?0?% %?10?%;margin-left:%?20?%;font-size:%?28?%;color:#828282;width:100%}.chart_item .qiun-charts[data-v-deabe180]{width:%?702?%;height:%?500?%}.chart_item .charts[data-v-deabe180]{width:%?702?%;height:%?500?%}',""]),t.exports=a},"7c9a":function(t,a,e){"use strict";var i=e("4ea4");e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r,n=i(e("97da")),s=null,c={props:{yText:{type:String,default:""},typeI:{type:Number,default:0},update:{type:Boolean,default:!1},chartData:{tyep:Array,default:function(){return{categories:[],series:[]}}},isPercent:{type:Boolean,default:!0}},data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},created:function(){r=this,this.cWidth=uni.upx2px(702),this.cHeight=uni.upx2px(500)},watch:{chartData:{handler:function(t,a){this.getServerData()},immediate:!0}},computed:{xText:function(){switch(this.typeI){case 0:return"(小时)";case 1:return"(天)";case 2:return"(月)";default:return""}},canvasId:function(){return"canvasLineA"+this.typeI},xItemLen:function(){return 9}},methods:{getServerData:function(){var t=this;this.chartData.categories.length>0&&this.$nextTick((function(){r.showLineA(t.canvasId,t.chartData)}),200)},showLineA:function(t,a){s=new n.default({$this:r,canvasId:t,canvas2d:!0,type:"area",fontSize:11,padding:[15,20,0,15],dataLabel:!0,dataPointShape:!0,dataPointShapeType:"hollow",colors:["#8774FF"],background:"#FFFFFF",pixelRatio:r.pixelRatio,categories:a.categories,series:a.series,animation:!0,legend:{show:!1},xAxis:{axisLineColor:"#BBBBBB",calibration:!0,rotateLabel:!0,disableGrid:!0,boundaryGap:"justify",itemCount:r.xItemLen,scrollShow:!1,scrollAlign:"left"},yAxis:{gridType:"solid",gridColor:"#EEEEEE",data:[{format:function(t){return t.toFixed(2)}}]},width:r.cWidth*r.pixelRatio,height:r.cHeight*r.pixelRatio,extra:{area:{type:"curve",addLine:!0,opacity:1,gradient:!0}}})},touchLineA:function(t){s.showToolTip(t,{format:function(t,a){return"时间:"+a+" "+t.data+"%"}})}}};a.default=c},"8c83":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */.statistical_report_items[data-v-b6d2d000]{display:flex;flex-direction:row;justify-content:space-between;margin:%?24?% %?0?%}.statistical_report_items .statistical_report_item[data-v-b6d2d000]{display:flex;flex-direction:column;border-radius:%?10?%;background-color:#fff;width:100%;padding:%?20?%}.statistical_report_items .statistical_report_item[data-v-b6d2d000]:nth-child(2){margin:%?0?% %?24?%}.statistical_report_items .statistical_report_item_data[data-v-b6d2d000]{font-size:%?72?%;margin-top:%?50?%;white-space:nowrap;font-weight:lighter;margin-bottom:%?10?%}.statistical_report_items .statistical_report_item_title[data-v-b6d2d000]{font-size:%?24?%;color:#0771db;white-space:nowrap;padding:%?5?%}.statistical_report_items .statistical_report_item .compare[data-v-b6d2d000]{color:#fff;text-align:center;margin-left:%?20?%;border-radius:%?30?%;height:%?36?%}.statistical_report_items .statistical_report_item .compare_title[data-v-b6d2d000]{font-size:%?20?%}.statistical_report_items .statistical_report_item .compare_data[data-v-b6d2d000]{font-size:%?28?%}',""]),t.exports=a},a057:function(t,a,e){var i=e("8c83");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("39000600",i,!0,{sourceMap:!1,shadowMode:!1})},acdb:function(t,a,e){"use strict";e.r(a);var i=e("adbd7"),r=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=r.a},adbd7:function(t,a,e){"use strict";var i=e("4ea4");e("d81d"),e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(e("bfda")),n=i(e("c01e")),s=e("547f"),c=new s.StatisticalApi,o={name:"maintain_plan_item",components:{statisticalReportItem:n.default,chartItem:r.default},props:{topH:{type:[String,Number],default:0}},data:function(){return{listCharts:[]}},created:function(){var t=this;console.log(1),c.getRecentDayProductionCount(7,(function(a){var e=a.rows?a.rows:[],i=e.map((function(t){return t.value})),r=e.map((function(t){return t.time.substring(5,10)})),n={title:"近七日每日产量",categories:r,series:[{name:"统计",data:i}]};t.listCharts=[],t.$nextTick((function(){t.listCharts.push(n)}))}))},computed:{},watch:{},methods:{}};a.default=o},bd2d:function(t,a,e){"use strict";e.r(a);var i=e("15fa"),r=e("acdb");for(var n in r)"default"!==n&&function(t){e.d(a,t,(function(){return r[t]}))}(n);var s,c=e("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"5773350b",null,!1,i["a"],s);a["default"]=o.exports},bfda:function(t,a,e){"use strict";e.r(a);var i=e("315a"),r=e("e39a");for(var n in r)"default"!==n&&function(t){e.d(a,t,(function(){return r[t]}))}(n);e("763b");var s,c=e("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"deabe180",null,!1,i["a"],s);a["default"]=o.exports},c01e:function(t,a,e){"use strict";e.r(a);var i=e("18e5"),r=e("398f");for(var n in r)"default"!==n&&function(t){e.d(a,t,(function(){return r[t]}))}(n);e("6817");var s,c=e("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"b6d2d000",null,!1,i["a"],s);a["default"]=o.exports},e39a:function(t,a,e){"use strict";e.r(a);var i=e("7c9a"),r=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=r.a}}]);