webpackJsonp([3],{285:function(e,t,n){function i(e){n(323)}var o=n(0)(n(303),n(335),i,"data-v-383d0a30",null);e.exports=o.exports},297:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=(0,s.default)({},l.commonParams,{uin:0,format:"json",notice:0,platform:"h5",needNewCode:1});return(0,c.default)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",e,l.options)}function d(e){var t=(0,s.default)({},l.commonParams,{disstid:e,format:"jsonp",type:1,json:1,utf8:1,onlysong:0,platform:"h5",notice:0,needNewCode:1,new_format:1,nosign:1,pic:500});return(0,c.default)("https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",t,l.options)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(25),s=i(r);t.getRecommend=o,t.getSongList=d;var a=n(86),c=i(a),l=n(15)},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(43),o=n(91),d=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={data:function(){return{dots:[],currentIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var e=this;setTimeout(function(){e.sliderGroup=e.$refs.sliderGroup,e.children=e.sliderGroup.children,e._initDots(),e._setWidth(),e._initScroll(),e.autoPlay&&e._autoPlay(),window.addEventListener("resize",function(){e.slider&&(e._setWidth(!0),e.slider.refresh())})},20)},methods:{_initDots:function(){for(var e=0;e<this.children.length;e++)this.dots.push([])},_setWidth:function(e){for(var t=0,n=this.$refs.slider.clientWidth,o=0;o<this.children.length;o++)(0,i.addClass)(this.children[o],"slider-item"),this.children[o].style.width=n+"px";t=this.children.length*n,this.loop&&!e&&(t+=2*n),this.sliderGroup.style.width=t+"px"},_initScroll:function(){var e=this;this.slider=new d.default(this.$refs.slider,{scrollX:!0,scrollY:!1,snap:!0,momentum:!1,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400,click:!0}),this.slider.on("scrollEnd",function(){var t=e.slider.getCurrentPage().pageX;e.loop&&t--,e.currentIndex=t,e.autoPlay&&e._autoPlay()}),this.slider.on("beforeScrollStart",function(){e.autoPlay&&clearTimeout(e.timer)})},_autoPlay:function(){var e=this,t=this.currentIndex+1;this.loop&&t++,this.timer=setTimeout(function(){e.slider.goToPage(t,0,400)},this.interval)}},activated:function(){this.autoPlay&&this._autoPlay()},deactivated:function(){clearTimeout(this.timer)},beforeDestroy:function(){clearTimeout(this.timer)}}},303:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),d=i(o),r=n(297),s=n(15),a=n(330),c=i(a),l=n(16),A=i(l),m=n(87),p=i(m),f=n(24),u=n(5);t.default={mixins:[f.playlistMixin],data:function(){return{recommends:[],disclists:[]}},created:function(){this._getRecommend()},methods:(0,d.default)({handlePlaylist:function(e){var t=e.length?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},selectItem:function(e){this.$router.push({path:"/recommend/"+e.id}),this.setDisc(e)},_getRecommend:function(){var e=this;(0,r.getRecommend)().then(function(t){t.code===s.ERR_OK&&(e.recommends=t.data.slider,e.disclists=t.data.songList)})},loadImage:function(){this.checkImg||(this.checkImg=!0,this.$refs.scroll.refresh())},https:function(e){return"https"+e.substr(4)}},(0,u.mapMutations)({setDisc:"SET_DISC"})),components:{slider:c.default,scroll:A.default,loading:p.default}}},313:function(e,t,n){t=e.exports=n(281)(!0),t.push([e.i,'.recommend[data-v-383d0a30]{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content[data-v-383d0a30]{height:100%;overflow:hidden}.recommend .recommend-content .slider-wrapper[data-v-383d0a30]{position:relative;width:100%;overflow:hidden}.recommend .recommend-content .recommend-list[data-v-383d0a30]{margin:0 10px}.recommend .recommend-content .recommend-list .list-title[data-v-383d0a30]{height:65px;line-height:65px;text-align:center;font-size:14px;color:#ffcd32}.recommend .recommend-content .recommend-list .item[data-v-383d0a30]{float:left;width:50%;padding-right:8px;margin-bottom:10px;overflow:hidden;box-sizing:border-box}.recommend .recommend-content .recommend-list .item .icon[data-v-383d0a30]{position:relative;margin-bottom:5px}.recommend .recommend-content .recommend-list .item .icon[data-v-383d0a30]:before{content:"";display:block;padding-top:100%}.recommend .recommend-content .recommend-list .item .icon img[data-v-383d0a30]{position:absolute;top:0;left:0;display:block;width:100%;border-radius:10px}.recommend .recommend-content .recommend-list .item .text[data-v-383d0a30]{padding:0 7px 5px;font-size:14px}.recommend .recommend-content .recommend-list .item .text .name[data-v-383d0a30]{color:#fff;margin:5px 0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.recommend .recommend-content .recommend-list .item .text .desc[data-v-383d0a30]{color:hsla(0,0%,100%,.3)}.recommend .recommend-content .loading-container[data-v-383d0a30]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}',"",{version:3,sources:["C:/Users/jie/Desktop/vue-music-webapp/src/components/recommend/recommend.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,+CACE,YAAa,AACb,eAAiB,CAClB,AACD,+DACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAClB,AACD,+DACE,aAAe,CAChB,AACD,2EACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CAChB,AACD,qEACE,WAAY,AACZ,UAAW,AACX,kBAAmB,AACnB,mBAAoB,AACpB,gBAAiB,AACjB,qBAAuB,CACxB,AACD,2EACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,kFACE,WAAY,AACZ,cAAe,AACf,gBAAkB,CACnB,AACD,+EACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,cAAe,AACf,WAAY,AACZ,kBAAoB,CACrB,AACD,2EACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,iFACE,WAAY,AACZ,aAAc,AACd,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,iFACE,wBAA6B,CAC9B,AACD,kEACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"recommend.vue",sourcesContent:['\n.recommend[data-v-383d0a30] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.recommend .recommend-content[data-v-383d0a30] {\n  height: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .slider-wrapper[data-v-383d0a30] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .recommend-list[data-v-383d0a30] {\n  margin: 0 10px;\n}\n.recommend .recommend-content .recommend-list .list-title[data-v-383d0a30] {\n  height: 65px;\n  line-height: 65px;\n  text-align: center;\n  font-size: 14px;\n  color: #ffcd32;\n}\n.recommend .recommend-content .recommend-list .item[data-v-383d0a30] {\n  float: left;\n  width: 50%;\n  padding-right: 8px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.recommend .recommend-content .recommend-list .item .icon[data-v-383d0a30] {\n  position: relative;\n  margin-bottom: 5px;\n}\n.recommend .recommend-content .recommend-list .item .icon[data-v-383d0a30]:before {\n  content: "";\n  display: block;\n  padding-top: 100%;\n}\n.recommend .recommend-content .recommend-list .item .icon img[data-v-383d0a30] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  border-radius: 10px;\n}\n.recommend .recommend-content .recommend-list .item .text[data-v-383d0a30] {\n  padding: 0 7px 5px;\n  font-size: 14px;\n}\n.recommend .recommend-content .recommend-list .item .text .name[data-v-383d0a30] {\n  color: #fff;\n  margin: 5px 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.recommend .recommend-content .recommend-list .item .text .desc[data-v-383d0a30] {\n  color: rgba(255,255,255,0.3);\n}\n.recommend .recommend-content .loading-container[data-v-383d0a30] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}'],sourceRoot:""}])},315:function(e,t,n){t=e.exports=n(281)(!0),t.push([e.i,".slider[data-v-988bf3de]{min-height:1px}.slider .slider-group[data-v-988bf3de]{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item[data-v-988bf3de]{float:left;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a[data-v-988bf3de]{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img[data-v-988bf3de]{display:block;width:100%}.slider .dots[data-v-988bf3de]{position:absolute;right:0;left:0;bottom:12px;text-align:center;font-size:0}.slider .dots .dot[data-v-988bf3de]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active[data-v-988bf3de]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}","",{version:3,sources:["C:/Users/jie/Desktop/vue-music-webapp/src/base/slider/slider.vue"],names:[],mappings:"AACA,yBACE,cAAgB,CACjB,AACD,uCACE,kBAAmB,AACnB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,oDACE,WAAY,AACZ,sBAAuB,AACvB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,sDACE,cAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,oBAAsB,CACvB,AACD,wDACE,cAAe,AACf,UAAY,CACb,AACD,+BACE,kBAAmB,AACnB,QAAS,AACT,OAAQ,AACR,YAAa,AACb,kBAAmB,AACnB,WAAa,CACd,AACD,oCACE,qBAAsB,AACtB,aAAc,AACd,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC,AACD,2CACE,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC",file:"slider.vue",sourcesContent:["\n.slider[data-v-988bf3de] {\n  min-height: 1px;\n}\n.slider .slider-group[data-v-988bf3de] {\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.slider .slider-group .slider-item[data-v-988bf3de] {\n  float: left;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n}\n.slider .slider-group .slider-item a[data-v-988bf3de] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  text-decoration: none;\n}\n.slider .slider-group .slider-item img[data-v-988bf3de] {\n  display: block;\n  width: 100%;\n}\n.slider .dots[data-v-988bf3de] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 12px;\n  text-align: center;\n  font-size: 0;\n}\n.slider .dots .dot[data-v-988bf3de] {\n  display: inline-block;\n  margin: 0 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.5);\n}\n.slider .dots .dot.active[data-v-988bf3de] {\n  width: 20px;\n  border-radius: 5px;\n  background: rgba(255,255,255,0.8);\n}"],sourceRoot:""}])},323:function(e,t,n){var i=n(313);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(282)("7ac35604",i,!0)},325:function(e,t,n){var i=n(315);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(282)("905a5534",i,!0)},330:function(e,t,n){function i(e){n(325)}var o=n(0)(n(300),n(337),i,"data-v-988bf3de",null);e.exports=o.exports},335:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"recommend",staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.disclists}},[n("div",[e.recommends.length?n("div",{staticClass:"slider-wrapper"},[n("slider",e._l(e.recommends,function(t){return n("div",[n("a",{attrs:{href:t.linkUrl}},[n("img",{staticClass:"needsclick",attrs:{src:e.https(t.picUrl)},on:{load:e.loadImage}})])])}))],1):e._e(),e._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),n("ul",{staticStyle:{"margin-right":"-8px",overflow:"hidden"}},e._l(e.disclists,function(t){return n("li",{staticClass:"item",on:{click:function(n){e.selectItem(t)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.https(t.picUrl),expression:"https(item.picUrl)"}],staticClass:"needsclick"})]),e._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.songListDesc)}}),e._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.songListAuthor)}})])])}))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.disclists.length,expression:"!disclists.length"}],staticClass:"loading-container"},[n("loading")],1)]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},337:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"dots"},e._l(e.dots,function(t,i){return n("span",{staticClass:"dot",class:{active:e.currentIndex===i}})}))])},staticRenderFns:[]}}});
//# sourceMappingURL=3.d8aa8de037d5746670c1.js.map