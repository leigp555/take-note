<script lang="ts" setup>
import Calendar from '@/componemt/Calendar.vue';
import Weather from '@/componemt/Weather.vue';
import Translate from '@/componemt/Translate.vue';
</script>

<template>
  <div class="wrap">
    <div class="tools">
      <section class="section calendar-section">
        <div>日历</div>
        <Calendar />
      </section>
      <section class="section weather-section">
        <div>天气</div>
        <Weather />
      </section>
      <section class="section weather-section">
        <div>翻译</div>
        <Translate />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    gap: 40px;
    .section {
      display: flex;
      flex-direction: column;
      gap: 20px;
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
