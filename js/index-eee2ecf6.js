import{A as e}from"./index-1bbdd8f4.js";import{w as t,_ as a,P as r,c as o,f as n,g as i,n as s,a as l,m as u,o as c}from"./default-add53953.js";import{c as v}from"./vnode-89a287a7.js";import{t as m,a as p,_ as f}from"./index-eb8719db.js";import{o as d}from"./omit-4992fbe8.js";import{i as g}from"./raf-b2de4fce.js";import{d as y,r as x,a as b,c as P,F as j}from"./index-461f95cc.js";import{c as A}from"./user-139840af.js";var C=t(y({name:"APopover",props:g(a(a({},p()),{content:r.any,title:r.any}),a(a({},m()),{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(e,t){var a=t.expose,r=t.slots,l=x();a({getPopupDomNode:function(){var e,t;return null===(t=null===(e=l.value)||void 0===e?void 0:e.getPopupDomNode)||void 0===t?void 0:t.call(e)}});var u=o("popover",e),c=u.prefixCls,v=u.configProvider,m=b((function(){return v.getPrefixCls()})),p=function(){var t,a,o=e.title,n=void 0===o?s(null===(t=r.title)||void 0===t?void 0:t.call(r)):o,i=e.content,l=void 0===i?s(null===(a=r.content)||void 0===a?void 0:a.call(r)):i,u=!!(Array.isArray(n)?n.length:n),v=!!(Array.isArray(l)?l.length:n);if(u||v)return P(j,null,[u&&P("div",{class:"".concat(c.value,"-title")},[n]),P("div",{class:"".concat(c.value,"-inner-content")},[l])])};return function(){return P(f,n(n({},d(e,["title","content"])),{},{prefixCls:c.value,ref:l,transitionName:i(m.value,"zoom-big",e.transitionName)}),{title:p,default:r.default})}}})),N=y({name:"AAvatarGroup",inheritAttrs:!1,props:{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}},setup:function(t,a){var r=a.slots,i=a.attrs,s=o("avatar-group",t),m=s.prefixCls,p=s.direction;return A(t),function(){var a,o=t.maxPopoverPlacement,s=void 0===o?"top":o,f=t.maxCount,d=t.maxStyle,g=t.maxPopoverTrigger,y=void 0===g?"hover":g,x=(l(a={},m.value,!0),l(a,"".concat(m.value,"-rtl"),"rtl"===p.value),l(a,"".concat(i.class),!!i.class),a),b=u(r,t),j=c(b).map((function(e,t){return v(e,{key:"avatar-key-".concat(t)})})),A=j.length;if(f&&f<A){var N=j.slice(0,f),h=j.slice(f,A);return N.push(P(C,{key:"avatar-popover-key",content:h,trigger:y,placement:s,overlayClassName:"".concat(m.value,"-popover")},{default:function(){return[P(e,{style:d},{default:function(){return["+".concat(A-f)]}})]}})),P("div",n(n({},i),{},{class:x,style:i.style}),[N])}return P("div",n(n({},i),{},{class:x,style:i.style}),[j])}}});e.Group=N,e.install=function(t){return t.component(e.name,e),t.component(N.name,N),t};