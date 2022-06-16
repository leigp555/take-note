import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';

type User = {
  username: string;
  password: string;
  securityCode: string;
};
type Register = {
  username: string;
  email: string;
  password: string;
  securityCode: string;
};
// 处理用户信息的store
export const useUserStore = defineStore('userInfo', {
  state: (): User => {
    return {
      username: '',
      password: '',
      securityCode: ''
    };
  },
  actions: {
    login() {
      return new Promise((resolve, reject) => {
        (
          httpRequest('/login', 'POST', {
            username: this.username,
            password: this.password
          }) as Promise<{ token: string }>
        )
          .then((res) => {
            resolve(res);
            window.localStorage.setItem('_AUTH_TOKEN', res.token);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getSecurityCode() {
      return new Promise((resolve, reject) => {
        (httpRequest('/securityCode', 'get') as Promise<{ msg: string }>)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    register(payload: Register) {
      return new Promise((resolve, reject) => {
        (
          httpRequest('/register', 'post', {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            securityCode: payload.securityCode
          }) as Promise<{ msg: string }>
        )
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  }
});
