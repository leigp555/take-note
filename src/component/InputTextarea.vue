<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { articleStore } from '@/store/article';

const store_article = articleStore();

// 组件创建时从本地获取上一次的文章正文数据
const { body } = storeToRefs(store_article);
const content = ref<string>('');

onMounted(() => {
  content.value = body.value;
});
// 获取输入框滚动条高度
const scrollArticle = (e: Event) => {
  const el = e.target as HTMLElement;
  store_article.$patch((store) => {
    store.scrollHeight = el!.scrollTop;
  });
};
// 获取输入框的内容
const writeContent = () => {
  store_article.$patch((store) => {
    store.body = content.value;
  });
  store_article.saveLocal();
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
