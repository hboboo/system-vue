<template>
  <div class="export-container">
    <div class="handle-box">
      <el-button type="primary" @click="exportXlsx">导出Excel</el-button>
    </div>
    <el-table :data="tableData" border class="table" :header-cell-style="{ background: '#f4f6f8' }">
      <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="sno" label="学号"></el-table-column>
      <el-table-column prop="class" label="班级"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import * as XLSX from "xlsx";

const tableData = ref([]);
// 获取表格数据
const getData = () => {
  tableData.value = [
    {
      id: 1,
      name: "小明",
      sno: "S001",
      class: "一班",
      age: "10",
      sex: "男",
    },
    {
      id: 2,
      name: "小红",
      sno: "S002",
      class: "一班",
      age: "9",
      sex: "女",
    },
  ];
};
getData();

const list = [["序号", "姓名", "学号", "班级", "年龄", "性别"]];
const exportXlsx = () => {
  tableData.value.map((item, i) => {
    const arr = [i + 1];
    arr.push(...[item.name, item.sno, item.class, item.age, item.sex]);
    list.push(arr);
  });
  let WorkSheet = XLSX.utils.aoa_to_sheet(list);
  let new_workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(new_workbook, WorkSheet, "第一页");
  XLSX.writeFile(new_workbook, `表格.xlsx`);
};
</script>

<style lang="scss" scoped>
.export-container {
  padding: 25px;
  background-color: #fff;
}
.handle-box {
  margin-bottom: 20px;
}
.table {
  width: 100%;
  font-size: 14px;
}
</style>
