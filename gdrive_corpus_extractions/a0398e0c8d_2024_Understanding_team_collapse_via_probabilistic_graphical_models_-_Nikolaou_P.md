---
source: "2024 Understanding team collapse via probabilistic graphical models - Nikolaou, Pelechrinis, Terzi.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 32
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5635
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (Nikolaou, Pelechrinis, Terzi - "Understanding team collapse via probabilistic graphical models"). The response must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force / Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read the source text and map content to pages. Since the source text is a single markdown file converted from PDF, I need to infer page numbers or use the provided markers. The text has "KDD ’24, August 25-29, 2024, Barcelona, Spain" repeated, which suggests page breaks. However, exact page numbers aren't explicitly numbered in the text provided. I need to cite exact [PAGE N] markers. Since none are given, I might need to approximate based on sections or note that page markers are not explicitly provided in the conversion. But the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since they aren't explicitly provided as page numbers, I should perhaps reference sections or use a reasonable pagination based on the flow. Wait, the user says "PAGES: 32". The text is 32 pages. I can reference page ranges based on the document flow, but without explicit markers, it's risky. I could cite sections like [Sec. 2.2] or infer pages. However, the strict invariant says cite exact [PAGE N] markers and verbatim quotes when source pages are provided. Since no page numbers are in the text, I might state that page markers are absent from the provided conversion and cite section numbers instead, but I should try to be as precise as possible. Let me look for any page indicators. There are none. I'll use section-based citations like [Sec. 2.2] but also maybe estimate page numbers based on typical PDF flow. Actually, to be safe and compliant, I should avoid fabricating page numbers. I can say [PAGE N/A - source conversion lacks printed folio; cited by section]. But the instruction says "cite exact [PAGE N] markers". Hmm. Maybe I can treat each major section break as a page? That's fabrication. Better to note that page numbers are not preserved in the markdown conversion and cite by section/equation number instead, while acknowledging the limitation. But the user explicitly asked for exact [PAGE N] markers. Since they aren't there, I will use [SECTION X.Y] as a proxy and mention that printed folios were not preserved in the provided conversion. This maintains honesty.

Wait, looking again: the text has headers like "KDD ’24, August 25-29, 2024, Barcelona, Spain" repeated. These could be footers/headers on each page. Without explicit numbers, I cannot cite exact pages. I will cite sections and note the absence of page markers. That seems the most honest approach.

Now, content analysis:

The paper proposes a probabilistic graphical model for team collapse in basketball (NBA). Key elements:
- n entities (players), n=5 for basketball.
- Hidden states H_ti ∈ H, H = {-1, 0, 1} (worst, average, best mental state).
- Observed states O_ti ∈ O, O = {-1, 0, 1} (below average, average, above average performance).
- Time steps t=1..T.
- Key assumption: Hidden state H_ti depends on observed states of all entities at t-1 (O_{t-1}) and own hidden state at t-1 (H_{t,i-1}).
- Conditional probability: Pr(H_ti | O_{t-1}, H_{t,i-1}) = sum_j R_ij * Infl(H_ti | O_{t-1}) + r_i * Infl(H_ti | H_{t,i-1}), where sum_j R_ij + r_i = 1, R_ij, r_i >= 0.
- R is team structure matrix (n x (n+1)).
- Matrices M_i^j = Infl(H_ti | O_{t-1}) (n_o x n_h), row-stochastic.
- N_i = Infl(H_ti | H_{t,i-1}) (n_h x n_h), row-stochastic.
- Emission probabilities E_i = Pr(O_ti | H_ti).
- Parameters Θ = {M_i^j, N_i, R, E_i}.
- Team collapse: alpha-collapse if alpha fraction of players in choking state (H_ti = -1). Definition 3.
- EM algorithm for learning. E-step samples from posterior Pr(H|O). M-step maximizes expected complete log-likelihood.
- Complete log-likelihood: log Pr(H,O) = log Pr(H1) + sum_{t=2}^T sum_i log Pr(H_ti | H_{t,i-1}, O_{t-1}) + sum_{t=1}^T sum_i log Pr(O_ti | H_ti).
- Team profiles: Rh (H), Rho (HO), R_k (kPillars), R_kH (kPillars+H), R_kD (kPillars+D), etc.
- Findings: Self-dependence improves resilience. More pillars better than fewer. Dependence between pillars makes teams more vulnerable. Single point of failure with one pillar.
- Real data: NBA 2021-22 season, starting lineups, PIE metric. Observed states labeled based on PIE within ±epsilon of average (epsilon=0.05).
- Games analyzed: Nets vs Knicks, Celtics vs Knicks, Lakers vs Thunder, etc. Model infers hidden team state that follows point differential.

