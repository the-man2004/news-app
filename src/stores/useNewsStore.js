import { defineStore } from "pinia";

export const useNewsStore = defineStore("useNewsStore", {
  state: () => {},
  getters: {},
  actions: {
    // fetchimg the data
    async fetchNews() {
      try {
        const url =
          "https://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "category=technology&" +
          "pageSize=20&" +
          "apiKey=37d4f2f323884e05887061669ba9133c";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();
        console.log(responseData);
      } catch (err) {
        console.warn(err);
      }
    },
  },
});
