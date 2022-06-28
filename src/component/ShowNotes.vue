<template>
  <div class="list-wrap">
    <a-tabs v-model:activeKey="activeKey" centered style="border: none; outline: none">
      <a-tab-pane key="1" tab="时间轴"> </a-tab-pane>
      <a-tab-pane key="2" :tab="tag.tag1"> </a-tab-pane>
      <a-tab-pane key="3" :tab="tag.tag2"> </a-tab-pane>
      <a-tab-pane key="4" :tab="tag.tag3"> </a-tab-pane>
      <a-tab-pane key="5" :tab="tag.tag4"> </a-tab-pane>
    </a-tabs>
    <div class="wrap">
      <section class="section-item">
        <div class="article-list">
          <TimeLine v-if="activeKey === '1'" />
          <ArticlePage kind="allArticle" v-else-if="activeKey === '2'" />
          <ArticlePage kind="favorite" v-else-if="activeKey === '3'" />
          <ArticlePage kind="draft" v-else-if="activeKey === '4'" />
          <ArticlePage kind="deleted" v-else-if="activeKey === '5'" />
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import TimeLine from '@/component/TimeLine.vue';
import ArticlePage from '@/component/ArticlePage.vue';
import { articleStore } from '@/store/article';

const store_article = articleStore();
const { tabNum } = storeToRefs(store_article);
const activeKey = ref<string>(tabNum.value);

const { num } = storeToRefs(store_article);
// 获取各个分类的文章总数
onMounted(() => {
  store_article.getNumArticle({ kind: 'allArticle' });
  store_article.getNumArticle({ kind: 'draft' });
  store_article.getNumArticle({ kind: 'deleted' });
  store_article.getNumArticle({ kind: 'favorite' });
});
// 计算出各个分类的标签
const tag = computed(() => {
  return {
    tag1: `全部文章(${num.value.allArticle})`,
    tag2: `收藏夹(${num.value.favorite})`,
    tag3: `草稿(${num.value.draft})`,
    tag4: `回收站(${num.value.deleted})`
  };
});
watchEffect(() => {
  store_article.$patch((state) => {
    state.tabNum = activeKey.value;
  });
});
</script>

<style lang="scss" scoped>
@import '../style/sectionLayout';
.list-wrap {
  padding: 50px 0 60px 0;
  height: 100%;
}
</style>

<style lang="scss">
@import '../style/antd.scss';
</style>
