# PowerShell脚本：批量修复图片路径
# 将绝对路径 /images/... 改为 ${import.meta.env.BASE_URL || ''}images/...

Write-Host "开始修复图片路径..." -ForegroundColor Green

# 切换到app目录
Set-Location "app"

# 查找所有包含 /images/ 的文件
$files = Get-ChildItem -Recurse -Path "src" -Include *.tsx,*.ts | Select-String -Pattern '/images/' -List | Select-Object -ExpandProperty Path | Get-Unique

Write-Host "找到 $($files.Count) 个需要修复的文件" -ForegroundColor Yellow

foreach ($file in $files) {
    Write-Host "处理文件: $file" -ForegroundColor Cyan
    
    # 读取文件内容
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # 修复不同类型的图片引用
    
    # 1. 修复 src="/images/..." 格式
    $content = $content -replace 'src="/images/', 'src={`${import.meta.env.BASE_URL || ""}images/'
    
    # 2. 修复 src='/images/...' 格式
    $content = $content -replace "src='/images/", "src={`${import.meta.env.BASE_URL || ''}images/"
    
    # 3. 修复 image: '/images/...' 格式（在对象中）
    $content = $content -replace "image: '/images/", "image: `${import.meta.env.BASE_URL || ''}images/"
    
    # 4. 修复 image: "/images/..." 格式
    $content = $content -replace 'image: "/images/', 'image: `${import.meta.env.BASE_URL || ""}images/'
    
    # 5. 修复 images: ['/images/...'] 格式
    $content = $content -replace "images: \['/images/", "images: [`${import.meta.env.BASE_URL || ''}images/"
    
    # 6. 修复 images: ["/images/..."] 格式
    $content = $content -replace 'images: \["/images/', 'images: [`${import.meta.env.BASE_URL || ""}images/'
    
    # 写入文件
    Set-Content $file $content -Encoding UTF8
    
    Write-Host "  ✓ 已修复" -ForegroundColor Green
}

Write-Host "`n修复完成！" -ForegroundColor Green
Write-Host "接下来需要："
Write-Host "1. 运行 'cd app && npm run build' 测试构建" -ForegroundColor Yellow
Write-Host "2. 检查构建输出中的图片路径是否正确" -ForegroundColor Yellow
Write-Host "3. 提交更改并推送到GitHub" -ForegroundColor Yellow

# 返回原目录
Set-Location ".."
