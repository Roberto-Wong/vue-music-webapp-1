webpackJsonp([0],{287:function(t,i,e){function n(t){e(324)}var a=e(0)(e(305),e(336),n,"data-v-42dfcb88",null);t.exports=a.exports},291:function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(10),s=n(a),o=e(16),l=n(o),A=e(88),r=n(A),c=e(43),d=e(87),p=n(d),f=e(5),g=e(24),u=(0,c.prefixStyle)("transform"),m=(0,c.prefixStyle)("backdrop-filter");i.default={mixins:[g.playlistMixin],props:{songs:{type:Array,default:[]},bgImage:{type:String,default:""},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},created:function(){this.probeType=3,this.listenScroll=!0},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:(0,s.default)({back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})},handlePlaylist:function(t){var i=t.length?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()}},(0,f.mapActions)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTranslateY,t),e=0,n=1,a=0,s=Math.abs(t/this.imageHeight);this.$refs.layer.style[u]="translate3d(0,"+i+"px,0)",t>0?(e=10,n=1+s,this.$refs.bgImage.style[u]="scale("+n+")"):a=Math.min(20*s,20),this.$refs.filter.style[m]=a+"px",t<this.minTranslateY?(e=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=e}},components:{Scroll:l.default,SongList:r.default,Loading:p.default}}},292:function(t,i,e){i=t.exports=e(281)(!0),i.push([t.i,".music-list[data-v-7c3ad5f6]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-7c3ad5f6]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-7c3ad5f6]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-7c3ad5f6]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-7c3ad5f6]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-7c3ad5f6]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-7c3ad5f6]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-7c3ad5f6]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-7c3ad5f6]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-7c3ad5f6]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-7c3ad5f6]{position:relative;height:100%;background:#222}.music-list .list[data-v-7c3ad5f6]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-7c3ad5f6]{padding:20px 30px}.music-list .list .loading-container[data-v-7c3ad5f6]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/jie/Desktop/vue-music-webapp/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-7c3ad5f6] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-7c3ad5f6] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-7c3ad5f6] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-7c3ad5f6] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-7c3ad5f6] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-7c3ad5f6] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-7c3ad5f6] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-7c3ad5f6] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-7c3ad5f6] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-7c3ad5f6] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-7c3ad5f6] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-7c3ad5f6] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-7c3ad5f6] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-7c3ad5f6] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},293:function(t,i,e){var n=e(292);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(282)("44ace705",n,!0)},294:function(t,i,e){function n(t){e(293)}var a=e(0)(e(291),e(295),n,"data-v-7c3ad5f6",null);t.exports=a.exports},295:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length,expression:"songs.length"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{staticClass:"loading-container"},[e("loading",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}]})],1)])],1)},staticRenderFns:[]}},298:function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(){var t=(0,l.default)({},c.commonParams,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,loginUin:0,hostUin:0,format:"jsonp",notice:0,platform:"yqq",needNewCode:0});return(0,r.default)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,c.options)}function s(t){var i=(0,l.default)({},c.commonParams,{loginUin:0,hostUin:0,notice:0,format:"jsonp",platform:"yqq",needNewCode:0,order:"listen",begin:0,num:100,songstatus:1,singermid:t});return(0,r.default)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,c.options)}Object.defineProperty(i,"__esModule",{value:!0});var o=e(25),l=n(o);i.getSingerList=a,i.getSingerDetail=s;var A=e(86),r=n(A),c=e(15)},305:function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(10),s=n(a),o=e(298),l=e(15),A=e(44),r=e(294),c=n(r),d=e(5);i.default={data:function(){return{songs:[]}},computed:(0,s.default)({bgImage:function(){return this.singer.avatar},title:function(){return this.singer.name}},(0,d.mapGetters)(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;if(!this.singer.id)return void this.$router.back();(0,o.getSingerDetail)(this.singer.id).then(function(i){i.code===l.ERR_OK&&(t.songs=t._normalizeSongs(i.data.list))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){var e=t.musicData;e.songid&&e.albummid&&i.push((0,A.createSong)(e))}),i}},components:{MusicList:c.default}}},314:function(t,i,e){i=t.exports=e(281)(!0),i.push([t.i,".slide-enter-active[data-v-42dfcb88],.slide-leave-active[data-v-42dfcb88]{transition:all .3s}.slide-enter[data-v-42dfcb88],.slide-leave-to[data-v-42dfcb88]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["C:/Users/jie/Desktop/vue-music-webapp/src/components/singer-detail/singer-detail.vue"],names:[],mappings:"AACA,0EAEE,kBAAqB,CACtB,AACD,+DAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"singer-detail.vue",sourcesContent:["\n.slide-enter-active[data-v-42dfcb88],\n.slide-leave-active[data-v-42dfcb88] {\n  transition: all 0.3s;\n}\n.slide-enter[data-v-42dfcb88],\n.slide-leave-to[data-v-42dfcb88] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},324:function(t,i,e){var n=e(314);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(282)("6b624803",n,!0)},336:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"slide"}},[e("musicList",{attrs:{songs:t.songs,"bg-image":t.bgImage,title:t.title}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.5cf61ef074c91e589381.js.map