Now I need to structure the response with the exact XML sections.

Word count: >=1000 words total, with THINK_TRACE >=400 words.

Let's plan each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I need to derive the model equations step by step, discuss identifiability, convex coefficients, row-stochastic constraints, the difference between coupled HMMs (Pan et al.) and this model (observed vs hidden states of teammates), EM convergence issues (non-concave Q, round-robin heuristic), singularity/breakdown regimes (e.g., when r_i=0 and R_ij=0 leading to no self-dependence, or when all pillars choke simultaneously causing collapse, or when M is anti-dependent causing instability). Also audit gray zones: the paper says Infl values are not probabilities (Appendix A.2), yet they are row-stochastic; the emission labeling uses PIE with epsilon=0.05 which is arbitrary; the model assumes static roster (no substitutions); alpha=1 collapse definition is strict (all players choke). Multi-hop: from Eq (1) to Lemma 1 to EM to team profiles to real NBA structures. Gray zones: convex coefficient sum-to-one constraint creates a simplex boundary; if R_ij and r_i are learned via round-robin, local optima possible; N-ELBO can decrease below true model likelihood (overfitting on synthetic data). Word count target: 400+.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations with units and page/section citations. Include Eq (1), Lemma 1 proof, Eq (2) Q function, Eq (3) posterior factorization, Eq (4) complete log-likelihood, Eq (5) base case delta, Eq (6) log Pr(O), Eq (7) delta recursion, Eq (8) decoding argmax, Definition 2 & 3 collapse, matrix dimensions (n_o x n_h, n_h x n_h, n x (n+1)), probability units (dimensionless [0,1]), time steps (discrete t ∈ {1,...,T}), state spaces H and O cardinalities n_h=3, n_o=3. Cite sections [Sec. 2.2], [Sec. 2.3], [Sec. 4.1], etc. Since page numbers not provided, cite sections. Mention breakdown regimes: when sum_j R_ij + r_i != 1 (violates convexity), when M or N not row-stochastic (Lemma 1 fails), when n=5 but roster changes (substitutions violate fixed n assumption), when alpha=1 vs alpha<1 changes collapse definition drastically. Verbatim quotes from source: e.g., "A team is in an α-collapse state at time t, if α fraction of the team’s players are in a choking state at time t" [Sec. 2.3]. Also "players in a team don’t know the hidden state of their teammates; they only know their teammates’ observed performance" [Sec. Related Work/Figure 1 discussion].

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace from HMMs [3, 15], coupled HMMs [13, 21] (Pan et al.), social networks, disease propagation, sports analytics (player ratings, regression, whowins-whom network), athlete choking literature [1, 23, 26, 14], clutch players [2, 30, 33], Bransen et al. [5], Dohmen [12]. Multi-week traps: in NBA season context, a team might look resilient over 10-game sample but collapse over a 7-game playoff series due to dependency structures; roster static assumption fails across weeks due to injuries, trades, load management; PIE metric averaged across quarters may mask within-game collapse dynamics; learning parameters from full season (10000 profiles) may not adapt to mid-season coaching changes. Mention KDD ’24, arXiv:2402.10243v1.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is more interpretive. Theory of mind: players model teammates' mental states. Crisis habit regression: under stress, players revert to dependence on observed teammate performance (non-pillar behavior) rather than own hidden state. Counter-trap: opponent may target pillar player to induce cascade; if pillars are dependent (R_kD), they co-choke. Clock: game clock vs shot clock vs season clock; 3-minute windows in NBAgames dataset; the model's time steps are abstract (quarters vs 3-min windows). The "clock" invariant: collapse probability is time-homogeneous in model but real games have clock pressure (end of quarter, shot clock). Discuss how hidden state transitions depend on t-1 observed states, creating a recursive belief loop: I think you think I'm choking, so I choke. Counter-trap: self-dependent players break the recursion by anchoring on own hidden state.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since basketball is indoor, weather veto is minimal (arena HVAC failure, etc.). Physical/biomechanical: fatigue, injury, substitution patterns are not in the model (static roster). The model assumes players do not change over time (future work). Veto: if a star player is injured mid-game, the learned R matrix becomes invalid because n changes or dependencies rewire. Biomechanical load (minutes played) affects hidden state but isn't modeled; PIE metric doesn't capture physical exhaustion. Weather: indoor arena, but extreme weather could affect travel and thus pre-game mental state (not modeled). Adjudication: the model would veto predictions if a key pillar is substituted out, because the fixed-n assumption breaks and the EM-learned R no longer applies. Also if emission E is mis-specified (PIE doesn't capture defensive impact), the observed state O_ti is a biased proxy for performance, invalidating the influence matrices M.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable scenarios. I need 3 scenarios where the model's prediction can be vetoed/falsified, with counterfactual predictions.
1. Scenario: A team with 1Pillar profile (r_pillar ≈ 1, others depend on pillar) faces a game where the pillar is rested (load management). Model predicts high collapse probability because non-pillars lose anchor. Counterfactual: if the non-pillars have high self-dependence (r_i > 0), collapse probability should not spike as much; veto if collapse occurs despite pillar resting but non-pillars are self-dependent.
2. Scenario: Two dependent pillars (R_kD) in a playoff series. Model predicts synchronized choking and longer collapse windows. Counterfactual: if an opponent successfully disrupts one pillar early, the other should also choke within 1-2 time steps; veto if the second pillar maintains H=0 or 1 while the first is at -1.
3. Scenario: Anti-dependence matrix M_antiD (when one player's O=1, another's H shifts to -1). Model predicts anti-correlated hidden states. Counterfactual: in a game where Player A over-performs (O=1) and Player B's observed state also improves (O=1), the model's M_antiD would be falsified; veto if both over-perform simultaneously because M_antiD forces B's hidden state down when A is up.
For each: verifiable condition, prediction, veto criterion.

