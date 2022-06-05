import{u as n,H as t,w as e,P as a,L as i,T as o,i as r,h as l,_ as u,d as c,b as s,g as d,m as f}from"./index-b2653a7c.js";import{d as v,e as m,q as p,g,l as y,a as b,r as E,c as h,b as T,k as S,u as k,L as A}from"./index-d2ff9663.js";var x={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},w={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},L=[],B=[];function C(n,t,e){n.addEventListener(t,e,!1)}function M(n,t,e){n.removeEventListener(t,e,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var n=document.createElement("div").style;function t(t,e){for(var a in t)if(t.hasOwnProperty(a)){var i=t[a];for(var o in i)if(o in n){e.push(i[o]);break}}}"AnimationEvent"in window||(delete x.animationstart.animation,delete w.animationend.animation),"TransitionEvent"in window||(delete x.transitionstart.transition,delete w.transitionend.transition),t(x,L),t(w,B)}();var N,z={startEvents:L,addStartEventListener:function(n,t){0!==L.length?L.forEach((function(e){C(n,e,t)})):setTimeout(t,0)},removeStartEventListener:function(n,t){0!==L.length&&L.forEach((function(e){M(n,e,t)}))},endEvents:B,addEndEventListener:function(n,t){0!==B.length?B.forEach((function(e){C(n,e,t)})):setTimeout(t,0)},removeEndEventListener:function(n,t){0!==B.length&&B.forEach((function(e){M(n,e,t)}))}};function O(n){return!n||null===n.offsetParent}var I=v({name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(a,i){var o=i.slots,r=i.expose,l=y(),u=n("",a),c=u.csp,s=u.prefixCls;r({csp:c});var d=null,f=null,v=null,b=!1,E=null,h=!1,T=function(n){if(!h){var e=t(l);n&&n.target===e&&(b||A(e))}},S=function(n){n&&"fadeEffect"===n.animationName&&A(n.target)},k=function(){var n=a.insertExtraNode;return"".concat(s.value,n?"-click-animating":"-click-animating-without-extra-node")},A=function(n){if(n&&n!==E&&n instanceof Element){var t=a.insertExtraNode,e=k();n.setAttribute(e,"false"),N&&(N.innerHTML=""),t&&E&&n.contains(E)&&n.removeChild(E),z.removeStartEventListener(n,T),z.removeEndEventListener(n,S)}},x=function(n){if(n&&n.getAttribute&&!n.getAttribute("disabled")&&!(n.className.indexOf("disabled")>=0)){var t=function(t){if("INPUT"!==t.target.tagName&&!O(t.target)){A(n);var i=getComputedStyle(n).getPropertyValue("border-top-color")||getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color");f=setTimeout((function(){return function(n,t){var e,i=a.insertExtraNode;if(!(a.disabled||!n||O(n)||n.className.indexOf("-leave")>=0)){(E=document.createElement("div")).className="".concat(s.value,"-click-animating-node");var o,r=k();n.removeAttribute(r),n.setAttribute(r,"true"),N=N||document.createElement("style"),!t||"#ffffff"===t||"rgb(255, 255, 255)"===t||(o=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/))&&o[1]&&o[2]&&o[3]&&o[1]===o[2]&&o[2]===o[3]||/rgba\(\d*, \d*, \d*, 0\)/.test(t)||"transparent"===t||((null===(e=c.value)||void 0===e?void 0:e.nonce)&&(N.nonce=c.value.nonce),E.style.borderColor=t,N.innerHTML="\n        [".concat(s.value,"-click-animating-without-extra-node='true']::after, .").concat(s.value,"-click-animating-node {\n          --antd-wave-shadow-color: ").concat(t,";\n        }"),document.body.contains(N)||document.body.appendChild(N)),i&&n.appendChild(E),z.addStartEventListener(n,T),z.addEndEventListener(n,S)}}(n,i)}),0),e.cancel(v),b=!0,v=e((function(){b=!1}),10)}};return n.addEventListener("click",t,!0),{cancel:function(){n.removeEventListener("click",t,!0)}}}};return m((function(){p((function(){var n=t(l);1===n.nodeType&&(d=x(n))}))})),g((function(){d&&d.cancel(),clearTimeout(f),h=!0})),function(){var n;return null===(n=o.default)||void 0===n?void 0:n.call(o)[0]}}}),P=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:a.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}},j=function(n){n&&(n.style.width="0px",n.style.opacity="0",n.style.transform="scale(0)")},W=function(n){p((function(){n&&(n.style.width="".concat(n.scrollWidth,"px"),n.style.opacity="1",n.style.transform="scale(1)")}))},_=function(n){n&&n.style&&(n.style.width=null,n.style.opacity=null,n.style.transform=null)},H=v({name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(n){return function(){var t=n.existIcon,e=n.prefixCls,a=n.loading;if(t)return b("span",{class:"".concat(e,"-loading-icon")},[b(i,null,null)]);var r=!!a;return b(o,{name:"".concat(e,"-loading-icon-motion"),onBeforeEnter:j,onEnter:W,onAfterEnter:_,onBeforeLeave:W,onLeave:function(n){setTimeout((function(){j(n)}))},onAfterLeave:_},{default:function(){return[r?b("span",{class:"".concat(e,"-loading-icon")},[b(i,null,null)]):null]}})}}}),V=/^[\u4e00-\u9fa5]{2}$/,F=V.test.bind(V);function U(n){return"text"===n||"link"===n}var q=v({name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:r(P(),{type:"default"}),slots:["icon"],setup:function(t,e){var a=e.slots,i=e.attrs,o=e.emit,r=n("btn",t),v=r.prefixCls,p=r.autoInsertSpaceInButton,y=r.direction,x=r.size,w=E(null),L=E(void 0),B=!1,C=E(!1),M=E(!1),N=h((function(){return!1!==p.value})),z=h((function(){return"object"===d(t.loading)&&t.loading.delay?t.loading.delay||!0:!!t.loading}));T(z,(function(n){clearTimeout(L.value),"number"==typeof z.value?L.value=setTimeout((function(){C.value=n}),z.value):C.value=n}),{immediate:!0});var O=h((function(){var n,e=t.type,a=t.shape,i=void 0===a?"default":a,o=t.ghost,r=t.block,l=t.danger,u=v.value,s=x.value,d=s&&{large:"lg",small:"sm",middle:void 0}[s]||"";return c(n={},"".concat(u),!0),c(n,"".concat(u,"-").concat(e),e),c(n,"".concat(u,"-").concat(i),"default"!==i&&i),c(n,"".concat(u,"-").concat(d),d),c(n,"".concat(u,"-loading"),C.value),c(n,"".concat(u,"-background-ghost"),o&&!U(e)),c(n,"".concat(u,"-two-chinese-chars"),M.value&&N.value),c(n,"".concat(u,"-block"),r),c(n,"".concat(u,"-dangerous"),!!l),c(n,"".concat(u,"-rtl"),"rtl"===y.value),n})),P=function(){var n=w.value;if(n&&!1!==p.value){var t=n.textContent;B&&F(t)?M.value||(M.value=!0):M.value&&(M.value=!1)}},j=function(n){C.value||t.disabled?n.preventDefault():o("click",n)};return S((function(){f(!(t.ghost&&U(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")})),m(P),k(P),g((function(){L.value&&clearTimeout(L.value)})),function(){var n,e,o=t.icon,r=void 0===o?null===(n=a.icon)||void 0===n?void 0:n.call(a):o,d=l(null===(e=a.default)||void 0===e?void 0:e.call(a));B=1===d.length&&!r&&!U(t.type);var f=t.type,m=t.htmlType,p=t.disabled,g=t.href,y=t.title,E=t.target,h=t.onMousedown,T=C.value?"loading":r,S=u(u({},i),{title:y,disabled:p,class:[O.value,i.class,c({},"".concat(v.value,"-icon-only"),0===d.length&&!!T)],onClick:j,onMousedown:h});p||delete S.disabled;var k=r&&!C.value?r:b(H,{existIcon:!!r,prefixCls:v.value,loading:!!C.value},null),x=d.map((function(n){return function(n,t){var e=t?" ":"";if(n.type===A){var a=n.children.trim();return F(a)&&(a=a.split("").join(e)),b("span",null,[a])}return n}(n,B&&N.value)}));if(void 0!==g)return b("a",s(s({},S),{},{href:g,target:E,ref:w}),[k,x]);var L=b("button",s(s({},S),{},{ref:w,type:m}),[k,x]);return U(f)?L:b(I,{ref:"wave",disabled:!!C.value},{default:function(){return[L]}})}}});export{q as B};
