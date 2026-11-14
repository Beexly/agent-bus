---
source: "2026 - Challenge or Pass A Dynamic Policy for MLB's Automated Ball-Strike System - Pipping-Gam n et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 22
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4797
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about MLB's Automated Ball-Strike (ABS) challenge system. They've provided the full text of the paper across 22 pages.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "DRIVE SOURCE" and provided the PDF text. They didn't ask a specific question explicitly, but implied I should analyze it using the GSE + GSI Frontier Reasoning Foundry framework. I need to produce the XML sections with the required content.

Let me plan the content:

**THINK_TRACE (>=400 words):** Deep multi-hop derivation & gray-zone audit.
- Analyze the dynamic programming formulation.
- Identify gray zones: unobserved sensory impressions Si, conflation of sensory vs action error, assumption that z alone determines future opportunities regardless of current challenge decision, fixed recorded sequence vs counterfactual game evolution, extra inning challenge restoration rule, pooling strength λF=0 boundary issue, CRPS vs MSE validation mismatch, bootstrap excluding estimation uncertainty, oracle assumes perfect execution but retains challenges (all reviews succeed), etc.
- Multi-hop: how Eq (8) threshold depends on qG > (1-q)L -> q > L/(G+L), how this maps to perceived margin cutoff t via posterior qrc(s), how σs,r = wr assumption (κ=1) vs κ<1 leaves policy value unchanged within cutoff family but changes individual challenge probabilities? Wait, section 4.2 says changing division leaves probability of choosing challenge unchanged for same true margin and cutoff? Let me re-read: "Changing the division between sensory and action error leaves their sum Gaussian with mean zero and variance w^2_r. For the same true margin, game context, and cutoff, the probability of choosing to challenge is therefore unchanged." Actually with action error, the decision is S + εa > t, i.e., M + εs + εa > t. The sum has variance σs² + σa² = w². So yes, the challenge probability is unchanged if cutoff t is fixed in terms of the sum. But the posterior overturn probability q depends only on sensory impression S and prior, not on action error. If σs changes, q changes for a given S. Hmm, need to be careful. The text says optimizing within cutoff family gives same optimal policy value, so cutoffs from κ=1 also attain that value under other divisions. I should note this as a gray zone: the identification of σs vs σa is fundamentally weak, yet the policy's optimality relies on the posterior q which uses σs. If σs is misspecified, q is wrong, but the cutoff t adjusts? Actually the text says "allowing any action error to continue affecting decisions under the recommended policy" and equations (11). It claims the probability of choosing to challenge is unchanged because M + εs + εa > t has same distribution. But the *posterior* q used in the Bellman equation (8) depends on σs. If σs changes, qrc(s; σs,r) changes. So how does the value stay the same? The text says "With the other fitted inputs held fixed, each cutoff therefore produces the same expected correction gains..." This seems to rely on re-optimizing t for each κ. It's a subtle point worth auditing.

**SOURCE_OPERATORS_AND_EQUATIONS:** Formal LaTeX, units, page citations, breakdown.
- List all equations from pages 5-9 and appendices pages 16-21.
- Eq (1): run expectancy shrinkage.
- Eq (2): gain Gi.
- Eq (3): prior shrinkage.
- Eq (4): sensory error model.
- Eq (5): posterior overturn probability.
- Eq (6): probit historical choice model, wr = 1/br.
- Eq (7): future cost Lk(z).
- Eq (8): challenge if qG > (1-q)Lk(z).
- Eq (9): Bellman equation Vk(z).
- Eq (10): Ck(z) transition.
- Eq (11): κ division of variance.
- Appendix equations (A.1)-(A.8).
- Units: inches for margins, runs for expected value, probability dimensionless, λRE=100 pitches, αo=30, αd=10, λF=0, σs,o=2.900 inches, σs,d=1.823 inches.
- Page citations: [PAGE 5], [PAGE 6], etc.

