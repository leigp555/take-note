import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';

interface Article {
  owner: string;
  title: string;
  body: string;
  state: string;
  isPublic: string;
  identity_number: string;
}

interface ArticleStore {
  title: string;
  body: string;
  scrollHeight: number;
}

export const articleStore = defineStore('articleInfo', {
  state: () => {
    return {
      title: '',
      body: '',
      scrollHeight: 0
    } as ArticleStore;
  },
  getters: {},
  actions: {
    // 获取上一次为编辑完的内容
    getLastArticle() {
      let article = { title: '', body: '' };
      try {
        article = JSON.parse(<string>window.localStorage.getItem('temp_save'));
        this.title = article.title;
        this.body = article.body;
      } catch (err) {
        this.title = '';
        this.body = '';
      }
    },
    // 将内容保存到本地
    saveLocal() {
      // 将为编辑完的内容保存到本地
      const newArticle = JSON.stringify({
        title: this.title,
        body: this.body
      });
      window.localStorage.setItem('temp_save', newArticle);
    },
    // 创建文章/新文章/草稿
    async createArticle(payload = { isPublic: false, state: 'normal' }) {
      try {
        const { title, body, isPublic, state } = (await httpRequest(
          '/article',
          'POST',
          {
            title: this.title,
            body: this.body,
            isPublic: payload.isPublic,
            state: payload.state
          }
        )) as { title: string; body: string; isPublic: string; state: string };
        return Promise.resolve({ title, body, isPublic, state });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 删除文章
    async deleteArticle(payload: { identity_number: string }) {
      try {
        const { msg } = (await httpRequest('/article', 'DELETE', {
          identity_number: payload.identity_number
        })) as { msg: string };
        return Promise.resolve({ msg });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 修改文章
    async updateArticle(payload: {
      identity_number: string;
      owner: string;
      title: string;
      body: string;
      isPublic: string;
      state: string;
    }) {
      try {
        const { msg } = (await httpRequest('/article', 'PATCH', {
          identity_number: payload.identity_number,
          owner: payload.owner,
          title: payload.title,
          body: payload.body,
          isPublic: payload.isPublic,
          state: payload.state
        })) as { msg: string };
        return Promise.resolve({ msg });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 分批获取所有文章
    async getAllArticle(payload: { offset: string; limit: string }) {
      try {
        const ret = (await httpRequest('/article/all', 'GET', {
          offset: payload.offset,
          limit: payload.limit
        })) as Article[];
        return Promise.resolve({ articles: ret });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 获取单独的一篇文章
    async getOneArticle(payload: { identity_number: string }) {
      try {
        const ret = (await httpRequest('/article/identify', 'GET', {
          identity_number: payload.identity_number
        })) as Article[];
        return Promise.resolve({ articles: ret });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 获取收藏夹文章
    async getFavoriteArticle(payload: { offset: string; limit: string }) {
      try {
        const ret = (await httpRequest('/article/favorite', 'GET', {
          offset: payload.offset,
          limit: payload.limit
        })) as Article[];
        return Promise.resolve({ articles: ret });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 获取已经删除的文章
    async getDeletedArticle(payload: { offset: string; limit: string }) {
      try {
        const ret = (await httpRequest('/article/deleted', 'GET', {
          offset: payload.offset,
          limit: payload.limit
        })) as Article[];
        return Promise.resolve({ articles: ret });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 搜索文章
    async searchArticle(payload: { keyword: string; offset: string; limit: string }) {
      try {
        const ret = (await httpRequest('/article/search', 'GET', {
          keyword: payload.keyword,
          offset: payload.offset,
          limit: payload.limit
        })) as Article[];
        return Promise.resolve({ articles: ret });
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
});
