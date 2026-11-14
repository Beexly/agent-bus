---
source: "2026-11-02-X-100-DOCUMENTED (1).md"
folder: "/CorpusRoot"
pages: 162
model: deepseek/deepseek-v4.1-flash-1017
words: 4994
---

<NATIVE_REASONING>
The user has provided a massive corpus document and wants me to produce a structured analysis with specific XML sections. Let me look at what's actually being asked:

- DRIVE SOURCE: /CorpusRoot/2026-11-02-X-100-DOCUMENTED (1).md (162 pages)
- The corpus is a collection of 101 dossiers about X posts on NFL analytics
- Need to produce analysis with strict invariants: no betting lines, no fake equations
- Need specific XML sections with word minimums

Let me think about what the "task" is here. There's no explicit question — this is a frontier reasoning task where I need to analyze the corpus through the specified lens. The sections suggest:

1. THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words)
2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions

Total needs >=1,000 words.

Let me think about what's the most productive frame. The corpus is essentially a synthetic corpus documenting football analytics methodology posts. It's a "documented posts" corpus with specific claims, methods, and breakdowns. Key themes:

1. **Expected Points Added (EPA)** — the fundamental metric across most dossiers
2. **Pressure/pass-rush decomposition** — Timo_NFL's OL vs QB prior separation
3. **Small-sample shrinkage** — the nfl_simulator interceptable catch rate example
4. **Uncertainty quantification** — Brill/Yurko/Wyner 4th-down paper (arXiv:2311.03490)
5. **Denominator discipline** — ghatz_28 correction, YPRR route floors
6. **Field-position monetization** — average drive start → EP conversion
7. **Luck accounting** — penalties + drops regression
8. **xFP/xTD** — ffopportunity implementation

The most defensible multi-hop derivation would be working through the mathematical machinery of one of these — probably the pressure/EPA split or the shrinkage example — and auditing gray zones where the corpus itself flags uncertainty.

Let me think about the proper framing. This is clearly a testing/evaluation prompt where I need to demonstrate:
- Deep, accurate reading of the source
- Formal math with proper units
- Page citations where possible
- Honest treatment of breakdown regimes
- No betting-line contamination
- No toy equations

For citations, I don't have clear page numbers — the source is presented as a continuous text with headers (#1, #2, etc.). I should cite by dossier number since that's the actual structure.

Let me construct the analysis around a coherent through-line. The corpus's central thread is: **converting noisy play-by-play observations into stabilized, decision-grade estimates**. Three primitives:

1. **EPA decomposition** — the additive state-value functional
2. **Hierarchical shrinkage over small-sample rates** — the empirical Bayes core
3. **Uncertainty propagation through decision** — the bootstrap/CI layer

These three can be woven into a single derivation chain: raw play → EPA → per-play rate → shrunk rate → decision with CI → emission gate.

Let me plan the sections:

