<template>
  <div class="header">
    <div class="header-left">
      <img class="logo" src="@/assets/img/logo.svg" />
      <span class="system-title">后台管理系统</span>
      <div class="sidebar-toggle" @click="toggleSidebar">
        <el-icon v-if="isExpand"><Expand /></el-icon>
        <el-icon v-else><Fold /></el-icon>
      </div>
    </div>
    <div class="header-right">
      <div class="header-controls">
        <div class="btn-icon">
          <el-tooltip content="主题颜色" placement="top">
            <el-icon>
              <Setting />
            </el-icon>
          </el-tooltip>
        </div>
        <div class="btn-icon">
          <el-tooltip content="消息通知" placement="top">
            <el-icon>
              <Bell />
            </el-icon>
          </el-tooltip>
        </div>
        <div class="btn-icon">
          <el-tooltip content="全屏" placement="top">
            <el-icon>
              <FullScreen />
            </el-icon>
          </el-tooltip>
        </div>
      </div>
      <div class="user-info">
        <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <!-- 用户下拉菜单 -->
        <el-dropdown trigger="click">
          <span>
            Dropdown List
            <el-icon>
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isExpand = ref(true);
function toggleSidebar() {
  isExpand.value = !isExpand.value;
}
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
  align-items: center;
  margin: 0 7px;
  color: #ffffff;
  font-size: 22px;
}
.user-info {
  display: flex;
  align-items: center;
  margin: 0 35px 0 18px;
}

:deep(.el-dropdown) {
  color: #ffffff;
  padding-left: 5px;
}
</style>
