---
source: "2026 - Identifying the determinants of soccer coach turnover by competing risks models a case study on Italian League Serie A - Porro et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 36
model: baidu/ernie-5.5-flash-preview:free
words: 8329
---

<NATIVE_REASONING>
The user wants me to analyze this academic paper on soccer coach turnover using competing risks models, following the specific XML section structure they've defined. Let me understand the framework they want.

This is a research analysis task. The paper is Porro et al. (2026) on "Identifying the determinants of soccer coach turnover by competing risks models: a case study on Italian League Serie A" from Journal of Big Data.

The instructions from the system/persona define:
- ZERO BETTING LINES (no spreads, totals, moneylines, odds)
- ZERO TOY EQUATIONS (formal LaTeX, units, page citations, verbatim quotes)
- >= 1,000-word depth across specific XML sections:
  - <THINK_TRACE> (deep multi-hop derivation & gray-zone audit, >=400 words)
  - <SOURCE_OPERATORS_AND_EQUATIONS> (formal LaTeX, units, page citations, breakdown)
  - <RETROCAUSAL_GENEALOGY> (historical/scientific lineage & multi-week traps)
  - <RECURSIVE_THEORY_OF_MIND> (crisis habit regression vs counter-trap vs clock)
  - <CROSS_LAYER_VETO_ADJUDICATION> (physical/biomechanical/weather veto proof)
  - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

So this is a structured analytical framework for analyzing the research paper. Let me be careful here. The framing uses sports-analytics terminology but the actual content is about a statistical/methodological paper on survival analysis (competing risks models) applied to soccer coach turnover.

The task is legitimate — analyzing a published academic paper. There's nothing about actual betting (indeed the invariant explicitly forbids betting lines). This is really about deep technical analysis of the statistical methodology.

Let me think about what each section should contain:

1. THINK_TRACE: Deep multi-hop reasoning about the paper's methodology, findings, gray-zone audit. This should walk through the causal/estimation logic, the competing risks framework, variable selection, potential pitfalls.

2. SOURCE_OPERATORS_AND_EQUATIONS: The formal equations from the paper with LaTeX, page citations, verbatim quotes. The paper has:
   - Cause-specific hazard function (Eq 1) [PAGE 8]
   - Subdistribution hazard function (Eq 2) [PAGE 9]
   - Conditional cause-specific hazard (Eq 3) [PAGE 9]
   - Cause-specific Cox regression (Eq 4) [PAGE 10]
   - CIF (Eq 5) [PAGE 12]
   - LASSO penalized partial likelihood [PAGE 11]

3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage — Cox 1972, Fine-Gray 1999, Prentice et al 1978, Breiman 2001, Tibshirani 1996, Ishwaran random survival forests, Kahn 2000 sports as labor market lab, etc. Multi-week traps = methodological traps.

4. RECURSIVE_THEORY_OF_MIND: Modeling the decision-makers (club boards) — crisis habit regression vs counter-trap vs clock. This is about how clubs decide to fire coaches, the behavioral modeling.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto — this is interesting because the paper doesn't really involve biomechanics or weather. But soccer matches do have physical/weather dimensions. I need to be careful here — the invariant says "physical/biomechanical/weather veto proof." I should note where these physical layers are simply not part of the model's covariate space (the paper explicitly excludes match-level dynamics and uses time-invariant covariates). This is a "veto" in the sense of checking whether lower physical layers could overturn the statistical findings.

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning with Verifiable Rewards) veto scenarios + predictions. These would be falsifiable predictions/counterfactuals that could veto the paper's conclusions.

I need to be rigorous, cite exact pages and verbatim quotes. Let me gather the key quotes and equations.

Key equations:

Eq (1) cause-specific hazard [PAGE 8]:
$$\lambda^{cs}_k(t) = \lim_{\Delta t \to 0} \frac{P(t < T \le t + \Delta t, D = k \mid T > t)}{\Delta t}, \quad k = 1, \dots, K$$

Eq (2) subdistribution hazard [PAGE 9]:
$$\lambda^{sd}_k(t) = \lim_{\Delta t \to 0} \frac{P(t < T \le t + \Delta t, D = k \mid T > t \cup (T \le t, D \ne k))}{\Delta t}$$

Eq (3) conditional cause-specific hazard [PAGE 9]:
$$\lambda^{cs}_k(t \mid Z_k(t)) = \lim_{\Delta t \to 0} \frac{P(T \le t + \Delta t, D = k \mid T > t, Z_k(t))}{\Delta t}$$

Eq (4) cause-specific Cox [PAGE 10]:
$$\lambda^{cs}_k(t \mid Z_k(t)) = \lambda_{k,0}(t) \exp\{Z_k^\top(t) \beta_k\}$$

Eq (5) CIF [PAGE 12]:
$$F_k(t) = P(T \le t, D = k) = \int_0^t S(u) \lambda^{cs}_k(u) \, du$$
where $S(u) = \exp\left(-\sum_{j=1}^K \int_0^u \lambda^{cs}_j(s) ds\right)$

LASSO [PAGE 11]:
$$\hat{\beta}_k = \arg\max_{\beta_k} \left[ \log(PL(\beta_k)) - \lambda \sum_{j=1}^p |\beta_{kj}| \right]$$

Key data facts:
- Serie A 2010/11–2019/20 [PAGE 3]
- 103 head coaches, 34 teams [PAGE 13]
- 337 coach-team spells with observed turnover... wait, [PAGE 8] says "we observe 337 coach–team spells with an observed turnover event" — but later [PAGE 15] says "resulting in 203 managerial replacements." Let me reconcile. Page 8: "Over the seasons from 2010/11 to 2019/20, we observe 337 coach–team spells with an observed turnover event, while spells without turnover by the end of the season are treated as right-censored observations." Hmm, that seems like an inconsistency. Actually 337 might be total spells, and 203 is managerial replacements. Let me note this as a gray-zone discrepancy. Actually Table 4 [PAGE 19] shows: End of contract 31, Mutual consent 36, Resignation 15, Sacking 121, All 203. So 31+36+15+121 = 203. So the 337 figure on page 8 seems inconsistent with the 203 breakdown. This is a good gray-zone catch.

Wait, let me re-read page 8: "Over the seasons from 2010/11 to 2019/20, we observe 337 coach–team spells with an observed turnover event". Hmm. Actually, maybe 337 is total spells (including censored). But it says "with an observed turnover event." Then 203 replacements. This is a genuine internal inconsistency worth flagging. Actually, re-reading: perhaps 337 is the total number of spells and 203 is turnover events, with the remainder censored. The wording "337 coach-team spells with an observed turnover event" is ambiguous/contradictory. Let me flag it.

Table 4 descriptive stats of survival time in days:
- End of contract: n=31, mean 123.68, SD 105.91, median 101
- Mutual consent: n=36, mean 214.06, SD 117.36, median 207
- Resignation: n=15, mean 178.93, SD 122.79, median 159
- Sacking: n=121, mean 144.27, SD 80.88, median 130
- All: n=203, mean 212.80, SD 121.29, median 196

