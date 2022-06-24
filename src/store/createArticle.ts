import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';

export const useCreateArticle = defineStore('createArticle', {
  state: () => {
    return {
      initTitle: '' as string,
      initArticle: '' as string,
      initScroll: 0 as number,
      isLoading: false as boolean
    };
  },
  actions: {
    // 初始化store
    initStore() {
      this.initTitle = '';
      this.initArticle = '';
      this.initScroll = 0;
      this.isLoading = false;
    },
    // 获取上一次为编辑完的内容
    getArticle() {
      let article = { initTitle: '', initArticle: '' };
      try {
        article = JSON.parse(<string>window.localStorage.getItem('temp_save'));
        this.initTitle = article.initTitle;
        this.initArticle = article.initArticle;
      } catch (err) {
        article = { initTitle: '', initArticle: '' };
      }
    },
    // 将内容保存到本地
    saveLocal() {
      // 将为编辑完的内容保存到本地
      const newArticle = JSON.stringify({
        initTitle: this.initTitle,
        initArticle: this.initArticle
      });
      window.localStorage.setItem('temp_save', newArticle);
    },
    // 将内容保存为草稿
    saveDraft() {
      return new Promise((resolve, reject) => {
        httpRequest('/article', 'POST', {
          title: this.initTitle,
          body: this.initArticle,
          isPublic: false,
          state: 'draft'
        }).then(
          () => {
            resolve(true);
          },
          () => {
            reject(false);
          }
        );
      });
    },
    // 发布文章
    publish() {
      return new Promise((resolve, reject) => {
        httpRequest('/article', 'POST', {
          title: this.initTitle,
          body: this.initArticle,
          isPublic: false,
          state: 'normal'
        }).then(
          () => {
            window.localStorage.setItem(
              'temp_save',
              JSON.stringify({ initTitle: '', initArticle: '' })
            );
            this.initStore();
            resolve(true);
          },
          () => {
            reject(false);
          }
        );
      });
    }
  }
});
