import{P as e,a as t,c as a,e as n,_ as o,A as i,b as l,y as r,S as u,n as c,v as s,p as v,d,o as f,C as p,t as b,r as m,L as y}from"./default-c479b927.js";import{d as g,r as h,b as x,a as C,c as k,F as w,o as P,e as T,f as S,t as j,s as O,K as B,Y as E,Z as A,S as I,_ as N,h as L,i as K,j as M,l as _,$ as D,X as F,a0 as R,m as W,a1 as z,V,k as q,a2 as G}from"./index-06ef5c65.js";import{a as H}from"./article-60dea3a1.js";import{w as Y,i as U}from"./raf-0c9fbdc4.js";import{_ as X}from"./ArticlePage-36ff292f.js";import{K as $}from"./KeyCode-a2a1cb88.js";import{E as Z,M as J,_ as Q}from"./index-fb040d5b.js";import{T as ee}from"./Trigger-cd9d70ba.js";import{c as te}from"./vnode-66f16354.js";import{u as ae,i as ne,a as oe}from"./index-89997022.js";import{R as ie}from"./index-ad674ecd.js";import{c as le,t as re,a as ue,b as ce,h as se,f as ve}from"./_flatRest-cb44be72.js";import{b as de,d as fe}from"./isEqual-f55676e6.js";import{o as pe}from"./omit-32db796a.js";import"./axios-fd4afd93.js";import"./index-29fa48e0.js";import"./user-c350b064.js";import"./styleChecker-495fb3a1.js";import"./isObjectLike-9a344489.js";import"./toNumber-8723b733.js";import"./index-ca43fc06.js";import"./FormItemContext-35715449.js";import"./firstNotUndefined-063115bc.js";import"./collapseMotion-7342d956.js";import"./Overflow-bc8f182a.js";import"./index-fa481373.js";import"./Portal-959b7207.js";import"./SearchOutlined-084a80b4.js";import"./toString-38b11d07.js";var be={adjustX:1,adjustY:1},me=[0,0],ye={topLeft:{points:["bl","tl"],overflow:be,offset:[0,-4],targetOffset:me},topCenter:{points:["bc","tc"],overflow:be,offset:[0,-4],targetOffset:me},topRight:{points:["br","tr"],overflow:be,offset:[0,-4],targetOffset:me},bottomLeft:{points:["tl","bl"],overflow:be,offset:[0,4],targetOffset:me},bottomCenter:{points:["tc","bc"],overflow:be,offset:[0,4],targetOffset:me},bottomRight:{points:["tr","br"],overflow:be,offset:[0,4],targetOffset:me}},ge=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a},he=g({props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:e.string.def("rc-dropdown"),transitionName:String,overlayClassName:e.string.def(""),openClassName:String,animation:e.any,align:e.object,overlayStyle:{type:Object,default:void 0},placement:e.string.def("bottomLeft"),overlay:e.any,trigger:e.oneOfType([e.string,e.arrayOf(e.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:e.array,hideAction:e.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:e.number.def(.15),mouseLeaveDelay:e.number.def(.1)},emits:["visibleChange","overlayClick"],slots:["overlay"],setup:function(e,o){var i=o.slots,l=o.emit,r=o.expose,u=h(!!e.visible);x((function(){return e.visible}),(function(e){void 0!==e&&(u.value=e)}));var c=h();r({triggerRef:c});var s=function(t){void 0===e.visible&&(u.value=!1),l("overlayClick",t)},v=function(t){void 0===e.visible&&(u.value=t),l("visibleChange",t)},d=function(){var t,a=null===(t=i.overlay)||void 0===t?void 0:t.call(i),n={prefixCls:"".concat(e.prefixCls,"-menu"),onClick:s,getPopupContainer:function(){return c.value.getPopupDomNode()}};return k(w,null,[e.arrow&&k("div",{class:"".concat(e.prefixCls,"-arrow")},null),te(a,n,!1)])},f=C((function(){var t=e.minOverlayWidthMatchTrigger;return void 0===t?!e.alignPoint:t})),p=function(){var t,a=null===(t=i.default)||void 0===t?void 0:t.call(i);return u.value&&a?te(a[0],{class:e.openClassName||"".concat(e.prefixCls,"-open")},!1):a},b=C((function(){return e.hideAction||-1===e.trigger.indexOf("contextmenu")?e.hideAction:["click"]}));return function(){var o=e.prefixCls,i=e.arrow,l=e.showAction,r=e.overlayStyle,s=e.trigger,m=e.placement,y=e.align,g=e.getPopupContainer,h=e.transitionName,x=e.animation,C=e.overlayClassName,w=ge(e,["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"]);return k(ee,t(t({},w),{},{prefixCls:o,ref:c,popupClassName:a(C,n({},"".concat(o,"-show-arrow"),i)),popupStyle:r,builtinPlacements:ye,action:s,showAction:l,hideAction:b.value||[],popupPlacement:m,popupAlign:y,popupTransitionName:h,popupAnimation:x,popupVisible:u.value,stretch:f.value?"minWidth":"",onPopupVisibleChange:v,getPopupContainer:g}),{popup:d,default:p})}}});function xe(e){var t,a,n,o=h([]),i=h("function"==typeof e?e():e),l=(t=function(){var e=i.value;o.value.forEach((function(t){e=t(e)})),o.value=[],i.value=e},a=h(),n=h(!1),P((function(){n.value=!0,Y.cancel(a.value)})),function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];n.value||(Y.cancel(a.value),a.value=Y((function(){t.apply(void 0,o)})))});return[i,function(e){o.value.push(e),l()}]}var Ce=g({name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var o=t.expose,i=t.attrs,l=h();function r(t){var a;(null===(a=e.tab)||void 0===a?void 0:a.disabled)||e.onClick(t)}o({domRef:l});var u=C((function(){var t;return e.editable&&!1!==e.closable&&!(null===(t=e.tab)||void 0===t?void 0:t.disabled)}));return function(){var t,o,c=e.prefixCls,s=e.id,v=e.active,d=e.tab,f=d.key,p=d.tab,b=d.disabled,m=d.closeIcon,y=e.renderWrapper,g=e.removeAriaLabel,h=e.editable,x=e.onFocus,C="".concat(c,"-tab"),w=k("div",{key:f,ref:l,class:a(C,(t={},n(t,"".concat(C,"-with-remove"),u.value),n(t,"".concat(C,"-active"),v),n(t,"".concat(C,"-disabled"),b),t)),style:i.style,onClick:r},[k("div",{role:"tab","aria-selected":v,id:s&&"".concat(s,"-tab-").concat(f),class:"".concat(C,"-btn"),"aria-controls":s&&"".concat(s,"-panel-").concat(f),"aria-disabled":b,tabindex:b?null:0,onClick:function(e){e.stopPropagation(),r(e)},onKeydown:function(e){[$.SPACE,$.ENTER].includes(e.which)&&(e.preventDefault(),r(e))},onFocus:x},["function"==typeof p?p():p]),u.value&&k("button",{type:"button","aria-label":g||"remove",tabindex:0,class:"".concat(C,"-remove"),onClick:function(t){t.stopPropagation(),function(t){var a;t.preventDefault(),t.stopPropagation(),e.editable.onEdit("remove",{key:null===(a=e.tab)||void 0===a?void 0:a.key,event:t})}(t)}},[(null==m?void 0:m())||(null===(o=h.removeIcon)||void 0===o?void 0:o.call(h))||"×"])]);return y?y(w):w}}}),ke={width:0,height:0,left:0,top:0};var we=g({name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var a=t.expose,n=t.attrs,o=h();return a({domRef:o}),function(){var t=e.prefixCls,a=e.editable,i=e.locale;return a&&!1!==a.showAdd?k("button",{ref:o,type:"button",class:"".concat(t,"-nav-add"),style:n.style,"aria-label":(null==i?void 0:i.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},[a.addIcon?a.addIcon():"+"]):null}}}),Pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"};function Te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){Se(e,t,a[t])}))}return e}function Se(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var je=function(e,t){var a=Te({},e,t.attrs);return k(i,Te({},a,{icon:Pe}),null)};je.displayName="ClockCircleOutlined",je.inheritAttrs=!1;var Oe=je,Be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){Ae(e,t,a[t])}))}return e}function Ae(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Ie=function(e,t){var a=Ee({},e,t.attrs);return k(i,Ee({},a,{icon:Be}),null)};Ie.displayName="PlusOutlined",Ie.inheritAttrs=!1;var Ne=Ie,Le=g({name:"OperationNode",inheritAttrs:!1,props:{prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:e.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}},emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var o=t.attrs,i=t.slots,r=ae(!1),u=l(r,2),c=u[0],s=u[1],v=ae(null),d=l(v,2),f=d[0],p=d[1],b=function(t){for(var a=e.tabs.filter((function(e){return!e.disabled})),n=a.findIndex((function(e){return e.key===f.value}))||0,o=a.length,i=0;i<o;i+=1){var l=a[n=(n+t+o)%o];if(!l.disabled)return void p(l.key)}},m=function(t){var a=t.which;if(c.value)switch(a){case $.UP:b(-1),t.preventDefault();break;case $.DOWN:b(1),t.preventDefault();break;case $.ESC:s(!1);break;case $.SPACE:case $.ENTER:null!==f.value&&e.onTabClick(f.value,t)}else[$.DOWN,$.SPACE,$.ENTER].includes(a)&&(s(!0),t.preventDefault())},y=C((function(){return"".concat(e.id,"-more-popup")})),g=C((function(){return null!==f.value?"".concat(y.value,"-").concat(f.value):null}));return S((function(){x(f,(function(){var e=document.getElementById(g.value);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),{flush:"post",immediate:!0})})),x(c,(function(){c.value||p(null)})),function(){var t,l=e.prefixCls,r=e.id,u=e.tabs,v=e.locale,d=e.mobile,p=e.moreIcon,b=void 0===p?(null===(t=i.moreIcon)||void 0===t?void 0:t.call(i))||k(Z,null,null):p,h=e.moreTransitionName,x=e.editable,C=e.tabBarGutter,w=e.rtl,P=e.onTabClick,T="".concat(l,"-dropdown"),S=null==v?void 0:v.dropdownAriaLabel,j=n({},w?"marginRight":"marginLeft",C);u.length||(j.visibility="hidden",j.order=1);var O=a(n({},"".concat(T,"-rtl"),w)),B=d?null:k(he,{prefixCls:T,trigger:["hover"],visible:c.value,transitionName:h,onVisibleChange:s,overlayClassName:O,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return k(J,{onClick:function(e){var t=e.key,a=e.domEvent;P(t,a),s(!1)},id:y.value,tabindex:-1,role:"listbox","aria-activedescendant":g.value,selectedKeys:[f.value],"aria-label":void 0!==S?S:"expanded dropdown"},{default:function(){return[u.map((function(t){var a,n,o=x&&!1!==t.closable&&!t.disabled;return k(Q,{key:t.key,id:"".concat(y.value,"-").concat(t.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(t.key),disabled:t.disabled},{default:function(){return[k("span",null,["function"==typeof t.tab?t.tab():t.tab]),o&&k("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(T,"-menu-item-remove"),onClick:function(a){var n,o;a.stopPropagation(),n=a,o=t.key,n.preventDefault(),n.stopPropagation(),e.editable.onEdit("remove",{key:o,event:n})}},[(null===(a=t.closeIcon)||void 0===a?void 0:a.call(t))||(null===(n=x.removeIcon)||void 0===n?void 0:n.call(x))||"×"])]}})}))]}})},default:function(){return k("button",{type:"button",class:"".concat(l,"-nav-more"),style:j,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":y.value,id:"".concat(r,"-more"),"aria-expanded":c.value,onKeydown:m},[b])}});return k("div",{class:a("".concat(l,"-nav-operations"),o.class),style:o.style},[B,k(we,{prefixCls:l,locale:v,editable:x},null)])}}}),Ke=Symbol("tabsContextKey"),Me=function(e){j(Ke,e)},_e=function(){return O(Ke,{tabs:h([]),prefixCls:h()})};g({name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var a=t.slots;return Me(B(e)),function(){var e;return null===(e=a.default)||void 0===e?void 0:e.call(a)}}});var De=Math.pow(.995,20);function Fe(e,t){var a=h(e);return[a,function(e){var n="function"==typeof e?e(a.value):e;n!==a.value&&t(n,a.value),a.value=n}]}var Re=function(){var e=h(new Map);return E((function(){e.value=new Map})),[function(t){return function(a){e.value.set(t,a)}},e]};function We(e,t,a,n){if(!de(e))return e;for(var o=-1,i=(t=le(t,e)).length,l=i-1,r=e;null!=r&&++o<i;){var u=re(t[o]),c=a;if("__proto__"===u||"constructor"===u||"prototype"===u)return e;if(o!=l){var s=r[u];void 0===(c=n?n(s,u,r):void 0)&&(c=de(s)?s:fe(t[o+1])?[]:{})}ue(r,u,c),r=r[u]}return e}function ze(e,t){return function(e,t,a){for(var n=-1,o=t.length,i={};++n<o;){var l=t[n],r=ce(e,l);a(r,l)&&We(i,le(l,e),r)}return i}(e,t,(function(t,a){return se(e,a)}))}var Ve=ve((function(e,t){return null==e?{}:ze(e,t)})),qe={width:0,height:0,left:0,top:0,right:0},Ge=g({name:"TabNavList",inheritAttrs:!1,props:{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:e.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}},slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,i){var c=i.attrs,s=i.slots,v=_e(),d=v.tabs,f=v.prefixCls,p=h(),b=h(),m=h(),y=h(),g=Re(),w=l(g,2),j=w[0],O=w[1],B=C((function(){return"top"===e.tabPosition||"bottom"===e.tabPosition})),E=Fe(0,(function(t,a){B.value&&e.onTabScroll&&e.onTabScroll({direction:t>a?"left":"right"})})),A=l(E,2),I=A[0],N=A[1],L=Fe(0,(function(t,a){!B.value&&e.onTabScroll&&e.onTabScroll({direction:t>a?"top":"bottom"})})),K=l(L,2),M=K[0],_=K[1],D=ae(0),F=l(D,2),R=F[0],W=F[1],z=ae(0),V=l(z,2),q=V[0],G=V[1],H=ae(null),U=l(H,2),X=U[0],$=U[1],Z=ae(null),J=l(Z,2),Q=J[0],ee=J[1],te=ae(0),ne=l(te,2),oe=ne[0],le=ne[1],re=ae(0),ue=l(re,2),ce=ue[0],se=ue[1],ve=xe(new Map),de=l(ve,2),fe=de[0],pe=de[1],be=function(e,t){var a=h(new Map);return T((function(){for(var n,i,l=new Map,r=e.value,u=t.value.get(null===(n=r[0])||void 0===n?void 0:n.key)||ke,c=u.left+u.width,s=0;s<r.length;s+=1){var v=r[s].key,d=t.value.get(v);d||(d=t.value.get(null===(i=r[s-1])||void 0===i?void 0:i.key)||ke);var f=l.get(v)||o({},d);f.right=c-f.left-f.width,l.set(v,f)}a.value=new Map(l)})),a}(d,fe),me=C((function(){return"".concat(f.value,"-nav-operations-hidden")})),ye=h(0),ge=h(0);T((function(){B.value?e.rtl?(ye.value=0,ge.value=Math.max(0,R.value-X.value)):(ye.value=Math.min(0,X.value-R.value),ge.value=0):(ye.value=Math.min(0,Q.value-q.value),ge.value=0)}));var he=function(e){return e<ye.value?ye.value:e>ge.value?ge.value:e},Pe=h(),Te=ae(),Se=l(Te,2),je=Se[0],Oe=Se[1],Be=function(){Oe(Date.now())},Ee=function(){clearTimeout(Pe.value)},Ae=function(e,t){e((function(e){return he(e+t)}))};!function(e,t){var a=ae(),n=l(a,2),o=n[0],i=n[1],r=ae(0),u=l(r,2),c=u[0],s=u[1],v=ae(0),d=l(v,2),f=d[0],p=d[1],b=ae(),m=l(b,2),y=m[0],g=m[1],x=h(),C=h(),k=h({onTouchStart:function(e){var t=e.touches[0],a=t.screenX,n=t.screenY;i({x:a,y:n}),clearInterval(x.value)},onTouchMove:function(e){if(o.value){e.preventDefault();var a=e.touches[0],n=a.screenX,l=a.screenY,r=n-o.value.x,u=l-o.value.y;t(r,u),i({x:n,y:l});var v=Date.now();p(v-c.value),s(v),g({x:r,y:u})}},onTouchEnd:function(){if(o.value){var e=y.value;if(i(null),g(null),e){var a=e.x/f.value,n=e.y/f.value,l=Math.abs(a),r=Math.abs(n);if(Math.max(l,r)<.1)return;var u=a,c=n;x.value=setInterval((function(){Math.abs(u)<.01&&Math.abs(c)<.01?clearInterval(x.value):t(20*(u*=De),20*(c*=De))}),20)}}},onWheel:function(e){var a=e.deltaX,n=e.deltaY,o=0,i=Math.abs(a),l=Math.abs(n);i===l?o="x"===C.value?a:n:i>l?(o=a,C.value="x"):(o=n,C.value="y"),t(-o,-o)&&e.preventDefault()}});function w(e){k.value.onTouchStart(e)}function T(e){k.value.onTouchMove(e)}function j(e){k.value.onTouchEnd(e)}function O(e){k.value.onWheel(e)}S((function(){var t,a;document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",j,{passive:!1}),null===(t=e.value)||void 0===t||t.addEventListener("touchstart",w,{passive:!1}),null===(a=e.value)||void 0===a||a.addEventListener("wheel",O,{passive:!1})})),P((function(){document.removeEventListener("touchmove",T),document.removeEventListener("touchend",j)}))}(p,(function(e,t){if(B.value){if(X.value>=R.value)return!1;Ae(N,e)}else{if(Q.value>=q.value)return!1;Ae(_,t)}return Ee(),Be(),!0})),x(je,(function(){Ee(),je.value&&(Pe.value=setTimeout((function(){Oe(0)}),100))}));var Ie=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.activeKey,a=be.value.get(t)||{width:0,height:0,left:0,right:0,top:0};if(B.value){var n=I.value;e.rtl?a.right<I.value?n=a.right:a.right+a.width>I.value+X.value&&(n=a.right+a.width-X.value):a.left<-I.value?n=-a.left:a.left+a.width>-I.value+X.value&&(n=-(a.left+a.width-X.value)),_(0),N(he(n))}else{var o=M.value;a.top<-M.value?o=-a.top:a.top+a.height>-M.value+Q.value&&(o=-(a.top+a.height-Q.value)),N(0),_(he(o))}},Ne=h(0),Ke=h(0);T((function(){var t,a,n,o,i,l,r,u=be.value;["top","bottom"].includes(e.tabPosition)?(a="width",i=X.value,l=R.value,r=oe.value,n=e.rtl?"right":"left",o=Math.abs(I.value)):(a="height",i=Q.value,l=R.value,r=ce.value,n="top",o=-M.value);var c=i;l+r>i&&l<i&&(c=i-r);var s,v=d.value;if(!v.length)return s=[0,0],Ne.value=s[0],Ke.value=s[1],s;for(var f=v.length,p=f,b=0;b<f;b+=1){var m=u.get(v[b].key)||qe;if(m[n]+m[a]>o+c){p=b-1;break}}for(var y=0,g=f-1;g>=0;g-=1){if((u.get(v[g].key)||qe)[n]<o){y=g+1;break}}return t=[y,p],Ne.value=t[0],Ke.value=t[1],t}));var Me=function(){var e,t,a,n,o,i=(null===(e=p.value)||void 0===e?void 0:e.offsetWidth)||0,l=(null===(t=p.value)||void 0===t?void 0:t.offsetHeight)||0,r=(null===(a=y.value)||void 0===a?void 0:a.$el)||{},u=r.offsetWidth||0,c=r.offsetHeight||0;$(i),ee(l),le(u),se(c);var s=((null===(n=b.value)||void 0===n?void 0:n.offsetWidth)||0)-u,v=((null===(o=b.value)||void 0===o?void 0:o.offsetHeight)||0)-c;W(s),G(v),pe((function(){var e=new Map;return d.value.forEach((function(t){var a,n=t.key,o=O.value.get(n),i=(null===(a=o)||void 0===a?void 0:a.$el)||o;i&&e.set(n,{width:i.offsetWidth,height:i.offsetHeight,left:i.offsetLeft,top:i.offsetTop})})),e}))},We=C((function(){return[].concat(r(d.value.slice(0,Ne.value)),r(d.value.slice(Ke.value+1)))})),ze=ae(),Ge=l(ze,2),He=Ge[0],Ye=Ge[1],Ue=C((function(){return be.value.get(e.activeKey)})),Xe=h(),$e=function(){Y.cancel(Xe.value)};x([Ue,B,function(){return e.rtl}],(function(){var t={};Ue.value&&(B.value?(e.rtl?t.right=u(Ue.value.right):t.left=u(Ue.value.left),t.width=u(Ue.value.width)):(t.top=u(Ue.value.top),t.height=u(Ue.value.height))),$e(),Xe.value=Y((function(){Ye(t)}))})),x([function(){return e.activeKey},Ue,be,B],(function(){Ie()}),{flush:"post"}),x([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return d.value}],(function(){Me()}),{flush:"post"});var Ze=function(e){var t=e.position,a=e.prefixCls,n=e.extra;if(!n)return null;var o=null==n?void 0:n({position:t});return o?k("div",{class:"".concat(a,"-extra-content")},[o]):null};return P((function(){Ee(),$e()})),function(){var i,l,r,u,v,g=e.id,h=e.animated,x=e.activeKey,C=e.rtl,w=e.editable,P=e.locale,T=e.tabPosition,S=e.tabBarGutter,O=e.onTabClick,E=c.class,A=c.style,N=f.value,L=!!We.value.length,K="".concat(N,"-nav-wrap");B.value?C?(r=I.value>0,l=I.value+X.value<R.value):(l=I.value<0,r=-I.value+X.value<R.value):(u=M.value<0,v=-M.value+Q.value<q.value);var _={};"top"===T||"bottom"===T?_[C?"marginRight":"marginLeft"]="number"==typeof S?"".concat(S,"px"):S:_.marginTop="number"==typeof S?"".concat(S,"px"):S;var D=d.value.map((function(e,t){var a=e.key;return k(Ce,{id:g,prefixCls:N,key:a,tab:e,style:0===t?void 0:_,closable:e.closable,editable:w,active:a===x,removeAriaLabel:null==P?void 0:P.removeAriaLabel,ref:j(a),onClick:function(e){O(a,e)},onFocus:function(){Ie(a),Be(),p.value&&(C||(p.value.scrollLeft=0),p.value.scrollTop=0)}},s)}));return k("div",{role:"tablist",class:a("".concat(N,"-nav"),E),style:A,onKeydown:function(){Be()}},[k(Ze,{position:"left",prefixCls:N,extra:s.leftExtra},null),k(ie,{onResize:Me},{default:function(){return[k("div",{class:a(K,(i={},n(i,"".concat(K,"-ping-left"),l),n(i,"".concat(K,"-ping-right"),r),n(i,"".concat(K,"-ping-top"),u),n(i,"".concat(K,"-ping-bottom"),v),i)),ref:p},[k(ie,{onResize:Me},{default:function(){return[k("div",{ref:b,class:"".concat(N,"-nav-list"),style:{transform:"translate(".concat(I.value,"px, ").concat(M.value,"px)"),transition:je.value?"none":void 0}},[D,k(we,{ref:y,prefixCls:N,locale:P,editable:w,style:o(o({},0===D.length?void 0:_),{visibility:L?"hidden":null})},null),k("div",{class:a("".concat(N,"-ink-bar"),n({},"".concat(N,"-ink-bar-animated"),h.inkBar)),style:He.value},null)])]}})])]}}),k(Le,t(t({},e),{},{removeAriaLabel:null==P?void 0:P.removeAriaLabel,ref:m,prefixCls:N,tabs:We.value,class:!L&&me.value}),Ve(s,["moreIcon"])),k(Ze,{position:"right",prefixCls:N,extra:s.rightExtra},null),k(Ze,{position:"right",prefixCls:N,extra:s.tabBarExtraContent},null)])}}}),He=g({name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=_e(),a=t.tabs,o=t.prefixCls;return function(){var t=e.id,i=e.activeKey,l=e.animated,r=e.tabPosition,u=e.rtl,c=e.destroyInactiveTabPane,s=l.tabPane,v=o.value,d=a.value.findIndex((function(e){return e.key===i}));return k("div",{class:"".concat(v,"-content-holder")},[k("div",{class:["".concat(v,"-content"),"".concat(v,"-content-").concat(r),n({},"".concat(v,"-content-animated"),s)],style:d&&s?n({},u?"marginRight":"marginLeft","-".concat(d,"00%")):null},[a.value.map((function(e){return te(e.node,{key:e.key,prefixCls:v,tabKey:e.key,id:t,animated:s,active:e.key===i,destroyInactiveTabPane:c})}))])])}}}),Ye=0,Ue=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:e.any}};var Xe=g({name:"InternalTabs",inheritAttrs:!1,props:o(o({},U(Ue(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,i){var r=i.attrs,u=i.slots;v(!(void 0!==e.onPrevClick||void 0!==e.onNextClick),"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),v(!(void 0!==e.tabBarExtraContent),"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),v(!(void 0!==u.tabBarExtraContent),"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var c=d("tabs",e),s=c.prefixCls,b=c.direction,m=c.size,y=c.rootPrefixCls,g=C((function(){return"rtl"===b.value})),h=C((function(){var t=e.animated,a=e.tabPosition;return!1===t||["left","right"].includes(a)?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!0}:o({inkBar:!0,tabPane:!1},"object"===f(t)?t:{})})),x=ae(!1),w=l(x,2),P=w[0],j=w[1];S((function(){j(ne())}));var O=oe((function(){var t;return null===(t=e.tabs[0])||void 0===t?void 0:t.key}),{value:C((function(){return e.activeKey})),defaultValue:e.defaultActiveKey}),B=l(O,2),E=B[0],A=B[1],I=ae((function(){return e.tabs.findIndex((function(e){return e.key===E.value}))})),N=l(I,2),L=N[0],K=N[1];T((function(){var t,a=e.tabs.findIndex((function(e){return e.key===E.value}));-1===a&&(a=Math.max(0,Math.min(L.value,e.tabs.length-1)),A(null===(t=e.tabs[a])||void 0===t?void 0:t.key)),K(a)}));var M=oe(null,{value:C((function(){return e.id}))}),_=l(M,2),D=_[0],F=_[1],R=C((function(){return P.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition}));S((function(){e.id||(F("rc-tabs-".concat(Ye)),Ye+=1)}));var W=function(t,a){var n,o;null===(n=e.onTabClick)||void 0===n||n.call(e,t,a);var i=t!==E.value;A(t),i&&(null===(o=e.onChange)||void 0===o||o.call(e,t))};return Me({tabs:C((function(){return e.tabs})),prefixCls:s}),function(){var i,l,c,v=e.id,d=e.type,f=e.tabBarGutter,b=e.tabBarStyle,x=e.locale,C=e.destroyInactiveTabPane,w=e.renderTabBar,T=void 0===w?u.renderTabBar:w,S=e.onTabScroll,j=e.hideAdd,O=e.centered,B={id:D.value,activeKey:E.value,animated:h.value,tabPosition:R.value,rtl:g.value,mobile:P.value};"editable-card"===d&&(l={onEdit:function(t,a){var n,o=a.key,i=a.event;null===(n=e.onEdit)||void 0===n||n.call(e,"add"===t?i:o,t)},removeIcon:function(){return k(p,null,null)},addIcon:u.addIcon?u.addIcon:function(){return k(Ne,null,null)},showAdd:!0!==j});var A=o(o({},B),{moreTransitionName:"".concat(y.value,"-slide-up"),editable:l,locale:x,tabBarGutter:f,onTabClick:W,onTabScroll:S,style:b});c=T?T(o(o({},A),{DefaultTabBar:Ge})):k(Ge,A,Ve(u,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var I=s.value;return k("div",t(t({},r),{},{id:v,class:a(I,"".concat(I,"-").concat(R.value),(i={},n(i,"".concat(I,"-").concat(m.value),m.value),n(i,"".concat(I,"-card"),["card","editable-card"].includes(d)),n(i,"".concat(I,"-editable-card"),"editable-card"===d),n(i,"".concat(I,"-centered"),O),n(i,"".concat(I,"-mobile"),P.value),n(i,"".concat(I,"-editable"),"editable-card"===d),n(i,"".concat(I,"-rtl"),g.value),i),r.class)}),[c,k(He,t(t({destroyInactiveTabPane:C},B),{},{animated:h.value}),null)])}}}),$e=g({name:"ATabs",inheritAttrs:!1,props:U(Ue(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,a){var n=a.attrs,i=a.slots,r=a.emit,u=function(e){r("update:activeKey",e),r("change",e)};return function(){var a,r=c(null===(a=i.default)||void 0===a?void 0:a.call(i)).map((function(e){if(s(e)){for(var t=o({},e.props||{}),a=0,n=Object.entries(t);a<n.length;a++){var i=l(n[a],2),r=i[0],u=i[1];delete t[r],t[A(r)]=u}var c=e.children||{},v=void 0!==e.key?e.key:void 0,d=t.tab,f=void 0===d?c.tab:d,p=t.disabled,b=t.forceRender,m=t.closable,y=t.animated,g=t.active,h=t.destroyInactiveTabPane;return o(o({key:v},t),{node:e,closeIcon:c.closeIcon,tab:f,disabled:""===p||p,forceRender:""===b||b,closable:""===m||m,animated:""===y||y,active:""===g||g,destroyInactiveTabPane:""===h||h})}return null})).filter((function(e){return e}));return k(Xe,t(t(t({},pe(e,["onUpdate:activeKey"])),n),{},{onChange:u,tabs:r}),i)}}}),Ze=g({name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:{tab:e.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}},slots:["closeIcon","tab"],setup:function(e,t){var a=t.attrs,n=t.slots,o=h(e.forceRender);x([function(){return e.active},function(){return e.destroyInactiveTabPane}],(function(){e.active?o.value=!0:e.destroyInactiveTabPane&&(o.value=!1)}),{immediate:!0});var i=C((function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}}));return function(){var t,l=e.prefixCls,r=e.forceRender,u=e.id,c=e.active,s=e.tabKey;return k("div",{id:u&&"".concat(u,"-panel-").concat(s),role:"tabpanel",tabindex:c?0:-1,"aria-labelledby":u&&"".concat(u,"-tab-").concat(s),"aria-hidden":!c,style:[i.value,a.style],class:["".concat(l,"-tabpane"),c&&"".concat(l,"-tabpane-active"),a.class]},[(c||o.value||r)&&(null===(t=n.default)||void 0===t?void 0:t.call(n))])}}});$e.TabPane=Ze,$e.install=function(e){return e.component($e.name,$e),e.component(Ze.name,Ze),e};var Je=g({name:"ATimelineItem",props:U({prefixCls:String,color:String,dot:e.any,pending:{type:Boolean,default:void 0},position:e.oneOf(b("left","right","")).def(""),label:e.any},{color:"blue",pending:!1}),slots:["dot","label"],setup:function(e,t){var o=t.slots,i=d("timeline",e).prefixCls;return function(){var t,l,r,u,c,s=e.color,v=void 0===s?"":s,d=e.pending,f=e.label,p=void 0===f?null===(r=o.label)||void 0===r?void 0:r.call(o):f,b=e.dot,m=void 0===b?null===(u=o.dot)||void 0===u?void 0:u.call(o):b,y=a((n(t={},"".concat(i.value,"-item"),!0),n(t,"".concat(i.value,"-item-pending"),d),t)),g=a((n(l={},"".concat(i.value,"-item-head"),!0),n(l,"".concat(i.value,"-item-head-custom"),m),n(l,"".concat(i.value,"-item-head-").concat(v),!0),l)),h=/blue|red|green|gray/.test(v||"")?void 0:v;return k("li",{class:y},[p&&k("div",{class:"".concat(i.value,"-item-label")},[p]),k("div",{class:"".concat(i.value,"-item-tail")},null),k("div",{class:g,style:{borderColor:h,color:h}},[m]),k("div",{class:"".concat(i.value,"-item-content")},[null===(c=o.default)||void 0===c?void 0:c.call(o)])])}}}),Qe=g({name:"ATimeline",props:U({prefixCls:String,pending:e.any,pendingDot:e.any,reverse:{type:Boolean,default:void 0},mode:e.oneOf(b("left","alternate","right",""))},{reverse:!1,mode:""}),slots:["pending","pendingDot"],setup:function(e,t){var o=t.slots,i=d("timeline",e),l=i.prefixCls,r=i.direction,u=function(t,a){var n=t.props||{};return"alternate"===e.mode?"right"===n.position?"".concat(l.value,"-item-right"):"left"===n.position?"".concat(l.value,"-item-left"):"".concat(l.value,a%2==0?"-item-left":"-item-right"):"left"===e.mode?"".concat(l.value,"-item-left"):"right"===e.mode||"right"===n.position?"".concat(l.value,"-item-right"):""};return function(){var t,i,c,s,v=e.pending,d=void 0===v?null===(i=o.pending)||void 0===i?void 0:i.call(o):v,f=e.pendingDot,p=void 0===f?null===(c=o.pendingDot)||void 0===c?void 0:c.call(o):f,b=e.reverse,g=e.mode,h="boolean"==typeof d?null:d,x=m(null===(s=o.default)||void 0===s?void 0:s.call(o)),C=d?k(Je,{pending:!!d,dot:p||k(y,null,null)},{default:function(){return[h]}}):null;C&&x.push(C);var w=b?x.reverse():x,P=w.length,T="".concat(l.value,"-item-last"),S=w.map((function(e,t){return I(e,{class:a([!b&&d?t===P-2?T:"":t===P-1?T:"",u(e,t)])})})),j=w.some((function(e){var t,a;return!(!(null===(t=e.props)||void 0===t?void 0:t.label)&&!(null===(a=e.children)||void 0===a?void 0:a.label))})),O=a(l.value,(n(t={},"".concat(l.value,"-pending"),!!d),n(t,"".concat(l.value,"-reverse"),!!b),n(t,"".concat(l.value,"-").concat(g),!!g&&!j),n(t,"".concat(l.value,"-label"),j),n(t,"".concat(l.value,"-rtl"),"rtl"===r.value),t));return k("ul",{class:O},[S])}}});Qe.Item=Je,Qe.install=function(e){return e.component(Qe.name,Qe),e.component(Je.name,Je),e};const et={class:"wrap-list"},tt=F(" 欢迎使用note ");var at=N(g({__name:"TimeLine",setup(e){const t=H(),a=h();return S((()=>{t.getAllArticle({offset:0,limit:1e3}).then((e=>{a.value=e.articles}))})),(e,t)=>{const n=L("router-link"),o=Je,i=Qe;return K(),M("div",et,[k(i,{mode:"alternate"},{default:_((()=>[(K(!0),M(w,null,D(a.value,(e=>(K(),R(o,{key:e.identity_number},{dot:_((()=>[k(W(Oe),{style:{"font-size":"14px"}})])),default:_((()=>[k(n,{to:`/cat/${e.identity_number}`},{default:_((()=>[F(z(e.title),1)])),_:2},1032,["to"])])),_:2},1024)))),128)),k(o,null,{default:_((()=>[tt])),_:1})])),_:1})])}}}),[["__scopeId","data-v-6915eade"]]);const nt={class:"list-wrap"},ot={class:"wrap"},it={class:"section-item"},lt={class:"article-list"};var rt=N(g({__name:"ShowNotes",setup(e){const t=H(),{tabNum:a}=V(t),n=h(a.value);return T((()=>{t.$patch((e=>{e.tabNum=n.value}))})),(e,t)=>{const a=Ze,o=$e;return K(),M("div",nt,[k(o,{activeKey:n.value,"onUpdate:activeKey":t[0]||(t[0]=e=>n.value=e),centered:"",style:{border:"none",outline:"none"}},{default:_((()=>[k(a,{key:"1",tab:"时间轴"}),k(a,{key:"2",tab:"全部文章"}),k(a,{key:"3",tab:"收藏夹"}),k(a,{key:"4",tab:"草稿"}),k(a,{key:"5",tab:"回收站"})])),_:1},8,["activeKey"]),q("div",ot,[q("section",it,[q("div",lt,["1"===n.value?(K(),R(at,{key:0})):"2"===n.value?(K(),R(X,{key:1,kind:"allArticle"})):"3"===n.value?(K(),R(X,{key:2,kind:"favorite"})):"4"===n.value?(K(),R(X,{key:3,kind:"draft"})):"5"===n.value?(K(),R(X,{key:4,kind:"deleted"})):G("",!0)])])])])}}}),[["__scopeId","data-v-00df8adf"]]);export{rt as default};
