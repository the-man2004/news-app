<template>
  <nav
    class="flex flex-row justify-between shadow-lg py-1 px-4 md:py-2 sm:px-8"
  >
    <div>
      <router-link to="/" class="font-bold md:text-xl">Daily News</router-link>
    </div>
    <the-menu></the-menu>
    <div class="hidden lg:flex lg:gap-6">
      <router-link to="/technology">tech</router-link>
      <router-link to="/health">health</router-link>
      <router-link to="/sports">sports</router-link>
      <router-link to="/science">science</router-link>
      <router-link to="/general">general</router-link>
      <router-link to="/business">business</router-link>
      <router-link to="/entertainment">entertainment</router-link>
      <router-link to="/search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </router-link>
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
import { useNewsStore } from "../stores/useNewsStore";

const newsStore = useNewsStore();

const handleBtnClick = (category) => {
  newsStore.changeCategory(category);
};
</script>

<style scoped>
button:hover {
  text-decoration: underline;
}
</style>
