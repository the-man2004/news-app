import { defineStore } from "pinia";

export const useNewsStore = defineStore("useNewsStore", {
  state: () => ({
    isFetching: true,
    headlineArticle: null,
    otherHeadlines: null,
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
          "pageSize=35&" +
          "apiKey=37d4f2f323884e05887061669ba9133c";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();
        console.log(responseData);

        const data = responseData.articles.filter(
          (article) =>
            article.author !== null &&
            article.urlToImage !== null &&
            article.description !== "[Removed]"
        );

        console.log(data);

        this.headlineArticle = data[0];
        this.otherHeadlines = data.slice(1, 10);
        this.otherArticles = data.slice(10);

        this.isFetching = false;
      } catch (err) {
        console.warn(err);

        this.isFetching = false;
      }
    },
  },
});
