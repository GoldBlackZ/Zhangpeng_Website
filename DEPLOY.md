# GitHub Pages 部署指南

## 已完成的工作

1. ✅ Vite配置已更新：`base: '/Zhangpeng_Website/'`
2. ✅ GitHub Actions工作流已配置
3. ✅ 项目构建成功
4. ✅ 代码已提交到GitHub

## 下一步操作

### 方法1：使用GitHub Actions自动部署（推荐）

1. 访问您的仓库：https://github.com/GoldBlackZ/Zhangpeng_Website
2. 前往 **Actions** 选项卡
3. 等待工作流自动运行（推送到main分支后触发）
4. 工作流完成后，前往 **Settings** → **Pages**
5. 确保 **Source** 设置为 **GitHub Actions**

### 方法2：手动启用GitHub Pages

1. 访问：https://github.com/GoldBlackZ/Zhangpeng_Website/settings/pages
2. 在 **Build and deployment** 部分：
   - **Source**：选择 **Deploy from a branch**
   - **Branch**：选择 **gh-pages**，文件夹选择 **/(root)**
   - 点击 **Save**

## 访问您的网站

部署完成后，访问：
**https://GoldBlackZ.github.io/Zhangpeng_Website/**

## 验证部署

1. 等待5-10分钟让部署完成
2. 访问上述URL
3. 如果看到您的React应用，说明部署成功

## 故障排除

如果网站无法访问：

1. 检查GitHub Actions状态：https://github.com/GoldBlackZ/Zhangpeng_Website/actions
2. 确保 `gh-pages` 分支已创建并包含构建文件
3. 在仓库Settings → Pages中查看部署状态

## 技术细节

- **构建输出目录**：`app/dist/`
- **基础路径**：`/Zhangpeng_Website/`（必须与仓库名称匹配）
- **部署分支**：`gh-pages`
- **自动触发**：推送到 `main` 分支时自动构建和部署