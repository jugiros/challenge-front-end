<template>
  <v-card class="mx-auto" max-width="90%">
    <v-img
      class="align-end text-white"
      height="200"
      :src="require('../assets/card-wallpaper.jpg')"
      cover
    >
      <v-card-title>Busca tu vuelo</v-card-title>
    </v-img>
    <v-card-subtitle class="pt-4">
      Agrega los criterios de búsqueda
    </v-card-subtitle>
    <v-card-text>
      <form>
        <v-row>
          <v-col md="3" sm="6" cols="12">
            <v-select
              variant="underlined"
              v-model="state.originCity"
              :items="items"
              :error-messages="v$.originCity.$errors.map((e) => e.$message)"
              label="Ciudad de Origen"
              required
              @change="v$.originCity.$touch"
              @blur="v$.originCity.$touch"
            ></v-select>
          </v-col>
          <v-col md="3" sm="6" cols="12">
            <v-select
              variant="underlined"
              v-model="state.destinyCity"
              :items="items"
              :error-messages="v$.destinyCity.$errors.map((e) => e.$message)"
              label="Ciudad de Destino"
              required
              @change="v$.destinyCity.$touch"
              @blur="v$.destinyCity.$touch"
            ></v-select>
          </v-col>
          <v-col md="3" sm="6" cols="12">
            <v-text-field
              type="date"
              variant="underlined"
              v-model="state.departureDate"
              :error-messages="v$.departureDate.$errors.map((e) => e.$message)"
              label="Fecha de Partida"
              required
              @change="v$.departureDate.$touch"
              @blur="v$.departureDate.$touch"
            ></v-text-field>
          </v-col>
          <v-col md="3" sm="6" cols="12">
            <v-text-field
              type="date"
              variant="underlined"
              v-model="state.returnDate"
              :error-messages="v$.returnDate.$errors.map((e) => e.$message)"
              label="Fecha de Partida"
              required
              @change="v$.returnDate.$touch"
              @blur="v$.returnDate.$touch"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-container align="center">
          <v-btn class="me-4" @click="search" color="primary"> BUSCAR </v-btn>
          <v-btn @click="clear" color="warning"> LIMPIAR </v-btn>
        </v-container>
      </form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { citiesStore } from "@/store/cities";
import { format } from "date-fns";
import router from "@/router";
const items = citiesStore().cities;
const currentDate = new Date();

const initialState = {
  originCity: null,
  destinyCity: null,
  departureDate: format(new Date(), "yyyy-MM-dd"),
  returnDate: format(new Date(), "yyyy-MM-dd"),
};

const state = reactive({
  ...initialState,
});

const rules = {
  originCity: {
    required: helpers.withMessage(
      "Debe agregar la ciudad de origen.",
      required
    ),
  },
  destinyCity: {
    required: helpers.withMessage(
      "Debe agregar la ciudad de destino",
      required
    ),
  },
  departureDate: {
    required: helpers.withMessage("Debe agregar la fecha de partida", required),
  },
  returnDate: {
    required: helpers.withMessage("Debe agregar la fecha de regreso", required),
  },
};

const v$ = useVuelidate(rules, state, { $lazy: true });

const clear = () => {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
};

const search = () => {
  v$.value.$validate().then(res => {
    if (res) {
      router.push('/results')
    }
  })
};
</script>

<style>
.v-img__img,
.v-img__picture,
.v-img__gradient,
.v-img__placeholder,
.v-img__error {
  filter: brightness(0.6) !important;
}
.v-text-field .v-field--no-label input,
.v-text-field .v-field--active input {
  opacity: 1;
  margin-top: 0px;
}
</style>