Interesting: the "All" mean (212.80) and median (196) are HIGHER than most individual categories. That's statistically odd — the pooled mean/median exceeds the subgroup means/medians. Actually this is a gray-zone catch too. The "All" row should include censored observations (survived to end of season ~ up to ~300+ days), which would pull the mean up. So "All" likely includes censored spells, while the individual rows are only observed events. That explains why All > individual categories. Good catch for the gray-zone audit.

Key findings:
- End of contract: positive assoc with ES, P&C, Rel, PPP.TMT [PAGE 25]; negative with LM.TMS, PPP.TMS
- Mutual consent: DS, ES, HLM.TMC, PPP.TMC positive; Age.p negative; HGM.TMT negative [PAGE 25]
- Resignation: ES positive; Age.p, NM.TMT, NM.TMS, PPP.TMS negative [PAGE 25]
- Sacking: DS positive; FSR, PPP.TMT, NM.TMS, PPP.TMS negative; LM.TMC positive [PAGE 27]

Abstract claims: "a higher proportion of losses over a coach's tenure raises the hazard of sacking by more than four times" [PAGE 1]. This corresponds to LM.TMC est = 4.14 in Table 7 [PAGE 26], exp(4.14) ≈ 62.8. Wait, that's way more than 4x. Hmm. Actually the "more than four times" — let me check. Actually the coefficient 4.14 is a log-hazard. exp(4.14) ≈ 62.8. But the abstract says "more than four times." Hmm. Actually maybe they mean the coefficient magnitude. Let me reconsider. Actually wait — the est. column in Table 7 might already be hazard ratios or coefficients? Let me look. Table 7 shows "est." and "s.e." and "c.i.(95%)". For DS in mutual consent: est 3.78, s.e. 0.84, CI [2.13; 5.43]. If est is a coefficient (log HR), then s.e. 0.84 and CI would be 3.78 ± 1.96*0.84 = 3.78 ± 1.65 = [2.13, 5.43]. Yes! So est is the log-coefficient (β), and CI is on the coefficient scale. So exp(4.14) for LM.TMC = 62.8. That's not "four times."

Hmm, so where does "more than four times" come from? Let me reconsider. Maybe the abstract refers to a different parameterization, or maybe it's a loose statement. Actually, wait — maybe I should reconsider whether "est." is the coefficient or hazard ratio. The CI [2.13; 5.43] around 3.78 with SE 0.84: 3.78 ± 1.96(0.84) = [2.13, 5.43]. This confirms est = β (coefficient). So the hazard ratio = exp(β). For LM.TMC β=4.14 → HR ≈ 62.8. For a proportion variable (0 to 1), a one-unit increase (0 to 1, i.e., from 0% losses to 100% losses) multiplies hazard by 62.8. That's the "over the entire support" caveat on page 21-22. So "more than four times" in the abstract seems inconsistent with 62.8x... unless they're describing something else. Actually, maybe the abstract's "more than four times" is a simplification/understatement, or refers to the coefficient 4.14 (misreading coefficient as multiplier). This is a gray-zone issue worth noting — the abstract's "more than four times" vs the coefficient 4.14 which exponentiates to ~63.

Actually, hold on. Let me reconsider. The paper says on page 21: "a hazard ratio of 1.20 indicates that a one-unit increase in the covariate raises the instantaneous probability of turnover by approximately 20%." And page 21-22: "several covariates are defined as proportions or bounded performance measures. Consequently, the reported hazard ratios correspond to a one-unit increase over the entire support of the variable, which represents an extreme and rarely observed change in practice."

So for LM.TMC (proportion of losses, 0 to 1), HR = exp(4.14) ≈ 62.8. The abstract statement "raises the hazard of sacking by more than four times" — 4.14 is the coefficient. If they're loosely saying "the coefficient is 4.14" and calling it "more than four times," that conflates the log-scale coefficient with a multiplicative factor. This is an important technical nuance / potential error in the abstract's popular summary. Good gray-zone catch.

Actually, let me reconsider once more. Maybe "est." in Table 7 and 8 is actually reporting the hazard ratio (exp(β)) not β. Let me test with another: PPP.TMS for end of contract in Table 7: est −11.65. exp(−11.65) ≈ 8.7e-6, essentially zero. HR of ~0. That would be a hazard ratio essentially eliminating end-of-contract risk. As a coefficient −11.65, that's a large negative effect. With SE 2.59, CI [−16.74; −6.57]. −11.65 ± 1.96(2.59) = −11.65 ± 5.08 = [−16.73; −6.57]. Yes, matches. So est = β (coefficient on log-hazard scale). Confirmed.

So these coefficients are on the log scale and quite large because the covariates are proportions bounded in [0,1], and there's event concentration. The paper acknowledges this on page 29: "The presence of large hazard ratios for some covariates is primarily driven by variable scaling and event concentration rather than by model misspecification, as confirmed by low multicollinearity diagnostics and stable estimates across alternative specifications."

OK so the "more than four times" in the abstract is a loose/arguably incorrect popularization of the 4.14 coefficient. Good to flag.

Now, the C-index values [PAGE 30]: End of contract 0.98 (0.006), Mutual consent 0.84 (0.039), Resignation 0.86 (0.039), Sacking 0.94 (0.090). These are very high, especially 0.98 and 0.94. Such high C-indices in observational social-science data with ~200 events and many covariates raise overfitting concerns, despite the paper's claims. The sacking C-index SE of 0.090 is notably wide. This is a gray-zone issue: C-index near 0.98 is suspiciously high and may reflect in-sample evaluation (apparent error) rather than out-of-sample. The paper mentions OOB C-index for RSF but the Table 9 C-index for the Cox models may be apparent (in-sample). Worth flagging.

VIFs [PAGE 30]: all below 5, max 4.23 (ES for mutual consent), 4.07 (DS for mutual consent). Fine.

Let me also note the sign change of PPP.TMT: In Table 7 (group-specific) sacking, PPP.TMT est = −2.51 (protective). In Table 8 (full model) sacking, PPP.TMT est = +1.61 (positive, i.e., risk-increasing). The paper addresses this on page 31: "some coefficients (such as the short-term performance indicator PPP.TMT) exhibit sign changes when moving from group-specific specifications to the full model. These patterns should not be interpreted as contradictory evidence, but rather as conditional effects arising from the simultaneous inclusion of multiple performance dimensions. Once cumulative and season-level performance measures are controlled for, short-term indicators capture deviations from an established performance trajectory."

This sign reversal is a classic Simpson's-paradox-like / multicollinearity-driven conditional effect. It's a critical gray-zone issue: the direction of the "headline" short-term performance effect on sacking flips depending on specification. This undermines simple "points per match protects against sacking" narratives. Worth deep analysis.

Also note NM.TMT: Table 7 resignation est −6.11, Table 8 −2.28 (not significant). And there's a huge SE (3.10, 4.33) — these are extremely imprecise. NM.TMT and NM.TMS have enormous coefficients and SEs, suggesting near-separation / sparse events (resignation only n=15). This is a small-sample instability for the resignation cause. Good gray-zone catch: resignation n=15 is very small for a Cox model with many covariates → separation/instability, huge coefficients and SEs.

