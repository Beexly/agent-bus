# docs/ops/archive/root-museum/CODEX_PICKUP_V2.md
## What it is (1-2 sentences)
A 2026-05-21 handoff describing Claude's codex-pass changes: a new tier-gated Evidence Audit Drawer on every public pick card, an upgraded 2D-canvas interactive galaxy hero, front-end hardening polish, a feature-flagged Neon serverless adapter scaffold, and a triage verdict on 29 user-uploaded reference zips.
## Key metrics/methods (formulas where given, else "not specified")
- Audit drawer: tier-gated endpoint `/api/picks/[id]/audit` — 503 on `canExposePublicPicks=false`, 404 on bootstrap/unpublished picks, SourceSnapshot lookup bounded to `take: 25`, returns hash prefix + byte count only (never raw payload). FREE sees summary (counts + topology), PRO/ELITE sees full chain.
- Galaxy hero: pure 2D canvas, mouse parallax up to ~12px with low-pass easing, 60-160 particles in 3 depth tiers, DPR up to 3x, reduced-motion fallback renders static composition.
- Compliance: 3-layer banned-vocabulary scanner in `apps/web/lib/compliance-scanner/rules.ts` described as "single most critical file" — every AI-output surface is scanned against it.
## Data sources named
Neon Postgres (pg driver; serverless driver scaffold via `@neondatabase/serverless` + `@prisma/adapter-neon`, not yet imported anywhere). SourceSnapshot forensic chain is the evidence backing the audit drawer.
## Findings (numbers and facts, not vibes)
- `uploaded-zip-triage-2026-05-21.md`: of 29 reference zips, most off-domain; 3 flagged as integrity/legal risks (FotMob unauthorized scraping, AGPL code in commercial inbox-zero) — do not extract; 1 flagged as suspected malware (`Stake-All-Games-Predictor-Latest-main.zip` — random PHP filenames, obscured workflow, ASCII-art README only) — delete, do not execute.
- Two integrity-safe items applied (front-end checklist append, Neon serverless docs).
- Front-end hardening: production error pages show Next.js error `digest` correlation id only, never raw message or stack trace.
- Queued next features (not in repo, sketched only): Galaxy IQ Brief (Haiku-generated per-game brief), cmd-K command palette, personalized watchlist.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Tier-gated audit drawer makes forensic evidence (source hashes, signal topology LIVE/SHADOW/ABSENT, pick lineage, line-movement delta, model version) a product feature — transparency as upgrade CTA.
- TRUST-SIGNAL: 3-layer banned-vocabulary compliance scanner + refusal templates locked in template code is the mechanism preventing banned-vocab leaks in AI-generated surfaces.
- OTHER: Provenance principle — SHA-256 prefix + byte count proves payload existence without exposing bytes (intel-leak-safe verifiability).
## Engine-actionable? (yes/no + one-line what)
No — front-end/product handoff; the signal-topology taxonomy (LIVE/SHADOW/ABSENT) is a useful labeling concept but not wired here.
