import { createApp, h } from 'vue';
import Message from '@/component/Message.vue';

type Option = {
  msg: string;
  type: 'success' | 'info' | 'warning' | 'error';
  interval: number;
};

export const Tip = (options: Option) => {
  const { msg, type, interval } = options;
  const demo = document.createElement('div');
  document.body.appendChild(demo);
  const app = createApp(h(Message, { msg, type }));
  app.mount(demo);
  const id = setTimeout(() => {
    app.unmount();
    demo.remove();
    window.clearTimeout(id);
  }, interval || 2000);
};
