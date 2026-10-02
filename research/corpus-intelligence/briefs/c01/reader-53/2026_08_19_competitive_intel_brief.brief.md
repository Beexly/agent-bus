# docs/ops/edge/2026-08-19-competitive-intel-brief.md

## What it is (1-2 sentences)
Decision brief distilling a 633-file competitive-intel corpus (Beexly/gse-competitive-intel) into verified findings, surfacing live conflicts with the product being built (affiliate lane vs zero-affiliate doctrine, kelly.ts confidence gating). Dated 2026-08-19; marks which corpus claims are stale/dangerous.

## Key metrics/methods (formulas where given, else "not specified")
- Core betting doctrine: fire on calibrated edge **e = p − q**, never on confidence κ = max(p, 1−p).
- BettingPros published records (scraped): MLB 6,106 bets, 52.5% win, −103u, −1.7% ROI; NBA 33,661 bets, 51.0% win, −99.48u, −0.3% ROI; NFL 5-star slice 1,707 bets, 54.7% win, +81u, +4.7% ROI.
- GSE calibration claim: ECE 0.0044 (publishable, FTC-safe, differentiating).
- nfelo benchmark scrape: 66.61% SU, 56.97% ATS vs open, 53.70% ATS vs close, +5.61% CLV/play since 2009.
- Corpus pricing anchor for serious-bettor cohort: $199–299/mo (OddsJam-proven); GSE then at $14.99/$24.99.
- Kelly code detail: `packages/prediction-engine/src/kelly.ts:154-155` gates on confidence AND edge (AND); line 181: `inferredEdge = (pick.edgeScore / 100) * 0.05` ("bounded +5% edge proxy") — flagged as possibly sizing stakes off market structure, opened as C-26.
- Verdict categories used: FantasyPros 13 confirmed / 9 partial / 1 refuted; scores24 18 confirmed / 11 partial / 1 refuted.

## Data sources named
- `Beexly/gse-competitive-intel` repo (633 files); BettingPros/Marzen Media scraped published records; scores24.live scrape (marked NEVER EXECUTE, permission_required); nfelo season-by-season table; FantasyPros; OddsJam; Pinnacle (as CLV bar).

## Findings (numbers and facts, not vibes)
- BettingPros abandoned proprietary modeling Feb 2026, pivoted to sharp-book-consensus line shopping — reproduced GSE's "resolution ≈ 0" finding independently at ~40,000 bets.
- Their NBA aggregate page carries −99.48u while captioned "we are consistently winning" — the honesty-seam marketing wedge.
- Zero-affiliate doctrine is the corpus moat (Handoff §1, Master dossier §4.5, Capstone) vs live affiliate surface build — flagged as the one live product contradiction; red team names straddling as the fatal outcome.
- Five files still carry a stale "≥70% win-rate north star" (superseded 2026-06-30); forbidden for any copy-generating agent to read.
- Stale/dangerous items: `_s24_pred_scraper.py` (never execute; harvested session cookies); scores24 financials contradict (capstone claims 98% margin profit vs playbook citing −188,915 EUR 2025 loss); scores24 page count asserted 600k vs "low-hundreds-of-thousands".
- Charging for CLV at Elite ($24.99) while CLV measurement was under repair — highest-risk paid surface.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: external evidence that proprietary sports-betting models lose at scale (40k bets) — relevant as market-context prior for engine edge expectations; honest-aggregate transparency as the defensible product wedge.
- OTHER: benchmark numbers (nfelo 53.70% ATS vs close) set the bar the engine must clear.
- TRUST-SIGNAL (INFERENCE): the "lead with full record, not best slice" honesty doctrine is a public-facing trust posture, not engine input.
- No QB, coaching, OL, or scheme material.

## Engine-actionable? (yes/no + one-line what)
**Yes** — set the engine's calibration truthfulness constraints: certify on CLV-vs-Pinnacle and calibration (ECE) only, never on win-rate claims; note kelly.ts C-26 market-structure-echo concern as a staking-layer audit item.
