<template>
  <main-layout />
  <v-container class="mt-10">
    <router-view />
  </v-container>
</template>

<script setup lang="ts">
import MainLayout from "@/components/MainLayout.vue";
</script>
