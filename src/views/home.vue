<template>
  <div class="container">
    <layout-header />
    <div class="container-body">
      <layout-sidebar />
      <div class="content-box">
        <layout-tabs />
        <div class="content">
          <dashboard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LayoutHeader from "../components/LayoutHeader.vue";
import LayoutSidebar from "../components/LayoutSidebar.vue";
import LayoutTabs from "../components/LayoutTabs.vue";
import dashboard from "./dashboard.vue";
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.container-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}
.content-box {
  flex: 1;
  height: 100%;
  width: auto;
  overflow: hidden;
}
.content {
  width: 100%;
  height: calc(100% - 30px);
  padding: 20px;
  background-color: #f0f2f5;
  overflow-y: auto;
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  border-radius: 4px;
}
::-webkit-scrollbar-corner {
  background-color: transparent;
}
</style>
