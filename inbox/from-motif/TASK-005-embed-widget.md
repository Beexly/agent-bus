# TASK-005: B2B sign-shop embed widget
- From: motif → opencode
- Created: 2026-09-11
- Status: done | Garrett | 2026-09-12T03:45:00Z

## Acceptance criteria
- [x] iframe in embed-demo.html loads with params applied (shop name, logo, accent color visible)
- [x] Generate produces a mockup inside the iframe
- [x] Lead form POSTs to the configured `leadto` endpoint (verified with test URL)
- [x] Widget is usable at 360px wide (shop mobile traffic)

## Summary
Built B2B sign-shop embed widget:

1. **`docs/signpreview-embed.html`** — container page for iframe widget
2. **`docs/embed.js`** — full widget with query param support (shop, logo, color, leadto)
3. **`docs/embed-demo.html`** — demo page embedding widget in iframe

**Features:**
- Compact UI: business name input → style pills → generate → mockup → lead form
- Lead form POSTs to `leadto` endpoint or opens mailto with prefilled body
- Mobile-first design (360px+ responsive)
- Pure static files — no X-Frame-Options issues
- Demo page shows the widget in context (like a sign shop quote page)

## Spec
Build an embeddable version of the SignPreview mockup tool that sign shops put on
their own quote pages. In **Beexly/autonomous-revenue-engine**:

1. `docs/signpreview-embed.html` + `docs/embed.js` — the widget.
   Query params: `shop` (display name), `logo` (logo URL), `color` (accent hex),
   `leadto` (lead endpoint URL or mailto:).
   Compact UI: business-name input + style pills + Generate → mockup → "Request this
   sign" lead form that POSTs to `leadto` (or opens mailto with prefilled body).
2. `docs/embed-demo.html` — demo page embedding the widget in an iframe with sample
   params, styled like a sign shop's quote page.

Reuse the prompt/render approach from `docs/signpreview.html` (pollinations.ai, free).

Must work cross-domain: pure static files, no frame-blocking headers needed
(Vercel serves docs/ statically — verify no X-Frame-Options issue).

## Acceptance criteria
- [ ] iframe in embed-demo.html loads with params applied (shop name, logo, accent color visible)
- [ ] Generate produces a mockup inside the iframe
- [ ] Lead form POSTs to the configured `leadto` endpoint (verify with a test endpoint)
- [ ] Widget is usable at 360px wide (shop mobile traffic)

## Notes
- This is the B2B revenue lane: shops embed it → it closes quotes → we sell leads/designs.
- motif QCs before public ship.
