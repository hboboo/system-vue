<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="5.8">
        <el-card style="width: 280px" shadow="hover" class="dashboard-card">
          <img class="card-icon" src="../assets/img/Visitors.svg" />
          <div class="card-content">
            <h3 class="card-content__title">Visitors</h3>
            <span class="card-content__data">1562</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5.8">
        <el-card style="width: 280px" shadow="hover" class="dashboard-card">
          <img class="card-icon" src="../assets/img/download.svg" />
          <div class="card-content">
            <h3 class="card-content__title">download</h3>
            <span class="card-content__data">1562</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5.8">
        <el-card style="width: 280px" shadow="hover" class="dashboard-card">
          <img class="card-icon" src="../assets/img/commodity.svg" />
          <div class="card-content">
            <h3 class="card-content__title">commodity</h3>
            <span class="card-content__data">1562</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5.8">
        <el-card style="width: 280px" shadow="hover" class="dashboard-card">
          <img class="card-icon" src="../assets/img/transaction.svg" />
          <div class="card-content">
            <h3 class="card-content__title">transaction</h3>
            <span class="card-content__data">1562</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.dashboard {
  height: 100%;
  background-color: #f0f2f5;
}

/* 仪表盘头部卡片 */
.dashboard-card {
  margin: 25px 20px;
}
.card-icon {
  width: 85px;
  height: 85px;
}
.card-content {
  margin-left: 45px;
}
.card-content__title {
  font-size: 20px;
  color: #8c8c8c;
  padding-bottom: 15px;
}
.card-content__data {
  font-weight: 600;
  font-size: 23px;
  color: #666666;
}

:deep(.el-card__body) {
  display: flex;
  align-items: center;
}
</style>
