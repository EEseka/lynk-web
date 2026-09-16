# Lynk Web

Stop arguing in the group chat. Just Lynk.

The website for Lynk: the landing page, Terms of Service and Privacy Policy. Built with **Astro** and **Tailwind CSS** as a
fully static site, served by Cloudflare Workers.

**Live:** https://lynk.com.ng · **Client:** [Lynk (KMP)](https://github.com/EEseka/Lynk) · **Backend:** [Lynk API](https://github.com/EEseka/lynk-api)

---

## Pages

|              |                                                                                                   |
|--------------|---------------------------------------------------------------------------------------------------|
| **/**        | Landing page with live demos of voting, the group centre point and bill splitting                 |
| **/terms**   | Terms of Service, written in Markdown                                                             |
| **/privacy** | Privacy Policy, written in Markdown and grounded in what the app and API actually store           |
| **/credits** | Credits for the spot photos, which come from Wikimedia Commons                                    |
| **404**      | Custom not-found page                                                                             |

## Stack

|               |                                                                                      |
|---------------|--------------------------------------------------------------------------------------|
| **Framework** | Astro 7, static output, no client framework                                          |
| **Styling**   | Tailwind CSS 4, with colour, type and shape tokens taken from the app's design system |
| **Icons**     | Lucide, the same set the app uses                                                    |
| **Fonts**     | Space Grotesk, Plus Jakarta Sans and JetBrains Mono, self-hosted                     |
| **Hosting**   | Cloudflare Workers static assets, deployed on every push to `main`                   |

## Running locally

```sh
npm install
npm run dev              # http://localhost:4321
npm run dev -- --host    # also reachable from a phone on the same network
npm run build            # outputs to dist/
npm run preview          # serves the build
```

## Project structure

```text
src/
├── pages/          index.astro, terms.md, privacy.md, credits.astro, 404.astro
├── layouts/        BaseLayout (head, header, footer), LegalLayout (terms and privacy)
├── components/     landing page sections
│   ├── app/        copies of the app's Compose components used in the mockups
│   └── features/   voting, centre point, bill split and spot demos
├── scripts/        timeline.ts, which steps the looping demos
├── styles/         global.css (design tokens), app-ui.css (app component styles)
├── assets/spots/   spot photos
├── data/           demo people and spots, with photo credits
└── site.ts         APK, store and support links
```

## Spot photos

The spots shown on the landing page are real places in Lagos. Their photos come from Wikimedia Commons under Creative
Commons licences. A new photo needs its file name, author and licence added to `src/data/spots.ts`, which also feeds
the `/credits` page.

## Releases

The Download APK button links to `https://github.com/EEseka/Lynk/releases/latest/download/lynk.apk`, so each client
release must attach its APK as `lynk.apk`. The App Store and Google Play buttons show as "Coming soon" until their URLs
are set in `src/site.ts`.

## License

All rights reserved. The code is public to read, but not licensed for use. The spot photos keep their own Creative
Commons licences. See [LICENSE](LICENSE).
