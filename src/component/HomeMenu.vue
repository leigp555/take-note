<script lang="ts" setup>
import { ref, createVNode, computed, watchEffect } from 'vue';
import {
  PlusCircleOutlined,
  SearchOutlined,
  LoginOutlined,
  ToolOutlined,
  FolderOpenOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { Modal } from 'ant-design-vue';
import Icon from '@/component/Icon.vue';
import { userStore } from '@/store/user';

const router = useRouter();
const store_user = userStore();

const selectedKeys = ref<string[]>(
  JSON.parse(window.localStorage.getItem('position')!).position || ['1']
);
const avatar_url = computed(() => {
  return store_user.avatar_url;
});
watchEffect(() => {
  const str = JSON.stringify({ position: selectedKeys.value });
  window.localStorage.setItem('position', str);
});
const ok = () => {
  router.push('/login');
};
const confirm = () => {
  Modal.confirm({
    title: '退出',
    icon: createVNode(ExclamationCircleOutlined),
    content: '确认退出？',
    okText: '确认',
    cancelText: '取消',
    onOk: ok
  });
};
</script>

<template>
  <div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="true"
      class="menu-wrap"
    >
      <section class="menu-inner-avatar">
        <a-tooltip placement="rightBottom">
          <template #title>
            <span>个人信息</span>
          </template>
          <div style="width: 100%; display: flex; justify-content: center">
            <router-link to="/info"><a-avatar :src="avatar_url" /></router-link>
          </div>
        </a-tooltip>
      </section>

      <a-menu-item key="1">
        <template #icon>
          <router-link to="/">
            <PlusCircleOutlined />
          </router-link>
        </template>
        <span>创建文章</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <router-link to="/articles">
            <FolderOpenOutlined />
          </router-link>
        </template>
        <span>文章管理</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <router-link to="/search">
            <SearchOutlined />
          </router-link>
        </template>
        <span>文章检索</span>
      </a-menu-item>
      <a-menu-item key="4">
        <template #icon>
          <router-link to="/canvas">
            <Icon name="huaban" size="small" />
          </router-link>
        </template>
        <span>画板</span>
      </a-menu-item>
      <a-menu-item key="5">
        <template #icon>
          <router-link to="/tools">
            <ToolOutlined />
          </router-link>
        </template>
        <span>工具</span>
      </a-menu-item>

      <a-menu-item key="6" style="position: relative; bottom: -45%">
        <template #icon>
          <div @click="confirm">
            <LoginOutlined />
          </div>
        </template>
        <span>退出</span>
      </a-menu-item>
    </a-menu>
  </div>
  <div>
    <a-modal> </a-modal>
  </div>
</template>

<style lang="scss" scoped>
.menu-wrap {
  height: 100vh;
  padding-top: 50px;
  overflow: hidden;
  .menu-inner-avatar {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
}
</style>
