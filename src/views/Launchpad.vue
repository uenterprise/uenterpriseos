<template>
  <div class="launchpad">
    <!-- 搜索栏 -->
    <div class="search-section">
      <el-input
        v-model="searchQuery"
        placeholder="搜索应用..."
        prefix-icon="Search"
        size="large"
        clearable
        style="max-width: 500px"
      />
    </div>

    <!-- 应用列表 -->
    <div class="app-section">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="全部应用" name="all">
          <div class="app-grid">
            <div
              v-for="app in filteredApps"
              :key="app.id"
              class="app-item"
              @click="openApp(app)"
            >
              <div class="app-item-icon">
                <el-icon :size="32"><component :is="app.icon" /></el-icon>
              </div>
              <span class="app-item-name">{{ app.name }}</span>
              <div class="app-item-desc">{{ app.description }}</div>
              <el-button
                v-if="!app.isFavorite"
                link
                size="small"
                @click.stop="toggleFavorite(app.id)"
              >
                <el-icon><Star /></el-icon>
                收藏
              </el-button>
              <el-button
                v-else
                link
                size="small"
                type="primary"
                @click.stop="toggleFavorite(app.id)"
              >
                <el-icon><StarFilled /></el-icon>
                已收藏
              </el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的收藏" name="favorites">
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
              <div class="app-item-desc">{{ app.description }}</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppsStore } from '@/store/apps'
import { Star, StarFilled } from '@element-plus/icons-vue'

const router = useRouter()
const appsStore = useAppsStore()

const searchQuery = ref('')
const activeTab = ref('all')
const favorites = appsStore.favorites

const filteredApps = computed(() => {
  if (!searchQuery.value) {
    return appsStore.apps
  }
  return appsStore.apps.filter(app => 
    app.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    app.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const openApp = (app: any) => {
  router.push(`/app/${app.id}`)
}

const toggleFavorite = (id: string) => {
  appsStore.toggleFavorite(id)
}
</script>

<style scoped>
.launchpad {
  max-width: 1400px;
  margin: 0 auto;
}

.search-section {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.app-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
}

.app-item {
  position: relative;
}

.app-item-desc {
  font-size: 12px;
  color: #909399;
  text-align: center;
  margin-top: 8px;
}
</style>