**RETROCAUSAL_GENEALOGY:** Historical/scientific lineage & multi-week traps.
- Lindsey (1963) run expectancy [PAGE 2, 5].
- Abramitzky et al. (2012) tennis challenges [PAGE 3, 8].
- Deshpande and Wyner (2017) pitch framing [PAGE 3].
- Yee and Deshpande (2024) plate discipline [PAGE 3].
- Martinez (2026) MDP simulated [PAGE 3].
- Lee et al. (2026) umpire calls and challenge decisions [PAGE 3].
- Puterman (1994) value iteration [PAGE 8, 21].
- Efron and Tibshirani (1994) bootstrap [PAGE 10, 14].
- Gelman et al. (2013) Bayesian Data Analysis [PAGE 6].
- Gneiting and Raftery (2007) CRPS [PAGE 17].
- Wood (2017) GAMs [PAGE 6, 15, 18].
- Multi-week traps: development sample March 25-July 12, evaluation July 16-end of season [PAGE 4]. All-Star break split. 983 test games. Potential trap: season-long trends, pitcher/batter adaptations to ABS over time, extra-inning rule changes, roster turnover, playoff intensity vs regular season. The policy is fixed (no refitting) so it may decay as players learn. Also the "recorded sequence" evaluation ignores counterfactual pitch sequences after overturns [PAGE 9, 13], which is a major structural trap for actual game impact.

**RECURSIVE_THEORY_OF_MIND:** Crisis habit regression vs counter-trap vs clock.
- This section seems to be about the players' decision-making habits under pressure, how they regress to crisis habits, counter-traps (the policy exploiting predictable human patterns), and the clock (game state/time pressure).
- Players' impressions unobserved, modeled as Gaussian errors [PAGE 13].
- Historical choices identify combined variance but not perception vs action split [PAGE 6, 13].
- Crisis habit: players may over-rely on overturn rate or recent outcomes; the policy challenges more often (6.14 vs 4.59) with lower overturn rate (43.8% vs 54.7%) [PAGE 10].
- Counter-trap: the policy exploits the fact that overturn rate is misleading; it passes on low-value high-certainty calls (Lowe) and challenges high-value low-certainty calls (Marte) [PAGE 11-12].
- Clock: inning progression, fewer opportunities remain, costs fall, break-even probability drops [PAGE 10, Figure 2]. Extra inning restoration [PAGE 4, 8]. The "clock" is the remaining challenges and innings.
- Recursive theory of mind: players think about what the opponent/umpire will do, but here it's about own future opportunities. The model assumes players follow recommended policy given impressions [PAGE 6].

**CROSS_LAYER_VETO_ADJUDICATION:** Physical/biomechanical/weather veto proof.
- This section seems odd for a baseball stats paper, but I need to interpret it as physical constraints that veto the model's assumptions.
- Physical: pitch tracking error, ball radius 1.45 inches [PAGE 16], strike zone reconstruction limits [PAGE 16-17]. Public tracking data error [PAGE 4].
- Biomechanical: batter/catcher/pitcher ability to perceive pitch location, sensory error σs,r in inches [PAGE 6]. Individual differences could change recommendations [PAGE 13].
- Weather: not explicitly discussed in the text, but could affect pitch movement/tracking. Since not in text, I should note absence or mention that weather isn't modeled as a veto layer. However, the invariant says "Physical/biomechanical/weather veto proof" - I should address what's in the text and note limitations. The text says "our classifications remain subject to error in the publicly available tracking data" [PAGE 4]. Ball radius assumption [PAGE 16]. Zone limits from live feed [PAGE 16].
- Veto proof: what would veto the model? If tracking error > margin bins (0.01 inches) [PAGE 5, 17], if σs,r misspecified, if extra-inning restoration rule changes, if λF=0 is too restrictive.

