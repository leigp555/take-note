<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps, computed, toRefs } from 'vue';

const props = defineProps<{ iconClass: string; className: string }>();
const { iconClass, className } = toRefs(props);

const iconName = computed(() => {
  return `#icon-${iconClass.value}`;
});
const svgClass = computed(() => {
  if (this.className) {
    return `svg-icon ${className.value}`;
  }
  return 'svg-icon';
});
</script>

<style scoped lang="scss">
.svg-icon {
  width: 10rem;
  height: 10rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
