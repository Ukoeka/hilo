import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VCalendar from 'v-calendar';

import App from './App.vue'
import router from './router'

import "bootstrap"
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'v-calendar/style.css';

const app = createApp(App)

app.use(VCalendar, {})
app.use(createPinia())
app.use(router)

app.mount('#app')
