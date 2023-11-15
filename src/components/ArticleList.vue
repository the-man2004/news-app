<template>
  <first-article />
  <div>
    <article-item
      v-for="(article, index) in newsStore.otherArticles"
      :key="index"
      :article="article"
    />
  </div>
</template>

<script setup>
import FirstArticle from "./FirstArticle.vue";
import ArticleItem from "./ArticleItem.vue";
import { useNewsStore } from "../stores/useNewsStore";

const newsStore = useNewsStore();
</script>
