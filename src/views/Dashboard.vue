<template>
  <div class="dashboard">
    <h2>数据仪表盘</h2>
    
    <!-- 统计卡片 -->
    <el-row :gutter="20" class="stat-cards">
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
              <el-icon :size="36"><User /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">12,345</div>
              <div class="stat-label">活跃用户</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
              <el-icon :size="36"><ShoppingCart /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">5,678</div>
              <div class="stat-label">订单数量</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
              <el-icon :size="36"><Money /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">¥89,000</div>
              <div class="stat-label">销售额</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
              <el-icon :size="36"><TrendCharts /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">12.5%</div>
              <div class="stat-label">增长率</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 图表区域 -->
    <el-row :gutter="20" class="chart-section">
      <el-col :span="16">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>销售趋势</span>
            </div>
          </template>
          <div ref="chartRef" style="height: 350px;"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>热门产品</span>
            </div>
          </template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="产品名称" />
            <el-table-column prop="sales" label="销量" />
            <el-table-column prop="growth" label="增长率">
              <template #default="{ row }">
                <el-tag :type="row.growth > 0 ? 'success' : 'danger'">
                  {{ row.growth > 0 ? '+' : '' }}{{ row.growth }}%
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { User, ShoppingCart, Money, TrendCharts } from '@element-plus/icons-vue'

const chartRef = ref<HTMLElement>()

const tableData = ref([
  { name: '产品A', sales: 3245, growth: 12.5 },
  { name: '产品B', sales: 2890, growth: -3.2 },
  { name: '产品C', sales: 2456, growth: 8.7 },
  { name: '产品D', sales: 1890, growth: 5.1 },
  { name: '产品E', sales: 1567, growth: -1.8 }
])

let chart: echarts.ECharts | null = null

onMounted(() => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value)
    chart.setOption({
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '销售额',
          type: 'line',
          smooth: true,
          data: [820, 932, 901, 934, 1290, 1330],
          itemStyle: {
            color: '#667eea'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(102, 126, 234, 0.3)' },
              { offset: 1, color: 'rgba(102, 126, 234, 0.05)' }
            ])
          }
        }
      ]
    })
  }

  window.addEventListener('resize', () => {
    chart?.resize()
  })
})
</script>

<style scoped>
.dashboard h2 {
  font-size: 24px;
  color: #303133;
  margin-bottom: 24px;
}

.stat-cards {
  margin-bottom: 24px;
}

.stat-card {
  border: none;
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: #303133;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #909399;
}

.chart-section {
  margin-bottom: 24px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
