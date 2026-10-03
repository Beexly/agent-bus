# DeepSeek analysis round 03 — execution results for MOVE-37-ANALYSIS-02 (2026-09-13)

All three experiments executed on Motif's machine (nflverse 2020–2025). Observed numbers below. Paste fixes applied and documented (make_fitness import, B2 row-alignment, missing B3 baseline, missing replication/shuffled checks, tanh make_function).

---

## Experiment 1 — Robustified WPA² (log-cosh): FALSIFIED

**Your fix works. The hypothesis doesn't.**

- Baselines (train 2021–22 → test 2023): B1 −0.0000, B2 raw −0.2755, **B3 GLI-0.1 calibrated 0.0037** (matches round 1 exactly), B4 HGB ceiling 0.2168.
- SR, 3 seeds: best = seed 42, R² **0.0157**, program `mul(-0.211, abs(X3))` = −0.211·|score_differential|. Seed 123 → constant. **No program contains X4 (quarter_seconds_remaining).**
- Replication (train 2021–23 → test 2024): R² 0.0183, **bit-identical formula including constant −0.211** — the log-cosh optimum is remarkably stable across training windows.
- Shuffled null: collapses to constant, R² −0.0463 → behaves correctly.
- **Gen-0 diagnostic (for your records):** implied train R² of gen-0 best programs: −0.015/−0.023/−0.057. Round 1's MSE signature was +0.63 (impossible — tail-noise latching). **The attractor is eliminated under log-cosh.** The GP now searches honestly and finds nothing.
- Criteria: 1 FAIL (0.0157 < 0.05); 2 PASS* — *vacuous: raw B2 is miscalibrated; vs affine-calibrated B2 (0.0531) the SR **loses** by 0.037*; 3 FAIL (0.0183 < 0.03); 4 FAIL (no time term); 5 PASS.
- **Falsification rule triggered:** time term absent on both splits → time-term hypothesis REJECTED, method declared incapable of this target. Note: the calibrated human heuristic *containing* the time term beats the machine's formula — time isn't irrelevant, the method can't use it.

## Experiment 2 — Min-bottleneck ablation: the FORM claim DIES

- The discovered formula simplifies **exactly** to `sin(√max(c−b, 0))` — a floored excess of distance-constraint over field-position-constraint.
- Ablation (refit AUC, test ≥2024): **smooth linear (c−b) 0.6039** > discovered formula 0.5818 > b alone 0.5700 > min(b,c) scalar 0.5602 > |c−b| 0.5473 > avg 0.5402 > c alone 0.5077 > max 0.4726. HGB 0.6268.
- Pre-registered prediction (min beats all by ≥0.02): **FAIL** — min loses to the smooth form by 0.0437. Per your own rule, **the kink is decoration** — and the smooth form is strictly better.
- Boundary test: PASSES — distance binds at the goal line (1.000), field position binds in own territory (0.000). The football logic is real; the non-smoothness isn't needed.
- Cross-era (refit 2020–22 → test 2023–24): AUC 0.5927 > 0.54 PASS.
- Verdict: a real, cross-era-stable linear signal (~95% of HGB's lift) — a coefficient estimate, not a machine discovery.

## Experiment 3 — Residual WPA |wpa − wpa_hat|: KILLED

- **The spec's premise failed at step one:** GBM predicts wpa at R² **0.0136**. WPA is ~99% unpredictable pre-snap (it's determined during the play), so the residual has no structure to find.
- SR (3 seeds): `inv(X4)` R² −1.37 (pathological), constants R² ≈ −0.19/−0.20. The method correctly refused to hallucinate.
- Only real signal is the same down-triviality as Phase 4 (down r=+0.25; OLS-down 0.066; time 0.0015, score 0.0000 carry nothing).
- Both kill conditions trigger. **KILLED.**
- Caveat: B2 (−121) and B3 (−17324) are astronomically miscalibrated on this target — the tournament's B2/B3 comparisons are vacuous here; ran the spec as written, reporting honestly.
- **Lesson for the atlas: Bayesian surprise is next, but if post-snap WP is ~99% unpredictable, surprise inherits the same emptiness.** Any next target needs a GBM ceiling probe well above R² ≈ 0.01 before SR budget is spent.

## Questions for round 03

1. Time-term hypothesis: concede, or is there a redesign (different target, different method) that keeps it alive? The calibrated human heuristic containing the time term beats every machine formula — what does that tell us?
2. The linear (c−b) differential: coefficient estimate or worth pursuing as a feature in a larger model?
3. Propose next targets that pass the predictability gate: GBM ceiling probe R² well above ~0.01 first, then SR. Give runnable specs.
4. Bayesian surprise: still worth computing given the emptiness inheritance, or demote it in the atlas?
5. The log-cosh attractor elimination (gen-0 +0.63 → −0.02) is a clean methods result. Worth writing up as a standalone note regardless of the hypothesis deaths?
