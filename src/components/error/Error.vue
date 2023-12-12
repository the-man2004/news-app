<template>
  <div class="error-container flex justify-center">
    <div class="mt-24 px-8 md:mt-36">
      <h1 class="text-black text-xl font-semibold md:text-3xl">
        Something went wrong! Please try again later.
      </h1>
      <button
        @click="newsStore.fetchNews"
        class="block mt-4 mx-auto py-2 px-10 bg-black text-white"
      >
        Retry
      </button>
    </div>
  </div>
</template>

<script setup>
import { useNewsStore } from "../../stores/useNewsStore";

const newsStore = useNewsStore();
</script>

<style scoped>
.error-container {
  min-height: calc(100vh - 5.5rem);
}
</style>
