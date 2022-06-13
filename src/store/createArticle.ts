import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';

export const useCreateArticle = defineStore('createArticle', {
  state: () => {
    return {
      initTitle: '' as string,
      initArticle: '' as string,
      initScroll: 0 as number
    };
  },
  actions: {
    getArticle() {
      // 获取上一次为编辑完的内容
      let article: { initTitle: string; initArticle: string };
      try {
        article = JSON.parse(<string>window.localStorage.getItem('temp_save'));
      } catch (err) {
        article = { initTitle: '', initArticle: '' };
      }
      this.initTitle = article.initTitle;
      this.initArticle = article.initArticle;
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
      // 将本地编辑的内容保存为草稿并删除本地的未编辑完的内容
      httpRequest('/draft', 'POST', {
        title: this.initTitle,
        content: this.initArticle
      }).then(() => {
        window.localStorage.setItem(
          'temp_save',
          JSON.stringify({ initTitle: '', initArticle: '' })
        );
      });
    },
    publish() {
      // 将文章发布
      httpRequest('/publish', 'POST', {
        title: this.initTitle,
        content: this.initArticle
      }).then((res) => {
        console.log(res);
      });
    }
  }
});
