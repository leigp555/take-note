import{B as a}from"./index-bb392ada.js";import{d as e,e as r,m as t}from"./default-5a702575.js";import{_ as n,a as s}from"./classCallCheck-5d344be6.js";import{d as o,a as l,c}from"./index-c4afe18c.js";var i=o({name:"AButtonGroup",props:{prefixCls:String,size:{type:String}},setup:function(a,n){var s=n.slots,o=e("btn-group",a),i=o.prefixCls,u=o.direction,m=l((function(){var e,t="";switch(a.size){case"large":t="lg";break;case"small":t="sm"}return r(e={},"".concat(i.value),!0),r(e,"".concat(i.value,"-").concat(t),t),r(e,"".concat(i.value,"-rtl"),"rtl"===u.value),e}));return function(){var a;return c("div",{class:m.value},[t(null===(a=s.default)||void 0===a?void 0:a.call(s))])}}});a.Group=i,a.install=function(e){return e.component(a.name,a),e.component(i.name,i),e};
