import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VCalendar from 'v-calendar';
import VueTelInput from 'vue-tel-input';


import App from './App.vue'
import router from './router'

import "bootstrap";
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'v-calendar/style.css';
import 'vue-tel-input/vue-tel-input.css';



const app = createApp(App)

app.use(VCalendar, {})
app.use(createPinia())
app.use(VueTelInput);
app.use(router)
app.mount('#app')
