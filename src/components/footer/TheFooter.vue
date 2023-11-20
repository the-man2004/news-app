<template>
  <div class="bg-black text-white mt-12 mt:pt-20">
    <div
      class="max-w-6xl mx-auto text-xs p-4 md:grid md:grid-cols-4 md:text-sm md:p-8"
    >
      <div class="mb-8 text-center md:mb-0 md:col-span-2 md:text-left">
        <router-link to="/technology" class="block text-lg font-bold"
          >Daily News</router-link
        >
        <button class="mt-2 py-2 px-4 border">CONTACT US</button>
      </div>
      <div class="grid grid-cols-2 md:col-span-2">
        <div class="flex flex-col gap-1 md:pl-4 md:gap-4 md:border-l-2">
          <router-link to="/search">SEARCH</router-link>
          <router-link to="/about">ABOUT</router-link>
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
