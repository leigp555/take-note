import{_ as a,d as e,a7 as s,r as t,o as r,e as i,f as l,a1 as d}from"./index-461f95cc.js";import{p as c}from"./marked.esm-3fd1c616.js";import{a as n}from"./article-f5e48944.js";import"./axios-10bb5b34.js";import"./default-add53953.js";import"./vnode-89a287a7.js";const o={class:"cat_wrap"},m={class:"title"},p={class:"read-article"},f=["innerHTML"];var u=a(e({__name:"CatArticle",setup(a){const e=s(),u=n(),v=e.params.articleId,_=t(),b=t();return u.getOneArticle({identity_number:v}).then((a=>{_.value=a.articles.title,b.value=c(a.articles.body||"")})),(a,e)=>(r(),i("div",o,[l("div",m,[l("h2",null,d(_.value),1)]),l("div",p,[l("div",{class:"article-read",contenteditable:"false",innerHTML:b.value},null,8,f)])]))}}),[["__scopeId","data-v-f1da57d8"]]);export{u as default};
