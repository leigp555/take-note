var t="object"==typeof global&&global&&global.Object===Object&&global,e="object"==typeof self&&self&&self.Object===Object&&self,o=t||e||Function("return this")(),n=o.Symbol,r=Object.prototype,l=r.hasOwnProperty,c=r.toString,a=n?n.toStringTag:void 0;var i=Object.prototype.toString;var b=n?n.toStringTag:void 0;function u(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":b&&b in Object(t)?function(t){var e=l.call(t,a),o=t[a];try{t[a]=void 0;var n=!0}catch(i){}var r=c.call(t);return n&&(e?t[a]=o:delete t[a]),r}(t):function(t){return i.call(t)}(t)}function f(t,e){return function(o){return t(e(o))}}function j(t){return null!=t&&"object"==typeof t}export{n as S,u as b,t as f,j as i,f as o,o as r};
