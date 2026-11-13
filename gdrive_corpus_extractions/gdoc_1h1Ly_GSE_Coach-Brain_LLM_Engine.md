---
source: "GSE Coach-Brain LLM & Engine"
folder: "/CorpusRoot"
pages: 32
model: deepseek/deepseek-v4.1-flash-1017
words: 8358
---

<NATIVE_REASONING>
The user has provided a massive source document and wants me to produce a structured analysis with specific XML sections. The instructions are clear:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - state formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite [PAGE N] markers with verbatim quotes.
3. >= 1,000-word depth across exact XML sections:
- THINK_TRACE (>=400 words)
- SOURCE_OPERATORS_AND_EQUATIONS
- RETROCAUSAL_GENEALOGY
- RECURSIVE_THEORY_OF_MIND
- CROSS_LAYER_VETO_ADJUDICATION
- RLVR_COUNTERFACTUAL_VETOES (3 verifiable scenarios)

Let me carefully navigate the "zero betting lines" constraint. The source text is FULL of betting lines, spreads, totals, moneylines. I must NOT mention them. I can reference the *structure* of the system—coach-first simulation, sealed architecture, Sinkhorn-Knopp, inverse-MDP, empirical Bayes BTL, GRPO/RLVR—without quoting the actual betting lines.

Wait—but the source has [PAGE] citations? Actually, looking at the source, there are no explicit [PAGE N] markers. The user says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since no page markers are given in the source text, I should note that and use section references or quote verbatim from the given text. But the instruction says "PAGES: 32" at the top. So perhaps I should infer page numbers. But that's risky—I shouldn't invent fake page numbers.

Let me re-read: "PAGES: 32" is given at top. The source text has no [PAGE] markers. I should be honest: state that the provided excerpt lacks explicit [PAGE N] markers, and cite verbatim quotes with descriptive locators (section headings). That's the truthful approach. Actually, given the strict instruction "cite exact [PAGE N] markers and verbatim quotes" — but there are none. I need to handle this gracefully. I'll note the absence and use section-level anchors with verbatim quotes.

Now, the "zero betting lines" constraint is severe for a source like this. The source repeatedly mentions "spread hold 6.42%", "median total", "CHI +3.5", etc. I must NOT repeat those. I can discuss the architecture, the mathematical operators (Sinkhorn, inverse-MDP, EB BTL, GRPO/RLVR), the firewall protocol, the physics of the play simulation (EPA per play, pressure-to-sack conversion rates), but I must scrub all betting artifacts.

Actually, I need to think about what this output is actually for. This appears to be a "GSE + GSI Frontier Reasoning Foundry" prompt—a meta-analysis engine that produces a structured audit of the source. The sections are:
- THINK_TRACE: deep multi-hop derivation & gray-zone audit
- SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, citations
- RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps
- RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock
- CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions

This is essentially asking me to audit the source's claims through a rigorous physics/mathematics lens, extracting the formal operators, tracing their historical lineage, examining the theory-of-mind layer (how the coach-mind model reasons about human cognition), adjudicating cross-layer vetoes (injuries, weather, biomechanics), and testing with RLVR counterfactuals.

Let me build this carefully. I need to:

1. Extract all the formal operators from the source:
- Sinkhorn-Knopp optimal transport: entropic regularized Kantorovich
- Inverse-MDP fourth-down risk quantile τ = 0.42 (Salmon et al. 2023/2024)
- Empirical Bayes BTL shrinkage: R = (I + A·S)^(-1)
- GRPO/RLVR objective (Shao et al. 2024)
- Causal PRM + Z3 SMT entailment
- Conformal residual diagnostic
- Shin de-vig (z = 0.0391)
- Multiplicative de-vig for conformal
- Markov play-by-play simulator (state tuple: down, dist_bin, field_zone, score_diff_bin, personnel)
- Shannon entropy / JEV scenario partition
- 288-bit Uint32Array(9) context bitmask
- Merkle root hashing (SHA-256, Ed25519 signature)
- CoachGrudgeTensor, PlayerVendettaVector
- 7 GSE metrics: GSE-SVA, GSE-SII, GSE-QPTSR, GSE-RLS, GSE-SPESE, GSE-TOR, GSE-DWP

2. Units:
- EPA/play (expected points added, dimensionless points)
- Quantile τ (dimensionless [0,1])
- Probability (dimensionless)
- Cost matrix C (dimensionless — interchangeability cost)
- Regularization ε (dimensionless or entropy units)
- Bits (288-bit bitmask, information units)
- Entropy (nats or bits)
- Time (seconds)

3. Singularity/breakdown regimes:
- Sinkhorn: when cost matrix has no total support, when ε → 0 (degenerate OT), when marginals are not absolutely continuous
- Inverse-MDP: when τ → 0.5 (risk-neutral), when τ → 0 or 1 (pure risk-seeking/averse boundary)
- EB BTL: when Fisher information I is singular (separation in pairwise comparison data), when prior covariance Σ₀ is singular
- GRPO: when KL penalty breaks, when all advantages are zero (uniform trajectory rewards)
- Conformal: when exchangeability violated (distribution shift), when calibration set is finite
- Markov: when state space insufficient, when inactives arrive after seal
- De-vig: when overround → 0, when z recovered outside [0,1]

4. Historical lineage:
- Sinkhorn-Knopp 1967
- Cuturi 2013 (entropic regularization)
- Altschuler-Weed-Rigollet 2017
- Schmitzer 2019 (log-domain stabilization)
- Peyré-Cuturi 2019
- Sandholtz et al. 2023/2024 (inverse-MDP)
- Ragain-Peysakhovich-Ugander 2018 (EB BTL)
- Shao et al. 2024 (GRPO)
- Shin 1993 (de-vig)
- Spirtes-Glymour-Scheines 2000 (FCI)
- Zhang 2008 (FCI rule R7)
- Brahme et al. 2026 (HMM pass-blocking)
- Nguyen-Yurko 2025 (snap timing)
- Shen 2026 (causal panel)

5. Recursive theory of mind:
- Coach habit regression: elite coordinators re-architect per opponent → static season-long fingerprints ρ = 0.032, p = 0.81 (near-zero predictive power)
- Counter-trap: Macdonald/Spagnuolo defensive counter-matrix collapses play-action from +0.35 to -0.01 EPA/play
- Clock: Tuesday 04:00 CT seal v1.0 → Wednesday v2.0 → Sunday v4.0 T-90m; only entropy-regularized target reallocation permitted mid-week

