# 个人作品集网站

基于 React + TypeScript + Vite 构建的个人作品集展示站点，深色主题、响应式布局，适合开发者展示项目与联系方式。

## 项目简介

本仓库是一个单页作品集模板，包含首页大标题与简介、关于我（个人介绍与技能）、项目卡片展示、联系方式等模块。数据通过 `src/data/` 下的 TypeScript 文件配置，无需改组件即可增删项目与技能。支持平滑滚动与进入视口动画，并针对移动端做了适配。

## 功能特性

- **首页**：大标题、头像、简短简介、CTA 按钮
- **关于我**：个人介绍文案 + 按分类展示的技能列表
- **项目展示**：项目卡片（名称、截图、描述、技术栈、在线预览 / GitHub 链接），图片懒加载，加载失败时显示占位
- **联系方式**：邮箱、GitHub、社交媒体等链接，可在配置中统一修改
- **导航**：顶部固定导航栏，移动端为汉堡菜单
- **设计**：深色主题（背景 #0a0a0a）、渐变色强调、平滑滚动、移动端适配

## 技术栈

- **React 18** + **TypeScript**
- **Vite** 构建与开发
- **Tailwind CSS** 样式（v4）
- **Framer Motion** 滚动与入场动画

## 项目结构

```
src/
├── components/          # 页面组件
│   ├── Header.tsx       # 顶部导航（含移动端菜单）
│   ├── Hero.tsx         # 首页大标题区
│   ├── About.tsx        # 关于我
│   ├── Projects.tsx     # 项目展示
│   ├── Contact.tsx      # 联系方式
│   └── Footer.tsx       # 页脚
├── data/                # 配置数据（修改此处即可更新内容）
│   ├── projects.ts      # 项目列表
│   ├── skills.ts        # 技能列表
│   └── contact.ts       # 联系方式链接
├── App.tsx
├── main.tsx
└── index.css            # 全局样式与 Tailwind、深色主题变量
```

## 快速开始

### 环境要求

- Node.js 18+
- npm / pnpm / yarn

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

在浏览器中打开终端提示的本地地址（通常为 `http://localhost:5173`）。

### 构建生产版本

```bash
npm run build
```

产物在 `dist/` 目录，可部署到任意静态托管服务。

### 预览构建结果

```bash
npm run preview
```

## 自定义内容

- **项目列表**：编辑 `src/data/projects.ts`，按现有格式增删项目；项目截图可放入 `public/projects/` 并填写对应路径。
- **技能**：编辑 `src/data/skills.ts`，可调整分类（前端 / 后端 / 工具 / 其他）与技能名称。
- **联系方式**：编辑 `src/data/contact.ts`，修改邮箱、GitHub、社交媒体等链接与文案。

修改以上文件后保存即可在页面中看到更新，无需改组件代码。

## 许可证

MIT