Also mutual consent HLM.TMC est 10.35 in Table 7 (SE 1.64) → exp(10.35) ≈ 31,000. Astronomically large. In full model (Table 8) it drops to 2.56 (not significant, SE 2.28). Again, evidence of instability/separation in group-specific models. These extreme coefficients (exp(10.35) ≈ 3.1e4) are red flags for quasi-complete separation.

Great, these are strong quantitative gray-zone catches.

Now let me also think about the "resignation" being forward-looking and Age.p etc.

Let me also reconcile the count discrepancy more carefully:
- Page 8: "we observe 337 coach–team spells with an observed turnover event" — but that can't be right if there are only 203 turnovers (Table 4). Unless 337 = total spells (turnover + censored). The sentence explicitly says "with an observed turnover event" though, which contradicts. Actually maybe it's a typo and should be "337 coach-team spells" total. Then "spells without turnover ... are treated as right-censored." So 337 total, 203 observed turnovers, 134 censored. That reconciles. But the literal wording "337 ... with an observed turnover event" is wrong/ambiguous. Flag it.

Actually, re-reading: "Over the seasons from 2010/11 to 2019/20, we observe 337 coach–team spells with an observed turnover event, while spells without turnover by the end of the season are treated as right-censored observations." 

Hmm, it could be parsed as "we observe 337 coach-team spells, with an observed turnover event [for some], while spells without turnover ... are right-censored." But grammatically it says 337 have observed turnover. Contradiction with 203. Definitely a gray-zone flag.

Also, 103 coaches, 34 teams, 10 seasons. 34 teams × 10 seasons = 340 team-seasons. 337 spells ≈ close to 340. So 337 is likely the number of coach-team spells (team-seasons with a starting coach), and 203 of those had a turnover (including mid-season replacements creating additional spells). Actually if there are mid-season replacements, the number of spells could exceed 340. Hmm. Anyway, the point stands: 337 vs 203 needs reconciliation, and the wording is imprecise.

Now for the sections. Let me be thorough and hit >1000 words total, with THINK_TRACE >=400 words.

Let me think about RETROCAUSAL_GENEALOGY — the scientific lineage:
- Cox (1972) [ref 55] proportional hazards
- Prentice, Kalbfleisch, Peterson, Flournoy, Farewell, Breslow (1978) [ref 54] cause-specific hazard analysis of failure times in presence of competing risks
- Fine & Gray (1999) [ref 52] subdistribution hazard / proportional hazards for subdistribution
- Putter, Fiocco, Geskus (2007) [ref 45] tutorial competing risks & multi-state
- Crowder (2001) [ref 53] classical competing risks
- Beyersmann et al (2012) [ref 46]
- Tibshirani (1996) [ref 23] LASSO
- Breiman (2001) [ref 24] random forest
- Ishwaran et al (2008, 2010, 2014) [refs 26, 20, 25] random survival forests, competing risks RSF
- Kahn (2000) [ref 2] sports business as labor market laboratory
- Mobley (1977) [ref 8], Allen et al (2010) [ref 9] turnover theory voluntary/involuntary
- CEO literature: Warner Watts Wruck (1988) [ref 30], Jensen & Murphy (1990) [ref 31], Kaplan & Minton (2012) [ref 32]
- Sports-specific: van Ours & van Tuijl (2016) [ref 7], d'Addona & Kind (2014) [ref 15], Bryson et al (2021) [ref 4], de Paola & Scoppa (2012) [ref 18], Tena & Forrest (2007) [ref 13], Frick et al (2010) [ref 14], etc.

"Multi-week traps" — I interpret this as methodological traps that recur over research weeks/iterations: e.g., treating competing risks as independent censoring (Kaplan-Meier overestimation), Fine-Gray vs cause-specific confusion, the collapsibility trap, separation in small-event causes, etc.

RECURSIVE_THEORY_OF_MIND — modeling the club board (principal) as agent:
- The club is a principal evaluating an agent (coach) under agency theory [refs 31, 4]
- "crisis habit regression" — clubs habitually revert to sacking under short-term crisis (DS effect, sacking coefficient 2.97 in full model → exp(2.97)≈19.5x during season)
- "counter-trap" — recognizing that sacking doesn't improve performance (van Ours & van Tuijl [ref 7]: "replacing a coach does not necessarily improve subsequent team performance")
- "clock" — season timing decision windows (DS, ES, FSR); the institutional clock
- Recursive modeling: the coach anticipates the board, the board anticipates the coach's career concerns (resignation as forward-looking [page 25])

CROSS_LAYER_VETO_ADJUDICATION — physical/biomechanical/weather veto:
The paper explicitly excludes match-level and physical dynamics. Page 9-10: "all covariates included in the competing risks models are treated as time-independent Zk. This choice reflects the structure of the available data and the analysis's focus on coach–team spells rather than on match-level dynamics." So the "physical layer" (player fitness, biomechanics, injuries, weather, travel, fixture congestion) is aggregated away into season/spell-level performance ratios. A veto proof: could a physical/biomechanical/weather shock (e.g., injury crisis, extreme fixture congestion, adverse weather) overturn the statistical attribution of turnover to "performance"? The paper's design cannot distinguish "coach caused poor performance" from "physical/weather shock caused poor performance that the coach was blamed for." This is a confounding/omitted-variable veto at the physical layer. The aggravation: market value (Tval, Mval) is a proxy for squad quality but not for injuries/weather. So there's an unmodeled physical layer. But — and here's the veto adjudication — the paper's causal claims are about association of measured performance ratios with hazard, not about physical causation, so the physical layer doesn't strictly "veto" the internal validity of the hazard estimates; it vetoes the managerial attribution ("coach quality") interpretation. I'll formalize this.

RLVR_COUNTERFACTUAL_VETOES — 3 verifiable veto scenarios + predictions:
These should be falsifiable predictions/counterfactual tests that could veto the paper's conclusions. Let me construct 3:

1. Sign-reversal instability veto: If we bootstrap the full-model cause-specific Cox for sacking and PPP.TMT, the sign should be unstable across resamples (given it flipped from −2.51 group-specific to +1.61 full). Prediction: bootstrap CI for PPP.TMT in full sacking model will straddle zero frequently / sign will flip in a substantial fraction of resamples. If it's stable, the paper's "conditional effect" interpretation holds; if unstable, the headline is an artifact. Verifiable via reconstructable data.

2. Separation/small-event veto for resignation (n=15): The extreme coefficients (NM.TMT −6.11, SE 3.10; NM.TMS −6.75 SE 3.95) are signatures of quasi-complete separation. Prediction: penalized (Firth) Cox or checking the fitted linear predictor will reveal separation; the unpenalized MLE diverges. If Firth correction dramatically changes estimates, the resignation results are not trustworthy. Verifiable.

3. C-index overfit veto: The reported C-index of 0.98 (end of contract) is likely apparent (in-sample). Prediction: leave-one-season-out cross-validated C-index will be materially lower (e.g., < 0.7) because with n=31 events and many covariates the model overfits. If out-of-sample C-index collapses, the "strong discriminatory ability" claim is vetoed. Verifiable via CV.

