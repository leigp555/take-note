import{v as t,u as r,_ as n,j as a,c as e,a as o}from"./default-4f5790ac.js";import{R as c,r as i}from"./useSize-fadbb72f.js";import{d as u}from"./styleChecker-e1a65af2.js";import{r as l,f,p as s,i as p,b as d,d as v,o as m,c as x}from"./index-562ecf70.js";import{b}from"./isEqual-910c602e.js";import{r as g}from"./vnode-fc0cdb05.js";import{t as y}from"./toNumber-c1eff28b.js";var j=Symbol("rowContextKey"),h=function(t){s(j,t)};t("top","middle","bottom","stretch"),t("start","end","center","space-around","space-between");var S=v({name:"ARow",props:{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array],default:0},wrap:{type:Boolean,default:void 0}},setup:function(t,o){var s,p,v=o.slots,b=r("row",t),g=b.prefixCls,y=b.direction,j=l({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),S=(p=l(!1),f((function(){p.value=u()})),p);f((function(){s=c.subscribe((function(r){var a=t.gutter||0;(!Array.isArray(a)&&"object"===n(a)||Array.isArray(a)&&("object"===n(a[0])||"object"===n(a[1])))&&(j.value=r)}))})),m((function(){c.unsubscribe(s)}));var w=d((function(){var r=[0,0],a=t.gutter,e=void 0===a?0:a;return(Array.isArray(e)?e:[e,0]).forEach((function(t,a){if("object"===n(t))for(var e=0;e<i.length;e++){var o=i[e];if(j.value[o]&&void 0!==t[o]){r[a]=t[o];break}}else r[a]=t||0})),r}));h({gutter:w,supportFlexGap:S,wrap:d((function(){return t.wrap}))});var N=d((function(){var r;return a(g.value,(e(r={},"".concat(g.value,"-no-wrap"),!1===t.wrap),e(r,"".concat(g.value,"-").concat(t.justify),t.justify),e(r,"".concat(g.value,"-").concat(t.align),t.align),e(r,"".concat(g.value,"-rtl"),"rtl"===y.value),r))})),A=d((function(){var t=w.value,r={},n=t[0]>0?"".concat(t[0]/-2,"px"):void 0,a=t[1]>0?"".concat(t[1]/-2,"px"):void 0;return n&&(r.marginLeft=n,r.marginRight=n),S.value?r.rowGap="".concat(t[1],"px"):a&&(r.marginTop=a,r.marginBottom=a),r}));return function(){var t;return x("div",{class:N.value,style:A.value},[null===(t=v.default)||void 0===t?void 0:t.call(v)])}}});var w=v({name:"ACol",props:{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]},setup:function(t,c){var i=c.slots,u=p(j,{gutter:d((function(){})),wrap:d((function(){})),supportFlexGap:d((function(){}))}),l=u.gutter,f=u.supportFlexGap,s=u.wrap,v=r("col",t),m=v.prefixCls,b=v.direction,g=d((function(){var r,c=t.span,i=t.order,u=t.offset,l=t.push,f=t.pull,s=m.value,p={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach((function(r){var a,c={},i=t[r];"number"==typeof i?c.span=i:"object"===n(i)&&(c=i||{}),p=o(o({},p),(e(a={},"".concat(s,"-").concat(r,"-").concat(c.span),void 0!==c.span),e(a,"".concat(s,"-").concat(r,"-order-").concat(c.order),c.order||0===c.order),e(a,"".concat(s,"-").concat(r,"-offset-").concat(c.offset),c.offset||0===c.offset),e(a,"".concat(s,"-").concat(r,"-push-").concat(c.push),c.push||0===c.push),e(a,"".concat(s,"-").concat(r,"-pull-").concat(c.pull),c.pull||0===c.pull),e(a,"".concat(s,"-rtl"),"rtl"===b.value),a))})),a(s,(e(r={},"".concat(s,"-").concat(c),void 0!==c),e(r,"".concat(s,"-order-").concat(i),i),e(r,"".concat(s,"-offset-").concat(u),u),e(r,"".concat(s,"-push-").concat(l),l),e(r,"".concat(s,"-pull-").concat(f),f),r),p)})),y=d((function(){var r=t.flex,n=l.value,a={};if(n&&n[0]>0){var e="".concat(n[0]/2,"px");a.paddingLeft=e,a.paddingRight=e}if(n&&n[1]>0&&!f.value){var o="".concat(n[1]/2,"px");a.paddingTop=o,a.paddingBottom=o}return r&&(a.flex=function(t){return"number"==typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(r),!1!==s.value||a.minWidth||(a.minWidth=0)),a}));return function(){var t;return x("div",{class:g.value,style:y.value},[null===(t=i.default)||void 0===t?void 0:t.call(i)])}}}),N=function(){return g.Date.now()},A=Math.max,T=Math.min;function C(t,r,n){var a,e,o,c,i,u,l=0,f=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(r){var n=a,o=e;return a=e=void 0,l=r,c=t.apply(o,n)}function v(t){return l=t,i=setTimeout(x,r),f?d(t):c}function m(t){var n=t-u;return void 0===u||n>=r||n<0||s&&t-l>=o}function x(){var t=N();if(m(t))return g(t);i=setTimeout(x,function(t){var n=r-(t-u);return s?T(n,o-(t-l)):n}(t))}function g(t){return i=void 0,p&&a?d(t):(a=e=void 0,c)}function j(){var t=N(),n=m(t);if(a=arguments,e=this,u=t,n){if(void 0===i)return v(u);if(s)return clearTimeout(i),i=setTimeout(x,r),d(u)}return void 0===i&&(i=setTimeout(x,r)),c}return r=y(r)||0,b(n)&&(f=!!n.leading,o=(s="maxWait"in n)?A(y(n.maxWait)||0,r):o,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==i&&clearTimeout(i),l=0,a=u=e=i=void 0},j.flush=function(){return void 0===i?c:g(N())},j}export{w as C,S as R,C as d};
