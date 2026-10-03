# docs/arxiv-program/research/2026-09-21/arxiv-deep/2173-erbench-benchmark-testsuite-equation-discovery-algorithms.md
## What it is (1-2 sentences)
A full-text-read ledger (verdict: ADAPT, completed 2026-09-22) of ERBench (Kahlmeyer et al. 2026, arXiv:2606.09276): the first benchmark for equation-discovery algorithms that scores *symbolic recovery of known ground-truth laws* instead of in-domain fit, with a 10,000-formula public dev set and a 1,000-formula secret competition set.
## Key metrics/methods (formulas where given, else "not specified")
- Symbolic Recovery Rate: f̂ ≡ f iff sympy proves f(x)−f̂(x)=c₀ or f(x)/f̂(x)=c₁ (Eq. 2); sympy timeouts count as failures (strict lower bound).
- Jaccard Index over unique subexpression sets: JI = |S_true ∩ S_pred| / |S_true ∪ S_pred| (Eq. 3) — partial credit for correct substructures.
- Normalized Tree Edit Distance: TED = dist / (|T_true| + |T_pred|) via Zhang–Shasha (Eq. 4).
- Numeric equivalence on 1,000 points in [−100,100]^d used as fast upper bound (identical to symbolic in practice).
- Diagnostics: recovery vs operator count, sampling distribution, noise level, sample size; taxonomy of 5 SR paradigms (conventional/sparse, enumeration, sampling-based, pre-trained, hybrid).
## Data sources named
Public dev set 10,000 formulas (Feynman 130, Strogatz 14, OEIS 3,757, Eponymous/Wikipedia 211, PHYBench 90, SynEq 5,303, SciPy densities 33, Livermore 175, Nguyen 12, Keijzer 15, Korns 15, Koza 2, Pagie 1, Vladislavleva 8, SRDS 234) + secret 1,000-formula eval set (competition at equation-discovery.ti2.fmi.uni-jena.de, triple-permutation protocol); HuggingFace: EquationDiscovery/Equation_Recovery_Benchmark.
## Findings (numbers and facts, not vibes)
- PySR is the only method with non-trivial recovery: 0.29 ± 0.04 on the secret set; DSR, E2E, Operon 0.00; gplearn 0.05 ± 0.01; linear baseline 0.00 (Table 3, 6 algorithms × default hyperparams × 5 runs).
- JI: PySR 0.49 ± 0.02, DSR 0.28, linear 0.25 — complex methods barely beat linear on parsimony-adjusted partial credit. TED: PySR 13.4, linear 14.6, gplearn 45.2.
- PySR near-perfect recovery at 1–3 operators → near-zero beyond 13 operators; uniform sampling ≈ +10% over diverse distribution; conclusion: problem complexity, not data scarcity, is the principal bottleneck (Figure 6).
- Pre-trained transformers (E2E) collapse outside pre-training domains; enumeration hits exponential walls; sampling-based methods are domain-sensitive.
- Ledger verdict: ADAPT — adopt ERBench as the mandatory regression test for every GSE symbolic-regression pipeline change (proposed 200-formula panel, sports-config vs default PySR comparison; ~1 week effort, no data cost).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: pure methodology/QC ledger — equation-discovery benchmarking for the engine's SR pipeline; no QB, coaching, OL, scheme, or trust-signal content.
## Engine-actionable? (yes/no + one-line what)
yes — run GSE's PySR sports config through the 200-formula ERBench panel + complexity/noise/sample sweeps, and gate every future SR pipeline change on beating the previous Recovery/JI.
