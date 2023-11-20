<template>
  <div class="mb-8 text-sm md:mb-16 md:text-lg">
    <a :href="link">
      <img :src="thumbnail" class="w-full" />
      <div>
        <h1
          class="leading-5 font-extrabold text-lg mt-2 sm:text-2xl md:text-4xl"
        >
          {{ title }}
        </h1>
        <p class="mt-2 w-2/3 sm:w-1/2">{{ description }}</p>
        <p class="font-bold mt-2">{{ author }}</p>
      </div>
    </a>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useNewsStore } from "../stores/useNewsStore.js";

const newsStore = useNewsStore();

const thumbnail = computed(() => newsStore.headlineArticle.urlToImage);
const title = computed(() => newsStore.headlineArticle.title.toUpperCase());
const description = computed(() => newsStore.headlineArticle.description);
const author = computed(() => newsStore.headlineArticle.author);
const link = computed(() => newsStore.headlineArticle.url);
</script>
