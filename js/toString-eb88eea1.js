import{i as r,t as n}from"./toNumber-86f7b4ba.js";import{S as t}from"./vnode-ec8f75b2.js";import{d as o}from"./isEqual-3655bff4.js";function u(r,n){for(var t=-1,o=null==r?0:r.length,u=Array(o);++t<o;)u[t]=n(r[t],t,r);return u}var i=t?t.prototype:void 0,a=i?i.toString:void 0;function f(n){if("string"==typeof n)return n;if(o(n))return u(n,f)+"";if(r(n))return a?a.call(n):"";var t=n+"";return"0"==t&&1/n==-Infinity?"-0":t}function e(r,n,t){var o=-1,u=r.length;n<0&&(n=-n>u?0:u+n),(t=t>u?u:t)<0&&(t+=u),u=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(u);++o<u;)i[o]=r[o+n];return i}function s(r){return function(n){return null==n?void 0:n[r]}}function c(r){var t=function(r){return r?1/0===(r=n(r))||-1/0===r?17976931348623157e292*(r<0?-1:1):r==r?r:0:0===r?r:0}(r),o=t%1;return t==t?o?t-o:t:0}function l(r){return null==r?"":f(r)}export{s as a,e as b,f as c,c as d,u as e,l as t};
