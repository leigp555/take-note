<template>
  <div style="width: 256px">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      style="height: 100vh; padding-top: 50px; overflow: hidden"
    >
      <section style="display: flex; justify-content: center; margin-bottom: 50px">
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </section>
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Option 3</span>
      </a-menu-item>
      <a-menu-item key="4">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Option 3</span>
      </a-menu-item>
      <a-menu-item key="5" style="position: relative; bottom: -40%">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Option 3</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { PieChartOutlined, DesktopOutlined, InboxOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    InboxOutlined
  },
  setup() {
    const state = reactive({
      collapsed: true,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1']
    })

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal
      }
    )
    return {
      ...toRefs(state)
    }
  }
})
</script>
