<template>
  <the-navbar />
  <router-view></router-view>
</template>

<script setup>
import TheNavbar from "./components/TheNavbar.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  aspect-ratio: 16/9;
}
</style>
