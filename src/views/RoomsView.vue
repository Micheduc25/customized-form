<script setup>
import MainLayout from "../layouts/main-layout.vue";
import CountsItem from "../components/CountsItem.vue";
import bed from "../components/icons/bed.vue";
import { useDataStore } from "../stores/data";
import Couch from "../components/icons/couch.vue";
import Utensils from "../components/icons/utensils.vue";
import Shower from "../components/icons/shower.vue";
import PlusCircle from "../components/icons/plus-circle.vue";

import { computed } from "vue";

const dataStore = useDataStore();

const updateCount = (val, room) => {
  dataStore.$patch({
    data: {
      rooms: {
        [room]: val,
      },
    },
  });
};

const isCountEmpty = computed(() => {
  const roomData = dataStore.data.rooms;

  return (
    roomData.chambre == 0 &&
    roomData.salon == 0 &&
    roomData.bain == 0 &&
    roomData.cuisine == 0 &&
    roomData.autre == 0
  );
});
</script>

<template>
  <MainLayout
    title-text="Quelles pièces souhaitez-vous rénover ?"
    image="image_4.jpg"
  >
    <div class="flex flex-wrap mb-12">
      <CountsItem
        title="Chambre"
        :initial-value="dataStore.data.rooms.chambre"
        @count-changed="(val) => updateCount(val, 'chambre')"
      >
        <template #icon>
          <bed />
        </template>
      </CountsItem>
      <CountsItem
        title="Salon"
        :initial-value="dataStore.data.rooms.salon"
        @count-changed="(val) => updateCount(val, 'salon')"
      >
        <template #icon>
          <Couch />
        </template>
      </CountsItem>
      <CountsItem
        title="Cuisine"
        :initial-value="dataStore.data.rooms.cuisine"
        @count-changed="(val) => updateCount(val, 'cuisine')"
      >
        <template #icon>
          <Utensils />
        </template>
      </CountsItem>
      <CountsItem
        title="Salle de bain"
        :initial-value="dataStore.data.rooms.bain"
        @count-changed="(val) => updateCount(val, 'bain')"
      >
        <template #icon>
          <Shower />
        </template>
      </CountsItem>
      <CountsItem
        title="Autres"
        :initial-value="dataStore.data.rooms.autre"
        @count-changed="(val) => updateCount(val, 'autre')"
      >
        <template #icon>
          <PlusCircle />
        </template>
      </CountsItem>
    </div>

    <div class="flex mb-8">
      <button
        @click="$router.push('/surface')"
        class="bg-appGreen text-white rounded-lg px-6 py-3 font-bold"
        :class="{ 'bg-gray-300': isCountEmpty }"
        :disabled="isCountEmpty"
      >
        Étape suivante
      </button>
    </div>
  </MainLayout>
</template>
