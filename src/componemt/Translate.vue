<script lang="ts" setup>
import { ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';

const value1 = ref<string>('');
const value2 = ref<string>('');

const options = ref<SelectProps['options']>([
  { value: 'zh-en', label: '中译英' },
  { value: 'en-zh', label: '英译中' }
]);
const handleChange = (value: string) => {
  console.log(value);
};
</script>

<template>
  <div class="wrap">
    <a-select
      placeholder="请选择翻译方式"
      style="width: 200px"
      :options="options"
      @change="handleChange"
    ></a-select>
    <a-input v-model:value="value1" placeholder="请输入要翻译的内容" allow-clear />
    <a-textarea
      v-model:value="value2"
      placeholder="翻译结果"
      class="trans-ret"
      disabled
    />
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .trans-ret {
    min-height: 10em;
  }
}
</style>
