# REPAIR-02 LAB REPORT — PROJECT MOVE-37
## Execution + adversarial review of DeepSeek REPAIR-02 (2026-09-14)

Lab: Motif (subagent) | Verbatim response: `gse-discovery/deepseek-phase6-repair-02-response.md`
Demands reference: `gse-discovery/deepseek-phase6-sendback-03.md`
Verbatim code (unedited): `gse-discovery/move37_irl_prelec.py`
Lab execution copy (documented deviations): `gse-discovery/move37_irl_prelec_lab.py`
Pilot numbers: `gse-discovery/repair02_pilot_numbers.json`

---

## (a) Prelec citation check (N-30) — VERIFIED

Theorist's claim: `w(p;γ) = exp(−(−ln p)^γ)`, Prelec (1998), Econometrica 66(3).

**VERIFIED.** The functional form is the standard one-parameter Prelec
probability-weighting function, confirmed by multiple independent sources:
- Springer / Journal of Risk and Uncertainty: "we follow the proposal by
  Prelec (1998) and specify the probability weighting function as
  w(p) = exp(−(−ln(p))^α)" with α=1 ⟺ linear.
  (https://link.springer.com/article/10.1007/s11166-022-09392-x)
- RePEc confirms the paper: Drazen Prelec, 1998, "The Probability Weighting
  Function," Econometrica 66(3), May.
  (http://ideas.repec.org/a/ecm/emetrp/v66y1998i3p497-528.html)
- The two-parameter form w(p) = exp(−δ(−ln p)^γ) appears in the literature;
  the response's one-parameter form (δ=1) is the canonical special case.

All claimed properties check out mathematically for γ>0:
- w(1)=1: −ln1=0, 0^γ=0, e^0=1. ✓
- w(0⁺)=0: −ln p→∞, e^(−∞)=0. ✓
- w(p)∈[0,1] on (0,1]: monotone from 0 to 1. ✓
- γ=1 ⟺ w(p)=p: exp(−(−ln p)) = p. ✓
- w′(p) = w(p)·γ·(−ln p)^(γ−1)/p > 0 for p∈(0,1), γ>0. ✓
- γ<1 ⟹ w(p)>p for small p (e.g. p=0.1,γ=0.5: w=0.219); γ>1 ⟹ w(p)<p
  (p=0.1,γ=1.5: w=0.030). ✓ matches their "aggressive/conservative" gloss.

Nits (non-fatal): RePEc lists pages 497–528, the response says 497–527.
The history line ("Kahneman & Tversky's original formulation, refined by
Prelec 1998") is loose — the one-parameter weighting function in wide use is
Tversky & Kahneman (1992); Prelec (1998) gave the axiomatic foundation for
this family. The γ∈(0,2] range is the theorist's own search-range choice, not
a claim about the original paper — mathematically fine.

**N-30 upgraded: UNSOURCED → VERIFIED.**

---

## (b) IRL Prelec execution

### Verbatim run
`move37_irl_prelec.py` saved byte-exact from the §1 code block and run cold.
**The verbatim script cannot execute.** Two crash bugs, both certain:

**CRASH-1 (observed):** `predict_wp(sd + 3, gsr, 75)` — the literal scalar `75`
as `yl100` makes `np.column_stack` raise
`ValueError: ... array at index 0 has size 34321 and the array at index 2 has
size 1`. Observed in the lab log during the first model-fit call.
Minimal mechanical fix (same as Fix-1 FIX 6): `np.full_like(sd, 75.0)`.

**CRASH-2 (certain, would fire next):** `GradientBoostingRegressor(max_iter=150,
max_depth=4, random_state=42)` raises
`TypeError: __init__() got an unexpected keyword argument 'max_iter'` on
sklearn 1.9.1 (and every sklearn version — that class takes `n_estimators`).
This is the *identical* bug the lab already fixed in Fix-1 (FIX 4).
Minimal fix: `HistGradientBoostingRegressor`, unambiguously the intended class.

### Silent logic defects (worse than the crashes)
While diagnosing, the lab compared the verbatim counterfactual block against
the validated Fix-1 orientation reference (`move37_irl_cara_fix1.py`, whose
orientation was the subject of the entire Fix-1 round). **The REPAIR-02 code
regresses three validated orientation fixes:**

**OR-1 — kick-make branch is orientation-inverted (first-order).**
Verbatim: `wp_kick_make = predict_wp(sd + 3, gsr, 75)` (comment calls it a
"possession-preserving branch"). After WE make a FG, the OPPONENT receives the
kickoff: it is a possession-flipping branch. The correct term (Fix-1 line 254)
is `1 - predict_wp(-(sd + 3), gsr, 75)`. The verbatim code credits us with
possession at our own 25 while leading by sd+3, instead of giving the
opponent the ball while trailing by sd+3. This systematically inflates E_kick —
the same *class* of orientation error that reduced REPAIR-01 to a uniform
randomizer (train NLL ≈ ln 3).

**OR-2 — kick-miss spot, +8 should be −8 (16-yard error).**
Verbatim: `1 - predict_wp(-sd, gsr, np.minimum(100 - yl + 8, 99))`.
The kick spot is ~8 yards BEHIND the LOS toward the kicking team's own goal:
`(100 - yl) - 8`. This is Fix-1 FIX 1, documented with the coordinate
derivation. The verbatim code repeats REPAIR-01's original error verbatim.

**OR-3 — punt distance, −40 should be +40 (sign error, invalid yardlines).**
Verbatim: `1 - predict_wp(-sd, gsr, np.minimum(100 - yl - 40, 99))`.
A punt travels ~40 net yards AWAY from the kicking team's goal:
`(100 - yl) + 40`, with touchback at 75 when the landing exceeds 100.
This is Fix-1 FIX 2. The verbatim `-40` yields negative opponent yardlines
for yl > 60 (e.g. yl=70 → −10) fed into the WP model.

The response's §1 prose claims "ORIENTATION EXPLICIT" — the code contradicts
the prose. The theorist's own Fix-1 corrections were not carried forward.

### Lab-integrity incident (2026-09-14, ~05:30–06:00 UTC): workspace file collision
During this task, `move37_irl_prelec.py` and the derived lab copy were found to
have been replaced mid-run with an **alpha-parameterized variant** (`prelec_w(p, alpha)`,
domain (0,1.5], summary key `alpha_hat`) — consistent with the REPAIR-03 framing
now present in `deepseek-phase6-repair-03-response.md` (Prelec abstract: 0<α<1;
code block with `alpha_hat` at line 247). The 40-minute run completed on that
variant, NOT the REPAIR-02 verbatim — its numbers (α̂=1.5 at upper boundary,
β̂=0.1 at lower boundary, train NLL≈ln 3, test acc 0.40) are **discarded** as
not-Repair-02. No malice is alleged: this was almost certainly concurrent
REPAIR-03 work reusing the same filename. The REPAIR-03 variant is recoverable
by re-extracting the single ```python block from
`deepseek-phase6-repair-03-response.md`. **Recommendation: round-suffixed
filenames** (e.g. `move37_irl_prelec_r02.py` / `_r03.py`) — two repair rounds
must never share a script path again.
The REPAIR-02 verbatim was restored byte-exact from the unchanged response doc
(md5 `c6726b75b6b845168970ae9069709f7e`, matches fresh re-extraction;
response doc itself never changed: md5 `2b37a31d911900ab8aa188084fffe1aa`).
All defect citations below (§b) were re-verified against the restored verbatim.

### Lab execution (crash bugs only fixed; orientation NOT rewritten)
Per lab protocol, logic defects are reported, not silently rewritten. The lab
ran `move37_irl_prelec_lab.py` = verbatim + DEV-A (frozen snapshot instead of
network download; verified bit-identical), DEV-B (HistGBR), DEV-C
(`np.full_like` for 75). Estimator logic and all counterfactual orientations
are the theorist's.

**Clean run completed 2026-09-14 (~06:55 UTC) on the restored verbatim.**
`move37_irl_prelec_lab.py` = verbatim + DEV-A/B/C only (crash fixes; estimator
and orientation logic untouched). Frozen snapshot `data_snapshot_20260913`,
11 seasons (2014–2024), train ≤2022 / test 2023–2024. Output JSON:

```json
{
  "gamma_hat": 2.0,
  "beta_hat": 0.09999999999999999,
  "nll_train": 1.0996982548907528,
  "beta_unidentified_at_boundary": true,
  "test_accuracy": 0.40084231388579217,
  "baseline_always_go": 0.19720054502663198,
  "baseline_position_rule": 0.7906602254428341,
  "test_log_loss": 1.0990411762182901,
  "verdict": "QUARANTINED_PENDING_REVIEW"
}
```

**The shipped implementation DIES on the theorist's own kill criteria:**
1. γ̂ = 2.0 sits exactly on the upper boundary of (0,2] — the response's D1
   kill rule says boundary ⟹ kill.
2. β̂ = 0.1 sits on the lower boundary of [0.1, 1000];
   `beta_unidentified_at_boundary = true` — the D1 "β at boundary ⟹
   unidentifiable" kill fires.
3. Train NLL = 1.0997 ≈ ln(3) = 1.0986: the fitted model is a **uniform
   randomizer** over the three actions — the identical degenerate outcome
   that killed REPAIR-01's original implementation. Test accuracy 0.40 vs the
   naive position-rule baseline 0.79; test log-loss ≈ ln 3.

The EU surface the optimizer sees is flat because the counterfactual branches
are geometrically corrupted (OR-1/OR-2/OR-3 above): with E_kick systematically
inflated by the orientation inversion and the punt/kick-miss spots wrong by
tens of yards, no (γ,β) can separate the actions, so the optimizer slams both
parameters into boundaries. This is a **code kill, not a theory kill**: D2's
argument (CARA-over-WP is a category error; binary terminal lotteries admit no
risk-aversion parameter) is untouched by this result. But no γ̂ from this code
may be used — the prereg (γ̂∈[0.6,1.2], point 0.85) is moot until round-4
repairs the branches and the estimator is re-executed.

### IRL verdict
**KILLED as shipped — round-4 repair required (code defects, not theory).**
Executed clean on the restored verbatim: γ̂=2.0 (upper boundary), β̂=0.1 (lower
boundary, unidentified), train NLL≈ln 3 (uniform randomizer), test acc 0.40 vs
0.79 naive baseline. The theorist's own D1 kill criteria fire on all three
counts. The D2 theoretical move (CARA-over-WP category error) survives; the
shipped estimator does not. Round-4 must fix CRASH-1/CRASH-2 and carry forward
Fix-1's validated counterfactual terms (OR-1/OR-2/OR-3); the lab re-executes
verbatim when that lands. (A VM reboot killed one in-flight run at ~06:10 UTC;
the completed run above is the post-reboot clean execution.)

---

## (c) Pilot-substituted numbers (frozen snapshot `data_snapshot_20260913`)

Computed by `gse-discovery/repair02_pilot.py` from local parquet (no download).
Raw JSON: `gse-discovery/repair02_pilot_numbers.json`.

### N-41 (T7 power reality)
| Claim | Real |
|---|---|
| ~850 team-seasons 1999–2025 | **863** ✓ |
| test n ≈ 224 | **256** team-seasons 2018–2025 (t→t+1 pairs: 8 seasons × 32) |
| — | 383 team-seasons train era 1999–2010 |
| — | 14,612 team-games; median 16.0 / mean 16.93 games per team-season |

Verdict: their ~850 ✓. Test n is 256, not 224 — slightly *more* data than
claimed, same power-reality conclusion (honest prior NULL stands).

### N-36 (T3 pooled-HMM power calc) — their SD assumption was 3× off
| Claim | Real |
|---|---|
| pooled SD ≈ 0.4 | **1.266** EPA/play (train ≤2010, n=549,738 plays) |
| pooled n ≈ 11,000 team-games | **6,419** team-games train era (their 11k was 22 seasons; train era ≤2010 is 12) |
| ΔBIC>10 needs ΔEPA/play ≈ 0.05 | recomputed below |

Re-derivation (two-state Gaussian mixture vs one-state, Δk=4, strong-evidence
bar 2Δℓ − Δk·ln n > 10, per-obs gain ≈ δ²/8 for separation δ in σ units):
- Play-level (n=549,738): δ > 0.021σ ⟹ **ΔEPA/play ≈ 0.027 detectable**.
- Team-game-mean level (SD of team-game means = 0.362, n=6,419):
  δ > 0.167σ ⟹ **ΔEPA/play ≈ 0.06 in team-game means**.

So with the real SD, BIC can detect a *smaller* play-level separation than the
theorist's rough 0.05 — the design is adequately powered and a K*=1 verdict
would be an informative null, not a foregone conclusion. Their 0.05 was
conservative at play level. **N-36 substituted: pooled SD = 1.27
(not 0.4); detectable ΔEPA/play ≈ 0.03 (play level).**

### N-42 (play-level WPA SD, 4th downs, 1999–2010) — their guess was 2.7× off
| Claim | Real |
|---|---|
| SD ≈ 0.15 | **0.0550** (n=47,767 4th-down attempts) |
| — | by action: go 0.088 (n=6,066), kick 0.063 (n=10,871), punt 0.042 (n=30,830) |
| — | mean WPA: go +0.0033, kick −0.0021, punt −0.0027 |

### N-43 (go-vs-punt WPA effect) — close to their guess
| Claim | Real |
|---|---|
| ≈ 0.02 | raw mean diff **0.0060**; OLS-adjusted on (ydstogo, yardline_100, score_differential, game_seconds_remaining): **0.0158** (SE 0.00094, n=36,896) |

The OLS number is a pilot-scale association, not a causal estimate — which is
all a gate-setting pilot needs. 0.016 vs their 0.02: same order, theirs
slightly high.

### N-44 (Var(CATE) gate) — substituted
Their derivation logic: heterogeneity target h = 0.5·|effect|,
gate Var(CATE) > (h/2)². With pilot |effect| = 0.0158:
**gate = 1.57e-5** (theirs: 2.5e-5). Same ballpark; lab substitutes **1.6e-5**.
Note the derivation is a scale argument, not a formal power calculation —
acceptable as a screening gate, should be labeled as such. The lowered gate is
only safe in combination with the T9-D4 nuisance kills (AUC<0.60 or R²<0.03
⟹ DIE), which guard against estimation noise clearing it.

**Remaining unsourced:** N-30 → VERIFIED (see §a). N-36/N-41/N-42/N-43 →
substituted above. N-37/N-38/N-39/N-40/N-45/N-46/N-47 were SPECULATIVE design
choices, not empirical claims — no substitution needed.
---

## (d) Adversarial review: T3/T7/T9 repairs vs send-back-03 demands

### T3 (HMM) — READY (execute as specified)
| Demand | Repair | Lab check |
|---|---|---|
| D1 freeze one fit unit | pooled fit, team-seasons as separate chains, shared transition/emissions, per-team mean offsets, pooled BIC | ✓ ADDRESSED |
| D2 strike 70%, pooled selection + power | struck; BIC selection; K*=1 named outcome; power calc given | ✓ ADDRESSED (numbers substituted §c) |
| D3 opponent residualization | EPA residualized on defense rolling-4-game EPA allowed/play (LOOG) | ✓ ADDRESSED |
| D4 temporal-permutation shuffle gate | shuffle gate BEFORE duel; kill if K*≥2 persists with ΔBIC_shuffled ≥ 0.5·ΔBIC_original | ✓ ADDRESSED |
| D5 game-script control | \|sd\| at drive start as per-state covariate (primary) + \|sd\|≤8 restriction (robustness) | ✓ ADDRESSED |
| D6/D7/D8 minors | label sorting; KL<0.05 flat flag; train≤2010 / val 2011–17 / test 2018–25 | ✓ ADDRESSED |
| Duel | rolling-EPA(4) + Elo-OLS, ≥0.02 R², cross-fit/K-fold by season | ✓ KEPT |

Residual lab-side notes (not a repair round): (i) per-team offsets must be
per-team only (not per-team-state) so they cancel in ΔBIC — freeze the exact
BIC parameter count in the lab implementation; (ii) apply the franchise
mapping (OAK→LV etc.) to the team panel; (iii) "16 games" is 17 since 2021 —
use actuals. None touch the protocol's kill logic.

### T7 (topology) — READY (one lab-side disambiguation)
| Demand | Repair | Lab check |
|---|---|---|
| D1 Null A + Null B | Null A: 200 target-permutation reps, kill if observed < 95th pct; Null B: Gaussian clouds (matched mean/covariance/n) through FULL pipeline; BH k=2 | ✓ ADDRESSED with note |
| D2 strike trajectory language | struck; T7-alt deferred | ✓ ADDRESSED |
| D3/D4 train-only + franchises | train-only standardization; PI grid train-only; explicit franchise map | ✓ ADDRESSED |
| D5/D6/D7 power reality | stated (~400 PI feats, ~850 team-seasons); honest NULL prior; single-shot, NULL kills | ✓ ADDRESSED |

Disambiguation (lab freezes before running): the Null B kill rule as written
("observed not > Null B by at least the Null A threshold") is ambiguous about
the Null B reference statistic. Coherent implementation: t_A = 95th pct of
Null A increments; q_B = 95th pct of Null B increments; **kill unless
observed − q_B ≥ t_A**. Cost note: 400 full Rips→PI→ridge runs is the most
expensive item in the program — confirm feasibility/parallelization before
launching; not a protocol defect.

### T9 (causal forest) — READY (conditional on pilot substitution, done §c)
| Demand | Repair | Lab check |
|---|---|---|
| D1 Y := play-level WPA, gates re-derived | Y changed; derivation given with placeholders flagged for lab | ✓ ADDRESSED → gate substituted: **Var(CATE) > 1.6e-5** |
| D2 split punt/FG | τ_punt vs τ_FG, separate forests, sub-populations defined | ✓ ADDRESSED |
| D3 block permutation + cluster SEs | game-level blocks, within-game counts preserved; cluster-robust reported | ✓ ADDRESSED |
| D4 kill on weak nuisances + confounders + CH RV | AUC<0.60 or R²<0.03 ⟹ DIE; temp/wind/roof added; RV reported | ✓ ADDRESSED |
| D5 | resolved in audit | ✓ — |
| D6 cross-fit policy eval | disjoint folds | ✓ ADDRESSED |
| Duel | homogeneous-ATE + historical-frequency; ≥0.02 WP; AIPW cross-fit | ✓ KEPT |

Lab-side notes: freeze the sub-population boundary explicitly (punt region
yardline_100 > 40; FG region ≤ 40 — "mid-field" is vague as written). The
lowered Var(CATE) gate is safe *only* paired with the D4 nuisance kills, which
is how the repair structures it. Their "power calculation" is a scale
argument, not a formal power calc — fine as a screening gate.

### W1/W2/W3/W4
Accepted dead. No review needed. (W3's d_FR survives as descriptive only,
per the response §5 — noted, no action.)

---

## (e) Lab execution order — cheapest kill tests first

The theorist's own calibration update says their EVs are ~10× overconfident
(median |predicted|/|observed| ≈ 10×; sign wrong in 2 of 3 executed families).
Expect the majority to die. Order by cost per unit of kill-information:

1. **IRL round-4 code repair (theorist, zero lab compute).** The lab does not
   spend another cycle on IRL until code lands fixing CRASH-1/CRASH-2 and
   OR-1/OR-2/OR-3 (carry forward Fix-1's validated counterfactual terms;
   keep Prelec/D1/D3 machinery unchanged). Send the defect list (§b) back.
2. **T9 nuisance-gate pre-check (cheapest compute).** Fit propensity + outcome
   models on train era; if AUC < 0.60 or R² < 0.03 the family DIES before any
   causal forest is fit. A one-afternoon kill test.
3. **T3 selection + shuffle gate on train era.** Pooled BIC selection and the
   temporal-permutation gate can kill the regime interpretation before the
   expensive duel. The duel only runs if the gates pass.
4. **T7 Null B (+ Null A).** The theorist's own "guaranteed information" pick —
   but the most expensive item in the program (400 full pipeline runs).
   Confirm runtime/parallelization first. A clean negative here is a permanent
   reference result; that is its value.
5. **IRL Prelec execution** once round-4 code arrives — then γ̂, the boundary
   check, and the kill criteria (|γ̂−1|<0.02 ⟹ unidentifiable; γ̂∉(0,2] ⟹ kill;
   prereg γ̂∈[0.6,1.2] point 0.85) can be applied fairly.

Nothing in this round is publishable. IRL is KILLED as shipped (round-4 code
repair required before any re-execution); T3/T7/T9 are approved for lab
execution under the repaired protocols with the lab-side notes above frozen
into the run specs.
