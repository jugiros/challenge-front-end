import {ref} from "vue";
import {defineStore} from "pinia";

export const citiesStore = defineStore('counter', () => {
  const cities = ref([
    "Cuenca", "Quito", "Guayaquil"
  ])

  return {cities}
})