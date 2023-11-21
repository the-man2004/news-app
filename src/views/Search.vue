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
    </div>
  </div>
</template>
