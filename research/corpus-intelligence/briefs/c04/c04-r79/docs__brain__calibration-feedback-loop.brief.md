# docs/brain/calibration-feedback-loop.md

## What it is (1-2 sentences)
Sports OS doctrine ("Status: Doctrine only. Implementation requires approved change proposal.") defining the calibration feedback loop — how every settled pick generates calibration signals feeding model-version accuracy records, confidence-band calibration checks, and source reliability scores; includes proposal-only TypeScript data structures that are explicitly not implemented.

## Key metrics/methods (formulas where given, else "not specified")
- **calibrationError** = difference between the confidence-band implied win rate and the actual outcome; negative = overconfident. **calibrationDirection**: OVERCONFIDENT | UNDERCONFIDENT | CALIBRATED.
- **Win rate** = win count / total settled; "total settled" = COUNT of WIN + LOSS only (excludes PUSH, VOID).
- Per model version tracked: total settled, win count, loss count, win rate, calibration error (mean), calibration error (STDEV), coverage by sport, coverage by pick type (SPREAD / TOTAL / PROP / ML).
- **Confidence-band calibration table (applied per model version, per 50-pick window):**
  | Confidence band | Expected win rate | Acceptable actual range |
  | 80–100 (Strong) | ~65–75% | 58–80% |
  | 65–79 (Moderate) | ~55–65% | 48–72% |
  | 50–64 (Lean) | ~50–55% | 43–62% |
  | 0–49 | Withheld — not tracked for win rate |
- **Alert rule:** if a confidence band's actual win rate falls outside its acceptable range for two consecutive 50-pick windows, a calibration alert is raised; the operator decides: (1) accept current calibration, (2) adjust confidence scoring algorithm (requires model version increment), or (3) widen acceptable range (requires documented justification). The system never autonomously adjusts confidence scores.
- **Display floor:** win rate is never displayed until 30 picks are settled for the version; win rate is not projected forward or annualized.
- **Model health warning:** a model version reaching 100 settled picks with win rate below 45% triggers an operator alert — a warning, not automatic retirement.
- **Reliability score updates:** within 24 hours of settlement confirmation; no single settlement event changes a source's score by more than ±5 points; scores smoothed over a 30-pick rolling window; a source correct 90%+ on a specific claim type (e.g., injury status) gains a claim-type reliability bonus.
- **Trigger rules:** calibration triggers only on game completion, for picks with status ACTIVE, result one of WIN/LOSS/PUSH/VOID, confirmed by a Tier 1 or licensed Tier 2 source. No calibration on WITHHELD picks, before game completion, from Tier 5/6 claims, or on inferred outcomes. If no Tier 1/2 confirmation within 6 hours of game completion, the pick is flagged SETTLEMENT_PENDING.
- **PUSH/VOID:** excluded from win rate calculations; NOT excluded from the ledger; generate neither positive nor negative calibration signals. >15% VOID picks triggers a review.
- **Versioning:** calibration history does NOT carry over when a model version is incremented (history retained in cockpit by version); a model version is never silently replaced mid-season — changes require a version increment and a public note. Increment triggers: algorithm change affecting confidence scoring, source weighting change, new claim type added, approved calibration adjustment.
- **Forbidden public claims:** "Our model has proven predictive accuracy"; "Past win rate predicts future performance" (must not appear on any public surface in any form); "The model is improving" — only say "calibration data is accumulating."
- **Approved transparency language:** "As of [date], this model version has settled [N] picks at [W]W–[L]L ([rate]%)"; "Win rate is tracked per model version and updated daily"; "Past performance does not guarantee future results"; "Confidence scores are calibrated against settled outcomes — not invented."

## Data sources named
Tier 1 / licensed Tier 2 settlement sources (specific providers not named); cross-references `docs/brain/picks-intelligence.md` (settlement rules), `docs/brain/signal-ledger.md` (calibration events as ledger events), `docs/brain/evidence-vault.md` (source quality signals), `docs/brain/source-acquisition-mesh.md` (reliability scores), `docs/brain/entity-graph.md` (entities in settled games).

## Findings (numbers and facts, not vibes)
- Calibration timeline after game completion: 0–15 min system polls for Tier 1/2 settlement confirmation; 15–60 min confirmation expected for standard games; 60 min–6 hr SETTLEMENT_PENDING flag; 6 hr operator alert if still no confirmation; calibration event written to Signal Ledger after confirmation; source reliability scores updated within 24 hr; win rate metrics updated on next model report cycle if the 30-pick threshold is met.
- The calibration loop is explicitly positioned as a trust signal ("the system holds itself accountable"), not a technical disclosure.
- Public /methodology surface discloses the existence of calibration. Users may see: that calibration exists and how it works (high level), the current model version's settled record (after 30 picks), version history (names/dates only). Users may NOT see: raw calibration data tables, source reliability scores, evidence quality signals per source, internal calibration alerts or thresholds.
- Evidence chain quality signal fields: primaryEvidenceAligned (boolean), marketAligned (boolean), contradictionsCalled (boolean), overallSignal (STRONG_POSITIVE | POSITIVE | NEUTRAL | NEGATIVE | STRONG_NEGATIVE).
- SourceQualitySignal fields: sourceId, sourceTier 1–5, aligned (boolean), reliabilityDelta (e.g., +1, -2).
- Stated limitations: calibration cannot guarantee future accuracy, cannot retroactively strengthen thin-evidence picks, cannot prove predictive power, cannot eliminate variance, cannot replace human judgment on ambiguous evidence.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the calibration loop as a user-facing trust signal; forbidden vs. approved calibration language for public surfaces; the 30-pick display floor and no-forward-projection rule as honesty mechanics; "Past win rate predicts future performance" ban.
- OTHER: model versioning governance (no silent mid-season replacement; history doesn't carry over); source reliability scoring mechanics (±5 bounded deltas, 30-pick smoothing, claim-type bonus); evidence chain quality signals (primaryEvidenceAligned, marketAligned, contradictionsCalled); settlement-pending and void-rate review thresholds as data-quality guardrails.

## Engine-actionable? (yes/no + one-line what)
Yes — lift the confidence-band calibration table (80–100/65–79/50–64 with expected vs. acceptable ranges), the two-consecutive-50-pick-window alert rule, the 30-pick display floor, and the bounded source-reliability updates (±5 per event, 30-pick rolling smoothing) directly into the engine's calibration spec; enforce the "past win rate predicts future performance" ban on all public surfaces.
