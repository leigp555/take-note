import{d as e,m as t,q as n,s as o,F as l}from"./index-7c775911.js";const a=o("div",null,null,-1),c=o("img",{src:"https://leigp555.github.io/take-note/png/logo-5041849f.png",id:"yyy",alt:""},null,-1),d=e({__name:"Test",setup(e){const d=()=>{const e=document.createElement("canvas"),t=document.getElementById("yyy"),n=e.getContext("2d");e.width=200,e.height=200,n.fillStyle="white",n.fillRect(0,0,200,200),n.drawImage(t,0,0,200,200),document.body.appendChild(e);const o="xxx.png",l=e.toDataURL("image/png",1),a=function(e){const t=e.split(","),n=t[0].match(/:(.*?);/)[1],o=atob(t[1]);let l=o.length;const a=new Uint8Array(l);for(;l--;)a[l]=o.charCodeAt(l);return new Blob([a],{type:n})}(l);if(t.src=l,"download"in document.createElement("a")){const e=document.createElement("a");e.download=o,e.style.display="none",e.href=URL.createObjectURL(a),document.body.appendChild(e),e.click(),URL.revokeObjectURL(e.href),document.body.removeChild(e)}else navigator.msSaveBlob(a,o)};return(e,i)=>(t(),n(l,null,[a,o("button",{onClick:d},"xxx"),c],64))}});export{d as default};
