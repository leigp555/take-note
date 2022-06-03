<template>
  <div style="width: 256px">
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
          <plus-circle-outlined />
        </template>
        <span>添加</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <file-search-outlined />
        </template>
        <span>搜索</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <heart-outlined />
        </template>
        <span>收藏</span>
      </a-menu-item>
      <a-menu-item key="4">
        <template #icon>
          <tool-outlined />
        </template>
        <span>工具</span>
      </a-menu-item>
      <a-menu-item key="5" style="position: relative; bottom: -50%">
        <template #icon>
          <login-outlined />
        </template>
        <span>退出</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  PlusCircleOutlined,
  FileSearchOutlined,
  LoginOutlined,
  HeartOutlined,
  ToolOutlined
} from '@ant-design/icons-vue'

const selectedKeys = ref<string[]>(['1'])
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
