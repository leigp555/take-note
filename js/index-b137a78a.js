import{P as e,n as t,_ as o,p as n,t as r,d as i,s as a,r as l,v as s,c as f,e as p,x as u,w as c}from"./default-6e83181f.js";import{T as v}from"./Trigger-48acbf24.js";import{d,c as g,r as b,e as y,f as m,b as O,a as C}from"./index-51d32f2b.js";import{c as w}from"./vnode-13f0d3da.js";import{f as h}from"./firstNotUndefined-063115bc.js";import{i as P,w as j}from"./raf-cb3d651e.js";var x={adjustX:1,adjustY:1},A=[0,0],S={left:{points:["cr","cl"],overflow:x,offset:[-4,0],targetOffset:A},right:{points:["cl","cr"],overflow:x,offset:[4,0],targetOffset:A},top:{points:["bc","tc"],overflow:x,offset:[0,-4],targetOffset:A},bottom:{points:["tc","bc"],overflow:x,offset:[0,4],targetOffset:A},topLeft:{points:["bl","tl"],overflow:x,offset:[0,-4],targetOffset:A},leftTop:{points:["tr","tl"],overflow:x,offset:[-4,0],targetOffset:A},topRight:{points:["br","tr"],overflow:x,offset:[0,-4],targetOffset:A},rightTop:{points:["tl","tr"],overflow:x,offset:[4,0],targetOffset:A},bottomRight:{points:["tr","br"],overflow:x,offset:[0,4],targetOffset:A},rightBottom:{points:["bl","br"],overflow:x,offset:[4,0],targetOffset:A},bottomLeft:{points:["tl","bl"],overflow:x,offset:[0,4],targetOffset:A},leftBottom:{points:["br","bl"],overflow:x,offset:[-4,0],targetOffset:A}},N=d({name:"Content",props:{prefixCls:String,id:String,overlayInnerStyle:e.any},slots:["overlay"],setup:function(e,t){var o=t.slots;return function(){var t;return g("div",{class:"".concat(e.prefixCls,"-inner"),id:e.id,role:"tooltip",style:e.overlayInnerStyle},[null===(t=o.overlay)||void 0===t?void 0:t.call(o)])}}}),T=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};function D(){}var V=d({name:"Tooltip",inheritAttrs:!1,props:{trigger:e.any.def(["hover"]),defaultVisible:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:e.string.def("right"),transitionName:String,animation:e.any,afterVisibleChange:e.func.def((function(){})),overlayStyle:{type:Object,default:void 0},overlayClassName:String,prefixCls:e.string.def("rc-tooltip"),mouseEnterDelay:e.number.def(.1),mouseLeaveDelay:e.number.def(.1),getPopupContainer:Function,destroyTooltipOnHide:{type:Boolean,default:!1},align:e.object.def((function(){return{}})),arrowContent:e.any.def(null),tipId:String,builtinPlacements:e.object,overlayInnerStyle:{type:Object,default:void 0},popupVisible:{type:Boolean,default:void 0},onVisibleChange:Function,onPopupAlign:Function},slots:["arrowContent","overlay"],setup:function(e,r){var i=r.slots,a=r.attrs,l=r.expose,s=b(),f=function(){var t=e.prefixCls,o=e.tipId,r=e.overlayInnerStyle;return[g("div",{class:"".concat(t,"-arrow"),key:"arrow"},[n(i,e,"arrowContent")]),g(N,{key:"content",prefixCls:t,id:o,overlayInnerStyle:r},{overlay:i.overlay})]};l({getPopupDomNode:function(){return s.value.getPopupDomNode()},triggerDOM:s,forcePopupAlign:function(){var e;return null===(e=s.value)||void 0===e?void 0:e.forcePopupAlign()}});var p=b(!1),u=b(!1);return y((function(){var o=e.destroyTooltipOnHide;if("boolean"==typeof o)p.value=o;else if(o&&"object"===t(o)){var n=o.keepParent;p.value=!0===n,u.value=!1===n}})),function(){var t=e.overlayClassName,n=e.trigger,r=e.mouseEnterDelay,l=e.mouseLeaveDelay,c=e.overlayStyle,d=e.prefixCls,b=e.afterVisibleChange,y=e.transitionName,m=e.animation,O=e.placement,C=e.align;e.destroyTooltipOnHide;var w=e.defaultVisible,h=T(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible"]),P=o({},h);void 0!==e.visible&&(P.popupVisible=e.visible);var j=o(o(o({popupClassName:t,prefixCls:d,action:n,builtinPlacements:S,popupPlacement:O,popupAlign:C,afterPopupVisibleChange:b,popupTransitionName:y,popupAnimation:m,defaultPopupVisible:w,destroyPopupOnHide:p.value,autoDestroy:u.value,mouseLeaveDelay:l,popupStyle:c,mouseEnterDelay:r},P),a),{onPopupVisibleChange:e.onVisibleChange||D,onPopupAlign:e.onPopupAlign||D,ref:s,popup:f()});return g(v,j,{default:i.default})}}});r("success","processing","error","default","warning");var B=r("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"),k=function(){return{trigger:[String,Array],visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:void 0},placement:String,color:String,transitionName:String,overlayStyle:{type:Object,default:void 0},overlayClassName:String,openClassName:String,prefixCls:String,mouseEnterDelay:Number,mouseLeaveDelay:Number,getPopupContainer:Function,arrowPointAtCenter:{type:Boolean,default:void 0},autoAdjustOverflow:{type:[Boolean,Object],default:void 0},destroyTooltipOnHide:{type:Boolean,default:void 0},align:{type:Object,default:void 0},builtinPlacements:{type:Object,default:void 0},children:Array,onVisibleChange:Function,"onUpdate:visible":Function}},E={adjustX:1,adjustY:1},L={adjustX:0,adjustY:0},I=[0,0];function _(e){return"boolean"==typeof e?e?E:L:o(o({},L),e)}var H=new RegExp("^(".concat(B.join("|"),")(-inverse)?$")),R=function(){return{trigger:"hover",transitionName:"zoom-big-fast",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}},F=c(d({name:"ATooltip",inheritAttrs:!1,props:P(o(o({},k()),{title:e.any}),{trigger:"hover",transitionName:"zoom-big-fast",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),slots:["title"],setup:function(e,n){var r,c=n.slots,v=n.emit,d=n.attrs,y=n.expose,P=i("tooltip",e),x=P.prefixCls,A=P.getPopupContainer,N=b(h([e.visible,e.defaultVisible])),T=b();m((function(){a(void 0===e.defaultVisible,"Tooltip","'defaultVisible' is deprecated, please use 'v-model:visible'")})),O((function(){return e.visible}),(function(e){j.cancel(r),r=j((function(){N.value=!!e}))}));var D=function(){var t,o=null!==(t=e.title)&&void 0!==t?t:c.title;return!o&&0!==o},B=function(t){var o=D();void 0===e.visible&&(N.value=!o&&t),o||(v("update:visible",t),v("visibleChange",t))};y({getPopupDomNode:function(){return T.value.getPopupDomNode()},visible:N,forcePopupAlign:function(){var e;return null===(e=T.value)||void 0===e?void 0:e.forcePopupAlign()}});var k=C((function(){var t=e.builtinPlacements,n=e.arrowPointAtCenter,r=e.autoAdjustOverflow;return t||function(e){var t=e.arrowWidth,n=void 0===t?4:t,r=e.horizontalArrowShift,i=void 0===r?16:r,a=e.verticalArrowShift,l=void 0===a?8:a,s=e.autoAdjustOverflow,f=e.arrowPointAtCenter,p={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(i+n),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(l+n)]},topRight:{points:["br","tc"],offset:[i+n,-4]},rightTop:{points:["tl","cr"],offset:[4,-(l+n)]},bottomRight:{points:["tr","bc"],offset:[i+n,4]},rightBottom:{points:["bl","cr"],offset:[4,l+n]},bottomLeft:{points:["tl","bc"],offset:[-(i+n),4]},leftBottom:{points:["br","cl"],offset:[-4,l+n]}};return Object.keys(p).forEach((function(e){p[e]=f?o(o({},p[e]),{overflow:_(s),targetOffset:I}):o(o({},S[e]),{overflow:_(s)}),p[e].ignoreShake=!0})),p}({arrowPointAtCenter:n,autoAdjustOverflow:r})})),E=function(e){return e||""===e},L=function(e){var n=e.type;if("object"===t(n)&&e.props&&((!0===n.__ANT_BUTTON||"button"===n)&&E(e.props.disabled)||!0===n.__ANT_SWITCH&&(E(e.props.disabled)||E(e.props.loading)))){var r=function(e,t){var n={},r=o({},e);return t.forEach((function(t){e&&t in e&&(n[t]=e[t],delete r[t])})),{picked:n,omitted:r}}(u(e),["position","left","right","top","bottom","float","display","zIndex"]),i=r.picked,a=r.omitted,l=o(o({display:"inline-block"},i),{cursor:"not-allowed",lineHeight:1,width:e.props&&e.props.block?"100%":null}),s=o(o({},a),{pointerEvents:"none"}),f=w(e,{style:s},!0);return g("span",{style:l,class:"".concat(x.value,"-disabled-compatible-wrapper")},[f])}return e},R=function(){var t,o;return null!==(t=e.title)&&void 0!==t?t:null===(o=c.title)||void 0===o?void 0:o.call(c)},F=function(e,t){var o=k.value,n=Object.keys(o).filter((function(e){return o[e].points[0]===t.points[0]&&o[e].points[1]===t.points[1]}))[0];if(n){var r=e.getBoundingClientRect(),i={top:"50%",left:"50%"};n.indexOf("top")>=0||n.indexOf("Bottom")>=0?i.top="".concat(r.height-t.offset[1],"px"):(n.indexOf("Top")>=0||n.indexOf("bottom")>=0)&&(i.top="".concat(-t.offset[1],"px")),n.indexOf("left")>=0||n.indexOf("Right")>=0?i.left="".concat(r.width-t.offset[0],"px"):(n.indexOf("right")>=0||n.indexOf("Left")>=0)&&(i.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(i.left," ").concat(i.top)}};return function(){var t,n,r,i=e.openClassName,a=e.color,u=e.overlayClassName,v=null!==(r=l(null===(n=c.default)||void 0===n?void 0:n.call(c)))&&void 0!==r?r:null;v=1===v.length?v[0]:v;var b=N.value;if(void 0===e.visible&&D()&&(b=!1),!v)return null;var y,m,O=L(s(v)?v:g("span",null,[v])),C=f((p(t={},i||"".concat(x.value,"-open"),!0),p(t,O.props&&O.props.class,O.props&&O.props.class),t)),h=f(u,p({},"".concat(x.value,"-").concat(a),a&&H.test(a)));a&&!H.test(a)&&(y={backgroundColor:a},m={backgroundColor:a});var P=o(o(o({},d),e),{prefixCls:x.value,getPopupContainer:A.value,builtinPlacements:k.value,visible:b,ref:T,overlayClassName:h,overlayInnerStyle:y,onVisibleChange:B,onPopupAlign:F});return g(V,P,{default:function(){return[N.value?w(O,{class:C}):O]},arrowContent:function(){return g("span",{class:"".concat(x.value,"-arrow-content"),style:m},null)},overlay:R})}}}));export{F as _,k as a,R as t};
