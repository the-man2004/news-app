<template>
  <div class="min-h-screen m-4 p-4 md:p-8 md:m-8">
    <div class="max-w-4xl w-full mx-auto border-2 border-black">
      <h1
        class="my-4 text-3xl text-center font-bold sm:text-5xl md:my-8 lg:text-7xl"
      >
        Contact Us
      </h1>
      <p
        class="text-center font-semibold text-sm max-w-md mx-auto px-4 pb-4 md:text-xl md:px-8"
      >
        If you have any questions, then please fill in the form down below!
      </p>
      <form class="text-sm max-w-2xl mx-auto p-4 md:text-lg md:p-8">
        <div class="flex flex-col mb-2 md:mb-4">
          <label for="name" class="font-semibold">Name</label>
          <input
            id="name"
            class="border-b-2 border-black py-1 outline-none md:py-2"
            placeholder="Enter your name"
            required
            type="text"
          />
        </div>
        <div class="flex flex-col mb-2 md:mb-4">
          <label for="email" class="font-semibold">E-mail</label>
          <input
            id="email"
            class="border-b-2 border-black py-1 outline-none md:py-2"
            placeholder="Enter your E-mail"
            required
            type="email"
          />
        </div>
        <div class="flex flex-col mb-2 md:mb-4">
          <label for="message" class="font-semibold">Message</label>
          <textarea
            id="message"
            class="h-24 resize-none border-b-2 border-black py-1 outline-none md:h-40 md:py-2"
            placeholder="Enter a message"
            required
          ></textarea>
        </div>
        <button class="mt-12 py-2 px-6 w-full bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
