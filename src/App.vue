<template>
  <div id="app-container">
    <el-container class="main-container">
      <!-- 顶部导航栏 -->
      <el-header class="main-header">
        <div class="header-left">
          <div class="logo">
            <el-icon :size="30"><Platform /></el-icon>
            <span class="logo-text">智司 UenterpriseOS</span>
          </div>
        </div>
        <div class="header-center">
          <el-menu
            :default-active="activeMenu"
            mode="horizontal"
            :ellipsis="false"
            router
            class="main-menu"
          >
            <el-menu-item index="/">工作桌面</el-menu-item>
            <el-menu-item index="/launchpad">启动台</el-menu-item>
            <el-menu-item index="/dashboard">仪表盘</el-menu-item>
            <el-menu-item index="/settings">系统配置</el-menu-item>
          </el-menu>
        </div>
        <div class="header-right">
          <el-dropdown>
            <div class="user-info">
              <el-avatar :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <span class="username">管理员</span>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人设置</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <!-- 主内容区 -->
      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Platform } from '@element-plus/icons-vue'

const route = useRoute()
const activeMenu = computed(() => route.path)
</script>

<style scoped>
.main-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
}

.header-left .logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-left .logo-text {
  font-size: 20px;
  font-weight: 600;
}

.header-center .main-menu {
  background: transparent;
  border: none;
}

.header-center .main-menu .el-menu-item {
  color: rgba(255, 255, 255, 0.8);
  border-bottom: none;
}

.header-center .main-menu .el-menu-item:hover,
.header-center .main-menu .el-menu-item.is-active {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border-bottom: none;
}

.header-right .user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #f5f7fa;
}
</style>
