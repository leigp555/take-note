<script lang="ts" setup>
import HomeMenu from '@/componemt/HomeMenu.vue'
import ShowArticle from '@/componemt/ShowArticle.vue'
</script>
<template>
  <div class="wrapper">
    <section class="section-menu">
      <HomeMenu />
    </section>
    <section class="section-main">
      <ShowArticle />
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
