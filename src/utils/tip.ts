import { createApp, h } from 'vue';
import Message from '@/component/Message.vue';

export const Tip = (
  type: 'success' | 'info' | 'warning' | 'error',
  msg: string,
  interval = 2000
) => {
  let wrap: HTMLElement;
  if (!document.getElementById('tips')) {
    wrap = document.createElement('div');
    wrap.setAttribute('id', 'tips');
  } else {
    wrap = document.getElementById('tips')!;
  }
  document.body.appendChild(wrap);
  const demo = document.createElement('div');
  wrap.appendChild(demo);
  const app = createApp(h(Message, { msg, type }));
  app.mount(demo);
  const id = setTimeout(() => {
    app.unmount();
    demo.remove();
    window.clearTimeout(id);
  }, interval);
};
