import{_ as n,e,N as i}from"./default-639f8e2b.js";import{a as t,x as r,z as s}from"./index-adc9b0b9.js";var a=["xxxl","xxl","xl","lg","md","sm","xs"],c={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)",xxxl:"(min-width: 2000px)"},u=new Map,o=-1,d={},m={matchHandlers:{},dispatch:function(n){return d=n,u.forEach((function(n){return n(d)})),u.size>=1},subscribe:function(n){return u.size||this.register(),o+=1,u.set(o,n),n(d),o},unsubscribe:function(n){u.delete(n),u.size||this.unregister()},unregister:function(){var n=this;Object.keys(c).forEach((function(e){var i=c[e],t=n.matchHandlers[i];null==t||t.mql.removeListener(null==t?void 0:t.listener)})),u.clear()},register:function(){var i=this;Object.keys(c).forEach((function(t){var r=c[t],s=function(r){var s=r.matches;i.dispatch(n(n({},d),e({},t,s)))},a=window.matchMedia(r);a.addListener(s),i.matchHandlers[r]={mql:a,listener:s},s(a)}))}},x=Symbol("SizeProvider"),l=function(n){var e=r("configProvider",i),a=t((function(){return n.size||e.componentSize}));return s(x,a),a},f=function(n){return n?t((function(){return n.size})):r(x,t((function(){return"default"})))};export{m as R,l as a,a as r,f as u};
