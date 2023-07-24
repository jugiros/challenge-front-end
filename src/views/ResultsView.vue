<template>
  <v-row>
    <v-col cols="12" sm="6" v-for="(result, index) in results" :key="index">
      <v-card>
        <v-img
                height="200"
                :src="result.image"
                cover
                class="text-white"
        >
          <v-toolbar
                  color="rgba(0, 0, 0, 0)"
                  theme="dark"
          >
            <v-toolbar-title class="text-h6">
              {{ result.airline }}
            </v-toolbar-title>
          </v-toolbar>
        </v-img>
        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">
            Datos del viaje
          </div>
          <v-timeline density="compact" align="start">
            <v-timeline-item
                    v-for="(item, index) in result.data"
                    :key="index"
                    size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ item.key }}</strong> {{ item.val }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { resultStore } from "@/store/results";

const results = resultStore().results;

</script>
