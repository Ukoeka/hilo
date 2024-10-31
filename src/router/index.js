// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue' 
import Login from '../views/Login.vue'
import Payments from '../views/Payments.vue'
import Sidebar from '@/components/Sidebar.vue'
import Quotes from '@/views/Quotes.vue'
import Cardsection from '@/components/Cardsection.vue'
import Drivers from '@/views/Drivers.vue'
import Bookings from '@/views/Bookings.vue'
import Cleaners from '@/views/Cleaners.vue'
import Admin from '@/views/Admin.vue'
import Parameter from '@/views/Parameter.vue'

const routes = [
  // { path: '/', component: Home, name: 'Home' },       // Define the Home route
  { path: '/login', component: Login, name: 'Login' },
  {path:'/payments', component: Payments, name: 'Payments'},
  {path:'/sidebar', component: Sidebar, name: 'Sidebar'},
  {path:'/quotes', component: Quotes, name: 'Quotes'},
  {path:'/cardsection', component: Cardsection, name: 'Cardsection'},
  {path:'/drivers', component: Drivers, name: 'Drivers'},
  {path:'/bookings', component: Bookings, name: 'Bookings'},
  {path:'/cleaners', component: Cleaners, name: 'Cleaners'},
  {path:'/admin', component: Admin, name: 'Admin'},
  {path:'/parameter', component: Parameter, name: 'Parameter'},




]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // Assign the routes array here
})

export default router
