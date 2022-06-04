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
          <PlusCircleOutlined />
        </template>
        <span>添加</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <FileTextOutlined />
        </template>
        <span>草稿</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <SearchOutlined />
        </template>
        <span>搜索</span>
      </a-menu-item>
      <a-menu-item key="4">
        <template #icon>
          <HeartOutlined />
        </template>
        <span>收藏</span>
      </a-menu-item>
      <a-menu-item key="5">
        <template #icon>
          <ToolOutlined />
        </template>
        <span>工具</span>
      </a-menu-item>
      <a-menu-item key="6" style="position: relative; bottom: -40%">
        <template #icon>
          <LoginOutlined />
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
  SearchOutlined,
  LoginOutlined,
  HeartOutlined,
  ToolOutlined,
  FileTextOutlined
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
