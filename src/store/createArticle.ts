import { defineStore } from 'pinia';

export const useCreateArticle = defineStore('createArticle', {
  state: () => {
    return {
      newArticle: '' as string,
      scrollPosition: 0 as number
    };
  },
  getters: {
    getNewArticle(state) {
      return state.newArticle;
    },
    getNewPosition(state) {
      return state.scrollPosition;
    }
  }
});
