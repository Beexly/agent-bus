# arxiv-program/research/2026-09-21/arxiv-deep/1832-drsr-dual-reasoning-from-data-and-experience.md
## What it is (1-2 sentences)
DrSR (Wang et al. 2025, arXiv:2506.04282) upgrades LLM-guided symbolic regression with two reasoning modules: π_data (LLM analyzes raw data + residuals, coarse→fine) and π_idea (LLM reflects on positive/negative/invalid candidates into a reusable idea library), fixing LLM-SR's prior-only proposals and repeated invalid expressions.
## Key metrics/methods (formulas where given, else "not specified")
- res_{t,i} = y_i − f*(x_i); D_t = {(x_i, y_i, res_{t,i})} → resample 100 pairs → refined insight D_new (local monotonicity changes, nonlinear interactions).
- Generation conditioned on cognitively enriched prior: p_LLM(f | D, I) replacing static p_LLM(f).
- Metrics: ACC_τ = (1/N_test) Σ 1(|f(x_i)−y_i|/|y_i| ≤ τ); NMSE = Σ(f−y)²/Σ(y−ȳ)².
- Closed loop: generate → evaluate → update insights + ideas → generate better; three LLM calls per iteration (π_data, π_main, π_idea).
## Data sources named
Six benchmarks: Oscillation 1, Oscillation 2, E. coli growth, Stress–Strain, LSR-Transform-2Avg, LSR-Synth-CRK0; backbones Mixtral-8x7B-Instruct-v0.1, LLaMA3.1-8B-Instruct; baselines gplearn, PySR, DSR, uDSR, LLM-SR, LaSR. No public repo URL confirmed in text.
## Findings (numbers and facts, not vibes)
- Oscillation 1 (Acc/NMSE): DrSR-Mixtral 83.92% / 3.14e-7 vs LLM-SR-Mixtral 5.9% / 1e-4, PySR 3.80% / 3e-4, uDSR 1.78% / 2e-4, DSR 0.42%.
- Oscillation 2: DrSR-Mixtral 99.94% / 1.80e-12 vs LLM-SR 7.62% / 4.59e-5, PySR 7.02% / 2e-4.
- E. coli (all struggle): DrSR-Mixtral 5.12% / 0.0195 vs LLM-SR 2.08% / 0.2282.
- Stress–Strain: 88.28% / 0.0156 vs LLM-SR 68.10% / 0.0530, PySR 70.60% / 0.0347.
- LSR-Transform-2Avg: 92.51% / 0.0055; LSR-Synth-CRK0: 95.20% / 8.87e-8.
- DrSR-Llama3.1 backbone-robust (Oscillation 1: 77.98% / 5.40e-7); ablation: both π_data and π_idea contribute.
- File's ledger verdict: ADAPT — port the residual-driven insight update to GSE's metric-invention loop; needs sports adaptation (no textbook priors) and cost control (cap LLM calls; update insight only on new best).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: upgrade path for the GSE-SR metric-invention design (ledger 1825) — add π_data residual insight ("which features correlate with large residuals? any monotonicity flips?") and a JSONL idea library of distilled strategies; gate: ADOPT dual reasoning if ≥15% OOD NMSE gain AND valid-program rate ≥90%.
- COACHING: the "analyst-in-the-loop insight audit" — publish π_data's structured insights weekly as a discovery artifact (e.g. "pressure rate residuals spike in dome games") as football-hypothesis leads.
## Engine-actionable? (yes/no + one-line what)
Yes — extend the GSE-SR pipeline with residual-augmented data insight and an idea library, guardrailed on LLM-call cost; adopt only if it beats plain GSE-SR by ≥15% OOD NMSE with ≥90% valid-program rate.
