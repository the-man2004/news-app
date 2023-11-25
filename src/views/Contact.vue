<template>
  <div class="min-h-screen m-4 p-4 md:p-8 md:m-8">
    <div class="max-w-4xl w-full mx-auto border-2 border-black">
      <h1 class="my-4 text-3xl text-center font-bold sm:text-5xl lg:text-7xl">
        Contact Us
      </h1>
      <form>
        <div>
          <label for="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label for="email">E-mail</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>
