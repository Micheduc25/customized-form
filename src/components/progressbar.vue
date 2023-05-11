<template>
  <div class="w-6/12">
    <div class="relative rounded-lg h-3 bg-gray-200">
      <div
        class="absolute left-0 h-full flex transition-all"
        :style="`width: ${(store.stage / 5) * 100}%`"
      >
        <div
          id="progress"
          class="progress bg-green-950 h-full rounded-lg w-full transition-all"
        ></div>

        <div
          class="h-4 w-4 flex-shrink-0 bg-green-950 rounded-full -ml-2 mt-[6px] top-1/2 transform -translate-y-1/2"
        ></div>
      </div>
    </div>

    <div class="flex justify-between w-full mt-2">
      <span class="text-green-950 text-sm font-bold">Votre Profil</span
      ><span class="text-green-950 opacity-50">{{ `${store.stage} / 5` }}</span>
    </div>
  </div>
</template>

<script setup>
import { useProgressStore } from "../stores/progress";

const store = useProgressStore();
</script>
