<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon-address'
    },
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}${props.name}`);
    return { symbolId };
  }
});
</script>
