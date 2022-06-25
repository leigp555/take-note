<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import * as marked from 'marked';
import { storeToRefs } from 'pinia';
import { articleStore } from '@/store/article';

const store_article = articleStore();
const { body, scrollHeight } = storeToRefs(store_article);

const outputContent = computed(() => {
  // @ts-ignore
  return marked.parse(body.value || '');
});
const outputArticle = ref<HTMLInputElement>();
watchEffect(() => {
  if (outputArticle.value) {
    outputArticle.value.scrollTop = scrollHeight.value;
  }
});
</script>

<template>
  <div class="read-article">
    <div
      class="article-read"
      ref="outputArticle"
      contenteditable="false"
      v-html="outputContent"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/golbalScroll';
$articleBackground: #ffffff;
$articleInnnerPadding: (20px 20px 40px 20px);
.read-article {
  height: 100%;
  position: relative;
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
</style>
