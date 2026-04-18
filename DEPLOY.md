# GitHub Pages 部署指南

## 项目状态

✅ **已完成配置**：
1. Vite配置已更新：`base: '/Zhangpeng_Website/'`
2. GitHub Actions工作流已配置并修复
3. package.json已添加deploy脚本
4. 项目构建成功

## 部署方法

### 方法1：使用GitHub Actions自动部署（推荐，无需本地操作）

1. 将代码推送到GitHub的main分支
2. GitHub Actions会自动运行，构建项目并部署到gh-pages分支
3. 访问 https://GoldBlackZ.github.io/Zhangpeng_Website/ 查看网站

### 方法2：使用npm脚本手动部署

如果您想在本地手动部署：

```bash
# 1. 构建项目
npm run predeploy

# 2. 部署到GitHub Pages
npm run deploy
```

或者使用一条命令：
```bash
npm run predeploy && npm run deploy
```

## 配置说明

### package.json脚本
- `npm run build` - 构建项目
- `npm run predeploy` - 构建项目（deploy的前置步骤）
- `npm run deploy` - 使用gh-pages部署到GitHub Pages

### GitHub Actions工作流
- 触发条件：推送到main分支时自动运行
- 执行操作：安装依赖 → 构建项目 → 部署到gh-pages分支
- 输出目录：`dist/`（Vite构建输出）

## 访问您的网站

部署完成后，访问：
**https://GoldBlackZ.github.io/Zhangpeng_Website/**

## 验证部署

1. 等待5-10分钟让部署完成
2. 访问上述URL
3. 如果看到您的React应用，说明部署成功

## 故障排除

### 如果`npm run deploy`失败：
1. 确保您有GitHub仓库的写入权限
2. 检查网络连接，确保可以访问GitHub
3. 可以手动执行：
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

### 如果网站无法访问：
1. 检查GitHub Actions状态：https://github.com/GoldBlackZ/Zhangpeng_Website/actions
2. 确保 `gh-pages` 分支已创建并包含构建文件
3. 在仓库Settings → Pages中查看部署状态

## 技术细节

- **构建输出目录**：`dist/`
- **基础路径**：`/Zhangpeng_Website/`（必须与仓库名称匹配）
- **部署分支**：`gh-pages`
- **自动触发**：推送到 `main` 分支时自动构建和部署
