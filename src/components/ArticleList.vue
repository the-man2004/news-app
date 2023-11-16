<template>
  <div>
    <div class="max-w-6xl mx-auto px-4 sm:px-8">
      <div class="text-right mb-8 border-t-2 border-r-2 border-black md:mb-16">
        <h3 class="text-sm font-extrabold pr-2 md:text-lg md:pr-4 md:pt-1">
          Things You Might Like
        </h3>
      </div>
      <ul class="grid gap-8 md:gap-12">
        <article-item
          v-for="(article, index) in newsStore.otherArticles"
          :key="index"
          :article="article"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import ArticleItem from "./ArticleItem.vue";
import { useNewsStore } from "../stores/useNewsStore";

const newsStore = useNewsStore();
</script>
