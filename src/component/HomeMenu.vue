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
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </section>

      <a-menu-item key="1">
        <template #icon>
          <router-link to="/">
            <PlusCircleOutlined />
          </router-link>
        </template>
        <span>添加</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <router-link to="allArticle">
            <FileTextOutlined />
          </router-link>
        </template>
        <span>文章</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <router-link to="/searchArticle">
            <SearchOutlined />
          </router-link>
        </template>
        <span>搜索</span>
      </a-menu-item>
      <a-menu-item key="4">
        <template #icon>
          <router-link to="/favorite">
            <HeartOutlined />
          </router-link>
        </template>
        <span>收藏</span>
      </a-menu-item>
      <a-menu-item key="5">
        <template #icon>
          <router-link to="/tools">
            <ToolOutlined />
          </router-link>
        </template>
        <span>工具</span>
      </a-menu-item>
      <a-menu-item key="6" style="position: relative; bottom: -40%">
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
<script lang="ts" setup>
import { ref, createVNode } from 'vue';
import {
  PlusCircleOutlined,
  SearchOutlined,
  LoginOutlined,
  HeartOutlined,
  ToolOutlined,
  FileTextOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { Modal } from 'ant-design-vue';

const router = useRouter();
const selectedKeys = ref<string[]>(['1']);

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
