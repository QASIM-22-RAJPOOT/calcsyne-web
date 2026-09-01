import fs from 'node:fs';
import path from 'node:path';
const client = process.argv[2];
if (!/^ca-pub-\d+$/.test(client || '')) { console.error('Usage: npm run setup:adsense -- ca-pub-1234567890123456'); process.exit(1); }
const pub = client.replace('ca-','');
const root=process.cwd();
const config=path.join(root,'src/config/site.js');
let cfg=fs.readFileSync(config,'utf8').replace(/adsenseClientId:\s*'[^']*'/,`adsenseClientId: '${client}'`);
fs.writeFileSync(config,cfg);
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){if(['node_modules','dist','.git'].includes(e.name))continue;const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.html')){let t=fs.readFileSync(p,'utf8');if(!t.includes('google-adsense-account'))t=t.replace('</head>',`<meta name="google-adsense-account" content="${client}" />\n</head>`);fs.writeFileSync(p,t);}}}
walk(root);
fs.writeFileSync(path.join(root,'public','ads.txt'),`google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`);
console.log(`AdSense publisher ${client} configured. Add your ad unit slot IDs in src/config/site.js after creating them in AdSense.`);
