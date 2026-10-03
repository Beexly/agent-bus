# arxiv-program/research/2026-09-21/arxiv-deep/2133-contamination-free-holdout-domain-familiarity.md

## What it is (1-2 sentences)
Full-paper read (PDF-extracted) of "A Later Test Set Is Not a New Domain" (arXiv:2609.10357v1, Naser Moghadasi & Ghaderi, 2026): a time-series foundation-model benchmark study asking whether TSFMs' strong scores reflect generalization or pretraining contamination — and showing that a hold-out postdating every model's release (window memorization impossible) still leaves a pretraining-familiarity advantage. Lane: timeseries_foundation. Ledger verdict ADAPT — the contamination-free protocol plus the domain-familiarity finding directly constrain how GSE may pretrain and evaluate sports TSFMs: recency alone doesn't decontaminate; GSE needs domain holdouts stated relative to disclosed corpora.

## Key metrics/methods (formulas where given, else "not specified")
- Protocol: place the entire test window after the last model's release date — nothing in the hold-out could have been memorized.
- Analysis: rank-based comparison with multiple-comparison rank intervals and corrected paired tests (Friedman + post-hoc); cost measured alongside accuracy on identical hardware.
- Familiarity test: within-pretrained-family comparison on identical series (series difficulty cancels) — TimesFM vs. Chronos on Wikipedia vs. everywhere else, correlating advantage with corpus familiarity (Wikipedia pageviews are the bulk of TimesFM's pretraining corpus); Mann–Whitney U for the contrast.
- Seasonal strength and spectral entropy measured on input windows as candidate intrinsic explanations — both rejected as explanations for the pattern.
- Assumption: post-release publication ⇒ no memorization of the *window* (true); but *domain* familiarity survives — the protocol demonstrates the problem more than it solves it (domain holdouts relative to disclosed corpora are prescribed, not fully constructed).

## Data sources named
Contamination-free hold-out: 7 forecasting groups from 5 domains, every observation published after the newest model's release, rebuildable without an API key from continuously published institutional sources — Wikipedia pageviews (500 series each: daily/weekly/monthly), Weather (300 hourly), Air quality (379 hourly), Electricity (46 hourly), Exchange rates (29 daily), +2 more groups (7 total). Forecasters: 13 total — 4 classical, 3 trained-per-dataset, 6 pretrained (incl. TimesFM-3, Chronos family, Moirai-2). Fetchers released to rebuild the exact panel from keyless sources.

## Findings (numbers and facts, not vibes)
- Pretrained models win 5 of 7 groups — but lose one to a **Theta baseline** (Electricity) and on daily exchange rates are **indistinguishable from seasonal naive** (Friedman doesn't reject; every method ties).
- Largest gain: **28% lower MASE than the best classical method**, on weekly Wikipedia pageviews — TimesFM's pretraining domain (same source, same granularities, differing only in time window).
- Within-family: TimesFM outranks Chronos by **−0.53 on Wikipedia vs. −0.09 everywhere else** (1,500 vs. 754 series, **Mann–Whitney p < 10⁻⁵**) — the advantage tracks corpus familiarity, not series properties.
- Negative results: seasonal strength and spectral entropy do *not* explain the pattern (seasonal strength if anything negatively associated); most published-style gaps between leading pretrained models fall inside multiple-comparison rank intervals — i.e., leaderboard differences are often noise.
- Cost: reported alongside accuracy on identical hardware — a first for this literature (hardware-specific; relative costs transfer, absolute don't).
- Limitations from the ledger: only 7 groups/5 domains; sports not among them — familiarity effect size on sports sequences unmeasured; "rebuildable without API key" depends on institutional-source stability.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: this is an evaluation-integrity paper — it threatens the naive reading of every TSFM ledger in the lane: if GSE's pretraining corpora include public NFL data (nflverse, odds histories), then "zero-shot" sports evaluations are familiarity-contaminated by construction. Mandates: (1) a published pretraining-corpus manifest per backbone (sources, date ranges, series counts); (2) domain holdouts relative to the corpus, not just later windows (e.g., pretrain on regular season, hold out playoffs; hold out COVID/opt-out seasons as regime holdouts; hold out whole stat categories); (3) any "zero-shot" claim on a corpus-present domain relabeled "familiar-domain"; (4) rank intervals, not decimal places, for internal model selection — most leaderboard gaps are noise; (5) a familiarity audit replicating the within-family test (two backbones, different corpora, identical sports series).
- OTHER: the familiarity-decay improvement experiment — ablate sports-fraction of pretraining corpora (0/10/50/100%) and plot domain-holdout performance vs. sports-fraction — tests whether familiarity saturates fast (the Wikipedia effect came from "bulk of corpus"), letting GSE keep a genuine held-out sports domain while familiarizing only chosen subdomains.

## Engine-actionable? (yes/no + one-line what)
Yes — ADOPT the disclosure+holdout protocol as mandatory: no sports-TSFM result reported internally without (i) a corpus manifest, (ii) both temporal AND domain holdout numbers, (iii) rank-interval (not decimal) comparisons; effort ~1–2 engineer-weeks for manifests + holdout definitions, then ongoing discipline.
