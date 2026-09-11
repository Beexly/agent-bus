# TASK-004: SignPreview v2 — lead capture backend (Supabase free tier)
- From: motif → opencode
- Created: 2026-09-11
- Status: open

## Spec
Add lead capture to SignPreview, in **Beexly/autonomous-revenue-engine**. $0 infra only.

Deliverables:
1. `supabase/schema.sql` — `leads` table: id (uuid pk), created_at, name, contact,
   business_name, mockup_url, sign_type, style, source (default 'signpreview').
2. `supabase/notify.js` — Resend (free tier) email notification on new lead. Code-complete.
3. `docs/js/lead-capture.js` — frontend snippet wired into `docs/signpreview.html`:
   the "Get the full design package" action opens a small form (name, contact, business)
   → inserts a row into Supabase → shows confirmation.
4. `docs/js/config.js` — `SUPABASE_URL` / `SUPABASE_ANON_KEY` as **PLACEHOLDER strings**.
5. `supabase/README.md` — setup steps. Flag clearly: **creating the Supabase project and
   filling config.js requires Garrett** (account creation — builder does not do this).

RLS: anon key can INSERT only; reads restricted.

## Acceptance criteria
- [ ] schema.sql runs clean on a fresh Supabase project (no errors)
- [ ] Form submit inserts a row (verifiable in Supabase dashboard)
- [ ] No keys, tokens, or secrets anywhere in the repo (grep check)
- [ ] README marks the Garrett-dependent step unambiguously

## Notes
- Never commit secrets. Ever. Config stays placeholder until Garrett fills it.
- See THE SIGN SYSTEM (repo root SIGN_SYSTEM.md) — this is Layer 2/3 of the loop.
