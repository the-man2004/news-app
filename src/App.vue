<template>
  <button @click="newsStore.fetchNews">FETCH NEWS</button>
</template>

<script setup>
import { useNewsStore } from "./stores/useNewsStore.js";

const newsStore = useNewsStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
