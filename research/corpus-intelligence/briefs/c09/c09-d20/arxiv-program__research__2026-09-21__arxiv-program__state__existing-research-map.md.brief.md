# arxiv-program/research/2026-09-21/arxiv-program/state/existing-research-map.md
## What it is (1-2 sentences)
Dedup/coverage map of Garrett's entire existing sports research (468 repo files, ~25 Gmail threads, ~50 Drive files) built 2026-09-21 so the 500-paper arXiv sweep doesn't duplicate work: lists already-covered metrics/methods, papers read in depth, and 15 explicit gap priorities.

## Key metrics/methods (formulas where given, else "not specified")
"Already covered" list (methods only, no new-paper value unless overturned): EP as 7-event probability vector; CPOE as Bernoulli residual + shrinkage (nflfastR cp_model = XGBoost; feature list UNVERIFIED); DVOA/DAVE (50/30/20 prior-year splits, 83%/98% early blend); turnover occurrence-vs-recovery split (Stuart 0.00/-0.02); EPA forward-validity (pass 0.53-0.61 vs rush 0.13-0.19); 4th-down correction literature; 27-family NGS metric taxonomy; calibration stack (CQR, grouping loss, temperature scaling, LRD, ECE-by-slice).

## Data sources named
nflverse (gse-lab computed 15 metric families from it: team metrics, down splits, EPA distributions, turnover luck, QB aggressiveness, etc.); 29 CSVs + 15 metric families; FTN DVOA docs/charting; benbbaldwin objective ratings v2/v3; SumerSports PRWR edge; PFF double-team rate; Statyx coverage/run-type matchups; FantasyPros/ESPN/CBS/NumberFire/RotoGrinders/FantasyLabs consensus; DK Playbook; 86+ X analyst accounts; Gmail (Grok daily briefs noreply@x.ai, Codacy, Copilot); Drive (58-paper dossiers, 5 Deep Research reports as Google Docs); nflverse load_nextgen_stats; Big Data Bowl tracking sets.

## Findings (numbers and facts, not vibes)
- Repo corpus: 468 files across dated dirs 2026-09-10 → 2026-09-21 + named dirs; AGENTS.md = 3,685 lines with benchmark inventory.
- Dedup: 7 repo-covered arXiv papers + 57 Drive-dossier papers (64 IDs); 41 overlap the fetched corpus — marked SKIP.
- EPA forward-validity: pass EPA 0.53-0.61 vs rush EPA 0.13-0.19.
- Turnover luck: Stuart 0.00/-0.02 forced-not-recovered rule.
- Pressure vs sack conversion R²<0.005; STRAIN r=0.8545.
- DAVE early blend 83%/98% Week-1 2026; FanDuel scoring 0.5 PPR verified.
- NGS profile deep-dive: 48 posts, 27 metric families, 2026 additions: Run Scheme Classification, Run Blocking Matchups, Route Classification 2.0.
- 15 gap priorities incl: Kelly sizing (mentioned 12×, zero papers read), nflfastR CPOE/EP feature specs (UNVERIFIED), EPA forward-validity peer review (biggest literature gap), DFS contest-theory, referee/crew effects on totals (repo has MNF totals work, no academic papers), Hawkes/self-exciting models (mentioned 1×), travel/altitude (no verified coefficient).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB aggressiveness metric computed in gse-lab; CPOE as Bernoulli residual (QB accuracy over expected).
- COACHING: 4th-down aggressiveness + correction literature; referee crews MNF totals work (2026-09-19-dk-week2).
- OL: pressure rate / PRWR / PBWR (ESPN, Sumer, PFF — 3 public sources); PFF double-team rate.
- SCHEME: NGS Run Scheme Classification / Route Classification 2.0 / Run Blocking Matchups (2026 additions); defense scheme deep work (Week 2 DK deep/).
- TRUST-SIGNAL: nothing direct.
- OTHER: 86+ X analyst accounts inventoried (reverse-engineering mission on 10 analyst accounts); Kalshi futures blends; turnover luck; calibration stack; Kelly gap.

## Engine-actionable? (yes/no + one-line what)
Yes — the canonical dedup list (64 papers to skip, methods not worth re-reading, 15 ranked gap priorities with Kelly sizing and EPA forward-validity at the top) directly steers the engine's research program.
