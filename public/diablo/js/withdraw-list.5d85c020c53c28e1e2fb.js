webpackJsonp([36],{409:function(e,n,t){t(679);var a=t(0)(t(542),t(794),"data-v-68eda861",null);e.exports=a.exports},542:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(20),i=t.n(a);n.default={components:{AnimateHeader:i.a},methods:{back:function(){$router.back({path:"/user"})},go:function(e){var n="phone"===e?"/withdraw/phone":"wechat"===e?"/withdraw/weixin":"/withdraw/alipay";$router.push(n)}}}},599:function(e,n,t){n=e.exports=t(360)(),n.push([e.i,'/* thin border */\n.withdraw-type[data-v-68eda861] {\n  background: #FFF;\n  padding-top: 50px;\n  padding-left: 21px;\n}\n.withdraw-type .recommend[data-v-68eda861] {\n    margin-bottom: 41px;\n}\n.withdraw-type .recommend .title[data-v-68eda861] {\n      height: 28px;\n      line-height: 28px;\n      font-size: 20px;\n      color: #DDDDDD;\n      margin-top: 24px;\n      margin-bottom: 25px;\n      font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n      font-weight: 400;\n}\n.withdraw-type .recommend .type[data-v-68eda861] {\n      height: 38px;\n      margin-bottom: 42px;\n      padding-left: 55px;\n}\n.withdraw-type .recommend .type img[data-v-68eda861] {\n        width: 38px;\n        height: 38px;\n        position: absolute;\n        left: 21px;\n}\n.withdraw-type .recommend .type .desc-content[data-v-68eda861] {\n        position: relative;\n        display: inline-block;\n}\n.withdraw-type .recommend .type .desc-content .type-name[data-v-68eda861] {\n          height: 22px;\n          font-size: 16px;\n          color: #484746;\n          display: block;\n          margin-bottom: 6px;\n          font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n          font-weight: 400;\n}\n.withdraw-type .recommend .type .desc-content .desc[data-v-68eda861] {\n          display: block;\n          height: 18px;\n          font-size: 13px;\n          color: #B5B5B5;\n}\n.withdraw-type .recommend .type .desc-content .alipay[data-v-68eda861] {\n          font-size: 16px;\n          color: #484746;\n          height: 46px;\n          line-height: 46px;\n          display: block;\n          font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n          font-weight: 400;\n}\n.withdraw-type .recommend .type .desc-content .song-chou-ma[data-v-68eda861] {\n          position: absolute;\n          top: -14px;\n          left: 68px;\n          display: inline-block;\n          width: 35px;\n          height: 18px;\n          background: url("//qianka.b0.upaiyun.com/images/edecbfae42aba79edfaf617090a7fc1a.png") no-repeat;\n          background-size: 100% 100%;\n}\n',"",{version:3,sources:["/Users/wumin/diablo/src/components/user_center/withdraw/WithdrawList.vue"],names:[],mappings:"AAAA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;IACI,oBAAoB;CACvB;AACD;MACM,aAAa;MACb,kBAAkB;MAClB,gBAAgB;MAChB,eAAe;MACf,iBAAiB;MACjB,oBAAoB;MACpB,uGAAuG;MACvG,iBAAiB;CACtB;AACD;MACM,aAAa;MACb,oBAAoB;MACpB,mBAAmB;CACxB;AACD;QACQ,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,WAAW;CAClB;AACD;QACQ,mBAAmB;QACnB,sBAAsB;CAC7B;AACD;UACU,aAAa;UACb,gBAAgB;UAChB,eAAe;UACf,eAAe;UACf,mBAAmB;UACnB,uGAAuG;UACvG,iBAAiB;CAC1B;AACD;UACU,eAAe;UACf,aAAa;UACb,gBAAgB;UAChB,eAAe;CACxB;AACD;UACU,gBAAgB;UAChB,eAAe;UACf,aAAa;UACb,kBAAkB;UAClB,eAAe;UACf,uGAAuG;UACvG,iBAAiB;CAC1B;AACD;UACU,mBAAmB;UACnB,WAAW;UACX,WAAW;UACX,sBAAsB;UACtB,YAAY;UACZ,aAAa;UACb,iGAAiG;UACjG,2BAA2B;CACpC",file:"WithdrawList.vue",sourcesContent:['/* thin border */\n.withdraw-type[data-v-68eda861] {\n  background: #FFF;\n  padding-top: 50px;\n  padding-left: 21px;\n}\n.withdraw-type .recommend[data-v-68eda861] {\n    margin-bottom: 41px;\n}\n.withdraw-type .recommend .title[data-v-68eda861] {\n      height: 28px;\n      line-height: 28px;\n      font-size: 20px;\n      color: #DDDDDD;\n      margin-top: 24px;\n      margin-bottom: 25px;\n      font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n      font-weight: 400;\n}\n.withdraw-type .recommend .type[data-v-68eda861] {\n      height: 38px;\n      margin-bottom: 42px;\n      padding-left: 55px;\n}\n.withdraw-type .recommend .type img[data-v-68eda861] {\n        width: 38px;\n        height: 38px;\n        position: absolute;\n        left: 21px;\n}\n.withdraw-type .recommend .type .desc-content[data-v-68eda861] {\n        position: relative;\n        display: inline-block;\n}\n.withdraw-type .recommend .type .desc-content .type-name[data-v-68eda861] {\n          height: 22px;\n          font-size: 16px;\n          color: #484746;\n          display: block;\n          margin-bottom: 6px;\n          font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n          font-weight: 400;\n}\n.withdraw-type .recommend .type .desc-content .desc[data-v-68eda861] {\n          display: block;\n          height: 18px;\n          font-size: 13px;\n          color: #B5B5B5;\n}\n.withdraw-type .recommend .type .desc-content .alipay[data-v-68eda861] {\n          font-size: 16px;\n          color: #484746;\n          height: 46px;\n          line-height: 46px;\n          display: block;\n          font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n          font-weight: 400;\n}\n.withdraw-type .recommend .type .desc-content .song-chou-ma[data-v-68eda861] {\n          position: absolute;\n          top: -14px;\n          left: 68px;\n          display: inline-block;\n          width: 35px;\n          height: 18px;\n          background: url("//qianka.b0.upaiyun.com/images/edecbfae42aba79edfaf617090a7fc1a.png") no-repeat;\n          background-size: 100% 100%;\n}\n'],sourceRoot:""}])},679:function(e,n,t){var a=t(599);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(361)("58f698ab",a,!0)},794:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page"},[t("AnimateHeader",{attrs:{"bg-color":"#F5F5F5 ","menu-bg-color":"#F0F0F0",color:"#3A3A3A",fill:"#3A3A3A",stroke:"#3A3A3A",title:"选择提现方式","on-back-button-click":e.back,expanded:!1,animate:!1}}),e._v(" "),t("div",{staticClass:"page-content withdraw-type"},[t("div",{staticClass:"recommend"},[t("div",{staticClass:"title"},[e._v("推荐方式")]),e._v(" "),t("div",{staticClass:"type",on:{click:function(n){e.go("phone")}}},[t("img",{attrs:{src:"//assets.qkcdn.com/images/de67881df82d1a56205b13a10096d9ea.png",alt:""}}),e._v(" "),e._m(0)]),e._v(" "),t("div",{staticClass:"type",on:{click:function(n){e.go("wechat")}}},[t("img",{attrs:{src:"//assets.qkcdn.com/images/381738ff37b4bda755ef2234e8ed3f6a.png",alt:""}}),e._v(" "),e._m(1)])]),e._v(" "),t("div",{staticClass:"recommend"},[t("div",{staticClass:"title"},[e._v("其他方式")]),e._v(" "),t("div",{staticClass:"type",on:{click:function(n){e.go("alipay")}}},[t("img",{attrs:{src:"//assets.qkcdn.com/images/0d979e6aad7ebd524fc89941f5855983.png",alt:""}}),e._v(" "),e._m(2)])])])],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"desc-content"},[t("div",{staticClass:"type-name"},[e._v("手机充值")]),e._v(" "),t("div",{staticClass:"desc"},[e._v("支持全号码段 ‧ 到账最快")]),e._v(" "),t("span",{staticClass:"song-chou-ma"})])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"desc-content"},[t("div",{staticClass:"type-name"},[e._v("微信提现")]),e._v(" "),t("div",{staticClass:"desc"},[e._v("支持500元以上大额提现")]),e._v(" "),t("span",{staticClass:"song-chou-ma"})])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"desc-content"},[t("div",{staticClass:"type-name",staticStyle:{"line-height":"38px"}},[e._v("支付宝提现")])])}]}}});
//# sourceMappingURL=withdraw-list.5d85c020c53c28e1e2fb.js.map