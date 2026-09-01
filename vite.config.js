import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const pages = [
  'index.html',
  'calculators/index.html',
  'calculators/percentage/index.html',
  'calculators/age/index.html',
  'calculators/bmi/index.html',
  'calculators/discount/index.html',
  'calculators/loan/index.html',
  'calculators/compound-interest/index.html',
  'calculators/gpa/index.html',
  'calculators/grade/index.html',
  'calculators/date-difference/index.html',
  'calculators/tip/index.html',
  'calculators/unit-converter/index.html',
  'calculators/scientific/index.html',
  'about/index.html',
  'contact/index.html',
  'privacy/index.html',
  'terms/index.html',
  'disclaimer/index.html',
  '404.html'
];

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page.replace(/[^a-z0-9]/gi, '_'), resolve(__dirname, page)])
      )
    }
  }
});