Also I could add: temporal external validity veto — apply 2020-2025 Serie A data (post-COVID, different market values); prediction: performance coefficients attenuate because of regime change (COVID, salary caps, etc.).

I should make these crisp and verifiable (predictions with thresholds).

Now, one more nuance for SOURCE_OPERATORS_AND_EQUATIONS: units. Time is in days. Hazards have units of 1/day. Coefficients β are dimensionless (log-hazard per unit covariate); for proportion covariates the unit is "per unit proportion (0→1)". exp(β) is dimensionless hazard ratio. C-index dimensionless [0,1]. VIF dimensionless. Market values in euros. I'll state units carefully.

Breakdown/singularity regimes:
- Eq (1) breaks down if the limit doesn't exist (non-differentiable CIF); requires absolutely continuous T.
- Cause-specific Cox assumes proportional hazards: λk,0(t) factors out; if PH violated (time-varying effects), exp(β) is not constant → the "during season" vs "second half" effects (DS, FSR) are themselves evidence of non-PH / time-dependence, which is a tension because they use time-invariant covariates but include season-timing dummies that proxy time. Actually DS/ES/FSR are calendar-timing dummies, not time-varying coefficients. But the fact that sacking hazard is higher DS and lower FSR means the baseline hazard λ4,0(t) is non-monotonic in t, which is fine for Cox (baseline is unspecified), but it also means the PH assumption for other covariates could be suspect if their effects also vary with t.
- Non-informative censoring assumption (page 8): T ⊥ C | Z. If a coach is censored at season's end because they survived, and survival is related to unmeasured quality, censoring could be informative → bias. Actually end-of-season censoring is administrative (deterministic calendar), so likely non-informative. But "end of contract" is treated as an event, not censoring (page 15), which is correct.
- CIF Eq (5) requires the sum over all K causes in S(u); if a cause is omitted, S(u) is misspecified.
- LASSO: λ selection via CV; at λ→∞ all coefficients zero (null model); at λ=0 unpenalized (may not be unique if p>n or collinear). Singularity: if two covariates are identical (e.g., DS + ES + BFM + FSR collinearity since they're season-timing dummies that may sum to constraints), the design matrix is singular → LASSO picks one arbitrarily. Note the season dummies (DS, ES, BFM, FSR) are likely collinear (they partition season timing) → VIF for DS/ES in mutual consent ~4.07/4.23, near threshold. This is a real singularity/collinearity concern.

Let me verify the season-timing dummy collinearity: Group 1 has DS (during season), ES (end of season), BFM (before first match), FSR (first/second half of season). DS and ES might be complementary (during vs end). BFM is before first match (pre-season appointments). FSR is second half. These overlap conceptually — a "during season" replacement in the second half would be DS=1 and FSR=1. So they're not a clean partition; there's structural collinearity. VIF ~4 for DS/ES in mutual consent confirms moderate collinearity. Good.

Let me now also double check the abstract "more than four times" claim mapping. Abstract page 1: "a higher proportion of losses over a coach's tenure raises the hazard of sacking by more than four times." "over a coach's tenure" = cumulative = group 5 = LM.TMC. Table 7 sacking LM.TMC est 4.14 (****). So they're reading the coefficient 4.14 as "more than four times." But exp(4.14) = 62.8, and even a "typical" increase isn't 4x. So the abstract conflates the log-coefficient with a multiplier. This is a genuine interpretive imprecision. Actually, maybe they intend: the coefficient 4.14 means... no. exp(4.14)≈63. To get "4x" you'd need β=ln(4)=1.386. So "more than four times" corresponds to β>1.386, and 4.14 >> 1.386, so "more than four times" is technically true but a gross understatement (it's actually ~63x over full support). So the abstract statement is not false ("more than four times" is satisfied by 63x) but it's oddly conservative/imprecise. Hmm, actually "more than four times" is literally true if the true effect is 63x. But it reads as if ~4x. I'll note this as a communication gray-zone: the abstract understates (or miscommunicates) the magnitude; the point estimate implies ~63x over the full [0,1] support, though for realistic within-range changes the effect is far smaller (page 25 caveat).

Actually, I realize I should double-check: is 4.14 perhaps already the hazard ratio in some rows? No — I confirmed via SE/CI arithmetic that est is the coefficient. exp(4.14)≈62.8. So the abstract's "more than four times" is a substantial understatement of the model coefficient's implied full-support hazard ratio, OR the abstract is loosely reporting the coefficient value (4.14 ≈ "more than four"). Either way it's imprecise. I'll frame it carefully and not overclaim it's an "error."

Let me reconsider — maybe the abstract means something defensible. "A higher proportion of losses ... raises the hazard of sacking by more than four times." If we interpret "a higher proportion" as a meaningful increase (say from median to some higher value), the multiplicative effect could be more than 4x. But the specific "4" strongly echoes the 4.14 coefficient. I'll note the ambiguity and give the precise exp() value.

Now let me write. I need to be careful about:
- No betting lines (comply)
- No toy equations (use real ones)
- Formal LaTeX, units, page citations, verbatim quotes
- >= 1000 words total
- The 6 XML sections

Let me make sure I include verbatim quotes with [PAGE N] markers.

Verbatim quotes I'll use:
- [PAGE 8]: "the cause-specific hazard function for event type k [54] is defined as" and the definition of T = min(T̃, C), δ = I(T̃ ≤ C)
- [PAGE 8]: "We assume non-informative right-censoring, that is, T̃ and C are independent conditional on the observed covariates."
- [PAGE 8]: "we observe 337 coach–team spells with an observed turnover event"
- [PAGE 9]: "all covariates included in the competing risks models are treated as time-independent Zk"
- [PAGE 10]: "λcs k (t | Zk(t)) = λk,0(t) exp{Z⊤ k (t)βk}"
- [PAGE 11]: LASSO "ˆβk = argmax βk [ log(PL(βk)) − λ Σp j=1 |βkj| ]"
- [PAGE 12]: CIF "Fk(t) = P(T ≤t, D = k) = ∫ t 0 S(u) λcs k (u) du"
- [PAGE 21]: "a hazard ratio of 1.20 indicates that a one-unit increase in the covariate raises the instantaneous probability of turnover by approximately 20%, conditional on survival up to time t"
- [PAGE 21-22]: "the reported hazard ratios correspond to a one-unit increase over the entire support of the variable, which represents an extreme and rarely observed change in practice"
- [PAGE 29]: "The presence of large hazard ratios for some covariates is primarily driven by variable scaling and event concentration rather than by model misspecification"
- [PAGE 30]: "the cause-specific Cox models achieve C-index values between 0.84 and 0.98 across exit types, indicating strong discriminatory ability"
- [PAGE 31]: "some coefficients (such as the short-term performance indicator PPP.TMT) exhibit sign changes when moving from group-specific specifications to the full model"
- [PAGE 6]: van Ours & van Tuijl "replacing a coach does not necessarily improve subsequent team performance"
- [PAGE 4]: Bryson et al "the probability of dismissal decreases when a team performs above expectations or when the coach is highly experienced, suggesting a 'protective' effect"

Now let me structure and write. I'll aim for a rigorous, dense analysis. Let me write each section thoroughly.

Let me draft.

