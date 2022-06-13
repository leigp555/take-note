<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import * as marked from 'marked';
import { storeToRefs } from 'pinia';
import { useCreateArticle } from '@/store/createArticle';

const store = useCreateArticle();
const { initArticle, initScroll } = storeToRefs(store);

const outputContent = computed(() => {
  // @ts-ignore
  return marked.parse(initArticle.value);
});
const outputArticle = ref<HTMLInputElement>();
watchEffect(() => {
  if (outputArticle.value) {
    outputArticle.value.scrollTop = initScroll.value;
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
