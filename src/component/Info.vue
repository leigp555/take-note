<script lang="ts" setup>
import InfoDetail from '@/component/InfoDetail.vue';
</script>

<template>
  <div class="info-wrap">
    <section style="margin-bottom: 20px" class="section-avatar">
      <a-avatar src="https://joeschmoe.io/api/v1/random" :size="70" />
      <a-button type="link" style="color: #001529">点击更换头像</a-button>
    </section>
    <InfoDetail title="用户名" content="iugdg" iconname="qing" />
    <InfoDetail title="邮箱" content="iugdg" iconname="qing" />
    <InfoDetail title="性别" content="男" iconname="qing" />
  </div>
</template>

<style lang="scss" scoped>
.info-wrap {
  width: 100%;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 20px;
  .section-avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
}
</style>