Actually, let me reconsider the "RECURSIVE_THEORY_OF_MIND" and "CROSS_LAYER_VETO" and "RLVR" sections — these are unusual framings but I should map them to legitimate analytical content about this statistics paper, not fabricate. The framing is a "reasoning foundry" persona. I'll deliver genuine analytical value: ToM = modeling the strategic actors (club boards, coaches) whose behavior generates the data; veto adjudication = checking whether alternative causal layers overturn conclusions; RLVR counterfactuals = falsifiable tests.

I must not invent fake data or fake citations. All citations are from the paper's own reference list. Good.

Let me write with care and precision. I'll keep the tone analytical.

One more check on numbers:
- exp(2.97) [DS sacking, full model Table 8] = 19.5
- exp(2.99) [DS mutual consent full model] = 19.9
- exp(2.85) [ES end of contract full model] = 17.3
- exp(4.14) [LM.TMC sacking group-specific] = 62.8
- exp(10.35) [HLM.TMC mutual consent group-specific] = 31,273... let me compute: e^10 = 22026, e^0.35=1.419, so ≈ 31,260. Yes ~3.1e4.
- exp(-11.65) [PPP.TMS end of contract] ≈ 8.7e-6
- exp(1.61) [PPP.TMT sacking full model] = 5.0
- exp(-2.51) [PPP.TMT sacking group-specific] = 0.081

Let me verify the DS sacking group-specific: Table 7 sacking DS est 3.87 → exp(3.87)=47.9. Full model 2.97 → 19.5. OK.

Table 8 sacking: DS 2.97, LM.TMC 1.46, PPP.TMT 1.61, NM.TMS −4.19, PPP.TMS −5.69.
- exp(1.46) = 4.31 (LM.TMC sacking full model) → "more than four times"! 

Oh interesting. So in the FULL model (Table 8), LM.TMC for sacking is 1.46, and exp(1.46) = 4.31 ≈ "more than four times." So the abstract's "more than four times" corresponds to the FULL-MODEL LM.TMC sacking coefficient (1.46 → 4.31x), NOT the group-specific 4.14. That reconciles the abstract! Good — I need to correct my earlier reasoning. The abstract's "more than four times" = exp(1.46) = 4.31 from Table 8 (full model). The 4.14 in Table 7 is the group-specific coefficient (which is a different quantity). So the abstract is accurate and maps to Table 8's LM.TMC = 1.46. 

Wait, but is that right? Let me reconsider. The abstract says "a higher proportion of losses over a coach's tenure raises the hazard of sacking by more than four times." Group 5 = over entire career/tenure = LM.TMC. In Table 8 (full model), LM.TMC sacking est = 1.46 (***), CI [0.49; 2.42]. exp(1.46) = 4.31. Yes, "more than four times." And the caveat: this is for a one-unit (0→1 full support) increase in the proportion of losses, an extreme change. So the abstract statement is defensible and maps precisely to Table 8. Good — I should present this correctly, not flag it as an error. This is a good example of careful cross-referencing. Let me present both: group-specific Table 7 gives β=4.14 (a different, group-conditioned estimate) while the full model Table 8 gives β=1.46 → HR≈4.31, which is what the abstract reports. The distinction between Table 7 and Table 8 estimates for the same variable is itself a key methodological point (conditional vs marginal-within-group).

Actually, this is subtle and important. LM.TMC appears in Table 7 sacking as 4.14 (****) and in Table 8 sacking as 1.46 (***). Both are "significant" but differ 3-fold in magnitude because Table 7 includes only group-5 variables (so LM.TMC absorbs variance from omitted correlated performance groups), while Table 8 conditions on all groups. The abstract cites the full-model value. Good — this is a clean illustration of omitted-variable/conditioning effects and I'll feature it.

Let me also double check LM.TMC end of contract — not selected. And mutual consent LM.TMC — not in table. Resignation LM.TMC — not selected (NM.TMT and NM.TMS are, plus Age.p, ES). OK.

Now, the count: 337 vs 203. Let me re-examine. Page 8: "we observe 337 coach–team spells with an observed turnover event, while spells without turnover by the end of the season are treated as right-censored observations." Page 15: "resulting in 203 managerial replacements." Table 4 total n=203 (sum of 31+36+15+121). Table 4 "All" survival stats also n=203. So the modeled dataset has 203 events. The 337 figure: perhaps 337 total spells (events + censored). But the wording "with an observed turnover event" attached to 337 is contradictory. If 337 were total spells and 203 events, then 134 censored. But it literally says 337 "with an observed turnover event." I'll flag this as an internal inconsistency / imprecise reporting. It could be that 337 counts all coach-team spells (team-seasons) and 203 is the subset with turnover, with 134 right-censored — in which case the phrase "with an observed turnover event" is a misstatement. Either way, worth a gray-zone note. Not central to the analysis but a data-integrity flag.

Hmm, actually, wait: could 337 be the number of coach-team spells and the "with an observed turnover event" modifies something else? "we observe 337 coach–team spells with an observed turnover event" — no, it clearly attaches. I'll flag as ambiguity/likely typo.

Also, 103 coaches over 340 team-seasons; 203 replacements means on average ~2 coaches per team-season is too high; actually 203 replacements / 340 team-seasons ≈ 0.6 replacements per team-season, i.e., ~60% of team-seasons saw at least one mid-season or end change, plus multiple-spell seasons. Plausible for Serie A (high turnover). Fine.

Let me also note resignation n=15 is very small — the resignation cause-specific Cox with up to 15 events and the number of selected covariates (DS?, ES, Age.p, NM.TMT, NM.TMS, PPP.TMS) risks overfitting / rule-of-thumb ~10 events per variable (EPV) violation. Table 8 resignation includes: ES, Age.p, NM.TMT, NM.TMS, PPP.TMS → 5 covariates with 15 events → EPV = 3, well below the common EPV≥10 guideline. This is a serious small-sample concern for the resignation estimates. Great gray-zone catch. Similarly end of contract n=31 with covariates (ES, P&C, Rel, PPP.TMC, LM.TMS, PPP.TMS) = 6 → EPV ≈ 5.2, also below 10. Mutual consent n=36 with (DS, ES, Age.p, HGM.TMT, HLM.TMC, PPP.TMC) = 6 → EPV=6. Sacking n=121 with (DS, FSR, LM.TMC, PPP.TMT, NM.TMS, PPP.TMS) = 6 → EPV ≈ 20, OK. So sacking (the headline) is well-powered; the other three causes are EPV-challenged. Excellent, rigorous point.

