# ops/hermes/OVERNIGHT-2026-08-19.md
## What it is (1-2 sentences)
Overnight work orders (night of 2026-08-19) for the Hermes builder agent, driven by the Claude Code orchestrator session on `claude/cron-config-placement-verify-qsl19t` while the founder slept under standing delegation — a ledger-driven task queue (rows L-8 through L-11) covering CLV forensics landing, CLV slice analysis, provider probes, and affiliate-repo verification.
## Key metrics/methods (formulas where given, else "not specified")
CLV recompute formulas (stated exactly, to be documented in the L-7 forensics README):
- SPREAD: HOME = lock − close; AWAY = close − lock
- TOTAL: OVER = close − lock; UNDER = lock − lock−close form given as "OVER close−lock / UNDER lock−close"
- ML: implied(close) − implied(lock), with ε = 0.005
Methods prescribed for L-9 (read-only SQL):
- Decided-only beat rates (exclude MATCHED rows) per market × sport × month, with Wilson 95% CIs
- Lock provenance audit: for 30 sampled graded picks (10 per market), join stored lock price/line against the odds batch nearest `generated_at`; classify each lock as (a) equals a single book quote, (b) equals the batch mean, (c) matches nothing in any batch → model-derived
- ML monster-lock check: for the 59 locks < −1000, test whether ANY odds batch for that game contains that price (expected: none → model-derived)
- Pub-vs-lock sign-flip audit (57/388 SPREAD): pull odds batches at `generated_at` and at `clv_captured_at` to distinguish genuine favorite flips (runline moved through zero) from lock-on-wrong-side artifacts
Push protocol: `git push -u origin <branch>`; on network failure retry 4× with 2s/4s/8s/16s backoff
## Data sources named
- `docs/ops/AGENT_LEDGER.md` (ledger, NOT on main — single writer is the orchestrator)
- `docs/calibration-proposals/2026-08-19-clv-forensics/{raw.json, ml-and-books.json, per-book.json}`
- `docs/ops/edge/2026-08-19-affiliate-tooling-research-triage.md` (why the affiliate list needs independent verification)
- `apps/web/lib/scraping/source-rights-registry.ts` (governs every L-10 provider touch; `permission_required` and worse → skip)
- Named providers/repros for L-11 verification (~20): Refferq · Income Generator Hub · MCP SuperAssistant Automation · SponsorFit · ClawMarketing / growth-os · GreenRobot Ad Server · VoucherBoost (Voucherswell) · OpenPartner (openpartner.dev) · xAmplify OpenSource PRM · Google Meridian · OpenAttribution · Inpact · Analytify · Droploop · mangosqueezy · Numok · Dub · PubliFlow · Cashier SaaS Metrics · Revenue Metrics Dashboard · prathammahajan/affiliate-management-system · cpanova/cpa-network
- L-10 example: TheSportsDB with public key `123`
## Findings (numbers and facts, not vibes)
- Push grants restricted to exactly 3 branches: `hermes/l7-clv-forensics`, `hermes/l9-clv-slices`, `hermes/l10-provider-probes` (L-11 adds `hermes/l11-affiliate-tooling-verification`)
- Ledger rows worked in order L-8 → L-9 → L-10; Hermes may NOT edit the ledger tonight; pushed branch IS the completion signal
- Blocked > 20 minutes → write `BLOCKED.md` to the task branch, push, move on; never idle silently
- Hard constraints: read-only DB role; no full vitest runs on Windows (worker hang); never print keys/secrets — prices, lines, timestamps only; no production gate flips, env changes, cron changes
- CLV state of knowledge as of 2026-08-19: L-7 spot-check proved stored arithmetic honest (0/10 mismatches); the open question is whether INPUTS are market quotes or model output
- Headline beat figure: 24.86% (includes 324 zero-movement rows); TOTAL decided-only beat = 176/301 ≈ 58.5%, the only market whose decided-only beat clears 52.4%
- Open artifacts under audit: 59 ML locks < −1000; 57/388 SPREAD pub-vs-lock sign flips; ML mean of −27.4pp suspected to be a model-derived artifact
- L-11 motive: founder pasted a DeepSeek affiliate-tooling research summary carrying hallucination signatures — hyper-precise unverifiable stats like "$0→$4M... $20/mo... 14+ months" and "$16.02 revenue potential"; nothing from the list gets trusted or adopted until independently checked
- L-11 required verification fields per name: GitHub existence Y/N, real owner/org, star count, last-commit date, license, primary language; verdict = real-and-matches / real-but-exaggerated / does-not-exist
- L-10 probe budget: at most 2 live calls per registry-compatible candidate; record latency, response shape, rate-limit headers; no signups, no credential creation, no adapters
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CLV beat-rate methodology with zero-movement exclusion + Wilson CIs — TRUST-SIGNAL
- Lock provenance audit (market-vs-market vs model-vs-market classifier) as the decisive test for whether an apparent CLV edge is real — TRUST-SIGNAL
- Stored-arithmetic-honest (0/10) but inputs-questioned framing: separate "arithmetic honest" from "inputs genuine" in any calibration audit — TRUST-SIGNAL
- DeepSeek hallucination signatures ("$0→$4M... $20/mo... 14+ months", "$16.02 revenue potential") as trigger for mandatory independent verification — OTHER
- Ingestion/ledger-style ops protocol (single ledger writer, push-is-completion-signal, BLOCKED.md after 20 min) — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — Adopt the CLV forensics formula set (with ε=0.005 ML convention) and the lock-provenance audit (quote/batch-mean/model-derived classification) as the standard method to validate whether any measured CLV edge is market-vs-market real or model-vs-market artifact.
