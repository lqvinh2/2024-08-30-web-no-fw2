var e=globalThis,t={},n={},o=e.parcelRequirea605;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequirea605=o),o.register;var r=o("6xOOH"),a=r.onAfterLoadPage,c=r.onStartLoadPage,i=r.onLoadPageError;const l="2024-08-30-web-no-fw2/",d=`${l}layout`,h=[`${l}`,`${l}index`,`${l}home`],f=`${l}a`,u=`${l}b`,s=`${l}c`;document.addEventListener("DOMContentLoaded",function(){let e=[...h,f,u,s];function t(e,t){return c(),fetch(e).then(e=>e.text()).then(e=>{document.getElementById("content").innerHTML=e,"function"==typeof t&&t()}).catch(e=>{i(e)})}let n=window.location.pathname.toLowerCase();window.location.href.split("/");let o=[...h][0];function r(){a()}e.forEach(e=>{e.endsWith(n)&&(o=e)}),[...h].forEach(e=>{e.endsWith(o)&&(o=h[1])}),o+="-content.html",fetch(d).then(e=>e.text()).then(e=>{document.body.innerHTML=e}).then(()=>t(o,r)),e.forEach(e=>{let n=e;page(n,function(){[...h].includes(n)&&(n="index");let e="/"+(n=n.replace(".html","").replace("/",""))+"-content.html";o!=e&&(o=e,t(e,r))})}),page.start()});