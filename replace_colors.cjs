const fs = require('fs');
const path = require('path');

function replaceColorsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace colors
  content = content.replace(/purple-/g, "blue-");
  content = content.replace(/fuchsia-/g, "indigo-");

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated colors in ${filePath}`);
  }
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
files.forEach(replaceColorsInFile);
console.log('Done replacing colors.');
