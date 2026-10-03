# arxiv-program/research/2026-09-21/arxiv-deep/2091-biodisco-multi-agent-hypothesis-generation.md
## What it is (1-2 sentences)
Ke et al. (2025, arXiv:2508.01285): BioDisco, a multi-agent hypothesis-generation pipeline that grounds hypotheses in dual-mode evidence (knowledge graphs + literature retrieval), refines them through Scientist → Critic → Reviewer agents with a decision-module score threshold, and validates via temporal "future discovery" evaluation plus Bradley–Terry paired comparisons; file verdict is ADAPT as a rigor layer for GSE's discovery loop (flagged as a MOVE-37 gap).
## Key metrics/methods (formulas where given, else "not specified")
- Pipeline: planner oversees Explorer/Background agents (KG + literature queries) → Scientist agent integrates evidence into hypotheses → Critic scores novelty/verifiability/relevance/significance (numerical + strengths/weaknesses, per Qi et al. 2024) → Reviewer diagnoses deficiencies and prescribes refinement (deeper KG queries, refined literature search, topic re-alignment) → decision module collects hypotheses above threshold.
- Temporal evaluation: generate hypotheses using only pre-cutoff data/literature, test whether they imply relationships discovered after the cutoff (Sybrandt et al. rediscovery paradigm).
- Bradley–Terry paired comparisons with ties as half-wins; Davidson (1970) tie-explicit extension fitted separately with similar results; order effects controlled.
- Packaged as pip tool: pypi.org/project/biodisco; github.com/yujingke/BioDisco.
## Data sources named
Biomedical knowledge graphs + automated literature retrieval (PubMed-style). Evaluation: two held-out "future discovery" datasets; human-expert questionnaires on CVD + immunology cases (Tables 8–9). Baselines: ablated configurations "representative of existing agentic architectures."
## Findings (numbers and facts, not vibes)
- Reported qualitative superiority in novelty and significance vs ablated configurations; classifier agent on generated hypotheses achieved "high precision and recall" (unquantified in sections read) at detecting relational signals (Table 1).
- Davidson tie-extension results "very similar" to half-win treatment (not presented).
- Limitations noted in file: KG/literature snapshots must be strictly pre-cutoff or temporal test is void; Critic scores are LLM-judged with no human-score correlation reported; biomedical-to-sports transfer is analogical; file recommends the Critic be a deterministic backtest gate, not an LLM judge.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Dual-mode evidence grounding for hypotheses: structured data check (nflverse/FTN base rates) + literature check (docs/research corpus novelty search) before compute (TRUST-SIGNAL)
- Critic/Reviewer pre-execution screen to kill bad hypotheses cheaply; deterministic backtest as final arbiter (TRUST-SIGNAL)
- Temporal rediscovery discipline = walk-forward/held-out-season validation as "future discovery" test (OTHER)
- Bradley–Terry paired judging to rank competing signal hypotheses by holdout ΔBrier margin (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes — add a pre-execution grounding + Critic/Reviewer review stage to the discovery loop (2-day build) with an ADOPT gate of arm B gate-pass rate ≥ arm A at ≤60% backtest compute and ≥2/3 known-edge temporal rediscovery.
