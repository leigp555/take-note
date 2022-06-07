<script lang="ts" setup>
import { ref } from 'vue';

const emits = defineEmits(['update:scrollPosition', 'update:inputContent']);
const content = ref<string>('');
const scrollArticle = (e: Event) => {
  const el = e.target as HTMLElement;
  emits('update:scrollPosition', el!.scrollTop);
};
const writeContent = (e: InputEvent) => {
  const el = e.target as HTMLElement;
  emits('update:inputContent', content.value);
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
.write-article-wrap {
  height: 100%;
  display: flex;
  position: relative;
  .article-write {
    padding: 20px 10px 40px 10px;
    width: 100%;
    justify-items: stretch;
    background-color: #f5f5f5;
    border: none;
    outline: none;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
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
