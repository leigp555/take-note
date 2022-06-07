<script lang="ts" setup>
import Info from '@/component/Info.vue';
</script>

<template>
  <div class="wrap">
    <section class="info">
      <Info />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  height: 100%;
  position: relative;
  .info {
    position: absolute;
    display: flex;
    justify-content: center;
    max-height: 100%;
    top: 15%;
    left: 0;
    flex-grow: 1;
    width: 100%;
    padding: 0 20vw;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      background-color: #c3c3c3;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
}
</style>
