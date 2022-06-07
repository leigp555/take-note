import{a as t,e,f as n,j as o,w as i,D as r,n as a,_ as u,h as s,c as l,F as c,b as p,P as f,t as h,G as d,H as m,J as v,y as g,K as w}from"./default-7033edc7.js";import{s as y,a as b,P as T,u as P}from"./Portal-ba621d44.js";import{c as x,e as C,N as O,E as M,d as D,r as S,w as k,f as A,o as H,b as E,n as V,J as F,H as j,a as R,v as $,O as B,i as N,p as W,F as L}from"./index-4b933dea.js";import{c as X}from"./vnode-337c6a8b.js";import{i as Y}from"./index-139a6198.js";import{i as z}from"./isEqual-f3bbf050.js";function I(t,e,n,o){if(t&&t.addEventListener){var i=o;void 0!==i||!y||"touchstart"!==e&&"touchmove"!==e&&"wheel"!==e||(i={passive:!1}),t.addEventListener(e,n,i)}return{remove:function(){t&&t.removeEventListener&&t.removeEventListener(e,n)}}}function _(t,e){return!!t&&t.contains(e)}var U=["moz","ms","webkit"];var q=function(){if("undefined"==typeof window)return function(){};if(window.requestAnimationFrame)return window.requestAnimationFrame.bind(window);var t,e=U.filter((function(t){return"".concat(t,"RequestAnimationFrame")in window}))[0];return e?window["".concat(e,"RequestAnimationFrame")]:(t=0,function(e){var n=(new Date).getTime(),o=Math.max(0,16-(n-t)),i=window.setTimeout((function(){e(n+o)}),o);return t=n+o,i})}(),G=function(t){return function(t){if("undefined"==typeof window)return null;if(window.cancelAnimationFrame)return window.cancelAnimationFrame(t);var e=U.filter((function(t){return"".concat(t,"CancelAnimationFrame")in window||"".concat(t,"CancelRequestAnimationFrame")in window}))[0];return e?(window["".concat(e,"CancelAnimationFrame")]||window["".concat(e,"CancelRequestAnimationFrame")]).call(this,t):clearTimeout(t)}(t.id)},J={visible:Boolean,prefixCls:String,zIndex:Number,destroyPopupOnHide:Boolean,forceRender:Boolean,animation:[String,Object],transitionName:String,stretch:{type:String},align:{type:Object},point:{type:Object},getRootDomNode:{type:Function},getClassNameFromAlign:{type:Function},onMouseenter:{type:Function},onMouseleave:{type:Function},onMousedown:{type:Function},onTouchstart:{type:Function}},K=t(t({},J),{mobile:{type:Object}}),Z=t(t({},J),{mask:Boolean,mobile:{type:Object},maskAnimation:String,maskTransitionName:String});function Q(t){var e=t.prefixCls,n=t.animation,o=t.transitionName;return n?{name:"".concat(e,"-").concat(n)}:o?{name:o}:{}}function tt(t){var n=t.prefixCls,o=t.visible,i=t.zIndex,r=t.mask,a=t.maskAnimation,u=t.maskTransitionName;if(!r)return null;var s={};return(u||a)&&(s=Q({prefixCls:n,transitionName:u,animation:a})),x(M,e({appear:!0},s),{default:function(){return[C(x("div",{style:{zIndex:i},class:"".concat(n,"-mask")},null),[[O("if"),o]])]}})}tt.displayName="Mask";var et,nt=D({name:"MobilePopupInner",inheritAttrs:!1,props:K,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup:function(i,r){var a=r.expose,u=r.slots,s=S();return a({forceAlign:function(){},getElement:function(){return s.value}}),function(){var r,a=i.zIndex,l=i.visible,c=i.prefixCls,p=i.mobile,f=(p=void 0===p?{}:p).popupClassName,h=p.popupStyle,d=p.popupMotion,m=void 0===d?{}:d,v=p.popupRender,g=t({zIndex:a},h),w=n(null===(r=u.default)||void 0===r?void 0:r.call(u));w.length>1&&(w=x("div",{class:"".concat(c,"-content")},[w])),v&&(w=v(w));var y=o(c,f);return x(M,e({ref:s},m),{default:function(){return[l?x("div",{class:y,style:g},[w]):null]}})}}}),ot=globalThis&&globalThis.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{s(o.next(t))}catch(e){r(e)}}function u(t){try{s(o.throw(t))}catch(e){r(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((o=o.apply(t,e||[])).next())}))},it=["measure","align",null,"motion"];function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function at(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){st(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ut(t){return(ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var lt={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function ct(){if(void 0!==et)return et;et="";var t=document.createElement("p").style;for(var e in lt)e+"Transform"in t&&(et=e);return et}function pt(){return ct()?"".concat(ct(),"TransitionProperty"):"transitionProperty"}function ft(){return ct()?"".concat(ct(),"Transform"):"transform"}function ht(t,e){var n=pt();n&&(t.style[n]=e,"transitionProperty"!==n&&(t.style.transitionProperty=e))}function dt(t,e){var n=ft();n&&(t.style[n]=e,"transform"!==n&&(t.style.transform=e))}var mt,vt=/matrix\((.*)\)/,gt=/matrix3d\((.*)\)/;function wt(t){var e=t.style.display;t.style.display="none",t.offsetHeight,t.style.display=e}function yt(t,e,n){var o=n;if("object"!==ut(e))return void 0!==o?("number"==typeof o&&(o="".concat(o,"px")),void(t.style[e]=o)):mt(t,e);for(var i in e)e.hasOwnProperty(i)&&yt(t,i,e[i])}function bt(t,e){var n=t["page".concat(e?"Y":"X","Offset")],o="scroll".concat(e?"Top":"Left");if("number"!=typeof n){var i=t.document;"number"!=typeof(n=i.documentElement[o])&&(n=i.body[o])}return n}function Tt(t){return bt(t)}function Pt(t){return bt(t,!0)}function xt(t){var e=function(t){var e,n,o,i=t.ownerDocument,r=i.body,a=i&&i.documentElement;return e=t.getBoundingClientRect(),n=Math.floor(e.left),o=Math.floor(e.top),{left:n-=a.clientLeft||r.clientLeft||0,top:o-=a.clientTop||r.clientTop||0}}(t),n=t.ownerDocument,o=n.defaultView||n.parentWindow;return e.left+=Tt(o),e.top+=Pt(o),e}function Ct(t){return null!=t&&t==t.window}function Ot(t){return Ct(t)?t.document:9===t.nodeType?t:t.ownerDocument}var Mt=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),Dt=/^(top|right|bottom|left)$/;function St(t,e){return"left"===t?e.useCssRight?"right":t:e.useCssBottom?"bottom":t}function kt(t){return"left"===t?"right":"right"===t?"left":"top"===t?"bottom":"bottom"===t?"top":void 0}function At(t,e,n){"static"===yt(t,"position")&&(t.style.position="relative");var o=-999,i=-999,r=St("left",n),a=St("top",n),u=kt(r),s=kt(a);"left"!==r&&(o=999),"top"!==a&&(i=999);var l,c="",p=xt(t);("left"in e||"top"in e)&&(c=(l=t).style.transitionProperty||l.style[pt()]||"",ht(t,"none")),"left"in e&&(t.style[u]="",t.style[r]="".concat(o,"px")),"top"in e&&(t.style[s]="",t.style[a]="".concat(i,"px")),wt(t);var f=xt(t),h={};for(var d in e)if(e.hasOwnProperty(d)){var m=St(d,n),v="left"===d?o:i,g=p[d]-f[d];h[m]=m===d?v+g:v-g}yt(t,h),wt(t),("left"in e||"top"in e)&&ht(t,c);var w={};for(var y in e)if(e.hasOwnProperty(y)){var b=St(y,n),T=e[y]-p[y];w[b]=y===b?h[b]+T:h[b]-T}yt(t,w)}function Ht(t,e){var n=xt(t),o=function(t){var e=window.getComputedStyle(t,null),n=e.getPropertyValue("transform")||e.getPropertyValue(ft());if(n&&"none"!==n){var o=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(o[12]||o[4],0),y:parseFloat(o[13]||o[5],0)}}return{x:0,y:0}}(t),i={x:o.x,y:o.y};"left"in e&&(i.x=o.x+e.left-n.left),"top"in e&&(i.y=o.y+e.top-n.top),function(t,e){var n=window.getComputedStyle(t,null),o=n.getPropertyValue("transform")||n.getPropertyValue(ft());if(o&&"none"!==o){var i,r=o.match(vt);r?((i=(r=r[1]).split(",").map((function(t){return parseFloat(t,10)})))[4]=e.x,i[5]=e.y,dt(t,"matrix(".concat(i.join(","),")"))):((i=o.match(gt)[1].split(",").map((function(t){return parseFloat(t,10)})))[12]=e.x,i[13]=e.y,dt(t,"matrix3d(".concat(i.join(","),")")))}else dt(t,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}(t,i)}function Et(t,e){for(var n=0;n<t.length;n++)e(t[n])}function Vt(t){return"border-box"===mt(t,"boxSizing")}"undefined"!=typeof window&&(mt=window.getComputedStyle?function(t,e,n){var o=n,i="",r=Ot(t);return(o=o||r.defaultView.getComputedStyle(t,null))&&(i=o.getPropertyValue(e)||o[e]),i}:function(t,e){var n=t.currentStyle&&t.currentStyle[e];if(Mt.test(n)&&!Dt.test(e)){var o=t.style,i=o.left,r=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,o.left="fontSize"===e?"1em":n||0,n=o.pixelLeft+"px",o.left=i,t.runtimeStyle.left=r}return""===n?"auto":n});var Ft=["margin","border","padding"];function jt(t,e,n){var o,i={},r=t.style;for(o in e)e.hasOwnProperty(o)&&(i[o]=r[o],r[o]=e[o]);for(o in n.call(t),e)e.hasOwnProperty(o)&&(r[o]=i[o])}function Rt(t,e,n){var o,i,r,a=0;for(i=0;i<e.length;i++)if(o=e[i])for(r=0;r<n.length;r++){var u=void 0;u="border"===o?"".concat(o).concat(n[r],"Width"):o+n[r],a+=parseFloat(mt(t,u))||0}return a}var $t={getParent:function(t){var e=t;do{e=11===e.nodeType&&e.host?e.host:e.parentNode}while(e&&1!==e.nodeType&&9!==e.nodeType);return e}};function Bt(t,e,n){var o=n;if(Ct(t))return"width"===e?$t.viewportWidth(t):$t.viewportHeight(t);if(9===t.nodeType)return"width"===e?$t.docWidth(t):$t.docHeight(t);var i="width"===e?["Left","Right"]:["Top","Bottom"],r="width"===e?Math.floor(t.getBoundingClientRect().width):Math.floor(t.getBoundingClientRect().height),a=Vt(t),u=0;(null==r||r<=0)&&(r=void 0,(null==(u=mt(t,e))||Number(u)<0)&&(u=t.style[e]||0),u=parseFloat(u)||0),void 0===o&&(o=a?1:-1);var s=void 0!==r||a,l=r||u;return-1===o?s?l-Rt(t,["border","padding"],i):u:s?1===o?l:l+(2===o?-Rt(t,["border"],i):Rt(t,["margin"],i)):u+Rt(t,Ft.slice(o),i)}Et(["Width","Height"],(function(t){$t["doc".concat(t)]=function(e){var n=e.document;return Math.max(n.documentElement["scroll".concat(t)],n.body["scroll".concat(t)],$t["viewport".concat(t)](n))},$t["viewport".concat(t)]=function(e){var n="client".concat(t),o=e.document,i=o.body,r=o.documentElement[n];return"CSS1Compat"===o.compatMode&&r||i&&i[n]||r}}));var Nt={position:"absolute",visibility:"hidden",display:"block"};function Wt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o,i=e[0];return 0!==i.offsetWidth?o=Bt.apply(void 0,e):jt(i,Nt,(function(){o=Bt.apply(void 0,e)})),o}function Lt(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}Et(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);$t["outer".concat(e)]=function(e,n){return e&&Wt(e,t,n?0:1)};var n="width"===t?["Left","Right"]:["Top","Bottom"];$t[t]=function(e,o){var i=o;return void 0!==i?e?(Vt(e)&&(i+=Rt(e,["padding","border"],n)),yt(e,t,i)):void 0:e&&Wt(e,t,-1)}}));var Xt={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},getDocument:Ot,offset:function(t,e,n){if(void 0===e)return xt(t);!function(t,e,n){if(n.ignoreShake){var o=xt(t),i=o.left.toFixed(0),r=o.top.toFixed(0),a=e.left.toFixed(0),u=e.top.toFixed(0);if(i===a&&r===u)return}n.useCssRight||n.useCssBottom?At(t,e,n):n.useCssTransform&&ft()in document.body.style?Ht(t,e):At(t,e,n)}(t,e,n||{})},isWindow:Ct,each:Et,css:yt,clone:function(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);if(t.overflow)for(e in t)t.hasOwnProperty(e)&&(n.overflow[e]=t.overflow[e]);return n},mix:Lt,getWindowScrollLeft:function(t){return Tt(t)},getWindowScrollTop:function(t){return Pt(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++)Xt.mix(t,e<0||arguments.length<=e?void 0:arguments[e]);return t},viewportWidth:0,viewportHeight:0};Lt(Xt,$t);var Yt=Xt.getParent;function zt(t){if(Xt.isWindow(t)||9===t.nodeType)return null;var e,n=Xt.getDocument(t).body,o=Xt.css(t,"position");if(!("fixed"===o||"absolute"===o))return"html"===t.nodeName.toLowerCase()?null:Yt(t);for(e=Yt(t);e&&e!==n&&9!==e.nodeType;e=Yt(e))if("static"!==(o=Xt.css(e,"position")))return e;return null}var It=Xt.getParent;function _t(t,e){for(var n={left:0,right:1/0,top:0,bottom:1/0},o=zt(t),i=Xt.getDocument(t),r=i.defaultView||i.parentWindow,a=i.body,u=i.documentElement;o;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===o.clientWidth||o===a||o===u||"visible"===Xt.css(o,"overflow")){if(o===a||o===u)break}else{var s=Xt.offset(o);s.left+=o.clientLeft,s.top+=o.clientTop,n.top=Math.max(n.top,s.top),n.right=Math.min(n.right,s.left+o.clientWidth),n.bottom=Math.min(n.bottom,s.top+o.clientHeight),n.left=Math.max(n.left,s.left)}o=zt(o)}var l=null;Xt.isWindow(t)||9===t.nodeType||(l=t.style.position,"absolute"===Xt.css(t,"position")&&(t.style.position="fixed"));var c=Xt.getWindowScrollLeft(r),p=Xt.getWindowScrollTop(r),f=Xt.viewportWidth(r),h=Xt.viewportHeight(r),d=u.scrollWidth,m=u.scrollHeight,v=window.getComputedStyle(a);if("hidden"===v.overflowX&&(d=r.innerWidth),"hidden"===v.overflowY&&(m=r.innerHeight),t.style&&(t.style.position=l),e||function(t){if(Xt.isWindow(t)||9===t.nodeType)return!1;var e=Xt.getDocument(t),n=e.body,o=null;for(o=It(t);o&&o!==n&&o!==e;o=It(o))if("fixed"===Xt.css(o,"position"))return!0;return!1}(t))n.left=Math.max(n.left,c),n.top=Math.max(n.top,p),n.right=Math.min(n.right,c+f),n.bottom=Math.min(n.bottom,p+h);else{var g=Math.max(d,c+f);n.right=Math.min(n.right,g);var w=Math.max(m,p+h);n.bottom=Math.min(n.bottom,w)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function Ut(t){var e,n,o;if(Xt.isWindow(t)||9===t.nodeType){var i=Xt.getWindow(t);e={left:Xt.getWindowScrollLeft(i),top:Xt.getWindowScrollTop(i)},n=Xt.viewportWidth(i),o=Xt.viewportHeight(i)}else e=Xt.offset(t),n=Xt.outerWidth(t),o=Xt.outerHeight(t);return e.width=n,e.height=o,e}function qt(t,e){var n=e.charAt(0),o=e.charAt(1),i=t.width,r=t.height,a=t.left,u=t.top;return"c"===n?u+=r/2:"b"===n&&(u+=r),"c"===o?a+=i/2:"r"===o&&(a+=i),{left:a,top:u}}function Gt(t,e,n,o,i){var r=qt(e,n[1]),a=qt(t,n[0]),u=[a.left-r.left,a.top-r.top];return{left:Math.round(t.left-u[0]+o[0]-i[0]),top:Math.round(t.top-u[1]+o[1]-i[1])}}function Jt(t,e,n){return t.left<n.left||t.left+e.width>n.right}function Kt(t,e,n){return t.top<n.top||t.top+e.height>n.bottom}function Zt(t,e,n){var o=[];return Xt.each(t,(function(t){o.push(t.replace(e,(function(t){return n[t]})))})),o}function Qt(t,e){return t[e]=-t[e],t}function te(t,e){return(/%$/.test(t)?parseInt(t.substring(0,t.length-1),10)/100*e:parseInt(t,10))||0}function ee(t,e){t[0]=te(t[0],e.width),t[1]=te(t[1],e.height)}function ne(t,e,n,o){var i=n.points,r=n.offset||[0,0],a=n.targetOffset||[0,0],u=n.overflow,s=n.source||t;r=[].concat(r),a=[].concat(a);var l={},c=0,p=_t(s,!(!(u=u||{})||!u.alwaysByViewport)),f=Ut(s);ee(r,f),ee(a,e);var h=Gt(f,e,i,r,a),d=Xt.merge(f,h);if(p&&(u.adjustX||u.adjustY)&&o){if(u.adjustX&&Jt(h,f,p)){var m=Zt(i,/[lr]/gi,{l:"r",r:"l"}),v=Qt(r,0),g=Qt(a,0);(function(t,e,n){return t.left>n.right||t.left+e.width<n.left})(Gt(f,e,m,v,g),f,p)||(c=1,i=m,r=v,a=g)}if(u.adjustY&&Kt(h,f,p)){var w=Zt(i,/[tb]/gi,{t:"b",b:"t"}),y=Qt(r,1),b=Qt(a,1);(function(t,e,n){return t.top>n.bottom||t.top+e.height<n.top})(Gt(f,e,w,y,b),f,p)||(c=1,i=w,r=y,a=b)}c&&(h=Gt(f,e,i,r,a),Xt.mix(d,h));var T=Jt(h,f,p),P=Kt(h,f,p);if(T||P){var x=i;T&&(x=Zt(i,/[lr]/gi,{l:"r",r:"l"})),P&&(x=Zt(i,/[tb]/gi,{t:"b",b:"t"})),i=x,r=n.offset||[0,0],a=n.targetOffset||[0,0]}l.adjustX=u.adjustX&&T,l.adjustY=u.adjustY&&P,(l.adjustX||l.adjustY)&&(d=function(t,e,n,o){var i=Xt.clone(t),r={width:e.width,height:e.height};return o.adjustX&&i.left<n.left&&(i.left=n.left),o.resizeWidth&&i.left>=n.left&&i.left+r.width>n.right&&(r.width-=i.left+r.width-n.right),o.adjustX&&i.left+r.width>n.right&&(i.left=Math.max(n.right-r.width,n.left)),o.adjustY&&i.top<n.top&&(i.top=n.top),o.resizeHeight&&i.top>=n.top&&i.top+r.height>n.bottom&&(r.height-=i.top+r.height-n.bottom),o.adjustY&&i.top+r.height>n.bottom&&(i.top=Math.max(n.bottom-r.height,n.top)),Xt.mix(i,r)}(h,f,p,l))}return d.width!==f.width&&Xt.css(s,"width",Xt.width(s)+d.width-f.width),d.height!==f.height&&Xt.css(s,"height",Xt.height(s)+d.height-f.height),Xt.offset(s,{left:d.left,top:d.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:i,offset:r,targetOffset:a,overflow:l}}function oe(t,e,n){var o=n.target||e,i=Ut(o),r=!function(t,e){var n=_t(t,e),o=Ut(t);return!n||o.left+o.width<=n.left||o.top+o.height<=n.top||o.left>=n.right||o.top>=n.bottom}(o,n.overflow&&n.overflow.alwaysByViewport);return ne(t,i,n,r)}oe.__getOffsetParent=zt,oe.__getVisibleRectForElement=_t;var ie=function(t){if(!t)return!1;if(t.offsetParent)return!0;if(t.getBBox){var e=t.getBBox();if(e.width||e.height)return!0}if(t.getBoundingClientRect){var n=t.getBoundingClientRect();if(n.width||n.height)return!0}return!1};function re(t,e){var n=null,o=null;var i=new Y((function(t){var i=a(t,1)[0].target;if(document.documentElement.contains(i)){var r=i.getBoundingClientRect(),u=r.width,s=r.height,l=Math.floor(u),c=Math.floor(s);n===l&&o===c||Promise.resolve().then((function(){e({width:l,height:c})})),n=l,o=c}}));return t&&i.observe(t),function(){i.disconnect()}}function ae(t){return"function"!=typeof t?null:t()}function ue(t){return"object"===u(t)&&t?t:null}var se=D({name:"Align",props:{align:Object,target:[Object,Function],onAlign:Function,monitorBufferTime:Number,monitorWindowResize:Boolean,disabled:Boolean},emits:["align"],setup:function(t,e){var n=e.expose,o=e.slots,i=S({}),r=S(),u=function(t,e){var n=!1,o=null;function i(){clearTimeout(o)}return[function r(a){if(n&&!0!==a)i(),o=setTimeout((function(){n=!1,r()}),e.value);else{if(!1===t())return;n=!0,i(),o=setTimeout((function(){n=!1}),e.value)}},function(){n=!1,i()}]}((function(){var e,n,o,a,u,s,l,c,p,f,h,d,m,v,g=t.disabled,w=t.target,y=t.align,b=t.onAlign;if(!g&&w&&r.value){var T,P=r.value,x=ae(w),C=ue(w);i.value.element=x,i.value.point=C,i.value.align=y;var O=document.activeElement;return x&&ie(x)?T=oe(P,x,y):C&&(e=P,n=C,o=y,s=Xt.getDocument(e),l=s.defaultView||s.parentWindow,c=Xt.getWindowScrollLeft(l),p=Xt.getWindowScrollTop(l),f=Xt.viewportWidth(l),h=Xt.viewportHeight(l),d={left:a="pageX"in n?n.pageX:c+n.clientX,top:u="pageY"in n?n.pageY:p+n.clientY,width:0,height:0},m=a>=0&&a<=c+f&&u>=0&&u<=p+h,v=[o.points[0],"cc"],T=ne(e,d,at(at({},o),{},{points:v}),m)),function(t,e){t!==document.activeElement&&_(e,t)&&"function"==typeof t.focus&&t.focus()}(O,P),b&&T&&b(P,T),!0}return!1}),E((function(){return t.monitorBufferTime}))),s=a(u,2),l=s[0],c=s[1],p=S({cancel:function(){}}),f=S({cancel:function(){}}),h=function(){var e,n,o=t.target,a=ae(o),u=ue(o);r.value!==f.value.element&&(f.value.cancel(),f.value.element=r.value,f.value.cancel=re(r.value,l)),i.value.element===a&&((e=i.value.point)===(n=u)||e&&n&&("pageX"in n&&"pageY"in n?e.pageX===n.pageX&&e.pageY===n.pageY:"clientX"in n&&"clientY"in n&&e.clientX===n.clientX&&e.clientY===n.clientY))&&z(i.value.align,t.align)||(l(),p.value.element!==a&&(p.value.cancel(),p.value.element=a,p.value.cancel=re(a,l)))};A((function(){V((function(){h()}))})),F((function(){V((function(){h()}))})),k((function(){return t.disabled}),(function(t){t?c():l()}),{immediate:!0,flush:"post"});var d=S(null);return k((function(){return t.monitorWindowResize}),(function(t){t?d.value||(d.value=I(window,"resize",l)):d.value&&(d.value.remove(),d.value=null)}),{flush:"post"}),j((function(){p.value.cancel(),f.value.cancel(),d.value&&d.value.remove(),c()})),n({forceAlign:function(){return l(!0)}}),function(){var t=null==o?void 0:o.default();return t?X(t[0],{ref:r},!0,!0):null}}}),le=D({name:"PopupInner",inheritAttrs:!1,props:J,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup:function(c,p){var f,h,d,m=p.expose,v=p.attrs,g=p.slots,w=S(),b=S(),T=S(),P=(f=R(c,"stretch"),h=S({width:0,height:0}),[E((function(){var t={};if(f.value){var e=h.value,n=e.width,o=e.height;-1!==f.value.indexOf("height")&&o?t.height="".concat(o,"px"):-1!==f.value.indexOf("minHeight")&&o&&(t.minHeight="".concat(o,"px")),-1!==f.value.indexOf("width")&&n?t.width="".concat(n,"px"):-1!==f.value.indexOf("minWidth")&&n&&(t.minWidth="".concat(n,"px"))}return t})),function(t){h.value={width:t.offsetWidth,height:t.offsetHeight}}]),O=a(P,2),D=O[0],V=O[1],F=S(!1);k((function(){return c.visible}),(function(t){clearTimeout(d),t?d=setTimeout((function(){F.value=c.visible})):F.value=!1}),{immediate:!0});var j=function(t,e){var n=S(null),o=S(),a=S(!1);function u(t){a.value||(n.value=t)}function s(){i.cancel(o.value)}return k(t,(function(){u("measure")}),{immediate:!0,flush:"post"}),A((function(){k(n,(function(){"measure"===n.value&&e(),n.value&&(o.value=i((function(){return ot(void 0,void 0,void 0,r.mark((function t(){var e,o;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=it.indexOf(n.value),(o=it[e+1])&&-1!==e&&u(o);case 3:case"end":return t.stop()}}),t)})))})))}),{immediate:!0,flush:"post"})})),H((function(){a.value=!0,s()})),[n,function(t){s(),o.value=i((function(){var e=n.value;switch(n.value){case"align":e="motion";break;case"motion":e="stable"}u(e),null==t||t()}))}]}(F,(function(){c.stretch&&V(c.getRootDomNode())})),N=a(j,2),W=N[0],L=N[1],X=S(),Y=function(){var t;null===(t=w.value)||void 0===t||t.forceAlign()},z=function(t,e){var n,o=c.getClassNameFromAlign(e),i=T.value;T.value!==o&&(T.value=o),"align"===W.value&&(i!==o?Promise.resolve().then((function(){Y()})):L((function(){var t;null===(t=X.value)||void 0===t||t.call(X)})),null===(n=c.onAlign)||void 0===n||n.call(c,t,e))},I=E((function(){var t="object"===u(c.animation)?c.animation:Q(c);return["onAfterEnter","onAfterLeave"].forEach((function(e){var n=t[e];t[e]=function(t){L(),W.value="stable",null==n||n(t)}})),t})),_=function(){return new Promise((function(t){X.value=t}))};k([I,W],(function(){I.value||"motion"!==W.value||L()}),{immediate:!0}),m({forceAlign:Y,getElement:function(){return b.value.$el||b.value}});var U=E((function(){var t;return!(null===(t=c.align)||void 0===t?void 0:t.points)||"align"!==W.value&&"stable"!==W.value}));return function(){var i,r=c.zIndex,a=c.align,u=c.prefixCls,p=c.destroyPopupOnHide,f=c.onMouseenter,h=c.onMouseleave,d=c.onTouchstart,m=void 0===d?function(){}:d,P=c.onMousedown,O=W.value,S=[t(t({},D.value),{zIndex:r,opacity:"motion"!==O&&"stable"!==O&&F.value?0:null,pointerEvents:"stable"===O?null:"none"}),v.style],k=n(null===(i=g.default)||void 0===i?void 0:i.call(g,{visible:c.visible}));k.length>1&&(k=x("div",{class:"".concat(u,"-content")},[k]));var A=o(u,v.class,T.value),H=F.value||!c.visible?s(I.value.name,I.value):{};return x(M,e(e({ref:b},H),{},{onBeforeEnter:_}),{default:function(){return!p||c.visible?C(x(se,{target:c.point?c.point:c.getRootDomNode,key:"popup",ref:w,monitorWindowResize:!0,disabled:U.value,align:a,onAlign:z},{default:function(){return x("div",e(e({class:A,onMouseenter:f,onMouseleave:h,onMousedown:B(P,["capture"])},l({},y?"onTouchstartPassive":"onTouchstart",B(m,["capture"]))),{},{style:S}),[k])}}),[[$,F.value]]):null}})}}}),ce=D({name:"Popup",inheritAttrs:!1,props:Z,setup:function(n,o){var i=o.attrs,r=o.slots,a=o.expose,u=S(!1),s=S(!1),l=S();return k([function(){return n.visible},function(){return n.mobile}],(function(){u.value=n.visible,n.visible&&n.mobile&&(s.value=!0)}),{immediate:!0,flush:"post"}),a({forceAlign:function(){var t;null===(t=l.value)||void 0===t||t.forceAlign()},getElement:function(){var t;return null===(t=l.value)||void 0===t?void 0:t.getElement()}}),function(){var o=t(t(t({},n),i),{visible:u.value}),a=s.value?x(nt,e(e({},o),{},{mobile:n.mobile,ref:l}),{default:r.default}):x(le,e(e({},o),{},{ref:l}),{default:r.default});return x("div",null,[x(tt,o,null),a])}}});function pe(t,e,n){return n?t[0]===e[0]:t[0]===e[0]&&t[1]===e[1]}function fe(e,n,o){var i=e[n]||{};return t(t({},i),o)}var he={methods:{setState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o="function"==typeof e?e(this.$data,this.$props):e;if(this.getDerivedStateFromProps){var i=this.getDerivedStateFromProps(c(this),t(t({},this.$data),o));if(null===i)return;o=t(t({},o),i||{})}t(this.$data,o),this._.isMounted&&this.$forceUpdate(),V((function(){n&&n()}))},__emit:function(){var t=[].slice.call(arguments,0),e=t[0];e="on".concat(e[0].toUpperCase()).concat(e.substring(1));var n=this.$props[e]||this.$attrs[e];if(t.length&&n)if(Array.isArray(n))for(var o=0,i=n.length;o<i;o++)n[o].apply(n,p(t.slice(1)));else n.apply(void 0,p(t.slice(1)))}}};function de(){}var me=["onClick","onMousedown","onTouchstart","onMouseenter","onMouseleave","onFocus","onBlur","onContextmenu"],ve=D({name:"Trigger",mixins:[he],inheritAttrs:!1,props:{action:f.oneOfType([f.string,f.arrayOf(f.string)]).def([]),showAction:f.any.def([]),hideAction:f.any.def([]),getPopupClassNameFromAlign:f.any.def((function(){return""})),onPopupVisibleChange:Function,afterPopupVisibleChange:f.func.def(de),popup:f.any,popupStyle:{type:Object,default:void 0},prefixCls:f.string.def("rc-trigger-popup"),popupClassName:f.string.def(""),popupPlacement:String,builtinPlacements:f.object,popupTransitionName:String,popupAnimation:f.any,mouseEnterDelay:f.number.def(0),mouseLeaveDelay:f.number.def(.1),zIndex:Number,focusDelay:f.number.def(0),blurDelay:f.number.def(.15),getPopupContainer:Function,getDocument:f.func.def((function(t){return t?t.ownerDocument:window.document})),forceRender:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:!1},mask:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},popupAlign:f.object.def((function(){return{}})),popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},maskTransitionName:String,maskAnimation:String,stretch:String,alignPoint:{type:Boolean,default:void 0},autoDestroy:{type:Boolean,default:!1},mobile:Object,getTriggerDOMNode:Function},setup:function(t){var e=E((function(){var e=t.popupPlacement,n=t.popupAlign,o=t.builtinPlacements;return e&&o?fe(o,e,n):n})),n=b(),o=n.setPortal,i=n.popPortal,r=S(null);return{popPortal:i,setPortal:o,vcTriggerContext:N("vcTriggerContext",{}),popupRef:r,setPopupRef:function(t){r.value=t},triggerRef:S(null),align:e,focusTime:null,clickOutsideHandler:null,contextmenuOutsideHandler1:null,contextmenuOutsideHandler2:null,touchOutsideHandler:null,attachId:null,delayTimer:null,hasPopupMouseDown:!1,preClickTime:null,preTouchTime:null,mouseDownTimeout:null,childOriginEvents:{}}},data:function(){var t,e,n=this,o=this.$props;return e=void 0!==this.popupVisible?!!o.popupVisible:!!o.defaultPopupVisible,me.forEach((function(t){n["fire".concat(t)]=function(e){n.fireEvents(t,e)}})),null===(t=this.setPortal)||void 0===t||t.call(this,x(T,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},{default:this.getComponent})),{prevPopupVisible:e,sPopupVisible:e,point:null}},watch:{popupVisible:function(t){void 0!==t&&(this.prevPopupVisible=this.sPopupVisible,this.sPopupVisible=t)}},created:function(){W("vcTriggerContext",{onPopupMouseDown:this.onPopupMouseDown}),P(this)},deactivated:function(){this.setPopupVisible(!1)},mounted:function(){var t=this;this.$nextTick((function(){t.updatedCal()}))},updated:function(){var t=this;this.$nextTick((function(){t.updatedCal()}))},beforeUnmount:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),i.cancel(this.attachId)},methods:{updatedCal:function(){var t,e=this.$props;this.$data.sPopupVisible?(this.clickOutsideHandler||!this.isClickToHide()&&!this.isContextmenuToShow()||(t=e.getDocument(this.getRootDomNode()),this.clickOutsideHandler=I(t,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(t=t||e.getDocument(this.getRootDomNode()),this.touchOutsideHandler=I(t,"touchstart",this.onDocumentClick,!!y&&{passive:!1})),!this.contextmenuOutsideHandler1&&this.isContextmenuToShow()&&(t=t||e.getDocument(this.getRootDomNode()),this.contextmenuOutsideHandler1=I(t,"scroll",this.onContextmenuClose)),!this.contextmenuOutsideHandler2&&this.isContextmenuToShow()&&(this.contextmenuOutsideHandler2=I(window,"blur",this.onContextmenuClose))):this.clearOutsideHandler()},onMouseenter:function(t){var e=this.$props.mouseEnterDelay;this.fireEvents("onMouseenter",t),this.delaySetPopupVisible(!0,e,e?null:t)},onMouseMove:function(t){this.fireEvents("onMousemove",t),this.setPoint(t)},onMouseleave:function(t){this.fireEvents("onMouseleave",t),this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onPopupMouseenter:function(){this.clearDelayTimer()},onPopupMouseleave:function(t){var e;t&&t.relatedTarget&&!t.relatedTarget.setTimeout&&_(null===(e=this.popupRef)||void 0===e?void 0:e.getElement(),t.relatedTarget)||this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onFocus:function(t){this.fireEvents("onFocus",t),this.clearDelayTimer(),this.isFocusToShow()&&(this.focusTime=Date.now(),this.delaySetPopupVisible(!0,this.$props.focusDelay))},onMousedown:function(t){this.fireEvents("onMousedown",t),this.preClickTime=Date.now()},onTouchstart:function(t){this.fireEvents("onTouchstart",t),this.preTouchTime=Date.now()},onBlur:function(t){_(t.target,t.relatedTarget||document.activeElement)||(this.fireEvents("onBlur",t),this.clearDelayTimer(),this.isBlurToHide()&&this.delaySetPopupVisible(!1,this.$props.blurDelay))},onContextmenu:function(t){t.preventDefault(),this.fireEvents("onContextmenu",t),this.setPopupVisible(!0,t)},onContextmenuClose:function(){this.isContextmenuToShow()&&this.close()},onClick:function(t){if(this.fireEvents("onClick",t),this.focusTime){var e;if(this.preClickTime&&this.preTouchTime?e=Math.min(this.preClickTime,this.preTouchTime):this.preClickTime?e=this.preClickTime:this.preTouchTime&&(e=this.preTouchTime),Math.abs(e-this.focusTime)<20)return;this.focusTime=0}this.preClickTime=0,this.preTouchTime=0,this.isClickToShow()&&(this.isClickToHide()||this.isBlurToHide())&&t&&t.preventDefault&&t.preventDefault(),t&&t.domEvent&&t.domEvent.preventDefault();var n=!this.$data.sPopupVisible;(this.isClickToHide()&&!n||n&&this.isClickToShow())&&this.setPopupVisible(!this.$data.sPopupVisible,t)},onPopupMouseDown:function(){var t=this,e=this.vcTriggerContext,n=void 0===e?{}:e;this.hasPopupMouseDown=!0,clearTimeout(this.mouseDownTimeout),this.mouseDownTimeout=setTimeout((function(){t.hasPopupMouseDown=!1}),0),n.onPopupMouseDown&&n.onPopupMouseDown.apply(n,arguments)},onDocumentClick:function(t){if(!this.$props.mask||this.$props.maskClosable){var e=t.target,n=this.getRootDomNode(),o=this.getPopupDomNode();_(n,e)&&!this.isContextMenuOnly()||_(o,e)||this.hasPopupMouseDown||this.delaySetPopupVisible(!1,.1)}},getPopupDomNode:function(){var t;return(null===(t=this.popupRef)||void 0===t?void 0:t.getElement())||null},getRootDomNode:function(){var t=this.$props.getTriggerDOMNode;if(t){var e=h(this.triggerRef);return h(t(e))}try{var n=h(this.triggerRef);if(n)return n}catch(o){}return h(this)},handleGetPopupClassFromAlign:function(t){var e=[],n=this.$props,o=n.popupPlacement,i=n.builtinPlacements,r=n.prefixCls,a=n.alignPoint,u=n.getPopupClassNameFromAlign;return o&&i&&e.push(function(t,e,n,o){for(var i=n.points,r=Object.keys(t),a=0;a<r.length;a+=1){var u=r[a];if(pe(t[u].points,i,o))return"".concat(e,"-placement-").concat(u)}return""}(i,r,t,a)),u&&e.push(u(t)),e.join(" ")},getPopupAlign:function(){var t=this.$props,e=t.popupPlacement,n=t.popupAlign,o=t.builtinPlacements;return e&&o?fe(o,e,n):n},getComponent:function(){var e=this,n={};this.isMouseEnterToShow()&&(n.onMouseenter=this.onPopupMouseenter),this.isMouseLeaveToHide()&&(n.onMouseleave=this.onPopupMouseleave),n.onMousedown=this.onPopupMouseDown,n[y?"onTouchstartPassive":"onTouchstart"]=this.onPopupMouseDown;var o=this.handleGetPopupClassFromAlign,i=this.getRootDomNode,r=this.getContainer,a=this.$attrs,u=this.$props,s=u.prefixCls,l=u.destroyPopupOnHide,c=u.popupClassName,p=u.popupAnimation,f=u.popupTransitionName,h=u.popupStyle,m=u.mask,v=u.maskAnimation,g=u.maskTransitionName,w=u.zIndex,b=u.stretch,T=u.alignPoint,P=u.mobile,C=u.forceRender,O=this.$data,M=O.sPopupVisible,D=O.point,S=t(t({prefixCls:s,destroyPopupOnHide:l,visible:M,point:T?D:null,align:this.align,animation:p,getClassNameFromAlign:o,stretch:b,getRootDomNode:i,mask:m,zIndex:w,transitionName:f,maskAnimation:v,maskTransitionName:g,getContainer:r,class:c,style:h,onAlign:a.onPopupAlign||de},n),{ref:this.setPopupRef,mobile:P,forceRender:C});return x(ce,S,{default:this.$slots.popup||function(){return d(e,"popup")}})},attachParent:function(t){var e=this;i.cancel(this.attachId);var n,o=this.$props,r=o.getPopupContainer,a=o.getDocument,u=this.getRootDomNode();r?(u||0===r.length)&&(n=r(u)):n=a(this.getRootDomNode()).body,n?n.appendChild(t):this.attachId=i((function(){e.attachParent(t)}))},getContainer:function(){var t=(0,this.$props.getDocument)(this.getRootDomNode()).createElement("div");return t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",this.attachParent(t),t},setPopupVisible:function(t,e){var n=this.alignPoint,o=this.sPopupVisible,i=this.onPopupVisibleChange;this.clearDelayTimer(),o!==t&&(m(this,"popupVisible")||this.setState({sPopupVisible:t,prevPopupVisible:o}),i&&i(t)),n&&e&&t&&this.setPoint(e)},setPoint:function(t){this.$props.alignPoint&&t&&this.setState({point:{pageX:t.pageX,pageY:t.pageY}})},handlePortalUpdate:function(){this.prevPopupVisible!==this.sPopupVisible&&this.afterPopupVisibleChange(this.sPopupVisible)},delaySetPopupVisible:function(t,e,n){var o=this,i=1e3*e;if(this.clearDelayTimer(),i){var r=n?{pageX:n.pageX,pageY:n.pageY}:null;this.delayTimer=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Date.now();function o(){Date.now()-n>=e?t.call():i.id=q(o)}var i={id:q(o)};return i}((function(){o.setPopupVisible(t,r),o.clearDelayTimer()}),i)}else this.setPopupVisible(t,n)},clearDelayTimer:function(){this.delayTimer&&(G(this.delayTimer),this.delayTimer=null)},clearOutsideHandler:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextmenuOutsideHandler1&&(this.contextmenuOutsideHandler1.remove(),this.contextmenuOutsideHandler1=null),this.contextmenuOutsideHandler2&&(this.contextmenuOutsideHandler2.remove(),this.contextmenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},createTwoChains:function(t){var e=function(){},n=v(this);return this.childOriginEvents[t]&&n[t]?this["fire".concat(t)]:e=this.childOriginEvents[t]||n[t]||e},isClickToShow:function(){var t=this.$props,e=t.action,n=t.showAction;return-1!==e.indexOf("click")||-1!==n.indexOf("click")},isContextMenuOnly:function(){var t=this.$props.action;return"contextmenu"===t||1===t.length&&"contextmenu"===t[0]},isContextmenuToShow:function(){var t=this.$props,e=t.action,n=t.showAction;return-1!==e.indexOf("contextmenu")||-1!==n.indexOf("contextmenu")},isClickToHide:function(){var t=this.$props,e=t.action,n=t.hideAction;return-1!==e.indexOf("click")||-1!==n.indexOf("click")},isMouseEnterToShow:function(){var t=this.$props,e=t.action,n=t.showAction;return-1!==e.indexOf("hover")||-1!==n.indexOf("mouseenter")},isMouseLeaveToHide:function(){var t=this.$props,e=t.action,n=t.hideAction;return-1!==e.indexOf("hover")||-1!==n.indexOf("mouseleave")},isFocusToShow:function(){var t=this.$props,e=t.action,n=t.showAction;return-1!==e.indexOf("focus")||-1!==n.indexOf("focus")},isBlurToHide:function(){var t=this.$props,e=t.action,n=t.hideAction;return-1!==e.indexOf("focus")||-1!==n.indexOf("blur")},forcePopupAlign:function(){var t;this.$data.sPopupVisible&&(null===(t=this.popupRef)||void 0===t||t.forceAlign())},fireEvents:function(t,e){this.childOriginEvents[t]&&this.childOriginEvents[t](e);var n=this.$props[t]||this.$attrs[t];n&&n(e)},close:function(){this.setPopupVisible(!1)}},render:function(){var e=this,n=this.$attrs,i=g(w(this)),r=this.$props.alignPoint,a=i[0];this.childOriginEvents=v(a);var u={key:"trigger"};this.isContextmenuToShow()?u.onContextmenu=this.onContextmenu:u.onContextmenu=this.createTwoChains("onContextmenu"),this.isClickToHide()||this.isClickToShow()?(u.onClick=this.onClick,u.onMousedown=this.onMousedown,u[y?"onTouchstartPassive":"onTouchstart"]=this.onTouchstart):(u.onClick=this.createTwoChains("onClick"),u.onMousedown=this.createTwoChains("onMousedown"),u[y?"onTouchstartPassive":"onTouchstart"]=this.createTwoChains("onTouchstart")),this.isMouseEnterToShow()?(u.onMouseenter=this.onMouseenter,r&&(u.onMousemove=this.onMouseMove)):u.onMouseenter=this.createTwoChains("onMouseenter"),this.isMouseLeaveToHide()?u.onMouseleave=this.onMouseleave:u.onMouseleave=this.createTwoChains("onMouseleave"),this.isFocusToShow()||this.isBlurToHide()?(u.onFocus=this.onFocus,u.onBlur=this.onBlur):(u.onFocus=this.createTwoChains("onFocus"),u.onBlur=function(t){!t||t.relatedTarget&&_(t.target,t.relatedTarget)||e.createTwoChains("onBlur")(t)});var s=o(a&&a.props&&a.props.class,n.class);s&&(u.class=s);var l=X(a,t(t({},u),{ref:"triggerRef"}),!0,!0);if(this.popPortal)return l;var c=x(T,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},{default:this.getComponent});return x(L,null,[c,l])}});export{he as B,ve as T,I as a,_ as c,ie as i};
