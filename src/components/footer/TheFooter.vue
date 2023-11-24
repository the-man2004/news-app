<template>
  <div class="bg-black text-white mt-12 mt:pt-20">
    <div
      class="max-w-6xl mx-auto text-xs p-4 md:grid md:grid-cols-5 md:text-sm md:p-8"
    >
      <div class="mb-8 text-center md:mb-0 md:col-span-3 md:text-left">
        <router-link to="/technology" class="block mb-4 text-lg font-bold"
          >Daily News</router-link
        >
        <router-link to="/contact" class="py-2 px-4 border"
          >CONTACT US</router-link
        >
      </div>
      <div class="grid grid-cols-2 md:col-span-2">
        <div class="flex flex-col gap-1 md:pl-4 md:gap-4 md:border-l-2">
          <router-link to="/search">SEARCH</router-link>
          <router-link to="/technology">TECHNOLOGY</router-link>
          <router-link to="/business">BUSINESS</router-link>
          <router-link to="/science">SCIENCE</router-link>
        </div>
        <div class="ml-auto flex flex-col gap-1 md:pl-4 md:gap-4 md:border-l-2">
          <a href="https://instagram.com">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://x.com">
            <i class="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="https://facebook.com">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
