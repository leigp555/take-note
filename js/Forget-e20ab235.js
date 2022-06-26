import"./default-33ec26aa.js";import{F as e,_ as s}from"./index-5ad4594b.js";import"./index-f6fe0ed3.js";/* empty css              */import{I as a,_ as t}from"./index-b9e97d84.js";import{B as r}from"./index-29fa27b9.js";import{_ as i,d as o,u as l,y as m,i as d,j as n,k as u,c,l as p,p as f,q as g,a0 as y,s as _,a2 as j}from"./index-cbb612d7.js";import{T as b}from"./axios-fb5b44d7.js";import{u as v}from"./user-abde3c75.js";import"./isEqual-f55676e6.js";import"./isObjectLike-9a344489.js";import"./_flatRest-401f1139.js";import"./toNumber-622dd889.js";import"./toString-328a5423.js";import"./toInteger-ee57add8.js";import"./collapseMotion-406221c2.js";import"./FormItemContext-d4f71d85.js";import"./raf-291669f5.js";import"./useSize-22089293.js";import"./styleChecker-02f966e5.js";import"./vnode-4ed7f679.js";import"./omit-02a4706d.js";const h={class:"register-section-wrap"},k=(e=>(f("data-v-ec722654"),e=e(),g(),e))((()=>u("section",{class:"section-title"},[u("h3",{style:{"text-align":"center"}},"密码重置")],-1))),C={class:"section-from"},w={class:"identifying-code"},x=_("获取验证码"),z={class:"button-action"},A=_(" 重置 "),Z=_(" 返回登录 ");var I=i(o({__name:"Forget",setup(i){const o=l(),f=v(),g=m({email:"",securityCode:"",password:"",checkPass:""}),I=m({timing:!1,time:60}),P=[{required:!0,message:"请填写邮箱"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"请填写正确的邮箱",trigger:"blur"}],q=[{required:!0,message:"请填写密码"},{pattern:/^[a-zA-Z0-9_]{6,16}$/,message:"请输入6到16位(字母，数字，下划线)",trigger:"blur"}],$=[{required:!0,message:"验证密码"},{pattern:/^[a-zA-Z0-9_]{6,16}$/,message:"两次输入不一致",trigger:"blur"}],F=()=>{const e=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;if(g.email&&e.test(g.email)){b("success","验证码已发送",1500),I.timing=!0;const e=setInterval((()=>{I.time>0?I.time-=1:(I.timing=!1,I.time=60,window.clearInterval(e))}),1e3);f.getSecurityCode({email:g.email,type:"resetPass"}).catch((()=>{b("error","发送失败请重试")}))}else g.email&&!e.test(g.email)?b("error","邮箱格式有误"):b("error","请先填写邮箱")},U=()=>{f.resetPass({email:g.email,password:g.password,securityCode:g.securityCode}).then((()=>{b("success","密码已重置",1e3),setTimeout((()=>{o.push("/login")}),2e3)})).catch((()=>{b("error","密码重置失败",2e3)}))},S=()=>{o.push("/login")};return(i,o)=>{const l=a,m=s,f=r,b=t,v=e;return d(),n("div",h,[k,u("section",C,[c(v,{model:g,name:"normal_register",class:"register-form",onFinish:U},{default:p((()=>[c(m,{name:"email",rules:P},{default:p((()=>[c(l,{value:g.email,"onUpdate:value":o[0]||(o[0]=e=>g.email=e),placeholder:"邮箱"},null,8,["value"])])),_:1}),c(m,{name:"securityCode"},{default:p((()=>[u("div",w,[c(l,{value:g.securityCode,"onUpdate:value":o[1]||(o[1]=e=>g.securityCode=e),placeholder:"验证码"},null,8,["value"]),I.timing?(d(),y(f,{key:1,type:"primary",disabled:"",class:"identifying-code-button",onClick:F},{default:p((()=>[_(j(`${I.time} 秒后可获取`),1)])),_:1})):(d(),y(f,{key:0,type:"primary",class:"identifying-code-button",onClick:F},{default:p((()=>[x])),_:1}))])])),_:1}),c(m,{name:"password",rules:q},{default:p((()=>[c(b,{value:g.password,"onUpdate:value":o[2]||(o[2]=e=>g.password=e),placeholder:"输入新密码"},null,8,["value"])])),_:1}),c(m,{name:"checkPass",rules:$},{default:p((()=>[c(b,{value:g.checkPass,"onUpdate:value":o[3]||(o[3]=e=>g.checkPass=e),placeholder:"确认密码"},null,8,["value"])])),_:1}),c(m,null,{default:p((()=>[u("div",z,[c(f,{type:"primary","html-type":"submit",class:"register-form-button"},{default:p((()=>[A])),_:1}),c(f,{type:"primary",class:"register-form-button",style:{"background-color":"white"},onClick:S},{default:p((()=>[Z])),_:1})])])),_:1})])),_:1},8,["model"])])])}}}),[["__scopeId","data-v-ec722654"]]);export{I as default};