**RLVR_COUNTERFACTUAL_VETOES:** 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning via Verifiable Rewards? Or some framework. I need to create 3 counterfactual scenarios where the policy would be vetoed or fail, with verifiable predictions.
- Scenario 1: Counterfactual game-state divergence. If an overturn changes the count (e.g., strike 3 to ball 4 leading to walk), the subsequent pitch sequence changes entirely. The paper evaluates along recorded sequence only [PAGE 9, 13]. Prediction: actual run value in counterfactual simulation would diverge from 0.084 runs/game; possibly lower because overturns early in PA change pitcher/batter matchups.
- Scenario 2: Sensory-action error misallocation. If true σs,r is much smaller than wr (i.e., most error is action error), the posterior q is over/under-confident. The paper claims policy value unchanged within cutoff family [PAGE 10], but this relies on re-optimizing cutoffs. If cutoffs are fixed from κ=1 and applied under κ<1 without re-optimization, value degrades. Prediction: with fixed κ=1 cutoffs under true κ=0.5, expected correction gains drop by >X%.
- Scenario 3: Extra-innings challenge restoration and exhaustion. If a team exhausts challenges in regulation and enters extra innings, one is restored [PAGE 4, 8]. But if the model's transition distribution ignores how current challenge affects future state (assumption in Section 3.4) [PAGE 8], then in games with many extra innings, the value of preserving challenges is misestimated. Prediction: in extra-inning games (>12 innings), policy gain deviates significantly from 0.084 runs/game, potentially negative if it over-preserves.

Now I need to make sure total word count >= 1000 across sections, with THINK_TRACE >= 400 words.

Let me write carefully, including exact page citations and verbatim quotes where appropriate. I must not mention betting lines.

Let's draft.

Structure:

<THINK_TRACE>
...
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTORY_VETOES>

Wait, tag name is <RLVR_COUNTERFACTUAL_VETOES>.

I need to ensure LaTeX equations are formal.

Let's begin drafting content mentally.

THINK_TRACE: I'll discuss the Bellman optimality condition qG > (1-q)L, solving for q > L/(G+L). Then mapping to margin cutoff: qrc(t) = L/(G+L). The gray zone: q depends on σs,r through Bayes rule Eq (5). If σs,r is misidentified because sensory vs action error cannot be separated [PAGE 6], then q is biased for any given impression S. However Section 4.2 claims re-optimizing cutoffs restores value [PAGE 10]. I need to audit whether this holds when q enters nonlinearly through the posterior. Another gray zone: the model assumes z alone determines future opportunities regardless of current challenge decision [PAGE 8], but overturning strike 3 to ball 4 changes the next batter, outs, count, etc., so the "recorded sequence" evaluation is a lower-bound/partial equilibrium estimate [PAGE 9, 13]. Another: λF=0 lies at boundary of candidate set A [PAGE 21], and criterion nearly flat; sensitivity ±0.001 runs [PAGE 22]. Bootstrap excludes estimation uncertainty [PAGE 10]. Oracle assumes all reviews succeed and retains challenges [PAGE 10], which is physically impossible if ABS has errors. Multi-hop: development sample March 25-July 12, evaluation July 16 onward [PAGE 4]; no refitting means policy is static while players may adapt to ABS over the season, causing temporal decay.

That's plenty for 400+ words.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page numbers and units.

RETROCAUSAL_GENEALOGY: Cite Lindsey 1963 [PAGE 2, 5], Abramitzky 2012 [PAGE 3, 8], Deshpande & Wyner 2017 [PAGE 3], Yee & Deshpande 2024 [PAGE 3], Martinez 2026 [PAGE 3], Lee et al. 2026 [PAGE 3], Puterman 1994 [PAGE 8, 21], Efron & Tibshirani 1994 [PAGE 10, 14], Gelman et al. 2013 [PAGE 6], Gneiting & Raftery 2007 [PAGE 17], Wood 2017 [PAGE 6, 15, 18]. Multi-week traps: pre/post All-Star break [PAGE 4], adaptation over season, roster changes, playoff intensity not covered, extra-innings rule.

