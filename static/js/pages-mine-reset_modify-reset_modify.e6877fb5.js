(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-reset_modify-reset_modify"],{"3add":function(o,t,e){"use strict";e.r(t);var n=e("e4a1"),r=e("8ee9");for(var s in r)"default"!==s&&function(o){e.d(t,o,(function(){return r[o]}))}(s);e("f2ca");var a,i=e("f0c5"),l=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"00899420",null,!1,n["a"],a);t["default"]=l.exports},"8ee9":function(o,t,e){"use strict";e.r(t);var n=e("b839"),r=e.n(n);for(var s in n)"default"!==s&&function(o){e.d(t,o,(function(){return n[o]}))}(s);t["default"]=r.a},b839:function(o,t,e){"use strict";var n=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e("e9c2"),s=n(e("df74")),a=new r.UserApi,i={components:{customInput:s.default},data:function(){return{phoneNum:"",codeNum:"",newPassword:"",twoPassWord:"",oldPassword:"",loading:!1,borderColor:"#0771DB",pldColor:"#BBBBBB",type:"1"}},computed:{themeColor:function(){return this.$store.state.config.lfColorConfig.themeColor},btnText:function(){switch(this.type){case"1":return"重置密码";case"2":return"确定";case"3":return"确定";default:return""}},navTitle:function(){switch(this.type){case"1":return"忘记密码";case"2":return"忘记密码";case"3":return"修改密码";default:return""}}},methods:{submitClick:function(){var o=this;if("重置密码"===this.btnText){if(11!==this.phoneNum.length)return void this.common.toastWarningWay("手机号格式错误",this);if(this.codeNum.length<4)return void this.common.toastWarningWay("验证码格式错误",this);this.loading=!0,a.forgetPassword(this.phoneNum,this.codeNum,(function(t){setTimeout((function(){o.loading=!1}),500),"0000"===t.code&&(uni.setStorageSync("userInfo",t.rows),o.$store.commit("setUserInfo",t.rows),o.type="2")}))}else{if(0===this.newPassword.length||0===this.twoPassWord.length)return void this.common.toastWarningWay("新密码或确认密码为空",this);if(this.newPassword!==this.twoPassWord)return this.common.toastWarningWay("两次密码不一致",this),this.newPassword="",void(this.twoPassWord="");"2"===this.type?(this.loading=!0,a.updatePassword(this.newPassword,(function(t){setTimeout((function(){o.loading=!1}),500),"0000"===t.code?(o.common.toastSuccessWay(t.message,o),setTimeout((function(){uni.navigateBack({delta:1})}),500)):o.common.toastErrorWay(t.message,o)}))):"3"===this.type&&(0===this.oldPassword.length?this.common.toastWarningWay("请输入旧密码",this):(this.loading=!0,a.updatePasswordByOldPassword(this.oldPassword,this.newPassword,(function(t){setTimeout((function(){o.loading=!1}),500),"0000"===t.code?setTimeout((function(){uni.navigateBack({delta:1})}),500):o.common.toastErrorWay(t.message,o)}))))}}},onLoad:function(o){o.type&&(this.type=o.type,uni.setNavigationBarTitle({title:this.navTitle}))}};t.default=i},e4a1:function(o,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return n}));var n={uButton:e("5f80").default,uToast:e("3afc").default},r=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("v-uni-view",{staticStyle:{padding:"55rpx 27rpx 0rpx 27rpx"}},["1"==o.type?e("v-uni-view",[e("custom-input",{attrs:{iconType:"5",type:"1",borderColor:o.borderColor,keyType:"number",placeholder:"请输入验证手机号",placeholderColor:o.pldColor},model:{value:o.phoneNum,callback:function(t){o.phoneNum=t},expression:"phoneNum"}}),e("v-uni-view",{staticClass:"content_line"}),e("custom-input",{attrs:{iconType:"8",type:"3",phoneNumber:o.phoneNum,borderColor:o.borderColor,keyType:"number",codeBgColor:o.themeColor,placeholder:"请输入验证码",placeholderColor:o.pldColor},model:{value:o.codeNum,callback:function(t){o.codeNum=t},expression:"codeNum"}})],1):o._e(),"2"==o.type?e("v-uni-view",[e("custom-input",{attrs:{iconType:"6",type:"2",borderColor:o.borderColor,placeholder:"请输入新密码",placeholderColor:o.pldColor},model:{value:o.newPassword,callback:function(t){o.newPassword=t},expression:"newPassword"}}),e("v-uni-view",{staticClass:"content_line"}),e("custom-input",{attrs:{iconType:"7",type:"2",borderColor:o.borderColor,placeholder:"请再次输入新密码",placeholderColor:o.pldColor},model:{value:o.twoPassWord,callback:function(t){o.twoPassWord=t},expression:"twoPassWord"}})],1):o._e(),"3"==o.type?e("v-uni-view",[e("custom-input",{attrs:{iconType:"6",type:"2",borderColor:o.borderColor,placeholder:"请输入旧密码",placeholderColor:o.pldColor},model:{value:o.oldPassword,callback:function(t){o.oldPassword=t},expression:"oldPassword"}}),e("v-uni-view",{staticClass:"content_line"}),e("custom-input",{attrs:{iconType:"6",type:"2",borderColor:o.borderColor,placeholder:"请输入新密码",placeholderColor:o.pldColor},model:{value:o.newPassword,callback:function(t){o.newPassword=t},expression:"newPassword"}}),e("v-uni-view",{staticClass:"content_line"}),e("custom-input",{attrs:{iconType:"7",type:"2",borderColor:o.borderColor,placeholder:"请再次输入新密码",placeholderColor:o.pldColor},model:{value:o.twoPassWord,callback:function(t){o.twoPassWord=t},expression:"twoPassWord"}})],1):o._e(),e("v-uni-view",{staticStyle:{"padding-top":"130rpx"}},[e("u-button",{staticClass:"sumbit_btn",style:{"background-color":o.themeColor,color:"#FFFFFF"},attrs:{"hair-line":!1,loading:o.loading},on:{click:function(t){arguments[0]=t=o.$handleEvent(t),o.submitClick.apply(void 0,arguments)}}},[o._v(o._s(o.$t(o.btnText)))])],1),e("u-toast",{ref:"uToast",attrs:{position:"top"}})],1)},s=[]},ef0c:function(o,t,e){var n=e("24fb");t=n(!1),t.push([o.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */uni-page-body[data-v-00899420]{background-color:#fff}.content_line[data-v-00899420]{width:100%;height:%?15?%}.sumbit_btn[data-v-00899420]{height:%?80?%;border-radius:%?40?%;color:#fff;font-size:%?32?%;font-weight:400;padding:%?0?%}body.?%PAGE?%[data-v-00899420]{background-color:#fff}',""]),o.exports=t},efc6:function(o,t,e){var n=e("ef0c");"string"===typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);var r=e("4f06").default;r("32197dbc",n,!0,{sourceMap:!1,shadowMode:!1})},f2ca:function(o,t,e){"use strict";var n=e("efc6"),r=e.n(n);r.a}}]);