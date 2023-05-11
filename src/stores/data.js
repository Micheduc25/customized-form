import { ref } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", () => {
  const data = ref({
    status: "",
    objective: "",
    rooms: {
      chambre: 0,
      salon: 0,
      cuisine: 0,
      bain: 0,
      autre: 0,
    },
    surface: null,
    contact: { email: "", phone: "", postal_code: "" },
  });

  return { data };
});
