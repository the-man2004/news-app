<template>
  <div class="lg:hidden">
    <svg
      @click="handleMenuClick"
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
      class="p-4 shadow-xl absolute top-8 left-0 right-0 gap-4 bg-white sm:p-8"
    >
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const handleMenuClick = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
button {
  display: block;
  padding-bottom: 10px;
}

button:hover {
  text-decoration: underline;
}
</style>
