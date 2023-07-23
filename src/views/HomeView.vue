<template>
  <v-card
          class="mx-auto"
          max-width="90%"
  >
    <v-img
            class="align-end text-white"
            height="200"
            src="https://wallpapers.com/images/featured/airplane-4k-bu4x1hj15439eul8.jpg"
            cover
    >
      <v-card-title>Busca tu vuelo</v-card-title>
    </v-img>
    <v-card-subtitle class="pt-4">
      Agrega los criterios de búsqueda
    </v-card-subtitle>
    <v-card-text>
      <form>
        <v-text-field
                v-model="state.name"
                :counter="10"
                label="Name"
                required
        ></v-text-field>

        <v-text-field
                v-model="state.email"
                label="E-mail"
                required
        ></v-text-field>

        <v-select
                v-model="state.select"
                :items="items"
                label="Item"
                required
        ></v-select>

        <v-checkbox
                v-model="state.checkbox"
                label="Do you agree?"
                required
        ></v-checkbox>

        <v-btn
                class="me-4"
        >
          submit
        </v-btn>
        <v-btn>
          clear
        </v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const initialState = {
  name: '',
  email: '',
  select: null,
  checkbox: null,
}

const state = reactive({
  ...initialState,
})

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]
</script>

<style>
.v-img__img, .v-img__picture, .v-img__gradient, .v-img__placeholder, .v-img__error {
  filter: brightness(0.6) !important;
}
</style>