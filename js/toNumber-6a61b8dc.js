import{W as t,X as r,Y as e,Z as a}from"./default-b9bd022c.js";import{b as n}from"./isEqual-cc802ba0.js";import{i as s,b as o}from"./vnode-7c4b8857.js";function f(n){return t(n)||r(n)||e(n)||a()}function i(t){return"symbol"==typeof t||s(t)&&"[object Symbol]"==o(t)}var u=/\s/;var c=/^\s+/;function b(t){return t?t.slice(0,function(t){for(var r=t.length;r--&&u.test(t.charAt(r)););return r}(t)+1).replace(c,""):t}var l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt;function y(t){if("number"==typeof t)return t;if(i(t))return NaN;if(n(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=n(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=b(t);var e=p.test(t);return e||m.test(t)?v(t.slice(2),e?2:8):l.test(t)?NaN:+t}export{f as _,i,y as t};
