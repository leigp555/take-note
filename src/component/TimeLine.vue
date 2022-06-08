<script lang="ts" setup>
import { ClockCircleOutlined } from '@ant-design/icons-vue';
</script>

<template>
  <div class="wrap-list">
    <a-timeline mode="alternate">
      <a-timeline-item v-for="i in 50" :key="i">
        <template #dot><ClockCircleOutlined style="font-size: 14px" /></template>
        Create a services site 2015-09-01
      </a-timeline-item>
      <a-timeline-item> Technical testing 2015-09-01 </a-timeline-item>
    </a-timeline>
  </div>
</template>

<style lang="scss" scoped>
.wrap-list {
  max-height: 100%;
  width: 100%;
}
</style>
