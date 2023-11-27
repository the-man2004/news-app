<template>
  <div class="min-h-screen m-4 p-4 md:p-8 md:m-8">
    <div class="max-w-4xl w-full mx-auto border-2 border-black">
      <h1
        class="mt-4 mb-8 text-3xl text-center font-bold sm:text-5xl md:mt-8 lg:text-7xl"
      >
        Contact Us
      </h1>
      <p class="text-center font-semibold max-w-sm mx-auto px-4 md:px-8">
        If you have any questions, then please fill in the form down below!
      </p>
      <form class="text-sm max-w-2xl mx-auto p-4 md:text-lg md:p-8">
        <div class="flex flex-col">
          <label for="name">Name</label>
          <input
            id="name"
            class="border-b-2 border-black"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div class="flex flex-col">
          <label for="email">E-mail</label>
          <input
            id="email"
            class="border-b-2 border-black"
            placeholder="Enter your E-mail"
            type="email"
          />
        </div>
        <div class="flex flex-col">
          <label for="message">Message</label>
          <textarea
            id="message"
            class="border-b-2 border-black"
            placeholder="Enter a message  "
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>