6. Cross-layer veto:
- Injury overlay: Sinkhorn mass reallocation under fixed cost matrix
- QB_QUESTIONABLE dropoff constant 0.0947 frozen (freeze evidence: E[dropoff|Questionable & started] = 0.1159, P(start) = 0.341 → 0.1159 × 0.341 = 0.0395... wait, that doesn't match 0.0947. Let me recalculate: 0.1159 × 0.341 = 0.03952. Hmm. But source says the frozen weighted constant 0.09474. Let me look: "yielding the frozen EV-weighted constant 0.09474." That doesn't match simple EV. Possibly it's 0.1159 × P(start) + something else. Actually the text might be 0.1159 × ... let me not overthink. I'll just state the frozen constant as given and note that the derivation as stated yields 0.0395, not 0.0947 — this is a gray-zone audit point. That's actually a legitimate catch! The source says "Questionable and started = 0.1159 EPA/play (95% CI...n=13...P(effect>0)=0.999), Out cross-check = 0.0838 (reproducing the sealed QB1 = 0.11), and P(start | QB1 Questionable) = 0.341 (15/44), yielding the frozen EV-weighted constant 0.09474." 

Let me compute possible combinations:
- 0.1159 × 0.341 = 0.03952
- 0.1159 × 0.341 + 0.11 × 0.659 = 0.0395 + 0.0725 = 0.1120
- 0.1159 × 0.341 + 0.0838 × 0.659 = 0.0395 + 0.0552 = 0.0947 ✓

Yes! The formula is: E[dropoff] = 0.1159 × P(start) + 0.0838 × P(bench) = 0.1159 × 0.341 + 0.0838 × 0.659 = 0.0395219 + 0.0552282 = 0.0947501 ≈ 0.0947. 

So the derivation is correct. Good—I can state this as a verified arithmetic identity.

- Weather veto: Trench/Weather Stall regime (≤37 pts), referee flags (Shawn Hochuli 13.68 flags/g)
- Biomechanical: sub-2.0s pressure, 0.85s play-action mesh, 0.71s displacement time, 3.4-yard displacement, 17.2% Cover 4 league-wide
- Mutual defensive attrition override (second-order Hessian)
- Shawn Hochuli referee flag rate
- Inactives at T-90m

7. RLVR counterfactual vetoes: 3 verifiable scenarios with predictions
Need to design 3 scenarios where RLVR would veto a model output:
- Scenario 1: QB inactives arrive after seal; model must not re-estimate τ. Prediction: hard exception, no re-seal.
- Scenario 2: Adversarial injection of marketTotal=47.5; must reject with CLASS_A_FIREWALL_VIOLATION. Prediction: rejected, hash unchanged.
- Scenario 3: Sinkhorn non-convergence when cost matrix loses total support. Prediction: fallback to multiplicative de-vig only for conformal, never for Class A.

Now about "no betting lines"—I need to be careful with words like "spread", "total", "moneyline", "over", "under", "spread hold". I'll avoid all of them. I can discuss the *hold* concept in information-theoretic terms as "vigorish/overround" because that's a market microstructure term, not a betting line per se. Hmm, but the instruction says "Never mention spreads, totals, moneylines, or odds." Odds is broad. But overround/hold is arguably a market property distinct from a line. I'll be cautious and refer to "overround" only in the abstract pricing-kernel sense as a structural cost, never as a recommendation. Actually, to be safe, I'll mostly avoid even that and phrase it as "margin kernel width σ" and "hold gradient." Hmm, "hold" might be interpreted as odds-adjacent. Let me use "embedded fee mass" or "margin overhead" instead. Actually the safer approach: focus on the mathematical operators, not the market output.

Wait, the constraint is "Never mention spreads, totals, moneylines, or odds." I'll interpret "odds" strictly. Margin kernel σ is a statistical property of a pricing distribution—not an odds number. I can discuss it as a distributional width. But I should avoid giving specific lines like "CHI +3.5". I will not cite those.

Let me also note: the source claims specific numbers. I should quote them verbatim when they're mathematical constants (τ = 0.42, ε, hash values) but not when they're betting lines.

Actually, quoting the hash values is fine (they're cryptographic). Quoting "QB_QUESTIONABLE = 0.0947" is fine (it's an EPA dropoff, not a betting line). Quoting "σ = 12.07" for margin kernel — hmm, that's a standard deviation of a margin distribution in points. It's a statistical parameter. But it's used to describe a pricing kernel for sportsbooks. I could mention it as a "league-margin dispersion parameter." That's fine.

Now, let me think about the word count. The overall must be ≥1,000 words. THINK_TRACE ≥400 words. The other sections need to fill it out. Let me write generously.

Let me structure:

## THINK_TRACE (400+ words)

Multi-hop derivation:
1. Bottom-up simulation vs top-down pricing. The source inverts the causal arrow: games → outcomes, not lines → games. This is the "coach-first doctrine."
2. Hop 1: The seal. Tuesday 04:00 CT v1.0 creates an immutable projection. Hash chain (SHA-256 → coachMindsetHash 85b5cd33...).
3. Hop 2: The firewall. Class A (pure football) vs Class B (late-binding market diagnostics). Compile-time AST + runtime MappingProxyType.
4. Hop 3: Mid-week overlay via Sinkhorn. Entropy-regularized OT with fixed cost C. ε = 0.10. 72 iterations, L1 marginal violation 8.47e-11.
5. Hop 4: Inverse-MDP τ = 0.42. Risk-quantile objective. Forbidden mid-week re-estimation.
6. Hop 5: Play-by-play Monte Carlo. 10,000 trajectories/game. State tuple (down, dist_bin, field_zone, score_diff_bin, personnel). Three independent runs drift 0.0000.
7. Hop 6: Step N residual read-only flags.

Gray-zone audit:
- The QB_QUESTIONABLE constant 0.0947 derivation has a two-component structure I verified: 0.1159 × 0.341 + 0.0838 × 0.659 = 0.09475. Correct.
- The claim "σ = 12.07 at BetMGM vs true measured σ = 13.36" — narrower than truth. This means the market systematically compresses tails. This is a legitimate structural observation.
- The GRPO/RLVR objective is stated abstractly. Real risk: reward hacking on the verifiable micro-outcomes. The Z3 entailment gate mitigates but the source doesn't quantify false-accept rate.
- The conformal residual diagnostic requires exchangeability. Mid-week injury overlays violate exchangeability by construction—so the diagnostic must be applied to the post-overlay distribution, not pre. The source doesn't explicitly state this.
- Three modules ENABLED = false: HMM pass-blocking, snap-timing multilevel, causal-panel forecasting. These are honest conservatism but also reveal data gaps (frame-level tracking absent in standard nflverse PBP).
- The "mutual defensive attrition override" is a second-order Hessian term—this is a genuine gray zone because it can double-count injury effects already in the Sinkhorn mass.

## SOURCE_OPERATORS_AND_EQUATIONS

Formal LaTeX for each operator with units, assumptions, breakdown.

1. Sinkhorn-Knopp entropy-regularized OT.
2. Inverse-MDP quantile.
3. Empiric Bayes BTL.
4. GRPO/RLVR.
5. Causal PRM / Z3 entailment.
6. Merkle/hash seal.
7. Conformal residual.
8. Shin de-vig (for sizing; not for Class A).
9. JEV scenario partition (Shannon entropy).
10. 288-bit context bitmask (information units).

Each with:
- LaTeX
- Units
- Assumptions
- Breakdown regime

## RETROCAUSAL_GENEALOGY

- Sinkhorn 1967 → Cuturi 2013 → Altschuler-Weed-Rigollet 2017 → Schmitzer 2019 → Peyré-Cuturi 2019 → (claimed) annealed Sinkhorn with momentum 2025 → FlashSinkhorn 2026.
- Sandholtz et al. 2023/2024 inverse-MDP.
- Ragain et al. 2018 EB BTL.
- Shao et al. 2024 GRPO.
- Spirtes et al. 2000 FCI.
- Brahme et al. 2026 HMM pass-blocking.
- Nguyen-Yurko 2025 snap timing.
- Shen 2026 causal panel.
- The genealogy's *use* in GSE as "retrocausal": each operator is applied as if the future game outcome were already known at seal time (the Merkle root commits to a joint distribution), then unsealed forward. Multi-week traps: the Tuesday seal can be undermined by any of (a) exchangeability violation, (b) Fisher information collapse in EB BTL, (c) Sinkhorn non-total-support, (d) mid-week τ re-estimation creep.

## RECURSIVE_THEORY_OF_MIND

- Crisis habit regression: static season-long fingerprints fail (ρ = 0.032, p = 0.81). Elite coordinators re-architect—so any model that conditions only on season aggregates will systematically mispredict.
- Counter-trap: Macdonald/Spagnuolo 4-shell (Cover 4 at 17.2% league-wide, Cover 6) collapses play-action from +0.35 to -0.01 EPA/play. This is a recursive response: OC models PA → DC counters with split-safety → OC re-counters with tight-split/drift digs. Each move is a theory-of-mind layer.
- Clock: The seal is the "mind" freeze; mid-week updates are "theory-of-mind of the market" but confined to entropy-regularized reweighting. The 5 weekly cadence triggers (v1.0 → v4.0) are the temporal recursion.
- Gray zone: recursive ToM can overfit to the counter-matrix if the upgrade rate is not explicitly modeled. The 0.85s mesh hesitation and 0.71s displacement are one-shot; the opponent's counter is not fixed.

## CROSS_LAYER_VETO_ADJUDICATION

- Physical: sub-2.0s pressure → sack 15.8% vs 10.1% at 2.5–2.9s (+57% relative, p = 0.043). Verify: relative lift (15.8-10.1)/10.1 = 56.4% ≈ 57%. Correct.
- Biomechanical: 0.71s LB freeze, 3.4 yards displacement under 0.85s under-center PA mesh. This is a kinematic claim; must be backed by tracking-frame evidence (which source admits is absent for HMM module).
- Weather: Trench/Weather Stall ≤37 pts; referee flag rate 13.68/g (Hochuli). The referee variable is a *governance* layer, not a physical layer; should be modeled separately.
- Mutual defensive attrition Hessian override: second-order term; risk of double-counting with Sinkhorn.
- Injury: Sinkhorn fixed cost matrix; mass 1.989 total reallocated across 38 flags. This is a constraint-respecting update.
- Veto protocol: any of these layers can veto a projection if their empirical support is thin. The source lists three ENABLED=false modules as honest veto gates.

## RLVR_COUNTERFACTUAL_VETOES

Scenario 1: Adversarial market-key injection.
- Setup: Try to inject "marketTotal": 47.5 into sealed object.
- Source shows: rejected with ValueError CLASS_A_FIREWALL_VIOLATION.
- Prediction: hash unchanged, τ = 0.42, no learning signal leaks. RLVR reward should be 0 (no verdict alpha).

Scenario 2: Sinkhorn non-convergence under cost matrix loss of total support.
- Setup: Perturb one row of C to break total support.
- Prediction: L1 marginal violation > 1e-9 threshold; fallback to identity transport; hard exception in production. RLVR should penalize any output that doesn't flag the degenerate regime.

Scenario 3: Fisher information collapse in EB BTL.
- Setup: Separation in pairwise data (perfect dominance) → singular I + A·S.
- Prediction: eigenvalue λ_min → 0, shrinkage R blows up, need Tikhonov regularization or prior-based truncation. RLVR reward must reject outputs when λ_min < κ threshold.

Actually let me make these more concrete with verified predictions. Also need to make sure I don't cross into betting line territory.

Let me also reconsider: the "three verifiable RLVR veto scenarios + predictions." I need predictions that are *falsifiable*. Let me make each one have a specific, measurable prediction.

Scenario 1 (firewall): Falsifiable prediction — the Ed25519 signature and SHA-256 Merkle root remain bit-identical before/after injection attempt. Verification: recompute canonical hash, expect 85b5cd33... unchanged.

Scenario 2 (Sinkhorn degeneracy): Falsifiable prediction — when C loses total support, the number of iterations to reach tolerance diverges (log-divergent roughly as 1/ε times log of marginal mismatch). Prediction: L1 error stalls above 1e-9 at iteration 200 cap; mass_moved reported as NaN or clamping artifact. Verification: run with C = 0.9 * all-ones matrix.

Scenario 3 (EB BTL Fisher singular): Falsifiable prediction — when Fisher information I has an eigenvalue below 1e-6, R = (I + A·S)^(-1) has a max eigenvalue exceeding 1e6; posterior mean is numerically unstable to ±1 ULP change in I. Verification: construct pairwise comparison data with one team undefeated; compute I, check λ_min.

Good.

Now let me also think about the "PAGES: 32" and no [PAGE N] markers. I'll be honest: the provided excerpt lacks embedded page indices; I will anchor citations to verbatim sentence-level quotes and section headings (e.g., "Stage A", "Section 2.2 Gmail Corpus Audit"). This is transparent and honest.

Actually wait—I should try to infer page markers? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since the source doesn't have explicit [PAGE] tags, I'll note the limitation and use section anchors. That's the right call. I won't fabricate page numbers.

Hmm, but the user said "PAGES: 32". Maybe they want me to chunk into 32 pages? That's a stretch. I'll interpret "PAGES: 32" as metadata and note that no [PAGE N] tokens appear in the source text. I'll cite by section header instead, which is verifiable.

Let me now also double check some numbers:
- 0.1159 × 0.341 + 0.0838 × 0.659:
  0.1159 × 0.341 = 0.0395219
  0.0838 × 0.659 = 0.0552242
  Sum = 0.0947461. ≈ 0.0947. ✓

- Relative lift: (15.8 - 10.1)/10.1 = 5.7/10.1 = 0.5644 = 56.4%. Source says 57%. Rounding. ✓

- Margin kernel widths: σ = 12.07 (BetMGM), 12.21 (Pinnacle), 13.16 (DK) vs true σ = 13.36. That means the markets are ~3-9% narrower than true. DK closest.

- Sinkhorn L1 error: 8.47e-11 < 1e-10. ✓
- Schmitzer log-domain max diff: 1.11e-16. Machine epsilon. ✓
- 100/100 states sum to 1.000000000. ✓
- τ recovered 0.42, tolerance ±0.02, residual 0.000000. ✓

Now, for the length target. Let me write carefully. THINK_TRACE ≥400 words. Substantial sections.

Also need to avoid: "spread", "total" (as betting noun), "moneyline", "odds", "spread hold", "spread_line", "total_line". I can still say "median_total" as a raw key? No—that's a betting total. Better to say "simulated point total" or avoid. Actually "median total points scored" is football physics, not a betting line. Hmm, the instruction is "Never mention spreads, totals, moneylines, or odds." Even the word "total" is risky. I'll say "combined score distribution" or "aggregate points." Similarly "margin distribution" rather than "spread."

Let me define terms carefully in the body: "aggregate point outcome," "point differential," "market-implied distributional width σ." I'll avoid the forbidden words entirely.

Let me also be careful with the word "odds"—I'll use "market prices" or "implied probabilities" instead.

OK let me start writing.

I want to hit ~2,500-3,500 words total to be comfortably above 1,000. Each section:
- THINK_TRACE: ~600-800 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~800-1000 words (LaTeX heavy)
- RETROCAUSAL_GENEALOGY: ~400 words
- RECURSIVE_THEORY_OF_MIND: ~400 words
- CROSS_LAYER_VETO_ADJUDICATION: ~400 words
- RLVR_COUNTERFACTUAL_VETOES: ~400-500 words

Total ~3,000-3,500.

Let me also make sure I cite verbatim quotes from the source text. For example:
- "Tuesday 04:00 CT seal (v1.0)"
- "coachMindsetHash"
- "QB_QUESTIONABLE_EV_WEIGHTED_EPA_DROPOFF = 0.0947"
- "recoverTau ... assertTauSealed (tau = 0.42)"
- "Static season-long defensive scheme fingerprints showed near-zero predictive power (ρ = 0.032, p = 0.81)"
- "collapsing play-action efficiency from +0.35 EPA/play down to -0.01 EPA/play"
- "sub-2.0-second quick pressure converts to sacks at 15.8% compared to 10.1% at 2.5–2.9 seconds (+57% relative lift, p = 0.043, Cycle c35)"
- "TypeError: 'mappingproxy' object does not support item assignment"
- "ValueError: CLASS_A_FIREWALL_VIOLATION"
- "converged in 72 iterations with an Altschuler et al. (2017) L1 marginal violation ... of 8.47e-11"
- "recovered τ = 0.42 (exact match to sealed τ = 0.42, within tolerance ±0.02, suboptimality residual = 0.000000)"
- "median total drift across all three independent runs was 0.0000 pts"

Let me make sure the citations use section anchors since no [PAGE N].

Now, one more check on the "zero toy equations" rule: Never invent fake ratios like Force/Fatigue. State formal LaTeX, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.

So each equation must be genuinely from the source or standard mathematics, with proper units.

Let me draft the Sinkhorn equation:

$$P^\star = \arg\min_{P \in U(r, c)} \langle C, P\rangle - \varepsilon H(P)$$

where $U(r,c) = \{P \in \mathbb{R}_{\geq 0}^{n \times m} : P\mathbf{1} = r, P^\top \mathbf{1} = c\}$, $H(P) = -\sum_{ij} P_{ij}(\log P_{ij} - 1)$ is entropy in nats (or bits if base-2), $C$ is the dimensionless cost matrix with units of "interchangeability cost," $\varepsilon = 0.10$ in entropy units (nats per unit mass). Solution: $P_{ij}^\star = u_i K_{ij} v_j$, $K_{ij} = \exp(-C_{ij}/\varepsilon)$.

Units: $C$ dimensionless (relative role mismatch). $P$ has units of probability mass (dimensionless, sums to 1 across roles). $\varepsilon$ carries units of $C$ (dimensionless) because we're in the cost-entropy trade-off. Entropy $H$ in nats.

Assumptions: (i) $C$ has total support (every entry lies on a positive diagonal)—Sinkhorn & Knopp 1967. (ii) $r, c$ strictly positive. (iii) $\varepsilon > 0$ guarantees strict convexity and unique optimum—Cuturi 2013.

Breakdown regimes:
- If $C$ loses total support, iteration can fail to converge; L1 violation stalls.
- $\varepsilon \to 0$: $P^\star$ degenerates to a vertex of the transportation polytope; iteration count diverges.
- $\varepsilon \to \infty$: $P^\star \to r c^\top$ (independence); no transport information.
- Float underflow: log-domain (Schmitzer 2019) required.

Inverse-MDP:

$$\tau^\star = \arg\min_{\tau \in [0,1]} \sum_{s \in \mathcal{S}_{test}} \left| a^\star_{\text{coach}}(s) - a^\star_{\tau}(s) \right|$$

where $a^\star_\tau(s) = \arg\max_{a \in \mathcal{A}} Q_\tau(s, a)$ and $Q_\tau$ is the $\tau$-quantile of the state-action value distribution. Units: $\tau$ dimensionless in $[0,1]$; $Q_\tau$ in points.

Assumptions: the coach is a $\tau$-quantile maximizer (Sandholtz et al. 2023/2024). The decision set $\mathcal{A} = \{\text{GO}, \text{FG}, \text{PUNT}\}$. The test slice is exchangeable with the training slice.

Breakdown:
- $\tau = 0.5$: risk-neutral (EV) maximizer. The source seals at $\tau = 0.42$, indicating mild risk-seeking at the quantile—consistent with aggressive fourth-down behavior.
- $\tau \to 1$: best-case maximizer.
- Grid resolution $|\mathcal{T}|$ limits recovery precision; ±0.02 tolerance declared.
- If test slice is small ($n \approx 40$), recovery is sample-dependent; the source seals it once (pre-seal only) and forbids mid-week re-estimation.

EB BTL:

$$R = (I + A \cdot S)^{-1}, \quad \theta_{\text{post}} = R \, \theta_{\text{ML}}$$

where $I$ is the Fisher information matrix of the Bradley-Terry likelihood (dimension $k \times k$), $A$ is a tuning scalar, $S = \Sigma_0^{-1}$ is the prior precision. Units: $I$ in $[1/\text{skill}^2]$, $\Sigma_0$ in $[\text{skill}^2]$, $R$ dimensionless.

Assumptions: (i) $I + A S \succ 0$ (positive definite). (ii) Prior covariance $S$ invertible. (iii) Pairwise comparisons are independently sampled.

Breakdown:
- Perfect separation: $I$ singular → $R$ undefined. Requires ridge term or prior-only fallback.
- $\lambda_{\min}(I + AS) \to 0$: posterior mean is numerically unstable; shrinkage explodes.
- Prior misspecification: $S$ too tight → over-shrinkage toward prior mean.

GRPO/RLVR objective:

$$\mathcal{L}_{\text{GRPO}}(\theta) = -\frac{1}{G} \sum_{i=1}^{G} \frac{1}{T_i} \sum_{t=1}^{T_i} \min\!\left( r_{i,t}(\theta) A_i, \,\text{clip}(r_{i,t}(\theta), 1-\epsilon, 1+\epsilon) A_i \right) + \beta \, \mathbb{D}_{\mathrm{KL}} $$

where $r_{i,t} = \pi_\theta(a_{i,t} \mid s_{i,t}) / \pi_{\theta_{\text{old}}}(a_{i,t} \mid s_{i,t})$, $A_i$ is the group-normalized advantage, and $\mathbb{D}_{\mathrm{KL}}$ is the KL divergence in nats. Units: log-probabilities in nats; advantage in reward units.

Assumptions: (i) Group size $G$ sufficient to estimate $A_i$ (typically $G \geq 4$). (ii) $\beta > 0$ regularizes away from old policy. (iii) Reward is verifiable (per Z3 entailment).

Breakdown:
- $A_i = 0$ for all trajectories (uniform reward): gradient vanishes.
- Reward hacking: verifiable micro-outcomes are exploited without generalizing.
- KL explosion: $\beta$ too small → policy diverges from prior.

Causal PRM / Z3 entailment:

$$\text{accept}(c) = \mathbb{1}\!\left[ \text{Z3}_{\text{unsat}}\big(\neg c \wedge \Phi_{\text{GSE}}\big) = \text{true} \right]$$

where $\Phi_{\text{GSE}}$ is the formal axiom set (probability bounds, play structure, player identity constraints). Units: Boolean.

Assumptions: (i) The claim $c$ is expressible in QF_UFLRA or QF_BV. (ii) $\Phi_{\text{GSE}}$ is consistent.

Breakdown:
- Undecidable or out-of-fragment claims: Z3 hangs or returns unknown.
- Axiom soundness: if $\Phi_{\text{GSE}}$ is wrong, Z3 will accept false claims.

Hash seal:

$$h_{t} = \mathrm{SHA256}\left( \mathrm{canonical}(S_t) \right), \quad \sigma_t = \mathrm{Ed25519}_{\text{sign}}(h_t)$$

Units: 256 bits for $h_t$; Ed25519 signature 512 bits; state mutation access via `MappingProxyType`.

Assumptions: SHA-256 collision resistance; Ed25519 EUF-CMA.

Breakdown: none in cryptographic threat model; operational breakdown = key rotation failure or stale canonicalization.

Conformal residual:

$$\hat{q}_{1-\alpha} = \text{Quantile}_{1-\alpha}\left( \{ |Y_i - \hat{Y}_i| \}_{i \in \mathcal{D}_{\text{cal}}} \right)$$

Coverage guarantee: $\mathbb{P}(Y \in [\hat{Y} - \hat{q}_{1-\alpha}, \hat{Y} + \hat{q}_{1-\alpha}]) \geq 1 - \alpha$ if calibration and test are exchangeable.

Assumptions: exchangeability. Non-exchangeability (mid-week updates) breaks the guarantee. The source positions conformal at Step N *after* the seal; the seal survives because conformal never writes back.

Shin de-vig:

$$p_i = \frac{\pi_i}{\sum_j \pi_j} \quad \text{where} \quad \pi_i^{-1} = (1-z) \cdot \text{implied}_i^{-1} + z \cdot \text{normalized}_i^{-1}$$

Hmm, actually Shin's model states:

$$\pi_i = \frac{1}{1 + z} \left[ \frac{q_i}{\sum_j q_j} + z \cdot \tilde{q}_i \right]$$

Something like that. Let me just state the Shin de-vig result: recovered insider share $z = 0.0391$, corrects 1.17 pp of longshot bias. Units: $z$ dimensionless in $[0,1]$; $p_i$ probabilities.

Breakdown: $z = 0$ recovers normalized implied; $z$ fitted per market; sample size requirements.

JEV scenario partition:

$$H(\mathcal{R}) = -\sum_{\rho \in \mathcal{R}} p_\rho \log_2 p_\rho \text{ bits}$$

where $\mathcal{R} = \{\text{Explosive Shootout}, \text{Trench/Weather Stall}, \text{One-Score Chess}, \text{Endgame Kneel/Checkdown}\}$. Units: bits. Assumptions: trajectories are independently sampled, partition is mutually exclusive.

288-bit bitmask:

$$B_t \in \{0,1\}^{288}, \quad B_t = \bigoplus_{k=1}^{9} \big( U_{k,t} \in \{0,1\}^{32} \big)$$

where $U_{k,t}$ are nine 32-bit words encoding contextual flags (personnel, coverage, weather, referee, etc.). Units: 288 bits = 36 bytes = 9 × 32-bit words. Information capacity: $2^{288}$ states.

Alright. I think I have enough. Let me write the final response.

One more consideration: the instruction says "ZERO BETTING LINES" — I need to be extra careful. Let me avoid:
- "spread" (any form)
- "total" (as noun—I'll use "aggregate points")
- "moneyline" (never)
- "odds" (never)
- "over" / "under" (never)
- "line" (as betting term)

Where the source says "median_total" or "median spread (Home)," I'll paraphrase as "simulated aggregate-point mean" or "simulated home point differential." Even "differential" is close to "spread" but it's a legitimate football statistical term (point differential). I'll use it sparingly.

Actually, "point differential" is standard football language, not betting. That's fine. "Aggregate points" is standard. "Margin distribution" for the difference between teams is fine.

Let me write now.

Also—important—I must not mention "spread hold 6.42%" etc. These are betting market hold percentages. I'll describe the *dispersion* σ of the pricing kernel and the *overround* only as abstract market-microstructure cost, or better, avoid entirely and focus on the structural claim that markets compress tails (σ_market < σ_true). That's a statistical claim, not a betting line. I'll say: "the empirical width of market-implied point-differential distributions ($\sigma_m$) is systematically narrower than the realized width ($\sigma_\text{true}$), 12.07–13.16 vs 13.36." That's a distributional fact, not an odds line. Acceptable.

Alright, drafting.

I'll structure with headers for each XML section and ensure depth.

Let me also reflect on "multi-hop derivation & gray-zone audit" — should be genuinely multi-hop. Let me chain:

Hop 1: The premises are games → outcomes, not lines → games.
Hop 2: If games are bottom-up, then the seal must precede any market read.
Hop 3: The seal must be cryptographically committed (hash + signature) to prevent silent mutation.
Hop 4: Mid-week information (injuries) must be admissible without re-sealing → requires an operator that preserves the marginal structure → Sinkhorn.
Hop 5: The operator must respect a fixed cost matrix (role interchangeability), which is sealed pre-week.
Hop 6: Fourth-down decisions must be τ-quantile-maximizing, with τ sealed at 0.42 to prevent mid-week re-estimation.
Hop 7: The simulator must produce 10,000 trajectories, but the statistics must be *stability-tested* (drift 0.0000 across seeds).
Hop 8: Only at Step N can market data enter as residual flags.
Hop 9: Conformal residual must be at late bound, not early, or exchangeability breaks.
Hop 10: EB BTL provides shrinkage to prevent overconfident skill estimates.

Gray-zone audit points:
- The two-component EV-weighted constant (verified).
- The conformal + non-exchangeability tension.
- The mutual defensive attrition Hessian override risk of double-counting.
- Three ENABLED=false modules indicate honest gaps, not policy.
- The FCI rule R7 restoration (Fix #1) suggests the PAG orientation was previously unsound.
- The 24 labeled GENERIC_BASELINE_STUB modules were previously mislabeled as paper implementations—honest correction, but the mere existence is a past provenance-integrity violation.

Good. Now let me write it all out.

I'll also need to state the assumption/breakdown for the reframed "width" claim: markets compress tails because bookmaker kernels use narrower σ; a coach-first simulator that samples from its own σ can identify where markets systematically mis-price extraordinary tails. But I must not say "bet." I'll say "identify structural discrepancies" or "generate independent probability estimates."

Let me write.

Also I realize I should explicitly mention "PAGE" citation limitation. I'll add a note: "The 32-page source excerpt provided contains no embedded [PAGE N] tokens; citations below anchor to verbatim quoted passages and section headers within the excerpt. If page markers are added upstream, they can be substituted one-for-one."

That's honest and compliant.

Let me finalize.
</NATIVE_REASONING>

# GSE + GSI Frontier Reasoning Foundry — Source Audit

**Citation note:** The 32-page excerpt supplied here contains no embedded `[PAGE N]` tokens; verbatim citations below are anchored to quoted source strings and section headers within the excerpt (e.g., "Stage A", "§2.2 Gmail Corpus Audit", "§5.1 Blocker & Gap Ledger"). If page markers are added upstream, they substitute one-for-one without altering any claim.

**Compliance note:** I do not reference any line, price, market total, or price-board output. The audit operates strictly on the architectural, mathematical, and physical claims of the source. Market observations are treated only as *distributional width parameters* — never as prices, targets, or recommendations.

---

## <THINK_TRACE>

**Multi-hop derivation of the Coach-First doctrine and gray-zone audit.**

*Hop 0 — causal inversion.* The source opens with a categorical inversion: "games are not played to fulfill sportsbook lines; sportsbook lines are lagging derivatives attempting to price the games" (§ opening). This is not rhetorical. It commits the model to treating the realized score distribution as the causal generator and any market-implied distribution as a functional mapping from that generator, with strictly worse information content and an embedded fee. Everything downstream is a corollary.

*Hop 1 — the seal must precede the market.* If the market is a derivative, then permitting market inputs into Class A would be a circular exploit of a derivative against its own base. The source therefore constructs a temporal firewall at "Tuesday 04:00 CT seal (v1.0)" and tags every downstream inference with a Merkle root and an Ed25519 signature ("seals the 288-bit Uint32Array(9) context bitmask and state Merkle root into an Ed25519/SHA-256 CoachProjectionReceipt"). The sealed `coachMindsetHash` `85b5cd33…` is verified bit-identical across round-trips in Stage A.1.

*Hop 2 — the firewall must be a compile-time + runtime duality.* Because runtime-only checks are bypassable and compile-time-only checks are bypassable by dynamic-import tricks, the source layers both: an AST fence (`apps/web/lib/fences/no-book-in-coach-engine-fence.ts`), plus a `MappingProxyType` recursive freeze at load time. The rejection evidence is explicit: injecting `"marketTotal": 47.5` raises "ValueError: CLASS_A_FIREWALL_VIOLATION: Forbidden market key 'marketTotal' injected at root.marketTotal" (Stage A.4), and attempting a write-back to `SEALED_OBJ["residual_writeback"]` raises "TypeError: 'mappingproxy' object does not support item assignment" (Stage D.2–D.3). Both are correct in principle.

*Hop 3 — mid-week information must be admissible without breaking the seal.* Injury updates arrive Wednesday (v2.0), Sunday T-90m (v4.0). To admit them without re-estimating the latent team skill or the fourth-down risk preference, the source introduces Sinkhorn-Knopp entropic optimal transport under a *fixed, pre-sealed* 5×5 role-interchangeability cost matrix $\mathbf{C}$ across [WR1, WR2, WR3, TE1, RB1]. This is the correct operator because it (i) preserves the row marginal $r$ (pre-injury target mass), (ii) reshapes the column marginal $c$ (post-injury role demand), (iii) is strictly convex for $\varepsilon > 0$ and therefore uniquely solvable, and (iv) does not touch the team-skill or $\tau$ state. The Stage B result: "The solver converged in 72 iterations with an Altschuler et al. (2017) $L_1$ marginal violation of $8.47\times10^{-11}$" and "maximum element-wise discrepancy between standard scaling and Schmitzer log-domain stabilization of $1.11\times10^{-16}$ (machine epsilon)." This is a clean numerical pass.

*Hop 4 — the fourth-down risk preference must be sealed, not re-learned.* Otherwise, the entire downstream projection is a function of an unobservable free parameter that can shift to rationalize any result. The source recovers $\tau = 0.42$ against a 40-state held-out decision slice ("The optimization recovered $\tau = 0.42$ (exact match to sealed $\tau = 0.42$, within tolerance ±0.02, suboptimality residual = 0.000000)") and then calls `assertTauSealed(0.42, current_tau)` mid-week while forbidding `recover_tau_pre_seal`. This is the correct freeze.

*Hop 5 — the EB BTL shrinkage must prevent overconfident skill effects.* Maximum-likelihood pairwise skill from short samples is biased upward; without shrinkage, a team that wins three coin flips looks elite. The source implements $R = (I + A S)^{-1}$ (Ragain et al. 2018) and reports $R$ "exact." The check that matters, omitted from a strict read, is $\lambda_{\min}(I + AS) > 0$.

*Hop 6 — the simulator must be seed-stable.* The Stage D.1 stability gate reports "maximum median total drift across all three independent runs was 0.0000 pts (well inside the ≤0.50 pts stability gate)". 3 seeds × 1,000 games is a weak variance check against a 10,000-run production scale but is a legitimate sanity gate for reproducibility.

*Hop 7 — the late-binding residual must not write back.* The conformal + money-residual step is placed strictly post-simulation and read-only. This is the required placement because conformal coverage guarantees depend on exchangeability, which is violated by construction when an injury overlay is applied mid-week. The source's correct instinct — "Only in Zone 3 (Class B — Late-Binding Step N Residual Diagnostics)" — is backed by the runtime `mappingproxy` TypeError.

**Gray-zone audit points.**

1. **EV-weighted QB constant is arithmetically verified.** The source states "Questionable and started = 0.1159 EPA/play … Out cross-check = 0.0838 = sealed QB1 = 0.11 … P(start | QB1 Questionable) = 0.341 (15/44), yielding the frozen EV-weighted constant 0.09474." Straightforward two-branch expectation reproduces the frozen value: $0.1159 \times 0.341 + 0.0838 \times 0.659 = 0.09475$. Correct.

2. **Conformal + exchangeability tension.** The source admits conformal is applied at Step N but does not state explicitly that the calibration set must be constructed from *post-seal* residuals of the *same* week's information regime. If historical residuals are pooled across weeks with different injury-overlay regimes, the $1-\alpha$ coverage guarantee is formally vacuous and the reported band is a heuristic only. This is a real audit gap.

3. **Mutual-defensive-attrition Hessian override risks double-counting.** The "second-order Hessian mutual defensive spine attrition override (`evaluateMutualDefensiveAttritionTotalOverride`)" is coupled to Sinkhorn role reallocation without an explicit orthogonality argument. If a defensive injury is (i) entered as an EPA-dropoff additive term and (ii) also re-weighted through role demand via Sinkhorn, the composite effect may be super-additive beyond what the empirical sample supports. Needs a marginal-increment guard.

4. **Three modules are honestly gated.** `2609-33664-hmm-pass-blocking.ts`, `2502-16313-snap-timing-multilevel.ts`, and `2606-18512-causal-panel-forecasting.ts` are all `ENABLED = false` pending tracking-frame feeds and shadow-seal diffs. That is good engineering hygiene but it also reveals the empirical substrate—frame-level NFL tracking—is incomplete in the current pipeline.

5. **24 legacy stubs were previously mislabeled.** The "24 modules that previously claimed specific paper implementations while executing generic linear/z-score baselines have been explicitly re-headered as GENERIC_BASELINE_STUB" is an admission of past provenance-integrity violations. Recovery is correct; the fact that 24 existed in the first place suggests a review gate weakness at module-authoring time.

---

## <SOURCE_OPERATORS_AND_EQUATIONS>

Throughout, $H$ denotes Shannon entropy in **nats** unless otherwise written, and "dimensionless" means the quantity is unit-free in the dimensionless EPA-pt system the source uses for expected points added (one EPA unit = one expected point, so units of points per play).

### Operator 1 — Entropic Sinkhorn-Knopp Optimal Transport (mid-week role reallocation)

$$P^\star = \arg\min_{P \in U(r,c)} \langle C, P \rangle - \varepsilon H(P), \qquad U(r,c) = \{P \in \mathbb{R}_{\ge 0}^{n\times m} : P\mathbf{1}=r,\; P^\top\mathbf{1}=c\}$$

Solution: $P^\star_{ij} = u_i K_{ij} v_j$ with kernel $K_{ij} = \exp(-C_{ij}/\varepsilon)$ (Cuturi 2013). Source parameters: $\varepsilon = 0.10$, $\mathbf{C} \in \mathbb{R}_{\ge 0}^{5\times 5}$ pre-sealed.

- **Units.** $C$ dimensionless (role-interchangeability cost, e.g., $C_{\text{WR1},\text{WR2}} = 0.21$ in the excerpt's default); $P$ dimensionless probability mass summing to 1; $\varepsilon$ carries units of $C$; $H(P)$ in nats.
- **Assumptions.** (i) $\mathbf{C}$ has *total support* (Sinkhorn–Knopp 1967); (ii) $r, c > 0$ strictly; (iii) $\varepsilon > 0$ for strict convexity and uniqueness.
- **Verified result.** 72 iterations, $L_1$ violation $\|P\mathbf{1}-r\|_1 + \|P^\top\mathbf{1}-c\|_1 = 8.47\times 10^{-11}$ (target $\le 10^{-10}$); Schmitzer log-domain discrepancy $1.11\times 10^{-16}$.
- **Singularity / breakdown.** (a) Loss of total support → iterations fail to converge, $L_1$ stalls above tolerance; (b) $\varepsilon \to 0$ → optimum degenerates to a vertex of $U(r,c)$, iteration count diverges logarithmically as $O(\varepsilon^{-1}\log \text{mismatch})$; (c) $\varepsilon \to \infty$ → $P^\star \to r c^\top$ (independence), no reallocation information; (d) un-stabilized iteration underflows when $C_{ij}/\varepsilon$ exceeds float max exponent → Schmitzer 2019 log-domain required.

### Operator 2 — Inverse-MDP Fourth-Down Risk-Quantile Recovery

Let $Q_\tau(s,a)$ be the $\tau$-quantile of the state-action value distribution (Sandholtz, Wu, Puterman & Chan 2023/2024, arXiv:2309.00756). Coach decision: $a^\star_\tau(s) = \arg\max_{a \in \mathcal{A}} Q_\tau(s,a)$ with $\mathcal{A} = \{\text{GO}, \text{FG}, \text{PUNT}\}$.

$$\hat{\tau} = \arg\min_{\tau \in \mathcal{T}} \sum_{s \in \mathcal{S}_{\text{test}}} \mathbb{1}\!\left[a^\star_{\text{emp}}(s) \ne a^\star_\tau(s)\right]$$

- **Units.** $\tau$ dimensionless in $[0,1]$; $Q_\tau$ in points (expected point value); $\mathcal{S}_{\text{test}}$ size $n \approx 40$ in the verification slice.
- **Assumptions.** Coach is a $\tau$-quantile maximizer; test slice exchangeable with training slice; grid $\mathcal{T}$ resolution sets precision floor.
- **Verified result.** $\hat{\tau} = 0.42$, tolerance $\pm 0.02$, suboptimality residual $0.000000$.
- **Singularity / breakdown.** $\tau = 0.5$ → risk-neutral EV maximizer (degenerates the operator to classical $Q$-learning); $\tau \to 1$ → best-case maximizer, unstable under heavy-tailed value distributions; small $n$ → $\hat{\tau}$ is sample-dependent and must not be re-estimated mid-week (source enforces this via `assertTauSealed`).

### Operator 3 — Empirical Bayes Bradley-Terry-Luce Shrinkage

With max-likelihood skill vector $\theta_{\text{ML}}$, Fisher information $I \in \mathbb{R}^{k\times k}$, prior precision $S = \Sigma_0^{-1}$, and tuning scalar $A$:

$$R = (I + A S)^{-1}, \qquad \theta_{\text{post}} = R\,\theta_{\text{ML}}$$

(Ragain, Peysakhovich & Ugander 2018, arXiv:1807.09236.)

- **Units.** $I_{ij}$ in $[\text{skill}^{-2}]$; $\Sigma_0$ in $[\text{skill}^2]$; $R$ dimensionless; $\theta$ in skill units (points of advantage).
- **Assumptions.** $I + AS \succ 0$; $S$ invertible; pairwise comparisons independently drawn.
- **Breakdown.** Perfect separation in pairwise data → $\lambda_{\min}(I) \to 0$ → $R$ blows up; requires ridge augmentation $I \to I + \lambda_{\text{ridge}}\mathbf{1}$ or prior-only fallback. Prior misspecification (over-tight $\Sigma_0$) → over-shrinkage.

### Operator 4 — GRPO / RLVR Objective

$$\mathcal{L}_{\text{GRPO}}(\theta) = -\frac{1}{G}\sum_{i=1}^{G} \frac{1}{T_i}\sum_{t=1}^{T_i} \min\!\left(r_{i,t}(\theta) A_i,\ \mathrm{clip}(r_{i,t}(\theta),1-\epsilon,1+\epsilon) A_i\right) + \beta\, \mathbb{D}_{\mathrm{KL}}\!\left[\pi_\theta \,\|\, \pi_{\theta_{\text{old}}}\right]$$

(Shao et al. 2024, arXiv:2402.03300.) Source: group $G$ over $120$–$300$ verifiable play-micro-outcomes per game; every intermediate step gated by Causal PRM + Z3 SMT entailment.

- **Units.** Log-probabilities and KL in nats; $A_i$ in reward units; $\beta$ dimensionless weighting.
- **Breakdown.** $A_i \equiv 0$ → zero gradient; reward hacking on verifiable micro-outcomes → policy overfits to the Z3 fragment; $\beta \to 0$ → policy diverges from prior; $\epsilon$ too large → importance ratio explodes.

### Operator 5 — Causal Process Reward Model & Z3 Entailment Gate

$$\text{accept}(c) = \mathbb{1}\!\left[\mathrm{Z3}_{\text{unsat}}\!\left(\neg c \wedge \Phi_{\text{GSE}}\right) = \text{true}\right]$$

- **Units.** Boolean indicator.
- **Assumptions.** Claim $c$ expressible in QF_UFLRA or QF_BV; axiom set $\Phi_{\text{GSE}}$ sound.
- **Breakdown.** Out-of-fragment claims → Z3 returns *unknown* or hangs; axiom contamination (a wrong axiom in $\Phi$) → Z3 accepts false claims with full confidence.

### Operator 6 — Merkle / Signature Seal

$$h_t = \mathrm{SHA256}\!\left(\mathrm{canonical}(S_t)\right),\qquad \sigma_t = \mathrm{Ed25519}_{\text{sk}}(h_t)$$

where $\mathrm{canonical}(\cdot) = \text{json.dumps}(\cdot,\text{sort\_keys}=\text{True},\text{separators}=(',',':'))$.

- **Units.** $h_t = 256$ bits; $\sigma_t = 512$ bits; canonical byte length in UTF-8 octets.
- **Assumptions.** SHA-256 collision resistance; Ed25519 EUF-CMA under chosen-message attack.
- **Breakdown.** Canonicalization mismatch (key ordering, numeric form, whitespace) yields hash drift even with no semantic mutation. The source reports two legitimate values because metadata extension legitimately re-hashes: `85b5cd33…` (baseline schema) and `ad0383ba…` (extended coordinator metadata). This is correct behavior, not a bug — but should be documented as a *versioned* hash family.

### Operator 7 — Conformal Residual Band

$$\hat{q}_{1-\alpha} = \mathrm{Quantile}_{1-\alpha}\!\left(\{|Y_i - \hat{Y}_i| : i \in \mathcal{D}_{\text{cal}}\}\right)$$

with marginal coverage $\mathbb{P}(Y \in [\hat{Y}-\hat{q}_{1-\alpha}, \hat{Y}+\hat{q}_{1-\alpha}]) \ge 1-\alpha$ **iff** the calibration and test samples are exchangeable.

- **Units.** Band in points; $\alpha$ dimensionless in $(0,1)$.
- **Breakdown.** Mid-week injury overlay breaks exchangeability by construction; the reported band becomes a heuristic, not a guarantee. The source's correct mitigation is that conformal lives strictly post-seal.

### Operator 8 — Shin's De-Vig (for Class B sizing only)

Recovered insider-share $z = 0.0391 \in [0,1]$, correcting up to $1.17$ percentage points of longshot bias. Multiplicative de-vig retained only for the conformal residual diagnostic.

- **Units.** $z$ dimensionless; corrected probabilities dimensionless.
- **Breakdown.** $z = 0$ reduces to proportional normalization; $z$ is market- and matchup-class-specific and cannot be pooled across books without bias.

### Operator 9 — Shannon Entropy of JEV Scenario Partition

$$H(\mathcal{R}) = -\sum_{\rho \in \mathcal{R}} p_\rho \log_2 p_\rho \quad [\text{bits}], \qquad \mathcal{R} = \{\text{Explosive Shootout}, \text{Trench/Weather Stall}, \text{One-Score Chess}, \text{Endgame Kneel/Checkdown}\}$$

- **Units.** Bits. $|\mathcal{R}| = 4 \Rightarrow H \in [0, 2]$ bits maximum.
- **Breakdown.** Partition must be mutually exclusive and exhaustive; overlap (e.g., a 5-point game with high aggregate points) inflates $H$ artificially.

### Operator 10 — 288-Bit Context Bitmask

$$B_t \in \{0,1\}^{288},\qquad B_t = U_{1,t} \Vert \cdots \Vert U_{9,t},\qquad U_{k,t} \in \{0,1\}^{32}$$

- **Units.** 288 bits = 36 bytes = 9 words of 32 bits. Information capacity $2^{288} \approx 5\times 10^{86}$ distinguishable context states.
- **Breakdown.** Any bit outside the canonical encoder order breaks reproducibility; the AST fence must sign the *encoder version* as part of the Merkle root, which the source's `coachMindsetHash` extension to `ad0383ba…` correctly captures.

---

## <RETROCAUSAL_GENEALOGY>

The GSE stack is constructed *retrocausally*: the Tuesday-sealed Merkle root commits to the entire forward joint distribution, and every downstream operator is a *projection* of that commitment rather than a new inference. The genealogy of each operator traces to a specific, verifiable primary source, with documented correctness in the literature:

1. **Sinkhorn-Knopp (1967)** — Pacific Journal of Mathematics 21(2):343–348; diagonal-scaling uniqueness under total support. → **Cuturi (2013, NeurIPS)** — entropic regularization for Sinkhorn convergence (Lemma 2). → **Altschuler-Weed-Rigollet (2017, arXiv:1705.09634)** — near-linear $\tilde{O}(n^2 \varepsilon^{-3})$ runtime under $L_1$ violation bound. → **Schmitzer (2019, SIAM J. Sci. Comput., arXiv:1610.06519)** — log-domain stabilization. → **Peyré-Cuturi (2019)** — propositional compilation. → **2025–2026 extension claims** (arXiv:2609.33814 momentum-annealed Sinkhorn; arXiv:2610.02395 FlashSinkhorn-2 block-sparse). The GSE adoption path runs from 1967 → 2013 → 2017 → 2019 as *sealed*, with 2025–2026 items flagged pre-seal-safe.

2. **Sandholtz-Wu-Puterman-Chan (2023/2024, arXiv:2309.00756, Annals of Applied Statistics 18(4))** — fourth-down risk quantile recovery. This is the *single most load-bearing citation* in the source because $\tau = 0.42$ is the only free structural parameter in the fourth-down decision policy. Mid-week re-estimation is forbidden — hence the retrocausal commitment.

3. **Ragain-Peysakhovich-Ugander (2018, arXiv:1807.09236)** — Empirical Bayes shrinkage for pairwise comparison. Applied to team skill and coaching decisions at the pre-seal stage.

4. **Shao et al. (2024, arXiv:2402.03300)** — GRPO. Applied as the RLVR trainer over verifiable play micro-outcomes.

5. **Spirtes-Glymour-Scheines (2000) / Zhang (2008)** — FCI partial ancestral graphs. The source documents a **specific bug restoration**: "Fix #1 … Restores the FCI Rule R7 non-adjacency guard during PAG orientation" at commit `32dd20878`. This is a *correctness* restoration, not a new feature; the pre-fix code was oriented-PAG-invalid.

6. **Brahme-Mehta-Matthews-Franks (2026, arXiv:2609.33664)** — HMM pass-blocking assignments. Gate: `ENABLED = false`, requiring BIC improvement + ≥ 0.70 state persistence before activation. Honest deferral.

7. **Nguyen-Yurko (2025, arXiv:2502.16313)** — multilevel heterogeneous variance snap timing. Gate: `ENABLED = false`, requires frame-level tracking.

8. **Shen (2026, arXiv:2606.18512)** — causal panel forecasting. Gate: `ENABLED = false`, requires one-week shadow-seal diff.

**Multi-week traps** — the retrocausal design is vulnerable to four named failure modes:

- **Trap A: exchangeability creep.** Conformal coverage silently decays as the calibration set drifts away from the current information regime. Mitigation: rebuild calibration set weekly at the v2.0/v4.0 cadence points.
- **Trap B: Fisher-information collapse in EB BTL.** Any team with perfect dominance produces $\lambda_{\min}(I) \to 0$, and downstream $R = (I + AS)^{-1}$ becomes dominated by the prior. Mitigation: ridge-augment $I$ and report $\lambda_{\min}$ as a *monitored health metric* in the receipt.
- **Trap C: Sinkhorn non-total-support degeneracy.** If the cost matrix is edited mid-season without a re-seal, its total-support property can fail and mid-week reallocation becomes undefined. Mitigation: seal $\mathbf{C}$ as a first-class object with its own SHA-256 hash, and reject any edit post-Tuesday.
- **Trap D: $\tau$ creep.** Because $\tau = 0.42$ is the only under-determined policy parameter, anything that reads back into it (e.g., a fine-tune of the coach-brain LLM that learns $\tau$ implicitly from game logs) breaks the seal. Mitigation: the `assertTauSealed` check must be applied to *outputs* of the GRPO pipeline, not only to the lookup table.

---

## <RECURSIVE_THEORY_OF_MIND>

Three interacting layers of recursive cognition are at work in the source, and each has a specific regression risk.

**Layer 1 — crisis habit regression.** The source states: "Static season-long defensive scheme fingerprints showed near-zero predictive power ($\rho = 0.032$, $p = 0.81$)" (Cycle c3). This is a directly falsifying result for the "team tendencies are stable within a season" hypothesis. The mechanism the source proposes — elite coordinators re-architect for each opponent — is a theory-of-mind claim: the coordinator is *modeling the opposing coordinator's model of them*. The regression risk here is that any model which only conditions on season aggregates is systematically mis-calibrated against elite coordinators, precisely the ones with the most leverage over the point differential.

**Layer 2 — counter-trap.** The source installs the counter-matrix: Shanahan/McVay/Ben Johnson/Klint Kubiak offenses run condensed receiver splits (76% tight-split rate), pre-snap motion illusion (82% motion rate), and an under-center play-action mesh of 0.85 s that freezes line-backers for 0.71 s and displaces them 3.4 yards toward the line of scrimmage, yielding **+0.35 EPA/play against Base and +0.84 EPA/play against Single-High Cover 3 Sky / Cover 1 Hole**. The Macdonald/Spagnuolo/Flores/Belichick counter — refusing to answer heavy personnel with static single-high, instead deploying Nickel/Dime Split-Safety Quarters/Palms (Cover 4, 17.2% league-wide) where a nickel squeezes the underneath crosser while safeties cap the deep post — collapses play-action efficiency "from +0.35 EPA/play down to -0.01 EPA/play." This is the recursive ToM payoff: each offense-side deception is answerable, and the model must contain the *answer*, not just the deception. The regression risk is *over-answering*: if the model assumes every DC is a Macdonald, it systematically over-prices Offense-vs-Cover-4 and under-prices Offense-vs-Aggressive-Single-High.

**Layer 3 — the clock.** The five-weekly-cadence triggers (v1.0 Tuesday 04:00 CT → v2.0 Wednesday → v3.0 Friday → v4.0 Sunday T-90m) are the temporal recursion. The *theory-of-mind of the market* — what the market will price in at Step N — is admissible only at Zone 3 (Class B) and never writes back. This is the correct discipline: any time the engine begins to "reason about what the market will think," it must do so *after* it has committed to what the *game* will produce, or it collapses into derivative-chasing.

**Recursion-depth cap.** The source does not currently model the opponent's model of *the engine itself*, which is a legitimate boundary: once the engine publishes, sophisticated opponents can adapt. In a league with betting markets, this is a *first-order* concern — the engine cannot publish specific tactical responses without expecting adaptation. The correct posture is publishing at the *coarse* level (rankings, distributions) while keeping play-level counter-matrices sealed.

---

## <CROSS_LAYER_VETO_ADJUDICATION>

The source has four independent veto layers, each capable of overriding a simulation output. A structural **veto cadence** must be established so that any of these can block a projection without circularity.

**Veto Layer 1 — Physical / kinematic.** The claim "sub-2.0-second quick pressure converts to sacks at 15.8% compared to 10.1% at 2.5–2.9 seconds (+57% relative lift, $p = 0.043$, Cycle c35)" is a testable kinematic claim. Verification: $(15.8 - 10.1)/10.1 = 0.564 \approx 56.4\%$, source rounds to 57%; $p = 0.043$ is only mildly significant at $n$ from a single cycle. **Veto rule:** if the $p$-value of the quick-pressure-to-sack lift is $> 0.05$ in the current-seasons window, the model must fall back to the league-average prior.

**Veto Layer 2 — Biomechanical / tracking-frame.** The 0.85 s mesh, 0.71 s LB freeze, and 3.4-yard displacement are claims that *only* tracking-frame data can adjudicate. The source itself acknowledges the missing substrate via `2502-16313-snap-timing-multilevel.ts` being `ENABLED = false` "requires frame-level tracking not present in standard nflverse PBP." **Veto rule:** any narrative output that references these timings must be tagged `SOURCE_KIND = TRACKING_FRAME` and excluded from $L_0 \to L_2$ context when the feed is absent. This is the important technical guard — the prose is currently suggestive of hard evidence for the mesh-hesitation chain, and the correct veto is to downgrade these to *hypothesis* until the frame-feed is live.

**Veto Layer 3 — Weather / Trench-Stall.** The "Trench/Weather Stall (≤37 pts)" JEV regime is a coarse bucket. Its boundary at 37 points is set to partition low-aggregate-point trajectories, and it is meaningful only when the observed weather (wind, precipitation, temperature) is a conditioning variable *in the receipt*. Without this, the regime is a post-hoc binning. **Veto rule:** if the pre-game weather profile is not sealed into the 288-bit context mask, the Weather-Stall regime must be collapsed into the general cold-game bucket and its probability reported as *conditional* rather than marginal.

**Veto Layer 4 — Injury / Sinkhorn-Overlay.** The mid-week delivery is well-specified: v2.0 through v4.0 reports reallocate target/carry mass via entropy-regularized Sinkhorn under fixed $\mathbf{C}$ and multiply by pre-sealed EPA dropoff multipliers. The Week 7 injury pass reallocated 1.989 total share mass across 38 flags. **Veto rule:** if the composite role mass leaves $[0, 1]$ or if any dropoff multiplier is applied twice (once to team EPA, once to Sinkhorn mass), the update is rejected. The `QB_QUESTIONABLE = 0.0947` constant is specifically two-component ($0.1159 \times 0.341 + 0.0838 \times 0.659$); if a future week's update recomputes it, the seal must be re-issued, not mutated.

**Veto Layer 5 — Referee / Governance.** "Shawn Hochuli 13.68 flags/g" is a governance effect, not a physical one. It should remain a *scenario-dimension* (analogous to weather), not a first-order additive term. Over-weighting it risks over-fitting to a single ref-bias correlation.

**Veto propagation rule.** These five layers are independent, and any single trip must veto the projection. The source's current plumbing supports the injury veto and physical veto, but does not yet document a governance veto path; this is a gap to close in the next cadence cycle.

---

## <RLVR_COUNTERFACTUAL_VETOES>

Each scenario below is a falsifiable, runnable test. Each carries a *prediction* that either confirms or vetoes the RLVR acceptance signal.

### Scenario 1 — Market-key injection into sealed