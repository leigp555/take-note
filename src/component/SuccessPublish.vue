<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const cat = () => {
  const params = route.params.articleId;
  router.push(`/cat/${params}`);
};
const edit = () => {
  router.push('/');
};
</script>
<template>
  <div class="success-publish">
    <a-result status="success" title="成功发布" sub-title="等待审核">
      <template #extra>
        <a-button key="console" type="primary" @click="cat">查看文章</a-button>
        <a-button key="buy" @click="edit">继续编辑</a-button>
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
