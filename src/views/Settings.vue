<template>
  <div class="settings">
    <h2>系统配置</h2>
    
    <el-card class="settings-card">
      <el-tabs v-model="activeTab" type="border-card">
        <!-- 基本设置 -->
        <el-tab-pane label="基本设置" name="basic">
          <el-form :model="basicForm" label-width="100px">
            <el-form-item label="系统名称">
              <el-input v-model="basicForm.systemName" style="width: 300px;" />
            </el-form-item>
            <el-form-item label="系统描述">
              <el-input v-model="basicForm.systemDesc" type="textarea" :rows="3" style="width: 500px;" />
            </el-form-item>
            <el-form-item label="主题颜色">
              <el-color-picker v-model="basicForm.themeColor" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveBasic">保存设置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <!-- 应用管理 -->
        <el-tab-pane label="应用管理" name="apps">
          <div class="app-manage">
            <el-button type="primary" @click="showAddApp = true">添加应用</el-button>
            <el-table :data="appsList" style="margin-top: 16px;">
              <el-table-column prop="name" label="应用名称" />
              <el-table-column prop="url" label="地址" />
              <el-table-column prop="category" label="分类" />
              <el-table-column label="操作" width="200">
                <template #default="{ row }">
                  <el-button link type="primary" size="small">编辑</el-button>
                  <el-button link type="danger" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>

        <!-- 用户管理 -->
        <el-tab-pane label="用户管理" name="users">
          <el-table :data="userList">
            <el-table-column prop="username" label="用户名" />
            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="email" label="邮箱" />
            <el-table-column prop="role" label="角色">
              <template #default="{ row }">
                <el-tag :type="row.role === 'admin' ? 'danger' : 'primary'">
                  {{ row.role === 'admin' ? '管理员' : '普通用户' }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200">
              <template #default="{ row }">
                <el-button link type="primary" size="small">编辑</el-button>
                <el-button link type="danger" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <!-- 系统信息 -->
        <el-tab-pane label="系统信息" name="system">
          <el-descriptions :column="2" border>
            <el-descriptions-item label="系统版本">{{ systemInfo.version }}</el-descriptions-item>
            <el-descriptions-item label="构建时间">{{ systemInfo.buildTime }}</el-descriptions-item>
            <el-descriptions-item label="运行环境">{{ systemInfo.environment }}</el-descriptions-item>
            <el-descriptions-item label="Node.js版本">{{ systemInfo.nodeVersion }}</el-descriptions-item>
          </el-descriptions>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const activeTab = ref('basic')
const showAddApp = ref(false)

const basicForm = ref({
  systemName: '智司 UenterpriseOS',
  systemDesc: '未来型组织业务操作系统',
  themeColor: '#667eea'
})

const appsList = ref([
  { name: '内容管理', url: 'http://localhost:3001', category: '办公' },
  { name: '电子商城', url: 'http://localhost:3002', category: '商业' },
  { name: '客服工单', url: 'http://localhost:3003', category: '服务' }
])

const userList = ref([
  { username: 'admin', name: '管理员', email: 'admin@uos.com', role: 'admin' },
  { username: 'user1', name: '张三', email: 'user1@uos.com', role: 'user' },
  { username: 'user2', name: '李四', email: 'user2@uos.com', role: 'user' }
])

const systemInfo = ref({
  version: '1.0.0',
  buildTime: '2024-01-15 10:00:00',
  environment: '开发环境',
  nodeVersion: 'v18.x'
})

const saveBasic = () => {
  ElMessage.success('设置已保存')
}
</script>

<style scoped>
.settings h2 {
  font-size: 24px;
  color: #303133;
  margin-bottom: 24px;
}

.settings-card {
  max-width: 1200px;
}
</style>
