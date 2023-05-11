<script setup>
import MainLayout from "../layouts/main-layout.vue";
import { useDataStore } from "../stores/data";
import { computed } from "vue";

const dataStore = useDataStore();

const canValidate = computed(() => {
  const contactInfo = dataStore.data.contact;

  return contactInfo.email && contactInfo.phone && contactInfo.postal_code;
});
</script>

<template>
  <MainLayout
    title-text="Renseignez ces informations et recevez votre estimation"
    image="image_6.jpg"
  >
    <div class="flex flex-wrap">
      <div class="input-item mr-8">
        <div class="font-bold text-appGreen text-md mb-3">
          Votre adresse mail*
        </div>
        <div class="relative flex items-center mb-8 w-max">
          <input
            type="email"
            v-model="dataStore.data.contact.email"
            placeholder="example@gmail.com"
            class="rounded-2xl text-appGreen font-bold text-sm border border-appGray focus:border-appGreenLight hover:border-appGreenLight bg-transparent px-4 py-4 focus:outline-none w-[300px]"
          />
        </div>
      </div>

      <div class="input-item mr-8">
        <div class="font-bold text-appGreen text-md mb-3">Votre téléphone*</div>
        <div class="relative flex items-center mb-8 w-max">
          <input
            type="tel"
            v-model="dataStore.data.contact.phone"
            placeholder="677 77 77 77"
            class="rounded-2xl text-appGreen font-bold text-sm border border-appGray focus:border-appGreenLight hover:border-appGreenLight bg-transparent px-4 py-4 focus:outline-none w-[300px]"
          />
        </div>
      </div>
      <div class="input-item mr-8 mb-4">
        <div class="font-bold text-appGreen text-md mb-3">
          Code postal du chantier*
        </div>
        <div class="relative flex items-center mb-8 w-max">
          <input
            type="number"
            min="0"
            required
            v-model="dataStore.data.contact.postal_code"
            @keypress="(event) => event.charCode >= 48"
            placeholder="33000"
            class="rounded-2xl text-appGreen font-bold text-sm border border-appGray focus:border-appGreenLight hover:border-appGreenLight bg-transparent px-4 py-4 focus:outline-none w-[300px]"
          />
        </div>
      </div>
    </div>
    <div class="flex mb-4">
      <button
        @click="$router.push('/estimation')"
        class="bg-appGreen text-white rounded-lg px-6 py-3 font-bold"
        :class="{
          'bg-gray-300': !canValidate,
        }"
        :disabled="!canValidate"
      >
        Visualiser mon estimation
      </button>
    </div>
    <p class="mb-6 text-[10px] text-gray-500">
      * En validant votre adresse mail, vous acceptez de recevoir les mails de
      Little Worker.
    </p>
  </MainLayout>
</template>
