import { defineStore } from 'pinia';

interface GlobalStore {}

export const globalStore = defineStore('counter', {
  state: () => {
    return {} as GlobalStore;
  },
  getters: {},
  actions: {}
});
