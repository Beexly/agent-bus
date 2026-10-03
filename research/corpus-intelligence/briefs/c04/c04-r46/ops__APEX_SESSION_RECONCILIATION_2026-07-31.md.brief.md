# docs/ops/APEX_SESSION_RECONCILIATION_2026-07-31.md
## What it is (1-2 sentences)
A 2026-07-31 reconciliation of an APEX sandbox session against independent production truth (Vercel deploy record + GitHub), registering what was truly done, what the sandbox summary missed, and canonical A-1/A-8 nomenclature.

## Key metrics/methods (formulas where given, else "not specified")
- Production truth verified: commit `3dfbc726` (B-0 gamma pause) merged + deployed production READY ~22:38 UTC; commit `a537040` (PR #259 squash — sandbox export pointer) merged + deployed ~00:15 UTC, was production HEAD at recon.
- Scoreboard: DONE+LIVE = B-0 gamma pause, #259 pointer, sandbox quarantine; BUILT AWAITING MERGE = #258 (APEX + A-8 public brand), #261 (Omnibus A-1 tripwire); OPEN = #260 (Clarity npm bridge, optional); RESEARCH PARKED = `gse/phase2-binary-conformal-adapter` (shadow-only).

## Data sources named
- Vercel deploy record + GitHub (used to verify production truth)
- Sandbox demo explicitly NOT the production source of truth

## Findings (numbers and facts, not vibes)
- APEX session claims confirmed: #259 merged, sandbox quarantine correct, main HEAD at recon = `a537040`.
- What the APEX sandbox summary missed and is now registered: (1) Omnibus A-1 hygiene branch — PR #261, single-file competitor-trademark tripwire test (`apps/web/__tests__/no-competitor-trademarks.test.ts`), merge after #258; (2) Binary conformal / UQ research branch — Mondrian conformal (priced:false, status:shadow), scoring-rules, odds-api VoI, offline hyperparam search, LinTS Cholesky decision, HONESTY_LEVERAGE_MAP, FOUNDER_ACTIVATION_RUNBOOK — disposition HOLD as research, no PR.
- Canonical nomenclature: Omnibus A-1 = competitor-trademark tripwire (SMASH/BURR/Solds/QB Types as identifiers); Omnibus A-8 = public brand consistency StatKing → Galaxy Stats + brand tripwire script; hierarchy: Fences/physics > Omnibus (program of record) > APEX (cognitive OS) > convenience.
- Corrections to prior estate audit: "free-spine ingest path shipped on main" overstates — free score adapters exist but game CREATION still absent (WS-B core gap); "residual = 0" was sandbox-scope only.
- Founder one-choice on PR #258: brand call whether "Galaxy Stats" is the public name on `/stats`; agent did not silent-merge (founder brand YES required).
- Founder lane items unchanged: honesty gates OFF, registry untouched, CLOSING_ODDS_API_KEY, jacobmyers692 invite, G-1, counsel.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Omnibus A-1 competitor-trademark tripwire (SMASH/BURR/Solds/QB Types as identifiers) — names QB Types as identifiers (QB-BEHAVIOR)
- Mondrian conformal shadow branch (priced:false) — uncertainty quantification research, no gate flips (OTHER)
- LinTS Cholesky decision on the parked conformal branch (OTHER)
- HONESTY_LEVERAGE_MAP / FOUNDER_ACTIVATION_RUNBOOK on parked branch (OTHER)

## Engine-actionable? (yes/no + one-line what)
No — ops reconciliation record; the parked conformal branch is explicitly research-HOLD, not wiring-ready.
