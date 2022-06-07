<template>
  <div></div>
  <button @click="exportFile">xxx</button>
  <img src="../assets/logo.png" id="yyy" alt="" />
</template>

<script setup lang="ts">
function dataURLtoBlob(dataurl) {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
const exportFile = () => {
  const createCvs = document.createElement('canvas');
  const yyy = document.getElementById('yyy');
  const ctx = createCvs.getContext('2d');
  createCvs.width = 200;
  createCvs.height = 200;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 200, 200);
  ctx.drawImage(yyy, 0, 0, 200, 200);
  document.body.appendChild(createCvs);
  const filename = 'xxx.png';
  const x = createCvs.toDataURL('image/png', 1.0);
  const blob = dataURLtoBlob(x);
  console.log(x);
  yyy.src = x;
  if ('download' in document.createElement('a')) {
    // 支持a标签download的浏览器
    const link = document.createElement('a'); // 创建a标签
    link.download = filename; // a标签添加属性
    link.style.display = 'none';
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click(); // 执行下载
    URL.revokeObjectURL(link.href); // 释放url
    document.body.removeChild(link); // 释放标签
  } else {
    // 其他浏览器
    navigator.msSaveBlob(blob, filename);
  }
};
</script>
