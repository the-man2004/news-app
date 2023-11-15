<template>
  <li>
    <a :href="link">
      <img :src="thumbnail" alt="Article thumbnail" />
      <h1 class="mt-2 font-bold text-sm leading-5 sm:font-extrabold sm:text-md">
        {{ title }}
      </h1>
      <p class="mt-2 font-bold text-xs sm:text-sm">{{ author }}</p>
    </a>
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
