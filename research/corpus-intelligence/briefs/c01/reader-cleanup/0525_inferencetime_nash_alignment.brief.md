# arxiv-program/research/2026-09-21/arxiv-deep/0525-inferencetime-nash-alignment.md

## What it is (1-2 sentences)
arXiv:2609.08082v2 (Hosseini, Mandal, Zhang, 2026) proposes inference-time alignment of LLMs under general (non-Bradley-Terry) preferences by computing the Nash equilibrium of a two-player zero-sum game over sampled responses — Best-of-Nash (BoN) and Nash Mirror Descent (NMD) — with tight duality-gap bounds. Verdict: REJECT — pure LLM inference-time alignment theory with no sports-relevant claim, data, or transfer path.

## Key metrics/methods (formulas where given, else "not specified")
- Zero-sum game: P∗(π ≻ π′|x) = E_{y∼π,y′∼π′}[P∗(y ≻ y′|x)]; Nash: π1∗,π2∗ = argmax argmin P∗(π1 ≻ π2|x).
- Duality gap: DualGap(π) = max_{π1} P∗(π1 ≻ π|x) − min_{π2} P∗(π ≻ π2|x).
- Oracle error: ε²(x) = E_{y,y′∼π_ref}[(P̂(y ≻ y′|x) − P∗(y ≻ y′|x))²].
- Coverage: C^π(x) = E_{y∼π}[π(y|x)/π_ref(y|x)]; χ²(π,π_ref) = C^π(x) − 1.
- Theorem 1 (BoN): DualGap(π̂) ≤ 3ε(x)C_uni(x) when N ≥ 4 log(2/ε²(x))·C_uni(x). Theorem 2 (NMD): DualGap ≤ 5ε(x)C_uni(x), β=2. Theorem 3 (lower bound): any algorithm incurs ≥ ε0·C_uni(x)/(2√2) — matching up to constants.
- BoN: draw N responses from π_ref, empirical preference matrix via imperfect oracle, solve max-π min LP (O(N^3.5 log(1/ε))). NMD: self-play mirror descent with KL regularization β; closed form π′_{t+1}(y_i) ∝ π′_t(y_i)·exp(r̂_t(y_i)/β).
- Experiments on TLDR, HelpSteer2, UltraFeedback (100 prompts each); bases LLaMA3-SFT (8B), Mistral-Instruct (7B), Gemma-SFT (2B); oracles LLaMA3-PM (8B), PairRM (0.4B); judge DeepSeek-V4-Flash with position-bias control; metric EWR = win + draw/2.

## Data sources named
TLDR (summarization), HelpSteer2 (helpfulness), UltraFeedback (instruction following) — 100 evaluation prompts each. LLaMA3-SFT (8B), Mistral-Instruct (7B), Gemma-SFT (2B) base models; LLaMA3-PM (8B), PairRM (0.4B) preference oracles. No sports data.

## Findings (numbers and facts, not vibes)
- EWR (N=64, LLaMA3-SFT, LLaMA3-PM, β=1): TLDR 62.9% (base) → 73.5% (BoN), 73.1% (NMD); HelpSteer2 44.1% → 68.8%, 67.8%; UltraFeedback 23.9% → 48.8%, 46.7%. BoN matches LLaMA3-DPO's EWR (74.5%) on TLDR without parameter updates.
- BoN EWR scales with N: 62.9% (N=1) → 73.5% (N=64); NMD flat across β ∈ [0.125, 4]. Oracle size (8B vs 0.4B) yields similar EWRs; base model matters (Mistral-Instruct > LLaMA3-SFT > Gemma-SFT).
- Guarantees hinge on oracle quality ε(x); inference-time alignment can only reweight responses reachable under π_ref; LLM-as-judge is a proxy, not a direct measure.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] None sports-actionable. The "Best-of-N candidate selection" setting is a generation-time trick, not a prediction or calibration method; the Nash equilibrium over sampled responses has no mapping to team ratings or pick generation. Rated REJECT, not ADAPT — no candidate-selection-over-sampled-responses step exists in the GSE engine.
- [OTHER] Would only reconsider if a future version targeted pairwise model-comparison (e.g., head-to-head model betting markets), which this version does not.

## Engine-actionable? (yes/no + one-line what)
No — LLM inference-time alignment theory with zero sports content and no mapping onto any GSE engine component.
