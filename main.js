(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(982),o=t.n(r),a=t(314),i=t.n(a),c=t(417),d=t.n(c),s=new URL(t(754),t.b),l=new URL(t(316),t.b),p=new URL(t(527),t.b),m=new URL(t(735),t.b),u=new URL(t(282),t.b),f=i()(o()),h=d()(s),g=d()(l),b=d()(p),v=d()(m),y=d()(u);f.push([e.id,`@font-face {\n    font-family: "Jacquard 12";\n    src: \n        url(${h}) format("woff"),\n        url(${g}) format("woff2");\n}\n\n@font-face {\n    font-family: "Press Start 2P";\n    src: \n        url(${b}) format("woff"),\n        url(${v}) format("woff2");\n}\n\n* {\n    padding: 0;\n}\n\n*::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    --deep-green: #195700;\n    --orange: #FFAA52;\n    --cream: #F8D490;\n    --off-white: #FFF5E1;\n    --maroon: #571319;\n    --red-gradient: linear-gradient(#8a121c, #BD2936);\n    \n    font-family: "Press Start 2P", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, monospace;\n    margin: 0;\n\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    min-height: 100vh;\n}\n\nimg, video {\n    max-width: 100%;\n}\n\nbutton {\n    font-family: inherit;\n    font-size: 0.8rem;\n    border: none;\n    cursor: pointer;\n    transition: 0.3s;\n    padding: 1em;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    color: var(--cream);\n    margin: 0;\n    line-height: 1.5;\n}\n\np {\n    color: var(--off-white);\n    line-height: 2;\n}\n\nheader, footer {\n    background-color: var(--deep-green);\n    position: relative;\n    z-index: 2; /* Layer on top of the box-shadow in the content container */\n}\n\nheader {\n    padding: 1rem 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-shadow: 0 1.4rem 4rem black;\n}\n\n.logo {\n    font-family: "Jacquard 12";\n    font-size: 2rem;\n    color: var(--orange);\n}\n\nnav button {\n    background-color: transparent;\n    color: var(--cream);\n    font-size: 0.6rem;\n}\n\nnav button:hover, .on-page {\n    text-decoration: underline;\n    text-decoration-thickness: 0.2rem;\n}\n\n.background {\n    position: fixed;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\nimg.background {\n    z-index: -2;\n}\n\n.half-full {\n    width: 50%;\n    height: 100%;\n    box-sizing: border-box;\n    padding: 2rem 3rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: relative;\n    z-index: 0;\n    box-shadow: 2rem 0 2rem rgba(0, 0, 0, 0.5);\n}\n\n/* Home */\n\nh2.home {\n    font-size: 1.3rem;\n    margin: 2rem 0;\n}\n\np.home {\n    font-size: 0.9rem;\n    margin-bottom: 3rem;\n}\n\n.view-menu {\n    background-color: var(--cream);\n    color: var(--maroon);\n    border-radius: 5px;\n    padding: 1em 1.2em;\n}\n\n.view-menu:hover {\n    background-color: var(--maroon);\n    color: var(--cream);\n}\n\nimg.portrait {\n    position: absolute;\n    bottom: 0;\n    right: 10%;\n    width: 27%;\n    height: auto;\n}\n\n/* Menu */\nh2.menu {\n    font-size: 0.8rem;\n    background-color: var(--deep-green);\n    margin: 2rem auto;\n    padding: 1rem;\n    width: max-content;\n    border-radius: 5px;\n    position: relative;\n}\n\nh2.menu::before, h2.menu::after {\n    content: " ~ "\n}\n\ntable {\n    color: var(--off-white);\n    margin: auto;\n    background-image: var(--red-gradient);\n    border-radius: 5px;\n    padding: 1rem 2rem;\n    width: 60%;\n    min-width: 400px;\n    border-top: solid var(--deep-green) 15px;\n}\n\nth, td {\n    padding: 0.2rem;\n    font-size: 0.7rem;\n}\n\ntr + tr.category > th {\n    padding-top: 0.7rem;\n}\n\nth::before, th::after {\n    content: " * ";\n}\n\ntr > td:first-child {\n    width: 12%;\n}\n\ntd.price {\n    text-align: right;\n    margin: 0.2rem;\n}\n\ntd.price > p {\n    margin: 0;\n}\n\ntd.price > p::before {\n    content: url(${y});\n    margin-right: 0.2rem;\n}\n\n/* About */\n\nh3 {\n    font-size: 1rem;\n    text-transform: uppercase;\n    margin-bottom: 1rem;\n}\n\nh3:first-of-type {\n    margin-top: 2rem;\n}\n\nh3:last-of-type {\n    margin-top: 5rem;\n}\n\np + h3 {\n    margin-top: 2rem;\n}\n\np.about {\n    font-size: 0.8rem;\n}\n\n.employee {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n}\n\n.employee img {\n    /* align-self: center; */\n    width: 7%;\n}\n\nimg.big {\n    width: 45%;\n    right: 10%;\n}\n\nfooter {\n    color: var(--cream);\n    padding: 0.6rem;\n    font-size: 0.6rem;\n    text-align: center;\n}\n\n\n\n\n`,""]);const x=f},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},982:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var f=o(u,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},754:(e,n,t)=>{e.exports=t.p+"bc428abd411416cbe644.woff"},316:(e,n,t)=>{e.exports=t.p+"492faba89fa780b56720.woff2"},527:(e,n,t)=>{e.exports=t.p+"6e701881ba7efddfb729.woff"},735:(e,n,t)=>{e.exports=t.p+"411d2134ede17f4bc699.woff2"},282:(e,n,t)=>{e.exports=t.p+"21272029ad91f9aae337.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;const r=t.p+"84b6607fae130f058d2f.png",o=t.p+"9fcd9b34ee15fb3d2d64.png",a=t.p+"2d08454ef452ad7ad9a3.png",i=t.p+"84ed7e379ba8b5e15a89.png",c=t.p+"9757c735a8bafcc0f421.png",d=t.p+"c2e08a945077b3196c58.png",s=t.p+"074c4abfa282309cf0dd.png";function l(){const e=document.querySelector(".half-full"),n=document.querySelector("#menu");console.log("Rendering Menu"),e.replaceChildren(),n.classList.add("on-page");const t=document.createElement("h2");t.classList.add("menu"),t.textContent="Our Menu",e.appendChild(t);const r=[{name:"Coffee",img:a,price:300},{name:"Beer",img:o,price:400},{name:"Bread",img:i,price:120},{name:"Salad",img:c,price:220},{name:"Spaghetti",img:d,price:240},{name:"Pizza",img:s,price:600}];let l=0;const p=e=>{const n=document.createElement("tr");console.log("calling menu creation");const t=document.createElement("td"),r=document.createElement("img");r.src=e.img,r.alt=e.name,t.appendChild(r),n.appendChild(t);const o=document.createElement("td");o.textContent=e.name,n.appendChild(o);const a=document.createElement("td");a.classList.add("price");const i=document.createElement("p");return i.textContent=e.price+"g",a.appendChild(i),n.appendChild(a),n},m=document.createElement("table"),u=document.createElement("tr");u.classList.add("category");const f=document.createElement("th");for(f.colSpan=3,f.textContent="Drinks",u.appendChild(f),m.appendChild(u);l<2;)m.appendChild(p(r[l])),l++;const h=document.createElement("tr");h.classList.add("category");const g=document.createElement("th");for(g.colSpan=3,g.colspan=3,g.textContent="Classics",h.appendChild(g),m.appendChild(h);l<r.length;)m.appendChild(p(r[l])),l++;e.appendChild(m)}function p(){const e=document.querySelector(".half-full"),n=document.querySelector("#home");console.log("Rendering Home"),e.replaceChildren(),n.classList.add("on-page");const t=document.createElement("h2");t.classList.add("home"),t.textContent="Welcome to the Stardrop Saloon!",e.appendChild(t);const o=document.createElement("p");o.classList.add("home"),o.innerHTML="The Stardrop Saloon has been Pelican Town’s heart for decades. Whether you’re hanging out with friends or just grabbing a beer, we’ve got a seat by the fire just for you. <br /> Enjoy the music!",e.appendChild(o);const a=document.createElement("button");a.classList.add("view-menu"),a.textContent="View Menu",e.appendChild(a),a.addEventListener("click",(()=>{l(),n.classList.remove("on-page")}));const i=document.createElement("img");i.classList.add("portrait"),i.src=r,i.alt="Gus smiling",e.appendChild(i)}const m=t.p+"fb88a980beb973f67a3e.png",u=t.p+"f8de8c44d4f161a4ac13.png",f=t.p+"131f81616552c548633d.png";var h=t(72),g=t.n(h),b=t(825),v=t.n(b),y=t(659),x=t.n(y),C=t(56),w=t.n(C),E=t(540),S=t.n(E),L=t(113),k=t.n(L),z=t(365),M={};M.styleTagTransform=k(),M.setAttributes=w(),M.insert=x().bind(null,"head"),M.domAPI=v(),M.insertStyleElement=S(),g()(z.A,M),z.A&&z.A.locals&&z.A.locals,function(){const e=document.querySelector("#home"),n=document.querySelector("#menu"),t=document.querySelector("#about");p();const r=e=>{e.classList.contains("on-page")&&e.classList.remove("on-page")};e.addEventListener("click",(()=>{p(),r(n),r(t)})),n.addEventListener("click",(()=>{l(),r(e),r(t)})),t.addEventListener("click",(()=>{!function(){const e=document.querySelector(".half-full"),n=document.querySelector("#about");console.log("Rendering About"),e.replaceChildren(),n.classList.add("on-page");const t=document.createElement("h3");t.textContent="location",e.appendChild(t);const r=document.createElement("p");r.classList.add("about"),r.textContent="Townsquare, Stardew Valley",e.appendChild(r);const o=document.createElement("h3");o.textContent="open hours",e.appendChild(o);const a=document.createElement("p");a.classList.add("about"),a.textContent="12:00 AM ~ 12:00 PM",e.appendChild(a);const i=document.createElement("h3");i.textContent="Staff",e.appendChild(i);const c=document.createElement("div");c.classList.add("employee");const d=document.createElement("img");d.src=u,d.alt="Gus",c.appendChild(d);const s=document.createElement("p");s.classList.add("about"),s.textContent="Gus",c.appendChild(s),e.appendChild(c);const l=document.createElement("div");l.classList.add("employee");const p=document.createElement("img");p.src=f,p.alt="Emily",l.appendChild(p);const h=document.createElement("p");h.classList.add("about"),h.textContent="Emily",l.appendChild(h),e.appendChild(l);const g=document.createElement("img");g.classList.add("portrait"),g.classList.add("big"),g.src=m,g.alt="Saloon exterior",e.appendChild(g)}(),r(n),r(e)}))}()})();