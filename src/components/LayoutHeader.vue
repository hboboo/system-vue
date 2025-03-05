<template>
  <div class="header">
    <div class="header-left">
      <img class="logo" src="@/assets/img/logo.svg" />
      <span class="system-title">后台管理系统</span>
      <div class="sidebar-toggle" @click="store.toggleSidebar">
        <el-icon v-if="store.isCollapse"><Fold /></el-icon>
        <el-icon v-else><Expand /></el-icon>
      </div>
    </div>
    <div class="header-right">
      <div class="header-controls">
        <div class="btn-icon" @click="router.push('/ucenter')">
          <el-tooltip :content="message ? `有${message}条未读消息` : `消息中心`" placement="bottom">
            <el-icon>
              <Bell />
            </el-icon>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <div class="btn-icon" @click="setFullScreen">
          <el-tooltip content="全屏" placement="top">
            <el-icon>
              <FullScreen />
            </el-icon>
          </el-tooltip>
        </div>
      </div>
      <div class="user-info">
        <el-avatar :size="30" :src="imgurl" />
        <!-- 用户下拉菜单 -->
        <el-dropdown trigger="click">
          <span>
            {{ username }}
            <el-icon>
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="router.push('/ucenter')">个人中心</el-dropdown-item>
              <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSidebarStore } from "@/store/sidebar";
import { useRouter } from "vue-router";
import imgurl from "../assets/img/user.jpg";
const router = useRouter();
const store = useSidebarStore();

const message = 2;
const username = localStorage.getItem("vuems_name") || "huangbo";

const setFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.body.requestFullscreen.call(document.body);
  }
};

const logout = () => {
  localStorage.removeItem("vuems_token");
  localStorage.removeItem("vuems_name");
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 0 20px;
  background-color: #242f42;
}

/* 左侧区域：logo+系统名称 */
.header-left {
  display: flex;
  align-items: center;
}
.logo {
  width: 35px;
  height: auto;
}
.system-title {
  margin: 0 40px 0 8px;
  font-size: 20px;
  color: #ffffff;
}
.sidebar-toggle {
  height: 25px;
  font-size: 25px;
  color: #ffffff;
}

/* 右侧区域：主题功能 + 用户信息 */
.header-right {
  display: flex;
  align-items: center;
}
.header-controls {
  display: flex;
}
.btn-icon {
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 7px;
  color: #ffffff;
  font-size: 22px;
}
.user-info {
  display: flex;
  align-items: center;
  margin: 0 15px 0 18px;
}
.btn-bell-badge {
  position: absolute;
  right: -3.4px;
  top: -3.4px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: var(--header-text-color);
}

:deep(.el-dropdown) {
  color: #ffffff;
  padding-left: 5px;
}
</style>
