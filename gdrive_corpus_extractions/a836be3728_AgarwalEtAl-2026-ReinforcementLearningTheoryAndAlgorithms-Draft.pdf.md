---
source: "AgarwalEtAl-2026-ReinforcementLearningTheoryAndAlgorithms-Draft.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-d-models"
pages: 227
model: deepseek/deepseek-v4.1-flash-1017
words: 7329
---

<NATIVE_REASONING>
The user has provided a huge source document (a 227-page RL theory textbook draft). They want me to produce a response with specific sections. I need to follow the strict invariants:

1. No betting lines - none of these should appear.
2. ZERO TOY EQUATIONS - state formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. ≥1,000-word depth across exact XML sections.

The document is about RL theory, not sports betting. The "DRIVE SOURCE" and "GSE-GSI-Mega-Sweep" framing seems like a template from a sports-betting context, but the content is RL theory. I need to produce a rigorous technical analysis of the source with the required XML sections.

I must NOT include betting content. But the request asks for "RETROCAUSAL_GENEALOGY" (historical/scientific lineage), "RECURSIVE_THEORY_OF_MIND" (crisis habit regression vs counter-trap vs clock), "CROSS_LAYER_VETO_ADJUDICATION" (physical/biomechanical/weather veto proof), "RLVR_COUNTERFACTUAL_VETOES" (3 verifiable RLVR veto scenarios + predictions).

These sections are framed in sports-betting/decision-making language ("crisis habit regression," "counter-trap," "clock," "physical/biomechanical/weather veto"). I need to reinterpret these into the RL theory context where possible, OR note that the source is not a betting source and reframe the sections to the mathematical/algorithmic content. The "GSE+GSI Frontier Reasoning Foundry" suggests I should be doing a frontier reasoning audit. Let me reinterpret:

- RETROCAUSAL_GENEALOGY: historical/scientific lineage - I can trace the genealogy of ideas in the textbook (Bellman → policy iteration → function approximation → lower bounds). Multi-week traps = the structural impossibility results (linear realizability is exponentially hard, offline impossibility, agnostic horizon barrier).
- RECURSIVE_THEORY_OF_MIND: This is hard to map. In the RL theory context, I can reframe as "meta-reasoning about algorithmic self-modeling" - i.e., how the learner models the MDP, models its own policy, and the recursive structure of Bellman backups versus the "clock" of horizon (finite vs infinite). "Crisis habit regression" = pathological reinforcement of bad habits like optimism without coverage; "counter-trap" = the negative results that trap naive approaches; "clock" = the horizon/discount dependence and per-iteration iteration complexity.
- CROSS_LAYER_VETO_ADJUDICATION: "Physical/biomechanical/weather veto proof" doesn't apply. But I can reinterpret as "cross-layer veto" between statistical, computational, and information-theoretic layers. In the source: sample complexity vs computational complexity vs information-theoretic lower bounds. These are layers that can veto each other (e.g., favorable statistical rates vetoed by computational hardness of LinUCB's ellipsoidal optimization, or the computational complexity layer vetoing planning). So "veto proof" = proof that one layer cannot rescue another. I'll map "physical" to statistical/finite-sample, "biomechanical" to computational complexity, "weather" to information-theoretic hardness.
- RLVR_COUNTERFACTUAL_VETOES: RLVR = Reinforcement Learning with Verifiable Rewards. This is a real thing. I can construct 3 verifiable veto scenarios: counterfactual predictions from the theory where a claimed method would be vetoed by the theorems. E.g., "if you remove coverage assumption (4.1), Proposition 4.6 shows offline RL fails with suboptimality ≥ Vmax/4"; "if you use linear Q* realizability alone with a generative model, Theorem 3.10 gives exponential sample lower bound"; "if you use average KL trust region (TRPO practical) instead of pointwise TV, the counterexample in 12.2.2 shows monotonic improvement fails."

Now I need to produce ≥1,000 words across THINK_TRACE ≥400 words. Let me carefully write this.

I'll cite pages verbatim. Let me pick key quotes with page numbers:

- Page 26, Theorem 2.6 (Minimax upper bound): sample complexity |S||A|N ≥ c|S||A|/(1−γ)^3 log(c|S||A|/δ)/ε²
- Page 33-34, "naive 'learn-P-then-plan' intuition suggests ... |S|²|A| ... with a generative model ... sublinear ... |S||A| rather than |S|²|A|" (Page 33)
- Page 46, "linear Bellman completeness ... turns dynamic programming into a sequence of regression problems"
- Page 57, Theorem 3.10: "linear Q⋆ realizability alone does not prevent exponential sample complexity" (page 45-46 actually). Let me check: Page 45, Theorem 3.10. Page 46: "Thus, by backward induction ... " No, the theorem is on page 45.
- Page 58-62, Theorem 3.13: offline policy evaluation exponential under all-policies linear realizability, Ω((d/2)^H).
- Page 61: "V π_0(g0) = α0 = r∞ m^{H/2}" and "estimating that tiny mean to constant confidence requires Ω(m^H) samples"
- Page 69-70, Proposition 4.6: no coverage ⇒ offline RL impossible; suboptimality ≥ Vmax/4.
- Page 128-129, Lemma 10.7 and Theorem 10.8: NPG convergence V(T)(ρ) ≥ V⋆(ρ) − log|A|/(ηT) − 1/((1−γ)²T).
- Page 133-134, Lemma 11.3 (NPG regret lemma) with O(1/√T) rate.
- Page 138, Theorem 11.6: approximation error d⋆/ν and estimation κ.
- Page 147-148, PPO and limitations of average trust region; counterexample on page 148.
- Page 108, Theorem 8.6: Bellman rank PAC guarantee with εgen √(dH³ ln(...)).
- Page 205-206, Theorem B.1: exp(Ω(min{d,H})) lower bound.
- Page 19-20, Bellman optimality equations.
- Page 13-14, contraction lemma 1.10, Q-error amplification 1.11.
- Page 190-191, Lemma A.6 Bernstein, Lemma A.7 Freedman.
- Page 37, chain MDP with (1/A)^H probability of reward: "This happens with probability (1/A)^H, which is exponentially small in the horizon." Actually this is page 86: "This happens with probability (1/A)^H" - let me check. Page 86 (Figure 6.1 discussion). Yes.
- Page 86: "the expected number of episodes before such a policy reaches the rewarding state even once is on the order of A^H"
- Page 130, Proposition 10.1: vanishing gradients, "∥∇^k_θ V^{π_θ}(s0)∥ ≤ (1/3)^{H/4}"
- Page 131-133, Theorem 10.3: "If η ≤ (1−γ)³/8, then for every state s, V^{(t)}(s) → V⋆(s) as t → ∞."
- Page 187-188, Theorem 14.1 Riccati equations.
- Page 194-198, SLS convex parameterization.

Also note the singularity/breakdown regimes:
- Bellman operator contraction: requires γ<1; at γ=1, (I−γP^π) not invertible (page 17, Corollary 1.5).
- Coverage: ν(s,a)=0 with d^π_μ(s,a)>0 gives ratio +∞ (page 66, Assumption 4.1).
- Assumption 11.5 relative condition number κ finite requires Σν positive-definite on support of d⋆.
- Feature augmentation non-monotonicity of Bellman completeness (page 49).
- Under Assumption 7.1, operator norm bound ∥(μ⋆_h)^⊤ f∥_2 ≤ √d ∥f∥_∞.

Units: The document mostly works in dimensionless normalized reward units (r ∈ [0,1]), probability, and sample counts. There are no SI units. I should state that "units" are: rewards in [0,1] (dimensionless), sample counts (nats of information when log), error metrics in sup norm, and probability in [0,1]. Information-theoretic units: nats (natural log) for KL divergences and log factors; sample complexity measured in number of generative-model queries or episodes.

Actually the instructions say "State formal LaTeX equations, SI/information/probability units". I'll state: all rewards are dimensionless in [0,1]; concentration bounds use nats (log = natural log per page xi: "log denotes the natural logarithm"); sample complexity in queries/episodes; KL divergence in nats.

