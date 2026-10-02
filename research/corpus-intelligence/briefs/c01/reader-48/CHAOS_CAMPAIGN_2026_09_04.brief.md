# ops/CHAOS_CAMPAIGN_2026-09-04.md
## What it is (1-2 sentences)
Protocol for a "Chaos campaign": 11 parallel LLM runs (~15s each) through the local OmniRoute router as a hypothesis generator, governed by the rule that every output is a HYPOTHESIS, never a finding, until falsified against real data (the replay corpus, live graded picks, or a directly opened source). Ships five full prompt specs (C1 edge hunt, C6 CLV unlock, C2 red-team positioning, C3 frontier gap, C4 adversarial launch QA, C5 falsify-our-own-numbers) plus operating rules and router mechanics.
## Key metrics/methods (formulas where given, else "not specified")
- Falsification protocol: every Chaos hypothesis goes into a slice test against the existing corpus (`scripts/analytics/replay-breakdown.ts` already has the harness — add the slice, run it, report the Wilson lower bound). Anything clearing break-even on the lower bound gets a second out-of-sample confirmation before being spoken about. Expect zero survivors; one survivor is a business.
- Pass criterion: Wilson LOWER bound against 52.38% break-even; "it looks promising" is not a threshold.
- C1 required elements: banned-tested-ideas list, falsifiable test on a named dataset, pre-registered threshold, pre-registered failure mode, and a 0-100% prior. Prompts must: ban the obvious explicitly, force a falsifiable test, demand a pre-registered failure mode, make UNSURE cheap and invention expensive.
- Run order: C1 and C6 can change the product; C2-C5 harden it. Every run blind (never tell models the expected answer); every claim checked before written down (URLs opened, licenses read, slices actually run); log run/date/verdict counts/hypotheses generated/hypotheses SURVIVED to `docs/data/CHAOS_CAMPAIGN_LOG_2026-09-04.md`; a run producing nothing usable is a logged result.
- Router mechanics: `oma_live_` admin token (not `sk-` inference keys — those 401); `maxTokens` minimum 256, 2048+ for C1/C6 or answers truncate; `OMNIROUTE_MEMORY_MB=8192` or parallel fan-out crash-loops; one connection per provider slug (extra same-slug connections silently dropped); cross-check no paid provider slipped in (no `modelId` starting `claude/ codex/ kiro/ kr/ cc/ cursor/ devin/ grok-cli/ amazon-q/ deepseek/`).
## Data sources named
- The 15,939-pick replay corpus (1999-2025 NFL REG, 6,967 games; nflverse games.csv columns: game_id, season, week, teams, spread_line, total_line, home/away_moneyline, scores, rest, roof, surface; CC-BY-4.0).
- Live graded picks; sources "we opened ourselves."
- `.claude/rules/scraping.md` and `source-rights-registry.ts` (cross-check for CLV source licenses).
## Findings (numbers and facts, not vibes)
- Replay corpus (frozen model, zero lookahead errors, graded against real closing lines): SPREAD n=6778, 48.86%, ROI -6.53%; TOTAL n=6868, 49.49%, ROI -5.44%; MONEYLINE n=2001, 76.71%, ROI -1.96% ("wins 3 of 4 and still loses money"); overall n=15647, 52.70%, ROI -5.48% per unit staked.
- Confidence does NOT rank outcomes: AUC 0.4965, p=0.41 on 13,646 picks; controls |line|, rest, week all ~0.50.
- Live corroboration: >=80 confidence tail = 152 graded picks, 61 wins, 40%, INVERTED; resolution 0.005 on 1,663 graded picks.
- 11 market slices tested (favourite/dog, 4 spread bands, over/under, 4 total bands): ZERO cleared break-even on the Wilson LOWER bound.
- Closing line walk-forward: pooled Brier 0.2106, CI [0.2050, 0.2172], n=2,750; best calibrator isotonic, +0.00007 — the close is near-perfectly calibrated, essentially nothing to recalibrate.
- CLV is UNMEASURED, not disproven: entry line IS the close by construction, every pick grades MATCHED_CLOSE; no opening-line archive held. C6's free-legal opening-line archive (3+ seasons, commercial-derived-use license) is the blocked measurement.
- Replay methodology (C5): replay reconstructs each historical game by taking nflverse's single closing line per market and replicating it across N synthetic bookmaker rows at standard -110 pricing; feature assembly is type-separated from settlement so the scorer structurally cannot read a score; ROI at each pick's real entry odds; win rates use Wilson intervals; AUC uses average ranks for ties and a seeded permutation test.
- Trust note: a 9-model panel fabricated citations while explicitly told not to ("Cover (1965)" with a title that isn't Cover's 1965 paper, a phantom "Chernoff (1952)") — consensus was right, bibliography invented. Rule: every URL opened, every license clause read before anything is written down.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Replay corpus baseline numbers (48.86% / 49.49% / 76.71% win rates, -6.53%/-5.44%/-1.96% ROI, AUC 0.4965) are the falsification harness every new model or signal must beat. OTHER
- Confidence-is-not-predictive (AUC 0.4965, top-tail inverted at 40%) corroborates the AGENTS-history calibration findings: rank on edge, never confidence. OTHER
- Fabricated-citation incident ("Cover (1965)", phantom "Chernoff (1952)") is a trust-signal methodology rule: open every URL, read every license clause, never infer a license from reputation. TRUST-SIGNAL
- C6's free-legal opening-line archive hunt is the data gap that, if solved, makes CLV measurable. OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — establishes the replay-corpus falsification protocol (Wilson lower bound vs 52.38% break-even) and the baseline numbers no model has yet beaten; C6's opening-line archive hunt is the single highest-value data acquisition for the engine.
