import{W as t,X as r,Y as e,Z as a}from"./default-25c25008.js";import{b as f}from"./isEqual-3655bff4.js";import{i as n,b as s}from"./vnode-ec8f75b2.js";function o(f){return t(f)||r(f)||e(f)||a()}function i(t){return"symbol"==typeof t||n(t)&&"[object Symbol]"==s(t)}var u=/\s/;var c=/^\s+/;function l(t){return t?t.slice(0,function(t){for(var r=t.length;r--&&u.test(t.charAt(r)););return r}(t)+1).replace(c,""):t}var p=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt;function y(t){if("number"==typeof t)return t;if(i(t))return NaN;if(f(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=f(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=l(t);var e=b.test(t);return e||m.test(t)?v(t.slice(2),e?2:8):p.test(t)?NaN:+t}export{o as _,i,y as t};
