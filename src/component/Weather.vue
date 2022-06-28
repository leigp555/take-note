<template>
  <div class="wrap">
    <header class="address" @click="showModal">
      <span><Icon name="address" size="small" fill="black" /> </span>
      <span>{{ weather.address }}</span>
    </header>
    <main>
      <div class="section">
        <Icon size="large" name="qing" v-if="weather.kind === '晴'" />
        <Icon size="large" name="xiaxue" v-else-if="weather.kind === '下雪'" />
        <Icon size="large" name="wu" v-else-if="weather.kind === '雾'" />
        <Icon size="large" name="duoyun" v-else-if="weather.kind === '多云' || '阴'" />
        <Icon size="large" name="xiayu" v-else-if="weather.kind === '阵雨'" />
      </div>
      <div class="tem">
        <p><span>天气: </span>{{ weather.kind }}</p>
        <p><span>气温: </span>{{ weather.temperature }}℃</p>
      </div>
    </main>
  </div>

  <div>
    <a-modal v-model:visible="visible" title="请输入城市名例如：杭州" @ok="handleOk">
      <a-input v-model:value="weather.address" placeholder="请输入城市名" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { pinyin } from 'pinyin-pro';
import { toolStore } from '@/store/tool';
import Icon from '@/component/Icon.vue';
import { Tip } from '@/utils/tip';

const store_tool = toolStore();
const weather = reactive({
  address: '杭州',
  kind: '多云',
  temperature: 16
});
// 获取天气状况
store_tool
  .getWeather({
    location: pinyin(weather.address, { toneType: 'none' }).replace(/\s*/g, '')
  })
  .then((res) => {
    weather.kind = res.result.text;
    weather.temperature = res.result.temperature;
  })
  .catch((err: { errMsg: string }) => {
    Tip('error', err.errMsg, 2000);
  });

const visible = ref<boolean>(false);

const showModal = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
  if (weather.address) {
    store_tool
      .getWeather({
        location: pinyin(weather.address, { toneType: 'none' }).replace(/\s*/g, '')
      })
      .then((res) => {
        if (res.result.text && res.result.temperature) {
          weather.kind = res.result.text;
          weather.temperature = res.result.temperature;
        }
      })
      .catch((err: { errMsg: string }) => {
        Tip('error', err.errMsg, 2000);
      });
  } else {
    Tip('warning', '请填写城市名称', 2000);
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  .address {
    padding: 10px 0;
    display: inline-flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
  }
  main {
    display: flex;
    padding: 20px;
    justify-content: space-around;
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: red;
  overflow: hidden;
}
.custom-class {
}
</style>
