<template>
  <li class="hover:shadow-xl">
    <a :href="url" class="grid grid-cols-3 gap-2 md:gap-4">
      <img :src="img" alt="" />
      <div class="col-span-2 text-xs">
        <h2 class="mb-2 font-bold text-sm sm:text-lg lg:text-2xl">
          {{ title }}
        </h2>
        <p class="font-semibold">{{ author }}</p>
      </div>
    </a>
  </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["article", "category"]);

const url = computed(() => props.article.url);
const img = computed(() => props.article.urlToImage);
const title = computed(() => props.article.title);
const author = computed(() => props.article.author);
</script>
