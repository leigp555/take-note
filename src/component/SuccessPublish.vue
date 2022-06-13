<script setup lang="ts"></script>
<template>
  <div class="success-publish">
    <a-result status="success" title="成功发布" sub-title="等待审核">
      <template #extra>
        <a-button key="console" type="primary">查看文章</a-button>
        <a-button key="buy">继续编辑</a-button>
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
