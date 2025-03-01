<template>
  <div>
    <table-custom
      :columns="columns"
      :tableData="menuData"
      row-key="index"
      :has-pagination="false"
      :viewFunc="handleView"
      :delFunc="handleDelete"
      :editFunc="handleEdit"
    >
      <template #toolbarBtn>
        <el-button type="warning" icon="CirclePlusFilled" @click="visible = true">新增</el-button>
      </template>
      <template #icon="{ rows }">
        <el-icon>
          <component :is="rows.icon"></component>
        </el-icon>
      </template>
    </table-custom>
    <el-dialog
      :title="isEdit ? '编辑' : '新增'"
      v-model="visible"
      width="700px"
      destroy-on-close
      :close-on-click-modal="false"
      @close="closeDialog"
    >
      <table-edit :form-data="rowData" :options="options" :edit="isEdit" :update="updateData">
        <template #parent>
          <el-cascader v-model="rowData.pid" :options="cascaderOptions" :props="{ checkStrictly: true }" clearable />
        </template>
      </table-edit>
    </el-dialog>
    <el-dialog title="查看详情" v-model="visible1" width="700px" destroy-on-close>
      <table-detail :data="viewData">
        <template #icon="{ rows }">
          <el-icon>
            <component :is="rows.icon"></component>
          </el-icon>
        </template>
      </table-detail>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TableCustom from "@/components/TableCustom.vue";
import TableEdit from "@/components/TableEdit.vue";
import TableDetail from "@/components/TableDetail.vue";
import { menuData } from "@/components/menu";
import { ElMessage } from "element-plus";

// 表格相关
let columns = ref([
  { prop: "title", label: "菜单名称", align: "left" },
  { prop: "icon", label: "图标" },
  { prop: "index", label: "路由路径" },
  { prop: "permiss", label: "权限标识" },
  { prop: "operator", label: "操作", width: 250 },
]);

const getOptions = (data) => {
  return data.map((item) => {
    const a = {
      label: item.title,
      value: item.id,
    };
    if (item.children) {
      a.children = getOptions(item.children);
    }
    return a;
  });
};
const cascaderOptions = ref(getOptions(menuData));

// 新增/编辑弹窗相关
let options = ref({
  labelWidth: "100px",
  span: 12,
  list: [
    { type: "input", label: "菜单名称", prop: "title", required: true },
    { type: "input", label: "路由路径", prop: "index", required: true },
    { type: "input", label: "图标", prop: "icon" },
    { type: "input", label: "权限标识", prop: "permiss" },
    { type: "parent", label: "父菜单", prop: "parent" },
  ],
});

const visible = ref(false);
const isEdit = ref(false);
const rowData = ref({});
const handleEdit = (row) => {
  rowData.value = { ...row };
  isEdit.value = true;
  visible.value = true;
};
const updateData = () => {
  closeDialog();
};

const closeDialog = () => {
  visible.value = false;
  isEdit.value = false;
};

// 查看详情弹窗相关
const visible1 = ref(false);
const viewData = ref({
  row: {},
  list: [],
});
const handleView = (row) => {
  viewData.value.row = { ...row };
  viewData.value.list = [
    {
      prop: "id",
      label: "菜单ID",
    },
    {
      prop: "pid",
      label: "父菜单ID",
    },
    {
      prop: "title",
      label: "菜单名称",
    },
    {
      prop: "index",
      label: "路由路径",
    },
    {
      prop: "permiss",
      label: "权限标识",
    },
    {
      prop: "icon",
      label: "图标",
    },
  ];
  visible1.value = true;
};

// 删除相关
const handleDelete = (row) => {
  ElMessage.success("删除成功");
};
</script>

<style lang="scss" scoped></style>
