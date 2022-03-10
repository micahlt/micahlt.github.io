import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
