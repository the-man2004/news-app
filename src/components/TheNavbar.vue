<template>
  <nav
    class="flex flex-row justify-between shadow-lg py-1 px-4 md:py-2 sm:px-8"
  >
    <div>
      <router-link to="/" class="font-bold md:text-xl">Daily News</router-link>
    </div>
    <the-menu></the-menu>
    <div class="hidden lg:flex lg:gap-6">
      <button>tech</button>
      <button>health</button>
      <button>sports</button>
      <button>science</button>
      <button>general</button>
      <button>business</button>
      <button>entertainment</button>
      <router-link
        to="/about"
        class="font-semibold my-auto px-4 border-2 border-black"
        >about</router-link
      >
    </div>
  </nav>
</template>

<script setup>
import TheMenu from "../components/burgerMenu/TheMenu.vue";
</script>

<style scoped>
button:hover {
  text-decoration: underline;
}
</style>
