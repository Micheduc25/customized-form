import { ref } from "vue";
import { defineStore } from "pinia";

export const useProgressStore = defineStore("progress", () => {
  const stage = ref(1);

  const incrementStage = () => {
    stage.value = stage.value > 4 ? stage.value : stage.value + 1;
    console.log("Stage incremented", stage.value);
  };

  const decrementStage = () => {
    stage.value = stage.value < 2 ? stage.value : stage.value - 1;
  };

  return { stage, incrementStage, decrementStage };
});
