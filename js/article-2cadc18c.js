import{M as t}from"./index-51d32f2b.js";import{h as e,T as i}from"./axios-0933a447.js";const r=t("articleInfo",{state:()=>({title:"",body:"",scrollHeight:0,tabNum:"1"}),getters:{},actions:{getLastArticle(){let t={title:"",body:""};try{t=JSON.parse(window.localStorage.getItem("temp_save")),this.title=t.title,this.body=t.body}catch(e){this.title="",this.body=""}},saveLocal(){const t=JSON.stringify({title:this.title,body:this.body});window.localStorage.setItem("temp_save",t)},async createArticle(t={isPublic:!1,state:"normal"}){try{const{article:i}=await e("/article","POST",{title:this.title,body:this.body,isPublic:t.isPublic,state:t.state}),r=JSON.stringify({title:"",body:""});return this.title="",this.body="",this.scrollHeight=0,window.localStorage.setItem("temp_save",r),Promise.resolve(i)}catch(i){return Promise.reject(i)}},continueEdit(t){this.getOneArticle(t).then((e=>{this.title=e.articles.title,this.body=e.articles.body,this.saveLocal(),this.deleteArticle(t).catch((()=>{}))})).catch((()=>{i("error","请重试",2e3)}))},async deleteArticle(t){try{const{msg:i}=await e("/article/delete","POST",{identity_number:t.identity_number});return Promise.resolve({msg:i})}catch(i){return Promise.reject(i)}},async updateArticle(t){try{const{msg:i}=await e("/article","PATCH",{identity_number:t.identity_number,owner:t.owner,title:t.title,body:t.body,isPublic:t.isPublic,state:t.state});return Promise.resolve({msg:i})}catch(i){return Promise.reject(i)}},async getAllArticle(t){try{const i=await e("/article/all","GET",{offset:t.offset,limit:t.limit});return Promise.resolve({articles:i.articles})}catch(i){return Promise.reject(i)}},async getOneArticle(t){try{const i=await e("/article/identify","GET",{identity_number:t.identity_number});return Promise.resolve({articles:i.articles[0]})}catch(i){return Promise.reject(i)}},async getFavoriteArticle(t){try{const i=await e("/article/favorite","GET",{offset:t.offset,limit:t.limit});return Promise.resolve({articles:i})}catch(i){return Promise.reject(i)}},async getDeletedArticle(t){try{const i=await e("/article/deleted","GET",{offset:t.offset,limit:t.limit});return Promise.resolve({articles:i})}catch(i){return Promise.reject(i)}},async searchArticle(t){try{const i=await e("/article/search","GET",{keyword:t.keyword,offset:t.offset,limit:t.limit});return Promise.resolve({articles:i.articles})}catch(i){return Promise.reject(i)}}}});export{r as a};
