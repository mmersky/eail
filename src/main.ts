import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

// Import global components
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const app = createApp(App)

// Register global components
app.component('AppHeader', AppHeader)
app.component('AppFooter', AppFooter)

app.use(createPinia())
app.use(router)

app.mount('#app')
