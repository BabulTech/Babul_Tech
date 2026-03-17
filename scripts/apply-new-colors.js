const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const dir = path.join(__dirname, '..', dirPath);
  try {
    const files = fs.readdirSync(dir);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function(file) {
      if (fs.statSync(dir + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
      } else {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          arrayOfFiles.push(path.join(dir, file));
        }
      }
    });
  } catch(e) {}
  return arrayOfFiles;
}

const files = getAllFiles('src');

const replacements = [
  // Backgrounds / Deep Space Navy -> Navy (#0F172A)
  { regex: /bg-\[#0A1128\]/g, replacement: 'bg-background' },
  { regex: /text-\[#0A1128\]/g, replacement: 'text-background' },
  { regex: /border-\[#0A1128\]/g, replacement: 'border-background' },
  { regex: /from-\[#0A1128\]/g, replacement: 'from-background' },
  { regex: /via-\[#0A1128\]/g, replacement: 'via-background' },
  { regex: /to-\[#0A1128\]/g, replacement: 'to-background' },
  { regex: /#0A1128/g, replacement: 'var(--background)' },
  
  // Focus CTAs / Primary (#10B981)
  { regex: /bg-\[#2962FF\]/g, replacement: 'bg-primary' },
  { regex: /text-\[#2962FF\]/g, replacement: 'text-primary' },
  { regex: /border-\[#2962FF\]/g, replacement: 'border-primary' },
  { regex: /from-\[#2962FF\]/g, replacement: 'from-primary' },
  { regex: /via-\[#2962FF\]/g, replacement: 'via-primary' },
  { regex: /to-\[#2962FF\]/g, replacement: 'to-primary' },
  { regex: /#2962FF/g, replacement: 'var(--primary)' },

  { regex: /bg-\[#00E5FF\]/g, replacement: 'bg-primary' },
  { regex: /text-\[#00E5FF\]/g, replacement: 'text-primary' },
  { regex: /border-\[#00E5FF\]/g, replacement: 'border-primary' },
  { regex: /from-\[#00E5FF\]/g, replacement: 'from-primary' },
  { regex: /via-\[#00E5FF\]/g, replacement: 'via-primary' },
  { regex: /to-\[#00E5FF\]/g, replacement: 'to-primary' },
  { regex: /#00E5FF/g, replacement: 'var(--primary)' },
  
  // Tailwind custom classes mapping
  { regex: /text-babul-cyan/g, replacement: 'text-primary' },
  { regex: /bg-babul-cyan/g, replacement: 'bg-primary' },
  { regex: /border-babul-cyan/g, replacement: 'border-primary' },
  { regex: /text-babul-indigo/g, replacement: 'text-primary' },
  { regex: /bg-babul-indigo/g, replacement: 'bg-primary' },
  { regex: /border-babul-indigo/g, replacement: 'border-primary' },
  { regex: /bg-babul-blue/g, replacement: 'bg-background' },
  { regex: /text-babul-blue/g, replacement: 'text-background' },
  
  // Secondary text -> Body (#94A3B8)
  { regex: /text-gray-300/g, replacement: 'text-body' },
  { regex: /text-gray-400/g, replacement: 'text-body' },
  { regex: /text-gray-500/g, replacement: 'text-body' },
  { regex: /text-white\/70/g, replacement: 'text-body' },
  { regex: /text-white\/80/g, replacement: 'text-body' },
  
  // Primary Text -> Foreground (#F8FAFC)
  { regex: /text-white/g, replacement: 'text-foreground' },
  { regex: /text-\[#FFFFFF\]/g, replacement: 'text-foreground' },
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  replacements.forEach(r => {
    content = content.replace(r.regex, r.replacement);
  });
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
