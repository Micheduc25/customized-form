<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  initialValue: Number,
});

const emit = defineEmits(["countChanged"]);

const count = ref(props.initialValue ?? 0);

const incrementCount = () => {
  count.value++;
  emit("countChanged", count.value);
};

const decrementCount = () => {
  if (count.value == 0) return;

  count.value--;
  emit("countChanged", count.value);
};
</script>

<template>
  <button
    @click.stop="incrementCount"
    class="flex cursor-pointer justify-between items-center rounded-xl border border-appGray w-[300px] px-[14px] py-[11px] mr-6 mb-6"
  >
    <div class="flex items-center">
      <slot name="icon">
        <!-- slot for the icon -->
      </slot>

      <span class="ml-3 font-semibold select-none">{{ title }}</span>
    </div>

    <div class="flex items-center">
      <button
        @click.stop="decrementCount"
        class="rounded-lg flex select-none justify-center leading-7 h-8 w-8 align-middle bg-appGray text-appGreen font-bold text-2xl hover:bg-[#b8cfc8]"
      >
        -
      </button>
      <div class="text-[24px] w-6 text-center mx-3 select-none">
        {{ count }}
      </div>

      <button
        @click.stop="incrementCount"
        class="rounded-lg flex select-none justify-center leading-7 h-8 w-8 align-middle bg-appGray text-appGreen font-bold text-2xl hover:bg-[#b8cfc8]"
      >
        +
      </button>
    </div>
  </button>
</template>
