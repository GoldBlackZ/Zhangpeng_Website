# GitHub Pages 手动启用指南

如果GitHub Actions工作流没有自动启用GitHub Pages，请按照以下步骤手动启用：

## 步骤1：推送代码到GitHub

当网络恢复后，运行以下命令推送更改：

```bash
git push origin main
```

## 步骤2：在GitHub上启用GitHub Pages

1. 访问您的仓库：https://github.com/GoldBlackZ/Zhangpeng_Website
2. 点击 **Settings**（设置）选项卡
3. 在左侧菜单中找到 **Pages**（页面）
4. 在 **Build and deployment**（构建和部署）部分：
   - **Source**（源）：选择 **GitHub Actions**
   - 如果看到现有的工作流，确保它已启用

## 步骤3：验证部署

1. 访问您的网站：https://GoldBlackZ.github.io/Zhangpeng_Website/
2. 等待几分钟让部署完成（首次部署可能需要5-10分钟）
3. 检查GitHub Actions运行状态：https://github.com/GoldBlackZ/Zhangpeng_Website/actions

## 步骤4：故障排除

如果网站无法访问：

1. **检查GitHub Actions状态**：
   - 前往仓库的 **Actions** 选项卡
   - 查看最新的工作流运行是否成功

2. **验证配置**：
   - 确保 `vite.config.ts` 中的 `base` 设置为 `'/Zhangpeng_Website/'`
   - 确保 `app/public/404.html` 文件存在

3. **手动触发部署**：
   - 在GitHub Actions页面，点击 **Run workflow** 按钮
   - 选择 **main** 分支并运行

## 技术说明

- **基础URL**：`/Zhangpeng_Website/`（必须与仓库名称匹配）
- **构建输出**：`app/dist/` 目录
- **SPA路由**：通过 `404.html` 处理客户端路由
- **自动部署**：推送到 `main` 分支时自动触发

## 成功指标

部署成功后，您应该看到：
1. GitHub Actions工作流显示绿色勾号（✓）
2. 在仓库Settings > Pages中看到绿色的"Your site is published"消息
3. 网站可以通过 https://GoldBlackZ.github.io/Zhangpeng_Website/ 访问

## 联系方式

如有问题，请检查GitHub仓库的Issues或联系维护者。