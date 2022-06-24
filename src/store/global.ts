import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';

export const useGlobalStore = defineStore('globalStore', {
  state: () => {
    return {
      isLoading: false,
      username: '',
      email: '',
      avatar_url: '',
      avatar_file: ''
    };
  },
  actions: {
    getUserInfo() {
      return new Promise((resolve, reject) => {
        (
          httpRequest('/user/info', 'GET') as Promise<{
            username: string;
            email: string;
          }>
        )
          .then((res) => {
            this.username = res.username;
            this.email = res.email;
            resolve({ username: res.username, email: res.email });
          })
          .catch((err) => {
            reject(err.errors.errMsg);
          });
      });
    },
    getUserAvatar() {
      return new Promise((resolve, reject) => {
        (httpRequest('/avatar', 'GET') as Promise<{ avatar_url: string }>)
          .then((res) => {
            this.avatar_url = res.avatar_url;
            resolve({ avatar: res.avatar_url });
          })
          .catch((err) => {
            reject(err.errors.errMsg);
          });
      });
    }
  }
});