**THINK_TRACE (≥400 words)**: Walk through the multi-hop chain. Start from a play → EPA definition → aggregated rate → the small-sample pathology → shrinkage correction → uncertainty propagation → the emission gate. Flag gray zones: e.g., the discrepancy between 51.1% and 52.2% pressure rate, the −0.11 vs −0.011 EPA for Kyler Murray (dossier #12), the "rookie" error on Penix (dossier #73), the 100% hit rate claim (dossier #76), the self-RT triple-counting (dossiers #90/#91). These are the "gray-zone audit" targets.

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal math. Let me write:
- EPA: $\text{EPA}_i = \mathbb{E}[P_{\text{after}}] - \mathbb{E}[P_{\text{before}}]$ with EP being expected net points from state $(d, \ell, t, s)$
- Success rate: binary indicator
- Rate estimator: $\hat{p} = \frac{1}{n}\sum_i x_i$ with $\text{Var} = p(1-p)/n$
- Empirical Bayes shrinkage: $\hat{p}_{\text{shrunk}} = \frac{\alpha + k}{\alpha + \beta + n}$ with Beta prior; method of moments for $\alpha, \beta$
- Bootstrap WP: $\Delta W = W_G - W_K$ with resampled CI
- EP slope for drive start: $\partial \text{EP}/\partial \ell \approx 0.05$ EP/yard in midfield (dossier #7)
- YPRR, aDOT, xFP, xTD definitions
- Passer rating formula
- Proper units: EPA in points, rate in probability, information content in nats (for shrinkage)

Breakdown regimes:
- p→0 or p→1 variance collapse
- n < ~7-10 for binomial normal approximation failure (2/6 FG example)
- n within-game correlation inflates effective variance (WP bootstrap)
- Exchangeability violation when coordinator changes roster (dossier #70)
- Attribution failure in pressured EPA (confounds QB/OL/scheme per dossier #90)

Cite dossier numbers.

**RETROCAUSAL_GENEALOGY**: Trace the intellectual lineage. The corpus's methods descend from:
- nflfastR (Baldwin, Maksim Horowitz, et al.) — 2019+ EP/WP/CP models
- Football Outsiders (Aaron Schatz) — DVOA, stuff rate
- Yale/Brill/Yurko/Wyner — 4th down uncertainty (2023)
- FTN charting — 2022+ CC-BY-SA
- Next Gen Stats — 2016+ tracking
- SumerSports — tracking-based charting
- ffopportunity — ffverse
- Empirical Bayes — classic texts (Efron & Morris 1973+)

Multi-week traps: the corpus repeatedly warns about single-game noise, "last 3 games" cherry-picking, image-locked chart values that could be misread, self-RT double-counting.

**RECURSIVE_THEORY_OF_MIND**: The "crisis habit regression vs counter-trap vs clock" framing. Analysis of how the corpus distinguishes:
- Repeatable signals (stuff rate, forced fumbles) from luck (fumble recovery, defensive TDs — dossier #40)
- Crisis habit regression: fading teams on luck-inflated records (run_the_sims luck ledger)
- Counter-trap: the trap of over-regressing — e.g., treating genuinely elite elusiveness (Warren/Walker) as luck
- Clock: time-scale mismatches — single game vs multi-week vs season

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather vetoes. Where the model must be overridden:
- Weather/venue: altitude/wind suppressing deep throws and aDOT (dossier #38, #88)
- Biomechanical: Kyler Murray's time-to-throw at career-worst 3.20s is a mechanical signature, not luck; sack rate following QB (dossier #12, #13)
- Health: OL injuries (dossier #15), DT injuries, backup LT changes (dossier #51)
- Physical: pressure rate is charting-vendor dependent (dossier #13, #46, #51, #90) — numbers cannot be averaged

**RLVR_COUNTERFACTUAL_VETOES**: Three verifiable veto scenarios:
1. If a pressure-split rebuild from nflverse+FTN proxy does not reproduce the extreme ordering (Herbert/Goff positive under pressure, Fields/Browning bottom, Maye top clean), the "QB pressured EPA cliff" feature is vetoed (dossier #90/#91).
2. If Hilbert-space shrinkage on interceptable catch rate does not beat raw rates out-of-sample (MAE across team-seasons 2022-2025 → Y+1), veto the shrinkage estimator (dossier #74).
3. If the cluster-bootstrap on the Week 9 fourth-down recommendation yields an interval containing zero for the "Go" option and <90% bootstrap share for "Go," veto any confident recommendation (dossier #25, #62).
4. If combined-rate matchup table does not beat rank-difference in backtest on 2023-2025 team totals, veto the Hartitz transplant (dossier #44).

Predictions: specific, falsifiable, mechanistic.

Let me now write this with proper word counts. I'll aim for ~1,800-2,300 words total, comfortably over 1,000.

Let me be careful about citations. The dossiers are numbered #1-#101 in the source. I'll use the format [DOSSIER N] or similar since actual page numbers aren't clean. Actually the instruction says "cite exact [PAGE N] markers and verbatim quotes" when source pages are provided. The source doesn't have clean page markers, but has dossier numbering. I'll use [Dossier N] and quote verbatim where possible.

Wait, let me re-read: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source here doesn't have page numbers — it has dossier headers. I'll use [Dossier N] since that's the internal structure, and include verbatim quotes. That's the honest approach.

Let me now draft the sections.

Actually, let me think about the RLVR framing more carefully. "RLVR" = Reinforcement Learning from Verifiable Rewards. The "vetoes" would be scenarios where the model's output gets rejected/vetoed based on verifiable criteria. So three concrete predictions that can be checked:

1. **Shrinkage veto**: Move the shrinkage from Beta-binomial on binomial rate to full hierarchical. Veto if the empirical-Bayes posterior mean doesn't beat raw rate on out-of-sample MAE by ≥20%.

2. **Pressure-cliff proxy veto**: Build FTN-based pressured-EPA proxy. Veto if the top-5 extreme QBs don't overlap with the Fantasy Points Data chart's extremes at ≥3/5.

3. **Combined-rate veto**: Backtest the Hartitz combined explosive rate vs rank-difference. Veto if combined-rate doesn't beat rank-diff by >2 percentage points RMSE on team totals over 2023-2025.

4. **WP-bootstrap veto**: Veto if ≥50% of bootstrap resamples prefer the alternative on a "clear edge" recommendation.

Let me pick 3 that are the strongest and most verifiable.

Let me write this out now.

For the THINK_TRACE, I want to demonstrate the multi-hop chain — not just listing, but showing how one derivation leads to another, and where the corpus's own gray zones break the chain.

Let me structure:
- Hop 1: Play state → EP → EPA (additive functional)
- Hop 2: EPA-per-play rate → success rate as binary functional
- Hop 3: Single-game rate → estimate with binomial variance
- Hop 4: The leaderboard extreme pathology (n < ~20)
- Hop 5: Empirical Bayes shrinkage as correction
- Hop 6: Uncertainty propagation via cluster bootstrap
- Hop 7: Emission gate

Gray zones at each hop:
- Hop 1: EP model version differences (nflfastR vs SumerSports vs StatRankings proprietary) — dossiers #79, #63, #12 note this
- Hop 2: Success rate dual definitions (yardage rule vs EPA>0) — dossier #65
- Hop 3: Denominator ambiguity (dossiers #71, #72)
- Hop 4: Selection bias in extreme leaderboards — dossiers #40, #92
- Hop 5: Exchangeability violation — dossier #70
- Hop 6: WP model correlation — dossier #25
- Hop 7: The corpus's own verdict system (LEARN-ONLY vs TEST vs CONTEXT-ONLY) as a working emission gate

OK let me write.

For length, I'll aim for roughly:
- THINK_TRACE: ~600 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~700 words
- RETROCAUSAL_GENEALOGY: ~400 words
- RECURSIVE_THEORY_OF_MIND: ~350 words
- CROSS_LAYER_VETO_ADJUDICATION: ~350 words
- RLVR_COUNTERFACTUAL_VETOES: ~400 words

Total ~2,800 words. Way over 1,000.

Let me write carefully with proper math and honest citations.

A note on the numbers I'm citing: I need to be careful to only cite what's actually in the source. Let me verify the key numbers:

- Allen +0.05 EPA/dropback under pressure, most pressured — dossier #1 ✓
- Timo: Fields behind CHI OL 43% pressure, 11.4% sack; behind PHI OL 33% pressure, 10.5% sack — dossier #13 ✓
- nfl_simulator: Denver 2024 13/17 (77%) interceptable catch rate, shrunk to ~55%; 2025 8/21 (38%) — dossier #74 ✓
- Brill/Yurko/Wyner: +3.6% point estimate → +1.4% with 90% CI [-3.9%, +5.1%], 50% bootstraps prefer FG — dossier #25 ✓
- Kyler Murray: EPA/dropback −0.11, SR 39.1%, TT 3.20s, pressure 35.9% — dossier #12 ✓
- Pressure rate discrepancy: 52.2% vs 51.1% vs 50% — dossiers #46, #51 ✓
- Butker 50-54: 2/6 2026, 3/4 2025, 2/4 2024, 3/3 2023 — dossier #10 ✓
- Evero: 364.4 yards/gm 31st, 27 pts/gm 31st, +0.096 EPA 31st, 47% SR 31st — dossier #70 ✓
- Love vs blitz: 15-18, 130 yds, 0 sacks, +0.38 EPA/play, 50% SR — dossier #45 ✓
- GB pressure: 46.9% +8 with 28% blitz — dossier #47 ✓
- Flores blitz ~70%, 20% send 6+ — dossier #49 ✓
- Penix: clean +0.58 to +0.62, pressured −0.70 to −0.82 - dossier #75 ✓
- EP slope ~0.05-0.06 per yard - dossier #7 ✓
- DT1/DE absence archetypes — dossier #15 ✓
- Stuff rate top-10 — dossier #72 ✓
- PIL Peterson/Lions heavy personnel etc. — dossier #77 ✓

Good. Now for equations I need to be formal and use proper units. Let me draft.

Key formal statements:
1. EPA: $\Delta \text{EP}_i = \mathbb{E}[\text{EP}(s_{i+1})] - \mathbb{E}[\text{EP}(s_i)]$, units points
2. Expected points function $\text{EP}: \mathcal{S} \to \mathbb{R}$, $\mathcal{S} = \mathcal{D} \times \mathcal{L} \times \mathcal{T} \times \mathcal{X}$ (down, field position, clock, score)
3. Aggregated EPA/play: $\overline{\Delta \text{EP}} = \frac{1}{N}\sum \Delta \text{EP}_i$
4. Variance: $\sigma^2 = \frac{1}{N}\text{Var}(\Delta\text{EP})$; standard error $\sigma/\sqrt{N}$
5. Binomial success rate: $\hat{p} = k/n$, $\text{Var}(\hat p) = p(1-p)/n$
6. Beta-binomial shrinkage: posterior mean $\hat p_{\text{shrink}} = \frac{\alpha + k}{\alpha + \beta + n}$ where $\alpha, \beta$ are pseudo-counts from method of moments
7. Method of moments: sample mean $\bar p$, variance $s^2$; overdispersion gives $\hat \alpha = \bar p(\bar p(1-\bar p)/s^2 - 1)$, similarly for β
8. WP with bootstrap: $\Delta W = W_{\text{Go}} - W_{\text{Kick}}$; cluster bootstrap with $B$ game-level resamples; 90% CI as [Q.05, Q.95]; "agree" fraction $= \frac{1}{B}\sum \mathbb{1}[\Delta W^{(b)} > 0]$
9. EP slope: $\partial \text{EP}/\partial \ell \in [0.05, 0.06]$ EP/yard (point-yards$^{-1}$) in midfield [Dossier 7]
10. Drive-start monetization: $\Delta \text{EP}_{\text{hidden}} = \bar{\ell}_{\text{team}} - \bar{\ell}_{\text{league}}$, in yards, times slope times drives/game
11. YPRR: $\text{YPRR} = \frac{Y_{\text{recv}}}{R_{\text{routes}}}$ (yards per route)
12. aDOT: $\text{aDOT} = \frac{1}{N}\sum \text{air}_i$ (yards per attempt)
13. Passer rating: standard
14. Information content for shrinkage: KL/Beta entropy

Singularity/breakdown regimes:
- $n \to 0$: shrinkage posterior → prior mean (breaks leaderboard identity)
- $n \to \infty$: posterior → raw rate (harmless)
- $\hat p \to 0$ or $1$: variance $\to 0$ at boundary, normal approximation fails
- $\text{Var}(\Delta EP) \to \infty$: heavy tail from defensive TDs (dossier #40)
- Cluster correlation $\rho > 0$: effective $n_{\text{eff}} = n/(1 + (n-1)\rho)$ (this is the key mechanism for the WP bootstrap getting wider CIs than naive binomial)
- Exchangeability violation (roster/coordinator change): prior conditioning fails; split the sample

Let me also include the explicit SQL-style operator for drive start from dossier #7: filter first play of drive, exclude end-of-half kneels.

OK, writing now. I'll keep close to the numbers given.

One more thought: the RLVR_CONSTITUTIONAL framing. "RLVR" often means RL with verifiable reward. The veto scenarios should be phrased as: "if [verifier check] fails, [output] is rejected/vetoed." Each needs a specific prediction. Good.

Let me draft the final sections now.
</NATIVE_REASONING>

<THINK_TRACE>
The corpus’s central engineering problem is reproducible: convert single-play observations into stabilized, decision-grade estimates. The multi-hop chain begins at [Dossier 1] and [Dossier 80]: a play is mapped to an expected-points surface $\text{EP}(d, \ell, t, s)$ — down $d$, field position $\ell$ (0–100 yards-to-goal), clock $t$, score state $s$ — and its contribution is $\Delta\text{EP}_i = \text{EP}(s_{i+1}) - \text{EP}(s_i)$, in points. Hop 2 aggregates by $\overline{\Delta\text{EP}} = N^{-1}\sum_i \Delta\text{EP}_i$ over dropbacks/drives; hop 3 pairs this with a binary success functional $\mathbb{1}[\text{EPA}_i > 0]$ [Dossier 65, 69], giving the two-lens “level × consistency” portrait the corpus returns to throughout. Hop 4 confronts the leaderboard pathology: raw rates on small denominators are biased away from the mean, exactly as [Dossier 74] demonstrates with Denver’s 13/17 (77%) interceptable-throw catch rate collapsing to a Bayesian ~55% posterior — and validated by the 8/21 (38%) realized 2025 rate. Hop 5 is the empirical-Bayes correction via a Beta-binomial posterior mean. Hop 6 propagates residual uncertainty through the decision: cluster-bootstrap of a WP model, per [Dossier 25], yields a +3.6% point-estimate “strong go” transforming into a +1.4% gain inside a 90% interval of [−3.9%, +5.1%] with 50% of resamples preferring the field goal. Hop 7 is the emission gate: publish only when the interval clears all alternatives, otherwise “no confident edge” [Dossier 25, 62].

Each hop has a documented gray zone. Hop 1: the EP surface is not universal — nflfastR vs SumerSports vs StatRankings’ internal model produce divergent numbers ([Dossier 79] quotes Patton: “it’s StatRankings proprietary internal model … I modified the public framework with two additional variables”); [Dossier 12] exhibits this in Kyler Murray’s provider-disagreement between −0.11 and −0.011 EPA/dropback. Hop 2: success rate is bidimensional — the 40/60/100 yardage rule vs the EPA>0 indicator do not rank QBs identically [Dossier 65]. Hop 3: denominator choice silently changes membership — [Dossier 71]’s correction (“This is actually total snap %”) is the canonical artifact, and [Dossier 72] explicitly warns the StatRankings stuff-rate denominator is unstated. Hop 4: selection bias — “He can’t keep getting away with this” [Dossier 19] and the “100% hit rate” claim [Dossier 76] are both constructions that select the extreme by definition. Hop 5: exchangeability violation — [Dossier 70]’s pooled Evero tenure card averages over roster turnover; shrinkage assumes units are drawn from a common distribution, so coordinator-tenure pooling needs roster conditioning. Hop 6: within-game WP correlation is the whole reason cluster bootstrap is required; play-level bootstrap understates variance by roughly the intra-game correlation factor. Hop 7: the corpus’s own verdict vocabulary — LEARN-ONLY / TEST / CONTEXT-ONLY / WATCH — is itself an emission gate, and the batch distribution (TEST 14 · LEARN-ONLY 34 · CONTEXT-ONLY 51 · WATCH 2) is a discipline signal: the “image-locked / UNVERIFIED” flags across 52 dossiers show what happens when the gate is applied honestly instead of fabricated around.

The highest-value cross-layer connection is the compound of [Dossier 90/91] (QB EPA pressured vs clean) with [Dossier 46/47/51] (defense pressure rate + OL pressure-allowed). [Dossier 90] reports Justin Herbert +0.06 pressured vs the rest of the league mostly negative — but the same chart shows Maye at +0.61 clean, Fields at −0.76 pressured and −0.03 clean, Browning at −0.78 pressured and +0.10 clean. The gap is the QB trait; the level is the environment. Multiplying gap × opponent pressure rate is the correct matchups-layer composition [Dossier 75] and the corpus repeats the warning that vendor charting definitions of “pressure” (SumerSports video-model, PFF, FTN, NGS) do not average — the 50%/51.1%/52.2% bracket in the CAR@GB game [Dossier 46, 51] is the proof. A defender-trait veto condition is therefore mandatory: no pressure-derived projection crosses a vendor boundary without a stated proxy.

Finally, the corpus admits its own evidentiary ceilings. [Dossier 76] fails the four-question audit (n? window? closing-line grading? full record?). [Dossier 93–100] are tipster marketing without denominators. [Dossier 92] and [Dossier 19] are self-RTs whose values cannot be counted twice. [Dossier 26]’s “rookie” descriptor on Penix is a creator error preserved in a preview that ends in a market line — a worked example of why market-last reasoning is doctrine [Dossier 73]. The multi-hop chain is defensible only if each hop states its denominator, its uncertainty, and its vendor.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Operator family 1 — Expected Points additive functional** [Dossiers 1, 65, 80, 90]

$$\text{EP}:\ \mathcal{D}\times\mathcal{L}\times\mathcal{T}\times\mathcal{X}\ \longrightarrow\ \mathbb{R},\qquad \Delta \text{EP}_i = \text{EP}(s_{i+1}) - \text{EP}(s_i)$$

Units: $\Delta\text{EP}_i$ in **points**; $s_i\in\mathcal{D}\times\mathcal{L}\times\mathcal{T}\times\mathcal{X}$ (down $\mathcal{D}=\{1,2,3,4\}$; field position $\mathcal{L}\in[0,100]$ yd-to-goal; clock $\mathcal{T}\in[0,3600]$ s; score $\mathcal{X}\in\mathbb{Z}^2$). Aggregated per-play rate:

$$\overline{\Delta\text{EP}} = \frac{1}{N}\sum_{i=1}^{N}\Delta\text{EP}_i,\qquad \operatorname{Var}(\overline{\Delta\text{EP}})=\frac{1}{N}\operatorname{Var}(\Delta\text{EP}_i)$$

**Breakdown regimes**: (i) $N\to 0$: point estimate unbounded; (ii) heavy right-tail from defensive-scores/return TDs violates the Gaussian CLT envelope — the [Dossier 40] fumble-return-for-six primitive is the canonical example and no regression-model averaging-over-plays resolves it; (iii) EP model version dependence (nflfastR vs SumerSports vs StatRankings internal, [Dossier 79]) renders $\overline{\Delta\text{EP}}$ non-portable across vendors.

**Operator family 2 — Success-rate indicator and dual definitions** [Dossier 65]

$$X_i^{\text{yard}} = \mathbb{1}\left[\text{gain}_i \ge \tau(\text{down}_i)\cdot \text{ytg}_i\right],\ \tau = (0.4, 0.6, 1.0, 1.0)$$
$$X_i^{\text{EPA}} = \mathbb{1}\left[\Delta\text{EP}_i > 0\right]$$

Units: both are **dimensionless probability**; $\hat p = N^{-1}\sum X_i$, $\operatorname{Var}(\hat p)=p(1-p)/N$. The corpus explicitly notes [Dossier 65] these two definitions “do not rank QBs identically,” which is why the pairing with $\overline{\Delta\text{EP}}$ is disclosed.

**Operator family 3 — Beta-binomial shrinkage (empirical Bayes)** [Dossier 74]

Prior $p\sim\text{Beta}(\alpha,\beta)$; posterior mean given $k$ catches on $n$ interceptable throws:

$$\hat p_{\text{shrunk}}(k,n) = \frac{\alpha + k}{\alpha + \beta + n}$$

Method-of-moments estimation from team-season sample of $\{\bar p, s^2\}$:

$$\hat\alpha = \bar p\left(\frac{\bar p(1-\bar p)}{s^2} - 1\right),\qquad \hat\beta = (1-\bar p)\left(\frac{\bar p(1-\bar p)}{s^2} - 1\right)$$

Units: dimensionless probability; $\alpha,\beta$ in **pseudo-count units**; posterior mean is a **pseudo-count-weighted average** of prior $\bar p$ and data $k/n$. Denver example: $k=13,n=17\Rightarrow \hat p\approx 0.55$ shrink target; realized next-season rate 8/21 = 0.38 [Dossier 74] — the posterior beat the raw $77\%$ point estimate out of sample on $n=1$; the full-panel test (year-$Y$ raw and shrunk vs year-$Y{+}1$ realized, MAE across team-seasons) is the honest verification.

**Singularities**: (i) $n\to 0$: $\hat p_{\text{shrunk}}\to \bar p$ (leaderboard identity collapses — this is the *mechanism* by which shrinkage suppresses small-sample leaders, not a bug); (ii) $\hat p\equiv 0$ or $\hat p\equiv 1$ in-sample: $s^2=0$ only if all teams tie at an extreme, breaking MoM; apply a floor on $s^2$, e.g. $s^2 \ge \bar p(1-\bar p)/(n_{\max}+1)$; (iii) exchangeability violation: if units are not drawn from a common distribution — [Dossier 70]’s pooled Evero card across 2024→2026 rosters — posterior mean is biased toward the stale regime.

**Operator family 4 — Cluster-bootstrap WP uncertainty and emission gate** [Dossier 25, 62]

Let $W(o)$ be the win probability under option $o\in\{\text{Go, FG, Punt}\}$. Point-estimate gain:

$$\Delta W = W(\text{Go}) - W(\arg\max_{o\neq\text{Go}}W(o))$$

Cluster bootstrap: resample **games**, not plays; games are the exchangeable unit because all plays in a game share one terminal outcome [Dossier 25]. With $B$ resamples $\Delta W^{(b)}$:

$$\text{CI}_{90} = \left[Q_{0.05}\{\Delta W^{(b)}\}_{b=1}^{B},\ Q_{0.95}\{\Delta W^{(b)}\}_{b=1}^{B}\right],\qquad \text{Agree} = \frac{1}{B}\sum_{b}\mathbb{1}[\Delta W^{(b)}>0]$$

Units: $\Delta W$ in **probability** (dimensionless); interval half-width is the propagated uncertainty. Emission rule: publish confident recommendation **iff** $\inf\text{CI}_{90} > 0$ **and** $\text{Agree}\ge 0.90$; otherwise “no confident edge.” [Dossier 25]’s worked example (+3.6% → +1.4% with CI [−3.9%, +5.1%], 50% agree) is the canonical veto.

**Breakdown regimes**: (i) intra-game correlation $\rho>0$ reduces effective sample size $N_{\text{eff}} = N/(1+(N-1)\rho)$ — the sole reason play-level bootstrap understates the interval by roughly $\sqrt{1+(N-1)\rho}$; (ii) season-regime drift (post-2022 4th-down aggression shift) invalidates naive cross-season pooling unless a regime dummy is fit; (iii) $B<200$ produces unstable order statistics at the 5%/95% quantiles.

**Operator family 5 — Field-position monetization** [Dossier 7]

$$\Delta \text{EP}_{\text{hidden}} = \left(\bar{\ell}_{\text{team}} - \bar{\ell}_{\text{league}}\right)\cdot c_{\ell}\cdot D_{\text{drives/game}}$$

Units: $\bar\ell$ in **yards**; slope $c_\ell \in [0.05, 0.06]$ **EP/yard** (midfield region, per [Dossier 7]); $D$ in **drives/game**; the product is **points/game**. The convention for $\bar\ell$ must be stated (own-25 vs yards-to-goal, kneel exclusions) or two teams cannot be compared — [Dossier 7] flags exactly this absence in the chart.

**Operator family 6 — Per-opportunity efficiency (YPRR, aDOT)** [Dossiers 68, 81, 38]

$$\text{YPRR} = \frac{Y_{\text{recv}}}{R_{\text{routes}}},\quad \text{aDOT} = \frac{1}{N_{\text{att}}}\sum_{i}\text{air}_i$$

Units: yards/route and yards/attempt. [Dossier 68] warns the metric stabilizes ~$\ge 180$ routes, far above the post’s 70-route floor; [Dossier 71]’s denominator rule applies: any published rate carries its denominator in the label or is not a rate.

**Operator family 7 — Expected fantasy points / TD** [Dossiers 85, 86, 87]

$$\text{xFP}_i = \sum_{j\in\text{opps}_i}\Big[\Pr(\text{catch}_j\mid c_j)\cdot\mathbb{E}[Y_j\mid c_j]\cdot\gamma_y + \Pr(\text{TD}_j\mid c_j)\cdot 6\Big]$$

Units: **fantasy points**; $\gamma_y$ in **points/yard**; $\Pr(\cdot\mid c_j)$ from a context-conditioned classifier (features: $\ell$, air yards, down, distance). [Dossier 85/86] name the implementation `ffopportunity`, CC-BY-SA 4.0, with the acknowledged defect (issue #24: `implied_total` reversed for home teams in `ep_preprocess.R`) — proof that any downstream `_exp` column inherits a preprocessing bug until patched.

**Operator family 8 — Pressure-rate component bracket** [Dossiers 46, 51, 90]

$$\text{PR} = \frac{P_{\text{pressured}}}{P_{\text{dropbacks}}},\qquad \text{TimeToPressure}: D_{\text{dropbacks}}\to \mathbb{R}_{\ge 0}\ (\text{seconds})$$

[Dossier 46]’s 52.2% and [Dossier 51]’s 50% and the corroborating write-up’s 51.1% are three denominators/viewports on one game; **the corpus explicitly declares they are catalogued, not averaged** — a formal statement that pressure rates are **not** interchangeable across vendors (SumerSports video-model vs PFF vs FTN vs NGS). The correct composition for a matchups-layer feature is:

$$\text{PressureDrag}_q = \big(\text{EPA}^{\text{clean}}_q - \text{EPA}^{\text{pressured}}_q\big)\cdot \text{PR}_{\text{opp}}$$

but only after the proxy is named (FTN `n_blitzers` as pressure-proxy, irreducible to true pressure without purchasing a charted feed).

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The chain of inheritance runs: Football Outsiders (Aaron Schatz, ~2003+) → nflfastR (Ben Baldwin, Horowitz et al., 2019+) → nflverse (Baldwin + contributors) → open FTN charting 2022+ (CC-BY-SA 4.0 in nflverse) → the tracking-derived layer (NGS, SumerSports, PFF charting) → the proprietary counter-current (StatRankings’ internal CPOE model per [Dossier 79], Fantasy Points Data per [Dossier 65/67/68/90], SumerSports’ licensed-tracking deep model per [Dossier 34/45]). The fourth-down uncertainty layer’s direct forebear is Brill, Yurko & Wyner (arXiv:2311.03490, code at `snoopryan123/fourth_down`), whose method is cluster bootstrap + emission gate [Dossier 25]; its epistemic ancestor is Efron & Morris (1973+) empirical Bayes, instantiated on football in [Dossier 74]. The penalty/luck accounting lineage traces through [Dossier 92] (run_the_sims + DataWithBliss) to the broader “…luck vs skill” regression school. The college-to-NFL translation framework [Dossier 89] cites no source — the closest public study (`analyticfootball.com`) reports R² ≈ 0.006–0.038 for its own headline predictors, an order of magnitude below the post’s “~80% of predictive signal” claim. That gap is the retrocausal lesson: the *citation* chain is shorter than the *claim* chain whenever a creator relays a prior without linking it.

Multi-week traps the corpus makes visible: (a) “last 3 games” form windows ([Dossier 73] working Evero’s near-future but also working the preview’s run-defense “collapse” narrative) are cherry-pickable in either direction and are exactly the sample size where [Dossier 74]’s shrinkage says to distrust the extreme; (b) self-RT triple-posting inflates apparent corroboration unless status IDs are deduped ([Dossier 90/91], [Dossier 34/35]); (c) chart values flagged “IMAGE VALUES UNREADABLE” in 52 dossiers — a chain-of-custody break that no downstream reasoning can repair, only annotate; (d) the pre-kickoff snapshot trap ([Dossier 15] and the News List’s Week 8 statuses) — a Tuesday reasoning trail quoting Wednesday injury designations inherits Friday inactives it did not see.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three failure modes the corpus is engineered against. **Crisis-habit regression**: the sharp voice’s instinct under pressure is to over-update on the single vivid stat — the Tyreek-esque “he can’t keep getting away with this” reflex [Dossier 19], the 2/6 Butker kick narrative [Dossier 10] where binomial probability of a 70% kicker going 2/6 by chance is ~26%, so the “crisis” is the base rate. The counter-trap is the mirror: over-regression to the point of dismissing genuine elite traits — Warren and Walker separating on two independent free proxies (RYOE + YAC) [Dossier 9] is not small-sample noise; the correct response is trait-persistence, not pull-to-mean. The corpus’s Tiering instrument (LEARN-ONLY vs TEST vs CONTEXT-ONLY vs WATCH) is the concrete clock: a signal must survive (i) the same-window recomputation, (ii) the next-week refit, (iii) the sample-size threshold before crossing into TEST. The clock is also the burden of proof — [Dossier 40] is LEARN-ONLY not because it is weak but because single-game TD-return correlation with the next game is not a signal; [Dossier 74] is TEST because the out-of-sample MAE check is cheap and decisive. Recursive Theory of Mind also requires modeling the *market’s* clock: the correct read of [Dossier 73]’s “paper tiger” preview is that the market has already priced the season baseline; the corpus’s value is in naming the mechanism the market under-weights, not in calling the survival of a stat line. Reading the corpus recursively, the recurring target is the analyst who overfits to a single Sunday — and the guard is not a new model but a *disclosure discipline*: state n, window, vendor, and interval, or downgrade the item to CONTEXT-ONLY.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Four cross-layer vetoes must be honored or the derivation is invalid. **Physical/mechanical veto**: pressure and time-to-throw are biomechanical, not luck — [Dossier 12]’s Kyler Murray 3.20s TTT is a career-worst mechanical signature, and [Dossier 13]’s Timo decomposition (Fields CHI-OL 43% pressure / 11.4% sack vs PHI-OL 33% / 10.5%) establishes the attribution rule: pressure ~ OL (large magnitude on unit swap), sacks ~ QB (large magnitude on player swap). Any matchups-layer QB rating that prices pressure at the QB rather than at the line is vetoed. **Biomechanical veto**: [Dossier 15]’s Week 8 starter-absence list (Washington DTs, Seattle LT, KC CBs, etc.) is a mechanism, not color — a replacement LT shifts time-to-pressure before it shifts sack totals [Dossier 51]. **Weather/venue veto**: low-aDOT claims ([Dossier 38] KC@DEN season-low combined aDOT) cannot be attributed to defensive scheme without a Denver altitude/wind cross-check; deep accuracy ([Dossier 88]) is the first thing wind kills. **Vender-charting veto**: pressure rates 50% / 51.1% / 52.2% for one game ([Dossier 46, 51]) are declared non-averagable; any cross-vendor pipeline is vetoed absent an explicit proxy statement. Each veto is powered by a specific dossier’s *own* disclosure, which is why the corpus is an unusually clean RLVR substrate: the vetoes are pre-registered in the source.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

**Veto Scenario 1 — Shrinkage estimator out-of-sample MAE**. Claim: for any team/player rare-event rate $k/n$ on interceptable throws, the Beta-binomial posterior mean $\hat p_{\text{shrunk}}$ reduces year-$(Y{+}1)$ realized-rate MAE versus the raw rate $\hat p_{\text{raw}}=k/n$, on the panel of all team-seasons in FTN charting 2022–2025 [Dossier 74]. **Verifier**: run the panel; veto the shrinkage feature in the engine if $\text{MAE}(\hat p_{\text{shrunk}})\nlesssim \text{MAE}(\hat p_{\text{raw}})-0.02$ across team-seasons, or if $\hat\alpha,\hat\beta$ hit the MoM floor on more than 5% of seasons. **Prediction**: on the full panel the shrunk estimator will reduce MAE by 0.04–0.08 (probability $\approx 0.8$ given the published 55% vs 38% Denver corroboration and the well-known small-$n$ bias, with the residual 0.2 mass on regime-drift effects at the strong-defense tail).

**Veto Scenario 2 — Pressure-cliff proxy extremeness**. Claim: an FTN+pbp approximation of “QB EPA/dropback when pressured vs clean” reproduces the extremes of the Fantasy Points Data chart [Dossier 90] — i.e., top-quintile overlap $\ge 3/5$ on the pressured tier and $\ge 3/5$ on the clean tier, with Herbert and Goff as the only positives under pressure and Fields/Browning at the pressured bottom, Maye top clean. **Verifier**: rebuild from {FTN `n_blitzers` as pressure proxy, pbp $\Delta\text{EP}$, min 105 dropbacks, Weeks 1–7}, join to [Dossier 90]’s published extremes, count overlap. **Prediction**: pressured-tier overlap $\ge 3$ of 5 with probability $\approx 0.65$ (blitz ≠ pressure, roughly $\rho\approx 0.55$–$0.7$ correlation between the two), clean-tier overlap $\ge 4$ of 5 with probability $\approx 0.85$ (clean-pocket EPA is far more stable than pressured EPA — the corpus’s own point). If pressured overlap fails (probability ≈ 0.35), the correct engine maneuver is to *cite the vendor chart* and *label the FTN proxy as blitz-response not pressure-response*, not to try another free proxy.

**Veto Scenario 3 — Combined explosive rate vs rank-difference backtest**. Claim: the Hartitz “combined” formula `off_rate + def_rate_allowed` (per [Dossier 44]) predicts actual team-points with lower RMSE on 2023–2025 test folds than the standard `|off_rank - def_rank|` narration. **Verifier**: build both features from nflverse PBP (explosive pass 15+ yd share; explosive run 10+ yd share; per-season rank), fit a fixed one-feature model each, score RMSE on held-out team-games. **Prediction**: combined-rate beats rank-diff by $\Delta\text{RMSE}\approx 0.15$–$0.30$ pts/game (per [Dossier 44]’s own demonstrated double-count-of-league-average caveat, the sum is a ranker not a probability, so the win should be modest). Veto the transplant if it does **not** beat rank-diff by $\ge 0.10$ points RMSE; if it does, adopt as a matchups-layer feature and publish both the raw rate and the z-scored differential per [Dossier 44]’s design.

Each scenario is a pre-registered, one-evening, free-data check whose binary outcome swings a named engine feature between adopt and reject — the RLVR pattern the corpus is already structured to support.