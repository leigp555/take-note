<script lang="ts" setup>
import { ref } from 'vue';
import ArticlePage from '@/component/ArticlePage.vue';
import { articleStore } from '@/store/article';

const store_article = articleStore();
const keyword = ref<string>('');

const onSearch = () => {
  store_article.searchArticle({ keyword: keyword.value, offset: 0, limit: 5 });
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
        <keep-alive>
          <component
            :is="ArticlePage"
            kind="search"
            :keyword="keyword"
            :key="ArticlePage"
          />
        </keep-alive>
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
