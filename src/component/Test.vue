<template>
  <div>
    <a-button @click="confirm">Confirm</a-button>
    <a-modal> </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import { Modal } from 'ant-design-vue';

const ok = () => {
  console.log('cancel');
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
