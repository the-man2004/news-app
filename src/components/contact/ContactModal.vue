<template>
  <teleport to="#modals">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black opacity-60"></div>
    <!-- Modal -->
    <div
      class="fixed top-16 left-16 right-16 max-w-xl mx-auto p-8 z-10 aspect-square flex items-center justify-center bg-white"
    >
      <div v-if="isLoading" class="flex flex-col items-center">
        <span class="loader my-auto"></span>
        <h2 class="mt-2 font-semibold">Loading...</h2>
      </div>
      <div v-else>
        <h2 class="text-md font-semibold text-center sm:text-2xl lg:text-3xl">
          Message sent successfully!
        </h2>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;

    setTimeout(() => {
      // emit("close");

      router.push({
        path: "/",
        redirect: "/technology",
      });
    }, 2000);
  }, 3000);
});
</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 3px solid black;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  position: absolute;
  box-sizing: border-box;
  left: 20px;
  top: 31px;
  border: 10px solid transparent;
  border-right-color: black;
  transform: rotate(-40deg);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