RECURSIVE_THEORY_OF_MIND: Discuss players' unobserved impressions [PAGE 6, 13], crisis habits (overvaluing overturn rate) [PAGE 10], counter-trap (policy challenges high-value low-q, passes low-value high-q) [PAGE 11-12], clock (inning, remaining challenges, extra inning restoration) [PAGE 4, 8, 10]. Marte vs Lowe example [PAGE 2, 11].

CROSS_LAYER_VETO_ADJUDICATION: Physical vetoes: tracking error [PAGE 4], ball radius 1.45 in [PAGE 16], zone boundaries rounded to 3 decimals in feet [PAGE 16], margin bins 0.01 in [PAGE 17], posterior grid [−40,40] inches [PAGE 20]. Biomechanical: σs,o=2.900 in, σs,d=1.823 in [PAGE 7], individual differences [PAGE 13]. Weather: absent from model; note that no weather covariates in probit [PAGE 18] or run expectancy. Veto conditions: if tracking error σ_track > 0.01 in bin width, margin classification flips; if σs,r non-Gaussian or heteroskedastic by count/pitch type, posterior q miscalibrated; if extra-innings restoration rule modified, Eq (10) g(k,e) invalid.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Counterfactual sequence divergence: Verifiable prediction: In a full game-tree simulation where overturns alter subsequent pitches, the policy's true run value will fall below the recorded-sequence estimate of 0.536 runs/game, with divergence increasing in the number of successful overturns per game (policy attempts 6.14 challenges vs 4.59 observed [PAGE 10]).
2. Error variance misallocation without cutoff re-optimization: If true κ_o < 1 but policy uses κ_o=1 cutoffs, posterior q is miscalibrated; prediction: expected correction gain drops by at least the bootstrap interval width [0.065, 0.103] (i.e., gain becomes statistically indistinguishable from zero) because the break-even threshold q* = L/(G+L) is crossed for marginal impressions.
3. Extra-innings exhaustion and state-dependence violation: If a team enters extra innings with zero challenges and the restoration rule is not applied or is changed, Ck(z) overestimates future value; prediction: in games lasting >12 innings, the policy's per-game gain will be negative relative to observed because over-preservation in late regulation leaves no challenges for high-leverage extra-inning calls, violating the assumption that z alone determines future opportunities [PAGE 8].

I should include exact [PAGE N] citations throughout.

Word count check: THINK_TRACE needs >=400 words. Total across all sections >=1000. I'll write substantial content.

Let's ensure no betting language. Avoid "odds", "spread", "moneyline", "total". Use "probability", "expected runs", "break-even threshold".

Let's write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The core optimization is a finite-horizon dynamic program over a team’s remaining challenge budget k ∈ {0, 1, 2} and game state z (half-inning, outs, offensive/defensive role). The one-step decision rule, Eq. (8), challenges iff qG > (1 − q)L_k(z). Solving for the break-even overturn probability gives q* = L_k(z) / [G + L_k(z)]. This is a multiplicative, not additive, tradeoff: a high-value correction G lowers the required confidence, while a costly lost challenge L raises it. The probability q itself is a Bayesian posterior over the signed margin M, Eq. (5), which requires a sensory error scale σ_s,r. The paper identifies only the combined width w_r = 1/b_r from a probit on historical challenge choices, Eq. (6), and assigns it entirely to sensory error in the primary specification (σ_s,r = w_r, σ_a,r = 0). This is a gray-zone identification failure: players’ impressions S_i are never observed, so perception error and execution error are observationally equivalent in the choice data. Section 4.2 claims that re-optimizing the cutoff t under alternative variance splits κ_r leaves the optimal policy value unchanged, Eq. (11), but this result is conditional on the cutoff family and on Gaussian, mean-zero, independent errors. If the true error distribution is heteroskedastic by count, pitch type, or game leverage, q_rc(s; σ_s,r) is misspecified and the break-even threshold q* is applied to a biased posterior.

