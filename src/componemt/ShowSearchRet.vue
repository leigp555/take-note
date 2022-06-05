<script lang="ts" setup>
import SearchNull from '@/componemt/SearchNull.vue'
import ArticlePage from '@/componemt/ArticlePage.vue'
</script>

<template>
  <div class="wrap">
    <section class="ret">
      <SearchNull />
      <ArticlePage />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  height: 100%;
  position: relative;
  .ret {
    position: absolute;
    max-height: 100%;
    top: 0;
    left: 0;
    flex-grow: 1;
    width: 100%;
    padding: 10vh 20vw;
    overflow-y: scroll;
    overflow-x: hidden;
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
