<script lang="ts" setup>
import { Tip } from '@/utils/tip';

const xx = () => {
  Tip({ msg: '成功尝试', type: 'warning' });
};
</script>
<template>
  <button @click="xx">点击</button>
</template>
