import{i as r,t as n}from"./toNumber-901a1120.js";import{S as t}from"./vnode-337c6a8b.js";import{d as o}from"./isEqual-f3bbf050.js";function u(r,n){for(var t=-1,o=null==r?0:r.length,u=Array(o);++t<o;)u[t]=n(r[t],t,r);return u}var a=t?t.prototype:void 0,i=a?a.toString:void 0;function e(n){if("string"==typeof n)return n;if(o(n))return u(n,e)+"";if(r(n))return i?i.call(n):"";var t=n+"";return"0"==t&&1/n==-Infinity?"-0":t}function f(r,n,t){var o=-1,u=r.length;n<0&&(n=-n>u?0:u+n),(t=t>u?u:t)<0&&(t+=u),u=n>t?0:t-n>>>0,n>>>=0;for(var a=Array(u);++o<u;)a[o]=r[o+n];return a}function s(r){return function(n){return null==n?void 0:n[r]}}function c(r){var t=function(r){return r?1/0===(r=n(r))||-1/0===r?17976931348623157e292*(r<0?-1:1):r==r?r:0:0===r?r:0}(r),o=t%1;return t==t?o?t-o:t:0}function l(r){return null==r?"":e(r)}export{s as a,f as b,e as c,c as d,u as e,l as t};
