<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import * as marked from 'marked';
import { articleStore } from '@/store/article';

const route = useRoute();
const store_article = articleStore();
const params = route.params.articleId as string;
const outputTitle = ref<string>();
const outputContent = ref<string>();
store_article.getOneArticle({ identity_number: params }).then((res) => {
  outputTitle.value = res.articles.title;
  // @ts-ignore
  outputContent.value = marked.parse(res.articles.body || '');
});
</script>

<template>
  <div class="cat_wrap">
    <div class="title">
      <h2>{{ outputTitle }}</h2>
    </div>
    <div class="read-article">
      <div class="article-read" contenteditable="false" v-html="outputContent"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/golbalScroll';
$articleBackground: #ffffff;
$articleInnnerPadding: (20px 20px 40px 20px);
.cat_wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    background-color: $articleBackground;
  }
  .read-article {
    position: relative;
    flex-grow: 10;
    .article-read {
      position: absolute;
      top: 0;
      left: 0;
      overflow-y: scroll;
      height: 100%;
      padding: $articleInnnerPadding;
      width: 100%;
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
}
</style>
