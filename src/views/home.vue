<template>
  <div class="container">
    <layout-header />
    <div class="container-body">
      <layout-sidebar />
      <div class="content-box">
        <layout-tabs />
      </div>
    </div>
  </div>
</template>

<script setup>
import LayoutHeader from "../components/LayoutHeader.vue";
import LayoutSidebar from "../components/LayoutSidebar.vue";
import LayoutTabs from "../components/LayoutTabs.vue";
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.container-body {
  display: flex;
  flex: 1;
}
.content-box {
  flex: 1;
}
</style>
