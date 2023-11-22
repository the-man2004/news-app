<template>
  <div class="min-h-screen">
    <div class="max-w-6xl mx-auto p-4 md:p-8">
      <div class="my-8 md:my-16">
        <h2 class="text-center text-lg font-bold sm:text-2xl md:text-5xl">
          Search For Interesting Articles
        </h2>
      </div>
      <div class="max-w-3xl mx-auto">
        <form class="text-sm grid grid-cols-4 border-2 border-black">
          <div class="col-span-3 flex">
            <i class="fa-solid fa-magnifying-glass my-auto p-2 md:p-4"></i>
            <input
              type="text"
              placeholder='Try "Apple"'
              class="w-full h-full outline-none"
            />
          </div>
          <button class="w-full bg-black text-white">SEARCH</button>
        </form>
      </div>
      <div
        class="max-w-3xl mx-auto text-xs grid grid-cols-8 sm:grid-cols-4 mt-8 md:mt-12 md:text-sm"
      >
        <div class="col-span-5 sm:col-span-3">
          <h3>From 88,000+ resources</h3>
        </div>
        <div class="col-span-3 sm:col-span-1">
          <div class="border-2 border-black flex py-1 px-2 md:py-2 md:px-4">
            <button @click="toggleDropdown" class="w-full text-left">
              {{ category }}
            </button>
            <button @click="toggleDropdown">
              <i class="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <div
            v-if="isDropdownOpen === true"
            @click="handleCategoryChange"
            class="py-1 px-2 border-x-2 border-b-2 border-black md:py-2 md:px-4"
          >
            <button>technology</button>
            <button>health</button>
            <button>sports</button>
            <button>science</button>
            <button>general</button>
            <button>business</button>
            <button>entertainment</button>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="mt-8 border-b-2 border-black md:mt-12">
        <h3 class="mb-1">Results ({{ newsStore.searchResults.length }})</h3>
      </div>

      <!-- Results section -->
      <div class="mt-4 md:mt-8">
        <ul class="grid gap-4 md:gap-8">
          <search-item
            v-for="(article, index) in newsStore.searchResults"
            :key="index"
            :article="article"
            :category="category"
          ></search-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useNewsStore } from "@/stores/useNewsStore";
import SearchItem from "../components/search/SearchItem.vue";

const newsStore = useNewsStore();

const category = ref("technology");
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleCategoryChange = (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target.innerText);
    category.value = e.target.innerText;

    toggleDropdown();
  }
};

onMounted(() => {
  newsStore.searchNews("apple", category.value);
});
</script>

<style scoped>
button {
  display: block;
  padding: 1px 0 1px 0;
}
</style>
