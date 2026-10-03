# docs/arxiv-program/research/2026-09-21/arxiv-deep/0543-rethinking-sales-lead-scoring-with-llmbased.md
## What it is (1-2 sentences)
Li Auto paper on LLM-based sales-lead scoring; the portable device is HPRO — Hierarchical Preference Ranking Optimization — which converts a funnel hierarchy into tiered Bradley–Terry preference pairs with margin-encoded priors. Sales domain doesn't transfer, but tiered-margin BT pair construction is domain-free.

## Key metrics/methods (formulas where given, else "not specified")
- Margin-aware BT: P(x_w ≻ x_l | m) = σ(s_pair(x_w) − s_pair(x_l) − m)
- HPRO loss: L_HPRO = −E_{(x_w,x_l,m)∼D_pair}[log σ(s_pair(x_w) − s_pair(x_l) − m)]
- Tiers used: P_global (Lock-in vs Defeat, m_g=1.0), P_key (Test Drive vs No Drive, m_k=0.5), P_soft (Long Call vs Short Call, m_s=0.1)
- Total loss: L_total = α·L_BCE + λ_1·L_HPRO + λ_2·L_CE with α=2.0, λ_1=1.0, λ_2=0.5
- Backbone: Qwen1.5-1.8B / Qwen2.5-1.5B with LoRA; task heads at LR 5×10⁻⁵, backbone 20× lower; triple-head: semantic (QA CE) + pointwise (BCE) + pairwise (HPRO)

## Data sources named
Proprietary Li Auto NEV retail data: benchmark 340k samples (1.45% positive), industrial 6.14M samples (1.33% positive); features = tabular CRM + dialogue transcripts (≤2,000 tokens); temporal 7:3 split. Online: 132-day province-wide A/B test (stratified by 4 sales-capability tiers).

## Findings (numbers and facts, not vibes)
- asLLR AUC ablation: base 0.7921 → +L_CE 0.8081 → full (+HPRO) 0.8161 (+3.0% over base; beats best CTR baseline DeepFM 0.7917).
- Industrial ranking: HPRO model AUC 0.7583 / P@0.1% 25.76% / P@1.0% 13.33% / R@5.0% 25.18% vs no-HPRO 0.7491/18.44%/11.56%/23.94% — +39.7% P@0.1% relative lift, +1.2% AUC, +15.3% P@1.0%, +5.2% R@5.0%.
- Two-stage funnel grouping (hard rank constraint) underperforms funnel-as-feature (AUC 0.6898 vs 0.7382); HPRO uses the funnel as structured preference supervision instead.
- Online A/B: +9.5% relative lift in lead conversion, p < 0.001, stable over 132 days.
- Margins (1.0/0.5/0.1) are hand-set priors, never ablated or learned — INFERENCE: the +39.7% could be partly margin-luck.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: tiered-margin BT as a portable objective for GSE ranking — encode game informativeness hierarchy (playoff ≻ late-season ≻ early-season) as margin-weighted preference pairs instead of flat binary outcomes.
- OTHER: dual-head (calibration + ranking) joint training design for the margin model — the +39.7% top-of-list gain is the one that matters for a published edge sheet.
- TRUST-SIGNAL: INFERENCE — margins-as-priors could serve as a confidence-separation mechanism on the edge sheet (top-of-slate ordering).

## Engine-actionable? (yes/no + one-line what)
Yes — port tiered-margin BT to NFL team ratings (playoff games m=1.0 tier, weeks 12–17 m=0.5, weeks 1–11 m=0.1) on nflverse 2018–2024; adopt if tiered BT beats static BT on next-season log-loss by ≥0.005/game with tiered≻uniform≻none ablation confirming the hierarchy is the gain source; learnable margins as improvement experiment.
