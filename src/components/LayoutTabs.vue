<template>
  <div class="tabs">
    <el-tabs
      v-model="activePath"
      type="card"
      class="demo-tabs"
      closable
      @tab-click="clickTabls"
      @tab-remove="closeTabs"
    >
      <el-tab-pane v-for="item in tabs.list" :key="item.path" :label="item.title" :name="item.path"> </el-tab-pane>
    </el-tabs>
    <el-dropdown class="tabs-control" @command="handleTags">
      <el-button type="primary">
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="current">关闭当前</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useTabsStore } from "../store/tabas";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const activePath = ref(route.fullPath);
const tabs = useTabsStore();

//设置标签
const setTags = (route) => {
  const isExist = tabs.list.some((item) => {
    return item.path === route.fullPath;
  });
  if (!isExist) {
    tabs.setTabsItem({
      name: route.name,
      title: route.meta.title,
      path: route.fullPath,
    });
  }
};
setTags(route);
onBeforeRouteUpdate((to) => {
  setTags(to);
});

const clickTabls = (tab) => {
  router.push(tab.props.name);
};
//关闭当前的标签
const closeTabs = (path) => {
  const index = tabs.list.findIndex((item) => item.path === path);
  if (index === -1) return;
  tabs.delTabsItem(index);
  const item = tabs.list[index] || tabs.list[index - 1];
  router.push(item ? item.path : "/");
};

//关闭全部标签
const closeAll = () => {
  tabs.clearTabs();
  router.push("/");
};
//关闭其他标签
const closeOther = () => {
  const curItem = tabs.list.filter((item) => {
    return item.path === route.fullPath;
  });
  tabs.closeTabsOther(curItem);
};
const handleTags = (command) => {
  switch (command) {
    case "other":
      closeOther();
      break;
    case "current":
      closeTabs(route.fullPath);
      break;
    case "all":
      closeAll();
      break;
  }
};

watch(
  () => route.fullPath,
  (newVal, oldVal) => {
    activePath.value = newVal;
  }
);
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
  margin-bottom: 0;
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
  border: 1px solid #ccc;
}
:deep(.el-dropdown) {
  --el-button-hover-border-color: none;
}
</style>
