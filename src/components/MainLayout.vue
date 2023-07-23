<template>
  <v-toolbar
          color="white"
          image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-toolbar-title class="white-toolbar-title">
      <v-avatar color="white">
        <img width="24" src="../assets/take-off.png">
      </v-avatar>
      <strong style="margin-left: 10px">Encuentra el mejor ticket</strong>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="white" icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>
      <v-list>
        <v-list-item
                v-for="(item, i) in items"
                :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn icon>
      <v-icon color="white">mdi-export</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script setup lang="ts">
const items = [
  {title: 'Click Me'},
  {title: 'Click Me'},
  {title: 'Click Me'},
  {title: 'Click Me 2'}
]
</script>

<style scoped>
.white-toolbar-title {
  color: white !important;
}
</style>