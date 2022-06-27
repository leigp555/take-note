<script lang="ts" setup>
import { ref } from 'vue';
import ArticlePage from '@/component/ArticlePage.vue';

const keyword = ref<string>('');

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', keyword.value);
};
</script>

<template>
  <div class="search_input">
    <a-input-search
      v-model:value="keyword"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
  </div>
  <div class="wrap">
    <section class="section-item">
      <div class="article-list">
        <ArticlePage kind="search" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/sectionLayout';

.search_input {
  max-width: 800px;
  position: relative;
  top: 10vh;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 10vh;
}
</style>
