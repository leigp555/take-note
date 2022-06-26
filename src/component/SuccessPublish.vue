<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { articleStore } from '@/store/article';

const router = useRouter();
const route = useRoute();
const store_article = articleStore();
const params = route.params.articleId as string;
const cat = () => {
  router.push(`/cat/${params}`);
};
const continue_edit = () => {
  store_article.continueEdit({ identity_number: params });
  router.push('/');
};
</script>
<template>
  <div class="success-publish">
    <a-result status="success" title="成功发布" sub-title="等待审核">
      <template #extra>
        <a-button key="console" type="primary" @click="cat">查看文章</a-button>
        <a-button key="buy" @click="continue_edit">继续编辑</a-button>
      </template>
    </a-result>
  </div>
</template>

<style lang="scss" scoped>
.success-publish {
  width: 100%;
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
