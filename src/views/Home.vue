<template>
  <!-- <button @click="newsStore.fetchNews">FETCH NEWS</button> -->
  <div v-if="newsStore.isFetching === false && newsStore.error === null">
    <headlines-list />
    <article-list />
  </div>
  <loading-spinner
    v-else-if="newsStore.isFetching === true && newsStore.error === null"
  />
  <error v-if="newsStore.error === true" :retryFunc="newsStore.fetchNews" />
</template>

<script setup>
import { useNewsStore } from "../stores/useNewsStore.js";
import HeadlinesList from "../components/HeadlinesList.vue";
import ArticleList from "../components/ArticleList.vue";
import LoadingSpinner from "../components/Spinner/LoadingSpinner.vue";
import Error from "../components/error/Error.vue";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const newsStore = useNewsStore();

watch(route, () => newsStore.changeCategory(route.fullPath.slice(1)));

onMounted(() => {
  console.warn(route.fullPath);

  newsStore.changeCategory(route.fullPath.slice(1));
});
</script>
