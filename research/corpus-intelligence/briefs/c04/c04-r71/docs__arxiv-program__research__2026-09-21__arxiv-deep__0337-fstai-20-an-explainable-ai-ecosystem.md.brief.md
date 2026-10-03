# docs/arxiv-program/research/2026-09-21/arxiv-deep/0337-fstai-20-an-explainable-ai-ecosystem.md
## What it is (1-2 sentences)
Explainable, uncertainty-aware AI ecosystem for Olympic/Paralympic taekwondo officiating (action recognition → decision support → training analytics → Para classification), piloted at the 2025 World Cadet Championships. Ledger verdict: ADAPT the uncertainty-governance pattern only — credal-set lower-confidence decision rules, per-decision audit logging with human-override gate, and disparity monitoring; the taekwondo perception stack is unportable.
## Key metrics/methods (formulas where given, else "not specified")
- ST-GCN: `H^(l+1) = σ(Σ_k A_k · H^(l) · W^k)`.
- Uncertainty: MC Dropout (`E[f(x)] ≈ (1/M)Σ_m fθ_m(x)`), aleatoric/epistemic decomposition `V[ŷ] = E_θ[Var(ŷ|θ)] + Var_θ[E(ŷ|θ)]`, credal sets `C(x) = {c : p(y=c|x) ≥ θ}`, predictive entropy `H[p(y|x)] = −Σ_c p log p`.
- Lower-confidence awarding rule: award iff `I̲ ≥ T_w` AND `p̲ ≥ τ` (maximin on lower bounds), else human review.
- Sensor fusion: `I = s·(α_p x̃_p + α_i x̃_i + α_v x̃_v)`, α sum to 1, with interval propagation.
- Audit: `AuditLog_i = {t_i, x_i, ŷ_i, H_i, DecisionFlow_i}`; override `y^final = y_AI if O_j=0 else y_human`; disparity `Disparity_{i,j} = |E[ŷ|G_i] − E[ŷ|G_j]|`.
- Latency budget: `T_latency < 300 ms`.
## Data sources named
1,200+ hours of World Taekwondo competition video (custom annotation platform, Cohen's κ inter-annotator agreement; not public); pilot: 2025 World Cadet Championships, Fujairah — 68 matches, 14 weight classes, 27 certified referees, 6 jury members; sensors: Daedo PSS + dual 120 fps 1080p cameras; RL sim: 1,500 simulated matches.
## Findings (numbers and facts, not vibes)
- Review time 89.7 s (IVR) → 4.6 s (AI-assisted) = 94.8% reduction (abstract says 85% — internal inconsistency).
- Jury overrides 0.31 → 0.18 (41.9% relative reduction); decision consistency +9.1%; jury-decision variance −35%.
- Accuracy 92.7% vs jury consensus; head-kick detection 92.8% vs 79.2% human; Cohen's κ = 0.83 over 326 logged decisions (avg latency 4.7 s).
- Referee trust 4.65/5 (93%), N=27 self-report; latency <300 ms, 100% uptime over 68 bouts.
- Fairness: demographic parity error 6.2% (M/F); impairment-class consistency 91.7%. Para test: 87.3% accuracy on 4 athletes (not statistically conclusive).
- INFERENCE: the pilot is single-court, single-event; the 94.8% reduction conflates AI assistance with a workflow change vs full IVR protocol.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Lower-confidence publishing gate (auto-post only if p̲ ≥ τ, else analyst review) maps directly onto GSE's pick-publishing workflow and existing approve-desk gate: TRUST-SIGNAL.
- Per-decision audit logs with decision-flow provenance + disparity monitoring across bet types/teams/time windows give the engine formal publish-guard machinery the repo lacks: TRUST-SIGNAL.
- GSE implementation spec proposes τ ≈ 0.55 for spreads/totals with adaptive τ_t = τ_0 + λ·(recent Brier − baseline); adopt only if 2024-season backtest shows ≥2 pp ROI improvement with ≥60% of picks clearing the gate.
## Engine-actionable? (yes/no + one-line what)
yes — implement the credal pick gate (interval lower-bound ≥ τ before auto-posting, else analyst review) plus audit-logged decision provenance, gated on a 2024-season backtest showing ≥2 pp ROI improvement on auto-posted picks.
