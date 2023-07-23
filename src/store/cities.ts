import {ref} from "vue";
import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', () => {
  const cities = ref([
    {"name": "Cuenca"},
    {"name": "Quito"},
    {"name": "Guayaquil"}
  ])

  return {cities}
})