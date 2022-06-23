import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';
import { useGlobalStore } from '@/store/global';

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
    getArticle() {
      // 获取上一次为编辑完的内容
      let article = { initTitle: '', initArticle: '' };
      try {
        article = JSON.parse(<string>window.localStorage.getItem('temp_save'));
        this.initTitle = article.initTitle;
        this.initArticle = article.initArticle;
      } catch (err) {
        article = { initTitle: '', initArticle: '' };
      }
    },
    saveLocal() {
      // 将为编辑完的内容保存到本地
      const newArticle = JSON.stringify({
        initTitle: this.initTitle,
        initArticle: this.initArticle
      });
      window.localStorage.setItem('temp_save', newArticle);
    },
    saveDraft() {
      const globalStore = useGlobalStore();
      // 将本地编辑的内容保存为草稿并删除本地的未编辑完的内容
      return new Promise((resolve, reject) => {
        globalStore.isLoading = true;
        httpRequest('/draft', 'POST', {
          title: this.initTitle,
          content: this.initArticle
        }).then(
          () => {
            globalStore.isLoading = false;
            window.localStorage.setItem(
              'temp_save',
              JSON.stringify({ initTitle: '', initArticle: '' })
            );
            this.getArticle();
            resolve(true);
          },
          () => {
            globalStore.isLoading = false;
            reject(false);
          }
        );
      });
    },
    publish() {
      // 将文章发布
      const globalStore = useGlobalStore();
      // 将本地编辑的内容保存为草稿并删除本地的未编辑完的内容
      return new Promise((resolve, reject) => {
        globalStore.isLoading = true;
        httpRequest('/publish', 'POST', {
          title: this.initTitle,
          content: this.initArticle
        }).then(
          () => {
            globalStore.isLoading = false;
            window.localStorage.setItem(
              'temp_save',
              JSON.stringify({ initTitle: '', initArticle: '' })
            );
            this.getArticle();
            resolve(true);
          },
          () => {
            globalStore.isLoading = false;
            reject(false);
          }
        );
      });
    }
  }
});
