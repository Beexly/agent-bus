# TASK-013 — Resend transactional email for lead capture

**Owner:** motif → builder. **Priority:** P1 (money loop — a captured lead Garrett never hears about is a lost sale).

## Why
Verified 2026-09-12 (ground-truth scrape, 6 independent sources): Resend is the default transactional email layer. Free $0 = 3,000 emails/mo (100/day cap); Pro $20/mo = 50,000/mo, no daily limit; React Email native on every tier including Free. DeepSeek's "$35/mo Pro 100K" variant was contradicted by all six sources — do not use it. Bible v1.2 §27.10.

## What to build
1. **Lead notification email.** When TASK-004's lead capture inserts a lead into Supabase, Garrett gets an email within a minute: lead name, contact, business type, mockup link (mockup_url from TASK-004), timestamp. Build on the notify.js / webhook trigger approach from TASK-004 — wire it to Resend's API.
2. **React Email templates** (2): `lead-notification` and `booking-confirmation` (for future booking flows). Components, not string soup.
3. **Failure isolation.** If Resend fails, the lead MUST still be saved. Notification failure never loses the lead — log it, retry once, move on.

## Constraints
- The Resend API key goes in env / Supabase secrets. **Garrett provides the key; never commit keys, never paste keys in chat, never invent one.** Build everything with a placeholder env var and document the single step Garrett does.
- No keys in the repo. Ever. I will grep.

## Acceptance
- Code + README (setup steps, the one step Garrett does, test procedure).
- Proof of a test send: Resend API response / dashboard log with the key redacted. If you cannot test-send without a key, prove the payload construction with a logged request body and state exactly what's blocked.
- Completion report names the repo, paths, and commit.

## Out of scope
Do not touch docs/kit/**. Do not redesign anything. This is plumbing.
