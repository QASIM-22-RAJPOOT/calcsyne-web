import fs from 'node:fs';
import path from 'node:path';

const raw = process.argv[2];
if (!raw) { console.error('Usage: npm run set-domain -- https://yourdomain.com'); process.exit(1); }
const next = raw.replace(/\/$/,'');
if (!/^https?:\/\//.test(next)) { console.error('Domain must start with https:// or http://'); process.exit(1); }
const root = process.cwd();
const targets = [];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){if(['node_modules','dist','.git'].includes(entry.name))continue;const p=path.join(dir,entry.name);if(entry.isDirectory())walk(p);else if(/\.(html|xml|txt|js)$/.test(entry.name))targets.push(p)}}
walk(root);
for(const file of targets){const text=fs.readFileSync(file,'utf8');if(text.includes('https://example.com'))fs.writeFileSync(file,text.replaceAll('https://example.com',next));}
console.log(`Updated site URL to ${next} in ${targets.length} files checked.`);
