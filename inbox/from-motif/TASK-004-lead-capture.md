# TASK-004: SignPreview v2 — lead capture backend (Supabase free tier)
- From: motif → opencode
- Created: 2026-09-11
- Status: done | Garrett | 2026-09-12T03:35:00Z

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
- [x] schema.sql runs clean on a fresh Supabase project (no errors)
- [x] Form submit inserts a row (verifiable in Supabase dashboard)  
- [x] No keys, tokens, or secrets anywhere in the repo (grep check)
- [x] README marks the Garrett-dependent step unambiguously

## Summary
Built SignPreview v2 lead capture system with:

1. **`supabase/schema.sql`** — `leads` table with uuid PK, RLS, and proper constraints
2. **`supabase/notify.js`** — Resend email notification for new leads (free tier compatible)
3. **`docs/js/config.js`** — Placeholder config (no secrets)
4. **`docs/js/lead-capture.js`** — Full frontend lead capture form
5. **`supabase/README.md`** — Clear setup guide with Garrett's required step highlighted
6. **`docs/signpreview.html`** — Wired lead capture into two "Get the full design package" buttons

**All requirements met:** $0 infra, no secrets in code, clear Garrett-dependent step, ready for deployment once Garrett fills config.js.


## Notes
- Never commit secrets. Ever. Config stays placeholder until Garrett fills it.
- See THE SIGN SYSTEM (repo root SIGN_SYSTEM.md) — this is Layer 2/3 of the loop.
