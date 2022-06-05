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
.read-article {
  height: 100%;
  position: relative;
  .article-read {
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: scroll;
    height: 100%;
    padding: 20px 20px 10px 20px;
    width: 100%;
    background-color: #ffffff;
    border: none;
    outline: none;
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      background-color: #c3c3c3;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
}
</style>
