<template>
  <div class="calendar">
    <a-calendar
      v-model:value="value"
      :fullscreen="false"
      @panelChange="onPanelChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Dayjs } from 'dayjs';

const value = ref<Dayjs>();
const onPanelChange = (value: Dayjs, mode: string) => {
  console.log(value, mode);
};
</script>

<style scoped lang="scss">
.calendar {
  width: 400px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
}
</style>
