<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string>('')
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', value.value)
}
</script>

<template>
  <div>
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
  </div>
  <div style="padding-top: 30vh">
    <a-empty>
      <template #description>
        <span> 没有相应的内容 </span>
      </template>
    </a-empty>
  </div>
</template>

<style lang="scss" scoped></style>
