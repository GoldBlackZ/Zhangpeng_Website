const fs = require('fs');
const path = require('path');

console.log('开始修复图片路径（最终方法）...');

// 修复文件中的图片路径
function fixFile(filePath) {
  console.log(`处理文件: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // 简单方法：将 '/images/' 替换为 './images/'
  // 注意：只替换在引号中的 /images/
  
  // 修复 src="/images/..." 格式
  content = content.replace(/src="\/images\//g, 'src="./images/');
  
  // 修复 src='/images/...' 格式
  content = content.replace(/src='\/images\//g, "src='./images/");
  
  // 修复 image: '/images/...' 格式
  content = content.replace(/image: '\/images\//g, "image: './images/");
  
  // 修复 image: "/images/..." 格式
  content = content.replace(/image: "\/images\//g, 'image: "./images/');
  
  // 修复 images: ['/images/...'] 格式
  content = content.replace(/images: \['\/images\//g, "images: ['./images/");
  
  // 修复 images: ["/images/..."] 格式
  content = content.replace(/images: \["\/images\//g, 'images: ["./images/');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ 已修复`);
    return true;
  }
  
  return false;
}

// 主函数
function main() {
  const srcDir = path.join(__dirname, 'app', 'src');
  
  // 需要修复的文件列表
  const filesToFix = [
    'pages/About.tsx',
    'pages/Awards.tsx',
    'pages/Experience.tsx',
    'pages/Home.tsx',
    'pages/Media.tsx',
    'pages/Projects.tsx',
    'sections/Awards.tsx',
    'sections/Media.tsx'
  ].map(file => path.join(srcDir, file));
  
  console.log(`需要修复 ${filesToFix.length} 个文件`);
  
  let fixedCount = 0;
  for (const file of filesToFix) {
    try {
      if (fs.existsSync(file)) {
        if (fixFile(file)) {
          fixedCount++;
        }
      } else {
        console.log(`文件不存在: ${file}`);
      }
    } catch (error) {
      console.error(`处理文件 ${file} 时出错:`, error.message);
    }
  }
  
  console.log(`\n修复完成！`);
  console.log(`处理了 ${filesToFix.length} 个文件，修复了 ${fixedCount} 个文件`);
  console.log(`\n接下来需要：`);
  console.log(`1. 运行 'cd app && npm run build' 测试构建`);
  console.log(`2. 检查构建输出中的图片路径是否正确`);
  console.log(`3. 提交更改并推送到GitHub`);
}

// 执行
main();