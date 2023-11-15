import { defineStore } from "pinia";

export const useNewsStore = defineStore("useNewsStore", {
  state: () => ({
    isFetching: true,
    firstArticle: null,
    otherArticles: null,
  }),
  getters: {},
  actions: {
    // fetchimg the data
    async fetchNews() {
      try {
        this.isFetching = true;

        const url =
          "https://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "category=technology&" +
          "pageSize=26&" +
          "apiKey=37d4f2f323884e05887061669ba9133c";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();
        console.log(responseData);

        this.firstArticle = responseData.articles[0];
        this.otherArticles = responseData.articles.slice(1);

        this.isFetching = false;
      } catch (err) {
        console.warn(err);

        this.isFetching = false;
      }
    },
  },
});
