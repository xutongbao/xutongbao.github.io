(function(e){function t(t){for(var n,o,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);h&&h(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-07864402":"b042e1e3","chunk-275305ec":"6affe9b7","chunk-2d21f83e":"1c9da427","chunk-53d4efc2":"e429df52","chunk-634b7932":"3f9f68d4","chunk-76121d06":"cd68d817"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-07864402":1,"chunk-53d4efc2":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-07864402":"354d9a8e","chunk-275305ec":"31d6cfe0","chunk-2d21f83e":"31d6cfe0","chunk-53d4efc2":"6f0fd221","chunk-634b7932":"31d6cfe0","chunk-76121d06":"31d6cfe0"}[e]+".css",r=i.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],h.parentNode.removeChild(h),a(s)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"12e7":function(e,t,a){},"365c":function(e,t,a){"use strict";const n={login:"/api/login",list:"/api/list",myBooks:"/api/my_books",detail:"/api/detail/"};var o=n;const r={light:o};var s=r,c=a("bc3a"),i=a.n(c),l=a("a18c");i.a.defaults.baseURL="https://rough-tan-board.glitch.me",i.a.interceptors.request.use(e=>{if(e.headers.token=localStorage.getItem("token")||"",!1!==e.isNeedExtraData){let t={userId:1};"get"===e.method?e.params={...t,...e.data}:e.data={...t,...e.data}}return e},e=>Promise.reject(e)),i.a.interceptors.response.use(e=>200===e.data.code?e.data:400!==e.data.code?Promise.reject(e):void alert(e.data.message),e=>{if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误(400)";break;case 401:return l["a"].push("/login");case 403:e.message="拒绝访问(403)";break;case 404:e.message="请求出错(404)";break;case 408:e.message="请求超时(408)";break;case 500:e.message="服务器错误(500)";break;case 501:e.message="服务未实现(501)";break;case 502:e.message="网络错误(502)";break;case 503:e.message="服务不可用(503)";break;case 504:e.message="网络超时(504)";break;case 505:e.message="HTTP版本不受支持(505)";break;default:e.message=`连接出错(${e.response.status})!`}else e.message="连接服务器失败!";return Promise.reject(e)});const u=async e=>{let t=await i()(e);return t},d={login:e=>u({url:s.light.login,data:e,method:"post"}),list:()=>u({url:s.light.list}),myBooks:(e,t)=>u({url:s.light.myBooks,data:e,method:t}),detail:e=>u({url:s.light.detail+e})};var h=d;const p={light:h};t["a"]=p},4360:function(e,t,a){"use strict";var n=a("5502"),o=a("365c"),r={async getLightList({commit:e}){const t=await o["a"].light.list();e({type:"setLightState",key:"list",value:t.data})},async getMyBooks({commit:e}){const t=await o["a"].light.myBooks();e({type:"setLightState",key:"myBooks",value:t.data})},async addMyBooks({commit:e},t){const{book:a}=t,n=await o["a"].light.myBooks({book:a},"post");return e({type:"setLightState",key:"myBooks",value:n.data}),n},async deleteMyBooks({commit:e},t){const{ids:a}=t,n=await o["a"].light.myBooks({ids:a},"delete");return e({type:"setLightState",key:"myBooks",value:n.data}),n},async patchMyBooks({commit:e},t){const a=await o["a"].light.myBooks({...t},"patch");return e({type:"setLightState",key:"myBooks",value:a.data}),a},async getDetail({commit:e},t){const a=await o["a"].light.detail(t.id);a.data.count=1,e({type:"setLightState",key:"detailBook",value:a.data})}},s={state:{header:"小米书城",list:[],currentId:0,isRealScroll:!0,isListDialogVisible:!1,addBook:{},myBooks:[],detailBook:{},isLoading:!1},mutations:{setLightState(e,t){e[t.key]=t.value,console.log({...e})}},actions:r};t["a"]=Object(n["a"])({modules:{light:s}})},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function o(e,t,a,o,r,s){const c=Object(n["resolveComponent"])("router-view"),i=Object(n["resolveComponent"])("Loading");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(c),(Object(n["openBlock"])(),Object(n["createBlock"])(n["Teleport"],{to:"body"},[Object(n["createVNode"])(i)]))],64)}function r(e,t,a,o,r,s){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{class:"m-loading "+(o.isLoading?"active":"")},null,2)}var s=a("5502"),c={setup(){const e=Object(s["b"])(),t=Object(n["computed"])(()=>e.state.light.isLoading);return{isLoading:t}}};c.render=r;var i=c,l={components:{Loading:i}};l.render=o;var u=l,d=a("a18c"),h=a("4360"),p=a("3ef0"),m=a.n(p),g=a("51d4"),f=a.n(g);a("a471"),a("12e7");const k=Object(n["createApp"])(u).use(h["a"]).use(d["a"]);f.a.use(m.a),k.mount("#app")},a18c:function(e,t,a){"use strict";var n=a("6c02"),o=a("4360"),r=[{path:"/",redirect:"/light/login"},{path:"/light/login",component:()=>a.e("chunk-275305ec").then(a.bind(null,"ca52"))},{path:"/light/index",component:()=>a.e("chunk-76121d06").then(a.bind(null,"1fc8")),children:[{path:"/light/index/home",component:()=>a.e("chunk-53d4efc2").then(a.bind(null,"dc10")),meta:{header:"小米书城"}},{path:"/light/index/my_books",component:()=>a.e("chunk-2d21f83e").then(a.bind(null,"d9c6")),meta:{header:"书包"}},{path:"/light/index/me",component:()=>a.e("chunk-07864402").then(a.bind(null,"135c")),meta:{header:"个人中心"}}]},{path:"/light/detail/:id",component:()=>a.e("chunk-634b7932").then(a.bind(null,"effe"))}];const s=[...r],c=Object(n["a"])({history:Object(n["b"])("/"),routes:s});c.beforeEach((e,t,a)=>{e.meta.header&&o["a"].commit({type:"setLightState",key:"header",value:e.meta.header}),a()});t["a"]=c}});
//# sourceMappingURL=app.def16e14.js.map