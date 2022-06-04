<script lang="ts" setup>
import { ref, toRefs, watchEffect } from 'vue'

interface Position {
  scrollPosition: number
  inputContent: string
}
const props = defineProps<Position>()
const { scrollPosition, inputContent } = toRefs(props)
const outputArticle = ref<HTMLInputElement>()
watchEffect(() => {
  if (outputArticle.value) {
    outputArticle.value.scrollTop = scrollPosition.value
  }
})
</script>

<template>
  <div class="read-article">
    <textarea
      class="article-read"
      ref="outputArticle"
      contenteditable="false"
      v-model="inputContent"
    ></textarea>
  </div>
</template>

<style lang="scss" scoped>
.read-article {
  display: flex;
  height: 100%;
  .article-read {
    width: 100%;
    justify-items: stretch;
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
