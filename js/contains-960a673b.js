import{s as e}from"./Portal-55d80112.js";function t(t,n,r,o){if(t&&t.addEventListener){var s=o;void 0!==s||!e||"touchstart"!==n&&"touchmove"!==n&&"wheel"!==n||(s={passive:!1}),t.addEventListener(n,r,s)}return{remove:function(){t&&t.removeEventListener&&t.removeEventListener(n,r)}}}function n(e,t){return!!e&&e.contains(t)}export{t as a,n as c};