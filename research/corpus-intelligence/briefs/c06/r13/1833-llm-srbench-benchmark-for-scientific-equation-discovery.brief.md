# arxiv-program/research/2026-09-21/arxiv-deep/1833-llm-srbench-benchmark-for-scientific-equation-discovery.md
## What it is (1-2 sentences)
LLM-SRBench (arXiv:2504.10415): a memorization-proof 239-problem benchmark for LLM-based scientific equation discovery — LSR-Transform rewrites known models in unfamiliar forms, LSR-Synth injects novel terms with held-out OOD test sets — with a damning headline that the best system manages only ~31.5% symbolic accuracy. Adjudicated ADAPT: it's a benchmark, not a method — GSE's use is evaluative (the two-axis scorecard plus the memorization audit for metric discovery).
## Key metrics/methods (formulas where given, else "not specified")
- Metrics: symbolic accuracy (exact-structure match rate), Acc_τ, NMSE, OOD NMSE, computational efficiency; complexity controlled by expression-tree node count.
- Memorization diagnosis: error-curve analysis of plain LLM sampling on 100 Feynman problems vs bench problems — sharp drops + low symbolic error = recitation; gradual curves = genuine search.
- Methods evaluated: DataBlind (direct prompting, no data), LLM-SR, LaSR with GPT-4o-mini / GPT-3.5-turbo / Llama-3.1-8B backbones. Code: github.com/deep-symbolic-mathematics/llm-srbench (CC BY 4.0).
## Data sources named
239 problems: LSR-Transform (111) + LSR-Synth (128, physically feasible per numerical solvers, with OOD sets); domains chemistry 36, biology 24, physics 43, material science 25; each task = scientific context + numerical data.
## Findings (numbers and facts, not vibes)
- Best system: ~31.5% symbolic accuracy (LLM-SR + GPT-4o-mini on LSR-Transform); on Transform, LaSR leads numerical accuracy (Acc_0.1, NMSE) while LLM-SR leads symbolic; on LSR-Synth materials the advantage inverts.
- DataBlind (no data) performs poorly → data is necessary, priors insufficient; GPT-4o-mini and Llama-3.1-8B consistently beat GPT-3.5-turbo (smaller/less-opinionated models explore better).
- LSR-Synth harder than LSR-Transform → transforming known problems ≠ solving novel ones; all methods degrade ID→OOD (LLM-SR lowest OOD NMSE; ID–OOD gap larger in chemistry/biology than physics/materials).
- Memorization evidence: Feynman problems solved with sharp error drops (recitation); LSR-Transform substantially harder at matched node counts, including the simplest [0–15]-node band.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) Memorization/recitation audit: an LLM proposing "EPA-like" formulas may be reciting sports-analytics literature, not discovering — the obfuscation audit (algebraically transform, hide variable names, re-run discovery) tests whether the system discovers or recites, licensing trust in invented metrics.
- (OTHER) Adopt symbolic-accuracy + OOD-NMSE as the two-axis scorecard for any GSE-SR equation.
## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE-SRBench-sports" (~30 obfuscated known-truth tasks + ~20 synthetic tasks) and require the pilot to show ≥10pp symbolic-accuracy spread between SR variants before adopting it as the SR evaluation gate.
