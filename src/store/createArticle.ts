import { defineStore } from 'pinia';

export const useCreateArticle = defineStore('createArticle', {
  state: () => {
    return {
      initTitle: '请输入标题' as string,
      initArticle: '# 正文' as string,
      initScroll: 0 as number
    };
  }
});
