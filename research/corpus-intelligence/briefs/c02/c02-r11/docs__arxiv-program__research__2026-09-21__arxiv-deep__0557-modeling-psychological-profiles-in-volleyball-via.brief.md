# docs/arxiv-program/research/2026-09-21/arxiv-deep/0557-modeling-psychological-profiles-in-volleyball-via.md

## What it is (1-2 sentences)
A full-text read of arXiv:2509.22111v1 (Iannario, Lee, Leonelli 2026) introducing latent MMHC — a hybrid structure learner for mixed-type variables (ordinal questionnaire scores, categorical demographics, continuous indicators) via a latent Gaussian copula plus MMPC skeleton and hill-climbing refinement — applied to psychological profiling of 164 amateur volleyball players. The file's verdict is REJECT: no GSE data surface for psychometric/mixed-type questionnaire data.

## Key metrics/methods (formulas where given, else "not specified")
- Latent MMHC: (1) map mixed-type variables to latent Gaussian copula space; (2) constraint-based skeleton via Max-Min Parents-and-Children (MMPC) with conditional-independence tests at threshold α ∈ {0.01, 0.05}; (3) constrained score-based hill-climbing refinement restricted to the skeleton, using SEM/BIC-style score; returns a single DAG.
- Stable variant: bootstrap aggregation over resamples, keeping recurring edges.
- Structural recovery metric: Structural Hamming Distance (SHD = edge insertions + deletions + reversals vs true DAG), plus edge recall (sensitivity) and specificity.
- BN factorization: P(X) = ∏_i P(X_i | Pa(X_i)).
- Code: https://github.com/manueleleonelli/latent_mmhc (R, integrates with bnlearn).

## Data sources named
- New dataset: 164 female volleyball players from Italy's C and D leagues; standardized psychological profiling (mental-skills questionnaires: goal setting, self-confidence, motivation, anxiety, emotional arousal, preparation, self-esteem; Big-Five personality traits) plus background/demographic information. No public release link stated.
- Simulations: synthetic DAGs with p ∈ {10, 30} variables, varying sample size and sparsity.

## Findings (numbers and facts, not vibes)
- latent MMHC (SEM, α=0.01) achieves the lowest median SHD in 7 of 8 settings for p=30 graphs (Table 1). [OTHER]
- For p=10, SEM variants are best with α=0.01 at small n and α=0.05 at larger n. [OTHER]
- Edge recall: hybrid/score-based methods substantially beat copula PC and latent PC; α=0.05 improves sensitivity especially at p=30. [OTHER]
- Specificity: all MMHC variants maintain high specificity, often matching/exceeding copula PC and latent PC. [OTHER]
- Bootstrap-aggregated stable latent MMHC gives only modest gains (slightly lower medians / reduced variability). [OTHER]
- Learned volleyball network (qualitative): mental skills organized around goal setting and self-confidence; emotional arousal bridging motivation and anxiety; neuroticism/extraversion upstream of skill clusters; six illustrative intervention scenarios show distributional shifts in self-confidence/preparation/self-esteem (no effect-size numbers stated). [OTHER]
- File's adversarial note: n=164 with dozens of mixed-type variables — structure learning is severely underpowered; learned DAG is one of many statistically indistinguishable structures; scenario analyses are purely associational, not causal interventions. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Latent-MMHC SHD dominance in 7/8 p=30 settings: OTHER (methodology only; file states zero NFL/external validity, GSE has no questionnaire data).
- Mental-skills hub topology (goal setting, self-confidence): OTHER (file's verdict: no GSE decision surface needs a psychological-trait DAG).
- Associational-not-causal warning on scenario analyses: TRUST-SIGNAL (do not treat associational DAG propagation as an intervention effect).

## Engine-actionable? (yes/no + one-line what)
No — GSE holds no ordinal psychometric or mixed-type questionnaire data, so latent MMHC has nothing to run on; revisit only if ordinal expert/film-grade labels ever exist.
