(function(e){function t(t){for(var r,l,i=t[0],o=t[1],s=t[2],u=0,p=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&p.push(c[l][0]),c[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},c={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2418:function(e,t,n){},"2c2e":function(e,t,n){"use strict";n("2418")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,l){var i=Object(r["m"])("FolderView");return Object(r["i"])(),Object(r["c"])(i,{name:"$",folders:e.folders,files:e.files},null,8,["folders","files"])}n("b0c0");Object(r["k"])("data-v-06bf7d0e");var a={class:"folder"},l=Object(r["f"])("i",{class:"fas fa-folder"},null,-1),i=Object(r["f"])("i",{class:"fas fa-angle-right"},null,-1),o=[i],s={key:0,class:"folderItem"};function f(e,t,n,c,i,f){var u=Object(r["m"])("FolderView",!0),p=Object(r["m"])("FileView");return Object(r["i"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("p",a,[l,Object(r["g"])(" "+Object(r["n"])(n.name)+" ",1),Object(r["f"])("span",{class:Object(r["h"])(["collapse-icon",{"rotate-90":i.click}]),onClick:t[0]||(t[0]=function(e){return f.clicked()})},o,2)]),i.click?(Object(r["i"])(),Object(r["e"])("div",s,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(n.folders,(function(e){return Object(r["i"])(),Object(r["c"])(u,{name:e.name,folders:e.folders,files:e.files},null,8,["name","folders","files"])})),256)),(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(n.files,(function(e){return Object(r["i"])(),Object(r["c"])(p,{name:e.name},null,8,["name"])})),256))])):Object(r["d"])("",!0)],64)}Object(r["j"])(),Object(r["k"])("data-v-1df80b98");var u={class:"file"},p=Object(r["f"])("i",{class:"fas fa-file"},null,-1);function d(e,t,n,c,a,l){return Object(r["i"])(),Object(r["e"])("p",u,[p,Object(r["g"])(" "+Object(r["n"])(n.name),1)])}Object(r["j"])();var b={name:"FileView",props:{name:String}};n("a682");b.render=d,b.__scopeId="data-v-1df80b98";var j=b,g={name:"FolderView",components:{FileView:j},data:function(){return{click:!1}},props:{name:String,folders:Array,files:Array},methods:{clicked:function(){this.click=!this.click}}};n("6a81");g.render=f,g.__scopeId="data-v-06bf7d0e";var m=g,O={folders:[{name:"assets",folders:[{name:"icons",folders:[],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]},v={name:"App",components:{FolderView:m},data:function(){return O}};n("2c2e");v.render=c;var y=v;n("15f5"),n("7051");Object(r["b"])(y).mount("#app")},"6a81":function(e,t,n){"use strict";n("d45d")},9415:function(e,t,n){},a682:function(e,t,n){"use strict";n("9415")},d45d:function(e,t,n){}});
//# sourceMappingURL=app.2a560bcb.js.map