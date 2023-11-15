<template>
  <div>
    <img :src="thumbnail" alt="" />
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <span>{{ author }}</span>
    <a :href="link">Read more</a>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useNewsStore } from "../stores/useNewsStore.js";

const newsStore = useNewsStore();

const thumbnail = computed(() => newsStore.firstArticle.urlToImage);
const title = computed(() => newsStore.firstArticle.title);
const description = computed(() => newsStore.firstArticle.description);
const author = computed(() => newsStore.firstArticle.author);
const link = computed(() => newsStore.firstArticle.url);
</script>
