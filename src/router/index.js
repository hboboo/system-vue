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
      {
        path: "/system-menu",
        name: "system-menu",
        meta: {
          title: "菜单管理",
          permiss: "13",
        },
        component: () => import("@/views/system/menu.vue"),
      },
      {
        path: "/table",
        name: "basetable",
        meta: {
          title: "基础表格",
          permiss: "31",
        },
        component: () => import("@/views/table/baseTable.vue"),
      },
      {
        path: "/table-editor",
        name: "table-editor",
        meta: {
          title: "可编辑表格",
          permiss: "32",
        },
        component: () => import("@/views/table/tableEditor.vue"),
      },
      {
        path: "/export",
        name: "export",
        meta: {
          title: "导出Excel",
          permiss: "34",
        },
        component: () => import("@/views/table/export.vue"),
      },
      {
        path: "/import",
        name: "import",
        meta: {
          title: "导入Excel",
          permiss: "33",
        },
        component: () => import("@/views/table/import.vue"),
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
