<template>
  <v-toolbar color="white" :image="require('../assets/toolbar.png')">
    <v-toolbar-title class="white-toolbar-title">
      <v-avatar color="white">
        <img width="24" src="../assets/take-off.png" />
      </v-avatar>
      <strong style="margin-left: 10px">Encuentra el mejor ticket</strong>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="white" icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>
            <router-link
              style="cursor: pointer; text-decoration: none"
              :to="item.to"
            >
              {{ item.title }}
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script setup lang="ts">
const items = [
  { title: "Inicio", to: "/" },
  { title: "Resultados", to: "/results" },
  { title: "Página de Error", to: "/error-page" },
];
</script>

<style scoped>
.white-toolbar-title {
  color: white !important;
}
</style>
