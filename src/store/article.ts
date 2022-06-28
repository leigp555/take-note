import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';
import { Tip } from '@/utils/tip';

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
  tabNum: string;
  num: { allArticle: number; favorite: number; draft: number; deleted: number };
}

export const articleStore = defineStore('articleInfo', {
  state: () => {
    return {
      title: '',
      body: '',
      num: { allArticle: 0, favorite: 0, draft: 0, deleted: 0 },
      scrollHeight: 0,
      tabNum: '1'
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
        const { article } = (await httpRequest('/article', 'POST', {
          title: this.title,
          body: this.body,
          isPublic: payload.isPublic,
          state: payload.state
        })) as {
          article: {
            title: string;
            body: string;
            isPublic: string;
            state: string;
            identity_number: string;
          };
        };
        // 发布完成清空缓存
        const newArticle = JSON.stringify({
          title: '',
          body: ''
        });
        this.title = '';
        this.body = '';
        this.scrollHeight = 0;
        window.localStorage.setItem('temp_save', newArticle);
        return Promise.resolve(article);
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 继续编辑文章
    continueEdit(payload: { identity_number: string }) {
      // 获取上一次的文章
      this.getOneArticle(payload)
        .then((res) => {
          this.title = res.articles.title;
          this.body = res.articles.body;
          this.saveLocal();
          // 服务器删除上一次的文章
          this.deleteArticle(payload).catch(() => {});
        })
        .catch(() => {
          Tip('error', '请重试', 2000);
        });
    },
    // 删除文章/彻底删除
    async deleteArticle(payload: { identity_number: string }) {
      try {
        const { msg } = (await httpRequest('/article/delete', 'POST', {
          identity_number: payload.identity_number
        })) as { msg: string };
        return Promise.resolve({ msg });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 修改文章/标记删除
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
    async getAllArticle(payload: { offset: number; limit: number }) {
      try {
        const ret = (await httpRequest('/article/all', 'GET', {
          offset: payload.offset,
          limit: payload.limit
        })) as { articles: Article[] };
        return Promise.resolve({ articles: ret.articles });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 获取文章的总数
    // eslint-disable-next-line consistent-return
    async getNumArticle(payload: {
      kind: 'allArticle' | 'favorite' | 'deleted' | 'draft';
    }) {
      try {
        // 所有文章数量
        if (payload.kind === 'allArticle') {
          const ret = (await httpRequest('/article/num/allArticle', 'GET')) as {
            total: number;
          };
          this.num.allArticle = ret.total;
          return Promise.resolve({ total_article: ret.total });
        }
        // 收藏夹文章数量
        if (payload.kind === 'favorite') {
          const ret = (await httpRequest('/article/num/favorite', 'GET')) as {
            total: number;
          };
          this.num.favorite = ret.total;
          return Promise.resolve({ total_article: ret.total });
        }
        // 草稿文章数量
        if (payload.kind === 'draft') {
          const ret = (await httpRequest('/article/num/draft', 'GET')) as {
            total: number;
          };
          this.num.draft = ret.total;
          return Promise.resolve({ total_article: ret.total });
        }
        // 垃圾站文章数量
        if (payload.kind === 'deleted') {
          const ret = (await httpRequest('/article/num/deleted', 'GET')) as {
            total: number;
          };
          this.num.deleted = ret.total;
          return Promise.resolve({ total_article: ret.total });
        }
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 获取单独的一篇文章
    async getOneArticle(payload: { identity_number: string }) {
      try {
        const ret = (await httpRequest('/article/identify', 'GET', {
          identity_number: payload.identity_number
        })) as { articles: Article[] };
        return Promise.resolve({ articles: ret.articles[0] });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 获取收藏夹文章
    async getFavoriteArticle(payload: { offset: number; limit: number }) {
      try {
        const ret = (await httpRequest('/article/favorite', 'GET', {
          offset: payload.offset,
          limit: payload.limit
        })) as { articles: Article[] };
        return Promise.resolve({ articles: ret.articles });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 获取草稿
    async getDraftArticle(payload: { offset: number; limit: number }) {
      try {
        const ret = (await httpRequest('/article/draft', 'GET', {
          offset: payload.offset,
          limit: payload.limit
        })) as { articles: Article[] };
        return Promise.resolve({ articles: ret.articles });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 彻底删除一篇文章
    async deletedArticle(payload: { identity_number: string }) {
      try {
        const { msg } = (await httpRequest('/article/deleted', 'POST', {
          identity_number: payload.identity_number
        })) as {
          msg: string;
        };
        return Promise.resolve({ msg });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 获取已经删除的文章
    async getDeletedArticle(payload: { offset: number; limit: number }) {
      try {
        const ret = (await httpRequest('/article/deleted', 'GET', {
          offset: payload.offset,
          limit: payload.limit
        })) as { articles: Article[] };
        return Promise.resolve({ articles: ret.articles });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    // 搜索文章
    async searchArticle(payload: { keyword: string; offset: number; limit: number }) {
      try {
        const ret = (await httpRequest('/article/search', 'GET', {
          keyword: payload.keyword,
          offset: payload.offset,
          limit: payload.limit
        })) as { articles: Article[] };
        return Promise.resolve({ articles: ret.articles });
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
});
