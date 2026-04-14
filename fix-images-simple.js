const fs = require('fs');
const path = require('path');

console.log('开始修复图片路径（简单方法）...');

// 修复文件中的图片路径
function fixFile(filePath) {
  console.log(`处理文件: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // 简单方法：将 /images/ 替换为 ./images/
  // 这样在GitHub Pages上会变成 /Zhangpeng_Website/images/
  
  // 修复 src="/images/..." 格式
  if (content.includes('src="/images/')) {
    content = content.replace(/src="\/images\//g, 'src="./images/');
    modified = true;
  }
  
  // 修复 src='/images/...' 格式
  if (content.includes("src='/images/")) {
    content = content.replace(/src='\/images\//g, "src='./images/");
    modified = true;
  }
  
  // 修复 image: '/images/...' 格式
  if (content.includes("image: '/images/")) {
    content = content.replace(/image: '\/images\//g, "image: './images/");
    modified = true;
  }
  
  // 修复 image: "/images/..." 格式
  if (content.includes('image: "/images/')) {
    content = content.replace(/image: "\/images\//g, 'image: "./images/');
    modified = true;
  }
  
  // 修复 images: ['/images/...'] 格式
  if (content.includes("images: ['/images/")) {
    content = content.replace(/images: \['\/images\//g, "images: ['./images/");
    modified = true;
  }
  
  // 修复 images: ["/images/..."] 格式
  if (content.includes('images: ["/images/')) {
    content = content.replace(/images: \["\/images\//g, 'images: ["./images/');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ 已修复`);
    return true;
  }
  
  return false;
}

// 主函数
function main() {
  const srcDir = path.join(__dirname, 'app', 'src');
  
  // 查找所有TypeScript和JSX文件
  const files = [];
  
  function findFiles(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        findFiles(itemPath);
      } else if (/\.(tsx|ts|jsx|js)$/.test(item)) {
        files.push(itemPath);
      }
    }
  }
  
  findFiles(srcDir);
  
  console.log(`找到 ${files.length} 个文件需要检查`);
  
  let fixedCount = 0;
  for (const file of files) {
    try {
      if (fixFile(file)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`处理文件 ${file} 时出错:`, error.message);
    }
  }
  
  console.log(`\n修复完成！`);
  console.log(`处理了 ${files.length} 个文件，修复了 ${fixedCount} 个文件`);
  console.log(`\n接下来需要：`);
  console.log(`1. 运行 'cd app && npm run build' 测试构建`);
  console.log(`2. 检查构建输出中的图片路径是否正确`);
  console.log(`3. 提交更改并推送到GitHub`);
}

// 执行
main();