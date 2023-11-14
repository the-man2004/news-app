<template>
  <button @click="fetchNews">FETCH NEWS</button>
</template>

<script setup>
// Get the date
const getDateString = () => {
  // DATE
  const currentDate = new Date();

  // 7 days ago
  const sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  const year = sevenDaysAgo.getFullYear();
  const month = ("0" + (sevenDaysAgo.getMonth() + 1)).slice(-2);
  const day = ("0" + sevenDaysAgo.getDate()).slice(-2);

  const date = year + "-" + month + "-" + day;

  return date;
};

// fetchimg the data
const fetchNews = async () => {
  // Date
  // const date = getDateString();

  // URL
  // const url =
  //   "https://newsapi.org/v2/everything?" +
  //   "q=apple&" +
  //   `from=${date}&` +
  //   "pageSize=20&" +
  //   "sortBy=popularity&" +
  //   "apiKey=37d4f2f323884e05887061669ba9133c";
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "category=business&" +
    "pageSize=20&" +
    "page=2&" +
    "apiKey=37d4f2f323884e05887061669ba9133c";
  const response = await fetch(url);

  const responseData = await response.json();
  console.log(responseData);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
