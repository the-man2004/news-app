import { createRouter, createWebHistory } from "vue-router";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Search from "../views/Search";

const routes = [
  // Category routes
  {
    path: "/",
    redirect: "/technology",
  },
  {
    path: "/technology",
    component: Home,
  },
  {
    path: "/health",
    component: Home,
  },
  {
    path: "/sports",
    component: Home,
  },
  {
    path: "/science",
    component: Home,
  },
  {
    path: "/general",
    component: Home,
  },
  {
    path: "/business",
    component: Home,
  },
  {
    path: "/entertainment",
    component: Home,
  },
  // Contact
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  // Search
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
