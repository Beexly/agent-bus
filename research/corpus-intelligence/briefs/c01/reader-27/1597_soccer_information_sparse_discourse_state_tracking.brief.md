# arxiv-program/research/2026-09-21/arxiv-deep/1597-soccer-information-sparse-discourse-state-tracking.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2106.01972 (Zhang & Eickhoff, Brown University, 2021): the SOCCER dataset and baselines for discourse state tracking in information-sparse sports commentary (2,263 soccer matches, ~136k commentary paragraphs, events rare vs. chatter), comparing a BERT+GRU classifier against a GPT-2 generative model. Verdict: ADAPT — the sparse-state-tracking protocol, sparsity-ablation quantification, and joint-output design transfer to GSE's NFL text-stream event/injury detection.
## Key metrics/methods (formulas where given, else "not specified")
- Information density ID = (# state changes) / (# turns/steps). SOCCER ID = 0.19 (state update only every ~5 timestamps) vs MultiWOZ2.1 1.05, OpenPI 3.8–4.3.
- (a) GRU classifier: frozen pretrained BERT sentence embeddings of commentary c_t → 1-layer GRU → 2 feed-forward layers; 10 team-level event variables (5 types × 2 teams) mapped to a 10-bit joint output to model event co-occurrence (not 10 independent binaries).
- (b) GPT-2: commentary + event types + player names concatenated (event names as single tokens like `goal_home`); next-token fine-tuning on HuggingFace weights; greedy decoding at inference (beats beam search / top-k per simpleTOD findings).
- Validation: 70/15/15 split by match (no timestamp overlap); accuracy and positive recall (recall over event occurrences) on all 10 variables; per-event-type precision/recall/F1 on positives only.
- Sparsity ablation: 0%/20%/40%/60%/80% negative-comment replacement at constant 25,934 comments per subset.
- Naive majority-class baseline accuracy = 0.9766 (97.66% negatives) — accuracy is meaningless under this imbalance; positive recall is the real metric.
## Data sources named
SOCCER: 2,263 soccer matches (UCL, Europa League, Premier League, Serie A, 2016–2020) from goal.com; 135,805 timestamped English commentary paragraphs + 31,542 in-game event records; 5 event types × 2 teams (goal 6,381; assist 4,305; yellow 8,268; red 360; substitution 12,228); 3,507 unique player names; lineups included. Schema per timestamp t: commentary c_t → state s_t = {event_{i,j}(t) ∈ {yes/no} at team level, or player name/none at player level}. Templated score lines removed to block leakage; 171 ill-formed matches dropped. Dataset + collection code released.
## Findings (numbers and facts, not vibes)
- Both models barely exceed the naive baseline on accuracy (GRU 0.9775, GPT-2 0.9759 team-level; GPT-2 player-level 0.9670) — but positive recall is poor: GRU 0.3990, GPT-2 0.4855 team-level; GPT-2 player-level only 0.0775.
- Per-type F1 (GPT-2, home/away): goal 0.69/0.13, assist 0.58/0.09, yellow 0.64/0.11, red 0.00/0.00 (360 samples → GPT-2 detects zero), switch 0.67/0.01.
- Sparsity ablation: as chatter share rises 0%→80%, accuracy rises (more true negatives) while positive recall falls 0.49→0.44 (GPT-2) — sparser discourse measurably hardens event detection.
- Generative-model guest-side collapse (GPT-2 guest F1 ≈ 0.01–0.13 vs home 0.58–0.69) — unexplained asymmetry.
- Red card completely undetected by GPT-2 (360 samples).
- Limitations: no human-labeled events (programmatic extraction from goal.com records); minute-level alignment noisy; BERT frozen vs GPT-2 fine-tuned — not apples-to-apples.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Event/injury detection from NFL text streams. GSE ingests chatter-heavy NFL news/commentary (beat writers, X) — the paper's sparsity ablation gives a calibrated expectation of detection degradation and the protocol to measure it; the concrete spec is: build timestamped NFL beat-writer/X commentary aligned to official play-by-play events (injuries, turnovers, lineup changes), train a classifier over rolling text windows to flag state changes, evaluate with positive recall at fixed precision (not accuracy).
- OTHER: The 10-bit joint-output trick (modeling correlated events jointly rather than independent binaries) transfers to correlated NFL events (e.g., injury + substitution co-occurring).
- TRUST-SIGNAL: State-ontology extension suggestion includes injury, ejection, weather delay, coach challenge — and positive-recall-gated text flagging is the trust-signal intake mechanism for dynamics quotes; the guardrails (evaluate on positive recall, sparsity ablation) define how to validate it.
- OTHER: Aligns with ledgers 1594/1595 (same commentary→event problem family) but at lower information density with a published reusable dataset.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the sparse-state-tracking protocol for NFL news/commentary→event detection: timestamped text corpus aligned to official play-by-play, positive-recall gating under class imbalance, the sparsity-ablation measurement, and joint multi-label output for correlated events; pass gate is positive recall ≥ 0.5 at precision ≥ 0.6 on a held-out month.
