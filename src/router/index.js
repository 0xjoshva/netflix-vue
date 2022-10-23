import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "profiles",
    component: () =>
      import("../views/ProfileView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import("../views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
