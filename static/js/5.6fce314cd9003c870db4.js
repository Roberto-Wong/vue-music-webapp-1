webpackJsonp([5],{247:function(t,n,e){function i(t){e(291)}var o=e(0)(e(265),e(303),i,"data-v-eac0f214",null);t.exports=o.exports},259:function(t,n,e){"use strict";function i(){var t=A()({},l.b,{format:"jsonp",platform:"h5",uin:0,needNewCode:1});return e.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function o(t){var n=A()({},l.b,{topid:t,format:"jsonp",platform:"h5",uin:0,needNewCode:1,tpl:3,page:"detail",type:"top"});return e.i(s.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,l.c)}n.b=i,n.a=o;var a=e(22),A=e.n(a),s=e(71),l=e(13)},265:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(9),o=e.n(i),a=e(259),A=e(13),s=e(14),l=e.n(s),r=e(72),c=e.n(r),p=e(21),d=e(5);n.default={mixins:[p.c],data:function(){return{topList:[]}},created:function(){this._getTopList()},methods:o()({_getTopList:function(){var t=this;e.i(a.b)().then(function(n){n.code===A.a&&(t.topList=n.data.topList.filter(function(t){return t.id<201}))})},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},handlePlaylist:function(t){var n=t.length?"60px":"";this.$refs.rank.style.bottom=n,this.$refs.scroll.refresh()}},e.i(d.b)({setTopList:"SET_TOP_LIST"})),components:{Scroll:l.a,Loading:c.a}}},281:function(t,n,e){n=t.exports=e(244)(!0),n.push([t.i,".rank[data-v-eac0f214]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-eac0f214]{height:100%;overflow:hidden}.rank .toplist .item[data-v-eac0f214]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-eac0f214]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-eac0f214]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-eac0f214]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-eac0f214]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-eac0f214]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/jie/Desktop/vue-music-webapp/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,gCACE,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,iDACE,mBAAqB,CACtB,AACD,4CACE,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,YAAc,CACf,AACD,gDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"rank.vue",sourcesContent:["\n.rank[data-v-eac0f214] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-eac0f214] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-eac0f214] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-eac0f214]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-eac0f214] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-eac0f214] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-eac0f214] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-eac0f214] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},291:function(t,n,e){var i=e(281);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(245)("ea554d48",i,!0)},303:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"rank",staticClass:"rank"},[e("scroll",{ref:"scroll",staticClass:"toplist",attrs:{data:t.topList}},[e("ul",t._l(t.topList,function(n){return e("li",{staticClass:"item",on:{click:function(e){t.selectItem(n)}}},[e("div",{staticClass:"icon"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),e("ul",{staticClass:"songlist"},t._l(n.songList,function(n,i){return e("li",{staticClass:"song"},[e("span",[t._v(t._s(i+1))]),t._v(" "),e("span",[t._v(t._s(n.singername)+"-"+t._s(n.songname))])])}))])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[e("loading")],1)]),t._v(" "),e("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.6fce314cd9003c870db4.js.map