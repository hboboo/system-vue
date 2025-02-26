<template>
  <div>
    <table-search :query="query" :options="searchOpt" :search="handleSearch" />
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
      <table-detail :data="viewData"></table-detail>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import TableSearch from "@/components/TableSearch.vue";
import TableCustom from "@/components/TableCustom.vue";
import TableDetail from "@/components/TableDetail.vue";
import TableEdit from "@/components/TableEdit.vue";
import { fetchUserData } from "@/api";

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

const searchOpt = ref([{ type: "input", label: "用户名：", prop: "name" }]);
const handleSearch = () => {
  changePage(1);
};
// 表格相关
let columns = ref([
  { type: "index", label: "序号", width: 55, align: "center" },
  { prop: "name", label: "用户名" },
  { prop: "phone", label: "手机号" },
  { prop: "role", label: "角色" },
  { prop: "operator", label: "操作", width: 250 },
]);

// 新增/编辑弹窗相关
let options = ref({
  labelWidth: "100px",
  span: 12,
  list: [
    { type: "input", label: "用户名", prop: "name", required: true },
    { type: "input", label: "手机号", prop: "phone", required: true },
    { type: "input", label: "密码", prop: "password", required: true },
    { type: "input", label: "邮箱", prop: "email", required: true },
    { type: "input", label: "角色", prop: "role", required: true },
  ],
});

const tableData = ref([]);
const getData = async () => {
  const res = await fetchUserData();
  tableData.value = res.data.list;
  page.total = res.data.pageTotal;
};
getData();

const page = reactive({
  index: 1,
  size: 10,
  total: 2,
});
const changePage = (val) => {
  page.index = val;
  getData();
};

//查看详情弹窗相关
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
      label: "用户ID",
    },
    {
      prop: "name",
      label: "用户名",
    },
    {
      prop: "password",
      label: "密码",
    },
    {
      prop: "email",
      label: "邮箱",
    },
    {
      prop: "phone",
      label: "电话",
    },
    {
      prop: "role",
      label: "角色",
    },
    {
      prop: "date",
      label: "注册日期",
    },
  ];
  visible1.value = true;
};

const closeDialog = () => {
  visible.value = false;
  isEdit.value = false;
};

const updateData = () => {
  closeDialog();
  getData();
};

// 删除相关
const handleDelete = () => {
  ElMessage.success("删除成功");
};
</script>

<style lang="scss" scoped></style>
