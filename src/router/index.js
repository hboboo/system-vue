import { createWebHistory, createRouter, createWebHashHistory } from "vue-router";
import { usePermissStore } from "../store/permiss";
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
      {
        path: "/echarts",
        name: "echarts",
        meta: {
          title: "echarts图表",
          permiss: "42",
        },
        component: () => import("@/views/chart/echarts.vue"),
      },
      {
        path: "/ucenter",
        name: "ucenter",
        meta: {
          title: "个人中心",
        },
        component: () => import("@/views/pages/ucenter.vue"),
      },
    ],
  },
  {
    path: "/login",
    meta: {
      title: "登录",
      noAuth: true,
    },
    component: () => import("@/views/pages/login.vue"),
  },
  {
    path: "/register",
    meta: {
      title: "注册",
      noAuth: true,
    },
    component: () => import("@/views/pages/register.vue"),
  },
  {
    path: "/reset-pwd",
    meta: {
      title: "重置密码",
      noAuth: true,
    },
    component: () => import("@/views/pages/ResetPassword.vue"),
  },
  {
    path: "/404",
    meta: {
      title: "找不到页面",
      noAuth: true,
    },
    component: () => import("@/views/pages/404.vue"),
  },
  {
    path: "/403",
    meta: {
      title: "没有权限",
      noAuth: true,
    },
    component: () => import("@/views/pages/403.vue"),
  },
  { path: "/:path(.*)", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem("vuems_name");
  const permiss = usePermissStore();

  if (!role && to.path !== "/dashboard" && to.meta.noAuth !== true) {
    next("/login");
  } else if (typeof to.meta.permiss == "string" && !permiss.key.includes(to.meta.permiss)) {
    // 如果没有权限，则进入403
    next("/403");
  } else {
    next();
  }
});

export default router;
