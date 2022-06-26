import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';

interface UserStore {
  username: string;
  email: string;
  avatar_url: string;
}

export const userStore = defineStore('userInfo', {
  state: () => {
    return {
      username: '',
      email: '',
      avatar_url: ''
    } as UserStore;
  },
  getters: {},
  actions: {
    async login(payload: { user: string; password: string }) {
      // 登录操作：将用户名邮箱同步到store,将token保存到本地
      try {
        const { username, email, token } = (await httpRequest('/login', 'POST', {
          username: payload.user,
          password: payload.password
        })) as { username: string; email: string; token: string };
        this.username = username;
        this.email = email;
        window.localStorage.setItem('_AUTH_TOKEN', token);
        return Promise.resolve({ username, email, token });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async resetPass(payload: {
      email: string;
      password: string;
      securityCode: string;
    }) {
      // 注册：将用户名邮箱同步到store,将token保存到本地
      try {
        const { msg } = (await httpRequest('/resetPass', 'post', {
          email: payload.email,
          password: payload.password,
          securityCode: payload.securityCode
        })) as { msg: string };
        return Promise.resolve({ msg });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async getSecurityCode(payload: { email: string; type: string }) {
      // 获取邮箱验证码
      try {
        const { msg } = (await httpRequest('/securityCode', 'post', {
          email: payload.email,
          type: payload.type
        })) as { msg: string };
        return Promise.resolve({ msg });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async register(payload: {
      username: string;
      email: string;
      password: string;
      securityCode: string;
    }) {
      // 注册：将用户名邮箱同步到store,将token保存到本地
      try {
        const { msg } = (await httpRequest('/register', 'post', {
          username: payload.username,
          email: payload.email,
          password: payload.password,
          securityCode: payload.securityCode
        })) as { msg: string };
        return Promise.resolve({ msg });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async getUserInfo() {
      // 获取邮箱和用户名
      try {
        const { username, email } = (await httpRequest('/user/info', 'GET')) as {
          username: string;
          email: string;
        };
        this.username = username;
        this.email = email;
        return Promise.resolve({ username, email });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    getLastAvatar() {
      // 获取本地的头像外链
      this.avatar_url = window.localStorage.getItem('avatar') || '';
    },
    async getUserAvatar() {
      // 获取用户头像并保存在本地
      try {
        const { avatar_url } = (await httpRequest('/avatar', 'GET')) as {
          avatar_url: string;
        };
        this.avatar_url = avatar_url;
        window.localStorage.setItem('avatar', avatar_url);
        return Promise.resolve({ avatar_url });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async updateUserAvatar(payload: { avatar_file: string }) {
      // 更新用户头像并替换本地头像
      try {
        await httpRequest('/avatar/update', 'POST', {
          avatar_file: payload.avatar_file
        });
        this.avatar_url = payload.avatar_file;
        window.localStorage.setItem('avatar', payload.avatar_file);
        return Promise.resolve({ avatar_url: payload.avatar_file });
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
});
