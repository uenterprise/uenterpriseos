# 智司 UenterpriseOS - Uenterprise Workspace

智司是一个面向未来型组织的业务操作系统，基于开放源代码生态构建的新型 aPaaS 平台及其配套工具。

## 📖 简介

UenterpriseOS Workspace 是智司的应用层组件，提供统一的工作空间界面，包括：

- **工作桌面**：基于 Widget 框架的定制化工作空间
- **启动台**：内置应用和外部应用的统一入口
- **仪表盘**：数据可视化大屏
- **系统配置**：统一的参数管理界面

## 🚀 技术栈

- **框架**：Vue 3 + TypeScript
- **UI 组件**：Element Plus
- **路由**：Vue Router 4
- **状态管理**：Pinia
- **构建工具**：Vite
- **微前端**：Wujie (无界微前端)
- **数据可视化**：ECharts

## 📦 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 🏗️ 项目结构

```
uenterpriseos/
├── src/
│   ├── views/              # 页面组件
│   │   ├── Home.vue       # 工作桌面
│   │   ├── Launchpad.vue  # 启动台
│   │   ├── Dashboard.vue  # 仪表盘
│   │   ├── Settings.vue   # 系统配置
│   │   └── MicroApp.vue   # 微前端容器
│   ├── store/             # 状态管理
│   │   └── apps.ts        # 应用管理
│   ├── config/            # 配置文件
│   │   └── wujie.ts       # 微前端配置
│   ├── assets/            # 静态资源
│   │   └── styles/        # 样式文件
│   ├── App.vue            # 根组件
│   └── main.ts            # 入口文件
├── public/                # 公共资源
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目配置
```

## 🎨 核心特性

### 1. 微前端架构
采用 Wujie 微前端框架，支持：
- 应用独立部署
- 样式隔离
- 组件通信
- 预加载优化

### 2. Widget 系统
灵活的 Widget 框架，支持：
- 自定义 Widget
- 拖拽布局
- 响应式设计

### 3. 多应用管理
统一的应用管理：
- 内置应用集成
- 外部应用接入
- 应用收藏
- 搜索功能

## 📚 相关项目

- UenterpriseOS Platform - 平台层
- UenterpriseOS Infrastructure - 基础设施层

## 🤝 贡献

欢迎提交 Issue 和 PR！

## 📄 许可证

Apache-2.0 License
