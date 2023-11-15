<template>
  <first-article />
  <article-item
    v-for="(article, index) in newsStore.otherArticles"
    :key="index"
    :article="article"
  />
</template>

<script setup>
import FirstArticle from "./FirstArticle.vue";
import ArticleItem from "./ArticleItem.vue";
import { useNewsStore } from "../stores/useNewsStore";

const newsStore = useNewsStore();
</script>
