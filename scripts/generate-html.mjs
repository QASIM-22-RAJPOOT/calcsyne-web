import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const siteUrl = 'https://example.com';
const brand = 'CalcSyne';
const pages = [
  ['', 'CalcSyne - Free Online Calculators for Everyday Math', 'Free online calculators for percentages, age, BMI, loans, grades, dates, discounts, unit conversions and more. Simple, fast and mobile friendly.'],
  ['calculators', 'Free Online Calculators - CalcSyne', 'Browse free online calculators for math, finance, education, health, dates, money and unit conversions.'],
  ['about', 'About CalcSyne - Free Calculator Hub', 'Learn about CalcSyne, our approach to clear online calculators, transparent formulas and useful everyday calculation tools.'],
  ['contact', 'Contact CalcSyne', 'Contact CalcSyne with calculator feedback, corrections, partnership questions or suggestions for new tools.'],
  ['privacy', 'Privacy Policy - CalcSyne', 'Read the CalcSyne privacy policy, including information about calculator inputs, advertising, analytics and third-party services.'],
  ['terms', 'Terms of Use - CalcSyne', 'Read the terms of use for CalcSyne calculators and informational content.'],
  ['disclaimer', 'Disclaimer - CalcSyne', 'Important limitations and disclaimers for CalcSyne financial, health, academic and general-purpose calculator results.']
];
const calcs = [
  ['percentage','Percentage Calculator - Calculate Percentages Instantly','Free percentage calculator for percentage of a number, percent change, and what percent one value is of another. Fast and easy to use.'],
  ['age','Age Calculator - Exact Age in Years, Months & Days','Calculate exact age from date of birth in years, months and days. Free online age calculator with a clear calendar breakdown.'],
  ['bmi','BMI Calculator - Body Mass Index Calculator','Free BMI calculator using metric or imperial units. Estimate body mass index and view the standard adult BMI category range.'],
  ['discount','Discount Calculator - Sale Price & Savings','Calculate discount price, savings amount and final sale price. Enter the original price and discount percentage for an instant result.'],
  ['loan','Loan EMI Calculator - Monthly Payment & Interest','Estimate monthly loan or EMI payments, total repayment and total interest using principal, annual rate and loan term.'],
  ['compound-interest','Compound Interest Calculator - Investment Growth','Calculate compound interest and projected investment growth with starting balance, regular contributions, interest rate and time.'],
  ['gpa','GPA Calculator - Calculate Grade Point Average','Free GPA calculator for weighted course grades and credit hours. Add courses, select grades and calculate your grade point average.'],
  ['grade','Grade Calculator - Weighted Course Grade','Calculate a weighted course grade from assignment scores and weights. Add assessments and see your current percentage instantly.'],
  ['date-difference','Date Difference Calculator - Days Between Dates','Calculate the difference between two dates in years, months, days and total days. Free date duration calculator.'],
  ['tip','Tip Calculator - Split Bill & Tip Per Person','Calculate a restaurant tip, total bill and per-person amount. Enter bill total, tip percentage and number of people.'],
  ['unit-converter','Unit Converter - Length, Weight, Temperature & Area','Free unit converter for length, weight, temperature and area. Convert common metric and imperial units instantly.'],
  ['scientific','Scientific Calculator - Trig, Logs, Powers & More','Free online scientific calculator with trigonometric functions, logarithms, square root, powers, pi and common operations.']
];
for (const [slug,title,desc] of calcs) pages.push([`calculators/${slug}`,title,desc]);

const escape = (s)=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
function html(slug,title,desc){
  const url = `${siteUrl}/${slug ? `${slug}/` : ''}`;
  const websiteSchema = slug === '' ? `\n<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:brand,url:siteUrl+'/'})}</script>` : '';
  return `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>${escape(title)}</title>\n<meta name="description" content="${escape(desc)}" />\n<meta name="robots" content="index,follow,max-image-preview:large" />\n<link rel="canonical" href="${url}" />\n<link rel="icon" href="/favicon.svg" type="image/svg+xml" />\n<link rel="manifest" href="/manifest.webmanifest" />\n<meta name="theme-color" content="#16a34a" />\n<meta property="og:type" content="website" />\n<meta property="og:site_name" content="${brand}" />\n<meta property="og:title" content="${escape(title)}" />\n<meta property="og:description" content="${escape(desc)}" />\n<meta property="og:url" content="${url}" />\n<meta property="og:image" content="${siteUrl}/og-cover.png" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:title" content="${escape(title)}" />\n<meta name="twitter:description" content="${escape(desc)}" />\n<meta name="twitter:image" content="${siteUrl}/og-cover.png" />${websiteSchema}\n</head>\n<body>\n<div id="root"></div>\n<script type="module" src="/src/main.jsx"></script>\n</body>\n</html>\n`;
}

for (const [slug,title,desc] of pages) {
  const dir = slug ? path.join(root, slug) : root;
  fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,'index.html'), html(slug,title,desc));
}
fs.writeFileSync(path.join(root,'404.html'), html('404','Page Not Found - CalcSyne','The page you requested could not be found. Browse CalcSyne free online calculators instead.').replace('index,follow','noindex,follow'));
