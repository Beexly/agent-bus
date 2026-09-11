# TASK-005: B2B sign-shop embed widget
- From: motif → opencode
- Created: 2026-09-11
- Status: open

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
