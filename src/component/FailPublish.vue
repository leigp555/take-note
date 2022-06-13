<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const back = () => {
  router.back();
};
</script>
<template>
  <div class="success-publish">
    <a-result status="warning" title="发布失败，请重新尝试">
      <template #extra>
        <a-button key="console" type="primary" @click="back">返回</a-button>
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