Now, let me think about the "retrocausal genealogy" - trace historical lineage:
- Bellman 1956 (cited page 19, Theorem 1.8 "also due to Bellman [1956]")
- Puterman 1994 comprehensive DP
- Ye 2011 policy iteration strongly polynomial
- Kakade 2003 thesis
- Kearns & Singh 1999 generative model
- Azar et al. 2013 minimax PAC
- Sidford et al. 2018, Agarwal et al. 2020c plug-in optimality
- Jiang et al. 2017 Bellman rank
- Jin et al. 2020 linear MDP
- Weisz et al. 2021a lower bound
- Wang et al. 2020a / Zanette 2021 offline lower bounds
- Agarwal et al. 2020d NPG theory
- Fazel et al. 2018 LQR
- Jordan et al. 2024 Muon / Liu et al. 2025

"Multi-week traps" - I'll interpret as the persistent wrong intuitions that take weeks to dislodge: (i) "realizability is enough" (Theorem 3.10, 3.13 refute), (ii) "coverage in average is enough for TRPO" (Section 12.2.2 counterexample), (iii) "horizon amplification is intrinsic" (Theorem 2.6 second bullet shows not), (iv) "Bellman completeness is monotone in features" (page 49 non-monotonicity), (v) "optimism scales as S√AK" (Section 6.5 improves to √SAK).

Now, this is a technical audit; I must not include any betting content. The required XML skeleton includes terms like "crisis habit regression," "counter-trap," "clock," "physical/biomechanical/weather veto." I will explicitly note that these are being mapped onto the RL-theoretic structure of the source (since the source is not a betting file), and I'll use them as reasoning-guard terms. Actually I should be careful: the instructions say "STRICT INVARIANTS" and give the XML section structure. I'll fill each section with substantive content, using the required vocabulary as structural tags but explaining the mapping. The "clock" can map to the horizon / iteration clock. "Crisis habit regression" can map to the tendency of algorithms to regress to pathological behavior (e.g., optimizing surrogate without trust region) and the theoretical conditions that prevent it.

I also need to be honest: this is not a betting source, no lines. I'll produce a rigorous academic audit.

Let me draft.

Word count: I need ≥1000 words total, THINK_TRACE ≥400. I'll aim for ~2500-3500 words total.

Let me structure:

<THINK_TRACE> (~600-800 words)
- Multi-hop derivation: from Bellman fixed point to contraction to sample complexity to lower bounds. The chain: Bellman optimality (Page 20, Eq 1.4) → contraction (Lemma 1.10, Page 24) → Q-error amplification (Lemma 1.11, Page 24-25) → model-based estimation (Prop 2.1, Page 34) → sublinear |S||A| result (Page 33-34) → minimax lower bound (Theorem 2.7, Page 39) → horizon calibration (Page 39). Then the function-approximation branch: Bellman completeness (Page 49) → LSVI (Page 51) → lower bounds (Theorem 3.10 Page 45, Theorem 3.13 Page 58). Then exploration: UCBVI (Page 87) → counting lemma (Page 91) → improved √SAK (Page 92). Then policy optimization: NPG (Page 137-140) → function approximation regret lemma (Page 146). Then LQR (Page 186-197).
- Gray-zone audit: where the theory's assumptions bind: (a) γ→1 singularity in (I−γP^π)^{-1} (Page 17, 25); (b) coverage ratio blowup (Page 66, 69-70); (c) the "burn-in" restriction ε ≲ 1/√(1−γ) in Theorem 2.6 (Page 39); (d) ϵ-net covering number blowup d(d+1)/2 (Page 205); (e) the finite-horizon H vs 1/(1−γ) correspondence is heuristic ("One rough correspondence is H ≍ 1/(1−γ)" Page 40).

<SOURCE_OPERATORS_AND_EQUATIONS> (~800 words)
- The Bellman optimality operator T, Eq (1.4) / (0.1), Page 12/20.
- Contraction lemma 1.10, Page 24.
- Q-error amplification, Lemma 1.11, Page 24.
- Performance difference lemma, Lemma 1.16, Page 31.
- Model-based accuracy Prop 2.1, Page 34.
- Theorem 2.6 minimax rate, Page 38-39, with units.
- Bernstein deviation, Lemma 2.10, Page 41; Freedman Lemma A.7 Page 202.
- Bellman completeness (3.1), Page 49.
- D-optimal design Lemma 3.1, Page 51.
- Theorem 3.13 lower bound, Page 58, with Ω((d/2)^H).
- UCBVI bonus (6.1), Page 87, and Theorem 6.1/6.7, Page 88/92.
- Lin-UCBVI, Page 102.
- Bellman rank defs, Page 108-109; Theorem 8.6 Page 112.
- Policy gradient Theorem 9.4 Page 124.
- NPG update (10.7) Page 137; Theorem 10.8 Page 139.
- Compatible function approximation Lemma 11.1-11.2, Page 143-144; Theorem 11.6 Page 148.
- CPI Theorem 12.2 Page 155; TRPO counterexample Page 148.
- Orthogonalized PG, Lemma 12.5 Page 162.
- Riccati equations Page 187; SLS Page 195.
- Singularity/breakdown regimes explicitly.

<RETROCAUSAL_GENEALOGY> (~400 words)

<RECURSIVE_THEORY_OF_MIND> (~400 words)

<CROSS_LAYER_VETO_ADJUDICATION> (~400 words)

<RLVR_COUNTERFACTUAL_VETOES> (~400 words)

Total ~3200+. Good.

Let me be precise about quotes. I have the source text; I'll cite with [PAGE N] and quote exactly.

Key verbatim quotes I can use:
- Page 33: "a naive 'learn-P-then-plan' intuition suggests that one might need on the order of |S|²|A| observed transitions. One of the main takeaways of this chapter is that this intuition is overly pessimistic: with a generative model, one can compute a near-optimal policy from a number of samples that is sublinear in the model size—scaling (up to horizon and logarithmic factors) like |S||A| rather than |S|²|A|."
- Page 39: "A black-box route using Lemma 1.11 would yield an additional 1/(1−γ) loss (the 'horizon amplification' phenomenon discussed earlier). The second bullet shows that, with a sharper (variance-sensitive) argument, this amplification can be avoided."
- Page 39: "the minimax sample complexity for constant-accuracy estimation of Q̄⋆ scales like # samples ≈ |S||A|/(1−γ) · 1/ε²"
- Page 45: "Theorem 3.10 shows that linear Q⋆ realizability alone does not prevent exponential sample complexity."
- Page 46: "the sample complexity can be exponential in the horizon."
- Page 49: "A perhaps surprising subtlety is that Bellman completeness is not monotone in the feature map."
- Page 62: "Recalling d = 2m, this is Ω((d/2)^H), establishing Theorem 3.13."
- Page 61: "estimating that tiny mean to constant confidence requires Ω(m^H) samples"
- Page 69: "for any (possibly randomized) offline algorithm A that maps D to a policy bπ, we have max{...} ≥ (1/4) Vmax"
- Page 86: "This happens with probability (1/A)^H, which is exponentially small in the horizon."
- Page 88: "The dependence on S in Theorem 6.1 is not optimal: the leading term scales like S√AK rather than √SAK."
- Page 92: "The leading dependence on (S, A, K) is optimal up to factors depending on H"
- Page 108: "This chapter develops a more general lens for generalization in reinforcement learning."
- Page 119: "first-order stationarity alone is not enough for global optimality, but additional structure can restore strong guarantees."
- Page 121: "the worst-case convergence rate is believed to be extremely slow"
- Page 128: "It is not expected that these methods admit finite-time polynomial guarantees in the relevant structural quantities"
- Page 131: "The theorem is asymptotic, and the worst-case convergence rate is believed to be extremely slow." (Wait this is page 121 for Theorem 10.3 discussion.) Let me double check. Page 121: "The theorem is asymptotic, and the worst-case convergence rate is believed to be extremely slow." Yes page 121.
- Page 138: "the effectiveness of these updates is governed by a precise approximation–estimation decomposition based on compatible function approximation."
- Page 147: "the monotonic improvement guarantee from TRPO does not hold anymore."
- Page 148: "the practical version of TRPO ... does not yield the promised monotonic improvement."
- Page 162: "this approach ensures a conservative policy update, i.e., the new policy after one step of update is close to the old one in total variation distance across all states."
- Page 174: "This model is an MDP, with continuous states and actions."
- Page 186: "The noise variance σ² does not impact the optimal policy, in either the discounted case or in the infinite horizon case."

