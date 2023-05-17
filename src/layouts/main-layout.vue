<script setup>
import { computed } from "vue";
import { useProgressStore } from "../stores/progress";
import { useRoutesStore } from "../stores/routes";

const store = useProgressStore();
const routes = useRoutesStore();

const props = defineProps({
  titleText: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "image_1.jpg",
  },
});

const imageUrl = new URL(`../assets/images/${props.image}`, import.meta.url)
  .href;
</script>

<template>
  <section class="flex bg-[#f6faf8]">
    <aside class="w-1/3 flex-shrink-0">
      <img
        :src="imageUrl"
        style="height: calc(100vh - 94px); position: sticky; top: 94px"
        alt="side-image"
      />
    </aside>
    <main class="flex-grow pl-28 mt-12">
      <div v-if="store.stage > 1" class="mb-4">
        <RouterLink
          :to="routes.routesMap.get(store.stage - 1)"
          class="text-green-950 font-bold text-md"
          >&#10094; &nbsp; Precedent</RouterLink
        >
      </div>

      <div class="mb-12">
        <h2 class="text-appGreenLight font-playFair text-[22px] font-bold">
          {{ props.titleText }}

          <div class="bg-[#d8e5e1] w-12 h-[2px] mt-2"></div>
        </h2>
      </div>

      <slot> <!-- page main body here --></slot>
    </main>
  </section>
</template>
