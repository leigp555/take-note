<script lang="ts" setup>
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { onMounted, ref } from 'vue';
import { articleStore } from '@/store/article';

const store_article = articleStore();
interface Article {
  owner: string;
  title: string;
  body: string;
  state: string;
  isPublic: string;
  identity_number: string;
}
const articleDate = ref<Article[]>();
onMounted(() => {
  store_article.getAllArticle({ offset: 0, limit: 1000 }).then((res) => {
    articleDate.value = res.articles;
  });
});
</script>

<template>
  <div class="wrap-list">
    <a-timeline mode="alternate">
      <a-timeline-item v-for="i in articleDate" :key="i.identity_number">
        <template #dot><ClockCircleOutlined style="font-size: 14px" /></template>
        <router-link :to="`/cat/${i.identity_number}`">{{ i.title }}</router-link>
      </a-timeline-item>
      <a-timeline-item> 欢迎使用note </a-timeline-item>
    </a-timeline>
  </div>
</template>

<style lang="scss" scoped>
.wrap-list {
  max-height: 100%;
  width: 100%;
}
</style>
