<script lang="ts" setup>
import { ref } from 'vue';
import { useCreateArticle } from '@/store/createArticle';

const store = useCreateArticle();
const content = ref<string>('');

// 获取输入框滚动条高度
const scrollArticle = (e: Event) => {
  const el = e.target as HTMLElement;
  store.$patch((store) => {
    store.scrollPosition = el!.scrollTop;
  });
};
// 获取输入框的内容
const writeContent = (e: InputEvent) => {
  const el = e.target as HTMLElement;
  store.$patch((store) => {
    store.newArticle = content.value;
  });
  el!.scrollTop = 9999;
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
$articleInnnerPadding: (20px 10px 40px 10px);
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
