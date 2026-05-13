import { setupApp, preloadApp, startApp, destroyApp, bus } from 'wujie'

export interface WujieAppConfig {
  name: string
  url: string
  exec?: boolean
  alive?: boolean
  props?: Record<string, any>
}

// 微前端应用配置
const wujieApps: WujieAppConfig[] = [
  {
    name: 'cms',
    url: '//localhost:3001',
    exec: true,
    alive: true
  },
  {
    name: 'ecommerce',
    url: '//localhost:3002',
    exec: true,
    alive: true
  },
  {
    name: 'helpdesk',
    url: '//localhost:3003',
    exec: true,
    alive: true
  },
  {
    name: 'bigdata',
    url: '//localhost:3004',
    exec: true,
    alive: true
  },
  {
    name: 'iot',
    url: '//localhost:3005',
    exec: true,
    alive: true
  },
  {
    name: 'events',
    url: '//localhost:3006',
    exec: true,
    alive: true
  },
  {
    name: 'bpm',
    url: '//localhost:3007',
    exec: true,
    alive: true
  }
]

// 初始化 Wujie
export function initWujie() {
  wujieApps.forEach(app => {
    setupApp({
      name: app.name,
      url: app.url,
      exec: app.exec,
      alive: app.alive,
      props: app.props,
      // 生命周期
      beforeLoad: (appWindow) => {
        console.log(`[Wujie] 加载应用 ${app.name} 前`)
      },
      beforeMount: (appWindow) => {
        console.log(`[Wujie] 挂载应用 ${app.name} 前`)
      },
      afterMount: (appWindow) => {
        console.log(`[Wujie] 挂载应用 ${app.name} 后`)
      },
      beforeUnmount: (appWindow) => {
        console.log(`[Wujie] 卸载应用 ${app.name} 前`)
      },
      afterUnmount: (appWindow) => {
        console.log(`[Wujie] 卸载应用 ${app.name} 后`)
      }
    })
  })
}

// 预加载应用
export function preloadWujieApps(appNames: string[] = []) {
  appNames.forEach(name => {
    const app = wujieApps.find(a => a.name === name)
    if (app) {
      preloadApp({
        name: app.name,
        url: app.url
      })
    }
  })
}

// 启动应用
export function startWujieApp(config: WujieAppConfig) {
  return startApp({
    name: config.name,
    url: config.url,
    exec: config.exec,
    alive: config.alive,
    props: config.props
  })
}

// 销毁应用
export function destroyWujieApp(name: string) {
  destroyApp(name)
}

// 事件总线
export const wujieBus = bus
