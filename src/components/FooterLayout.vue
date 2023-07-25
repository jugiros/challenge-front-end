<template>
  <v-layout>
    <v-footer class="d-flex flex-column p-0">
      <div class="bg-blue-grey-darken-4 d-flex w-100 align-center px-4">
        <strong>Mis redes sociales!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="item in items"
          :key="item.icon"
          class="mx-4"
          :icon="item.icon"
          variant="plain"
          size="small"
          :href="item.link"
          target="_blank"
        ></v-btn>
      </div>
      <div class="bg-black px-4 py-2 text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Challenge Front End</strong>
      </div>
    </v-footer>
  </v-layout>
</template>

<script setup lang="ts">
const items = [
  {
    icon: "mdi-linkedin",
    link: "https://www.linkedin.com/in/juan-molina-leon-a48ab198/",
  },
  { icon: "mdi-github", link: "https://github.com/jugiros" },
];
</script>
