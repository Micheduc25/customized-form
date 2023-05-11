<script setup>
// import {} from 'vue';
import MainLayout from "../layouts/main-layout.vue";
import ItemCard from "../components/ItemCard.vue";
import key from "../components/icons/key.vue";
import search from "../components/icons/search.vue";
import contract from "../components/icons/contract.vue";
import eye from "../components/icons/eye.vue";
import { useDataStore } from "../stores/data";
import { useRouter } from "vue-router";
import { useRoutesStore } from "../stores/routes";
import { useProgressStore } from "../stores/progress";
// import { onMounted, onBeforeMount } from "vue";

const data = useDataStore();
const router = useRouter();

const selectStatus = (status) => {
  data.$patch({ data: { status } });
};

// navigation function for next stage
const navigateNext = () => {
  router.push("/objective");
};
</script>

<template>
  <MainLayout title-text="Pour ce projet de rénovation, vous êtes ?">
    <div class="items flex flex-wrap mb-12">
      <ItemCard
        @clicked="selectStatus('Propriétaire')"
        :title="`Propriétaire`"
        :is-selected="data.data.status == 'Propriétaire'"
      >
        <template #icon>
          <key></key>
        </template>
      </ItemCard>
      <ItemCard
        :title="`En recherche d'un bien`"
        @clicked="selectStatus('En recherche d\'un bien')"
        :is-selected="data.data.status == 'En recherche d\'un bien'"
      >
        <template #icon>
          <search />
        </template>
      </ItemCard>
      <ItemCard
        :title="`Signataire d'un compromis`"
        @clicked="selectStatus('Signataire d\'un compromis')"
        :is-selected="data.data.status == 'Signataire d\'un compromis'"
      >
        <template #icon>
          <contract />
        </template>
      </ItemCard>
      <ItemCard
        :title="`Juste curieux`"
        @clicked="selectStatus('Juste curieux')"
        :is-selected="data.data.status == 'Juste curieux'"
      >
        <template #icon>
          <eye />
        </template>
      </ItemCard>
    </div>

    <div class="flex">
      <button
        @click="navigateNext"
        class="bg-appGreen text-white rounded-lg px-6 py-3 font-bold"
        :class="{ 'bg-gray-300': data.data.status.length == 0 }"
        :disabled="data.data.status.length == 0"
      >
        Étape suivante
      </button>
    </div>
  </MainLayout>
</template>

<style lang="scss" scoped></style>
