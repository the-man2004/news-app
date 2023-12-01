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
      <form
        @submit.prevent="handleFormSubmission"
        class="text-sm max-w-2xl mx-auto p-4 md:text-lg md:p-8"
      >
        <div class="flex flex-col mb-2 md:mb-4">
          <label for="name" class="font-semibold">Name</label>
          <input
            v-model="name"
            @input="checkName"
            id="name"
            :class="{ invalid: !isNameValid }"
            class="border-b-2 border-black py-1 outline-none md:py-2"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div class="flex flex-col mb-2 md:mb-4">
          <label for="email" class="font-semibold">E-mail</label>
          <input
            v-model="email"
            @input="checkEmail"
            id="email"
            :class="{ invalid: !isEmailValid }"
            class="border-b-2 border-black py-1 outline-none md:py-2"
            placeholder="Enter your E-mail"
            type="email"
          />
        </div>
        <div class="flex flex-col mb-2 md:mb-4">
          <label for="message" class="font-semibold">Message</label>
          <textarea
            v-model="message"
            @input="checkMessage"
            id="message"
            :class="{ invalid: !isMessageValid }"
            class="h-24 resize-none border-b-2 border-black py-1 outline-none md:h-40 md:py-2"
            placeholder="Enter a message"
          ></textarea>
        </div>
        <button class="mt-4 py-2 px-6 w-full bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  </div>

  <!-- :class="{ disabled: !isFormValid }"
  :disabled="isFormValid === false" -->
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const isFormValid = ref(true);

const isNameValid = ref(true);
const isEmailValid = ref(true);
const isMessageValid = ref(true);

// Functions to check validity
const checkName = () => {
  if (name.value === "") {
    isNameValid.value = false;
  } else {
    isNameValid.value = true;
  }
};
const checkEmail = () => {
  if (!email.value.includes("@")) {
    isEmailValid.value = false;
  } else {
    isEmailValid.value = true;
  }
};
const checkMessage = () => {
  if (message.value === "") {
    isMessageValid.value = false;
  } else {
    isMessageValid.value = true;
  }
};

const handleFormSubmission = () => {
  if (name.value === "") {
    isNameValid.value = false;
    isFormValid.value = false;
  }
  if (!email.value.includes("@")) {
    isEmailValid.value = false;
    isFormValid.value = false;
  }
  if (message.value === "") {
    isMessageValid.value = false;
    isFormValid.value = false;
  }
};
</script>

<style scoped>
.invalid {
  /* background: rgba(255, 0, 0, 0.15); */
  border-bottom-color: red;
  color: red;
}
.invalid::placeholder {
  color: red;
}

.disabled {
  cursor: not-allowed;
}
</style>
