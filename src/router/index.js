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
import Contact from "@/pages/ContactUs.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import GetQuote from "@/pages/GetQuote.vue";
import GetHired from "@/pages/GetHired.vue";
import Business from "@/pages/Business.vue";
import OnboardDriver from "@/pages/OnboardDriver.vue";
import OnboardCleaner from "@/pages/OnboardCleaner.vue";
import BookCleaning from "@/pages/BookCleaning.vue";
import BookDriver from "@/pages/BookDriver.vue";
import Registration from "@/pages/RegistrationSuccessful.vue";
import OrderPackaging from "@/pages/OrderPackaging.vue";
import ManAndVan from "@/pages/ManAndVan.vue";
import UserCleaner from "@/views/UserCleaner.vue";
import UserDriver from "@/views/UserDriver.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/user/cleaner",
    component: UserCleaner,
    name: "UserCleaner",
  },
  {
    path: "/user/driver",
    component: UserDriver,
    name: "UserDriver",
  },
  { path: "/payments", component: Payments, name: "Payments" },
  { path: "/quotes", component: Quotes, name: "Quotes" },
  { path: "/drivers", component: Drivers, name: "Drivers" },
  {
    path: "/cleaningquotes",
    component: Cleaningquotes,
    name: "Cleaningquotes",
  },
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
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
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
  {
    path: "/onboard-driver",
    name: "OnboardDriver",
    component: OnboardDriver,
  },
  {
    path: "/onboard-cleaner",
    name: "OnboardCleaner",
    component: OnboardCleaner,
  },
  {
    path: "/book-cleaning",
    name: "BookCleaning",
    component: BookCleaning,
  },
  {
    path: "/book-driver",
    name: "BookDriver",
    component: BookDriver,
  },
  {
    path: "/order-packaging",
    name: "OrderPackaging",
    component: OrderPackaging,
  },
  {
    path: "/manandvan",
    name: "ManAndVan",
    component: ManAndVan,
  },
  {
    path: "/registration-successful",
    name: "Registration",
    component: Registration,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
