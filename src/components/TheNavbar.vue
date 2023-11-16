<template>
  <nav
    class="flex flex-row justify-between shadow-lg py-1 px-4 md:py-2 md:px-8"
  >
    <div>
      <router-link to="/" class="font-bold md:text-xl">Daily News</router-link>
    </div>
    <div class="lg:hidden">
      <svg
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
    </div>
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

<style scoped>
button:hover {
  text-decoration: underline;
}
</style>
