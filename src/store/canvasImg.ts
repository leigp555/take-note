import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';

interface ImgStore {}

interface Img {
  owner: string;
  path: string;
  identity_number: string;
  createdAt: string;
  updatedAt: string;
}

export const canvasStore = defineStore('canvasInfo', {
  state: () => {
    return {} as ImgStore;
  },
  getters: {},
  actions: {
    async uploadImg(payload: { content: string; isPublic: false }) {
      // 上传图片返回图片id
      try {
        const { imgId } = (await httpRequest('/img/save', 'POST', {
          content: payload.content,
          isPublic: payload.isPublic
        })) as { imgId: string };
        return Promise.resolve({ imgId });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async getOneImg(payload: { imgId: string }) {
      // 获取单张图片
      try {
        const { imgBase64 } = (await httpRequest('/img/imgId', 'GET', {
          imgId: payload.imgId
        })) as { imgBase64: string };
        return Promise.resolve({ imgBase64 });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async getAllImg(payload: { offset: number; limit: number }) {
      // 获取所有图片
      try {
        const { images } = (await httpRequest('/img/all', 'GET', {
          offset: payload.offset,
          limit: payload.limit
        })) as { images: Img[] };
        return Promise.resolve({ images });
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
});
