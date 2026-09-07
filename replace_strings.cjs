const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace names
  content = content.replace(/M\. A\. Razak Master \(MLA\)/g, "M. Liju (MLA)");
  content = content.replace(/M\. A\. Razak Master \(Admin\)/g, "M. Liju (Admin)");
  content = content.replace(/M\. A\. Razak Master MLA/g, "M. Liju MLA");
  content = content.replace(/M\. A\. Razak Master/g, "M. Liju");
  content = content.replace(/Razak Master/g, "M. Liju");

  // Replace domains
  content = content.replace(/@marazak\.local/g, "@mliju.local");
  content = content.replace(/ma-razak-master-office/g, "m-liju-mla-office-system");

  // Replace Tanur
  content = content.replace(/Tanur/g, "Kayamkulam");
  content = content.replace(/TANUR/g, "KAYAMKULAM");

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
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
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
files.forEach(replaceInFile);
console.log('Done replacing strings.');
