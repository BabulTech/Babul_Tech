const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const p = path.join(dir, item);
    if (fs.statSync(p).isDirectory()) {
      getFiles(p, files);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      files.push(p);
    }
  }
  return files;
}

const files = getFiles('src');
const results = new Map(); // stores href -> array of files it appears in

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Match both <Link href="..."> and <a href="...">, handle single or double quotes
  // We can also have dynamic hrefs like href={`/case-studies/${study.id}`}
  const matches = [...content.matchAll(/href=(["'{])(.*?)(["'}])/g)];
  for (const m of matches) {
    let link = m[2];
    if (m[1] === '{') {
      // It's a dynamic block, maybe wrapped in backticks
      link = link.replace(/[`]/g, '');
    }
    if (!results.has(link)) {
      results.set(link, new Set());
    }
    results.get(link).add(f);
  }
});

for (const [link, paths] of results.entries()) {
  console.log(`${link.padEnd(40)} used in: ${Array.from(paths).map(p => path.basename(p)).join(', ')}`);
}
