<script setup>
// import {} from 'vue';
import MainLayout from "../layouts/main-layout.vue";
import ItemCard from "../components/ItemCard.vue";
import house from "../components/icons/house.vue";
import building from "../components/icons/building.vue";
import paintRoller from "../components/icons/paint-roller.vue";
import { useDataStore } from "../stores/data";
import { useRouter } from "vue-router";

const data = useDataStore();
const router = useRouter();

const selectObjective = (objective) => {
  data.$patch({ data: { objective } });
};

// navigation function for next stage
const navigateNext = () => {
  router.push("/rooms");
};
</script>

<template>
  <MainLayout
    title-text="Pour réaliser quel type de travaux ?"
    image="image_3.jpg"
  >
    <div class="items flex flex-wrap mb-12">
      <ItemCard
        @clicked="selectObjective('Rénovation complète')"
        :title="`Rénovation complète`"
        :is-selected="data.data.objective == 'Rénovation complète'"
      >
        <template #icon>
          <house></house>
        </template>
      </ItemCard>
      <ItemCard
        :title="`Investissement locatif`"
        @clicked="selectObjective('Investissement locatif')"
        :is-selected="data.data.objective == 'Investissement locatif'"
      >
        <template #icon>
          <building />
        </template>
      </ItemCard>
      <ItemCard
        :title="`Rafraîchir et moderniser`"
        @clicked="selectObjective('Rafraîchir et moderniser')"
        :is-selected="data.data.objective == 'Rafraîchir et moderniser'"
      >
        <template #icon>
          <paintRoller />
        </template>
      </ItemCard>
    </div>

    <div class="flex">
      <button
        @click="navigateNext"
        class="bg-appGreen text-white rounded-lg px-6 py-3 font-bold"
        :class="{ 'bg-gray-300': data.data.objective.length == 0 }"
        :disabled="data.data.objective.length == 0"
      >
        Étape suivante
      </button>
    </div>
  </MainLayout>
</template>
