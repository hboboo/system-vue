<template>
  <div>
    <table-search :query="query" :options="searchOpt" :search="handleSearch"></table-search>
    <table-custom
      :columns="columns"
      :tableData="tableData"
      :total="page.total"
      :viewFunc="handleView"
      :editFunc="handleEdit"
      :page-change="changePage"
      :delFunc="handleDelete"
    >
      <template #toolbarBtn>
        <el-button type="warning" icon="CirclePlusFilled" @click="visible = true">新增</el-button>
      </template>
      <template #status="{ rows }">
        <el-tag type="success" v-if="rows.status">启动</el-tag>
        <el-tag type="danger" v-else>禁用</el-tag>
      </template>
      <template #permissions="{ rows }">
        <el-button type="primary" size="small" plain @click="handlePermission(rows)">管理</el-button>
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
      <table-edit :form-data="rowData" :options="options" :edit="isEdit" :update="updateData"></table-edit>
    </el-dialog>
    <el-dialog title="查看详情" v-model="visible1" width="700px" destroy-on-close>
      <table-detail :data="viewData">
        <template #status="{ rows }">
          <el-tag type="success" v-if="rows.status">启动</el-tag>
          <el-tag type="danger" v-else>禁用</el-tag>
        </template>
      </table-detail>
    </el-dialog>
    <el-dialog title="权限管理" width="500px" v-model="visible2" destroy-on-close>
      <role-permission :permiss-options="permissOptions"></role-permission>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import TableSearch from "@/components/TableSearch.vue";
import TableCustom from "@/components/TableCustom.vue";
import TableEdit from "@/components/TableEdit.vue";
import TableDetail from "@/components/TableDetail.vue";
import RolePermission from "./rolePermission.vue";
import { fetchRoleData } from "@/api";

//查询相关
const query = reactive({
  name: "",
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
  getData();
};
const closeDialog = () => {
  visible.value = false;
  isEdit.value = false;
  rowData.value = {};
};

const searchOpt = ref([{ type: "input", label: "角色名称", prop: "name" }]);
const handleSearch = () => {
  changePage(1);
};

const tableData = ref([]);
const getData = async () => {
  const res = await fetchRoleData();
  tableData.value = res.data.list;
  page.total = res.data.pageTotal;
};
getData();
const changePage = (val) => {
  page.index = val;
  getData();
};
const page = reactive({
  index: 1,
  size: 10,
  total: 2,
});
// 表格相关
let columns = ref([
  { type: "index", label: "序号", width: 55, align: "center" },
  { prop: "name", label: "角色名称" },
  { prop: "key", label: "角色标识" },
  { prop: "status", label: "状态" },
  { prop: "permissions", label: "权限管理" },
  { prop: "operator", label: "操作", width: 250 },
]);

// 新增/编辑弹窗相关
const options = ref({
  labelWidth: "100px",
  span: 24,
  list: [
    { type: "input", label: "角色名称", prop: "name", required: true },
    { type: "input", label: "角色标识", prop: "key", required: true },
    { type: "switch", label: "状态", prop: "status", required: false, activeText: "启用", inactiveText: "禁用" },
  ],
});

// 查看详情弹窗相关
const visible1 = ref(false);
const viewData = ref({
  row: {},
  list: [],
  column: 1,
});
const handleView = (row) => {
  viewData.value.row = { ...row };
  viewData.value.list = [
    {
      prop: "id",
      label: "角色ID",
    },
    {
      prop: "name",
      label: "角色名称",
    },
    {
      prop: "key",
      label: "角色标识",
    },
    {
      prop: "status",
      label: "角色状态",
    },
  ];
  visible1.value = true;
};
// 删除相关
const handleDelete = (row) => {
  ElMessage.success("删除成功");
};

// 权限管理弹窗相关
const visible2 = ref(false);
const permissOptions = ref({});
const handlePermission = (row) => {
  visible2.value = true;
  permissOptions.value = {
    id: row.id,
    permiss: row.permiss,
  };
};
</script>

<style lang="scss" scoped></style>
