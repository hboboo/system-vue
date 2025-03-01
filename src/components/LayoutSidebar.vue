<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" :collapse="store.isCollapse" router>
      <template v-for="item in menuData">
        <template v-if="item.children">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon>
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.children">
              <el-sub-menu v-if="subItem.children" :index="subItem.index" :key="subItem.index">
                <template #title>
                  <el-icon>
                    <component :is="subItem.icon" />
                  </el-icon>
                  <span>{{ subItem.title }}</span>
                </template>
                <el-menu-item v-for="threeItem in subItem.children" :key="threeItem.id" :index="threeItem.index">
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { menuData } from "@/components/menu";
import { useSidebarStore } from "@/store/sidebar";
import { useRoute } from "vue-router";

const store = useSidebarStore();

const route = useRoute();

const onRoutes = computed(() => {
  return route.path;
});
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  overflow-y: scroll;
  min-width: 60px;
  background-color: #e3e3e3;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 245px;
}
:deep(.el-menu) {
  background-color: #e3e3e3;
}

/* 隐藏滚动条 */
.sidebar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.sidebar::-webkit-scrollbar-thumb {
  background-color: transparent;
}
.sidebar::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
