# Pre-registration: W1 / spectral-rhythm

**Author:** Motif (W1 worker)  |  **Date:** 2026-09-13
**Status:** PRE-REGISTERED (locked before any run on the test era)
**Protocol source:** `deepseek-move37-phase6-response-01.md` §4/W1 (DeepSeek Run ID MOVE-37-PHASE6-01)

> Rule (§4.1 of the program): pre-registration with kill criteria BEFORE every
> run. No HARKing. DeepSeek's §5 self-audit marks the W1 claims (35–38) as
> SPECULATIVE/INFERRED — this lab run treats them as pre-registered choices,
> not derived facts.

## 1. Estimand

The team-season **play-call rhythm signature**: the mean spectral power
(S_1, …, S_8) of within-drive binary pass/run sequences, where for each drive
the sequence s_1..s_P (1 = pass, 0 = run) is zero-padded to length 16 and its
discrete Fourier transform computed; power at frequency k is |F_k|²,
k ∈ {1..8} (DC component k=0 excluded — it is a pass-rate proxy and is already
a baseline feature). S_k is the mean power at frequency k across all drives of
the team-season.

The economic quantity of interest is the **incremental out-of-sample R²**
that the spectral features (S_1..S_8) add to a 3-feature baseline
(EPA/play, pace, pass_rate) for predicting **next-season EPA/play** at the
team level, evaluated on the 2018–2025 test era.

- Target variable: next-season (t+1) EPA/play per team (posteam perspective).
- Unit of observation: team-season (features from season t, outcome from t+1).
- Test-era population: team-seasons t ∈ {2018..2024} (outcome t+1 ≤ 2025).

## 2. Identification argument

OLS on the (team-season) design identifies the population linear projection of
y_{t+1} on (baseline_t, spectral_t) provided the regressors are exogenous to
the innovation in team strength from t to t+1. The identifying assumption is
weak: spectral power is a *within-drive sequencing* statistic, orthogonal to
the first-moment information (pass rate, EPA) by construction of the baseline.
The risk is not confounding but **no signal**: i.i.d. play-calling produces a
flat expected spectrum, and the protocol bets that deviations from flatness
(coordinated alternation at 3–5-play periods) carry durable coaching skill
that persists into next season's efficiency.

Finite-sample behavior at boundaries:

- **Short drives** (P=1): FFT of a length-1 binary sequence carries no
  sequencing information; its spectrum is flat up to the DC term. These drives
  dilute the signature but do not bias it. Sensitivity: re-run with P≥3
  filter; if the increment moves by > 0.01, report both and flag.
- **DC leakage**: zero-padding a non-stationary sequence leaks the mean into
  low k. Excluding k=0 handles the pass-rate proxy; residual leakage into k=1
  is part of the stated signature, not a bug.
- **Team-seasons with few drives** (expansion years, lockouts): the signature
  mean is noisier. This is handled by the era-split evaluation — noisy
  features cannot help out-of-sample.
- **Flat-surface diagnostic**: compute the cross-team-season coefficient of
  variation (CV) of the L2 norm ‖S‖₂. If CV < 0.05, the spectral signatures
  are indistinguishable across teams — no identification of rhythm
  differences — and the family dies before the duel.

## 3. Dumb-baseline duel spec

- Baseline: **baseline-2 OLS** — OLS of next-season EPA/play on this-season
  EPA/play + pace (plays/game) + pass_rate (3 features, intercept). The
  3-line baseline that would kill W1. (EPA-only OLS reported as context.)
- Metric: out-of-sample **R²** on the test era (higher is better).
- Test set: team-seasons t ∈ 2018–2025 (outcome t+1 ≤ 2025) — SAME rows for
  baseline and spectral models.
- Market duel: N/A — no market or public model prices *team-season* EPA/play
  forecasts; closing lines apply to games. Justification recorded. The
  relevant adversary is the dumb baseline; this is a discovery test, not a
  betting claim.
- Win condition: incremental R² = R²(spectral model) − R²(baseline) **≥ 0.02**
  on the test era.

## 4. Kill criteria (quantitative, falsifiable)

The experiment is KILLED if ANY of the following hold. No judgment calls.

1. Incremental R² over baseline-2 OLS on the 2018–2025 test era **< 0.02**
   (the protocol's own kill line; DeepSeek predicted ≥ 0.03, counted as
   SPECULATIVE).
2. Test-era baseline-2 R² itself ≤ 0 → the outcome is unmodelable and the
   duel is vacuous; report, do not rescue.
3. Permutation/placebo: the discovery statistic (test-era incremental R²)
   appears under the label-shuffled null (p_shuffle ≥ 0.05) → pipeline broken,
   not the world interesting.
4. Effect present only in the train era and absent in both val and test eras
   (regime artifact) → family dies.
5. Flat-surface diagnostic fires (CV of ‖S‖₂ < 0.05) → "no detectable rhythm
   structure"; family dies before the duel.
6. P≥3 sensitivity: incremental R² moves by > 0.01 when dropping 1–2-play
   drives → the result is short-drive artifact; report both, flag as fragile.

Dead families get a one-line obituary in the repo; survivors get deeper runs.

## 5. Analysis plan (locked)

- Estimator / pipeline: per-drive binary sequence → FFT (zero-pad 16) →
  power k=1..8 → team-season mean S_1..S_8. OLS (numpy lstsq, intercept):
  (a) baseline-2 (EPA/play, pace, pass_rate), (b) baseline-2 + 8 spectral
  features (all standardized on the train era). No tuning.
- Hyperparameters: none (OLS). Feature construction fixed by protocol.
- Era split: season-t assignment via `harness.era_split`: train t ≤ 2010 /
  validate 2011–2017 / test 2018–2025. Rows with missing outcome (t+1 not in
  data) dropped *before* splitting; the era of a row is its feature season t.
- Multiple comparisons: discovery verdict is a single primary comparison
  (spectral vs baseline-2, one threshold). The 8-bin structure is not tested
  bin-by-bin; no BH needed for the verdict. Bin-level correlations reported
  as descriptive only.
- Flat-surface diagnostics: (i) CV of ‖S‖₂ across team-seasons; (ii) median
  condition number of train design matrices; (iii) variance inflation of the
  8 spectral features on train (pairwise |r| > 0.95 flagged as degenerate).

## 6. Data snapshot & reproducibility

- Data snapshot: `~/workspace/gse-discovery/data_snapshot_20260913/` (frozen;
  no silent nflverse updates). **GATE:** MANIFEST.md not present at
  pre-registration time — the full analysis runs ONLY after the snapshot
  lands. Until then: synthetic smoke tests only.
- Code hash: recorded at run time in RUNLOG.md.
- Seed: 42 (all randomness derives from this via SeedSequence; DFT/OLS are
  deterministic; rng used only for permutation/placebo).
- Expected outputs: RUNLOG.md, REPORT.md, w1_duel_report.md (harness
  duel_report), w1_summary.json.

## 7. One-paragraph statement (draft, for the record)

NFL play-calling has a frequency structure: within a drive, teams do not call
pass/run as independent draws but as rhythmic sequences, and the rhythm — how
much power sits in 3–5-play alternation cycles — is a persistent coaching
property that forecasts next-season offensive efficiency beyond what current
efficiency, pace, and pass rate already explain. If true, a team whose drives
pulse pass-run-pass-run outperforms a team whose drives decay like white
noise, even with identical EPA — and nobody's public numbers capture this.

---
_Signed: Motif (W1 worker), 2026-09-13. Amendments after first run require a
new dated addendum; the original stays immutable._
