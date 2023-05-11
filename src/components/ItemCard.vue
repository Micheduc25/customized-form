<template>
  <button
    class="w-36 h-36 rounded-xl p-5 border-2 border-[#d8e5e1] flex flex-col items-center justify-center mr-8 hover:border-appGreen transition-all"
    @click="emit('clicked')"
    :class="{ 'border-green-950': isSelected }"
  >
    <slot name="icon"></slot>
    <div class="mt-4 text-sm font-bold">{{ title }}</div>
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },

  isSelected: {
    type: Boolean,
  },
});

const emit = defineEmits(["clicked"]);
</script>
