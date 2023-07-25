<template>
  <main-layout />
  <v-container class="mt-10">
    <router-view />
  </v-container>
  <footer-layout></footer-layout>
</template>

<script setup lang="ts">
import MainLayout from "@/components/MainLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";
</script>
