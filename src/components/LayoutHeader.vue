<template>
  <div class="header">
    <div class="header-left">
      <img class="logo" src="../assets/img/logo.svg">
      <span class="system-title">后台管理系统</span>
    </div>
    <div class="header-right">
      <span>登录用户</span>
    </div>
  </div>
</template>

<script setup>

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

/* 右侧区域：用户+主题功能 */
.header-right {
  background-color: aqua;
}
</style>