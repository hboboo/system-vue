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
        meta: {
          title: "系统首页",
          noAuth: true,
        },
        component: () => import("@/views/dashboard.vue"),
      },
      {
        path: "/system-user",
        name: "system-user",
        meta: {
          title: "用户管理",
          permiss: "11",
        },
        component: () => import("@/views/system/user.vue"),
      },
      {
        path: "/system-role",
        name: "system-role",
        meta: {
          title: "角色管理",
          permiss: "12",
        },
        component: () => import("@/views/system/role.vue"),
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