Let me finalize numbers for EPV:
- End of contract: n=31 events. Table 8 selected covariates: ES, P&C (not sig but selected?), Rel (not sig), PPP.TMC (not sig), LM.TMS, PPP.TMS. Actually Table 8 lists covariates that were "relevant" (selected by all three methods) and reports estimates; some are non-significant. The model includes all relevant covariates. For end of contract the relevant ones per Table 6 (✓ by all three): let me check Table 6/8. Table 8 end of contract rows with estimates: ES (2.85****), P&C (0.26, ns), Rel (0.77, ns), PPP.TMC (0.78, ns), LM.TMS (−16.24****), PPP.TMS (−7.35****). So 6 covariates in the model. EPV = 31/6 ≈ 5.2.
- Mutual consent: n=36. Table 8 rows: DS (2.99****), ES (3.23****), Age.p (−0.04 ns), HGM.TMT (−2.43**), HLM.TMC (2.56 ns), PPP.TMC (1.12***). 6 covariates. EPV=6.
- Resignation: n=15. Table 8 rows: ES (0.67 ns), Age.p (−0.48*), NM.TMT (−2.28 ns), NM.TMS (−4.84****), PPP.TMS (−1.20*). 5 covariates. EPV=3.
- Sacking: n=121. Table 8 rows: DS (2.97****), FSR (−0.06 ns), LM.TMC (1.46***), PPP.TMT (1.61****), NM.TMS (−4.19****), PPP.TMS (−5.69***). 6 covariates. EPV≈20.

Great. So resignation EPV=3 and end-of-contract EPV≈5 are the fragile ones. This strongly supports my RLVR veto #2 (separation in resignation) and adds a general EPV concern.

Also LM.TMS end-of-contract coefficient −16.24 with SE 3.49 → exp(−16.24) ≈ 8.8e-8. This is an absurdly large negative coefficient, classic sign of separation/sparse data (end of contract n=31). Similarly PPP.TMS end-of-contract −7.35 (SE 1.43) → exp ≈ 6.4e-4. And NM.TMS sacking −4.19, PPP.TMS sacking −5.69. These very large magnitudes with the proportion covariates and small event counts scream quasi-separation and scaling sensitivity. The paper's defense (page 29, "variable scaling and event concentration") is partially valid but "event concentration" is essentially acknowledging separation/sparsity. I'll present this as a double-edged acknowledgment.

OK I have plenty of rigorous material. Let me write.

I want to ensure >= 1000 words. I'll write substantial sections. Let me aim ~1600-2000 words.

Let me write the response now. I'll include the section headers exactly as specified.

Format: The persona wants XML sections. I'll use them as literal tags/headers. I'll use LaTeX in code-ish inline with $...$ or display. Since this is plain text output, I'll write LaTeX inline with \( \) or $ $ notation and display equations. Markdown is fine for prose. The instruction says use markdown code blocks for code; LaTeX equations aren't code but I can present them in a readable math notation. I'll use $...$ and $$...$$ style since that's standard for LaTeX. Actually the invariant says "State formal LaTeX equations." I'll write them in LaTeX notation.

Let me be mindful: I shouldn't overuse headers per style, but the task explicitly demands these exact XML sections, so I'll use them.

Let me write.

I'll keep THINK_TRACE >= 400 words. Let me count roughly as I go.

Writing now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's inferential spine is a chain of four modeling commitments, and each link carries a distinct gray-zone failure mode. First, the authors collapse the calendar into a spell clock: time is "measured in days from the beginning of the season" [PAGE 8], and each coach–team spell enters at $t=0$ (season start) with a single absorbing turnover event or administrative right-censoring at season's end. This is a defensible "laboratory" reduction (Kahn [ref 2], cited [PAGE 2]) but it discards the match-level clock entirely — the decision to fire is a step function of accumulated match outcomes, not a continuous diffusion. Second, they partition turnover into $K=4$ mutually exclusive causes $\{1,2,3,4\}$ = {end of contract, mutual consent, resignation, sacking} [PAGE 8], and crucially they refuse to treat end-of-contract as independent censoring: "the actual observation of a contract expiration depends on the coach's surviving the competing risks of being sacked or resigning" [PAGE 15]. This is the single most important design choice, because misclassifying a deterministic calendar event (contract expiry) as either censoring or as a fifth "clean" outcome would bias every cause-specific hazard.

Multi-hop derivation of the core claim. The headline — "a higher proportion of losses over a coach's tenure raises the hazard of sacking by more than four times" [PAGE 1] — must be traced carefully because two different coefficients for the same variable appear in the paper. In the group-5-only specification (Table 7), sacking's `LM.TMC` coefficient is $4.14$ (****), which exponentiates to $\exp(4.14)\approx 62.8$. In the full specification (Table 8), the same covariate's coefficient is $1.46$ (***), and $\exp(1.46)\approx 4.31$ — "more than four times." So the abstract is internally consistent, but only with the *fully conditioned* estimate. The 3-fold shrinkage from $4.14\to1.46$ when groups 1–6 enter jointly is not noise; it is the omitted-variable geometry the paper itself flags: group-specific models let `LM.TMC` absorb variance from correlated short-term and season-long performance blocks. Any reader who cites "$62.8\times$" is quoting a marginal-within-group artifact; any reader who cites "$4.31\times$" is quoting the conditional effect. Both are "in the paper." This is the central gray zone.

Gray-zone audit, part 2 — event counts vs parameters. Table 4 gives event totals: end of contract 31, mutual consent 36, resignation 15, sacking 121, total 203. Table 8 fits roughly 5–6 covariates per cause. Events-per-variable (EPV) is therefore $\approx 5.2$ (end of contract), $6$ (mutual consent), $3$ (resignation), and $\approx 20$ (sacking). Only the sacking model — the one carrying the headline — is comfortably powered. The resignation model, at EPV $=3$, produces coefficients like `NM.TMT` $=-6.11$ (s.e. $3.10$) and `NM.TMS` $=-6.75$ (s.e. $3.95$); end-of-contract produces `LM.TMS` $=-11.65$ ($\exp\approx 8.8\times10^{-8}$) and `PPP.TMS` $=-16.24$ ($\exp\approx 8.8\times10^{-8}$) in the full model. Coefficients of magnitude $10$–$16$ on $[0,1]$-bounded covariates are the textbook fingerprint of quasi-complete separation, not "strong effects." The authors' defense — "large hazard ratios … are primarily driven by variable scaling and event concentration rather than by model misspecification" [PAGE 29] — is half-right: scaling explains part, but "event concentration" *is* sparse-data separation, which is a specification problem, not merely a cosmetic one.

Gray-zone audit, part 3 — the sign flip. `PPP.TMT` (points per match until turnover) is $-2.51$ for sacking in Table 7 (protective) but $+1.61$ in Table 8 (risk-increasing). The paper interprets this as a conditional "deviation from trajectory" effect [PAGE 31]. That interpretation is *possible* but not identified by this design: with time-invariant, contemporaneously-aggregated covariates and moderate collinearity (`PPP.TMT` VIF $=2.48$), a sign reversal across specifications is equally consistent with unstable estimation. The honest statement is that the sign of the marquee short-term-performance coefficient is not robust, which weakens the clean "clubs react to recent shocks" narrative for sacking even though the DS/season-timing effect is robust.

Finally, a data-integrity flag: [PAGE 8] states "we observe 337 coach–team spells with an observed turnover event," yet Table 4 sums to 203 events. The most charitable reconciliation is that 337 is total spells (≈340 team-seasons from 34 teams × 10 seasons) and 203 is the turnover subset, with the sentence's phrasing being imprecise. This does not change the modeling but should be resolved before any replication.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Notation and units. Time $t$ is in days; hazards $\lambda$ have units $\text{day}^{-1}$; coefficients $\beta_{kj}$ are dimensionless log-hazards per one-unit change in covariate $Z_j$ (for proportion covariates, "one unit" $=$ the full $[0,1]$ support); $\exp(\beta_{kj})$ is a dimensionless cause-specific hazard ratio; C-index and VIF are dimensionless.

