<template>
  <button @click="newsStore.fetchNews">FETCH NEWS</button>
  <article-list v-if="newsStore.isFetching === false" />
</template>

<script setup>
import { useNewsStore } from "../stores/useNewsStore.js";
import ArticleList from "../components/ArticleList.vue";

const newsStore = useNewsStore();
</script>
