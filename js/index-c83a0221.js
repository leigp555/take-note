import{P as a,u as e,_ as n,g as t,c as r,a as s,e as c}from"./default-d4740e8b.js";import{R as u,u as i,r as l}from"./styleChecker-7b62aee1.js";import{r as o,f,H as v,K as p,h as g,d,b as m,w as h,n as b,c as x}from"./index-7c775911.js";import{R as y}from"./SearchOutlined-bdef1a89.js";function S(){var a=o({}),e=null;return f((function(){e=u.subscribe((function(e){a.value=e}))})),v((function(){u.unsubscribe(e)})),a}function z(a){var e=p();return g((function(){e.value=a()}),{flush:"sync"}),e}var j=d({name:"AAvatar",inheritAttrs:!1,props:{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:a.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}},slots:["icon"],setup:function(a,u){var v=u.slots,p=u.attrs,g=o(!0),d=o(!1),j=o(1),A=o(null),H=o(null),O=e("avatar",a).prefixCls,w=i(),C=m((function(){return"default"===a.size?w.value:a.size})),E=S(),R=z((function(){if("object"===n(a.size)){var e=l.find((function(a){return E.value[a]}));return a.size[e]}})),W=function(){if(A.value&&H.value){var e=A.value.offsetWidth,n=H.value.offsetWidth;if(0!==e&&0!==n){var t=a.gap,r=void 0===t?4:t;2*r<n&&(j.value=n-2*r<e?(n-2*r)/e:1)}}},k=function(){var e=a.loadError;!1!==(null==e?void 0:e())&&(g.value=!1)};return h((function(){return a.src}),(function(){b((function(){g.value=!0,j.value=1}))})),h((function(){return a.gap}),(function(){b((function(){W()}))})),f((function(){b((function(){W(),d.value=!0}))})),function(){var e,n,u,i,l=a.shape,o=a.src,f=a.alt,m=a.srcset,h=a.draggable,b=a.crossOrigin,S=t(v,a,"icon"),z=O.value,w=(r(e={},"".concat(p.class),!!p.class),r(e,z,!0),r(e,"".concat(z,"-lg"),"large"===C.value),r(e,"".concat(z,"-sm"),"small"===C.value),r(e,"".concat(z,"-").concat(l),l),r(e,"".concat(z,"-image"),o&&g.value),r(e,"".concat(z,"-icon"),S),e),E="number"==typeof C.value?{width:"".concat(C.value,"px"),height:"".concat(C.value,"px"),lineHeight:"".concat(C.value,"px"),fontSize:S?"".concat(C.value/2,"px"):"18px"}:{},N=null===(n=v.default)||void 0===n?void 0:n.call(v);if(o&&g.value)u=x("img",{draggable:h,src:o,srcset:m,onError:k,alt:f,crossorigin:b},null);else if(S)u=S;else if(d.value||1!==j.value){var T="scale(".concat(j.value,") translateX(-50%)"),B={msTransform:T,WebkitTransform:T,transform:T},F="number"==typeof C.value?{lineHeight:"".concat(C.value,"px")}:{};u=x(y,{onResize:W},{default:function(){return[x("span",{class:"".concat(z,"-string"),ref:A,style:s(s({},F),B)},[N])]}})}else u=x("span",{class:"".concat(z,"-string"),ref:A,style:{opacity:0}},[N]);return x("span",c(c({},p),{},{ref:H,class:w,style:[E,(i=!!S,R.value?{width:"".concat(R.value,"px"),height:"".concat(R.value,"px"),lineHeight:"".concat(R.value,"px"),fontSize:"".concat(i?R.value/2:18,"px")}:{}),p.style]}),[u])}}});function A(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=0,n=a.length;e<n;e++)if(void 0!==a[e])return a[e]}export{j as A,z as e,A as f,S as u};
