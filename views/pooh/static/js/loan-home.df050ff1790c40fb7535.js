webpackJsonp([1],{349:function(t,e,n){function a(t){n(381)}var o=n(0)(n(360),n(392),a,null,null);t.exports=o.exports},360:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),o=n.n(a),r=n(10),s=n.n(r),i=n(3),l=n(108),c=n.n(l),p=n(2);e.default={components:{Card:c.a},filters:{index:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return parseFloat(t)>0?"number"==typeof t&&e?"¥ "+t:t:"-"},rate:function(t){return"0.00%"===t?"-":t},addCommas:function(t){t+="";var e=t.split("."),n=e[0],a=e.length>1?"."+e[1]:"",o=/(\d+)(\d{3})/;return o.test(n)&&(n=n.replace(o,"$1,$2")),n+a},addCommas_money:function(t){t+="";var e=t.split("."),n=e[0],a=e.length>1?"."+e[1]:"",o=/(\d+)(\d{3})/;o.test(n)&&(n=n.replace(o,"$1,$2"));var r=n+a;return-1===r.indexOf(".")&&(r+=".00"),r}},data:function(){return{reportType:p.a,reportContent:"cost",chart:void 0}},fetchAction:"loanUser/getDashboardData",computed:o()({},n.i(i.a)("loanUser",["yesterday_amount","sevendays_amount","month_amount","unsettled_amount"]),n.i(i.c)("loanUser",["reportTypes","reportTotal","tableData","chartLabels","chartData"]),{dayCnt:function(){switch(this.reportType){case p.a:return 7;case p.b:return 30;case p.c:return 90}}}),created:function(){this.getTableData({content:this.reportContent,dayCnt:this.dayCnt}),this.drawChart(),window.addEventListener("resize",this.drawChart)},destroyed:function(){window.removeEventListener("resize",this.drawChart)},methods:o()({onTabClick:function(t,e){this.getTableData({content:t.name,dayCnt:this.dayCnt}),this.drawChart()},onSelect:function(){this.getTableData({content:this.reportContent,dayCnt:this.dayCnt}),this.drawChart()},drawChart:function(){var t=this;this.getChartData({content:this.reportContent,dayCnt:this.dayCnt}).then(function(){t.chart&&console.log(t.chart);var e=document.querySelector(".rpt-chart"),n=[],a=t.chartLabels,o=0;switch(s.a.each(t.chartData,function(t,e){n.push([e,t]),t>o&&(o=t)}),o=o>0?1.5*o:101,n.length){case 7:n.push([n.length-1+.2,null]),n.splice(0,0,[-.2,null]);break;case 30:n.push([n.length-1+2,null]),n.splice(0,0,[-2,null]);break;case 90:n.push([n.length-1+3,null]),n.splice(0,0,[-3,null])}t.chart=window.Flotr.draw(e,[{data:n,label:""}],{colors:["#4A90E2","#C0D800","#CB4B4B","#4DA74D","#9440ED"],shadowSize:0,xaxis:{ticks:function(){var t=n.length-2,e=t%10==0?t/10:1,o=[];return s.a.each(a,function(t,n){n%e!=0&&n!==a.length-1||o.push([n,t])}),o}(),color:"#B5B5B5"},yaxis:{max:o,min:.05*-o,color:"#B5B5B5",tickFormatter:function(t){return t+" "}},grid:{color:"#B5B5B5",outline:"",verticalLines:!1},points:{show:!0,radius:6,fillColor:"#4A90E2",lineWidth:2,color:"#FFF"},lines:{show:!0},mouse:{track:!0,relative:!0,lineColor:"#4A90E2",fillColor:"#4A90E2",fillOpacity:1,position:"nw",trackFormatter:function(t){var e=t.x,n=t.y;return a[parseInt(e)]+": "+n}}})})},download:function(){this.$store.dispatch("loanUser/downloadReport",{dayCnt:this.dayCnt})}},n.i(i.b)("loanUser",["getTableData","getChartData"]))}},370:function(t,e,n){e=t.exports=n(337)(!0),e.push([t.i,".container{width:100%;min-width:1020px;padding:32px 35px 150px}.container .nav{padding:18px 0;height:58px}.container .nav .title{font-family:PingFangSC-Light;font-size:16px;line-height:22px;color:#888}.container .cards{padding:29px 0 25px}.container .cards .el-col.el-col-6{padding-right:10px}.container .cards .el-col.el-col-6:last-of-type{padding-right:0}.container .report-menus{padding:30px 0;height:100px}.container .report-menus .btn-download,.container .report-menus .select-report-type{float:left;margin-right:10px}.container .report-menus .select-report-type{width:180px}.container .report-menus .btn-download{width:130px}.container .chart-wrapper{height:440px;margin-bottom:76px;padding-top:10px}.container .chart-wrapper .rpt-chart{width:100%;height:100%}.select-dropdown-home .el-select-dropdown__item span{color:#3a3a3a}","",{version:3,sources:["/Users/wumin/qianka/pooh/src/views/loan/Home.vue"],names:[],mappings:"AACA,WACE,WAAY,AACZ,iBAAkB,AAClB,uBAA8B,CAU/B,AACD,gBACI,eAAgB,AAChB,WAAa,CAChB,AACD,uBACM,6BAA8B,AAC9B,eAAgB,AAChB,iBAAkB,AAClB,UAAe,CACpB,AACD,kBACI,mBAAuB,CAC1B,AACD,mCACM,kBAAoB,CACzB,AACD,gDACQ,eAAmB,CAC1B,AACD,yBACI,eAAgB,AAChB,YAAc,CACjB,AACD,oFACM,WAAY,AACZ,iBAAmB,CACxB,AACD,6CACM,WAAa,CAClB,AACD,uCACM,WAAa,CAClB,AACD,0BACI,aAAc,AACd,mBAAoB,AACpB,gBAAkB,CACrB,AACD,qCACM,WAAY,AACZ,WAAa,CAClB,AACD,qDACE,aAAe,CAChB",file:"Home.vue",sourcesContent:["\n.container {\n  width: 100%;\n  min-width: 1020px;\n  padding: 32px 35px 150px 35px;\n  /*\n  .qk-tabs-text {\n    height: 60px;\n\n    .el-tabs__header {\n      margin-bottom: 0 !important;\n    }\n  }\n  */\n}\n.container .nav {\n    padding: 18px 0;\n    height: 58px;\n}\n.container .nav .title {\n      font-family: PingFangSC-Light;\n      font-size: 16px;\n      line-height: 22px;\n      color: #888888;\n}\n.container .cards {\n    padding: 29px 0 25px 0;\n}\n.container .cards .el-col.el-col-6 {\n      padding-right: 10px;\n}\n.container .cards .el-col.el-col-6:last-of-type {\n        padding-right: 0px;\n}\n.container .report-menus {\n    padding: 30px 0;\n    height: 100px;\n}\n.container .report-menus .select-report-type, .container .report-menus .btn-download {\n      float: left;\n      margin-right: 10px;\n}\n.container .report-menus .select-report-type {\n      width: 180px;\n}\n.container .report-menus .btn-download {\n      width: 130px;\n}\n.container .chart-wrapper {\n    height: 440px;\n    margin-bottom: 76px;\n    padding-top: 10px;\n}\n.container .chart-wrapper .rpt-chart {\n      width: 100%;\n      height: 100%;\n}\n.select-dropdown-home .el-select-dropdown__item span {\n  color: #3a3a3a;\n}\n"],sourceRoot:""}])},381:function(t,e,n){var a=n(370);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(338)("4673f8e7",a,!0)},392:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("el-row",{staticClass:"cards"},[n("el-col",{attrs:{span:6}},[n("card",[n("div",{slot:"title"},[t._v("昨日消耗")]),t._v(" "),n("div",{slot:"highlight"},[t._v(t._s(t._f("index")(t.yesterday_amount)))])])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("card",[n("div",{slot:"title"},[t._v("7天消耗")]),t._v(" "),n("div",{slot:"highlight"},[t._v(t._s(t._f("index")(t.sevendays_amount)))])])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("card",[n("div",{slot:"title"},[t._v("30天消耗")]),t._v(" "),n("div",{slot:"highlight"},[t._v(t._s(t._f("index")(t.month_amount)))])])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("card",[n("div",{slot:"title"},[t._v("未结算消耗")]),t._v(" "),n("div",{slot:"highlight"},[t._v(t._s(t._f("index")(t.unsettled_amount)))])])],1)],1),t._v(" "),n("el-row",{staticClass:"report-menus"},[n("el-select",{staticClass:"select-report-type",attrs:{"popper-class":"select-dropdown-home",placeholder:"请选择"},on:{change:t.onSelect},model:{value:t.reportType,callback:function(e){t.reportType=e},expression:"reportType"}},t._l(t.reportTypes,function(t,e){return n("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),t._v(" "),n("el-button",{staticClass:"btn-download",attrs:{type:"primary"},on:{click:function(e){t.download()}}},[t._v("\n      下载报表\n    ")])],1),t._v(" "),n("el-tabs",{staticClass:"qk-tabs-text",attrs:{type:"card"},on:{"tab-click":t.onTabClick},model:{value:t.reportContent,callback:function(e){t.reportContent=e},expression:"reportContent"}},[n("el-tab-pane",{attrs:{name:"cost"}},[n("span",{staticClass:"qk-tabs__item-text",slot:"label"},[n("span",{staticClass:"tag"},[t._v("消耗")]),n("span",{staticClass:"sub-tag"},[t._v(t._s(t.reportTotal.cost>0?"¥ "+t.reportTotal.cost.toFixed(2):"-"))])])]),t._v(" "),n("el-tab-pane",{attrs:{name:"reg"}},[n("span",{staticClass:"qk-tabs__item-text",slot:"label"},[n("span",[t._v("成功注册")]),n("span",[t._v(t._s(t._f("index")(t.reportTotal.register_num,"")))])])]),t._v(" "),n("el-tab-pane",{attrs:{name:"loan_suc"}},[n("span",{staticClass:"qk-tabs__item-text",slot:"label"},[n("span",[t._v("成功借钱")]),n("span",[t._v(t._s(t._f("index")(t.reportTotal.loan_succ_num,"")))])])])],1),t._v(" "),n("el-row",{staticClass:"chart-wrapper"},[n("div",{staticClass:"rpt-chart"})]),t._v(" "),n("el-row",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[n("el-table-column",{attrs:{prop:"date",label:"日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.date.replace(/\//g,".")))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"cost",label:"消耗"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(t._f("addCommas_money")("￥"+e.row.consume)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"effect_actions",label:"成功注册"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(t._f("addCommas")(e.row.register_num)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"effect_actions",label:"成功借钱"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(t._f("addCommas")(e.row.loan_success_num)))])]}}])})],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("div",{staticClass:"title"},[t._v("账户首页")])])}]}}});
//# sourceMappingURL=loan-home.df050ff1790c40fb7535.js.map