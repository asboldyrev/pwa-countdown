(function(e){function t(t){for(var r,i,o=t[0],d=t[1],l=t[2],m=0,u=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);c&&c(t);while(u.length)u.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,o=1;o<s.length;o++){var d=s[o];0!==a[d]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},a={app:0},n=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=d;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=n(e);return s(t)}function n(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);var r=s("2b0e"),a=s("2f62"),n=s("8c4f"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mx-auto",attrs:{id:"app"}},[s("div",{staticClass:"absolute"},["/"!=e.$route.path?s("router-link",{staticClass:"inline-block w-8 m-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors",attrs:{to:"/"}},[s("svg",{staticClass:"stroke-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}})])]):e._e()],1),s("div",{staticClass:"text-2xl font-medium text-center py-4 bg-gray-800 text-gray-50"},[e._v(" Countdown ")]),s("router-view")],1)},o=[],d=s("c1df"),l=s.n(d);l.a.locale("ru");var c={name:"App",mounted:function(){localStorage.items&&(this.$store.state.items.splice(0),JSON.parse(localStorage.items).forEach(e=>{this.$store.commit("addItem",e)})),this.$store.commit("start"),this.$store.dispatch("sort")}},m=c,u=s("2877"),b=Object(u["a"])(m,i,o,!1,null,null,null),f=b.exports;function p(e,t){let s={s:60,m:60,h:24,d:30,M:12};return e=Math.abs(e),1==e?"1 "+l.a.duration(e,t).humanize(s):l.a.duration(e,t).humanize(s)}function h(e){let t=l.a.duration(l()(e).diff());return t.years()?p(t.years(),"years")+(t.months()?", "+p(t.months(),"months"):"")+(t.days()?", "+p(t.days(),"days"):""):t.months()?p(t.months(),"months")+(t.days()?", "+p(t.days(),"days"):""):t.days()?p(t.days(),"days")+(t.hours()?", "+p(t.hours(),"hours"):""):t.hours()?p(t.hours(),"hours")+(t.minutes()?", "+p(t.minutes(),"minutes"):""):t.minutes()?p(t.minutes(),"minutes"):0==t.minutes()?"Сейчас":""}l.a.locale("ru");var j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"divide-y divide-gray-200"},e._l(e.$store.state.items,(function(e,t){return s("ListItem",{key:t,attrs:{item:e}})})),1),s("router-link",{staticClass:"absolute w-16 m-4 p-2 right-0 bottom-0 rounded-full text-gray-100 bg-blue-500 hover:bg-blue-700 hover:text-gray-600 cursor-pointer transition-colors",attrs:{to:"/add"}},[s("svg",{staticClass:"stroke-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}})])])],1)},v=[],g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cursor-pointer p-4"},[s("div",{staticClass:"grid grid-cols-12"},[s("router-link",{staticClass:"block col-span-10",attrs:{to:"/edit/"+e.item.id}},[s("div",[e._v(e._s(e.item.name))]),s("div",{staticClass:"text-gray-400",class:{"text-green-600":e.inFuture}},[e._v(" "+e._s(e.diff)+" ")])]),s("div",{staticClass:"col-span-2 self-center text-right"},[s("span",{staticClass:"inline-block w-8 mt-3 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors",on:{click:function(t){return e.deleteItem()}}},[s("svg",{staticClass:"stroke-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])],1)])},y=[];l.a.locale("ru");var x={props:["item"],computed:{inFuture(){return this.item.inFuture},diff(){return this.item.diff}},methods:{deleteItem(){this.$store.commit("removeItem",this.item.id),this.$store.dispatch("sort")}}},k=x,w=Object(u["a"])(k,g,y,!1,null,null,null),C=w.exports,_={name:"List",components:{ListItem:C}},z=_,O=Object(u["a"])(z,j,v,!1,null,null,null),$=O.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"grid grid-rows-none gap-3 mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],staticClass:"mx-2 py-2 px-4 bg-gray-100 rounded border-2 border-gray-300",class:{"border-red-300 bg-red-100":e.errors.date},attrs:{type:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],staticClass:"mx-2 py-2 px-4 bg-gray-100 rounded border-2 border-gray-300",class:{"border-red-300 bg-red-100":e.errors.time},attrs:{type:"time"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"mx-2 py-2 px-4 bg-gray-100 rounded border-2 border-gray-300",class:{"border-red-300 bg-red-100":e.errors.name},attrs:{type:"text",placeholder:"Название события"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("button",{staticClass:"block mx-2 p-4 rounded text-gray-100 bg-blue-500 hover:bg-blue-700 text-center",attrs:{type:"button"},on:{click:e.store}},[e._v(" Создать ")])])])},S=[],P={name:"AddItem",data:()=>({date:"",time:"",name:"",errors:{date:!1,time:!1,name:!1}}),methods:{store(){this.errors.date=""==this.date,this.errors.time=""==this.time,this.errors.name=""==this.name,this.date&&this.time&&this.name&&(this.$store.commit("addItem",{id:this.$store.getters.count,date:this.date,time:this.time,name:this.name,diff:"",inFuture:!1}),this.$store.dispatch("sort"),this.$router.push("/"))}}},M=P,N=Object(u["a"])(M,I,S,!1,null,null,null),E=N.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"grid grid-rows-none gap-3 mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],staticClass:"mx-2 py-2 px-4 bg-gray-100 rounded border-2 border-gray-300",class:{"border-red-300 bg-red-100":e.errors.date},attrs:{type:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],staticClass:"mx-2 py-2 px-4 bg-gray-100 rounded border-2 border-gray-300",class:{"border-red-300 bg-red-100":e.errors.time},attrs:{type:"time"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"mx-2 py-2 px-4 bg-gray-100 rounded border-2 border-gray-300",class:{"border-red-300 bg-red-100":e.errors.name},attrs:{type:"text",placeholder:"Название события"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("button",{staticClass:"block mx-2 p-4 rounded text-gray-100 bg-blue-500 hover:bg-blue-700 text-center",attrs:{type:"button"},on:{click:e.update}},[e._v(" Сохранить ")])])])},J=[],L={name:"EditItem",data:()=>({id:"",date:"",time:"",name:"",errors:{date:!1,time:!1,name:!1}}),methods:{update(){this.errors.date=""==this.date,this.errors.time=""==this.time,this.errors.name=""==this.name,this.date&&this.time&&this.name&&(this.$store.commit("editItem",{id:this.id,date:this.date,time:this.time,name:this.name,diff:"",inFuture:!1}),this.$store.dispatch("sort"),this.$router.push("/"))}},mounted(){let e=this.$store.state.items.find(e=>e.id==this.$route.params.id);this.id=e.id,this.date=e.date,this.time=e.time,this.name=e.name}},T=L,A=Object(u["a"])(T,F,J,!1,null,null,null),B=A.exports;l.a.locale("ru"),r["a"].use(a["a"]),r["a"].use(n["a"]),r["a"].config.productionTip=!1;const q=e=>{e.subscribe((e,t)=>{let s=JSON.stringify(t.items),r=localStorage.items;s!=r&&(localStorage.items=JSON.stringify(t.items))})},D=new a["a"].Store({plugins:[q],state:{items:[],interval:null},getters:{count(e){return e.items.length}},actions:{sort(e){e.state.items.sort((e,t)=>{e=l()(e.date+" "+e.time),t=l()(t.date+" "+t.time);let s=e.diff(t);return s<0?1:0==s?0:s>0?-1:void 0})}},mutations:{addItem(e,t){e.items.push(t)},editItem(e,t){let s=e.items.findIndex(e=>e.id==t.id);e.items[s].name=t.name},removeItem(e,t){let s=e.items.findIndex(e=>e.id==t);e.items.splice(s,1)},updateInterval(e){e.items.forEach(e=>{e.diff=h(e.date+" "+e.time),e.inFuture=l()(e.date+" "+e.time).isSameOrAfter()})},start(e){e.interval||(e.interval=setInterval(()=>this.commit("updateInterval"),1e3))},stop(e){e.interval&&(clearInterval(e.interval),e.interval=null)}}}),U=new n["a"]({routes:[{path:"/",component:$},{path:"/add",component:E},{path:"/edit/:id",component:B}]});new r["a"]({store:D,router:U,render:e=>e(f)}).$mount("#app")}});