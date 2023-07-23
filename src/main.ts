import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Pinia
import { createPinia } from 'pinia'

// Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// Pinia
const pinia = createPinia()

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')
