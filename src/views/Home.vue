<template>
  <button @click="newsStore.fetchNews">FETCH NEWS</button>
</template>

<script setup>
import { useNewsStore } from "../stores/useNewsStore.js";

const newsStore = useNewsStore();
</script>
