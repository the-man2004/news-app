<template>
  <li class="grid grid-cols-3 gap-2 md:gap-4">
    <img :src="img" alt="" />
    <div class="col-span-2">
      <span>{{ props.category }}</span>
      <h2>{{ title }}</h2>
      <p>{{ author }}</p>
    </div>
  </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["article", "category"]);

console.log(props.category);

const img = computed(() => props.article.urlToImage);
const title = computed(() => props.article.title);
const author = computed(() => props.article.author);
</script>
