# arxiv-program/research/2026-09-21/arxiv-deep/2132-lora-timesfm-equity-benchmark-directional-accuracy.md
## What it is (1-2 sentences)
A base-rate-honest benchmark study of LoRA-adapted TimesFM on equities: the headline finding is a *negative result* — an apparent ~80% directional accuracy was base-rate artifact (base rate ~0.70 in the bull window; pooled LoRA showed no directional skill over always_up at any horizon), and per-sector adapters were significantly worse than pooled. The real import is methodological: the base-rate-honest evaluation protocol (excess accuracy vs base-rate rules, paired McNemar/Diebold–Mariano tests with BH-FDR, frozen versioned artifacts, walk-forward folds, pre-registered hypotheses).
## Key metrics/methods (formulas where given, else "not specified")
- excess_acc = model accuracy − always_up accuracy on identical windows; block-bootstrap intervals; paired McNemar and DM tests under Benjamini–Hochberg FDR control
- Base: google/timesfm-2.5-200m-pytorch; LoRA rank 32/α64/dropout 0.05; context 512/horizon 128; variants: zero-shot, pooled LoRA, per-sector LoRA
- Baselines: always_up, random-walk, persistence (last return sign), AR(1) direct
- Splits: expanding walk-forward folds (train ≤2019/≤2021/≤2023, test 2020–2022/2022–2024/2024–2026); held-out tickers ~80/20 per sector, seed 42 fixed; per-series log+z-score on pre-target history only
- Reproducibility: run_meta.json manifests (seed, git commit, GPU, dependency freeze), two-run bit-identical gate
## Data sources named
NASDAQ-100 (100 stocks + QQQ, 10 sectors) and S&P 500 (501 stocks + 11 SPDR ETFs), daily split/dividend-adjusted closes 2005-01-01–2026-01-01, frozen checksum-verified artifacts
## Findings (numbers and facts, not vibes)
- Base rate ~0.70 in the 2014+ bull window; fine-tuned model scored *below* it — the ~80% was base-rate, not skill
- Pooled LoRA: no directional skill over the base rate at any horizon on either universe (excess accuracy centered on zero; negative at 6-month horizon)
- Per-sector significantly worse than pooled (DM p<0.001 on held-out S&P 500 at h=128) — specialization hurt
- Fine-tuning's only measurable benefit: significant point-error reduction vs zero-shot TimesFM — which still didn't beat naive baselines and conferred no tradeable directional edge; cautionary: better CRPS ≠ better pick P&L
- Limitations: single seed 42; NASDAQ-100 sector strata too thin; equities ≠ sports (market efficiency differs)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: evaluation honesty as mandatory infrastructure — build the GSE honesty harness: every experiment reports excess accuracy vs base-rate rules (always-favorite, always-home, always-under) + market-implied (closing line) baseline; paired McNemar/DM with BH-FDR; frozen checksum-versioned data artifacts; expanding walk-forward folds; held-out teams (expansion/relocated franchises) as the analog of held-out tickers; pre-registered confirmatory hypotheses (adoption gates become the hypotheses); re-score GSE v5.2.7's historical picks to find base-rate-artifact "edges"; improvement: extend to excess-CLV (base rate = "bet every favorite at close" P&L) — test whether zero-excess-accuracy models have positive excess CLV
## Engine-actionable? (yes/no + one-line what)
Yes — build the honesty harness (2–3 weeks) and re-score the engine (1 week); gate: harness reproduces the ~0.70 base-rate sanity check AND flags ≥1 currently-believed GSE edge as base-rate artifact (keep advisory if it reproduces but flags nothing; redesign if it can't reproduce the sanity check); any model whose only evidence is raw hit-rate without base-rate comparison is automatically REJECTED from live consideration.
