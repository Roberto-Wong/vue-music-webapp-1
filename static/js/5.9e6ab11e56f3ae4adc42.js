webpackJsonp([5],{284:function(t,e,n){function i(t){n(328)}var o=n(0)(n(302),n(340),i,"data-v-eac0f214",null);t.exports=o.exports},296:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(){var t=(0,A.default)({},p.commonParams,{format:"jsonp",platform:"h5",uin:0,needNewCode:1});return(0,r.default)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,p.options)}function a(t){var e=(0,A.default)({},p.commonParams,{topid:t,format:"jsonp",platform:"h5",uin:0,needNewCode:1,tpl:3,page:"detail",type:"top"});return(0,r.default)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",e,p.options)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(25),A=i(s);e.getTopList=o,e.getMusicList=a;var l=n(86),r=i(l),p=n(15)},302:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),a=i(o),s=n(296),A=n(15),l=n(16),r=i(l),p=n(87),c=i(p),d=n(24),f=n(5);e.default={mixins:[d.playlistMixin],data:function(){return{topList:[]}},created:function(){this._getTopList()},methods:(0,a.default)({_getTopList:function(){var t=this;(0,s.getTopList)().then(function(e){e.code===A.ERR_OK&&(t.topList=e.data.topList.filter(function(t){return t.id<201}))})},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},https:function(t){return"https"+t.substr(4)},handlePlaylist:function(t){var e=t.length?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.scroll.refresh()}},(0,f.mapMutations)({setTopList:"SET_TOP_LIST"})),components:{Scroll:r.default,Loading:c.default}}},318:function(t,e,n){e=t.exports=n(281)(!0),e.push([t.i,".rank[data-v-eac0f214]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-eac0f214]{height:100%;overflow:hidden}.rank .toplist .item[data-v-eac0f214]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-eac0f214]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-eac0f214]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-eac0f214]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-eac0f214]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-eac0f214]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/jie/Desktop/vue-music-webapp/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,gCACE,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,iDACE,mBAAqB,CACtB,AACD,4CACE,mBAAoB,AAChB,mBAAoB,AAChB,eAAgB,AACxB,YAAa,AACb,YAAc,CACf,AACD,gDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"rank.vue",sourcesContent:["\n.rank[data-v-eac0f214] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-eac0f214] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-eac0f214] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-eac0f214]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-eac0f214] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100px;\n          flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-eac0f214] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-eac0f214] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-eac0f214] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},328:function(t,e,n){var i=n(318);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(282)("ea554d48",i,!0)},340:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"rank",staticClass:"rank"},[n("scroll",{ref:"scroll",staticClass:"toplist",attrs:{data:t.topList}},[n("ul",t._l(t.topList,function(e){return n("li",{staticClass:"item",on:{click:function(n){t.selectItem(e)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.https(e.picUrl),expression:"https(item.picUrl)"}],attrs:{width:"100",height:"100"}})]),t._v(" "),n("ul",{staticClass:"songlist"},t._l(e.songList,function(e,i){return n("li",{staticClass:"song"},[n("span",[t._v(t._s(i+1))]),t._v(" "),n("span",[t._v(t._s(e.singername)+"-"+t._s(e.songname))])])}))])})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[n("loading")],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.9e6ab11e56f3ae4adc42.js.map