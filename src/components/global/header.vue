<script setup>
import Progressbar from "../progressbar.vue";
</script>

<template>
  <header
    class="flex justify-between items-start border border-[#d8e5e1] pt-8 pb-4 px-12 sticky top-0 bg-white"
  >
    <div class="flex w-44">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <Progressbar />
  </header>
</template>
