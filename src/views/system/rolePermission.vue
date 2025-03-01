<template>
  <div>
    <el-tree ref="tree" :data="data" node-key="id" default-expand-all show-checkbox :default-checked-keys="checkedKeys">
    </el-tree>
    <el-button type="primary" @click="onSubmit">保存权限</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { menuData } from "@/components/menu";

const props = defineProps({
  permissOptions: {
    type: Object,
    required: true,
  },
});

const menuObj = ref({});
const getTreeData = (data) => {
  return data.map((item) => {
    const obj = {
      id: item.id,
      label: item.title,
    };
    if (item.children) {
      menuObj.value[item.id] = item.children.map((sub) => sub.id);
      obj.children = getTreeData(item.children);
    }
    return obj;
  });
};
const checkData = (data) => {
  return data.filter((item) => {
    // 如果 item 不是父节点（不在 menuObj 中），保留
    if (!menuObj.value[item]) {
      return true;
    }
    // 如果 item 是父节点，检查它的所有子节点是否都在 data 中
    const childrenIds = menuObj.value[item];
    const allChildrenPresent = childrenIds.every((childId) => data.includes(childId));
    return allChildrenPresent;
  });
};

const data = getTreeData(menuData);
//获取当前的权限
const checkedKeys = ref(checkData(props.permissOptions.permiss));

const tree = ref();
// 保存权限函数
const onSubmit = () => {
  // 确保 tree 已初始化
  if (!tree.value) {
    console.error("Tree component is not initialized");
    return;
  }

  // 获取全选的叶子节点 ID
  const checkedLeafKeys = tree.value.getCheckedKeys(false);
  // 获取半选的父节点 ID
  const halfCheckedKeys = tree.value.getHalfCheckedKeys();
  // 合并所有选中的权限 ID
  const permissionKeys = [...checkedLeafKeys, ...halfCheckedKeys];

  // 输出结果
  console.log("Selected permission IDs:", permissionKeys);
};
</script>

<style lang="scss" scoped></style>
