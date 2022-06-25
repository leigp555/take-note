import { defineStore } from 'pinia';
import httpRequest from '@/utils/axios';

interface UserStore {
  username: string;
  email: string;
  avatar_url: string;
  avatar_file: string;
}

export const userStore = defineStore('userInfo', {
  state: () => {
    return {
      username: '',
      email: '',
      avatar_url: '',
      avatar_file: ''
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
    async getSecurityCode(payload: { email: string }) {
      // 获取邮箱验证码
      try {
        const { msg } = (await httpRequest('/securityCode', 'post', {
          email: payload.email
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
    async getUserAvatar() {
      // 获取用户头像并保存在本地
      try {
        const { avatar_url, avatar_base64 } = (await httpRequest('/avatar', 'GET')) as {
          avatar_url: string;
          avatar_base64: string;
        };
        this.avatar_url = avatar_url;
        window.localStorage.setItem('avatar', avatar_base64);
        return Promise.resolve({ avatar_url });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async updateUserAvatar(payload: { avatar_file: string }) {
      // 更新用户头像并替换本地头像
      try {
        const { avatar_url } = (await httpRequest('/avatar/update', 'POST', {
          avatar_file: payload.avatar_file
        })) as {
          avatar_url: string;
        };
        this.avatar_url = avatar_url;
        window.localStorage.setItem('avatar', payload.avatar_file);
        return Promise.resolve({ avatar_url });
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
});
