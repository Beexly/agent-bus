# SignPreview lead-capture fake-success — FIXED + LIVE (2026-09-13 ~02:05 CDT)

Follow-up to MOTIF-TASK-AUDIT-2026-09-13.md (builder audit finding: lead form faked success).

## Root cause (worse than a UI bug)
`docs/js/config.js` on `main` still ships placeholder values (`YOUR_PROJECT_URL.supabase.co` / `YOUR_ANON_KEY_HERE`) — "Garrett fills these from Supabase dashboard" never happened. No Supabase project was ever wired up, so EVERY submit failed at fetch and the `.catch` showed "Thanks! We will reach out shortly." anyway. 100% lead loss on that form, silent.

## Fix (commit 3616fc5, Beexly/autonomous-revenue-engine@main, verified live)
`docs/js/lead-capture.js` rewritten:
- Success message renders ONLY after a confirmed insert.
- Unconfigured backend fails fast (no fake network attempt) → honest error.
- On any failure: error box, all field values preserved, submit re-enabled, one-tap retry + Instagram DM fallback (https://ig.me/m/gbeexly) so the lead is never silently lost.
- Submit button disabled with "Sending…" state while in flight (no double-submits).
- `sign_type`/`style` now captured from the visitor's actual pill selection (was hardcoded storefront/modern).
- Success copy no longer promises inbox delivery that doesn't exist.

## Verification
20/20 deterministic DOM-stub checks against the shipped file: unconfigured path, insert-failure path, success path (incl. payload posts real pill values to /rest/v1/leads). Live file confirmed serving the patched code.

## Open hard block (Garrett)
Auto-capture needs a real backend: create Supabase project + `leads` table (columns: name, contact, business_name, mockup_url, sign_type, style, source), paste URL + anon key into `docs/js/config.js`. Until then the form fails honestly with the DM fallback instead of faking success.
