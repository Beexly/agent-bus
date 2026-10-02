# docs/ops/archive/prompts/GROK_AUTONOMOUS_AUDIT_PROMPT.md
## What it is (1-2 sentences)
The 2026-07-10 one-paste autonomous audit prompt for Grok: a 12-shard self-driving security/correctness audit of the whole repo, with context-management rules (one shard at a time, externalize state to repo, self-resume from `GROK_AUDIT_PROGRESS.md`), adversarial self-verification replacing a human grader, per-shard attack scenarios, and absolute honesty/safety rails.
## Key metrics/methods (formulas where given, else "not specified")
- 12 shards processed highest-leverage-first in order: 9 (cockpit), 5 (db), 3 (engine), 4 (public-api), 2 (ingestion), 10 (frontend), 7 (ai-content), 8 (workers-ci), 6 (auth), 11 (types-tests), 12 (underused), 1 (billing).
- Method per shard: hypothesis-first failure prediction → four-minds argument (attacker/author/bettor/operator) → root-cause class hunting → steelman-before-strike → self-distrust → adversarial self-refutation of every finding (unverified findings = noise) → fix + failing-before/passing-after test on `grok/<shard-id>` branch → append ranked findings to `GROK_AUTONOMOUS_AUDIT_REPORT.md` → release context, keep only 3–5 lesson LEARNING LEDGER lines.
- Register: praise tokens banned ("textbook", "excellent", "ironclad", "production-grade", "world-class", bare "robust", "perfectly", "flawless"); every sentence a falsifiable claim with a citation; a "SOLID" verdict without evidence table and traced scenarios is INVALID.
- Honesty rails never weakened: readiness gates, stale-data kill switch, isBootstrap provenance, numeric-grounding guards, brand-honesty CI scanners, scraping clearance engine, server-side paywall, proof receipts/immutable snapshots; TypeScript strict, no `any`; 14 CI guardrail scanners stay green; no CAPTCHA/paywall/IP-block bypass.
## Data sources named
Repo files per shard (billings routes, ingestion pipeline, prediction-engine scoring/calibration/CLV/settlement, public API routes, Prisma schema, auth middleware, content-engine/Journal/Claude API, workers/Docker/CI workflows, cockpit/Jarvis modules, frontend pages/components, types package, underused-asset paths).
## Findings (numbers and facts, not vibes)
1. The prompt's context-overflow fix is structural, not model-scaling: one shard's files at a time, committed to `grok/<shard-id>` branches, findings appended to a running report, then raw file text deliberately dropped — state lives in commits + two repo files so runs are self-resuming (OTHER).
2. Self-adversarial verification replaces the human grader: every finding must survive its own refutation attempt; the 5 weakest "safe" verdicts get re-attacked with new inputs (TRUST-SIGNAL).
3. The anti-sycophancy register (banned praise tokens, falsifiable-claim requirement, short clean reports = FAILED reports) is a review-quality mechanism applicable anywhere an agent grades work (TRUST-SIGNAL).
4. Shard-order encodes triage judgment: cockpit → db → engine → public-api → ingestion, with billing (shard 1, hardened that week) last — process order is a leverage decision, not a filing decision (OTHER).
5. Attack scenarios are bettor-centric money paths: double-delivered Stripe webhooks, out-of-order subscription events, devig with extreme juice (-10000/+2500) and arb'd books, pick'em spread-0 grading, totals landing exactly on the line (PUSH), Kelly with negative edge = stake 0, IDOR sweep for premium pick details, free-tier payload view-source leak tests (SCHEME).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Finding 1: OTHER
- Finding 2: TRUST-SIGNAL
- Finding 3: TRUST-SIGNAL
- Finding 4: OTHER
- Finding 5: SCHEME
## Engine-actionable? (yes/no + one-line what)
Yes — the adversarial self-verification protocol (hypothesis-first → four-minds → steelman → self-refutation before filing a finding) is directly reusable as an agent-QC gate for any engine claim or builder audit.
