# arxiv-program/research/2026-09-21/arxiv-deep/2133-contamination-free-holdout-domain-familiarity.md
## What it is (1-2 sentences)
arXiv:2609.10357v1 (Moghadasi & Ghaderi, 2026): evaluates 13 time-series forecasters (4 classical, 3 trained-per-dataset, 6 pretrained TSFMs) on a strictly contamination-free holdout — every observation published after the release date of the most recently released model — and finds pretraining *domain familiarity* survives the holdout, with the largest gains coming on series from the pretrained model's own corpus domain. The verdict of the ledger is ADAPT: GSE must adopt corpus disclosure + domain holdouts relative to disclosed corpora, because recency alone does not decontaminate evaluation.

## Key metrics/methods (formulas where given, else "not specified")
- Rank-based comparison with multiple-comparison rank intervals; Friedman test per group + corrected paired post-hoc tests (not just decimal-place metric gaps).
- Mann–Whitney U for the within-family familiarity test (TimesFM vs. Chronos on Wikipedia vs. non-Wikipedia series).
- Seasonal strength and spectral entropy measured on input windows as candidate intrinsic explanations of the familiarity advantage — both rejected (seasonal strength, if anything, negatively associated with the advantage).
- Core metric: MASE (reported as relative reduction vs. best classical baseline).
- Cost measured alongside accuracy on identical hardware (claimed as a first for this literature).
- Protocol: the entire test window postdates the last model's release date, so window memorization is impossible by construction.

## Data sources named
- Contamination-free holdout: 7 forecasting groups from 5 domains, all observations published after the most recently released evaluated model's release; rebuildable without API key from continuously published institutional sources; fetchers released to rebuild the exact panel.
- Groups: Wikipedia pageviews (500 series each of daily, weekly, monthly), Weather (300 hourly), Air quality (379 hourly), Electricity (46 hourly), Exchange rates (29 daily), plus 2 more groups (7 total).
- Forecasters: 13 total — 4 classical (incl. Theta, seasonal naive), 3 trained-per-dataset, 6 pretrained (incl. TimesFM-3, Chronos family, Moirai-2).

## Findings (numbers and facts, not vibes)
- Pretrained models win 5 of 7 groups — but lose one to a **Theta baseline** (Electricity) and on daily exchange rates are **indistinguishable from seasonal naive** (Friedman test doesn't reject; every method ties).
- Largest gain: **28% lower MASE than the best classical method**, on weekly Wikipedia pageviews — TimesFM's pretraining domain (same source, same granularities, differing only in time window).
- Within-family familiarity contrast: TimesFM outranks Chronos by **−0.53 on Wikipedia vs. −0.09 everywhere else** (1,500 vs. 754 series, **Mann–Whitney p < 10⁻⁵**) — the advantage tracks corpus familiarity, not series properties.
- TimesFM's authors describe Wikipedia pageviews as the bulk of its pretraining corpus — the familiarity correlate.
- Negative results: seasonal strength and spectral entropy do **not** explain the familiarity pattern; most published-style gaps between leading pretrained models fall inside multiple-comparison rank intervals — i.e., leaderboard differences between leading models are often noise.
- Limitations stated in the file: only 7 groups / 5 domains; sports is not among them, so the familiarity effect size on sports sequences is unmeasured. The holdout is contamination-free for *windows* but not for *domains* — the paper demonstrates the problem more than solving it; domain holdouts relative to disclosed corpora are prescribed, not fully constructed. "Rebuildable without API key" depends on institutional sources remaining stable; cost reporting is hardware-specific.
- GSE-relevant framing in the ledger: if GSE pretraining corpora include public NFL data (nflverse, odds histories), then "zero-shot" sports evaluations are familiarity-contaminated by construction. The 2026-09-17 benchmark audit covers data quality, not pretraining overlap.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER (evaluation protocol / calibration of evaluation claims):** The paper mandates a disclosure + holdout discipline for GSE: corpus manifest (sources, date ranges, series counts) for every sports-TSFM ledger; holdout *domains* defined relative to the corpus rather than just later time windows — e.g., pretrain on NFL regular season and hold out playoffs (different domain: elimination dynamics); pretrain 2002–2019 and hold out COVID/opt-out seasons as regime holdouts; hold out entire stat categories (e.g., no special-teams series in pretraining). Serves the **calibration/sizing** and **tracking** programs: any internal model comparison must report rank intervals, not decimal places (most gaps are noise), and a familiarity audit — comparing two backbones with different pretraining corpora on identical sports series — must report the familiarity gap rather than marketing it as generalization.
- **OTHER (acceptance gate, diagnostic not performance):** The acceptance gate treats the familiarity gap as diagnostic: no gate on the gap's size, but any "zero-shot" claim on a domain present in the pretraining corpus is automatically relabeled "familiar-domain" and rejected as a generalization claim; any backbone whose entire evaluation is a post-release temporal holdout with no domain holdout is rejected as insufficient evidence.
- **OTHER (improvement direction):** Familiarity-decay experiment hypothesis — pretrain ablated corpora with 0%/10%/50%/100% sports fraction and plot domain-holdout performance vs. sports fraction; the Wikipedia effect came from "bulk of corpus," so familiarity gains may saturate fast and a 25%-sports corpus may capture most benefit while keeping a genuine held-out sports domain. UNCERTAIN: this saturation curve is hypothesized, not measured in the paper.

## Engine-actionable? (yes/no + one-line what)
**Yes** — ADOPT the disclosure+holdout protocol: every sports-TSFM ledger gets a corpus manifest, both temporal and domain holdout numbers, and rank-interval comparisons; 1–2 engineer-weeks for manifests + holdout definitions, then ongoing discipline.
