<script lang="ts" setup>
import { computed, ref, toRefs, watchEffect } from 'vue';
import * as marked from 'marked';

interface Position {
  scrollPosition: number;
  inputContent: string;
}
const props = defineProps<Position>();
const { scrollPosition, inputContent } = toRefs(props);

const outputContent = computed(() => {
  // @ts-ignore
  return marked.parse(inputContent.value);
});
const outputArticle = ref<HTMLInputElement>();
watchEffect(() => {
  if (outputArticle.value) {
    outputArticle.value.scrollTop = scrollPosition.value;
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
