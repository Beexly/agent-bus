# Duel report: {{FAMILY_NAME}} vs {{BASELINE_NAME}} vs {{MARKET_NAME}}

**Date:** {{DATE}}  |  **Seed:** {{SEED}}
**Metric:** {{METRIC_NAME}} ({{DIRECTION: higher/lower is better}})
**Test set:** {{TEST_SET_DESC}} (frozen snapshot {{DATA_SNAPSHOT}})
**n:** {{N}} observations (paired, same test set)

> Copy this template when hand-writing a duel, or let `harness.duel_report()`
> generate it. Every `{{...}}` field must be filled; a duel with blanks is
> not a duel.

## Dumb-baseline spec

- **Baseline name:** {{BASELINE_NAME}}
- **Baseline definition (exact, reproducible):** {{BASELINE_DEF}}
  e.g. "OLS on (down, distance, yardline) only, fit on train era" /
  "Elo with k=20, HFA=65, fit on train era" / "always-punt WP heuristic".
- **Why this baseline is the right bar:** {{BASELINE_JUSTIFICATION}}

## Paired results (positive diff = family better)

| comparison | family mean | family median | mean diff (95% CI) | win rate | sign-test p | paired t p |
|---|---|---|---|---|---|---|
| family vs {{BASELINE_NAME}} | {{F_MEAN}} | {{F_MED}} | {{DIFF}} ({{CI_LO}}, {{CI_HI}}) | {{WIN_RATE}} | {{SIGN_P}} | {{T_P}} |
| family vs {{MARKET_NAME}} | {{F_MEAN}} | {{F_MED}} | {{DIFF_M}} ({{CI_LO_M}}, {{CI_HI_M}}) | {{WIN_RATE_M}} | {{SIGN_P_M}} | {{T_P_M}} |

## Detail

- Family vs {{BASELINE_NAME}}: W {{W}} / L {{L}} / T {{TIES}}; median diff {{MED_DIFF}}, std of diff {{STD_DIFF}}.
- Family vs {{MARKET_NAME}}: W {{W_M}} / L {{L_M}} / T {{TIES_M}}; median diff {{MED_DIFF_M}}, std of diff {{STD_DIFF_M}}.
- **Era stability:** train-era fit; validate-era {{VAL_RESULT}}; test-era {{TEST_RESULT}}. Structure present in all eras? {{ERA_STABLE_YN}}.
- **Permutation/placebo:** {{PERM_P}}, {{PLACEBO_VERDICT}}.
- **BH status:** {{BH_Q}} across {{BH_M}} family-battery tests.

## Verdict (one line, deterministic)

**{{VERDICT}}**

Verdict vocabulary (use exactly one):
- `KILL` - fails to beat the dumb baseline on the same test set.
- `INTERESTING, NOT AN EDGE` - beats the baseline but not the closing line.
- `PROMOTE (candidate)` - beats baseline AND market with paired significance; still "under test" until era-split, placebo, and BH all clear.

---
_Re-run: code hash {{CODE_HASH}}, data snapshot {{DATA_SNAPSHOT}}, seed {{SEED}}._
