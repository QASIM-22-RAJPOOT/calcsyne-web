# CalcSyne Monetization Setup

The project contains deliberately limited ad positions so ads do not dominate the calculator experience.

## Ad positions

1. **Homepage leaderboard** — after the first calculator grid.
2. **Calculator inline ad** — directly below the calculator panel, before educational content.
3. **Calculator sidebar rectangle** — visible beside the tool on larger screens; moves into the normal content flow on smaller screens.
4. **Calculator library leaderboard** — after the complete calculator list.

All placements use `src/components/AdSlot.jsx`.

## Before AdSense approval

Keep `adsenseClientId` and slot IDs empty in `src/config/site.js`. The UI displays a quiet placeholder while you develop the site and does not make AdSense requests.

## After getting an AdSense publisher ID

Run:

```bash
npm run setup:adsense -- ca-pub-YOUR_PUBLISHER_ID
```

Then create ad units in AdSense and enter their slot IDs in:

`src/config/site.js`

```js
adsenseSlots: {
  leaderboard: 'YOUR_SLOT_ID',
  rectangle: 'YOUR_SLOT_ID',
  inArticle: 'YOUR_SLOT_ID'
}
```

## Important launch tasks

- Replace `https://example.com` with the real domain using `npm run set-domain -- https://yourdomain.com`.
- Replace `hello@yourdomain.com` with a real support email.
- Review Privacy Policy, Terms and Disclaimer against the actual services enabled on the live site.
- Configure any consent/CMP requirements that apply to your audience and ad setup.
- Verify the live domain in Google Search Console and submit `/sitemap.xml`.

Ad network approval and revenue are not guaranteed; they depend on policy compliance, useful original content, traffic, geography and advertiser demand.
