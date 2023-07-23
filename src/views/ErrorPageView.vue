<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" offset-sm="3" align="center">
        <h1>Error 404</h1>
        <img width="200" src="../assets/warning.png"/>
        <v-alert
                type="warning"
                title="Página no encontrada"
        ></v-alert>
      </v-col>
    </v-row>
    <v-spacer/>
    <v-row>
      <v-col  xs="12" sm="6" offset-sm="3" align="center">
        <router-link to="/">
          <v-btn>
            Volver al inicio
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
</script>