A second multi-hop vulnerability is the “recorded sequence” evaluation. Because an overturned strike three or ball four changes the count, outs, and potentially the batter, the actual post-overturn pitch sequence diverges from the observed record. The paper explicitly evaluates only along recorded opportunities and does not reconstruct counterfactual game evolution, pp. 9 and 13. Therefore 0.536 modeled correction runs per game is a partial-equilibrium value, not a final-score effect. A third gray zone is the state-transition assumption that z alone determines the distribution of later calls, “regardless of whether the team challenges the current call or lets it stand,” p. 8. This ignores the strategic coupling between current challenge success and future state occupancy: a successful challenge changes the base-out-count state and hence the arrival rate of future challengeable calls. The extra-innings restoration rule g(k,e) further complicates the horizon: entering an extra inning with zero challenges restores one, pp. 4 and 8, so the value function has a non-stationary reset that value iteration must resolve across coupled equations (9)–(10).

Temporal validity is another trap. The development window is March 25–July 12, 2026 (1,442 games), and evaluation is July 16–end of season on 983 games without refitting, p. 4. If players learn the ABS zone or adjust challenge behavior over the season, the fixed priors and error widths become stale. The bootstrap interval [0.065, 0.103] captures only cross-game variation with fitted inputs fixed, p. 10, and excludes estimation uncertainty from the development sample, p. 13. Finally, the pooling-strength selection puts λ_F = 0 at the lower boundary of the candidate set A, p. 21, with the criterion “nearly flat near zero”; λ_F = 30 changes total recovery by only 0.05 runs across development games, p. 22. This boundary solution means the model refuses to borrow strength across innings even when some states are sparsely observed, which could overfit idiosyncratic development-game sequences.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All quantities below are drawn from the provided text with page citations.

Run expectancy (p. 5, Eq. 1):
cRE(b,o,c) = [Σ_{j:x_j=(b,o,c)} Y_j + λ_RE ȳ_{bo}] / [n_{boc} + λ_RE]
Units: runs. λ_RE = 100 additional pitches (shrinkage weight). States: 8 base configurations × 3 outs × 12 counts = 288.

Correction gain (p. 5, Eq. 2):
G_i = R_i(ball) + cRE{x_i(ball)} − R_i(strike) − cRE{x_i(strike)}
Units: expected runs. Positive for batter challenging called strike; negative of same difference for defense challenging called ball.

Margin prior (p. 5, Eq. 3):
p_{rc}(m) = [n_{rc}(m) + α_r p_r(m)] / [n_{rc} + α_r]
Units: dimensionless probability mass over 0.01-inch margin bins. Selected α_o = 30, α_d = 10 (Table 2, p. 22).

Sensory impression model (p. 6, Eq. 4):
S_i = M_i + ε_{s,i}, ε_{s,i} | M_i,r,c ~ N(0, σ^2_{s,r})
Units: inches.

Posterior overturn probability (p. 6, Eq. 5):
q_{rc}(s; σ_{s,r}) = [Σ_{m>0} p_{rc}(m) ϕ_{σ_{s,r}}(s−m)] / [Σ_m p_{rc}(m) ϕ_{σ_{s,r}}(s−m)]
Units: dimensionless probability. Correctable iff M > 0 on offense; M ≥ 0 on defense (boundary counts as strike), pp. 4 and 16.

Historical choice probit (p. 6, Eq. 6):
P(A^hist_i = 1 | M_i, X_i, r) = Φ[(M_i − tr(X_i)) / w_r], w^2_r = σ^2_{s,r} + σ^2_{a,r}
Fitted widths: w_o = 2.900 inches, w_d = 1.823 inches, p. 7.

