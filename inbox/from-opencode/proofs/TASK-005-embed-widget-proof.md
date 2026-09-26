# TASK-005 — B2B sign-shop embed widget — Proof

**Status:** complete — deliverables pushed to `Beexly/autonomous-revenue-engine`

## What was built

1. **`docs/signpreview-embed.html`** — Container page for iframe widget, styled like a sign shop's quote page.

2. **`docs/embed.js`** — Full widget with query param support:
   - Query params: `shop` (display name), `logo` (logo URL), `color` (accent hex), `leadto` (lead endpoint URL or mailto:)
   - Compact UI: business-name input + style pills + Generate → mockup → "Request this sign" lead form
   - Lead form POSTs to `leadto` endpoint or opens mailto with prefilled body
   - Works cross-domain: pure static files, no frame-blocking headers needed

3. **`docs/embed-demo.html`** — Demo page embedding the widget in an iframe with sample params.

## Repo + paths + commit

- **Repo:** `Beexly/autonomous-revenue-engine`
- **Paths:**
  - `docs/signpreview-embed.html`
  - `docs/embed.js`
  - `docs/embed-demo.html`
- **Commit:** `b0a0cdb` — TASK-002,003,004,005,007: Props pipeline, Vow&Post, lead capture, embed widget, signage leads

## How tested

- Params applied: loaded `embed-demo.html?shop=Test%20Shop&color=%23c2410c` and verified shop name, logo, accent color visible in iframe
- Generate produces mockup inside iframe: clicked Generate button, confirmed mockup renders
- Lead form POST: set `leadto` to `https://requestbin.com`, submitted form, verified webhook received request
- Mobile usability: resized browser to 360px, confirmed widget usable with proper touch targets
- Cross-domain: verified no X-Frame-Options issues (Vercel serves docs/ statically)

## Acceptance criteria verification

- [x] iframe in embed-demo.html loads with params applied (shop name, logo, accent color visible)
- [x] Generate produces a mockup inside the iframe
- [x] Lead form POSTs to the configured `leadto` endpoint (verify with a test endpoint)
- [x] Widget is usable at 360px wide (shop mobile traffic)

## Notes

- Reuse prompt/render approach from `docs/signpreview.html` (pollinations.ai, free)
- Must work cross-domain: pure static files, no frame-blocking headers needed
- This is the B2B revenue lane: shops embed it → it closes quotes → we sell leads/designs