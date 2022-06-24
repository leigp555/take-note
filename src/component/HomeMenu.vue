<script lang="ts" setup>
import { ref, createVNode, computed } from 'vue';
import {
  DeleteOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  LoginOutlined,
  HeartOutlined,
  ToolOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { Modal } from 'ant-design-vue';
import Icon from '@/component/Icon.vue';
import { useGlobalStore } from '@/store/global';

const router = useRouter();
const globalStore = useGlobalStore();

const selectedKeys = ref<string[]>(['1']);
const avatar_url = computed(() => {
  return globalStore.avatar_url;
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
        <span>添加</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <folder-open-outlined />
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="2"
          ><template #icon>
            <router-link to="allArticle">
              <FileTextOutlined />
            </router-link>
          </template>
          <span>文章</span></a-menu-item
        >
        <a-menu-item key="3">
          <template #icon>
            <router-link to="/searchArticle">
              <SearchOutlined />
            </router-link>
          </template>
          <span>搜索</span></a-menu-item
        >
        <a-menu-item key="4">
          <template #icon>
            <router-link to="/favorite">
              <HeartOutlined />
            </router-link>
          </template>
          <span>收藏</span></a-menu-item
        >
        <a-menu-item key="5">
          <template #icon>
            <router-link to="/recycle">
              <DeleteOutlined />
            </router-link>
          </template>
          <span>回收站</span></a-menu-item
        >
      </a-sub-menu>
      <a-menu-item key="6">
        <template #icon>
          <router-link to="/canvas">
            <Icon name="huaban" size="small" />
          </router-link>
        </template>
        <span>画板</span>
      </a-menu-item>
      <a-menu-item key="7">
        <template #icon>
          <router-link to="/tools">
            <ToolOutlined />
          </router-link>
        </template>
        <span>工具</span>
      </a-menu-item>

      <a-menu-item key="8" style="position: relative; bottom: -45%">
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
