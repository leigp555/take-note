import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';

interface GlobalStore {}

export const toolStore = defineStore('counter', {
  state: () => {
    return {} as GlobalStore;
  },
  getters: {},
  actions: {
    async translate(payload: { word: string; from: string; to: string }) {
      // 发送翻译请求
      try {
        const { result } = (await httpRequest('/translate', 'GET', {
          word: payload.word,
          from: payload.from,
          to: payload.to
        })) as { result: string };
        return Promise.resolve({ result });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async getWeather(payload: { location: string }) {
      // 发送天气获取请求
      try {
        const { result } = (await httpRequest('/weather', 'GET', {
          location: payload.location
        })) as { result: { now: { text: string; temperature: number } } };
        return Promise.resolve({ result: result.now });
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
});
