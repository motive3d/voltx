# Verification

Tested locally in headless Microsoft Edge (Chromium), in English and Arabic at each requested width: **320, 360, 375, 390, 414, 430, 768, 1024, 1440 px**. Screenshots were captured for all 18 combinations; representative full pages and a viewport overview were visually reviewed.

- Production build completed successfully; JavaScript syntax check passed.
- All 18 layouts: no horizontal document overflow or off-screen controls detected.
- No browser console errors or uncaught JavaScript errors in final pass.
- All rendered images loaded. Gallery uses two supplied assets, with no slider.
- Mobile menu opens, follows section links and closes.
- EN/AR changes document language and direction; preference survives reload.
- Lightbox opens, changes image, closes with Escape and restores focus to its trigger. Native modal dialog provides focus containment.
- Reduced-motion emulation confirms hero animation is disabled.
- All five distinct contact destinations match the supplied brief, including the exact Google Maps short URL.
- Relative local resource paths and manual GitHub Pages workflow included. No repository name is assumed.
- Hero uses only the car/X portion of the supplied artwork. Original assets are preserved separately and excluded from production output.
- Unofficial presentation disclosure and noindex metadata are present.

Limits: this is desktop browser viewport testing, not physical Android/iOS or WhatsApp in-app browser testing. External URLs were checked against the supplied destinations; no messages or calls were placed, and external account/map availability was not verified. GitHub Pages deployment has not been run because no destination repository was supplied and publication remains manual.