Word count: Need >=1000 total. THINK_TRACE >=400. Others should be substantial.

Let's draft carefully.

Important: No betting lines. Do not mention odds, spreads, etc. The paper mentions point differential (PTS +/-) which is fine, not a betting line.

No toy equations. Use real equations from paper.

Citations: Since page numbers are not in the text, I will cite [Sec. X.Y] and note that printed page folios were not preserved in the provided markdown conversion. But to satisfy "cite exact [PAGE N] markers", maybe I can infer pages from the document structure? Let's see: The text starts with title, abstract, introduction. Typically KDD papers are ~25 pages. But I shouldn't fabricate. I'll write [PAGE N: not printed in source conversion; cited via Sec. 2.2]. Hmm, that might violate "exact [PAGE N] markers". I think the best approach is to use [SECTION 2.2] style but label them as page proxies. Alternatively, I can assign page numbers based on the flow: e.g., Abstract/Intro ~1-2, Model ~3-6, etc. But that's risky. I'll explicitly state: "The provided arXiv markdown conversion does not retain printed page folios; all citations below refer to section numbers [Sec. X.Y] and equation numbers [Eq. N], which serve as the stable locators in this document." This is honest and avoids fabrication. The user might accept it because they said "when source pages are provided". They weren't provided as explicit numbers.

Let's write.

THINK_TRACE (>=400 words):

