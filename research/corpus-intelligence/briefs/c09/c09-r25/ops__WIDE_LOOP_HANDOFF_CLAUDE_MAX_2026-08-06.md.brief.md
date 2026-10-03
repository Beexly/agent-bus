# ops/WIDE_LOOP_HANDOFF_CLAUDE_MAX_2026-08-06.md
## What it is (1-2 sentences)
Paste-in handoff (2026-08-06) for an autonomous Claude Max Pro session: wide-loop operating mode (multiple domains per session, one PR per gap ≤5 files), law table, live baseline to re-verify, a 15-domain probe/fix checklist (A–O), a 8-item queue for that block, and fences/success criteria.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (ops coordination doc). Success bars: ≥5 domains evidence-touched; gate honesty verified live post-deploy; settle auth 200 or documented blocker; Jynx/cost env status written; one founder action max.
## Data sources named
None external. Live surfaces probed: health, ops public-surface-truth, sitemap, board, contests, picks API (401 unauth), cron endpoints, trust-gate script.
## Findings (numbers and facts, not vibes)
- Live baseline (to re-verify, evidence expires): overdue 0 HEALTHY; cron unauth 401; ops `isBootstrapMode:false`; `/api/picks` previously lied `bootstrapMode:true` (fixed on branch/post-deploy); `/stats` 404 dark; prod SHA may lag main.
- Domain checklist A–O covers: deploy/SHA lag, settlement, gate honesty, board/picks pages, contests, waitlist/newsletter, StatKing 404, sitemap/robots, proof receipts (settled-only doctrine), cockpit cry-wolf guard, Jynx cost stack, ingestion freshness, CLV public gating, trust-gate, stale PR hygiene (close obsolete #265/#266).
- Fences: no LIVE_BOARD flip, no StatKing, no Odds re-buy, no grapher, no sheaf.
- Queue items include: Neon Chiefs row — bookmakerCount + dataFreshnessAt (T-1 close); T-3 packet; Jynx env status.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: agent coordination doc, not football intelligence.
## Engine-actionable? (yes/no + one-line what)
No — agent operations handoff; no model content.
