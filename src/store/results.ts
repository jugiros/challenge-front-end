import { ref } from "vue";
import { defineStore } from "pinia";

export const resultStore = defineStore("result", () => {
  const results = ref([
    {
      data: [
        { key: "Precio", val: "$100" },
        { key: "Escalas", val: "1" },
        { key: "Duración", val: "60 min" },
      ],
      airline: "Avianca",
      image: require("../assets/airline-1.jpg"),
    },
    {
      data: [
        { key: "Precio", val: "$200" },
        { key: "Escalas", val: "2" },
        { key: "Duración", val: "120 min" },
      ],
      airline: "Tame",
      image: require("../assets/airline-2.jpg"),
    },
    {
      data: [
        { key: "Precio", val: "$300" },
        { key: "Escalas", val: "3" },
        { key: "Duración", val: "180 min" },
      ],
      airline: "Latam",
      image: require("../assets/airline-3.jpg"),
    },
    {
      data: [
        { key: "Precio", val: "$400" },
        { key: "Escalas", val: "4" },
        { key: "Duración", val: "200 min" },
      ],
      airline: "Aerogal",
      image: require("../assets/airline-4.jpg"),
    },
  ]);

  return { results };
});
