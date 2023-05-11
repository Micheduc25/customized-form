import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useRoutesStore = defineStore("routes", () => {
  const routesMap = new Map([
    [1, "/status"],
    [2, "/objective"],
    [3, "/rooms"],
    [4, "/surface"],
    [5, "/estimation"],
  ]);

  return { routesMap };
});
