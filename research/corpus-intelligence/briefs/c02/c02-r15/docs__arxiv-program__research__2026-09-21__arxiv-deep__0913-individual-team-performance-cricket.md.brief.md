# docs/arxiv-program/research/2026-09-21/arxiv-deep/0913-individual-team-performance-cricket.md

## What it is (1-2 sentences)
ArXiv 2401.15161v2 (Sadekar, Chowdhary, Santhanam, Battiston, 2024): a descriptive + null-model study of individual and team performance patterns in 4,418 men's ODI cricket matches (1971–2024) — career timing, hot streaks, drop/re-entry, captaincy effects, specialist value, and contribution balance in winning teams.

## Key metrics/methods (formulas where given, else "not specified")
- Era normalization: nf = ⟨Team runs⟩_all / ⟨Team runs⟩_year multiplies runs scored/conceded (borrowed from citation normalization, Radicchi et al. 2008).
- Fractional contribution: fc = ½·(runs scored/total team runs + wickets taken/total team wickets) ∈ [0,1]; specialists capped at 0.5.
- Effective team size: S_eff = 2^H, H = −Σ_c fc log₂ fc (entropy of the contribution distribution).
- Null models: shuffle performance timestamps (100×) per player for individual hot streaks; shuffle match-result timestamps (10⁴×) holding win count for team streaks.
- Tests: K-S, Wilcoxon signed-rank, Mann-Whitney U, Welch's t; effect size r = U/(n₁n₂).

## Data sources named
- 4,418 men's ODI matches, 1971–March 2024, 2,863 players, scraped from howstat.com. No code released.

## Findings (numbers and facts, not vibes)
- Random impact rule: N*/N uniform, K-S vs null p > 0.05 — a player's peak performance can occur anywhere in their career.
- Hot streaks: ΔN/N ∈ [0, 0.2) ratio > 1 (Wilcoxon p < 0.001) — best performances genuinely cluster in time vs the shuffled null.
- Early→full career: R² = 0.45 (batsmen), R² = 0.66 (bowlers); ~55% of batsmen improve on early-career averages vs ~45% of bowlers.
- Drop/re-entry: ~19% decline over the 5 matches pre-drop; post-return +36% (batsmen) / +30% (bowlers) vs the final pre-drop match, and the gains persist.
- Captaincy: 172 captains; captain-batsmen avg 31 vs 26 runs (+16%); captain-bowlers 0.96 vs 1.13 wickets (−18%); MWU p < 0.001. Batsmen's performance rises during captaincy, bowlers' falls; both decline post-captaincy.
- Specialists: openers 31 runs @ SR 63 vs non-openers 26 @ SR 69 (p < 0.001); mean fc: all-rounders ≈ 0.11 > bowlers ≈ 0.10 > batsmen ≈ 0.06 (K-S p < 0.001); keepers 0.7 dismissals/match vs fielders 0.3 (Welch p < 0.001).
- Team streaks: P(7+ straight wins) = 9× chance; P(7+ straight losses) = 3× chance (vs 10⁴× shuffled nulls). Winning teams' median S_eff ≈ 6.9 vs 6.6 for losers (+4%, p < 0.001, r = 0.56) — balanced contributions win.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Effective team size S_eff (from EPA shares) as a weekly injury-vulnerability index: low S_eff = concentrated production = a star injury moves the number more; feed into spread/total adjustments when a high-share player is Q/OUT (SCHEME)
- NFL fractional contribution: per-game fc = ½·(player yards/team yards + player EPA/team EPA) as a single-game "how much of the team was this guy" score for player ratings and anytime-TD reasoning (QB-BEHAVIOR)
- Hot-streak shuffle test for props: compare recent big-game clustering against 1,000 timestamp-shuffled nulls; use as a feature (not a narrative) in anytime-TD and yardage-prop models (QB-BEHAVIOR)
- Post-bench bounce: test the +30–36% comeback effect on NFL players returning from benching/suspension/injury for yardage and TD props (INFERENCE: the paper measured it in cricket; the NFL test is the reader's proposed replication, not a file finding) (QB-BEHAVIOR)
- Era normalization nf = ⟨league scoring⟩_all / ⟨league scoring⟩_season for cross-era player comparisons in props/fantasy content (OTHER)
- Herfindahl-style concentration weighted by positional replaceability (backup RB replaces production more easily than a QB) as an improvement over raw S_eff (OL)

## Engine-actionable? (yes/no + one-line what)
Yes — adopt S_eff as an injury-vulnerability index and fractional contribution as a per-game player-share feature, each gated on a stated numeric test (S_eff × star-OUT interaction p < 0.05; fc predicting next-week EPA with lower MAE than rolling-EPA baseline).
