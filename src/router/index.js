import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Payments from "../views/Payments.vue";
import Quotes from "@/views/Quotes.vue";
import Drivers from "@/views/Drivers.vue";
import Cleaningquotes from "@/views/Cleaningquotes.vue";
import Cleaners from "@/views/Cleaners.vue";
import Admin from "@/views/Admin.vue";
import Parameter from "@/views/Parameter.vue";
import Wallet from "@/views/Wallet.vue";
import Openjobs from "@/views/Openjobs.vue";
import Myaccount from "@/views/Myaccount.vue";
import Booking from "@/views/Booking.vue";
import Home from "@/pages/Home.vue";
import Cleaning from "@/pages/Cleaning.vue";
import Packaging from "@/pages/Packaging.vue";
import Driver from "@/pages/Driver.vue";
import Cleaner from "@/pages/Cleaner.vue";
import About from "@/pages/AboutUs.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import GetQuote from "@/pages/GetQuote.vue";
import GetHired from "@/pages/GetHired.vue";
import Business from "@/pages/Business.vue";

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
  { path: "/cleaningquotes", component: Cleaningquotes, name: "Cleaningquotes" },
  { path: "/cleaners", component: Cleaners, name: "Cleaners" },
  { path: "/admin", component: Admin, name: "Admin" },
  { path: "/parameter", component: Parameter, name: "Parameter" },
  { path: "/bookings", component: Booking, name: "Booking" },
  { path: "/wallet", component: Wallet, name: "Wallet" },
  { path: "/openjobs", component: Openjobs, name: "Openjobs" },
  { path: "/myaccount", component: Myaccount, name: "Myaccount" },

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
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/privacypolicy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy,
    },
    {
      path: "/getquote",
      name: "GetQuote",
      component: GetQuote,
    },
    {
      path: "/getHired",
      name: "GetHired",
      component: GetHired,
    },
    {
      path: "/business",
      name: "Business",
      component: Business,
    },
  ]

export default router;
