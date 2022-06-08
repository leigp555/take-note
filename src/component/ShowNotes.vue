<template>
  <div class="wrap">
    <section class="section-item">
      <div class="timeline"><TimeLine /></div>
      <div class="article-list"><ArticlePage /></div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import TimeLine from '@/component/TimeLine.vue';
import ArticlePage from '@/component/ArticlePage.vue';
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  position: relative;
  //border: 10px solid red;
  .section-item {
    padding: 80px 0;
    position: absolute;
    max-height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    .timeline {
      flex-grow: 10;
      max-width: 800px;
    }
    .article-list {
      flex-grow: 10;
      max-width: 800px;
    }
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
