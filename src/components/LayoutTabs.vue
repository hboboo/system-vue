<template>
  <div class="tabs">
    <el-tabs type="card" class="demo-tabs" closable @tab-remove="removeTab">
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
    <el-dropdown class="tabs-control">
      <el-button type="primary">
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ref } from "vue";
const editableTabs = ref([
  {
    title: "Tab 1",
    name: "1",
    content: "Tab 1 content",
  },
  {
    title: "Tab 2",
    name: "2",
    content: "Tab 2 content",
  },
]);
</script>

<style lang="scss" scoped>
.tabs {
  position: relative;
}
.tabs-control {
  position: absolute;
  top: 2px;
  right: 8px;
}

:deep(.el-tabs__header) {
  height: 32px;
}
:deep(.el-tabs__item) {
  height: 26px;
}
:deep(.el-button--primary) {
  padding: 0 5px;
  height: 28px;
  color: #000;
  background-color: #fff;
  border: none;
}
:deep(.el-dropdown) {
  --el-button-hover-border-color: none;
}
</style>
