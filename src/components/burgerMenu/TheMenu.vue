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
      class="p-4 shadow-xl absolute top-8 left-0 right-0 gap-4 bg-white sm:p-8"
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
      <button @click="handleBtnClick('technology')">tech</button>
      <button @click="handleBtnClick('health')">health</button>
      <button @click="handleBtnClick('sports')">sports</button>
      <button @click="handleBtnClick('science')">science</button>
      <button @click="handleBtnClick('general')">general</button>
      <button @click="handleBtnClick('business')">business</button>
      <button @click="handleBtnClick('entertainment')">entertainment</button>

      <router-link
        to="/about"
        @click="toggleMenu"
        class="font-semibold my-auto px-4 border-2 border-black"
        >about</router-link
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useNewsStore } from "../../stores/useNewsStore";

const newsStore = useNewsStore();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleBtnClick = (category) => {
  newsStore.changeCategory(category);
  toggleMenu();
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
