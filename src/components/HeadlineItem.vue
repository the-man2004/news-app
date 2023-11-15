<template>
  <li>
    <img :src="thumbnail" alt="" />
    <h1>{{ title }}</h1>
    <span>{{ author }}</span>
    <a :href="link">Read more</a>
  </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["article"]);

const thumbnail = computed(() => props.article.urlToImage);
const title = computed(() => props.article.title);
const author = computed(() => props.article.author);
const link = computed(() => props.article.url);
</script>
