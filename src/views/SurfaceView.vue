<script setup>
import MainLayout from "../layouts/main-layout.vue";
import { useDataStore } from "../stores/data";

const dataStore = useDataStore();
</script>

<template>
  <MainLayout
    title-text="Quelle est la surface à rénover ?"
    image="image_5.jpg"
  >
    <div class="font-bold text-appGreen text-sm mb-2">
      Surface à rénover en m²
    </div>
    <div class="relative flex items-center mb-10 w-max">
      <input
        type="number"
        min="0"
        v-model="dataStore.data.surface"
        @keypress="(event) => event.charCode >= 48"
        class="rounded-2xl text-appGreen font-bold text-sm border border-appGray focus:border-appGreenLight hover:border-appGreenLight bg-transparent px-4 py-4 focus:outline-none"
      />
      <div class="mr-4 text-appGray absolute right-1">m²</div>
    </div>
    <div class="flex mb-8">
      <button
        @click="$router.push('/estimation')"
        class="bg-appGreen text-white rounded-lg px-6 py-3 font-bold"
        :class="{
          'bg-gray-300': !dataStore.data.surface || dataStore.data.surface < 1,
        }"
        :disabled="!dataStore.data.surface || dataStore.data.surface < 1"
      >
        Étape suivante
      </button>
    </div>
  </MainLayout>
</template>
