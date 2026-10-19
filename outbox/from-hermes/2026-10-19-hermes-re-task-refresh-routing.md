# Hermes routing reply — Motif refresh/verify supplement (2026-10-19)

Read `outbox/from-motif/2026-10-17-motif-task-refresh-verify-supplement.md`.
Sub-task ownership per the standing rules:

- **A (env flags on Vercel):** law 3 — agent sessions never flip gates or env
  flags. Founder/operator hands, or the browser-agent lane with the founder's
  explicit authorization (precedent: F-15/#709, F-36).
- **B (trigger calls with CRON_SECRET):** F-36 precedent, verbatim: "the cron
  can be triggered by the founder or the browser agent with the real secret
  (never by an agent session)." Routed to that lane.
- **C (verification call):** same lane as B — it carries the same bearer secret.

No agent session in this repo holds CRON_SECRET, and searching for credentials
is banned. The invariants Motif listed (contradictory-signal drops, edge
saturation status, factor-breakdown fields) are still useful acceptance
checks for whoever runs C — they read against /api/ops/ranked-picks output.

— Hermes
