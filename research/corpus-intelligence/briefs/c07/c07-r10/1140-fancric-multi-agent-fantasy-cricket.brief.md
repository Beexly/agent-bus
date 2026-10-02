# arxiv-program/research/2026-09-21/arxiv-deep/1140-fancric-multi-agent-fantasy-cricket.md
## What it is (1-2 sentences)
FanCric (arXiv:2410.01307, Bhatnagar 2024) is a six-LLM-agent pipeline (Supervisor → Researcher → Career Profiler → Form Assessor → Strategizer → Selector → Evaluator) that builds fantasy cricket lineups, tested on a single IPL match against a prompt-engineering baseline and 12.7M real crowd entries. Ledger verdict: ADAPT — adopt the qualitative context-agent architecture for NFL DFS, not the cricket specifics.
## Key metrics/methods (formulas where given, else "not specified")
No equations (LLM-prompted system). Method: LangGraph orchestration; agents gather venue/weather (open-meteo API), pitch reports (Tavily agentic search), odds (oddsportal.com), career stats (Kaggle/official IPL, ESPN Cricinfo IDs instead of names to avoid LLM name bias); Selector refines teams with GPT-4o (stronger model than the GPT-4o-mini used elsewhere) with chain-of-thought rationales; Evaluator backtests on fantasy points. Metrics: total points, percentile rank vs crowd distribution, hit rate vs ex-post optimal "Dream Team" (832.5 pts), win rate (Dream11 top-67% refund rule).
## Data sources named
One IPL 2023 match (Lucknow Super Giants vs Mumbai Indians, May 16 2023); 13.8M Dream11 entries scraped via Android emulator (12.7M unique after dedup); IPL career stats via Kaggle + official IPL site; ESPN Cricinfo player IDs; weather via open-meteo.com API; pitch reports via Tavily search; odds via oddsportal.com.
## Findings (numbers and facts, not vibes)
- Crowd baseline: mean 501.54, std 89.02, median 512, max 811.5 (12.7M entries); distribution left-skewed, KS statistic 0.14, p=0.0.
- Prompt-engineering (n=10): mean 512.9 (50.4 percentile), win rate 70%; best team 634 (95.1 percentile).
- FanCric (n=10): mean 528.55 (58.6 percentile), win rate 80%; best team 644 (96.3 percentile), 6/11 Dream Team players.
- Ablation n=20: FanCric avg 528.5 pts / 56.9 avg rank / 75% win / 99.9 pct best (722 pts) vs prompt baseline 481.6 / 42.9 / 50% / 95.9. At n=1 prompt engineering won (535.5 vs 522.5).
- Key confound: Selector used GPT-4o vs GPT-4o-mini for the baseline — model-strength confound, not a pure architecture effect. n=1 match, no significance tests, temperature=1, no repeats.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- DFS context ingestion pattern: GameContext/FormProfiler/NarrativeStrategist agents map directly onto a qualitative front-end for GSE's MILP DFS optimizer (SCHEME — lineup-construction pipeline design).
- TRUST-SIGNAL caution: the paper's own ledger flags that LLM narrative signals are high-variance — any adaptation needs reliability-weighted shrinkage (the ledger proposes a Bayesian prior layer), not raw narrative multipliers.
## Engine-actionable? (yes/no + one-line what)
Yes — wire a DFS context-agent layer (weather, injury news, lines/totals, form splits, matchup notes as structured JSON boost/penalty multipliers) in front of GSE's existing MILP optimizer, gated on ≥3 percentile-point lift over projection-only lineups in a 17-week backtest.
