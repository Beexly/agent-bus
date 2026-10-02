# arxiv-program/research/2026-09-21/arxiv-deep/0551-proskill-segmentlevel-skill-assessment-in-procedural.md
## What it is (1-2 sentences)
Deep read of Mazzamuto et al. (2026, arXiv:2601.20661v1): ProSkill — a benchmark dataset for segment-level skill assessment in procedural (assembly/furniture/tent) videos, built via a scalable Swiss-tournament + Elo crowd-annotation protocol, with SOTA skill-assessment algorithms benchmarked. Verdict in file: REJECT — no sports data, no sports method, no transfer path to GSE's NFL engine.
## Key metrics/methods (formulas where given, else "not specified")
- Annotation protocol: Swiss tournament pairing (similar current scores, no repeat matchups) → crowdsourced pairwise "which is more skilled" (16,372 pairs, 551 MTurk workers, 5 judges/pair majority vote) → Elo aggregation (E_A = 1/(1+10^{(R_B−R_A)/400})) to continuous absolute scores.
- Benchmarked: global ranking — USDL, DAE-AQA, CoFInAl (Spearman's ρ); pairwise — RAAN, AQA-TPT, CoRe (accuracy); features I3D/VideoMAE.
## Data sources named
Five procedural video datasets: Assembly101, IKEA, EgoExo4D, Epic-Tents, Meccano. Code/data: https://fpv-iplab.github.io/ProSkill/. No sports content.
## Findings (numbers and facts, not vibes)
- Global ranking: CoFInAl best — Spearman ρ=0.59 on Meccano; USDL I3D 0.12–0.38, VideoMAE 0.19–0.43 across datasets; VideoMAE beats I3D except Assembly101.
- Pairwise: best AQA-TPT + VideoMAE on EgoExo4D at 0.79 accuracy; worst RAAN + I3D on IKEA at 0.45; Assembly101 averages 0.60.
- Crowd agreement: IKEA 0.724, EgoExo4D 0.716, Assembly101 0.705, Epic-Tents 0.699, Meccano 0.666 — substantial label noise; "skill, technique, confidence" indistinguishable per annotator feedback.
- Limitations: targets circular (Elo derived from same pairwise labels); no expert gold standard; no lightweight/non-deep baselines; procedural skill cues don't transfer to sports analytics.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none — the only faintly reusable artifact is the Swiss-tournament + Elo crowd-annotation protocol, and GSE has no crowd-labeling pipeline.
## Engine-actionable? (yes/no + one-line what)
no — rejected; revisit only if GSE builds a crowd-labeled subjective-rating pipeline (e.g., film grades), validating ranking stability first.
