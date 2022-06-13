<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCreateArticle } from '@/store/createArticle';

const store = useCreateArticle();
// 组件创建时从本地获取上一次的文章数据
store.getArticle();
const { initArticle } = storeToRefs(store);
const content = ref<string>(initArticle.value);
// 获取输入框滚动条高度
const scrollArticle = (e: Event) => {
  const el = e.target as HTMLElement;
  store.$patch((store) => {
    store.initScroll = el!.scrollTop;
  });
};
// 获取输入框的内容
const writeContent = () => {
  store.$patch((store) => {
    store.initArticle = content.value;
  });
  store.saveLocal();
};
</script>

<template>
  <div class="write-article-wrap">
    <textarea
      id="article-text"
      class="article-write"
      @scroll="scrollArticle"
      @input="writeContent"
      v-model="content"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
@import '../style/golbalScroll';
$articleBackground: #f5f5f5;
$articleInnnerPadding: (20px 10px 250px 10px);
.write-article-wrap {
  height: 100%;
  display: flex;
  position: relative;
  .article-write {
    padding: $articleInnnerPadding;
    width: 100%;
    justify-items: stretch;
    background-color: $articleBackground;
    border: none;
    outline: none;
    &::-webkit-scrollbar {
      @include scrollbar;
    }
    &::-webkit-scrollbar-thumb {
      @include scrollbarThumb;
    }
    &::-webkit-scrollbar-track {
      @include scrollbarTrack;
    }
  }
}
</style>
