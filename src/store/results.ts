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
      image:
        "https://media.istockphoto.com/id/155439315/es/foto/avi%C3%B3n-de-pasajeros-volando-sobre-nubes-durante-la-puesta-del-sol.jpg?s=612x612&w=0&k=20&c=E6zuCTGyaqlKa7_UDwg6vDVNFe5U53tUJZRhinQ02gg=",
    },
    {
      data: [
        { key: "Precio", val: "$200" },
        { key: "Escalas", val: "2" },
        { key: "Duración", val: "120 min" },
      ],
      airline: "Tame",
      image:
        "https://www.rd.com/wp-content/uploads/2020/01/GettyImages-1131335393-e1650030686687.jpg",
    },
    {
      data: [
        { key: "Precio", val: "$300" },
        { key: "Escalas", val: "3" },
        { key: "Duración", val: "180 min" },
      ],
      airline: "Latam",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5d8bac4f22254b0008e17703/Low-Angle-View-Of-Airplane-Flying-Against-Sky-During-Sunset/960x0.jpg?format=jpg&width=960",
    },
    {
      data: [
        { key: "Precio", val: "$400" },
        { key: "Escalas", val: "4" },
        { key: "Duración", val: "200 min" },
      ],
      airline: "Aerogal",
      image:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/12/avion-united-airlanes-2551507.jpg?tf=3840x",
    },
  ]);

  return { results };
});
