import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard.vue"),
      },
      {
        path: "/system-user",
        name: "/system-user",
        component: () => import("@/views/pages/system/user.vue"),
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/pages/login.vue"),
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/views/pages/register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
