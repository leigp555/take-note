<script lang="ts" setup>
import HomeMenu from '@/componemt/HomeMenu.vue'
// 添加文章
// import AddArticle from '@/componemt/AddArticle.vue'
// 展示所有文章
// import ShowNotes from '@/componemt/ShowNotes.vue'
// 展示检索内容
import ShowSearchRet from '@/componemt/ShowSearchRet.vue'
</script>
<template>
  <div class="wrapper">
    <section class="section-menu">
      <HomeMenu />
    </section>
    <section class="section-main">
      <!--      <AddArticle />-->
      <!--      <ShowNotes />-->
      <ShowSearchRet />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  .section-main {
    flex-grow: 1;
    flex-shrink: 1;
  }
}
</style>
