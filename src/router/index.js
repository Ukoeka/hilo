import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Payments from "../views/Payments.vue";
import Quotes from "@/views/Quotes.vue";
import Drivers from "@/views/Drivers.vue";
import Bookings from "@/views/Booking.vue";
import Cleaners from "@/views/Cleaners.vue";
import Admin from "@/views/Admin.vue";
import Parameter from "@/views/Parameter.vue";
import Home from "@/pages/Home.vue";
import Cleaning from "@/pages/Cleaning.vue";
import Packaging from "@/pages/Packaging.vue";
import Driver from "@/pages/Driver.vue";
import Cleaner from "@/pages/Cleaner.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/login", component: Login, name: "Login" },
  { path: "/payments", component: Payments, name: "Payments" },
  { path: "/quotes", component: Quotes, name: "Quotes" },
  { path: "/drivers", component: Drivers, name: "Drivers" },
  { path: "/bookings", component: Bookings, name: "Bookings" },
  { path: "/cleaners", component: Cleaners, name: "Cleaners" },
  { path: "/admin", component: Admin, name: "Admin" },
  { path: "/parameter", component: Parameter, name: "Parameter" },
  {
    path: "/cleaning",
    name: "Cleaning", 
    component: Cleaning,
  },
  {
    path: "/packaging",
    name: "Packaging",
    component: Packaging,
  },
  {
    path: "/driver-recruitment",
    name: "Driver",
    component: Driver,
  },
  {
    path: "/cleaner-recruitment",
    name: "Cleaner",
    component: Cleaner,
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
