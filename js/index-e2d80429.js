import{P as e,u as n,d as t,h as r,R as a}from"./index-c3d52d2c.js";import{i as o,p as i,c as u,d as s,U as l,b as c,u as d,q as v,g as f,a as p,T as g}from"./index-42dc5c5f.js";var m=!1;try{var b=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("testPassive",null,b),window.removeEventListener("testPassive",null,b)}catch(E){}var C=m,y=Symbol("TriggerContextKey"),h=function(){return o(y,{setPortal:function(){},popPortal:!1})},x=Symbol("PortalContextKey"),P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inTriggerContext:!0};i(x,{inTriggerContext:n.inTriggerContext,shouldRender:u((function(){var n=e||{},t=n.sPopupVisible,r=n.popupRef,a=n.forceRender,o=n.autoDestroy,i=!1;return(t||r||a)&&(i=!0),!t&&o&&(i=!1),i}))})},w=s({name:"Portal",inheritAttrs:!1,props:{getContainer:e.func.isRequired,didUpdate:Function},setup:function(e,n){var t,r=n.slots,a=!0,i=function(){P({},{inTriggerContext:!1});var e=o(x,{shouldRender:u((function(){return!1})),inTriggerContext:!1});return{shouldRender:u((function(){return e.shouldRender.value||!1===e.inTriggerContext}))}}().shouldRender;l((function(){a=!1,i.value&&(t=e.getContainer())}));var s=c(i,(function(){i.value&&!t&&(t=e.getContainer()),t&&s()}));return d((function(){v((function(){var n;i.value&&(null===(n=e.didUpdate)||void 0===n||n.call(e,e))}))})),f((function(){t&&t.parentNode&&t.parentNode.removeChild(t)})),function(){var e;return i.value?a?null===(e=r.default)||void 0===e?void 0:e.call(r):t?p(g,{to:t},r):null:null}}});function R(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,n,t){return n&&R(e.prototype,n),t&&R(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function j(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var S=s({name:"AButtonGroup",props:{prefixCls:String,size:{type:String}},setup:function(e,a){var o=a.slots,i=n("btn-group",e),s=i.prefixCls,l=i.direction,c=u((function(){var n,r="";switch(e.size){case"large":r="lg";break;case"small":r="sm"}return t(n={},"".concat(s.value),!0),t(n,"".concat(s.value,"-").concat(r),r),t(n,"".concat(s.value,"-rtl"),"rtl"===l.value),n}));return function(){var e;return p("div",{class:c.value},[r(null===(e=o.default)||void 0===e?void 0:e.call(o))])}}});a.Group=S,a.install=function(e){return e.component(a.name,a),e.component(S.name,S),e};export{w as P,T as _,P as a,j as b,C as s,h as u};
