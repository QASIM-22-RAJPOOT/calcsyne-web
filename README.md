# CalcSyne — Vite + React Calculator Hub

A frontend-only, responsive calculator website starter designed for SEO, speed, useful content, and future ad monetization.

## Included

- Vite + React
- Multi-page HTML architecture for stronger crawlability than a single generic SPA entry
- 12 working calculators:
  - Percentage
  - Age
  - BMI
  - Discount
  - Loan / EMI
  - Compound Interest
  - GPA
  - Grade
  - Date Difference
  - Tip
  - Unit Converter
  - Scientific Calculator
- Unique title, meta description, canonical URL, Open Graph and Twitter metadata per page
- XML sitemap and robots.txt
- WebSite, WebApplication and breadcrumb structured data
- About, Contact, Privacy Policy, Terms of Use and Disclaimer pages
- Responsive mobile/desktop UI
- Search and category filtering
- AdSense-ready ad placeholder component
- `ads.txt` setup helper
- No custom backend or database required

## Start locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## REQUIRED before publishing

### 1. Replace the placeholder domain

Run:

```bash
npm run set-domain -- https://your-real-domain.com
```

This replaces `https://example.com` in page metadata, sitemap, robots.txt, and site config.

### 2. Replace the placeholder email

Edit:

`src/config/site.js`

Change `hello@yourdomain.com` to your real contact email.

### 3. Configure AdSense only when you have your publisher ID

Run:

```bash
npm run setup:adsense -- ca-pub-1234567890123456
```

This:

- Adds the AdSense account meta tag to HTML pages.
- Sets the client ID in `src/config/site.js`.
- Creates `public/ads.txt` using your publisher ID.

After creating actual ad units in AdSense, add their slot IDs in:

`src/config/site.js`

```js
adsenseSlots: {
  leaderboard: 'YOUR_SLOT_ID',
  rectangle: 'YOUR_SLOT_ID',
  inArticle: 'YOUR_SLOT_ID'
}
```

Until IDs are configured, the site shows clean ad placeholders instead of requesting ads.

## Consent / privacy before AdSense launch

If you serve ads to users in the EEA, UK, or Switzerland, configure an appropriate Google-certified consent management platform (CMP) for the AdSense setup and make sure your Privacy Policy accurately describes the services you enable. The starter intentionally does not fake a consent implementation because the correct production setup depends on your real ad/analytics configuration and target regions.

## SEO notes

This project uses separate HTML entry points for indexable pages rather than sending every URL through one blank SPA shell. Each page has its own descriptive metadata and crawlable navigation. Calculator pages also contain explanatory text, formulas, examples, FAQs, and related internal links so the page is more than just an input form.

After deployment:

1. Verify your domain in Google Search Console.
2. Submit `/sitemap.xml`.
3. Inspect important calculator URLs.
4. Keep adding genuinely useful calculators and original explanatory content.
5. Monitor Core Web Vitals and crawl/indexing issues.

SEO ranking and AdSense approval are not guaranteed. Both depend on site quality, originality, policy compliance, competition, traffic, and Google review.

## Hosting

Because the project is static after `npm run build`, it can be hosted on services such as Netlify, Vercel, Cloudflare Pages, Firebase Hosting, or standard static web hosting.

## CalcSyne brand

The project is already branded as **CalcSyne** with a green responsive UI, matching favicon and Open Graph cover. See `MONETIZATION_SETUP.md` for the ad placement and launch checklist.

