# Champion v3 holdout audit — Motif verification (2026-10-15)

**Verdict: bracket [7.134, 7.139] NOT promoted to MEASURED.** Two independent reasons:
(1) The v3 artifacts (research/gate_hunt_champion_v2_2026-10-15.json + references/gate-hunt-crps-constructions.md + champion code) are NOT on any reachable remote — exhaustive search (Sports grok branch @c5fbdc57 incl. research/, dfs/, reports/, brain/ recursive; Sports main 404 + code search 0; ~500 branches; agent-bus; Motif VM; uploads; Drive catalogs). They exist only on Hermes' Windows host. An unreproduced number is a claim, not a measurement.
(2) The floor is already lower: pit_round2 family 2 measures 7.133199 on the same frozen filter — committed code RE-RUN by Motif today, identical on every digit (d=-0.020822, SE 0.005920, t=-3.52). Its own label: DIAGNOSTIC, promotion NONE.

**What verified exactly:** frozen filter n=2,462; baseline 7.154021 reproduced (<5e-7); sign-flip guard 10.435732; Hermes' holdout FLAT CONTROL reproduced: 7.009786 on the 2024-2026W5 tail (n=623: 272/272/79) vs claimed 7.010 — holdout window/rows/scoring confirmed identical. Vig-plane inputs real: spread odds on 2,461/2,462 rows, avg juice 15 levels, 1,659 rows != -110. Champion leg (6.985) NOT re-runnable without the config; residual caveat: v3 architecture was selected on the full series, so the holdout validates the fitting procedure given the architecture, not the architecture choice.

**Gate:** 7.134568 - 7.099 = 0.035568 (~0.0356) — NOT cleared. **Emission ZERO_OBJECT.** walk_forward.json untouched.

**To close (one action):** Hermes pushes the config JSON + constructions reference + champion code to the walk-forward branch (or Garrett relays the JSON) → Motif re-runs the frozen config and re-opens promotion. Hermes' no-retuning recommendation endorsed.

Landed: Beexly/Sports branch motif/champion-holdout-2026-10-15 @ 9eb1cae (dfs/walk_forward/champion_holdout_verify.py + research/champion-holdout-verification-2026-10-15.json, remote-verified byte-identical). Full report: workspace your_files/champion-holdout-2026-10-15.md.
