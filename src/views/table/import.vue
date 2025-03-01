<template>
  <div class="import-container">
    <div class="handle-box">
      <el-upload
        action="#"
        :limit="1"
        accept=".xlsx, .xls"
        :show-file-list="false"
        :before-upload="beforeUpload"
        :http-request="handleMany"
      >
        <el-button type="success">批量导入</el-button>
      </el-upload>
      <el-link class="link" href="/template.xlsx" target="_blank">下载模板</el-link>
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

const importList = ref([]);

const beforeUpload = async (rawFile) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(rawFile);

  const data = await new Promise((resolve, reject) => {
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = () => reject(new Error("Failed to read file"));
  });

  const workbook = XLSX.read(new Uint8Array(data), { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const result = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  importList.value = result;
  return true;
};

const handleMany = async () => {
  // 把数据传给服务器后获取最新列表，这里只是示例，不做请求
  const list = importList.value.map((item, index) => {
    return {
      id: index,
      name: item["姓名"],
      sno: item["学号"],
      class: item["班级"],
      age: item["年龄"],
      sex: item["性别"],
    };
  });
  tableData.value.push(...list);
};
</script>

<style lang="scss" scoped>
.import-container {
  padding: 25px;
  background-color: #fff;
}
.handle-box {
  display: flex;
  margin-bottom: 20px;
}
.link {
  margin-left: 10px;
}
</style>
