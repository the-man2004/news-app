<template>
  <li class="">
    <a :href="link" class="grid gap-2 grid-cols-3 md:gap-4">
      <img :src="thumbnail" alt="Article thumbnail" />
      <div class="col-span-2">
        <h1 class="font-bold leading-5 sm:text-xl md:text-1xl">{{ title }}</h1>
        <span class="text-xs">{{ author }}</span>
      </div>
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
