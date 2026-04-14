const fs = require('fs');
const path = require('path');

// 修复图片路径的脚本
console.log('开始修复图片路径...');

// 递归查找所有文件
function findFiles(dir, pattern) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(findFiles(filePath, pattern));
    } else if (pattern.test(file)) {
      results.push(filePath);
    }
  }
  
  return results;
}

// 修复文件中的图片路径
function fixFile(filePath) {
  console.log(`处理文件: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // 修复各种格式的图片路径
  // 1. src="/images/..."
  if (content.includes('src="/images/')) {
    content = content.replace(/src="\/images\//g, 'src={`${import.meta.env.BASE_URL || \'\'}images/');
    modified = true;
  }
  
  // 2. src='/images/...'
  if (content.includes("src='/images/")) {
    content = content.replace(/src='\/images\//g, "src={`${import.meta.env.BASE_URL || ''}images/");
    modified = true;
  }
  
  // 3. image: '/images/...'
  if (content.includes("image: '/images/")) {
    content = content.replace(/image: '\/images\//g, "image: `${import.meta.env.BASE_URL || ''}images/");
    modified = true;
  }
  
  // 4. image: "/images/..."
  if (content.includes('image: "/images/')) {
    content = content.replace(/image: "\/images\//g, 'image: `${import.meta.env.BASE_URL || \'\'}images/');
    modified = true;
  }
  
  // 5. images: ['/images/...']
  if (content.includes("images: ['/images/")) {
    content = content.replace(/images: \['\/images\//g, "images: [`${import.meta.env.BASE_URL || ''}images/");
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ 已修复`);
  }
}

// 主函数
function main() {
  const srcDir = path.join(__dirname, 'app', 'src');
  
  // 查找所有TypeScript和JSX文件
  const files = findFiles(srcDir, /\.(tsx|ts|jsx|js)$/);
  
  console.log(`找到 ${files.length} 个文件需要检查`);
  
  let fixedCount = 0;
  for (const file of files) {
    try {
      fixFile(file);
      fixedCount++;
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