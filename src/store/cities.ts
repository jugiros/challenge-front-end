import { ref } from "vue";
import { defineStore } from "pinia";

export const citiesStore = defineStore("city", () => {
  const cities = ref(["Cuenca", "Quito", "Guayaquil"]);

  return { cities };
});