Start with derivation: The joint distribution factorization. From the graphical model (Fig 1), the joint is Pr(H,O) = Pr(H1) prod_{t=2}^T Pr(H_t | H_{t-1}, O_{t-1}) prod_{t=1}^T Pr(O_t | H_t). Because H_ti depends on H_{t,i-1} and O_{t-1} (all players' observed previous states). The conditional is approximated as convex combination: sum_j R_ij Infl(...) + r_i Infl(...). Convexity ensures Lemma 1: row sums to 1. Derive Lemma 1 proof sketch: sum_h of RHS = sum_j R_ij sum_h Infl + r_i sum_h Infl = sum_j R_ij + r_i = 1 because each Infl matrix is row-stochastic.

Gray-zone audit: The paper acknowledges Infl values are not probabilities (Appendix A.2), yet they are constrained to be row-stochastic. This creates a tension: they behave like probabilities in the convex combination but are not normalized conditional distributions. The E-step requires sampling from posterior Pr(H|O). Lemma 2 factorizes posterior into product over i and t of terms involving Pr(H_ti | O_{1:t}) and Pr(H_ti | H_{t,i-1}, O_{t-1}) etc. This enables Gibbs-like sampling without variational inference (unlike Pan et al. coupled HMMs). Multi-hop: from graphical structure to posterior factorization to EM to learned R matrices for NBA teams. Breakdown regimes: (1) If any row of R does not sum to 1 with r_i, Lemma 1 fails and Pr(·|·) is not a probability law. (2) If n changes due to substitutions, the fixed 5x6 R matrix is undefined. (3) If alpha=1 (all players choke) is too strict; alpha<1 would change collapse probability dramatically. (4) The EM Q function is non-concave due to products in Pr(H_ti | H_{t,i-1}, O_{t-1}); round-robin heuristic converges only to local optima; 1-2 iterations may be insufficient for complex dependency structures. (5) PIE labeling with epsilon=0.05 is arbitrary; small changes in epsilon reclassify observed states and alter M, N, E estimates. (6) Synthetic experiment showed learned model can have better N-ELBO than true model (416 vs 417), indicating overfitting risk with limited T=100.

SOURCE_OPERATORS_AND_EQUATIONS: Include equations with LaTeX. Units: probabilities dimensionless, time steps discrete, states categorical {-1,0,1}. Matrix dimensions: M_i^j ∈ R^{n_o x n_h}, N_i ∈ R^{n_h x n_h}, R ∈ R^{n x (n+1)}, E_i ∈ R^{n_o x n_h}. For n=5, n_o=n_h=3. Convex coefficients on simplex Δ^{n}. Collapse definition: indicator 1{H_ti = -1}; team collapse if (1/n) sum_i 1{H_ti=-1} >= alpha. For alpha=1, all n must be -1.

RETROCAUSAL_GENEALOGY: Lineage: HMM (Rabiner, Bishop [3]), Coupled HMMs (Pan et al. [21]), Graphical models (Koller & Friedman [15]), Social influence/disease propagation (Dong et al. [13]), Sports analytics (player ratings, regression [4,16,32,34], network [22,25], latent space [7,8,24]), Choking (Baumeister & Showers [1], Hill et al. [14]), Clutch (Birnbaum [2], Solomonov et al. [30]). Multi-week traps: regular season resilience ≠ playoff resilience; roster static assumption fails across weeks due to injuries/trades; 82-game season vs 7-game series; load management; opponent adjustments; coaching changes. The model learns one R per team for the whole season, assuming stationarity across multi-week horizons.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under pressure, non-pillar players regress from self-dependence to teammate-observed dependence (r_i drops, R_ij rises). This creates a cascading belief loop: Player i observes teammate j's O_{t-1} = -1, updates H_ti toward -1, which then emits O_ti = -1, influencing others. Counter-trap: Opponent game-plan targets the pillar; if pillars are mutually dependent (R_kD), the counter-trap triggers correlated collapse. Clock: Game clock (12-min quarters, 3-min windows in NBAgames) imposes a finite horizon; the model's time-homogeneous transitions ignore end-of-quarter urgency or shot-clock pressure. The hidden state recursion H_t | H_{t-1}, O_{t-1} has no explicit clock variable; thus it cannot distinguish a collapse at t=2 (early game) from t=98 (late game) except through accumulated evidence. Recursive theory of mind: players may simulate teammates' hidden states; the model assumes they only condition on observed states, not on higher-order beliefs about teammates' mental states.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: The model assumes fixed roster (n=5 starters). Substitutions, injuries, foul trouble violate this. If a pillar is subbed out, R loses its anchor; the learned parameters no longer apply. Biomechanical layer: Fatigue (minutes played) influences hidden state but is absent; PIE metric does not capture physical exhaustion. Weather layer: Indoor arena mitigates weather, but extreme conditions (e.g., HVAC failure, travel delays from storms) alter pre-game mental states not captured by H_1i=0 initialization. Veto adjudication: Any prediction must be vetoed if (a) starter lineup changes mid-game, (b) pillar player exits due to injury/fatigue, (c) observed performance metric (PIE) is contaminated by non-skill factors (garbage time, blowout). The model's emission matrix E assumes O is strongly correlated with H; if PIE misclassifies a player's contribution (e.g., defensive stopper with low PIE), E is biased and posterior decoding is invalid.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.

Scenario 1: Pillar rest (load management). Team profile 1Pillar (R_1). Pillar p has r_p ≈ 1, others depend on p. Counterfactual: p sits out first 6 minutes (two 3-min windows). Model prediction: Non-pillars lose influence source; if they have r_i > 0 (1Pillar+H), they revert to self-dependence and collapse probability remains low. If they have r_i = 0 (pure 1Pillar), they depend solely on p's O_{t-1}; with p absent, O_{t-1,p} is undefined or uses latest PIE; model may drift. Veto criterion: If non-pillars are 1Pillar+H (r_i=0.5) and team does NOT collapse during p's absence, model holds. Veto triggered if collapse occurs despite non-pillars having high self-dependence, indicating missing physical fatigue layer.

Scenario 2: Dependent pillars under targeted defense. Team profile 2Pillars+D (R_2D). Pillars a,b depend on each other (R_ab, R_ba > 0, r_a=r_b=0.5). Opponent double-teams pillar a; O_{t-1,a} = -1. Model prediction: Because b depends on a's observed state, H_tb shifts to -1 within one time step; collapse window extends (Fig 11a: more pillars → longer max collapse time). Counterfactual: If b maintains H_tb = 0 or 1 while a is at -1 for two consecutive windows, the assumed dependence R_ba is falsified. Veto criterion: Simultaneous observation O_{t,a} = -1 and O_{t,b} ∈ {0,1} for t in [t0, t0+2] vetoes R_2D for that pairing.

Scenario 3: Anti-dependence matrix M_antiD. Profile 1Pillar+antiD. When pillar's O_{t-1}=1, non-pillar's H_t shifts toward -1 (M_antiD rows: [0,0.1,0.8] etc. from Eq 26). Counterfactual: In a game where pillar over-performs (O=1) and a non-pillar also over-performs (O=1) in the same window, M_antiD predicts non-pillar hidden state should be driven to -1, making emission of O=1 unlikely under E. Veto criterion: Joint observation (O_pillar=1, O_nonpillar=1) occurring with frequency above chance under the learned E and M_antiD falsifies the anti-dependence parameterization; model must revert to standard M or GT matrix.

Now, word count check. THINK_TRACE needs to be long. I'll write richly.

Let's assemble the final response with XML tags exactly as specified.

Make sure to not mention betting lines. Point differential is fine.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core derivation begins with the graphical model in Figure 1, where each player i at time t has a hidden mental state H_ti ∈ H = {−1, 0, 1} and emits an observed performance O_ti ∈ O = {−1, 0, 1}. The joint distribution factorizes as Pr(H, O) = Pr(H₁) ∏_{t=2}^T Pr(H_t | H_{t−1}, O_{t−1}) ∏_{t=1}^T Pr(O_t | H_t). The critical assumption is that H_ti depends on the previous hidden state of player i and the previous observed states of all teammates, not on their hidden states. This distinguishes it from Pan et al.'s coupled HMMs, where hidden states influence hidden states; here, players only observe performances, not mental states.

The conditional is approximated as a convex combination: Pr(H_ti = h | O_{t−1}, H_{t,i−1}) ≈ Σ_{j=1}^n R_ij · Infl(H_ti = h | O_{t−1}) + r_i · Infl(H_ti = h | H_{t,i−1}), with Σ_j R_ij + r_i = 1 and all coefficients non-negative. Lemma 1 proves this induces a valid probability law because each Infl matrix is row-stochastic: summing over h yields Σ_j R_ij · 1 + r_i · 1 = 1. This places R on the probability simplex Δ^n for each row. Appendix A.2 clarifies that Infl values are not themselves conditional probabilities, despite their stochastic appearance, creating a subtle semantic tension: they act as convex weights in a probability law but are not normalized likelihoods.

Gray-zone audit. First, the E-step of EM requires sampling from Pr(H | O). Lemma 2 factorizes this posterior into per-player, per-time terms that can be sampled sequentially, avoiding the variational inference needed in coupled HMMs. However, the Q-function in the M-step is non-concave because Pr(H_ti | H_{t,i−1}, O_{t−1}) contains products of parameters; the round-robin heuristic optimizes one parameter block at a time and is only guaranteed to reach a local optimum. The authors report 1–2 round-robin iterations suffice, but this is an empirical claim, not a convergence proof; on complex dependency structures (e.g., 3Pillars+D), premature termination could trap parameters in a suboptimal region of the simplex.

Second, breakdown regimes are explicit but under-explored. If Σ_j R_ij + r_i ≠ 1 for any row, Lemma 1 collapses and Pr(·|·) is no longer a probability law. If roster composition changes (substitutions, injuries), the fixed n × (n+1) matrix R is undefined because n is no longer constant. The authors acknowledge static roster as a limitation for future work. Third, the collapse definition uses α = 1 (all five players choke) in the main simulations; relaxing α to 0.6 or 0.8 would materially alter collapse probabilities and is not reported in the headline figures. Fourth, the observed-state labeling relies on PIE within ±ε = 0.05 of a player's average; this threshold is arbitrary and reclassifies borderline quarters, directly perturbing M, N, and E estimates. Fifth, the synthetic experiment reports a learned N-ELBO of 416 versus a true-model N-ELBO of 417, indicating the learned model can overfit the finite T = 100 sequence and outscore the generative model on likelihood, a warning for parameter identifiability with short time series.

Multi-hop trace: graphical structure → conditional convex combination → row-stochasticity → Lemma 1 (valid law) → posterior factorization (Lemma 2) → EM learning → team-profile simulations → real NBA R matrices → game-specific hidden-state decoding. Each hop preserves the discrete-time, categorical-state assumption, but the jump from synthetic T = 100 to NBA seasons with quarters and 3-minute windows introduces temporal aggregation error not quantified in the text.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal model operators and equations (printed page folios are not preserved in the supplied arXiv markdown conversion; citations below reference section and equation numbers [Sec. X.Y], [Eq. N]):

State spaces and units:
- Hidden state space H = {−1, 0, 1}, cardinality n_h = 3; units: categorical mental-state index (dimensionless).
- Observed state space O = {−1, 0, 1}, cardinality n_o = 3; units: categorical performance index relative to player average (dimensionless).
- Discrete time steps t ∈ {1, ..., T}; for basketball starters n = 5 entities.

Conditional hidden-state dynamics [Sec. 2.2, Eq. 1]:
Pr(H_ti = h | O_{t−1}, H_{t,i−1}) = Σ_{j=1}^{n} R_ij · Infl(H_ti = h | O_{t−1}) + r_i · Infl(H_ti = h | H_{t,i−1}),
subject to Σ_{j=1}^{n} R_ij + r_i = 1, R_ij ≥ 0, r_i ≥ 0.
Vector R_i = (r_i | R_i1, ..., R_in); team-structure matrix R ∈ ℝ^{n × (n+1)}.

Influence and emission matrices [Sec. 2.2]:
M_i^j = Infl(H_ti | O_{t−1}) ∈ ℝ^{n_o × n_h}, row-stochastic.
N_i = Infl(H_ti | H_{t,i−1}) ∈ ℝ^{n_h × n_h}, row-stochastic.
E_i = Pr(O_ti | H_ti) ∈ ℝ^{n_o × n_h}.
Full parameter set Θ = {M_i^j, N_i, R, E_i | i, j ∈ [n]}.

Validity lemma [Sec. 2.2, Appendix A.1]:
Σ_{h∈H} Pr(H_ti = h | O_{t−1}, H_{t,i−1}) = Σ_{j=1}^{n} R_ij + r_i = 1.
Breakdown: if any row violates the simplex constraint, Pr(·|·) ceases to be a probability law.

EM objective [Sec. 4.1, Eq. 2]:
Q(Θ | Θ_old) = E_{H∼Pr(H|O,Θ_old)} [ log Pr(H, O | Θ) ].

Complete log-likelihood [Sec. 4.1.2, Eq. 4]:
log Pr(H, O) = log Pr(H₁) + Σ_{t=2}^{T} Σ_{i=1}^{n} log Pr(H_ti | H_{t,i−1}, O_{t−1}) + Σ_{t=1}^{T} Σ_{i=1}^{n} log Pr(O_ti | H_ti).
Non-concavity arises from products inside Pr(H_ti | H_{t,i−1}, O_{t−1}); round-robin block coordinate ascent is used.

Posterior factorization for E-step sampling [Sec. 4.1.1, Lemma 2, Eq. 3]:
Pr(H | O) = (∏_{i=1}^{n} ∏_{t=1}^{T} Pr(H_ti | O_{1:t}) Pr(H_ti | H_{t,i−1}, O_{1:t−1})) / (∏_{t=1}^{T} Pr(H_t | O_{1:t−1})).
Sampling target ∝ Pr(H_ti = h | O_{1:t}) · Pr(H_ti = h | H_{t,i−1}, O_{t−1}) / Pr(H_ti = h | O_{1:t−1}).

Decoding [Sec. 4.3, Eq. 8]:
h* = argmax_{h} Pr(H = h | O), solved by Viterbi-like recursion δ_i(t, h) = Pr(O_ti | H_ti = h) · max_{h′∈H} [ δ_i(t−1, h′) · Pr(H_ti = h | H_{t,i−1} = h′, O_{t−1}) ].

Team-collapse definitions [Sec. 2.3, Def. 2–3]:
Player i choking at t: 1{H_ti = −1}.
Team in α-collapse at t: (1/n) Σ_{i=1}^{n} 1{H_ti = −1} ≥ α.
Main experiments set α = 1 (all players choked).

Verbatim locators:
- “A team is in an α-collapse state at time t, if α fraction of the team’s players are in a choking state at time t” [Sec. 2.3].
- “players in a team don’t know the hidden state of their teammates; they only know their teammates’ observed performance” [Sec. Related Work / Figure 1 discussion].
- “Infl(·) values are not necessarily probabilities” [Appendix A.2].

Real-data labeling [Sec. 5.1]:
O_ti = 0 if PIE within ±ε of player average (ε = 0.05); O_ti = 1 if above; O_ti = −1 if below. If player did not play in a quarter, use latest PIE or default O_ti = 1. This labeling injects measurement error into O that propagates into M and E estimates.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The model sits at the intersection of four lineages. (1) Probabilistic graphical models and HMMs: it builds on Koller & Friedman [15] and standard HMM inference [3, Bishop], but departs from Pan et al.'s coupled HMMs [21] by conditioning each actor's hidden state on others' *observed* states rather than others' hidden states. This is a theoretically meaningful retrocausal shift: in sports, a player cannot directly perceive a teammate's mental state, only their box-score or play-by-play output. The influence therefore flows from observable performance to latent psychology, inverting the direction of classic social-influence models where latent attitudes drive observable behavior. (2) Sports analytics: player-rating regressions [4, 16, 32, 34], “whowins-whom” networks [22, 25], and latent-space embeddings [7, 8, 24] assume additive, independent player contributions. Nikolaou et al. explicitly reject additivity, modeling how one player's under-performance can cascade into team collapse. (3) Choking and clutch literature: Baumeister & Showers [1], Hill et al. [14], and Dohmen [12] study individual pressure effects; Bransen et al. [5] quantify soccer pressure metrics. This paper extends individual choking to team-level contagion. (4) Network influence and disease propagation: Dong et al. [13] and Pan et al. [21] model dynamical influence on graphs; here the graph is the team's dependency matrix R.

Multi-week traps: The model estimates a single R per NBA team over the full 2021–22 season, assuming stationarity across roughly 82 games. This is fragile over multi-week horizons. Injuries, trades, load management, and coaching adjustments change the effective roster and dependency structure week to week. A team that is resilient in November (healthy pillars) may become brittle in March (pillar rested, minutes redistributed). The static assumption also obscures playoff adaptation: a regular-season structure that avoids collapse against predictable opponents may be exploited in a seven-game series once an opponent identifies and targets the pillar. Additionally, the learned R aggregates over quarters with 12-minute duration, while the NBAgames dataset uses 3-minute windows; temporal misalignment between the season-level parameter estimation and fine-grained game analysis creates a retrocausal mismatch where parameters learned from coarse data are applied to fine-grained collapse windows without a scale-adjustment operator.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under pressure, players regress from self-dependence (high r_i, reliance on own H_{t,i−1}) to teammate-observed dependence (high R_ij, reliance on teammates' O_{t−1}). In the model's language, a non-pillar under stress increases its weight on the influence matrices M_i^j and decreases weight on N_i. This produces a recursive belief loop: player i observes teammate j's O_{t−1} = −1, updates H_ti toward −1, emits O_ti = −1 at t, which then influences teammates at t+1. The hidden state is thus a second-order belief: “I believe you believe I am collapsing,” which becomes self-fulfilling when enough players share the dependency. Pillar players break this recursion by anchoring on their own hidden state (r_i ≈ 1), acting as mental-state sinks that do not propagate teammate panic.

Counter-trap: An opponent can execute a targeted counter-trap by focusing defensive pressure on the team's identified pillar. If the team is a 1Pillar profile, the pillar's O_{t−1} = −1 removes the anchor for all non-pillars (who have R_ij > 0 toward the pillar and r_i = 0), causing a cascade. If the team is 2Pillars+D, the pillars depend on each other; neutralizing one pillar mechanically drives the other's hidden state down through the mutual R terms, synchronizing the collapse. The simulations confirm that dependence between pillars (R_kD) reduces resilience because dependent pillars co-choke.

Clock: The model's transition kernel is time-homogeneous; there is no explicit game-clock, shot-clock, or score-differential state variable. A collapse at t = 3 (early first quarter) is governed by the same Pr(H_t | H_{t−1}, O_{t−1}) as t = 95 (final minutes). Real basketball introduces non-stationarity: end-of-quarter urgency, foul trouble, and fatigue change the effective hidden-state transition probabilities. The model's inference on 3-minute windows (NBAgames dataset) partially mitigates this by increasing temporal resolution, but the learned parameters still lack a clock covariate. Thus, recursive theory of mind in this framework is clock-blind: players update beliefs on observed performances regardless of how much game time remains, which is a structural blind spot for late-game collapse prediction.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model assumes a fixed roster of n = 5 starters over all T timesteps [Sec. 2.2]. Substitutions, injuries, foul trouble, and mid-game lineup changes violate this. If a pillar player exits, the corresponding row and column of R are no longer applicable; the learned dependency structure cannot be re-sliced on the fly because EM was trained on a constant-n graphical model. Any prediction made after a starter leaves the game must be vetoed unless the model is re-trained or extended to dynamic n (acknowledged as future work in the Conclusions).

Biomechanical layer: Fatigue and minutes played are not state variables. H_ti captures “mental” state but is not coupled to physiological load. A player with high minutes may have H_ti drift toward −1 due to physical exhaustion, but the model attributes all hidden-state transitions to observed teammate performance and prior hidden state. PIE, the observed proxy, does not measure defensive exertion or fatigue accurately; thus E_i = Pr(O_ti | H_ti) is biased when physical fatigue decouples mental state from box-score output.

Weather layer: NBA games are indoors, so direct meteorological effects are negligible. However, extreme weather can disrupt team travel, alter pre-game routines, and shift the initial distribution Pr(H₁). The model initializes all players at H₁i = 0 in simulations [Sec. 3.2] and does not model arena HVAC failure, flight delays, or circadian disruption from cross-country travel. These are exogenous shocks to the mental-state prior that lie outside the graphical model.

Adjudication rule: A model-generated collapse forecast is vetoed if (a) the starting five changes during the observation window, (b) a pillar or high-R_ij player is removed by injury/foul-out, (c) the PIE metric is contaminated by garbage-time scoring or blowout contexts where O_ti no longer reflects competitive effort, or (d) the game is played under abnormal physical conditions (e.g., arena emergency) that invalidate the H₁i = 0 initialization. In all such cases, the fixed-n, time-homogeneous, PIE-based observation model is structurally mismatched to reality.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Pillar rest under 1Pillar+H.
Setup: Team profile 1Pillar+H [Sec. 3.1], where pillar p has r_p ≈ 1 and non-pillars have r_i = 0.5 with dependence on p. Counterfactual intervention: Pillar p is rested (load management) for the first two 3-minute windows; non-pillars retain self-dependence. Model prediction: Non-pillars revert to their own hidden states; collapse probability does not spike merely because p is absent, because they are not purely dependent on p's observed state (unlike pure 1Pillar, where r_i = 0). Veto criterion: If the team enters α-collapse during p's absence despite non-pillars having r_i = 0.5, the omission of physical-fatigue and substitution layers has falsified the model; prediction invalid.

Scenario 2 — Targeted double-team on dependent pillars.
Setup: Team profile 2Pillars+D [Sec. 3.1], pillars a and b have 0 < r_a, r_b < 1 and mutual dependence R_ab, R_ba > 0. Counterfactual: Opponent successfully forces O_{t,a} = −1 for two consecutive windows. Model prediction: Because b's hidden state conditions on a's observed state, H_tb transitions to −1 within one time step; the maximum collapse window lengthens (cf. Fig. 11a: more pillars and pillar dependence increase max collapse time). Veto criterion: If b maintains H_tb ∈ {0, 1} (and emits O_tb ≠ −1) while a remains at O_{t,a} = −1 for two consecutive windows, the assumed cross-pillar dependence R_ba is falsified for that pairing; the R_kD parameterization must be vetoed.

Scenario 3 — Anti-dependence matrix M_antiD.
Setup: Profile 1Pillar + antiD [Appendix B.2], where M_antiD [Eq. 26] drives a non-pillar's hidden state toward −1 when the pillar's observed state is +1 (row structure punishes teammate over-performance). Counterfactual: In a specific game, the pillar over-performs (O_{t,p} = 1) and a non-pillar also over-performs (O_{t,i} = 1) in the same window. Model prediction: Under M_antiD and standard E, the joint emission of two +1 observations is suppressed because the non-pillar's hidden state is driven negative by the pillar's positive observed state. Veto criterion: If (O_p = 1, O_i = 1) occurs with frequency significantly above the joint probability implied by the learned E and M_antiD, the anti-dependence hypothesis is refuted; the model must revert to standard M or Great-Teammate parameterization [Eq. 25] for that player pair.
</RLVR_COUNTERFACTUAL_VETOES>