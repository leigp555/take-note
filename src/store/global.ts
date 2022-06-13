import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globalStore', {
  state: () => {
    return {
      isLoading: false
    };
  }
});
