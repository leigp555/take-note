<template>
  <div class="list-wrap">
    <a-tabs v-model:activeKey="activeKey" style="border: none; outline: none">
      <a-tab-pane key="1" tab="时间轴"> </a-tab-pane>
      <a-tab-pane key="2" tab="全部文章"> </a-tab-pane>
      <a-tab-pane key="3" tab="收藏夹"> </a-tab-pane>
      <a-tab-pane key="4" tab="草稿"> </a-tab-pane>
      <a-tab-pane key="5" tab="回收站"> </a-tab-pane>
    </a-tabs>
    <div class="wrap">
      <section class="section-item">
        <div class="article-list">
          <TimeLine v-if="activeKey === '1'" />
          <ArticlePage kind="allArticle" v-else-if="activeKey === '2'" />
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import TimeLine from '@/component/TimeLine.vue';
import ArticlePage from '@/component/ArticlePage.vue';
import { articleStore } from '@/store/article';

const store_article = articleStore();
const { tabNum } = storeToRefs(store_article);
const activeKey = ref<string>(tabNum.value);
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
