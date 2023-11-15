<template>
  <div>
    <div class="max-w-6xl mx-auto px-8">
      <first-headline />
      <ul>
        <headline-item
          v-for="(article, index) in newsStore.otherHeadlines"
          :key="index"
          :article="article"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import FirstHeadline from "./FirstHeadline.vue";
import HeadlineItem from "./HeadlineItem.vue";
import { useNewsStore } from "../stores/useNewsStore";

const newsStore = useNewsStore();
</script>
