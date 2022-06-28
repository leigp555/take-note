<script lang="ts" setup>
import { ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';
import { toolStore } from '@/store/tool';
import { Tip } from '@/utils/tip';

const store_global = toolStore();
const value1 = ref<string>('');
const value2 = ref<string>('');
const deal = ref<string>('zh-en');
const isLoading = ref<boolean>(false);

const options = ref<SelectProps['options']>([
  { value: 'zh-en', label: '中译英' },
  { value: 'en-zh', label: '英译中' }
]);
const handleChange = (value: string) => {
  deal.value = value;
};
const submit = () => {
  if (value1.value) {
    isLoading.value = true;
    const from = deal.value.split('-')[0];
    const to = deal.value.split('-')[1];
    store_global.translate({ word: value1.value, from, to }).then((res) => {
      value2.value = res.result;
      isLoading.value = false;
    });
  } else {
    Tip('warning', '请输入要翻译的内容', 2000);
  }
};
</script>

<template>
  <div class="wrap">
    <a-select
      placeholder="请选择翻译方式"
      style="width: 200px"
      :options="options"
      @change="handleChange"
      defaultValue="中译英"
    ></a-select>
    <a-input v-model:value="value1" placeholder="请输入要翻译的内容" allow-clear />
    <a-button type="primary" @click="submit" :loading="isLoading">翻译</a-button>
    <a-textarea v-model:value="value2" placeholder="翻译结果" class="trans-ret" />
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