Observed-data map [PAGE 8], verbatim: "The observed time is defined as $T = \min(\tilde{T}, C)$, and the censoring indicator is given by $\delta = I(\tilde{T} \le C)$," under the assumption "non-informative right-censoring, that is, $\tilde{T}$ and $C$ are independent conditional on the observed covariates."

Cause-specific hazard (Eq. 1, [PAGE 8]):
$$\lambda^{cs}_k(t)=\lim_{\Delta t\to 0}\frac{P(t<T\le t+\Delta t,\,D=k\mid T>t)}{\Delta t},\quad k=1,\dots,K.$$
Breakdown regime: the limit exists only if $T$ is absolutely continuous; risk set $R(t)=\{i:T_i>t\}$ shrinks on *every* event of *any* cause.

Subdistribution hazard (Eq. 2, [PAGE 9]) retains subjects who already failed from competing causes: conditioning set $\{T>t\}\cup\{T\le t, D\ne k\}$. The paper deliberately does not use it, "focus[ed] exclusively on the cause-specific hazard function" [PAGE 9] — correct, since each spell has at most one exit.

Cause-specific Cox (Eq. 4, [PAGE 10]):
$$\lambda^{cs}_k\!\big(t\mid Z_k(t)\big)=\lambda_{k,0}(t)\,\exp\{Z_k^{\top}(t)\beta_k\}.$$
Assumption/singularity: proportional hazards — if $\beta_k(t)$ varies with $t$, $\exp(\beta_{kj})$ is not a constant multiplier. Note the tension: `DS`, `ES`, `FSR` are calendar-timing dummies encoding *when* in the season exit occurs, i.e., they proxy non-monotonicity of the baseline $\lambda_{k,0}(t)$; that is admissible (baseline is left unspecified) but means other covariates' PH should be tested, not assumed.

LASSO (penalized partial likelihood, [PAGE 11]):
$$\hat{\beta}_k=\arg\max_{\beta_k}\Big[\log\big(PL(\beta_k)\big)-\lambda\sum_{j=1}^{p}|\beta_{kj}|\Big].$$
Singularity regimes: $\lambda=0\Rightarrow$ unpenalized Cox (non-unique if collinear / $p$ large relative to events); $\lambda\to\infty\Rightarrow\hat\beta_k=0$ (null). With the season-timing dummies structurally overlapping (`DS`/`ES` VIF $=4.07/4.23$ in mutual consent, [PAGE 30]), the $\ell_1$ solution selects representatives arbitrarily.

Cumulative incidence (Eq. 5, [PAGE 12]):
$$F_k(t)=P(T\le t,\,D=k)=\int_0^t S(u)\,\lambda^{cs}_k(u)\,du,\quad S(u)=\exp\!\Big(-\sum_{j=1}^{K}\int_0^u \lambda^{cs}_j(s)\,ds\Big).$$
Breakdown: $S(u)$ requires *all* $K$ cause-specific hazards; omitting a cause misspecifies every CIF and every RSF split (which "maximiz[es] the differences in cumulative incidence between child nodes," [PAGE 12]).

Interpretation anchor [PAGE 21], verbatim: "a hazard ratio of $1.20$ indicates that a one-unit increase in the covariate raises the instantaneous probability of turnover by approximately $20\%$," with the scaling caveat "the reported hazard ratios correspond to a one-unit increase over the entire support of the variable, which represents an extreme and rarely observed change in practice" [PAGE 21–22]. Key point estimates (Table 8): sacking `DS` $=2.97$ ($\exp=19.5$), `LM.TMC` $=1.46$ ($\exp=4.31$), `PPP.TMT` $=1.61$ ($\exp=5.0$), `PPP.TMS` $=-5.69$; end-of-contract `LM.TMS` $=-16.24$, `PPP.TMS` $=-7.35$. Fit: C-index $0.84$–$0.98$ [PAGE 30].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits at the confluence of three preprints of method that predate it by decades. (i) Survival core: Cox's 1972 proportional hazards [ref 55, PAGE 35]; the cause-specific formulation traces to Prentice, Kalbfleisch, Peterson, Flournoy, Farewell & Breslow (1978) [ref 54, PAGE 8], which is exactly the estimand in Eq. (1). (ii) Competing-risks formalization: Fine & Gray (1999) [ref 52] gave the subdistribution hazard behind Eq. (2); Putter, Fiocco & Geske (2007) [ref 45] and Crowder (2001) [ref 53] / Beyersmann et al. (2012) [ref 46] supply the multi-state scaffolding. (iii) Selection/ML layer: Tibshirani's LASSO (1996) [ref 23, PAGE 11] and Breiman's random forest (2001) [ref 24], extended to censored/competing data by Ishwaran et al. (2008, 2010, 2014) [refs 26, 20, 25].

The sports-labor-market lineage is the framing layer: Kahn (2000) [ref 2] "the sports business as a labor market laboratory," the CEO-turnover analogy (Warner–Watts–Wruck 1988 [ref 30]; Jensen–Murphy 1990 [ref 31]; Kaplan–Minton 2012 [ref 32]), and the soccer-specific chain from Audas–Dobson–Goddard, Tena–Forrest (2007) [ref 13], Frick et al. (2010) [ref 14], d'Addona–Kind (2014) [ref 15], van Ours–van Tuijl (2016) [ref 7], to Bryson et al. (2021) [ref 4].

