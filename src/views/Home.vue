<template>
  <div class="home">
    <!-- 欢迎区域 -->
    <div class="welcome-section">
      <h2>欢迎使用智司 UenterpriseOS</h2>
      <p>未来型组织业务操作系统</p>
    </div>

    <!-- 快速启动区 -->
    <div class="section">
      <h3>快速启动</h3>
      <div class="app-grid">
        <div
          v-for="app in favorites"
          :key="app.id"
          class="app-item"
          @click="openApp(app)"
        >
          <div class="app-item-icon">
            <el-icon :size="32"><component :is="app.icon" /></el-icon>
          </div>
          <span class="app-item-name">{{ app.name }}</span>
        </div>
      </div>
    </div>

    <!-- Widget 区域 -->
    <div class="section">
      <h3>工作桌面</h3>
      <div class="widget-container">
        <div class="widget-card">
          <div class="widget-header">
            <span class="widget-title">今日待办</span>
            <el-button type="primary" size="small">添加</el-button>
          </div>
          <div class="widget-content">
            <ul class="todo-list">
              <li>
                <el-checkbox v-model="todo1">完成产品设计文档</el-checkbox>
              </li>
              <li>
                <el-checkbox v-model="todo2">与开发团队周会</el-checkbox>
              </li>
              <li>
                <el-checkbox v-model="todo3">审阅财务报表</el-checkbox>
              </li>
            </ul>
          </div>
        </div>

        <div class="widget-card">
          <div class="widget-header">
            <span class="widget-title">数据概览</span>
            <el-button text size="small">更多</el-button>
          </div>
          <div class="widget-content">
            <el-statistic title="活跃用户" :value="1234" />
            <el-statistic title="订单数量" :value="567" style="margin-top: 16px" />
            <el-statistic title="销售额" :value="89000" prefix="¥" style="margin-top: 16px" />
          </div>
        </div>

        <div class="widget-card">
          <div class="widget-header">
            <span class="widget-title">最近消息</span>
            <el-button text size="small">更多</el-button>
          </div>
          <div class="widget-content">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAppsStore } from '@/store/apps'
import { Document, Goods, DataAnalysis } from '@element-plus/icons-vue'

const router = useRouter()
const appsStore = useAppsStore()
const favorites = appsStore.favorites

const todo1 = ref(false)
const todo2 = ref(false)
const todo3 = ref(false)

const activities = ref([
  {
    content: '新订单创建成功',
    timestamp: '2024-01-15 10:30'
  },
  {
    content: '系统更新完成',
    timestamp: '2024-01-15 09:00'
  },
  {
    content: '新用户注册',
    timestamp: '2024-01-15 08:45'
  }
])

const openApp = (app: any) => {
  router.push(`/app/${app.id}`)
}

onMounted(() => {
  // 初始化逻辑
})
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

.welcome-section {
  text-align: center;
  padding: 40px 0;
}

.welcome-section h2 {
  font-size: 28px;
  color: #303133;
  margin-bottom: 10px;
}

.welcome-section p {
  color: #909399;
  font-size: 16px;
}

.section {
  margin-bottom: 40px;
}

.section h3 {
  font-size: 18px;
  color: #303133;
  margin-bottom: 20px;
}

.widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ebeef5;
}

.widget-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}

.todo-list {
  list-style: none;
}

.todo-list li {
  padding: 8px 0;
  border-bottom: 1px solid #f5f7fa;
}

.todo-list li:last-child {
  border-bottom: none;
}
</style>
