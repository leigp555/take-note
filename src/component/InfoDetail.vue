<script lang="ts" setup>
import { toRefs } from 'vue';
import Icon from '@/component/Icon.vue';

const props = defineProps<{ title: string; content: string; iconname: string }>();
const { title, content, iconname } = toRefs(props);
</script>

<template>
  <div class="wrap">
    <section class="section">
      <p class="title">{{ title }}</p>
      <div class="content">
        <p>{{ content }}</p>
        <Icon :name="iconname" size="small" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  border: 1px solid #eef0f4;
  border-radius: 4px;
  padding: 5px 10px;
  .section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
}
p {
  margin: 0;
}
</style>
