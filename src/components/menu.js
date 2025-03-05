export const menuData = [
  {
    id: "0",
    title: "系统首页",
    index: "/dashboard",
    icon: "Odometer",
  },
  {
    id: "1",
    title: "系统管理",
    index: "1",
    icon: "HomeFilled",
    children: [
      {
        id: "11",
        pid: "1",
        index: "/system-user",
        title: "用户管理",
      },
      {
        id: "12",
        pid: "1",
        index: "/system-role",
        title: "角色管理",
      },
      {
        id: "13",
        pid: "1",
        index: "/system-menu",
        title: "菜单管理",
      },
    ],
  },
  {
    id: "3",
    title: "表格",
    index: "3",
    icon: "Calendar",
    children: [
      {
        id: "31",
        pid: "3",
        index: "/table",
        title: "基础表格",
      },
      {
        id: "32",
        pid: "3",
        index: "/table-editor",
        title: "可编辑表格",
      },
      {
        id: "33",
        pid: "3",
        index: "/import",
        title: "导入Excel",
      },
      {
        id: "34",
        pid: "3",
        index: "/export",
        title: "导出Excel",
      },
    ],
  },
  {
    id: "4",
    icon: "PieChart",
    index: "4",
    title: "图表",
    children: [
      {
        id: "42",
        pid: "4",
        index: "/echarts",
        title: "echarts图表",
      },
    ],
  },
  {
    id: "6",
    icon: "DocumentAdd",
    index: "6",
    title: "附加页面",
    children: [
      {
        id: "61",
        pid: "6",
        index: "/ucenter",
        title: "个人中心",
      },
      {
        id: "62",
        pid: "6",
        index: "/login",
        title: "登录",
      },
      {
        id: "63",
        pid: "6",
        index: "/register",
        title: "注册",
      },
      {
        id: "64",
        pid: "6",
        index: "/reset-pwd",
        title: "重设密码",
      },
      {
        id: "65",
        pid: "6",
        index: "/403",
        title: "403",
      },
      {
        id: "66",
        pid: "6",
        index: "/404",
        title: "404",
      },
    ],
  },
];
