(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06ee558f"],{"1ed7":function(t,e,s){t.exports=s.p+"img/Icon_ExitW.4c4fe328.svg"},"39d7":function(t,e,s){t.exports=s.p+"img/Icon_Setting_Nor.e19510ed.svg"},"42fd":function(t,e,s){t.exports=s.p+"img/Icon_Docs_Nor.2c360ce4.svg"},4601:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"screen100"},[s("main-header",{attrs:{type:t.type},on:{switchType:t.switchType}}),s("div",{staticClass:"maincontent"},[s("router-view")],1),s("main-foot")],1)])},o=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("tips",{attrs:{tips:t.tips,show:t.topTips,tipType:t.tipType},on:{closeTips:t.closeTips}}),i("div",[t._v("Making the Web 3.0 world accessible")]),i("div",{staticClass:"btmRht"},[i("div",[t._v("© 2021 Apron Network")]),i("ul",[t._m(0),i("li",{class:{active:t.settings},on:{click:t.toSettings}},[i("img",{staticClass:"noSel",attrs:{src:s("39d7"),alt:""}}),i("img",{staticClass:"sel",attrs:{src:s("7d17"),alt:""}})]),i("li",{on:{click:t.logout}},[i("img",{staticClass:"noSel",attrs:{src:s("703e"),alt:""}}),i("img",{staticClass:"sel",attrs:{src:s("1ed7"),alt:""}})])])])],1)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"http://apron.network/blog/",target:"_blank"}},[i("img",{staticClass:"noSel",attrs:{src:s("42fd"),alt:""}}),i("img",{staticClass:"sel",attrs:{src:s("e12d"),alt:""}})])])}],a=s("365c"),r=s("6c60"),l={name:"MainFoot",data:function(){return{settings:!0,tips:"",topTips:!1,tipType:""}},components:{Tips:r["a"]},created:function(){this.toActive()},watch:{"$route.path":function(t){this.toActive()}},methods:{closeTips:function(){this.topTips=!1},toActive:function(){this.settings=this.$route.path.indexOf("settings")>-1},toSettings:function(){this.$router.push("/dashboard/settings")},logout:function(){var t=this;a["a"].loginApi.loginout().then((function(e){e.success?(t.topTips=!0,t.tips="Login out success",t.tipType="success",localStorage.setItem("email",""),setTimeout((function(){t.$router.push("/loginRegister/login")}),1e3)):(t.topTips=!0,t.tips=e.msg,t.tipType="error")}))}}},p=l,u=(s("c701"),s("2877")),g=Object(u["a"])(p,n,c,!1,null,"7a9ff2a8",null),m=g.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"headerBrdr"},[i("div",{staticClass:"headerLft",class:{active:"welcome"===t.type},on:{click:function(e){return t.toType("welcome",0)}}},["welcome"===t.type?i("img",{staticClass:"lftLogo",attrs:{src:s("58ef"),alt:""}}):i("img",{staticClass:"lftLogo",attrs:{src:s("854a"),alt:""}})]),i("ul",{staticClass:"rhtTop"},t._l(t.list,(function(e){return i("li",{class:{active:t.type===e.name},on:{click:function(s){return t.toType(e.name,e.value)}}},[t.type===e.name?i("img",{attrs:{src:e.img,alt:""}}):i("img",{attrs:{src:e.imgHover,alt:""}}),i("div",[t._v(t._s(e.name))])])})),0)])])},d=[],f=s("4f50"),v={name:"MainHeader",data:function(){return{isActive:!0,list:[]}},props:["type"],methods:{toType:function(t,e){localStorage.setItem("service_id",e),localStorage.setItem("service_type",t),this.$emit("switchType",{type:t,id:e})}},mounted:function(){this.list=f.list}},_=v,y=(s("e75d"),Object(u["a"])(_,h,d,!1,null,null,null)),w=y.exports,T={name:"dashboard",data:function(){return{type:"welcome"}},components:{MainFoot:m,MainHeader:w},created:function(){this.toType()},watch:{"$route.path":function(t){this.toType()}},methods:{toType:function(){this.type=localStorage.getItem("service_type")?localStorage.getItem("service_type"):"welcome"},switchType:function(t){this.type=t.type,t.id?this.$router.push("/dashboard/type/".concat(this.type)):this.$router.push("/dashboard/".concat(this.type))}}},b=T,S=(s("ac90"),Object(u["a"])(b,i,o,!1,null,"c0108588",null));e["default"]=S.exports},"4c06":function(t,e,s){},"4f50":function(t){t.exports=JSON.parse('{"list":[{"name":"Heco","img":"./images/Heco_Logo_Vi.svg","value":1,"imgHover":"./images/Heco_Logo_White.svg","desc":"Instant access to the Huobi Echo Chain network with low latency and community supports."},{"name":"Bsc","img":"./images/Logo_Bsc_Vi_H64.svg","value":2,"imgHover":"./images/binance_logo_White.svg","desc":"Instant access to the Binance Super Chain network with low latency and community supports."},{"name":"Mina","img":"./images/mina_hover.png","value":3,"imgHover":"./images/mina.png","desc":"Instant access to the Mina Super Chain network with low latency and community supports."}]}')},"58ef":function(t,e,s){t.exports=s.p+"img/ApronLogo_Single_Vi.6dd5d6ce.svg"},"703e":function(t,e,s){t.exports=s.p+"img/Icon_Exit_Nor.ee45e26f.svg"},"7d17":function(t,e,s){t.exports=s.p+"img/Icon_Setting_SelW.49a06b2e.svg"},"854a":function(t,e,s){t.exports=s.p+"img/ApronLogo_Single_White.08ade443.svg"},ac90:function(t,e,s){"use strict";s("f718")},c701:function(t,e,s){"use strict";s("e19b")},e12d:function(t,e,s){t.exports=s.p+"img/Icon_Docs_SelW.5d6d74ae.svg"},e19b:function(t,e,s){},e75d:function(t,e,s){"use strict";s("4c06")},f718:function(t,e,s){}}]);