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
                :error-messages="v$.name.$errors.map(e => e.$message)"
                :counter="10"
                label="Name"
                required
                @input="v$.name.$touch"
                @blur="v$.name.$touch"
        ></v-text-field>

        <v-text-field
                v-model="state.email"
                :error-messages="v$.email.$errors.map(e => e.$message)"
                label="E-mail"
                required
                @input="v$.email.$touch"
                @blur="v$.email.$touch"
        ></v-text-field>

        <v-select
                v-model="state.select"
                :items="items"
                :error-messages="v$.select.$errors.map(e => e.$message)"
                label="Item"
                required
                @change="v$.select.$touch"
                @blur="v$.select.$touch"
        ></v-select>

        <v-checkbox
                v-model="state.checkbox"
                :error-messages="v$.checkbox.$errors.map(e => e.$message)"
                label="Do you agree?"
                required
                @change="v$.checkbox.$touch"
                @blur="v$.checkbox.$touch"
        ></v-checkbox>

        <v-btn
                class="me-4"
                @click="v$.$validate"
        >
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {reactive} from 'vue'
import {useVuelidate} from '@vuelidate/core'
import {email, helpers, required} from '@vuelidate/validators'

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const initialState = {
  name: '',
  email: '',
  select: null,
  checkbox: null,
}

const state = reactive({
  ...initialState,
})

const rules = {
  name: {required: helpers.withMessage('Debe agregar al nombre del usuario', required)},
  email: {required, email},
  select: {required},
  items: {required},
  checkbox: {required},
}

const v$ = useVuelidate(rules, state, { $lazy: true })

function clear() {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}
</script>

<style>
.v-img__img, .v-img__picture, .v-img__gradient, .v-img__placeholder, .v-img__error {
  filter: brightness(0.6) !important;
}
</style>