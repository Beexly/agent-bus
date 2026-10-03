# arxiv-program/research/2026-09-21/arxiv-deep/0534-before-the-action-benchmarking-llms-on.md
## What it is (1-2 sentences)
LLM-evaluation paper defining "Prospective Hypothesis Discovery" (PHD) — constructing grounded, discriminative, testable hypothesis sets from conclusion-free observations — and ranking 15 frontier LLMs on the 988-case HypoArena benchmark via pairwise LLM-as-judge arena plus six-dimension rubric scoring. Ledger verdict: REJECT — no sports data, no predictive model, no GSE-transferable statistics.
## Key metrics/methods (formulas where given, else "not specified")
- Arena mapping: 5-level verdicts {A>>B, A>B, A≈B, B>A, B>>A} → win shares {1.0, 0.75, 0.5, 0.25, 0.0}; Bradley–Terry–Davidson (Davidson 1970) aggregation with tie parameter θ; baseline rating 1500; position debiasing (both orders judged, averaged, polarity-consistency required).
- Rubric scoring: q_i = (g_i + ℓ_i + j_i)/3; Q_pair = (1/K)Σq_i; Q_set = (b+d+u)/3 (b: breadth, d: distinctness, u: utility); singleton set: Q_set = (b+u)/2.
- PHD task form: 𝒞 → ℋ = {(h_i, e_i)}_{i=1..K}; when K>1 hypotheses must be mutually discriminative. Two generation modes: Baseline zero-shot vs Agent (12-skill structured-analytic library adapted from Pherson & Heuer).
## Data sources named
HypoData: 988 cases, 2,012 hypothesis–evidence pairs (~3.67/case) — Biomedical Science 244 (Nature Communications, Cell Reports, eLife, NAR, PLOS Biology, PNAS, Science Advances, PubMed Jul 2025–Apr 2026), Machine Learning 218 (ICLR 2026 submissions, stratified accept/reject), Social Science 163 (7 journals, 2025–2026), Financial Analysis 114 (SEC 10-Q + analyst reports, ~3.99 H-E pairs/case), IT Operations 146 (post-mortems, ~3.29 H-E pairs/case), Safety Investigation 103 (NTSB/CSB, ~3.87 H-E pairs/case). Built via Forge–Audit agent loop; human audit 92% overall pass (informativeness 95%, openness 100%, completeness 100%, supportiveness 97%). Code/data: github.com/SKYLENAGE-AI/HypoArena and huggingface.co/datasets/HypoArena/HypoData (both stated public).
## Findings (numbers and facts, not vibes)
- Leaderboard (BTD / win rate, baseline mode, judge seed-2.0-pro): claude-sonnet-4.6 1654.0/71.3%; claude-opus-4.6 1652.7/71.4%; gpt-5.4 1631.4/70.7%; reference 1590.5/57.8%; kimi-k2.6 1582.7/58.2%; glm-5.1 1581.9/59.1%; deepseek-v4-pro 1535.4/46.1%; kimi-k2.5 1289.5/9.2% (bottom). >360-point spread, clear stratification.
- Agent vs baseline Δ: +88 (kimi-k2.5) to −60 (claude-opus-4.6); Spearman ρ=−0.10 with baseline strength — structured analytic skills are model-dependent, sometimes harmful; failure mode: candidate compression.
- Human alignment: Kendall τ=0.90, Spearman ρ=0.98 on 1,500 expert pairwise comparisons; per-domain τ ranges 0.97 (Fin) → 0.53 (Bio).
- Score compression: arena spread 345–490 pts/domain vs rubric <1 point on 1–5 scale (95–98% of scientific-domain assessments ≥4.0).
- ML reference +47 BTD on accepted ICLR cases (+0.06 median debiased score, +0.04 win rate) — accepted papers' hypotheses more competitive.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
No sports findings. The sole transferable element (pairwise arena + BTD ranking for open-ended outputs) duplicates the Bradley–Terry machinery already in the corpus — [OTHER], no new capability.
## Engine-actionable? (yes/no + one-line what)
No — REJECT verdict; nothing GSE predicts with. Nearest conceivable use (LLM-judge ranking of write-up variants) serves the copy lane, not the engine.
