<template>
  <div class="micro-app">
    <!-- 应用标题栏 -->
    <div class="app-header">
      <div class="app-header-left">
        <el-button :icon="ArrowLeft" circle @click="goBack" />
        <h3>{{ appName }}</h3>
      </div>
      <div class="app-header-right">
        <el-button :icon="Refresh" circle @click="refreshApp" />
        <el-button :icon="FullScreen" circle @click="toggleFullscreen" />
      </div>
    </div>
    
    <!-- Wujie 微前端容器 -->
    <div ref="wujieRef" class="wujie-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppsStore } from '@/store/apps'
import { startWujieApp, destroyWujieApp } from '@/config/wujie'
import { ArrowLeft, Refresh, FullScreen } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const appsStore = useAppsStore()

const wujieRef = ref<HTMLElement>()
const appName = ref('')

let currentAppId = ''

const goBack = () => {
  router.back()
}

const refreshApp = () => {
  if (currentAppId) {
    destroyWujieApp(currentAppId)
    loadApp(currentAppId)
  }
}

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const loadApp = (id: string) => {
  const app = appsStore.getAppById(id)
  if (app) {
    appName.value = app.name
    currentAppId = id
    
    startWujieApp({
      name: id,
      url: app.url,
      exec: true,
      alive: true,
      props: {
        tenantId: 'tenant-001',
        token: 'mock-token'
      }
    })
  }
}

watch(
  () => route.params.id,
  (id) => {
    if (id && typeof id === 'string') {
      if (currentAppId && currentAppId !== id) {
        destroyWujieApp(currentAppId)
      }
      loadApp(id)
    }
  },
  { immediate: true }
)

onMounted(() => {
  // 初始化
})

onUnmounted(() => {
  if (currentAppId) {
    destroyWujieApp(currentAppId)
  }
})
</script>

<style scoped>
.micro-app {
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: white;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.app-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.app-header-left h3 {
  margin: 0;
  font-size: 16px;
  color: #303133;
}

.wujie-container {
  flex: 1;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>
