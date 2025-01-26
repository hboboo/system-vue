<template>
  <div class="dashboard">
    <el-row :gutter="15">
      <el-col :span="6">
        <el-card shadow="hover">
          <img class="card-icon" src="../assets/img/Visitors.svg" />
          <div class="card-content">
            <h3 class="card-content__title">Visitors</h3>
            <span class="card-content__data">1562</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <img class="card-icon" src="../assets/img/download.svg" />
          <div class="card-content">
            <h3 class="card-content__title">download</h3>
            <span class="card-content__data">1562</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <img class="card-icon" src="../assets/img/commodity.svg" />
          <div class="card-content">
            <h3 class="card-content__title">commodity</h3>
            <span class="card-content__data">1562</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <img class="card-icon" src="../assets/img/transaction.svg" />
          <div class="card-content">
            <h3 class="card-content__title">transaction</h3>
            <span class="card-content__data">1562</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="15" class="chart-row">
      <el-col :span="18">
        <el-card shadow="hover">
          <div class="card-describe">
            <h3>订单动态</h3>
            <span class="card-describe__note">最近一周成交订单情况</span>
          </div>
          <v-chart class="chart" :option="option" autoresize />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <v-chart class="chart" :option="option2" autoresize />
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="15" class="chart-row">
      <el-col :span="18">
        <el-card shadow="hover" :body-style="{ display: 'block' }">
          <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
            <el-table-column prop="date" label="Date" sortable width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" :formatter="formatter" />
          </el-table>
          <div class="pagination-container">
            <el-pagination size="small" layout="prev, pager, next" :total="50" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { BarChart, PieChart, LineChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([TitleComponent, TooltipComponent, LegendComponent, GridComponent, BarChart, PieChart, CanvasRenderer, LineChart]);

const option = ref({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
});

const option2 = ref({
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
});

// 表格
const formatter = (row, column) => {
  return row.address;
};

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style lang="scss" scoped>
.card-icon {
  height: 80px;
  width: auto;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 38px;
  width: auto;
}
.card-content__title {
  font-size: 18px;
  color: #8c8c8c;
  padding-bottom: 10px;
}
.card-content__data {
  font-size: 15px;
  color: #0f0e0e;
  font-weight: 600;
}

.chart {
  width: 100%;
  height: 400px;
}
.chart-row {
  margin: 15px 0;
}
.card-describe {
  position: absolute;
  left: 30px;
  top: 8px;
}
.card-describe__note {
  font-size: 14px;
  color: #999;
}

.pagination-container {
  margin: 10px 0 0 305px; /* 可以调整分页与表格之间的间距 */
}

:deep(.el-card__body) {
  display: flex;
  align-items: center;
}
</style>
