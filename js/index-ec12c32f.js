import{B as a}from"./index-530686a9.js";import{u as r,c as t,f as e}from"./default-2f02cdfe.js";import{_ as n,a as s}from"./classCallCheck-5d344be6.js";import{d as o,b as l,c}from"./index-70faa8b0.js";var i=o({name:"AButtonGroup",props:{prefixCls:String,size:{type:String}},setup:function(a,n){var s=n.slots,o=r("btn-group",a),i=o.prefixCls,u=o.direction,f=l((function(){var r,e="";switch(a.size){case"large":e="lg";break;case"small":e="sm"}return t(r={},"".concat(i.value),!0),t(r,"".concat(i.value,"-").concat(e),e),t(r,"".concat(i.value,"-rtl"),"rtl"===u.value),r}));return function(){var a;return c("div",{class:f.value},[e(null===(a=s.default)||void 0===a?void 0:a.call(s))])}}});a.Group=i,a.install=function(r){return r.component(a.name,a),r.component(i.name,i),r};
