import { createApp, h } from 'vue';
import Message from '@/component/Message.vue';

export const Tip = (
  type: 'success' | 'info' | 'warning' | 'error',
  msg: string,
  interval = 2000
) => {
  const demo = document.createElement('div');
  document.body.appendChild(demo);
  const app = createApp(h(Message, { msg, type }));
  app.mount(demo);
  const id = setTimeout(() => {
    app.unmount();
    demo.remove();
    window.clearTimeout(id);
  }, interval);
};
