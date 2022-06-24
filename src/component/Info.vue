<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import InfoDetail from '@/component/InfoDetail.vue';
import { useGlobalStore } from '@/store/global';
import transImg from '@/utils/transApi';

const globalStore = useGlobalStore();
const { username, email } = storeToRefs(globalStore);

const changeAvatar = (e: Event) => {
  transImg.fileToUrl(e.target.files[0]).then((res) => {
    console.log(res);
  });
};
</script>

<template>
  <div class="info-wrap">
    <section style="margin-bottom: 20px; position: relative" class="section-avatar">
      <a-avatar src="https://joeschmoe.io/api/v1/random" :size="70" />
      <form style="position: absolute">
        <input
          type="file"
          name="avatar"
          style="width: 150px; height: 150px; opacity: 0"
          accept=".png, .jpg, .jpeg"
          @change="changeAvatar"
        />
      </form>
      点击更换头像
    </section>
    <InfoDetail title="用户名" :content="username" iconname="qing" />
    <InfoDetail title="邮箱" :content="email" iconname="qing" />
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
