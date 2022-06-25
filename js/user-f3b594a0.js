import{M as e}from"./index-c4afe18c.js";import{h as a}from"./axios-dfe30fd5.js";const r=e("userInfo",{state:()=>({username:"",email:"",avatar_url:""}),getters:{},actions:{async login(e){try{const{username:r,email:t,token:s}=await a("/login","POST",{username:e.user,password:e.password});return this.username=r,this.email=t,window.localStorage.setItem("_AUTH_TOKEN",s),Promise.resolve({username:r,email:t,token:s})}catch(r){return Promise.reject(r)}},async getSecurityCode(e){try{const{msg:r}=await a("/securityCode","post",{email:e.email});return Promise.resolve({msg:r})}catch(r){return Promise.reject(r)}},async register(e){try{const{msg:r}=await a("/register","post",{username:e.username,email:e.email,password:e.password,securityCode:e.securityCode});return Promise.resolve({msg:r})}catch(r){return Promise.reject(r)}},async getUserInfo(){try{const{username:e,email:r}=await a("/user/info","GET");return this.username=e,this.email=r,Promise.resolve({username:e,email:r})}catch(e){return Promise.reject(e)}},getLastAvatar(){this.avatar_url=window.localStorage.getItem("avatar")||""},async getUserAvatar(){try{const{avatar_url:e}=await a("/avatar","GET");return this.avatar_url=e,window.localStorage.setItem("avatar",e),Promise.resolve({avatar_url:e})}catch(e){return Promise.reject(e)}},async updateUserAvatar(e){try{const{avatar_url:r}=await a("/avatar/update","POST",{avatar_file:e.avatar_file});return this.avatar_url=r,window.localStorage.setItem("avatar",r),Promise.resolve({avatar_url:r})}catch(r){return Promise.reject(r)}}}});export{r as u};
