import Home from "@/pages/Home.vue";
import Cleaning from "@/pages/Cleaning.vue";
import Packaging from "@/pages/Packaging.vue";
import Driver from "@/pages/Driver.vue";
import Cleaner from "@/pages/Cleaner.vue";

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
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
    },
  ]
})

export default router
