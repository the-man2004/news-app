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

const props = defineProps(["article"]);

const thumbnail = computed(() => props.article.urlToImage);
const title = computed(() => props.article.title);
const description = computed(() => props.article.description);
const author = computed(() => props.article.author);
const link = computed(() => props.article.url);
</script>
