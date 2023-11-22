import { defineStore } from "pinia";

export const useNewsStore = defineStore("useNewsStore", {
  state: () => ({
    isFetching: true,
    category: "technology",
    headlineArticle: null,
    otherHeadlines: null,
    otherArticles: null,
    searchResults: null,
  }),
  getters: {
    currentCategory: (state) => {
      const str = state.category;

      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  actions: {
    changeCategory(newCategory) {
      this.category = newCategory;

      // fetch new asticles
      this.fetchNews();
    },
    // fetchimg the data
    async fetchNews() {
      try {
        this.isFetching = true;

        const url =
          "https://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          `category=${this.category}&` +
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
        this.searchResults = data;

        this.isFetching = false;
      } catch (err) {
        console.warn(err);

        this.isFetching = false;
      }
    },
    // Search for articles
    async searchNews(searchQuery, sortBy) {
      try {
        this.isFetching = true;

        const url =
          "https://newsapi.org/v2/everything?" +
          `q=${searchQuery}&` +
          `sortBy=${sortBy}&` +
          "language=en&" +
          "pageSize=50&" +
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

        this.searchResults = data;

        this.isFetching = false;
      } catch (err) {
        console.warn(err);

        this.isFetching = false;
      }
    },
  },
});