Future cost of losing a challenge (p. 7, Eq. 7):
L_k(z) = C_k(z) − C_{k−1}(z), k = 1,2.
Units: expected runs.

Bellman-optimal challenge rule (p. 7, Eq. 8):
Challenge iff qG > (1 − q)L_k(z). Equivalent cutoff form: challenge iff perceived margin S > t, where q_{rc}(t) = L_k(z) / [G + L_k(z)].

Bellman equation (pp. 7–8, Eq. 9):
V_k(z) = C_k(z) + E[ max{0, qG − (1−q)L_k(z)} | z ], k = 1,2; V_0(z) = C_0(z).
Units: runs.

Transition value (p. 8, Eq. 10):
C_k(z) = Σ_{z'} Σ_{e=0}^1 bP_z(z',e) V_{g(k,e)}(z'), with g(0,1) = 1 (extra-innings restoration) and g(k,e) = k otherwise.

Variance split sensitivity (p. 10, Eq. 11):
σ_{s,r} = κ_r w_r, σ_{a,r} = w_r √(1 − κ_r^2), κ_r ∈ [0,1].

Margin reconstruction (pp. 16–17, Eq. A.1):
D = √[max(q_x,0)^2 + max(q_z,0)^2] + min{max(q_x,q_z),0} − 1.45
Units: inches; ball radius 1.45 inches; strike when D ≤ 0.

Probit calibration with covariates (p. 18, Eq. A.3):
Φ^{-1} P(A^hist_i = 1 | ·) = β_{0r} + b_r M_i + f_{Gr}(G_i) + f_{Ir}(I_i) + f_{dr}(d_i) + Z_i^⊤ γ_r + u_{a(i),r} + v_{T(i),r}.

CRPS for prior validation (p. 17, Eq. A.2):
CRPS(p,y) = Σ_b p(b)|m_b − y| − (1/2) Σ_b Σ_{b'} p(b)p(b')|m_b − m_{b'}|.

Mixture for future opportunities (pp. 19–20, Eq. A.4–A.5):
bP_z = ω_z bP^{state}_z + (1 − ω_z) bP^{pool}_z, ω_z = n_z / (n_z + λ_F); selected λ_F = 0.

Empirical results (pp. 10–11, Table 1): Policy recovers 0.536 runs/game vs. 0.452 observed; gain 0.084 [0.065, 0.103]; 18.5% improvement. Oracle: 1.347 runs/game. Policy challenges 6.14/game vs. 4.59 observed; overturn rate 43.8% vs. 54.7%; value per success 0.199 vs. 0.180 runs.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Lindsey (1963), whose run-expectancy framework converts base-out-count states into expected runs remaining, cited on p. 2 and formalized in Eq. (1) on p. 5. The challenge-allocation problem is explicitly mapped from Abramitzky et al. (2012), who study tennis line-call challenges as a tradeoff between correcting a current call and preserving a challenge for later, cited on pp. 3 and 8 and mirrored in Eq. (8). Pitch-framing foundations come from Deshpande and Wyner (2017), and plate-discipline valuation from Yee and Deshpande (2024), both cited on p. 3. Direct ABS precedent includes Martinez (2026), who formulates challenge allocation as a Markov decision process in simulation from 2024 Statcast data, and Lee et al. (2026), who examine actual 2026 ABS challenge decisions, both cited on p. 3. Computational solution relies on Puterman (1994) value iteration for coupled Bellman equations, cited on pp. 8 and 21. Uncertainty quantification uses Efron and Tibshirani (1994) percentile bootstrap over 5,000 resamples of the 983 test games, cited on pp. 10 and 14. Bayesian updating follows Gelman et al. (2013), cited on p. 6. Prior validation uses CRPS from Gneiting and Raftery (2007), cited on p. 17. Covariate smoothing in the calibration probit uses Wood (2017) GAM methods, cited on pp. 6, 15, and 18.

Multi-week traps arise from the sample split: development games run March 25–July 12, 2026, and evaluation games run July 16 through season end, p. 4. Because the 2026 ABS system is new, player umpire-reading and challenge behavior may evolve within the season; a fixed policy fitted pre-All-Star break may decay as batters and catchers learn the algorithmic zone’s boundaries. The evaluation excludes postseason intensity, roster turnover after July, and any rule modifications to the extra-innings challenge restoration (one challenge restored if none remain, pp. 4 and 8). The 983-game holdout is never refitted, p. 4, so the policy cannot adapt to seasonal drift in umpire-call error or in player sensory calibration. A second temporal trap is the “recorded sequence” evaluation: because overturns change subsequent pitches, the 0.084 run/game gain is a lower-bound partial-equilibrium estimate that cannot capture cascade effects where a corrected call alters the identity of the next batter or pitcher, pp. 9 and 13.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Players’ private impressions S_i are unobserved; the model infers them from tracked margins M_i plus Gaussian sensory error, Eq. (4), and from historical challenge propensities, Eq. (6). Because only the combined width w_r is identified, the model cannot separate whether a player declines to challenge because they misperceived the location (sensory error) or because they mis-acted on a correct perception (action error), pp. 6 and 13. This creates a recursive theory-of-mind problem: the policy presumes players follow the Bayes-optimal rule given their impressions, p. 6, yet actual players may regress to crisis habits under leverage—overweighting recent overturn outcomes, avoiding challenges after a failure, or conserving challenges irrationally in late innings.

The counter-trap embedded in the Bellman policy is to exploit the fact that overturn rate is a misleading metric. Observed decisions achieve a 54.7% overturn rate but recover only 0.452 runs/game; the policy deliberately accepts a lower 43.8% overturn rate by issuing more challenges (6.14 vs. 4.59 per game) and targeting high-gain, lower-certainty calls, p. 10. The canonical Marte vs. Lowe contrast on pp. 2 and 11–12 shows the logic: Marte’s called third strike with two outs and runners on first and second offers G = 0.782 runs, requiring only q > 10.3% to justify a challenge; Lowe’s first-pitch strike with bases empty offers G = 0.032 runs, requiring q > 72.6%. The policy challenges Marte in 95.2% of modeled impressions and Lowe in only 0.8%, inverting the naive heuristic that successful challenges imply good decisions.

The clock layer is the dynamic scarcity of challenges and innings. With k = 2 remaining, losing a challenge costs L_2(z); with k = 1, losing the last challenge costs L_1(z), generally larger because fewer future opportunities remain, Eq. (7) and Figure 2, p. 10. As the game progresses toward the ninth, fewer called pitches remain, so both L_k(z) and the break-even probability q* fall, permitting challenges with less certainty. Extra innings introduce a non-Markovian reset: entering an extra inning with zero challenges restores one via g(0,1) = 1, pp. 4 and 8, creating an option value to survive regulation with an exhausted budget. This makes the value function path-dependent on the inning clock even when z is otherwise identical.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer vetoes: pitch location enters through Statcast and the MLB live feed, matched by game, plate appearance, and pitch number, p. 4. The strike zone is reconstructed as a 17-inch-wide rectangle with vertical limits rounded to three decimal places in feet before conversion to inches, p. 16. The signed distance D, Eq. (A.1), subtracts a fixed 1.45-inch ball radius; a called ball at M = 0 is correctable because contact with the boundary counts as a strike, pp. 4 and 17. Public tracking error is acknowledged: “our classifications remain subject to error in the publicly available tracking data,” p. 4. If the effective tracking error exceeds the 0.01-inch margin bin width used in the prior, Eq. (3) and p. 17, correctable/non-correctable classification flips near the boundary and q_rc(s) is injected with measurement bias.

Biomechanical layer vetoes: the sensory standard deviations σ_s,o = 2.900 inches and σ_s,d = 1.823 inches, p. 7, are population averages within role. Individual differences in pitch-location perception, or private information such as catcher-target signals, are not modeled and “could change its recommendations,” p. 13. The Gaussian error assumption and common scale within role are strong restrictions; if location uncertainty is heteroskedastic by count, pitch family, or handedness matchup, the posterior in Eq. (5) is miscalibrated for those subgroups.

Weather layer: weather is not a covariate in the calibration probit Eq. (A.3), nor in the run-expectancy estimation, and no temperature, humidity, or wind terms appear anywhere in the text. Because the model treats the pitch-location prior as conditionally dependent only on call and count, p. 6, any weather-induced shift in pitch movement or umpire strike-zone width is unmodeled and would veto the posterior q in affected games.

Veto adjudication: the model is vetoed if (i) tracking error σ_track > 0.01 inches such that margin-bin membership is unreliable; (ii) σ_s,r is not the dominant error component and κ_r is fixed at 1 without re-optimizing cutoffs, biasing Eq. (5); (iii) extra-innings restoration rules change, invalidating g(k,e) in Eq. (10); or (iv) the assumption that z alone determines future opportunities fails because a current overturn materially changes the subsequent state distribution, pp. 8 and 13.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Counterfactual sequence divergence (recorded-sequence veto).
Setup: Simulate games under the Bellman policy with a full counterfactual pitch generator: whenever a challenge succeeds and overturns a called strike three or ball four, regenerate the subsequent plate appearance, count, outs, and baserunner state rather than freezing the recorded sequence.
Verifiable prediction: The true per-game correction value will fall strictly below 0.536 runs/game. Because the policy attempts 6.14 challenges per game versus 4.59 observed (p. 10), it generates more overturns and hence more sequence divergence; each successful early-inning overturn changes the batter-pitcher matchup for the remainder of the inning. The policy’s partial-equilibrium gain of 0.084 runs/game over observed decisions will attenuate, potentially to near zero, once live-ball consequences are internalized.
Falsifiable statistic: In counterfactual simulation, the correlation between number of successful overturns and divergence from recorded run expectancy will be negative and statistically significant.

Scenario 2 — Error-variance misallocation without cutoff re-optimization.
Setup: Fix the policy cutoffs t derived under the primary κ_o = κ_d = 1 assumption (all error sensory). Suppose the true data-generating process has κ_o = 0.4 (only 16% of variance sensory; rest action error) but the analyst does not re-optimize t.
Verifiable prediction: Although Eq. (11) claims value invariance under re-optimization, holding t fixed breaks the equivalence because q_rc(s; σ_s,r) enters the break-even test nonlinearly through Eq. (5) while the action noise shifts the challenge trigger. The expected net benefit E[max{0, qG − (1−q)L}] will decline by at least the width of the reported bootstrap interval [0.065, 0.103], rendering the gain statistically indistinguishable from zero.
Falsifiable statistic: On the 983 test games, applying κ = 1 cutoffs to impressions generated under κ = 0.4 yields a modeled recovery below 0.50 runs/game and a gain interval overlapping zero.

Scenario 3 — Extra-innings exhaustion and state-dependence violation.
Setup: Consider games extending past 12 innings where a team exhausts both challenges in regulation and enters extra innings with zero. The model assumes restoration g(0,1) = 1 and that the distribution of future opportunities depends only on z, not on whether the current challenge was used, p. 8.
Verifiable prediction: In games lasting ≥ 13 innings, the policy will underperform observed decisions because it over-preserves challenges in late regulation anticipating an extra-innings reset that may not yield high-value correctable calls; alternatively, if the restoration rule is not applied in a given league configuration, C_k(z) overstates future value and the policy challenges too rarely in the 9th and extras.
Falsifiable statistic: Stratified by innings > 12, the policy’s per-game gain will be negative relative to observed decisions, violating the global +0.084 runs/game average.
</RLVR_COUNTERFACTUAL_VETOES>