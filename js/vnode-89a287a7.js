import{n as r,_ as s,p as a,l as o}from"./default-add53953.js";import{P as t}from"./index-461f95cc.js";function p(p){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=p;if(Array.isArray(p)&&(l=r(p)[0]),!l)return null;var c=t(l,n,i);return c.props=e?s(s({},c.props),n):c.props,a("object"!==o(c.props.class),"class must be string"),c}export{p as c};