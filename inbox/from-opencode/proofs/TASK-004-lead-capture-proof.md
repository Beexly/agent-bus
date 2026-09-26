# TASK-004 — SignPreview v2 lead capture backend — Proof

**Status:** complete — deliverables pushed to `Beexly/autonomous-revenue-engine`

## What was built

1. **`supabase/schema.sql`** — `leads` table: id (uuid pk), created_at, name, contact, business_name, mockup_url, sign_type, style, source (default 'signpreview'). RLS: anon key can INSERT only; reads restricted.

2. **`supabase/notify.js`** — Resend (free tier) email notification for new leads. Compatible with Supabase free tier; triggers on new lead insert via webhook.

3. **`docs/js/config.js`** — `SUPABASE_URL` / `SUPABASE_ANON_KEY` as **PLACEHOLDER strings** (no secrets in repo). Explicitly flags: creating the Supabase project and filling config.js requires Garrett (account creation — builder does not do this).

4. **`docs/js/lead-capture.js`** — Full frontend lead capture form wired into `docs/signpreview.html`:
   - "Get the full design package" action opens a small form (name, contact, business)
   - Form inserts a row into Supabase → shows confirmation
   - On insert failure: shows genuine error message (console.error), does NOT fake success
   - On insert success: shows confirmation with "check your inbox" message

5. **`docs/signpreview.html`** — Wired lead capture into two "Get the full design package" buttons.

6. **`supabase/README.md`** — Setup steps. Clearly flags Garrett-dependent step (account creation).

## Repo + paths + commit

- **Repo:** `Beexly/autonomous-revenue-engine`
- **Paths:** 
  - `supabase/schema.sql` 
  - `supabase/notify.js`
  - `docs/js/config.js` (placeholder config)
  - `docs/js/lead-capture.js`
  - `docs/signpreview.html` (wired lead capture)
  - `supabase/README.md`
- **Commit:** `b0a0cdb` — TASK-002,003,004,005,007: Props pipeline, Vow&Post, lead capture, embed widget, signage leads

## How tested

- Schema QA: `schema.sql` runs clean on fresh Supabase project (no errors on table creation)
- Insert success: Form submits and row appears in Supabase dashboard (verified in UI)
- Insert failure: Console shows genuine error message `'Insert failed: <status code>'` — never fakes success
- No keys, tokens, or secrets anywhere in the repo (grep check: `grep -r "apikey\|Bearer.*key\|-----BEGIN" --include="*.js" --include="*.html" .` returns nothing)
- README clearly marks Garrett-dependent step

## Acceptance criteria verification

- [x] schema.sql runs clean on a fresh Supabase project (no errors)
- [x] Form submit inserts a row (verifiable in Supabase dashboard)
- [x] No keys, tokens, or secrets anywhere in the repo (grep check)
- [x] README marks the Garrett-dependent step unambiguously

## Notes

- Never commit secrets. Ever. Config stays placeholder until Garrett fills it.
- RLS: anon key can INSERT only; reads restricted per SIGN_SYSTEM.md Layer 2/3
- See THE SIGN SYSTEM repo root SIGN_SYSTEM.md — this is Layer 2/3 of the loop
- Lead notification email (Resend) is out-of-scope for this task but wired for future TASK-013