Good. Let me now also mention units clearly: "rewards r(s,a) ∈ [0,1] dimensionless (Page 15: 'A reward function r : S ×A →[0, 1]'); log denotes natural logarithm (Page xi: 'Unless specified otherwise, log denotes the natural logarithm'); sample counts measured in generative-model queries or episodes."

Now, for the "RECURSIVE_THEORY_OF_MIND" — I need to be careful and honest. I'll map:
- "crisis habit regression": the algorithmic tendency to regress to policy-improvement pathologies when the trust region is averaged (Section 12.2.2, Page 148); and the policy-gradient method's reliance on coverage (Page 121).
- "counter-trap": the negative results that are traps: Theorem 3.10 (linear Q⋆), Theorem 3.13 (offline all-policy realizability), Proposition 4.6 (no coverage), Section 4.2 (agnostic horizon barrier |A|^H).
- "clock": the horizon/iteration clock: (1−γ)^{-1} effective horizon, H, and the iteration T; the theory's "clock" is the number of samples or episodes, and the "clock mismatch" is the H ≍ 1/(1−γ) heuristic (Page 40). Also the clock of UCBVI's N^k_h(s,a) counts (Page 87), and the elliptical potential clock (Page 105).

For "CROSS_LAYER_VETO_ADJUDICATION": layers = information-theoretic, statistical, computational. "Physical" → statistical/finite-sample; "biomechanical" → computational/complexity; "weather" → adversarial/hardness environments. Veto proof: 
- Statistical cannot veto computational: LinUCB's ellipsoidal optimization may be computationally hard even when statistically fine (Page 80, 84).
- Computational cannot veto information-theoretic: information-theoretically impossible under no coverage (Prop 4.6, Page 69-70).
- Layer separation: Theorem 3.10 lower bounds are information-theoretic; they hold "even with excellent coverage, and even when an algorithm is given the feature map as input" (Page 47).
- Another veto: the H^6 vs H^4 in LSVI vs LSPE (Page 57: "The improvement from H⁶ (offline LSVI) to H⁴ (offline LSPE) reflects that for evaluation we only need value accuracy under a fixed policy") — this is a cross-layer (control vs evaluation) veto of blunt horizon accounting.
- The "burn-in" restriction ε ≲ 1/√(1−γ) (Page 39): statistical layer veto on the regime of validity.

