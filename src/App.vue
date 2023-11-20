<template>
  <the-navbar />
  <router-view></router-view>
  <the-footer />
</template>

<script setup>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/footer/TheFooter.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  scroll-behavior: smooth;
}

img {
  aspect-ratio: 16/9;
}
</style>
