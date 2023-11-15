<template>
  <button @click="newsStore.fetchNews">FETCH NEWS</button>
  <div v-if="newsStore.isFetching === false">
    <headlines-list />
    <article-list />
  </div>
</template>

<script setup>
import { useNewsStore } from "../stores/useNewsStore.js";
import HeadlinesList from "../components/HeadlinesList.vue";
import ArticleList from "../components/ArticleList.vue";

const newsStore = useNewsStore();
</script>
