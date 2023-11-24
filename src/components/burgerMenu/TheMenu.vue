<template>
  <nav class="lg:hidden">
    <svg
      @click="toggleMenu"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 cursor-pointer"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
    <div
      v-if="isMenuOpen"
      class="p-4 shadow-xl absolute top-8 left-0 right-0 gap-4 flex flex-col bg-white sm:p-8"
    >
      <router-link to="/search">
        <svg
          @click="toggleMenu"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mb-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </router-link>
      <router-link to="/technology" @click="toggleMenu()" class="link"
        >tech</router-link
      >
      <router-link to="/health" @click="toggleMenu()" class="link"
        >health</router-link
      >
      <router-link to="/sports" @click="toggleMenu()" class="link"
        >sports</router-link
      >
      <router-link to="/science" @click="toggleMenu()" class="link"
        >science</router-link
      >
      <router-link to="/general" @click="toggleMenu()" class="link"
        >general</router-link
      >
      <router-link to="/business" @click="toggleMenu()" class="link"
        >business</router-link
      >
      <router-link to="/entertainment" @click="toggleMenu()" class="link"
        >entertainment</router-link
      >
      <router-link
        to="/contact"
        @click="toggleMenu"
        class="font-semibold w-fit my-auto px-4 border-2 border-black"
        >contact</router-link
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
button {
  display: block;
  padding-bottom: 10px;
}

.link:hover {
  text-decoration: underline;
}
</style>