For "RLVR_COUNTERFACTUAL_VETOES": provide 3 verifiable predictions:
1. Coverage-removal veto: train offline FQI (Theorem 4.3) on data with ν(s,a1)=0 while optimal policy uses a1 → expected suboptimality ≥ Vmax/4 (Prop 4.6). Prediction: any offline RL run on the two-action one-state instance will output a policy with max expected suboptimality ≥ (1/4)(1/(1−γ)). Verifiable by construction.
2. Linear-realizability veto: given a feature map with Q⋆_h = ⟨θ⋆_h, φ⟩ for all h, but no Bellman completeness, a least-squares dynamic programming algorithm on the many-action construction of Theorem 3.10 requires min{2^{c₂d}, 2^{c₂H}} generative samples to get within 0.05 with prob 0.1. Prediction: empirical scaling in d and H will be exponential, not poly(d,H); the break-even point is measurable.
3. Average-KL trust-region veto: take the three-state MDP of Section 12.2.2 (Page 148); practical TRPO with average KL constraint and any α>0 yields J(π') = −αγR < J(π)=0. Prediction: monotonic improvement is violated for every α>0; the surrogate increases while true value decreases. Verifiable by direct simulation of the 3-state instance.

Also could add as fourth: "UCBVI S-factor" veto: the simple analysis gives H²S√(AK) (Theorem 6.1, Page 88), but the refined analysis gives H²√(SAK) (Theorem 6.7, Page 92). Prediction: empirical regret scaling with S at fixed SA will follow √S, not S, when using Bernstein bonuses. That's a shape prediction.

I'll include 3 as required, maybe mention the fourth.

Now let me write the response. I need to make sure THINK_TRACE ≥400 words. Let me write.

One more check: the instruction says ">= 1,000-WORD DEPTH across these exact XML sections". I'll easily exceed.

Also must ensure no betting lines. None.

Let me write carefully with LaTeX.

For the operators section, I'll be explicit about dimensions/units:
- Q, V are real-valued estimated/true value functions; reward r(s,a) ∈ [0,1] dimensionless.
- Discounted value bound ∥V^π∥_∞ ≤ 1/(1−γ) (Page 16, Page 34).
- Probability δ ∈ (0,1); log natural (nats).
- Sample counts n ∈ ℕ.
- Covering number N(F,ε,∥·∥_∞) is a cardinality (dimensionless count).

Breakdown regimes:
1. γ=1: (I−γP^π) singular; Corollary 1.5 proof uses γ<1 to get (1−γ)∥x∥_∞>0 (Page 17). Contraction lemma fails.
2. ν(s,a)=0 but d^π_μ(s,a)>0: concentrability ratio +∞ (Assumption 4.1, Page 66); offline impossibility (Prop 4.6).
3. Σν singular in the direction of Σ_{d⋆}: κ = +∞ (Assumption 11.5, Page 148).
4. Feature augmentation: Bellman completeness can break (Page 49).
5. ε-net dimension d(d+1)/2 blows up (Lemma A.15, Page 205).
6. Burn-in: Theorem 2.6 planning bullet requires ε ≤ 1/√(1−γ) (Page 39).
7. εgen in Theorem 8.6: if εgen is not small, R = √T εgen and the guarantee degrades as C εgen √(dH³ ln(...)) (Page 112).

I'll cite these.

Also operators: T, T_h, T^π, T_h^π. Greedy policy π_Q. Occupancy d^π_μ. Fisher matrix F_ρ(θ). Compatible approximation w⋆. Bellman rank factorization E_h(f,g)=⟨X_h(f),W_h(g)⟩. LQR Riccati.

Let me now write the final answer. I'll use headings as XML tags exactly as required.

Length management: I'll write substantial paragraphs. Let me draft now.

For verbatim quotes I must be careful to reproduce exactly. I'll use a few short ones to be safe, with page markers.

Quotes I'll use (verified in source text):
- Page 33: "with a generative model, one can compute a near-optimal policy from a number of samples that is sublinear in the model size—scaling (up to horizon and logarithmic factors) like |S||A| rather than |S|²|A|."
- Page 39: "this amplification can be avoided"
- Page 45: "linear Q⋆realizability alone does not prevent exponential sample complexity."
- Page 49: "Bellman completeness is not monotone in the feature map."
- Page 86: "This happens with probability (1/A)^H, which is exponentially small in the horizon."
- Page 88: "The dependence on S in Theorem 6.1 is not optimal: the leading term scales like S√AK rather than √SAK."
- Page 119: "first-order stationarity alone is not enough for global optimality, but additional structure can restore strong guarantees."
- Page 121: "The theorem is asymptotic, and the worst-case convergence rate is believed to be extremely slow."
- Page 148: "the practical version of TRPO (i.e., Eq. 12.1, which uses an average trust-region constraint) does not yield the promised monotonic improvement."
- Page 162: "this approach ensures a conservative policy update, i.e., the new policy after one step of update is close to the old one in total variation distance across all states."
- Page 69: "max { E_{D∼M+}[V⋆−V^{bπ}], E_{D∼M−}[V⋆−V^{bπ}] } ≥ 1/4 Vmax" (I'll paraphrase the equation carefully).
- Page 62: "Recalling d = 2m, this is Ω((d/2)^H), establishing Theorem 3.13."
- Page 108/119 etc.

OK writing now. I'll make sure every section has rigor.

One concern: the instruction "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So I must not invent. All equations must be from source. I'll derive only what's in the text.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
Multi-hop derivation and gray-zone audit of the supplied 227-page draft, treated as a mathematical object rather than a decision market. The source is *Reinforcement Learning: Theory and Algorithms* (Agarwal, Brantley, Jiang, Kakade, Sun; working draft, June 27, 2026). There are no betting lines, spreads, totals, moneylines, or odds anywhere in the source, and none are introduced here. The audit ladder is: (i) fixed-point operator → contraction → error amplification → finite-sample rate → minimax lower bound → assumption ladder → policy-optimization landscape → control-theoretic special case. Each hop is a formal derivation, and the "gray zone" is the set of regimes where an assumption silently changes the exponent of the sample complexity or breaks a proof step entirely.

**Hop 1 — Bellman fixed point to contraction.** The operator $TQ := r + \gamma P V_Q$ with $V_Q(s)=\max_a Q(s,a)$ satisfies $Q = TQ \iff Q = Q^\star$ (Theorem 1.8, [PAGE 20]). Lemma 1.10 ([PAGE 24]) gives $\|TQ - TQ'\|_\infty \le \gamma \|Q-Q'\|_\infty$. The proof uses row-stochasticity of $P$ and $\|P x\|_\infty \le \|x\|_\infty$; crucially it requires $\gamma<1$ for the contraction modulus to be strictly below one.

**Hop 2 — Contraction to error amplification.** Lemma 1.11 ([PAGE 24]) states $V^{\pi_Q} \ge V^\star - \frac{2}{1-\gamma}\|Q-Q^\star\|_\infty \mathbf{1}$. This is the first place a $1/(1-\gamma)$ amplification appears: a sup-norm $Q$-error of $\epsilon$ becomes a policy-value error of $2\epsilon/(1-\gamma)$. The first "gray-zone trap" is to treat this amplification as intrinsic. The chapter-2 refinement shows it is an artifact of the black-box route.

**Hop 3 — Generative-model sample complexity.** Proposition 2.1 ([PAGE 34]) shows that $N$ samples per state-action pair with $|S||A|N \ge \frac{c}{(1-\gamma)^4}\cdot|S|^2|A|\log(c|S||A|/\delta)/\epsilon^2$ yields $\max_{s,a}\|P(\cdot\mid s,a)-\widehat P(\cdot\mid s,a)\|_1 \le (1-\gamma)^2\epsilon$ and uniform-value accuracy $\le \epsilon$. This is the "learn-the-model" rate, scaling with the model size $|S|^2|A|$. The pivot is that planning does not require uniform value accuracy: Theorem 2.6 ([PAGE 38-39]) gives $|S||A|N \ge \frac{c|S||A|}{(1-\gamma)^3}\log(c|S||A|/\delta)/\epsilon^2$ for value estimation, i.e. $|S||A|$, not $|S|^2|A|$. The source's own framing is explicit: "with a generative model, one can compute a near-optimal policy from a number of samples that is sublinear in the model size—scaling (up to horizon and logarithmic factors) like $|S||A|$ rather than $|S|^2|A|$" ([PAGE 33]). The mechanism is the Bernstein-plus-variance-recursion argument (Lemmas 2.10–2.12, [PAGE 41-42]): the one-step deviation is controlled by $\sqrt{\mathrm{Var}_P(V^\star)}$, and the discounted variance recursion $\Sigma^\pi = \gamma^2 \mathrm{Var}_P(V^\pi) + \gamma^2 P^\pi \Sigma^\pi$ converts this into $(1-\gamma)^{-3/2}$, not $(1-\gamma)^{-2}$.

**Hop 4 — The lower bound and the "horizon amplification" audit.** Theorem 2.7 ([PAGE 39]) matches Theorem 2.6 up to logs with the same $(1-\gamma)^{-3}$ exponent. The source's interpretation: after normalization $\bar Q = (1-\gamma)Q$, "the minimax sample complexity for constant-accuracy estimation of $\bar Q^\star$ scales like $\#\text{samples} \approx |S||A|/(1-\gamma)\cdot 1/\epsilon^2$" ([PAGE 39]). That is the only honest statement; the unnormalized $(1-\gamma)^{-3}$ is a scaling artifact of $Q^\star$ itself growing like $(1-\gamma)^{-1}$. The gray zone: Theorem 2.6's planning bullet is stated only for $\epsilon \le 1/\sqrt{1-\gamma}$; the source notes that extending to the full meaningful range "remains an open question" for the standard unperturbed model-based approach ([PAGE 39]).

**Hop 5 — The function-approximation ladder.** Chapter 3 organizes linear features by assumption strength: (A) agnostic, (B) linear $Q^\star$ realizability, (C) all-policies linear realizability, (D) linear Bellman completeness $f\in\mathcal F \Rightarrow T_h f\in\mathcal F$ (eq. 3.1, [PAGE 49]). Theorem 3.2 ([PAGE 51]) gives LSVI under (D) with $N \asymp H^6 d^2 \log(H/\delta)/\epsilon^2$. Theorem 3.10 ([PAGE 45]) kills (B): "linear $Q^\star$realizability alone does not prevent exponential sample complexity." Theorem 3.13 ([PAGE 58-62]) kills (C) offline with $\Omega((d/2)^H)$ samples. Cross-check: the source states "Bellman completeness is not monotone in the feature map" ([PAGE 49]) — appending a feature can break closure. That non-monotonicity is a gray-zone hazard: enlarging the representation can *increase* the required sample complexity.

**Hop 6 — Exploration.** The chain MDP example ([PAGE 86]) gives probability $(1/A)^H$ of reaching reward under uniform actions: "This happens with probability $(1/A)^H$, which is exponentially small in the horizon." UCBVI's bonus $b_h^k(s,a)=\min\{H-h,\,2H\sqrt{L/(N_h^k(s,a)+1)}\}$ ([PAGE 87]) plus optimism plus counting gives $\widetilde O(H^2 S\sqrt{AK})$ (Theorem 6.1, [PAGE 88]) and the refined $\widetilde O(H^2\sqrt{SAK})$ (Theorem 6.7, [PAGE 92]): "The dependence on $S$ in Theorem 6.1 is not optimal: the leading term scales like $S\sqrt{AK}$ rather than $\sqrt{SAK}$" ([PAGE 88]).

**Hop 7 — Policy optimization.** Theorem 9.4 ([PAGE 124]) gives the policy-gradient identity; Proposition 9.7 ([PAGE 127]) gives softmax non-concavity; Proposition 10.1 ([PAGE 132]) gives exponentially small gradients at suboptimal parameters. Theorem 10.8 ([PAGE 139]) gives NPG rate $\log|A|/(\eta T)+1/((1-\gamma)^2T)$; Theorem 10.3 ([PAGE 133]) is asymptotic only, and the source says "the worst-case convergence rate is believed to be extremely slow" ([PAGE 121]). The function-approximation regret lemma 11.3 ([PAGE 146]) gives $O(1/\sqrt T)$, and Theorem 11.6 ([PAGE 149-150]) separates approximation error (transferred via $\|d^\star/\nu\|_\infty$) from estimation error (via $\kappa$).

**Hop 8 — Control.** The Riccati recursion (Theorem 14.1, [PAGE 187]) is exact value iteration for LQR; the Gauss-Newton contraction (Lemma 14.9, [PAGE 194]) gives linear convergence, and SLS reparameterization (Claim 14.11, [PAGE 196]) makes the objective convex in the lifted parameters.

**Gray-zone summary.** The assumption-sensitive edges are: $\gamma\to1$ (singularity of $(I-\gamma P^\pi)$); zero-probability support in $\nu$ (infinite concentrability); singular $\Sigma_\nu$ in a direction relevant to $\Sigma_{d^\star}$ (infinite $\kappa$); feature augmentation (non-monotone completeness); and the $\epsilon$-net dimension $d(d+1)/2$ (covering-number explosion). These are the points where a claimed polynomial rate can silently become exponential or undefined.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Conventions and units.** Rewards are dimensionless, $r(s,a)\in[0,1]$ ([PAGE 15]); all logarithms are natural ("Unless specified otherwise, log denotes the natural logarithm", [PAGE xi]), so entropy/KL terms are in nats; sample counts $N$, $n$, $K$ are cardinalities of generative-model queries or episodes; $V,Q$ are real-valued functions bounded in sup-norm by $1/(1-\gamma)$ ([PAGE 16], [PAGE 34]); all concentration statements are in probability $\delta\in(0,1)$.

**Operators.**
- Bellman optimality operator: $TQ := r + \gamma P V_Q$, $V_Q(s)=\max_{a}Q(s,a)$ (eq. 0.1, [PAGE 12]; eq. 1.4, [PAGE 20]).
- Policy evaluation operator: $T^\pi Q := r + \gamma P^\pi Q$ ([PAGE 12]).
- Finite-horizon stage operator: $(T_h f)(s,a) := r_h(s,a) + \mathbb E_{s'\sim P_h(\cdot\mid s,a)}[\max_{a'} f(s',a')]$ ([PAGE 22], [PAGE 48]).
- Greedy map: $\pi_Q(s)\in\arg\max_a Q(s,a)$, $V_Q(s)=\max_a Q(s,a)$ ([PAGE 12]).
- Discounted occupancy: $d^\pi_\mu(s,a) := (1-\gamma)\sum_{t\ge0}\gamma^t \Pr_\pi(s_t=s,a_t=a\mid s_0\sim\mu)$ ([PAGE 12], eq. 1.9 [PAGE 28]).

**Bellman optimality and contraction.**
$$Q=TQ \iff Q=Q^\star \quad\text{(Theorem 1.8, [PAGE 20])},$$
$$\|TQ-TQ'\|_\infty \le \gamma\|Q-Q'\|_\infty \quad\text{(Lemma 1.10, [PAGE 24])}.$$
*Breakdown:* at $\gamma=1$ the modulus equals one and the proof's line $\ge(1-\gamma)\|x\|_\infty>0$ (invertibility of $I-\gamma P^\pi$, Corollary 1.5, [PAGE 17]) fails; $(I-\gamma P^\pi)^{-1}$ is not defined as a bounded inverse.

**Error amplification.**
$$V^{\pi_Q} \ge V^\star - \frac{2}{1-\gamma}\|Q-Q^\star\|_\infty\mathbf 1 \quad\text{(Lemma 1.11, [PAGE 24])}.$$
*Assumption:* $\ell_\infty$ error; nothing else. *Breakdown:* the coefficient $2/(1-\gamma)\to\infty$ as $\gamma\to1$. The chapter-2 analysis shows this factor is a worst-case artifact for planning, not for value estimation.

**Performance difference lemma.**
$$V^\pi(\mu)-V^{\pi'}(\mu)=\frac{1}{1-\gamma}\mathbb E_{(s,a)\sim d^\pi_\mu}\big[A^{\pi'}(s,a)\big],\quad A^{\pi'}=Q^{\pi'}-V^{\pi'} \quad\text{(Lemma 1.16, [PAGE 31])}.$$
*Units:* both sides in reward units; the prefactor converts normalized occupancy to unnormalized discounted return.

**Generative-model rates.**
$$\#\text{samples} = |S||A|N \ge \frac{c\,|S||A|}{(1-\gamma)^3}\cdot\frac{\log(c|S||A|/\delta)}{\epsilon^2}\ \Rightarrow\ \|\widehat Q^\star - Q^\star\|_\infty\le\epsilon \quad\text{(Theorem 2.6, [PAGE 38-39])}.$$
*Assumptions:* deterministic bounded rewards (stated "for clarity", [PAGE 33]); i.i.d. simulator per $(s,a)$; $\epsilon\le1$ for the first bullet, $\epsilon\le1/\sqrt{1-\gamma}$ for the planning bullet ([PAGE 39]). *Matching lower bound:* Theorem 2.7 ([PAGE 39]) gives the same exponent $(1-\gamma)^{-3}$. *Normalized form:* $\bar Q=(1-\gamma)Q$ gives $|S||A|/((1-\gamma)\epsilon^2)$ [PAGE 39].

**Variance-sensitive machinery.**
$$\Sigma^\pi_M = \gamma^2\mathrm{Var}_P(V^\pi_M)+\gamma^2P^\pi\Sigma^\pi_M \quad\text{(Lemma 2.11, [PAGE 41])},$$
$$\big\|(I-\gamma P^\pi)^{-1}\sqrt{\mathrm{Var}_P(V^\pi_M)}\big\|_\infty \le \sqrt{\frac{2}{(1-\gamma)^3}} \quad\text{(Lemma 2.12, [PAGE 41-42])}.$$
This is the exact technical step converting $(1-\gamma)^{-2}$ worst-case deviation into $(1-\gamma)^{-3/2}$ variance-sensitive deviation; the source uses Jensen row-by-row on the stochastic matrix $(1-\gamma)(I-\gamma P^\pi)^{-1}$ ([PAGE 42]).

**Concentration primitives.**
- Bernstein (i.i.d.): $\Pr(|\bar X_n-\mu|\ge\epsilon)\le2\exp\!\big(-\frac{n\epsilon^2}{2\sigma^2+\frac23 b\epsilon}\big)$ (Lemma A.6, [PAGE 202]).
- Freedman (martingale): $\Pr(\sum_i X_i\ge t)\le\exp\!\big(-\frac{t^2}{2(V_n+Mt/3)}\big)$ (Lemma A.7, [PAGE 202]).
- Self-normalized (Abbasi-Yadkori et al.): $\big\|\sum_{i\le t}X_i\epsilon_i\big\|_{V_t^{-1}}\le\sigma\sqrt{2\log\!\big(\det(V_t)^{1/2}\det(V_0)^{-1/2}/\delta\big)}$ (Lemma A.9, [PAGE 203]).
- Discrete $\ell_1$: $\|\widehat q-q\|_1\le\sqrt d\big(N^{-1/2}+\sqrt{\log(1/\delta)/(2N)}\big)$ (Proposition A.8, [PAGE 202]).
These are the four primitives that generate every rate in the source; any re-derivation that mixes them (e.g. Bernstein on a self-normalized quantity) must respect the predictable-variation bound.

**Bellman completeness and LSVI.**
$$f\in\mathcal F\ \Rightarrow\ T_h f\in\mathcal F\quad\forall h \quad\text{(eq. 3.1, [PAGE 49])},$$
$$\widehat\theta_h\in\arg\min_{\theta\in\mathbb R^d}\sum_{(s,a,r,s')\in\mathcal D_h}\big(\theta^\top\phi(s,a)-r-\widehat V_{h+1}(s')\big)^2 \quad\text{(Algorithm 1, [PAGE 51])}.$$
Sample size $N:=\lceil cH^6d^2\log(H/\delta)/\epsilon^2\rceil$ (Theorem 3.2, [PAGE 51]); leverage control from D-optimal design: $\sup_{s,a}\phi(s,a)^\top\Sigma^{-1}\phi(s,a)\le d$ (Lemma 3.1, [PAGE 51], Kiefer–Wolfowitz/John). *Breakdown:* Bellman completeness is non-monotone in $\phi$ ([PAGE 49]); appending a feature can remove closure. Offline extension requires $\widehat\Sigma_h\succeq\kappa^{-1}\Sigma$ (Assumption 3.4, [PAGE 54]), and policy evaluation improves $H^6\to H^4$ because Lemma 3.7 pays one factor of $H$, not the extra greedy factor in Lemma 3.3 ([PAGE 57]).

**Negative results (exact form).**
- Theorem 3.10 ([PAGE 45]): with $|A|=c_1\lceil\min\{d^{1/4},H^{1/2}\}\rceil$ and only Assumption 3.9, any algorithm achieving $V^\pi_0\ge V^\star_0-0.05$ with probability $0.1$ needs $\min\{2^{c_2 d},2^{c_2 H}\}$ generative samples.
- Theorem 3.13 ([PAGE 58]): under Assumption 3.11 (all-policies linear realizability) and Assumption 3.12 ($\mathbb E_{\mu_h}[\phi\phi^\top]=I/d$), any offline estimator of $V^\pi_0(s_0)$ needs $\Omega((d/2)^H)$ samples. The mechanism ([PAGE 61-62]): $V^\pi_0(g_0)=\alpha_0=r_\infty m^{H/2}$, the data never visit $g_h$, and distinguishing $r_\infty\in\{0,m^{-H/2}\}$ requires $\Omega(\Delta^{-2})=\Omega(m^H)$ last-layer samples; "Recalling $d=2m$, this is $\Omega((d/2)^H)$, establishing Theorem 3.13" ([PAGE 62]).
- Proposition 4.6 ([PAGE 69]): with $\nu(s,a_0)=1,\nu(s,a_1)=0$, for any offline $\mathcal A$, $\max\{\mathbb E_{M^+}[V^\star-V^{\widehat\pi}],\mathbb E_{M^-}[V^\star-V^{\widehat\pi}]\}\ge\frac14 V_{\max}$.
- Section 4.2 ([PAGE 70]): agnostic policy search has $\Omega(|A|^H)$ sample barrier via importance-sampling variance $|A|^H$.

**Exploration (UCBVI).**
Bonus: $b_h^k(s,a)=\min\{H-h,\,2H\sqrt{L/(N_h^k(s,a)+1)}\}$, $L=\log(2SAHK/\delta)$ (eq. 6.1, [PAGE 87]); optimistic backup: $\widehat Q_h^k(s,a)=r_h(s,a)+b_h^k(s,a)+\sum_{s'}\widehat P_h^k(s'|s,a)\widehat V_{h+1}^k(s')$ (eq. 6.2, [PAGE 87]).
Rates: $\widetilde O(H^2S\sqrt{AK})$ (Theorem 6.1, [PAGE 88]) and $\widetilde O(H^2\sqrt{SAK}+H^3S^2A\ln(1+K))$ (Theorem 6.7, [PAGE 92]). The counting lemma ([PAGE 91]) gives $\sum_{k,h}\big(N_h^k(s_h^k,a_h^k)+1\big)^{-1/2}\le2H\sqrt{SAK}$; the self-bounding transition inequality (Lemma 6.9, [PAGE 93]) is what removes the $\sqrt S$ factor. *Breakdown:* if $K\lesssim H^2S^2A$ the simple bound is not better than the trivial $KH$ ([PAGE 88]).

**Linear MDP and Lin-UCBVI.**
Assumption 7.1: $P^\star_h(\cdot\mid s,a)=\mu^\star_h\phi(s,a)$ with $\|(\mu^\star_h)^\top f\|_2\le\sqrt d\|f\|_\infty$ ([PAGE 100]); Lemma 7.2 gives $(P^\star_h f)(s,a)=\phi(s,a)^\top w^\star_{h,f}$ for every bounded $f$ — a "strong form of completeness" ([PAGE 101]). Bonus $b_h^k(s,a)=\beta\|\phi(s,a)\|_{(\Lambda_h^k)^{-1}}$ ([PAGE 102]); regret $R_K\le c\beta H\sqrt{K d\log(1+K/\lambda)}+\delta KH$ (Theorem 7.3, [PAGE 103]), with $\beta=\widetilde O(Hd)$ giving $\widetilde O(H^2\sqrt{d^3K})$. *Breakdown:* requires access to $\arg\max_a$ oracle ([PAGE 102]); $\lambda\ge1$; and the uniform confidence requires the covering number of the optimistic class (Lemma A.15, [PAGE 205]) whose symmetric-matrix component is $d(d+1)/2$-dimensional.

**Bellman rank and PAC-RL.**
$$E^V_h(f,g)=\mathbb E_{s\sim d^{\pi_f}_h,\,a=\pi_{h,g}(s),\,s'\sim P^\star_h}[Q_{h,g}(s,a)-r_h(s,a)-V_{h+1,g}(s')]=\langle X_h(f),W_h(g)\rangle$$
(Definition 8.1, [PAGE 108]); $Q$-version replaces $a=\pi_{h,g}(s)$ by $(s,a)\sim d^{\pi_f}_h$ (Definition 8.2, [PAGE 109]). Theorem 8.6 ([PAGE 112]): $V^\star_0-V^{\widehat\pi}_0\le C\varepsilon_{\mathrm{gen}}\sqrt{dH^3\ln(eHd(B_X^2B_W^2/\varepsilon_{\mathrm{gen}}^2+1))}$ with $T=\lceil cHd\ln(\cdot)\rceil$, $R=\sqrt T\varepsilon_{\mathrm{gen}}$. *Breakdown:* $\varepsilon_{\mathrm{gen}}=\varepsilon_{\mathrm{gen}}(m,H,\delta/(TH))$ must be small; for the $V$-version it scales linearly in $A$ (importance weight $1/\mathrm{Unif}(A)$, eq. 8.3 [PAGE 111]); for infinite classes one needs covering numbers (Lemma A.19, [PAGE 209], Lemma A.20, [PAGE 210]).

**Policy gradient and NPG.**
$$\nabla_\theta J_\mu(\theta)=\frac{1}{1-\gamma}\mathbb E_{(s,a)\sim d^{\pi_\theta}_\mu}\big[A^{\pi_\theta}(s,a)\nabla_\theta\log\pi_\theta(a|s)\big]\quad\text{([PAGE 124])},$$
$$\theta^{(t+1)}=\theta^{(t)}+\eta F_\rho(\theta^{(t)})^\dagger\nabla_\theta V^{(t)}(\rho)\quad\text{(eq. 10.7, [PAGE 137])},$$
$$V^{(T)}(\rho)\ge V^\star(\rho)-\frac{\log|A|}{\eta T}-\frac{1}{(1-\gamma)^2T}\quad\text{(Theorem 10.8, [PAGE 139])}.$$
*Units:* both terms are value units; the rate is $O(1/T)$ in iterations, dimension-free in $|S|$. *Breakdown:* the tabular softmax NPG result requires exact gradients and the full-support/coverage used in Lemma 10.7; with function approximation the guarantee degrades to $O(1/\sqrt T)+$ transfer terms (Lemma 11.3 [PAGE 146], Theorem 11.6 [PAGE 149]): approximation error $\propto\sqrt{|A|\|d^\star/\nu\|_\infty\epsilon_{\mathrm{approx}}/(1-\gamma)}$ and estimation error $\propto\sqrt{|A|\kappa\epsilon_{\mathrm{stat}}/(1-\gamma)}$. Theorem 11.6 requires Assumption 11.5: $\kappa=\sup_{w\ne0}w^\top\Sigma_{d^\star}w/w^\top\Sigma_\nu w<\infty$; if $\Sigma_\nu$ is singular in a direction charged by $d^\star$, $\kappa=\infty$ and the bound is vacuous.

**Conservative policy optimization and the trust-region veto.**
CPI improvement (Theorem 12.2, [PAGE 155]): with $A=\mathbb E_{d^{\pi_t}_\mu}A^{\pi_t}(s,\pi'(s))$, $V^{\pi_{t+1}}_\mu-V^{\pi_t}_\mu\ge\frac{\alpha}{1-\gamma}\big(A-\frac{2\alpha\gamma}{(1-\gamma)^2}\big)$, and choosing $\alpha=A(1-\gamma)^2/(4\gamma)$ gives $\ge A^2(1-\gamma)/(8\gamma)$; termination at most $8\gamma/(\epsilon^2(1-\gamma)^2)$ steps with local optimality $2\epsilon$ (Theorem 12.3, [PAGE 156]). The counterexample at [PAGE 148] shows that the *practical* TRPO average-KL constraint does not preserve monotonic improvement: with $s_0,s_1,s^\dagger$ and $\pi(a_{\text{bad}}|s_0)=1,\pi(a_{\text{good}}|s_1)=1$, the surrogate increases for any $\alpha>0$ while $J(\pi')=-\alpha\gamma R$. Orthogonalized PG (spectral-norm steepest ascent) instead gives $\|\pi_{W'}(\cdot|s)-\pi_W(\cdot|s)\|_1\le\eta$ for all $s$ (Lemma 12.5, [PAGE 162]), and the row-wise variant gives the same via $\|\mathrm{softmax}(z)-\mathrm{softmax}(z')\|_1\le\|z-z'\|_\infty$ (Fact 12.9, [PAGE 164]).

**LQR.**
Riccati: $P_t=A_t^\top P_{t+1}A_t+Q-A_t^\top P_{t+1}B_t(B_t^\top P_{t+1}B_t+R)^{-1}B_t^\top P_{t+1}A_t$, $P_H=Q$, $K^\star_t=(B_t^\top P_{t+1}B_t+R)^{-1}B_t^\top P_{t+1}A_t$ (Theorem 14.1, [PAGE 187]); $V^\star_t(x)=x^\top P_t x+\sigma^2\sum_{h=t+1}^H\mathrm{Trace}(P_h)$. Gradient: $\nabla C(K)=2((R+B^\top P_K B)K-B^\top P_K A)\Sigma_K$ (Lemma 14.4, [PAGE 191]); Gauss-Newton contraction $C(K')-C(K^\star)\le(1-\eta\mu/\|\Sigma_{K^\star}\|_2)(C(K)-C(K^\star))$ (Lemma 14.9, [PAGE 194]). *Breakdown:* requires controllability and $\mu=\sigma_{\min}(\mathbb E x_0x_0^\top)>0$; $\sigma^2$ cancels from the optimal policy ([PAGE 186]) but scales the value.

**Singularity / breakdown regimes (consolidated).**
1. $\gamma=1$: $(I-\gamma P^\pi)$ singular; Lemma 1.10 contraction modulus $=1$; Theorem 2.6 exponent diverges.
2. $\nu(s,a)=0$ with $d^\pi_\mu(s,a)>0$: Assumption 4.1 ratio $=+\infty$ ([PAGE 66]); Proposition 4.6 lower bound $\frac14V_{\max}$.
3. $\Sigma_\nu$ singular on $\mathrm{supp}(d^\star)$: Assumption 11.5 $\kappa=+\infty$ ([PAGE 148]).
4. Feature augmentation: Bellman completeness can be destroyed ([PAGE 49]).
5. Covering number: $\log N(\mathcal F,\epsilon,\|\cdot\|_\infty)$ includes $\frac{d(d+1)}{2}\log(1+18B^2\sqrt d/(\lambda\epsilon^2))$ ([PAGE 205]).
6. Burn-in: Theorem 2.6 planning requires $\epsilon\le1/\sqrt{1-\gamma}$; full range open for unperturbed model-based ([PAGE 39]).
7. $\varepsilon_{\mathrm{gen}}$ too large: Theorem 8.6's $R=\sqrt T\varepsilon_{\mathrm{gen}}$ makes $T$ and the radius inconsistent ([PAGE 112]).

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The lineage is explicitly documented in the bibliographic remarks. Tracing backward from the 2026 draft:

*Dynamic programming root.* Bellman's 1956 optimality principle is invoked directly at Theorem 1.8 ([PAGE 19]) and the Bellman optimality equations at [PAGE 20]. The LP/bit-complexity thread is Puterman (1994) and Ye (2011); the source records that "Ye [2011] showed that policy iteration is a strongly polynomial-time algorithm for a fixed discount rate" ([PAGE 31]), and that Mansour and Singh (1999) improved the iteration bound to roughly $|A|^{|S|}/|S|$. The Table 1.1 at [PAGE 23] is the fossil record of this line.

*Sample-complexity root.* Kearns and Singh (1999) introduced the generative model and established model-based/model-free comparability ([PAGE 45], [PAGE 33]); Kakade (2003) gave the crude rates (Proposition 2.4's ancestors); Azar–Munos–Kappen (2013) gave the sharp value-estimation bound and the matching lower bound (Theorems 2.6/2.7); Sidford et al. (2018) and Agarwal–Kakade–Yang (2020c) removed the horizon amplification for the plug-in estimator ([PAGE 45], [PAGE 39]).

*Function-approximation root.* Munos (2005) is credited with the closure idea behind Bellman completeness and the concentrability coefficient ([PAGE 58], [PAGE 63]). The D-optimal design geometry is John (1948) and Kiefer–Wolfowitz (1960) ([PAGE 63]). The impossibility line is Weisz et al. (2021a) for the generative-model linear-$Q^\star$ lower bound, Weisz et al. (2021b) for the few-actions extension (Theorem 3.10), Wang et al. (2020a) and Zanette (2021) for offline lower bounds (Theorem 3.13), and Du et al. (2019) for the generative-model escape under all-policies realizability ([PAGE 63], [PAGE 51]).

*Exploration root.* E3 (Kearns–Singh 2002) and R-max (Brafman–Tennenholtz 2002) are the PAC ancestors; UCRL2 (Jaksch et al. 2010) established $\widetilde O(\sqrt T)$; Azar–Osband–Munos (2017) is the direct template for UCBVI; Dann et al. (2017) unifies PAC and regret via Uniform-PAC; Jin et al. (2018) gives the model-free $\widetilde O(\sqrt{H^3SAT})$ comparison ([PAGE 96-97]).

*Policy-optimization root.* REINFORCE (Williams 1992) and the likelihood-ratio method (Glynn 1990) ([PAGE 129]). NPG is Kakade (2001); the $O(1/T)$ tabular analysis is Agarwal et al. (2020d), with the mirror-descent/online-learning lineage through Even-Dar et al. (2009), Neu et al. (2017), and Geist et al. (2019) ([PAGE 140-141]). CPI is Kakade–Langford (2002); TRPO is Schulman et al. (2015); PPO is Schulman et al. (2017); the orthogonalized/row-wise update is motivated by Muon (Jordan et al. 2024) and Liu et al. (2025) ([PAGE 169]).

*Control root.* Anderson–Moore (1990), Evans (2005), Bertsekas (2017); the Gauss-Newton/NPG analysis is Fazel et al. (2018); the SLS convex parameterization is Wang–Matni–Doyle (2019) and Agarwal et al. (2019) ([PAGE 197-198]).

**Multi-week traps (persistent wrong intuitions the text explicitly dislodges).**
(i) *"Realizability is enough."* Theorem 3.10 [PAGE 45] and Theorem 3.13 [PAGE 58] require weeks of unlearning because realizability is the natural analogue of realizable regression. The source is blunt: the intuition "is false in a strong information-theoretic sense" ([PAGE 48]).
(ii) *"Horizon amplification is intrinsic."* The $1/(1-\gamma)$ loss in Lemma 1.11 → Theorem 2.6's black-box route is not fundamental; the variance-sensitive argument removes it ([PAGE 39]). Practitioners who calibrate on the crude rate will systematically over-budget samples by $1/(1-\gamma)$.
(iii) *"Bellman completeness is monotone."* It is not ([PAGE 49]); adding a feature can break closure.
(iv) *"Average KL trust region is safe."* Section 12.2.2 [PAGE 148] gives an explicit three-state counterexample where surrogate improves and true value degrades for every $\alpha>0$.
(v) *"UCBVI is $S\sqrt{AK}$."* The refined analysis gives $\sqrt{SAK}$ ([PAGE 88], [PAGE 92]); the extra $\sqrt S$ is an artifact of bounding $( \widehat P-P)^\top \widehat V$ by $\ell_1\cdot\ell_\infty$ instead of a Bernstein functional.
(vi) *"PG converges globally in poly time in general."* Theorem 10.3 is asymptotic only ([PAGE 121], [PAGE 133]); the source notes finite-time poly guarantees "are not expected" for vanilla/entropy-regularized softmax PG ([PAGE 141]).

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Mapping the requested vocabulary onto the source's own meta-structure (the source contains no market, no clock in the betting sense; the "clock" here is the horizon/iteration counter).

**Crisis habit regression.** The recurring failure mode in the text is *regression to a surrogate that is optimized without the structural condition that made the surrogate valid*. Three instances: (a) policy gradient on softmax regresses to near-deterministic policies, making $\pi_\theta(a\mid s)\to0$ and $d^{\pi_\theta}_\mu(s)\pi_\theta(a\mid s)$ vanish; the log-barrier remedy (eq. 10.4, [PAGE 134]) exists precisely because entropy regularization is bounded and cannot prevent this ([PAGE 137]). (b) Practical TRPO regresses to average-KL and loses the pointwise guarantee; the source says the monotonic guarantee "does not hold anymore" ([PAGE 147]) and gives the counterexample ([PAGE 148]). (c) FQI regresses to ERM on Bellman targets without coverage; the $\epsilon_{\mathrm{approx},\nu}$ floor survives even with infinite data ([PAGE 67], Theorem 4.3 [PAGE 67]).

**Counter-trap.** The negative results are traps in the precise sense that they are *optimal-play* obstructions, not analysis weaknesses: Theorem 3.10 is information-theoretic with a generative model ([PAGE 45]); Theorem 3.13 is minimax over all estimators under maximally isotropic coverage $I/d$ ([PAGE 58]); Proposition 4.6 is a two-point argument with identical data distributions ([PAGE 69]); Section 4.2's $|A|^H$ is matched by a needle-in-haystack lower bound ([PAGE 70]). Each trap is escaped only by adding a structural condition — Bellman completeness, coverage, or a low-rank factorization — not by a better algorithm on the same assumptions.

**Clock.** The theory's clocks are: (i) the effective horizon $(1-\gamma)^{-1}$, which appears in every rate as a scaling exponent; (ii) the finite horizon $H$, which enters as $H^2$ for regret and $H^3$ or $H^6$ for sample complexity depending on objective; (iii) the iteration counter $T$, where NPG's $O(1/T)$ ([PAGE 139]) is fundamentally faster than the function-approximation regret lemma's $O(1/\sqrt T)$ ([PAGE 146]); (iv) the visit count $N_h^k(s,a)$, whose $\sqrt{\cdot}$ growth drives the counting lemma ([PAGE 91]). A "clock mismatch" occurs when a bound is quoted across models: the source itself warns that "One rough correspondence is $H\asymp\frac{1}{1-\gamma}$" ([PAGE 40]) is only heuristic. The recursive-theory-of-mind lesson: an agent that models its own learning rate must index it to the correct clock (episodes vs samples vs $(1-\gamma)$) or it will mis-schedule exploration.

**Self-modeling of the learner.** The Bellman-rank framework (Chapter 8) is the cleanest instance of a learner modeling the hypothesis class's *own* error structure: $E_h(f,g)=\langle X_h(f), W_h(g)\rangle$ separates the roll-in policy's contribution $X_h(f)$ from the tested hypothesis's contribution $W_h(g)$ ([PAGE 108-109]). This is a formal "theory of mind" for algorithms: the data collected under $\pi_f$ is reusable for testing $g$ exactly when the bilinear separation holds. When it fails, the algorithm must inject exploration (the $V$-version's uniform action and importance weight $1/\mathrm{Unif}(A)$, eq. 8.3 [PAGE 111]) — a deliberate self-perturbation to restore the separation.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

The source is stratified into three veto layers; each can veto a claim made at another layer, and the "veto proof" is the formal statement that no amount of effort at the lower layer rescues the higher one.

**Statistical/finite-sample layer (the "physical" layer).** Governed by the concentration primitives of Appendix A ([PAGE 201-206]). A statistical veto is a lower bound on samples under a fixed sampling model. Examples: Theorem 2.7 ([PAGE 39]) vetoes any claim of $o(|S||A|/((1-\gamma)^3\epsilon^2))$ samples; Theorem 3.13's $\Omega((d/2)^H)$ vetoes any offline estimator under Assumptions 3.11–3.12 ([PAGE 58]); Proposition 4.6's $\frac14 V_{\max}$ vetoes any offline learner without coverage ([PAGE 69]). These vetoes are proof-objects: the two-point construction with KL $\le2n\Delta^2$ and Le Cam ([PAGE 62]) is the certificate.

**Computational layer (the "biomechanical" layer).** A computational veto is a statement that even a statistically feasible procedure is not implementable at the claimed cost. The source's canonical case: LinUCB's optimistic step requires maximizing $\widehat\mu_t\cdot x+\sqrt{\beta_t x^\top\Sigma_t^{-1}x}$ over $D$ (eq. after 5.1, [PAGE 80]), which is not reducible to linear optimization over $D$; the source notes "this ellipsoidal optimization can be computationally hard for general action sets $D$" and that the polyhedral relaxation "typically incurs an extra $\sqrt d$ factor in regret" ([PAGE 84]). Likewise TRPO's $F_{\theta_t}^{-1}\nabla V$ requires conjugate gradient with Hessian-vector products ([PAGE 159]), and LSVI's per-stage least squares requires the D-optimal design's support ([PAGE 51]). The computational layer cannot be vetoed by statistical optimism: a $\widetilde O(d\sqrt T)$ regret guarantee does not imply an implementable algorithm.

**Information-theoretic layer (the "weather" layer — adversarial in the worst case).** This is where the hardest vetoes live because they are assumption-level, not algorithm-level. Theorem 3.10 is information-theoretic (any algorithm, generative model, known feature map) ([PAGE 45]); Theorem 3.13 is minimax over estimators ([PAGE 58]); the $|A|^H$ needle-in-haystack is information-theoretic even with a generative model ([PAGE 70]). The weather metaphor is apt: the hardness is in the environment's geometry (a random $a^\star$ among $A$, a path that must be hit), not in the forecaster.

**Cross-layer veto resolutions in the text.**
1. *Statistical cannot rescue information-theoretic*: Theorem 3.10's exponential persists "even with a generative model" and "even when an algorithm is given the feature map as input" ([PAGE 45]). No statistical estimator can beat it.
2. *Computational cannot rescue statistical*: the D-optimal design exists and the LSVI rate is poly$(d,H)$ ([PAGE 51]), but the design support itself must be found; the source provides the Kiefer–Wolfowitz characterization as an optimization ([PAGE 51]) rather than an algorithm.
3. *The $H^6\to H^4$ improvement is a cross-layer reallocation*: offline LSPE ([PAGE 56-57]) improves over offline LSVI because evaluation pays one factor of $H$ (Lemma 3.7) instead of the extra greedy factor (Lemma 3.3). This is a "veto of blunt horizon accounting": the same data, the same class, a different objective, a different exponent.
4. *The $\epsilon$-net dimension is a cross-layer bottleneck*: the uniform confidence for Lin-UCBVI (Corollary A.17, [PAGE 207-208]) costs a factor from $\log N(\mathcal F,\epsilon,\|\cdot\|_\infty)$ that includes $\frac{d(d+1)}{2}\log(\cdot)$ ([PAGE 205]). This is the computational-geometry layer (net construction) vetoing a purely statistical argument.
5. *The $\sigma^2$ non-effect in LQR* is a rare negative veto: "The noise variance $\sigma^2$ does not impact the optimal policy" ([PAGE 186]), so no design effort at noise reduction changes the controller.

**Formal veto proof (representative).** For Proposition 4.6: the two MDPs share dynamics and the same $\nu$-distribution over $(s,a_0)$; the dataset law is identical; by the minimax two-point argument the expected suboptimality on at least one is $\ge\frac14V_{\max}$ ([PAGE 69]). For Theorem 3.13: the offline distributions $\mu_h$ are identical across $r_\infty\in\{0,m^{-H/2}\}$ and the KL between last-layer reward laws is $\le2n\Delta^2$; a test at confidence $0.9$ needs $n\Delta^2=\Omega(1)$, i.e. $n=\Omega(m^H)$ ([PAGE 62]). These are complete proofs, not sketches; they are the veto certificates.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Reinforcement Learning with Verifiable Rewards (RLVR) is a natural frame here: each counterfactual is a *testable prediction* derived from a theorem, with a specified observable and a specified falsifier. I give three, each anchored to a page and a formal statement.

**Veto 1 — Coverage removal (Proposition 4.6, [PAGE 69]).**
*Counterfactual.* Train fitted Q-iteration (eq. 4.1, [PAGE 67]) on the one-state, two-action instance with $\nu(s,a_0)=1,\nu(s,a_1)=0$, rewards $r(s,a_0)=\frac12$ and $r(s,a_1)=1$ in $M^+$ versus $0$ in $M^-$.
*Prediction.* For any deterministic output policy $\widehat\pi$ independent of which MDP generated the data, $\max\{\mathbb E_{M^+}[V^\star-V^{\widehat\pi}],\mathbb E_{M^-}[V^\star-V^{\widehat\pi}]\}\ge\frac14 V_{\max}=\frac{1}{4(1-\gamma)}$.
*Observable.* Average regret across the two MDPs, estimated by Monte Carlo over datasets.
*Falsifier.* Any offline algorithm with max expected suboptimality $<\frac14V_{\max}$ on both. The theorem says this is impossible because the dataset laws are identical.
*RLVR grading rule.* Binary