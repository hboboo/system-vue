<template>
  <div class="echarts-container">
    <div class="plugins-tips">
      vue-echarts：Apache ECharts™ 的 Vue.js 组件。 访问地址：
      <a href="https://github.com/ecomfe/vue-echarts" target="_blank">vue-echarts</a>
    </div>
    <el-card shadow="hover" class="card">
      <template #header>
        <div class="content-title">折线图</div>
      </template>
      <v-chart class="chart" :option="lineOptions" />
    </el-card>
    <el-card shadow="hover" class="card">
      <template #header>
        <div class="content-title">柱状图</div>
      </template>
      <v-chart class="chart" :option="barOptions" />
    </el-card>
    <el-card shadow="hover" class="card">
      <template #header>
        <div class="content-title">饼状图</div>
      </template>
      <v-chart class="chart" :option="pieOptions" />
    </el-card>
    <el-card shadow="hover" class="card">
      <template #header>
        <div class="content-title">K线图</div>
      </template>
      <v-chart class="chart" :option="kOptions" />
    </el-card>
  </div>
</template>

<script setup>
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { LineChart, BarChart, PieChart, CandlestickChart } from "echarts/charts";
import { GridComponent, TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

import { lineOptions, barOptions, pieOptions, kOptions } from "./options";
use([
  GridComponent,
  LineChart,
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CandlestickChart,
]);
</script>

<style lang="scss" scoped>
.echarts-container {
  padding: 20px;
  background-color: #fff;
}

.plugins-tips {
  background-color: #eef1f6;
  padding: 10px;
}

.card {
  margin-top: 15px;
}

.chart {
  width: 100%;
  height: 400px; /* 确保容器有高度 */
}
</style>
