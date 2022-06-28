<script lang="ts" setup>
import { onMounted, ref, toRefs } from 'vue';

const svgEl = ref<HTMLElement>();
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'large' || 'middle' || 'small'
  },
  fill: {
    type: String,
    default: 'black'
  }
});
const { name, size, fill } = toRefs(props);
onMounted(() => {
  if (!size.value || size.value === 'small') {
    svgEl.value!.classList.add('small');
  } else if (size.value === 'large') {
    svgEl.value!.classList.add('large');
  } else {
    svgEl.value!.classList.add('middle');
  }
});
</script>

<template>
  <svg
    class="icon"
    aria-hidden="true"
    v-bind="$attrs"
    ref="svgEl"
    :style="{ fill: fill }"
  >
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<style lang="scss" scoped>
.icon.large {
  width: 4em;
  height: 4em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon.middle {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon.small {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
