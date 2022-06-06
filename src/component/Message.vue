<script lang="ts" setup>
import { toRefs } from 'vue';

const props = defineProps<{
  msg: string;
  type: 'success' | 'info' | 'warning' | 'error';
}>();
const { msg, type } = toRefs(props);
</script>

<template>
  <div class="wrap" ref="wrap">
    <a-alert class="message" :message="msg" :type="type" show-icon />
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  z-index: 10;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  .message {
    display: inline-block;
  }
}
</style>
<style>
.ant-alert-content {
  display: inline-block;
}
</style>
