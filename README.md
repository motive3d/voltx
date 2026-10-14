# VOLT X — presentation concept

Unofficial bilingual automotive landing page. No backend, no invented services, no booking database. Contact actions open WhatsApp. `noindex,nofollow` remains enabled.

## Run

Requires Node.js; no npm installation or dependencies needed.

```sh
npm run build
npm run preview
```

Open http://127.0.0.1:4173. You can also open index.html directly.

## GitHub Pages

Upload this project to your chosen repository. The included GitHub Actions workflow builds and deploys `dist`. In repository Settings → Pages, select GitHub Actions. Trigger the workflow manually from Actions. No repository name or domain is hardcoded. All site assets use relative paths. Publication is deliberately manual; this presentation has not been approved as an official business website.

## Files

- `index.html`: semantic content, real contact destinations, gallery.
- `style.css`: mobile composition, desktop layout, RTL, reduced motion.
- `app.js`: local translations, saved preference, menu and native dialog lightbox.
- `assets/`: optimized WebP images; logo and favicon cropped from the supplied original.
- `originals/`: all six supplied assets preserved unchanged for reference; excluded from the deployed build.

The hero crop uses x=940–2048, y=0–590 of the supplied garage artwork, excluding baked-in UI. It is explicitly labeled as concept artwork. Gallery images preserve supplied promotional graphics, including their embedded Arabic text and claims; these are not represented as raw photographs or separate projects. The PPF feature reuses one gallery image as an editorial preview.

English and Arabic UI translations are local. Original artwork and logo lettering remain unchanged in both languages. Fonts use local Inter/Tajawal when available and system Arial fallbacks; no third-party font requests are required. Language preference uses localStorage when available and still works in restricted browsers without persistence.

External contact links match the supplied brief. No location, hours, prices, warranties, product brands, partnerships, reviews or performance claims have been added.
