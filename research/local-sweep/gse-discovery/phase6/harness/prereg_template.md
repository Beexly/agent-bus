# Pre-registration: {{FAMILY}} / {{EXPERIMENT_NAME}}

**Author:** {{AUTHOR}}  |  **Date:** {{DATE}}
**Status:** PRE-REGISTERED (locked before any run on the test era)

> Rule (§4.1 of the program): pre-registration with kill criteria BEFORE every
> run. No HARKing. Fill every section; a protocol missing any of these goes
> back unread.

## 1. Estimand

{{ESTIMAND: the exact quantity being estimated, in one paragraph. A sharp
analyst who reads only this paragraph must know what number you are after.}}

- Target variable: {{TARGET}}
- Unit of observation: {{UNIT}} (play / drive / game / team-season / ...)
- Test-era population: {{POPULATION}}

## 2. Identification argument

{{IDENTIFICATION: why the estimator identifies the estimand, not a
confounded proxy. State the identifying assumptions explicitly. Include
finite-sample behavior at boundaries (small-n cells, edge of support,
grid corners) and how the estimator degrades there.}}

## 3. Dumb-baseline duel spec

- Baseline: {{BASELINE_NAME}} - {{BASELINE_DEF (exact, reproducible)}}
- Metric: {{METRIC_NAME}} ({{higher/lower is better}})
- Test set: {{TEST_SET_DESC}} - SAME observations for family and baseline
- Market duel: {{MARKET_SPEC or "N/A - no line exists for this estimand; compare to public model {{PUBLIC_MODEL}} instead"}}
- Win condition: {{WIN_CONDITION, e.g. "paired t-test p < 0.05 AND mean diff > 0 vs baseline"}}

## 4. Kill criteria (quantitative, falsifiable)

The experiment is KILLED if ANY of the following hold. No judgment calls.

1. {{KILL_1, e.g. "family mean diff vs dumb baseline <= 0 on the test era"}}
2. {{KILL_2, e.g. "paired t-test p >= 0.05 vs baseline"}}
3. {{KILL_3, e.g. "BH q-value > 0.05 across the family battery"}}
4. {{KILL_4, e.g. "placebo: discovery statistic appears under label-shuffle null (p < 0.05)"}}
5. {{KILL_5, e.g. "effect present in only one era (regime artifact)"}}
6. {{KILL_6, e.g. "vs closing line: mean diff <= 0 (interesting, not an edge)"}}

Dead families get a one-line obituary in the repo; survivors get deeper runs.

## 5. Analysis plan (locked)

- Estimator / pipeline: {{PIPELINE_DESC}}
- Hyperparameters: {{HYPERPARAMS}} (tuning uses nested CV on train/validate only)
- Era split: train <= {{TRAIN_END}} / validate {{TRAIN_END}}+1-{{VAL_END}} / test > {{VAL_END}} (via `harness.era_split`)
- Multiple comparisons: {{BH_PLAN, e.g. "BH across all 12 RD cutoffs at FDR 0.05"}}
- Flat-surface diagnostics: {{DIAGNOSTICS, e.g. "report NLL - ln(K), optimizer path, boundary hits"}}

## 6. Data snapshot & reproducibility

- Data snapshot: {{DATA_SNAPSHOT_PATH}} (frozen; no silent nflverse updates)
- Code hash: {{CODE_HASH}} (recorded at run time)
- Seed: {{SEED}} (all randomness derives from this via SeedSequence)
- Expected outputs: {{OUTPUT_FILES}}

## 7. One-paragraph statement (draft, for the record)

{{ONE_PARAGRAPH: what a discovery here would mean, stated as if true. If you
cannot write this paragraph, the theory is not ready for the lab.}}

---
_Signed: {{AUTHOR}}, {{DATE}}. Amendments after first run require a new dated
addendum; the original stays immutable._
