import{A as e,l as t,u as n,j as a,c as o,P as l,v as i,y as r,L as c}from"./default-7033edc7.js";import{c as s,d,P as u,m as v,q as m,x as p,F as f,U as g,S as b,u as j,_ as h,s as y}from"./index-4b933dea.js";import{A as x}from"./ArticlePage-9c091aaf.js";import"./index-5791c515.js";import"./toNumber-901a1120.js";import"./isEqual-f3bbf050.js";import"./vnode-337c6a8b.js";import"./Trigger-e4fb64bc.js";import"./Portal-ba621d44.js";import"./index-139a6198.js";import"./KeyCode-a2a1cb88.js";import"./FormItemContext-d0fb8950.js";import"./Overflow-17b2d920.js";import"./omit-a90bb24f.js";import"./SearchOutlined-c782069f.js";import"./index-7c8dd011.js";import"./useSize-9f109225.js";import"./styleChecker-1d11daab.js";import"./index-4a613fc1.js";import"./firstNotUndefined-063115bc.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"};function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){S(e,t,n[t])}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(t,n){var a=C({},t,n.attrs);return s(e,C({},a,{icon:O}),null)};_.displayName="ClockCircleOutlined",_.inheritAttrs=!1;var w=_,P=d({name:"ATimelineItem",props:t({prefixCls:String,color:String,dot:l.any,pending:{type:Boolean,default:void 0},position:l.oneOf(i("left","right","")).def(""),label:l.any},{color:"blue",pending:!1}),slots:["dot","label"],setup:function(e,t){var l=t.slots,i=n("timeline",e).prefixCls;return function(){var t,n,r,c,d,u=e.color,v=void 0===u?"":u,m=e.pending,p=e.label,f=void 0===p?null===(r=l.label)||void 0===r?void 0:r.call(l):p,g=e.dot,b=void 0===g?null===(c=l.dot)||void 0===c?void 0:c.call(l):g,j=a((o(t={},"".concat(i.value,"-item"),!0),o(t,"".concat(i.value,"-item-pending"),m),t)),h=a((o(n={},"".concat(i.value,"-item-head"),!0),o(n,"".concat(i.value,"-item-head-custom"),b),o(n,"".concat(i.value,"-item-head-").concat(v),!0),n)),y=/blue|red|green|gray/.test(v||"")?void 0:v;return s("li",{class:j},[f&&s("div",{class:"".concat(i.value,"-item-label")},[f]),s("div",{class:"".concat(i.value,"-item-tail")},null),s("div",{class:h,style:{borderColor:y,color:y}},[b]),s("div",{class:"".concat(i.value,"-item-content")},[null===(d=l.default)||void 0===d?void 0:d.call(l)])])}}}),A=d({name:"ATimeline",props:t({prefixCls:String,pending:l.any,pendingDot:l.any,reverse:{type:Boolean,default:void 0},mode:l.oneOf(i("left","alternate","right",""))},{reverse:!1,mode:""}),slots:["pending","pendingDot"],setup:function(e,t){var l=t.slots,i=n("timeline",e),d=i.prefixCls,v=i.direction,m=function(t,n){var a=t.props||{};return"alternate"===e.mode?"right"===a.position?"".concat(d.value,"-item-right"):"left"===a.position?"".concat(d.value,"-item-left"):"".concat(d.value,n%2==0?"-item-left":"-item-right"):"left"===e.mode?"".concat(d.value,"-item-left"):"right"===e.mode||"right"===a.position?"".concat(d.value,"-item-right"):""};return function(){var t,n,i,p,f=e.pending,g=void 0===f?null===(n=l.pending)||void 0===n?void 0:n.call(l):f,b=e.pendingDot,j=void 0===b?null===(i=l.pendingDot)||void 0===i?void 0:i.call(l):b,h=e.reverse,y=e.mode,x="boolean"==typeof g?null:g,O=r(null===(p=l.default)||void 0===p?void 0:p.call(l)),C=g?s(P,{pending:!!g,dot:j||s(c,null,null)},{default:function(){return[x]}}):null;C&&O.push(C);var S=h?O.reverse():O,_=S.length,w="".concat(d.value,"-item-last"),A=S.map((function(e,t){return u(e,{class:a([!h&&g?t===_-2?w:"":t===_-1?w:"",m(e,t)])})})),k=S.some((function(e){var t,n;return!(!(null===(t=e.props)||void 0===t?void 0:t.label)&&!(null===(n=e.children)||void 0===n?void 0:n.label))})),z=a(d.value,(o(t={},"".concat(d.value,"-pending"),!!g),o(t,"".concat(d.value,"-reverse"),!!h),o(t,"".concat(d.value,"-").concat(y),!!y&&!k),o(t,"".concat(d.value,"-label"),k),o(t,"".concat(d.value,"-rtl"),"rtl"===v.value),t));return s("ul",{class:z},[A])}}});A.Item=P,A.install=function(e){return e.component(A.name,A),e.component(P.name,P),e};const k=b(" Create a services site 2015-09-01 "),z=b(" Technical testing 2015-09-01 "),D=d({__name:"TimeLine",setup:e=>(e,t)=>{const n=P,a=A;return v(),m("div",null,[s(a,{mode:"alternate"},{default:p((()=>[(v(),m(f,null,g(50,(e=>s(n,{key:e},{dot:p((()=>[s(j(w),{style:{"font-size":"14px"}})])),default:p((()=>[k])),_:2},1024))),64)),s(n,null,{default:p((()=>[z])),_:1})])),_:1})])}});const T={class:"wrap"},I={class:"time-line"};var N=h(d({__name:"ShowNotes",setup:e=>(e,t)=>(v(),m("div",T,[y("section",I,[s(D),s(x)])]))}),[["__scopeId","data-v-38a3e3a0"]]);export{N as default};
