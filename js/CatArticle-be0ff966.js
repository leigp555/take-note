import{_ as a,d as e,a9 as s,r as t,i as r,j as i,k as l,a1 as d}from"./index-51d32f2b.js";import{p as c}from"./marked.esm-3fd1c616.js";import{a as n}from"./article-2cadc18c.js";import"./axios-0933a447.js";import"./default-6e83181f.js";import"./vnode-13f0d3da.js";const o={class:"cat_wrap"},m={class:"title"},p={class:"read-article"},f=["innerHTML"];var u=a(e({__name:"CatArticle",setup(a){const e=s(),u=n(),v=e.params.articleId,j=t(),_=t();return u.getOneArticle({identity_number:v}).then((a=>{j.value=a.articles.title,_.value=c(a.articles.body||"")})),(a,e)=>(r(),i("div",o,[l("div",m,[l("h2",null,d(j.value),1)]),l("div",p,[l("div",{class:"article-read",contenteditable:"false",innerHTML:_.value},null,8,f)])]))}}),[["__scopeId","data-v-f1da57d8"]]);export{u as default};
