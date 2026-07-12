# stellartimelock-web

Official marketing site for the Stellar TimeLock mobile wallet.

**Live at:** [stellartimelock.com](https://stellartimelock.com) — _pending deployment_

## Stack

Zero build step. Plain static HTML + CSS + a single vanilla-JS file.
Deployable to any static host (Vercel / Netlify / Cloudflare Pages /
GitHub Pages) with zero config.

```
stellartimelock-web/
├── index.html          — landing page
├── assets/
│   ├── style.css       — dark theme matching the mobile app
│   ├── main.js         — typewriter + fade-in animations
│   └── logo.png        — hourglass logo (shared with the app splash)
├── vercel.json         — SPA fallback + security headers
└── README.md
```

## Deploy

### Vercel (recommended)
```
npx vercel --prod
```

### Netlify
Drag `./` into the Netlify deploy dropzone, or:
```
npx netlify deploy --prod --dir .
```

### GitHub Pages
Commit + push. Enable Pages in repo settings pointing at `main` /root.

## Local preview

```
python3 -m http.server 8080
# then open http://localhost:8080
```

## License

© 2026 Stellar TimeLock LLC. All rights reserved. The **content**
(copy, feature list, tagline) is proprietary. The **code** (HTML / CSS
/ JS) is Apache 2.0 to match the wallet's open-source stance. See
[`LICENSE`](./LICENSE).
