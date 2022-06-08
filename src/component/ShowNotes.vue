<template>
  <div class="list-wrap">
    <a-tabs v-model:activeKey="activeKey" centered style="border: none; outline: none">
      <a-tab-pane key="1" tab="时间轴"> </a-tab-pane>
      <a-tab-pane key="2" tab="文章列表" force-render> </a-tab-pane>
    </a-tabs>
    <div class="wrap">
      <section class="section-item">
        <div class="article-list">
          <Component :is="component.vNode" :key="component.id" />
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import TimeLine from '@/component/TimeLine.vue';
import ArticlePage from '@/component/ArticlePage.vue';

const activeKey = ref<string>('1');
const component = computed(() => {
  return activeKey.value === '1'
    ? { vNode: TimeLine, id: 'TimeLine' }
    : { vNode: ArticlePage, id: 'ArticlePage' };
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
