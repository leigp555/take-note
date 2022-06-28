<script lang="ts" setup></script>

<template>
  <div class="wrap">
    <div class="tools">
      <section class="section calendar-section gradient-border">
        <router-view />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/gradient_border';
.wrap {
  display: flex;
  height: 100%;
  position: relative;
  .tools {
    position: absolute;
    max-height: 100%;
    top: 0;
    left: 0;
    flex-grow: 1;
    width: 100%;
    padding: 10vh 20vw;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 120px;
    .section {
      background: linear-gradient(
        145deg,
        rgba(94, 153, 154, 1) 0%,
        rgba(140, 204, 157, 1) 50%,
        rgba(125, 188, 156, 1) 100%
      );
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      gap: 50px;
      max-width: 800px;
    }
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
