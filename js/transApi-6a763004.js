const e={fileToImg:e=>new Promise(((t,n)=>{const o=new Image,a=window.webkitURL||window.URL;if(a){const r=a.createObjectURL(e);o.onload=function(){t(o),a.revokeObjectURL(r)},o.onerror=function(e){n(e),a.revokeObjectURL(r)},o.src=r}else{const a=new FileReader;a.readAsDataURL(e),a.onerror=function(e){n(e)},a.onload=function(){o.src=a.result,o.onload=function(){t(o)}}}})),urlToImg:e=>new Promise(((t,n)=>{const o=new Image;o.src=e,o.onload=()=>{t(o)},o.onerror=e=>{n(e)}})),fileToUrl:e=>new Promise(((t,n)=>{const o=new FileReader;o.readAsDataURL(e),o.onerror=function(e){n(e)},o.onload=function(){t(o.result)}})),imageToCanvas:(e,t=100,n=100)=>{const o=document.createElement("canvas"),a=o.getContext("2d");return o.width=50,o.height=50,a.drawImage(e,0,0,e.naturalWidth,e.naturalHeight,0,0,t,n),o},canvasToUrl:(e,t,n,o,a)=>new Promise(((r,c)=>{const i=e.toDataURL(n||"image/png",t||1),d=new Image;d.src=i;const l=document.createElement("canvas"),s=l.getContext("2d");l.width=document.body.getBoundingClientRect().width,l.height=a,s.fillStyle=o||"white",s.fillRect(0,0,document.body.getBoundingClientRect().width,a),d.onload=()=>{s.drawImage(d,0,0,document.body.getBoundingClientRect().width,a),r(l.toDataURL(n||"image/png",t||1))},d.onerror=e=>{c(e)}})),canvasToImg:(e,t,n)=>new Promise(((o,a)=>{const r=e.toDataURL(n||"image",t||1),c=new Image;c.src=r,c.onload=()=>{o(c)},c.onerror=e=>{a(e)}})),dataURLtoBlob:e=>{const t=e.split(","),n=t[0].match(/:(.*?);/)[1],o=atob(t[1]);let a=o.length;const r=new Uint8Array(a);for(;a--;)r[a]=o.charCodeAt(a);return new Blob([r],{type:n})}};export{e as t};
