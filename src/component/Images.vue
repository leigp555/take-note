<template>
  <div class="img_wrap">
    <ol class="inner scroll_bar">
      <li v-for="item in listData" :key="item.identity_number">
        <a-image :width="200" :src="item.path"> </a-image>
        <p>复制链接:</p>
        <span>{{ item.path }}</span>
      </li>
    </ol>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { canvasStore } from '@/store/canvasImg';

interface Img {
  owner: string;
  path: string;
  identity_number: string;
  createdAt: string;
  updatedAt: string;
}
const listData = ref<Img[]>([]);
const store_canvas = canvasStore();
store_canvas.getAllImg({ offset: 0, limit: 5 }).then((res) => {
  if (res) {
    listData.value = res.images;
  }
});
</script>

<style lang="scss">
@import 'src/style/golbalScroll';
.ant-pagination {
  display: flex;
  justify-content: center;
}
.img_wrap {
  position: relative;
  .inner {
    width: 100%;
    max-height: 100vh;
    position: absolute;
    overflow-y: scroll;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
}
</style>
