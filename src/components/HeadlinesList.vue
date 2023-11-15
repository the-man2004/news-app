<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-8">
      <div
        class="mt-10 mb-4 border-b-2 border-l-2 border-black md:mt-16 md:mb-8"
      >
        <h3 class="text-sm font-extrabold pl-2 md:text-lg md:pl-4 md:pb-1">
          Tech Headlines
        </h3>
      </div>
      <first-headline />
      <ul class="mb-10 grid gap-4 grid-cols-2 md:grid-cols-3 md:gap-6 md:mb-16">
        <headline-item
          v-for="(article, index) in newsStore.otherHeadlines"
          :key="index"
          :article="article"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import FirstHeadline from "./FirstHeadline.vue";
import HeadlineItem from "./HeadlineItem.vue";
import { useNewsStore } from "../stores/useNewsStore";

const newsStore = useNewsStore();
</script>
