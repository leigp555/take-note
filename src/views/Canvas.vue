<script setup lang="ts">
import { onMounted, ref } from 'vue';
import paint from '@/utils/inputCavans';
import transImg from '@/utils/transApi';

// 设置画布初始化值
const canvasEl = ref<HTMLCanvasElement>();
const lineColor = ref<string>('#000000');
const lineWidth = ref<number>(4);
const canvasColor = ref('#ffffff');

// 初始画布高度
const canvasHeight = ref<number>(
  parseInt(document.body.getBoundingClientRect().height.toString(), 10)
);

// 设置线条属性
const initLine = () => {
  paint(canvasEl.value!, lineColor.value, lineWidth.value!);
};

// 初始化画布线条黑色，画布白色，线条宽度为4,画布宽高为body的宽高
onMounted(() => {
  canvasEl.value!.width = document.body.getBoundingClientRect().width;
  canvasEl.value!.height = document.body.getBoundingClientRect().height;
  paint(canvasEl.value!, lineColor.value, lineWidth.value!);
});

// 弹窗是否可见
const visible = ref<boolean>(false);
const showDrawer = () => {
  visible.value = true;
};

// canvas转图片
const getCanvasImg = async () => {
  let canvasImg;
  try {
    canvasImg = await transImg.canvasToImg(canvasEl.value!, 1, 'image');
    // eslint-disable-next-line no-empty
  } catch (err) {}
  return canvasImg;
};

// 修改canvas高度：先把画布上的内容转成img保存修改画布大小后将图片还原到画布
const changeCanvasHeight = async () => {
  const img = (await getCanvasImg()) as HTMLImageElement;
  canvasEl.value!.width = document.body.getBoundingClientRect().width;
  canvasEl.value!.height = canvasHeight.value;
  const ctx = canvasEl.value!.getContext('2d');
  ctx!.drawImage(img, 0, 0);
  initLine();
  visible.value = false;
};

// 重置画布内容
const resetCanvas = () => {
  const context = canvasEl.value!.getContext('2d');
  if (context) {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvasEl.value!.width, canvasEl.value!.height);
    context.restore();
  }
};

// 设置橡皮擦
const clearTag = ref<HTMLElement>();

function handle1(e: TouchEvent) {
  const x = e.touches[0].pageX;
  const y = e.touches[0].pageY;
  clearTag.value!.style.top = `${y}px`;
  clearTag.value!.style.left = `${x}px`;
}
function handle2(e: TouchEvent) {
  clearTag.value!.style.display = 'block';
  const x = e.touches[0].pageX;
  const y = e.touches[0].pageY;
  clearTag.value!.style.top = `${y}px`;
  clearTag.value!.style.left = `${x}px`;
  const context = canvasEl.value!.getContext('2d');
  context!.clearRect(x, y, clearWidth.value, clearWidth.value);
}
function handle3() {
  // 销毁事件监听
  clearTag.value!.style.display = 'none';
  canvasEl.value!.removeEventListener('touchstart', handle1);
  canvasEl.value!.removeEventListener('touchmove', handle2);
  canvasEl.value!.removeEventListener('touchend', handle3);
}

const clearNow = ref(false);
const clearWidth = ref<number>(20);

function handle4(e: MouseEvent) {
  clearNow.value = true;
  const x = e.pageX;
  const y = e.pageY;
  clearTag.value!.style.top = `${y}px`;
  clearTag.value!.style.left = `${x}px`;
}

function handle5(e: MouseEvent) {
  if (clearNow.value) {
    const x = e.pageX;
    const y = e.pageY;
    clearTag.value!.style.display = 'block';
    clearTag.value!.style.top = `${y}px`;
    clearTag.value!.style.left = `${x}px`;
    const context = canvasEl.value!.getContext('2d');
    context!.clearRect(x, y, clearWidth.value, clearWidth.value);
  }
}
function handle6() {
  // 销毁事件监听
  clearNow.value = false;
  clearTag.value!.style.display = 'none';
  canvasEl.value!.removeEventListener('mousedown', handle4);
  canvasEl.value!.removeEventListener('mousemove', handle5);
  document.documentElement!.removeEventListener('mouseup', handle6);
}

const continuePaint = () => {
  paint(canvasEl.value!, lineColor.value, lineWidth.value!);
};

const clear = () => {
  paint(canvasEl.value!, 'transparent', 1, false);
  // 获取鼠标位置;
  const isTouchDevice = 'ontouchstart' in document.documentElement;
  if (isTouchDevice) {
    canvasEl.value!.addEventListener('touchstart', handle1);
    canvasEl.value!.addEventListener('touchmove', handle2);
    canvasEl.value!.addEventListener('touchend', handle3);
  } else {
    canvasEl.value!.addEventListener('mousedown', handle4);
    canvasEl.value!.addEventListener('mousemove', handle5);
    document.documentElement!.addEventListener('mouseup', handle6);
  }
};
</script>

<template>
  <div class="wrap">
    <div id="canvasWrap">
      <canvas
        ref="canvasEl"
        :style="{ background: canvasColor }"
        class="canvasEl"
      ></canvas>
      <div class="selector">
        <a-button type="primary" @click="showDrawer">画板设置</a-button>
        <a-button type="primary" @click="resetCanvas">清空画布内容</a-button>
        <a-button type="primary" id="clear" @click.prevent="clear">橡皮擦</a-button>
        <a-button type="primary" @click="continuePaint">继续绘画</a-button>
      </div>
    </div>
    <a-drawer
      v-model:visible="visible"
      class="custom-class"
      width="30%"
      :closable="false"
      title="画板设置"
      placement="right"
    >
      <div class="setting">
        <div class="section">
          <p>线条颜色:{{ lineColor }}</p>
          <label>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-beijingyanse"></use>
            </svg>
            <input type="color" v-model="lineColor" @change="initLine" />
          </label>
        </div>
        <div class="section">
          <p>线条宽度:{{ lineWidth }}</p>
          <label>
            <input
              type="text"
              v-model.number="lineWidth"
              @change="initLine"
              style="max-width: 50px"
            />
          </label>
        </div>
        <div class="section">
          <p>画布颜色:{{ canvasColor }}</p>
          <label>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-beijingyanse"></use>
            </svg>
            <input type="color" v-model="canvasColor" @change="initLine" />
          </label>
        </div>
        <div class="section changeHeight">
          <p>画布高度:{{ canvasHeight }}</p>
          <label>
            <input
              type="text"
              v-model.number="canvasHeight"
              style="max-width: 50px"
              @change="changeCanvasHeight"
            />
          </label>
        </div>
        <div class="section">
          <p>橡皮擦宽度:{{ clearWidth }}</p>
          <label>
            <input type="text" v-model.number="clearWidth" style="max-width: 50px" />
          </label>
        </div>
      </div>
    </a-drawer>
    <div ref="clearTag" id="clearTag"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
#canvasWrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  #inputCanvas {
    display: block;
  }
  .selector {
    position: fixed;
    top: 10px;
    left: 10px;
    display: flex;
    gap: 10px;
    justify-content: start;
  }
}
.setting {
  display: flex;
  flex-direction: column;
  gap: 20px;
  > .section {
    label {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 10px;
      input {
        text-align: center;
        outline: none;
        border: none;
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);
      }
      button {
        background-color: transparent;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: none;
      }
    }
  }
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#clearTag {
  width: 40px;
  height: 40px;
  background: red;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

@media (max-width: 500px) {
  .changeHeight {
    display: none;
  }
}
</style>
