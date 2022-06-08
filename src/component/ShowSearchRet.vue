<script lang="ts" setup>
import { computed, ref } from 'vue';
import SearchNull from '@/component/SearchNull.vue';
import ArticlePage from '@/component/ArticlePage.vue';

const article = ref<boolean>(true);
const value = ref<string>('');

const component = computed(() => {
  return article.value
    ? { vNode: ArticlePage, id: 'ArticlePage' }
    : { vNode: SearchNull, id: 'SearchNull' };
});
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};
</script>

<template>
  <div class="search_input">
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
  </div>
  <div class="wrap">
    <section class="section-item">
      <div class="article-list">
        <Component :is="component.vNode" :key="component.id" />
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
