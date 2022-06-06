import{d as e,r as a,a as n,w as s,y as o,_ as t,t as c,C as l,D as i,v as r,Z as u,Q as p}from"./index-edaf8b45.js";import{w as d,t as v,P as f,u as m,m as g,c as y,d as b,j as h,i as w,n as x,b as C,V as I,R as H,W as T,C as j,S as A,X as B,Y as L,Z as _,$ as k}from"./default-ca4f2b5e.js";import{c as D}from"./vnode-b0b83854.js";var E={success:H,info:T,error:j,warning:A},F={success:B,info:L,error:_,warning:k},S=v("success","info","warning","error"),Z=d(e({name:"AAlert",inheritAttrs:!1,props:{type:f.oneOf(S),closable:{type:Boolean,default:void 0},closeText:f.any,message:f.any,description:f.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:f.any,closeIcon:f.any,onClose:Function},setup:function(e,t){var c=t.slots,l=t.emit,i=t.attrs,r=t.expose,u=m("alert",e),p=u.prefixCls,d=u.direction,v=a(!1),f=a(!1),H=a(),T=function(e){e.preventDefault();var a=H.value;a.style.height="".concat(a.offsetHeight,"px"),a.style.height="".concat(a.offsetHeight,"px"),v.value=!0,l("close",e)},j=function(){var a;v.value=!1,f.value=!0,null===(a=e.afterClose)||void 0===a||a.call(e)};r({animationEnd:j});var A=a({});return function(){var a,t,l=e.banner,r=e.closeIcon,u=void 0===r?null===(t=c.closeIcon)||void 0===t?void 0:t.call(c):r,m=e.closable,B=e.type,L=e.showIcon,_=g(c,e,"closeText"),k=g(c,e,"description"),S=g(c,e,"message"),Z=g(c,e,"icon");L=!(!l||void 0!==L)||L;var M=(k?F:E)[B=l&&void 0===B?"warning":B||"info"]||null;_&&(m=!0);var O=p.value,P=y(O,(b(a={},"".concat(O,"-").concat(B),!0),b(a,"".concat(O,"-closing"),v.value),b(a,"".concat(O,"-with-description"),!!k),b(a,"".concat(O,"-no-icon"),!L),b(a,"".concat(O,"-banner"),!!l),b(a,"".concat(O,"-closable"),m),b(a,"".concat(O,"-rtl"),"rtl"===d.value),a)),Q=m?n("button",{type:"button",onClick:T,class:"".concat(O,"-close-icon"),tabindex:0},[_?n("span",{class:"".concat(O,"-close-text")},[_]):void 0===u?n(h,null,null):u]):null,R=Z&&(w(Z)?D(Z,{class:"".concat(O,"-icon")}):n("span",{class:"".concat(O,"-icon")},[Z]))||n(M,{class:"".concat(O,"-icon")},null),V=x("".concat(O,"-motion"),{appear:!1,css:!0,onAfterLeave:j,onBeforeLeave:function(e){e.style.maxHeight="".concat(e.offsetHeight,"px")},onLeave:function(e){e.style.maxHeight="0px"}});return f.value?null:n(I,V,{default:function(){return[s(n("div",C(C({role:"alert"},i),{},{style:[i.style,A.value],class:[i.class,P],"data-show":!v.value,ref:H}),[L?R:null,n("div",{class:"".concat(O,"-content")},[S?n("div",{class:"".concat(O,"-message")},[S]):null,k?n("div",{class:"".concat(O,"-description")},[k]):null]),Q]),[[o,!v.value]])]}})}}}));const M={class:"wrap",ref:"wrap"};var O=t(e({name:"Message",props:{msg:null,type:null},setup(e){const a=e,{msg:s,type:o}=c(a);return(e,a)=>{const t=Z;return l(),i("div",M,[n(t,{class:"message",message:r(s),type:r(o),"show-icon":""},null,8,["message","type"])],512)}}}),[["__scopeId","data-v-02bf9df9"]]);const P=e({name:"Test",setup(e){const a=()=>{(e=>{const{msg:a,type:n}=e,s=document.createElement("div");document.body.appendChild(s);const o=u(p(O,{msg:a,type:n}));o.mount(s);const t=setTimeout((()=>{o.unmount(),s.remove(),window.clearTimeout(t)}),1500)})({msg:"成功尝试",type:"warning"})};return(e,n)=>(l(),i("button",{onClick:a},"点击"))}});export{P as default};