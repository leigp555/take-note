<script lang="ts" setup>
import { onMounted } from 'vue';
import HomeMenu from '@/component/HomeMenu.vue';
import { userStore } from '@/store/user';

const store_user = userStore();
// 初始化获取用户的头像，用户名和邮箱
onMounted(() => {
  store_user.getUserInfo();
  store_user.getUserAvatar();
});
</script>
<template>
  <div class="wrapper">
    <section class="section-menu">
      <HomeMenu />
    </section>
    <section class="section-main">
      <router-view />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  .section-main {
    flex-grow: 10;
    flex-shrink: 10;
  }
}
</style>
