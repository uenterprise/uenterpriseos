import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface AppInfo {
  id: string
  name: string
  description: string
  icon: string
  url: string
  type: 'internal' | 'external'
  category: string
  isFavorite: boolean
}

export const useAppsStore = defineStore('apps', () => {
  const apps = ref<AppInfo[]>([
    {
      id: 'cms',
      name: '内容管理',
      description: '内容管理系统 CMS',
      icon: 'Document',
      url: 'http://localhost:3001',
      type: 'internal',
      category: '办公',
      isFavorite: true
    },
    {
      id: 'ecommerce',
      name: '电子商城',
      description: '电商平台管理',
      icon: 'Goods',
      url: 'http://localhost:3002',
      type: 'internal',
      category: '商业',
      isFavorite: true
    },
    {
      id: 'helpdesk',
      name: '客服工单',
      description: '工单管理系统',
      icon: 'ChatDotRound',
      url: 'http://localhost:3003',
      type: 'internal',
      category: '服务',
      isFavorite: false
    },
    {
      id: 'bigdata',
      name: '大数据中心',
      description: '数据分析平台',
      icon: 'DataAnalysis',
      url: 'http://localhost:3004',
      type: 'internal',
      category: '数据',
      isFavorite: true
    },
    {
      id: 'iot',
      name: '物联网中心',
      description: 'IoT设备管理',
      icon: 'Connection',
      url: 'http://localhost:3005',
      type: 'internal',
      category: '设备',
      isFavorite: false
    },
    {
      id: 'events',
      name: '会务管理',
      description: '会议活动管理',
      icon: 'Calendar',
      url: 'http://localhost:3006',
      type: 'internal',
      category: '办公',
      isFavorite: false
    },
    {
      id: 'bpm',
      name: '审批流程',
      description: '工作流引擎',
      icon: 'Guide',
      url: 'http://localhost:3007',
      type: 'internal',
      category: '办公',
      isFavorite: false
    }
  ])

  const favorites = computed(() => apps.value.filter(app => app.isFavorite))
  
  const getAppById = (id: string) => apps.value.find(app => app.id === id)
  
  const toggleFavorite = (id: string) => {
    const app = apps.value.find(a => a.id === id)
    if (app) {
      app.isFavorite = !app.isFavorite
    }
  }

  return {
    apps,
    favorites,
    getAppById,
    toggleFavorite
  }
})
