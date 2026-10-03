# ops/MURPHY_RES_AND_BRIER_MIN.md
## What it is (1-2 sentences)
A founder-plain-English explainer of the Brier score and the Murphy decomposition (uncertainty / reliability / resolution), with live measured values, the GSE PROVEN eligibility floor (Brier ≤ 0.22), and an honest, prioritized plan for minimizing Brier by raising RES first.

## Key metrics/methods (formulas where given, else "not specified")
- **Brier score (verbatim):** `Brier = average of (p − y)²`, where p = forecast probability and y = outcome (1 = win, 0 = loss). Range 0–1; lower is better. Perfect always-right certainty → near 0. Coin-flip 50/50 → about 0.25.
- **GSE floor: Brier ≤ 0.22** before PROVEN can even be considered.
- **Murphy decomposition (verbatim identity):** `Brier ≈ REL − RES + UNC`, computed by sorting forecasts into bins (e.g., 10 equal-width buckets of p).
- Table (verbatim):
  - **UNC** uncertainty = baseRate × (1 − baseRate), want: context only, live ~0.25
  - **REL** reliability = how wrong each bin's average p is vs actual win rate, want: low, live ~0.026
  - **RES** resolution = how much each bin's actual win rate differs from overall average, want: high, live ~0.002
- **Murphy RES in one sentence (verbatim):** "When we group picks by confidence, do those groups actually win at different rates?" If every group wins ~50%, RES ≈ 0 — the model is not ranking.
- **Back-of-envelope derivation (verbatim logic):** If UNC ≈ 0.25 and some residual REL ≈ 0.02 remain, then to hit Brier ≤ 0.22 you need roughly **RES ≳ 0.03** (order of magnitude) — **~15×** live 0.002.
- Minimization plan (honest, prioritized): 1) Raise RES (main job): fewer, better picks; better ranking score; independent model probabilities; sport models; pause dead markets. 2) Lower REL (secondary): Platt / temperature / isotonic — only after RES moves; "maps alone cannot unlock PROVEN at RES≈0." 3) UNC: fixed by how often underdogs win in the sample; "not something we 'tune' with theater."

## Data sources named
- None named as data sources (the file speaks of "each settled pick" and "the sample" without identifying feeds).

## Findings (numbers and facts, not vibes)
- Live measured values: UNC ~0.25, REL ~0.026, RES ~0.002.
- Live RES 0.002 = "almost no ranking power" — the confidence bins do not win at different rates.
- GSE floor: Brier ≤ 0.22 before PROVEN is even considered.
- To reach Brier ≤ 0.22 with UNC≈0.25 and residual REL≈0.02: RES must rise to ≳ 0.03, i.e., ~15× the live 0.002.
- Recalibration maps (Platt/temperature/isotonic) are explicitly secondary: they lower REL but cannot fix RES≈0 — so calibration alone can never unlock PROVEN from this state.
- Autonomy rules: selective + pause + proven-path plan automatic; metrics cron automatic; PROVEN publish only when floors + GREEN×K + AUTO_PUBLISH policy — never faked; founder needs no clicks for measurement or filtering.
- CONTRAST vs LAUNCH_MAX_PATH_2026-08-09: that file's 2026-08-09 snapshot read Brier 0.275 / ECE 0.112 / RES 0.002. The Murphy file's live values (REL ~0.026, RES ~0.002, UNC ~0.25) are consistent-ish with Brier ≈ 0.026 − 0.002 + 0.25 = 0.274 ≈ 0.275, so they describe the SAME underlying state — no contradiction, the identity holds numerically. (ECE 0.112 appears only in the launch snapshot; the Murphy file does not mention ECE — INFERENCE: ECE ≈ 0.112 vs REL ≈ 0.026 suggests ECE and Murphy-REL are different error measures on the same sample, do not conflate them.)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Serves the **calibration/sizing** program directly: the Brier ≤ 0.22 floor and the RES ≳ 0.03 target (15× live) are the hard numeric gates for any published/proven claim; the identity Brier ≈ REL − RES + UNC is the diagnostic to run on every settled-pick batch before trusting any record.
- [TRUST-SIGNAL] "Maps alone cannot unlock PROVEN at RES≈0" serves the **trust-target intake** program: any track record whose underlying model had RES≈0 is a ranking-powerless record even if its REL looks clean — demand RES, not just calibration curves, before trusting a source's history.
- [OTHER] The raise-RES playbook (fewer, better picks; better ranking score; independent model probabilities; sport models; pause dead markets) serves **calibration/sizing**: each tactic is a lever that moves RES, and "pause dead markets" / "fewer, better picks" are selectivity rules the engine can implement immediately (ties to the DFS/props selectivity posture).
- [OTHER] GREEN×K + AUTO_PUBLISH policy + "never faked" autonomy serves the **tracking lane**: PROVEN claims only become intake-worthy after K consecutive green measurements — a single green read is insufficient.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the Murphy decomposition (Brier ≈ REL − RES + UNC, 10 equal-width bins) as a standing diagnostic on every settled-pick batch, with RES ≳ 0.03 as the unlock target and Platt/temperature/isotonic reserved for the post-RES stage.

**References named:** Platt scaling, temperature scaling, isotonic regression (recalibration methods); no external papers or datasets cited.