"Multi-week traps" (recurring methodological hazards this lineage keeps re-encountering):
- Kaplan–Meier mis-estimation: treating competing causes as independent censoring inflates marginal incidence — the precise error the authors avoid by making end-of-contract an event, not censoring [PAGE 15].
- Fine–Gray vs cause-specific confusion: subdistribution HRs answer a *forecast* question ("cumulative incidence"), cause-specific HRs answer an *etiology* question ("instantaneous risk among still-eligible"). The paper correctly picks cause-specific because its aim is "understanding the determinants … rather than … forecasting cumulative incidence" [PAGE 8].
- Collapsibility trap: binary logit/probit (as in Table 1's prior work, [PAGE 5]) assumes homogeneity across exits and "may lead to inconsistent estimates if covariates affect competing events in opposite directions" [PAGE 3].
- Small-event separation: perennial in rare-cause survival fits — precisely the resignation ($n=15$) hazard here.
- Selection-induced overfitting: forward selection's instability under small data perturbations is acknowledged [PAGE 11], motivating the triple-method intersection rule.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the data-generating agents as a principal–agent game. The club is the principal evaluating an agent (coach) on transparent, high-frequency performance signals; the coach is a forward-looking agent weighing career concerns and opportunity costs. The competing-risks partition is literally a partition of *who holds the termination option* in each state: sacking = principal's option (club pays out), resignation = agent's option, mutual consent = negotiated settlement, end-of-contract = option expiry. So the coefficients are behavioral signatures of option exercise.

Crisis-habit regression. The robust `DS` (during-season) sacking coefficient ($2.97$ full model, $\exp\approx19.5$; $3.87$ group model) is the "reactive habit": when the competitive clock is running and points are being lost now, boards regress to the crisis default of dismissal. This matches "clubs respond rapidly to short-term performance signals when immediate competitive objectives are at stake" [PAGE 29].

Counter-trap. A sophisticated board knows the base rate that dismissal rarely helps — van Ours & van Tuijl: "replacing a coach does not necessarily improve subsequent team performance" [PAGE 6]. The counter-trap signature is the *negative* `FSR` (second-half) sacking effect and the protective cumulative terms (`PPP.TMS`, `NM.TMS`): as the season's remaining option value falls, boards tolerate underperformance, i.e., they discount the crisis reflex. Bryson et al.'s "protective effect" of experience/above-expectation performance [PAGE 6] is the same counter-trap logic imported from prior work.

Clock. The institutional calendar is a hard constraint, not a smooth hazard. End-of-contract concentrates at season's end (`ES` positive for end-of-contract, resignation, mutual consent); the "dual-decision framework" [PAGE 31] is exactly a clock with two decision windows (mid-season reactive, end-of-season strategic).

Recursive layer (board models coach models board). Resignation being "a forward-looking career decision" [PAGE 25] — negative on `Age.p`, `NM.TMS`, `PPP.TMS` — implies the coach anticipates that stable, well-performing squads raise his outside option cost, so he stays; conversely mutual consent is the equilibrium settlement when short-term signals are bad but "not sufficiently severe to justify unilateral dismissal" [PAGE 25], i.e., both parties model the other's payoff and split the surplus to preserve reputational capital. The theory-of-mind failure mode for an analyst is to read sacking HRs as *coach quality* rather than as *board option-exercise policy conditional on the information set*.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical/biomechanical/weather layer is explicitly and deliberately absent. Verbatim [PAGE 9]: "all covariates included in the competing risks models are treated as time-independent $Z_k$ … the analysis's focus on coach–team spells rather than on match-level dynamics." Player fitness, injury incidence, fixture congestion, travel load, pitch state, and meteorological shocks are all folded into season/spell aggregates (`PPP`, `LM`, `GC`, etc.). Market value (`Tval`, `Mval`, euros, [PAGE 13]) proxies squad economic/sporting strength but carries no information on the *realized* physical availability of the squad.

Veto proof (does the physical layer overturn the statistical result?). Formalize the estimated sacking hazard as $\lambda^{cs}_4(t\mid Z)=\lambda_{4,0}(t)\exp(Z^\top\beta_4)$. Suppose the true data-generating process includes an unobserved physical-shock covariate $W(t)$ (injury/weather) that (a) depresses measured performance $Z$ and (b) independently raises the board's dismissal propensity (a club may sack after an injury-depleted collapse regardless of "true" coach quality). Then $\text{Cov}(Z,W)\ne0$ and the estimated $\hat\beta_4$ conflates coach effect with $W$-effect (omitted-variable bias $\propto \text{Cov}(Z,W)\cdot\gamma_W$).

Adjudication: the physical layer does NOT veto *internal* validity of the reported associations — the HRs are valid descriptions of "measured-performance → hazard" within Serie A 2010–2019. It DOES veto the *causal/managerial attribution* "coach quality drives turnover," because $\beta_4$ is not point-identified as a coach effect while $W$ is omitted. Severity is bounded, not fatal: (i) over a 38-match season, transient injury/weather shocks partially average out in cumulative `LM.TMC`/`PPP.TMC` (the abstract's headline uses cumulative losses, which is the most $W$-robust covariate); (ii) `Age.p` and market value absorb some structural physical capacity. Net: veto upheld against "coach-quality causal" readings; veto denied against "performance-signal → dismissal" descriptive readings. Reporting consequence: coefficients must be read as signals the board *reacts to*, consistent with the paper's own framing.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three falsifiable, data-reconstructable vetoes with numeric predictions. Each is verifiable against the paper's specification (requestable data, [PAGE 34]) and would, if triggered, downgrade a stated conclusion.

1. Sign-robustness veto (targets the "short-term performance protects/【endangers】 sacking" claim). Fact: `PPP.TMT` sacking is $-2.51$ (Table 7) vs $+1.61$ (Table 8). Prediction: under $B=1000$ bootstrap resamples of the full sacking model, the sign of $\hat\beta_{\text{PPP.TMT}}$ flips in $>30\%$ of resamples and the $95\%$ bootstrap interval covers $0$. Veto triggers if instability confirmed → the directional short-term claim for sacking is not identified (only `DS` timing survives). If, instead, $>95\%$ of resamples keep $\hat\beta>0$, the "conditional deviation" reading [PAGE 31] is corroborated.

2. Separation/EPV veto (targets resignation and end-of-contract estimates). Fact: resignation $n=15$, EPV $\approx3$; end-of-contract $n=31$, EPV $\approx5$; coefficients of magnitude $10$–$16$ (`LM.TMS` $=-16.24$). Prediction: a Firth-penalized or ridge-stabilized refit shrinks $|\hat\beta|$ for `LM.TMS`, `NM.TMT`, `NM.TMS` by $>50\%$ and reveals the unpenalized MLE sits near a separation boundary (fitted linear predictor near-perfectly ordering the rare events). Veto triggers → the resignation "career-decision" story and the extreme end-of-contract magnitudes are artifacts of sparse-data separation, not effects. The sacking model (EPV $\approx20$) is predicted to be stable and is exempt.

3. Out-of-sample discrimination veto (targets the "strong discriminatory ability" claim, C-index $0.84$–$0.98$ [PAGE 30]). The reported values are almost certainly *apparent* (in-sample) indices; $0.98$ at $n=31$ events is the classic overfitting signature. Prediction: leave-one-season-out (10 folds) cross-validated C-index drops materially — end-of-contract below $0.70$ and sacking below $0.80$. Veto triggers → the fit claim is downgraded from "strong" to "in-sample only," even though the *explanatory* covariate set may remain valid.

Corollary external-validity veto (not counted, offered as bonus): apply the frozen specification to Serie A 2021–2025 (post-COVID calendar congestion, altered market values). Prediction: performance-ratio coefficients attenuate by $\ge25\%$ because the baseline hazard and the physical layer (fixture congestion) shifted regimes; if they instead replicate within $10\%$, the "performance is the primary, robust driver" conclusion is externally corroborated.
</RLVR_COUNTERFACTUAL_VETOES>

Net assessment: the paper's *robust* kernel is (a) end-of-contract belongs in the risk set, not as censoring [PAGE 15]; (b) season-timing dominates sacking/mutual-consent (`DS`), while contract expiry dominates end-of-season (`ES`); (c) cumulative losses raise the sacking hazard, $\exp(1.46)\approx4.31\times$ over the full support [PAGE 8/Table 8]. The *fragile* periphery is the resignation and end-of-contract magnitudes (separation/EPV), the sign-unstable short-term `PPP.TMT` effect, and the near-perfect in-sample C-indices — all testable via the three vetoes above.