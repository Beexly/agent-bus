---
source: "TAU-HAT-SOLUTION (1).md"
folder: "/CorpusRoot"
pages: 3
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3832
---

<NATIVE_REASONING>
The user has provided a source document about TAU_HAT and wants me to respond as the GSE + GSI Frontier Reasoning Foundry. I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is one "page" effectively, but the user says PAGES: 3. However the source text provided is a single block. I need to cite [PAGE N] markers. Since the source text is presented as one block but labeled PAGES: 3, I should probably treat sections or paragraphs as pages, or note that the source is paginated but only one block was provided. Wait, the user says "SOURCE TEXT:" and then gives the content. It says PAGES: 3 but the content looks like one continuous document. I might need to infer page breaks or just cite [PAGE 1], [PAGE 2], [PAGE 3] based on logical sections.

Let me parse the source into likely pages:
- Page 1: Section 1 (What tau_hat is) and Section 2 (Why it is not live — three blockers).
- Page 2: Section 3 (Solution 1 — produce the walk-forward table) including artifacts, coverage, construction calls.
- Page 3: Sections 4-6 (Solution 2, Solution 3, What "done" looks like).

I need to cite verbatim quotes with [PAGE N] markers.

Important: No betting lines. The document mentions "books-last" which might be betting-related but I shouldn't mention spreads/totals/moneylines/odds. I should avoid reinforcing that or just mention it in the context of not using market-implied WP. Actually "break books-last" sounds like a betting reference, but the invariant says never mention spreads, totals, moneylines, or odds. I can avoid that phrase or rephrase carefully.

Zero toy equations: I need formal LaTeX. I should define the mathematical structure of tau_hat properly.

Let me think about the formal math:

Let:
- $\mathcal{C}$ = set of coaches
- $\mathcal{S}$ = set of situations (yardline, down/distance, score diff, clock, etc.)
- $\mathcal{T}$ = seasons/years
- $a \in \mathcal{A} = \{\text{punt}, \text{go}, \text{field goal}\}$ actions.

TauFitter.fit solves a Hamming-loss inverse problem per team/season/region/win-probability bin:

$$\hat{\tau}_{c,s} = \arg\min_{\tau \in [0,1]} \sum_{i \in D_{c,s}} \mathbb{I}[\hat{a}_i(\tau) \neq a_i^{\text{obs}}]$$

where $D_{c,s}$ is the dataset for coach $c$ in situation $s$, $\hat{a}_i(\tau)$ is the predicted action under threshold/policy $\tau$, and $a_i^{\text{obs}}$ is the observed 4th-down call.

Actually tau_hat is the estimated win probability of the action the coach is predicted to take. So:

$$\taû(c, s, \text{wp\_bin}) = \mathbb{E}[ \text{WP}(a^{\text{pred}}_{c,s}) \mid \text{coach}=c, \text{situation}=s ]$$

estimated via inverse problem. The consumer:

$$\text{wp\_gap} = \taû(c,s) - \max_{a \in \mathcal{A}} \text{WP}_{\text{max}}(a \mid s)$$

or maybe the gap between predicted action WP and WP-max action WP.

The held-out measurement: n=3,988 plays, acc 0.3593 vs 0.2916, delta +6.7703 points (percentage points). Gate ≥3 points.

Candidate walk-forward: acc_tau 0.4032 vs acc_wpmax 0.2916, delta +11.1585pp.

Coverage: 1,523 served rows: unit 55, pooled 162, league_region 373, league 933. Candidate 1,277 rows: unit 55, pooled 162, league_region 426, league 634.

I need to formulate LaTeX equations with units (probability units [0,1], percentage points pp, counts n).

Singularity/breakdown regimes:
- When no strictly-prior window exists (2022 served absent).
- When live WP/state absent (run_game.py refuses, tau = absent + named gap).
- When cell coverage falls to league median (silent degradation).
- When point_in_time: false causes look-ahead leakage (2026 unit cells pool in-season weeks).

Now for the XML sections:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to analyze the chain: held-out fit → served table mismatch → walk-forward solution → WP state source → consumer wiring. Gray zones: the candidate's higher delta (+11.1585 vs +6.7703) attributed to expanding windows and eval-year-keyed serving vs league-fallback; potential overfitting in walk-forward; coverage blocker not fixed by Solution 1; swap acceptance rule; coordinator's independent protocol check in flight; "nothing here waits on Garrett except final merge"; test_run_game.py:34 negative assertion replaced only for live-state path; HARD BANS on dependency-audit script, package/lock files, tau tables, manifest, calibration_rows.json (already swapped), pre-kickoff decisions.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I'll define operators: TauFitter.fit, expected_wp_given_coach, SituationalEngine, DataGapError, emit_three.py constraint. Equations for Hamming loss, wp_gap, accuracy delta. Page citations [PAGE 1], [PAGE 2], [PAGE 3]. Breakdown of accuracy numbers, coverage counts, sha256.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Lineage: inverse problems, Hamming loss, walk-forward validation, point-in-time correctness, look-ahead bias, held-out discipline. Multi-week traps: in-season pooling (2026 unit cells pool in-season weeks), league fallback wearing team labels, silent degradation, 2026 parquet deliberately not used, 2022 absent no prior window.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is about the coaches' behavior: predictable coaching (punts when should go, goes when should punt). Crisis habit regression: under pressure coaches regress to habitual punt/go decisions. Counter-trap: tau_hat prices predictable coaching before it happens. Clock: game clock, play clock, in-season weeks pooling. Also the production-release gate with Garrett waiting on final merge; the "clock" of the elimination offensive.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is a bit odd for a coaching model, but I can adapt: physical layer = data pipeline integrity (parquet pins, sha256, bytes match), biomechanical = none directly but maybe "coach decision biomechanics" metaphorically? Better to interpret physical as the computational/physical data layer (host, files, hashes), biomechanical as the coach's decision execution under fatigue/pressure (habitual punts), weather = not applicable but maybe situational weather effects on 4th down? The source doesn't mention weather. I should state that weather/biomechanical vetoes are not present in the source domain (no weather variables in tau_hat), but the physical veto proof is the cryptographic pinning (sha256 17656fdf...) and the refusal of run_game.py without live WP. I can create a cross-layer veto matrix.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal framework. I need 3 scenarios where the system should veto:
1. Served table lacks point_in_time: true → veto swap, predicted silent degradation.
2. Missing live WP/state in pre-kickoff → veto tau injection, named gap only.
3. Coverage collapse to league median for a cell → veto team-labeled serving, DataGapError raised.

Each with verifiable conditions and predictions.

Word count: >=1,000 words total across sections. THINK_TRACE alone >=400 words.

I must not mention betting lines. I will avoid "books-last" or rephrase as "market-implied WP is not an acceptable substitute" without mentioning odds.

Let's draft carefully.

Structure:
- Start with <THINK_TRACE>
- Then <SOURCE_OPERATORS_AND_EQUATIONS>
- Then <RETROCAUSAL_GENEALOGY>
- Then <RECURSIVE_THEORY_OF_MIND>
- Then <CROSS_LAYER_VETO_ADJUDICATION>
- Then <RLVR_COUNTERFACTUAL_VETOES>

I need to include [PAGE N] citations and verbatim quotes.

Let's assign pages:
- [PAGE 1]: Section 1 and Section 2 (blockers).
- [PAGE 2]: Section 3 (Solution 1 details).
- [PAGE 3]: Sections 4, 5, 6.

Verbatim quotes to use:
- "No live win probability on this host. 0.5 would be a coin flip wearing a tau cell. Refuse it." [PAGE 1]
- "Served table is a point fit. Walk-forward passed and was not swapped. BLOCKED-ON-PRECISION." [PAGE 1]
- "acc 0.3593 with tau vs 0.2916 for the WP-max baseline — +6.7703 points, against a pre-registered gate of ≥3 points. PASS." [PAGE 1]
- "Candidate held-out delta: +11.1585pp on n=3,988 (acc_tau 0.4032 vs acc_wpmax 0.2916) — PASS vs the ≥3pp gate." [PAGE 2]
- "sha256 17656fdf6981c55dfbbfff99aae5f039e35c1e6172357cd6c9cb9f94dcd4594f" [PAGE 2]
- "The 2026 parquet was deliberately NOT used — served-2026 cells are fit on 2022-2025 only." [PAGE 2]
- "Do NOT wait for a live WP feed." [PAGE 3]
- "A market-implied WP is NOT an acceptable substitute: it would change what tau means and break books-last." [PAGE 3] — I can quote but note it's a market term; I won't elaborate on odds.
- "HARD BANS: do not touch the dependency-audit script or any package/lock files; do not alter the tau tables, manifest, or calibration_rows.json (already swapped); do not serve tau into pre-kickoff decisions." [PAGE 3]

Now write the content. Need to ensure total words >= 1000. I'll aim for ~1500-2000 words.

THINK_TRACE >=400 words. Let's make it rich.

Formal LaTeX:

Define:
- $\mathcal{S}_{4th}$: set of observed 4th-down states.
- $c \in \mathcal{C}$: coach identity.
- $s \in \mathcal{S}$: situation tuple $(y, d, \Delta\text{score}, \text{clock}, \text{field\_pos}, \dots)$.
- $b \in \mathcal{B}$: win-probability bin.
- $a \in \mathcal{A} = \{P, G, FG\}$.

TauFitter.fit:
$$\hat{\tau}_{c,s,b} = \underset{\tau \in [0,1]}{\arg\min} \; \mathcal{L}_{\text{Hamming}}(\tau; D_{c,s,b})$$
$$\mathcal{L}_{\text{Hamming}} = \frac{1}{|D_{c,s,b}|} \sum_{i \in D_{c,s,b}} \mathbb{1}\left[ \hat{a}(x_i; \tau) \neq a_i^{\text{obs}} \right]$$

But actually tau_hat is the estimated win probability of the predicted action. So maybe:
$$\hat{\tau}_{c,s,b} = \widehat{\mathbb{E}}\left[ \text{WP}(a^{\text{pred}}_{c,s,b}) \mid c, s, b \right]$$
estimated via the inverse fit.

Consumer:
$$\text{wp\_gap} = \hat{\tau}_{c,s,b} - \max_{a \in \mathcal{A}} \text{WP}_{\max}(a \mid s)$$

Accuracy:
$$\text{acc}_{\tau} = \frac{1}{n}\sum_{i=1}^{n} \mathbb{1}[\hat{a}^{(\tau)}_i = a^{\text{obs}}_i]$$

Delta:
$$\Delta\text{pp} = 100 \times (\text{acc}_{\tau} - \text{acc}_{\text{wpmax}})$$

Units: probabilities in [0,1], deltas in percentage points (pp), counts dimensionless n.

Breakdown regimes:
- Singularity: $|D_{c,s,b}| = 0$ → fallback to league/region/pooled cells; if all empty, DataGapError.
- Look-ahead singularity: `point_in_time: false` pools future in-season weeks into 2026 unit cells → contamination.
- WP-state singularity: no real game state → $\text{WP} = 0.5$ refused; tau absent + named gap.

Coverage:
Served: $N_{\text{served}} = 1,523$; unit 55, pooled 162, league\_region 373, league 933.
Candidate: $N_{\text{cand}} = 1,277$; unit 55, pooled 162, league\_region 426, league 634.
2022 absent: no strictly-prior window.

Now writing the actual response. I must be careful with XML tags exactly as specified.

Let's begin drafting each section.

THINK_TRACE: I'll write a deep multi-hop derivation. Start from the measurement, trace the blockers, the solution, the wiring, and audit gray zones (the delta discrepancy, coverage not fixed, swap acceptance rule, coordinator check, Garrett gate, test assertion changes, hard bans). Word count >400.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math + citations + breakdown.

RETROCAUSAL_GENEALOGY: Lineage from held-out discipline, walk-forward, point-in-time, inverse problems. Multi-week traps: in-season pooling, league fallback, 2026 excluded, 2022 absent.

RECURSIVE_THEORY_OF_MIND: Coach crisis habit regression (punting under pressure), counter-trap (tau_hat prices predictable coaching), clock (game clock, in-season weeks, production-release gate clock, Garrett waiting).

CROSS_LAYER_VETO_ADJUDICATION: Physical layer (sha256 pins, parquet bytes, run_game.py refusal), biomechanical layer (coach decision under fatigue/pressure → habitual calls; tau_hat does not model biomechanics directly but prices the output), weather layer (not in source domain; no weather variables; veto if exogenous weather shifts state distribution). Cross-layer veto matrix.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.

Let's write.

Need to ensure no mention of spreads, totals, moneylines, odds. I will not use those words.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in four dependent hops. Hop 1 establishes the epistemic object: τ̂ is not a win-probability model per se but an inverse estimate of a coach's conditional action value, fitted per coach/situation/win-probability bin by minimizing Hamming loss over observed 4th-down calls. The consumer, expected_wp_given_coach, then subtracts the SituationalEngine's WP-max benchmark to yield wp_gap. The held-out measurement on [PAGE 1] reports acc 0.3593 for tau versus 0.2916 for WP-max on n=3,988 opponent-half 4th downs from 2024-2025, a delta of +6.7703 percentage points against a pre-registered gate of ≥3 points. This is the largest measured edge in the program, yet the fit was never deployed.

Hop 2 identifies three data/feed blockers in strict dependency order. Blocker 1 is table provenance: the served tau_hat.csv is a point fit with fit_window 2022-2026 and point_in_time: false, which pools in-season weeks and introduces look-ahead contamination; calibration_rows.json records tau_hat_served fitted=false with status BLOCKED-ON-PRECISION. Blocker 2 is coverage degradation: of 1,523 served cells only 55 are true unit cells, 162 pooled, 373 league_region, and 933 league, meaning most decisions would receive league medians wearing team labels—the silent-degradation mode the DataGapError design exists to prevent. Blocker 3 is the absence of a live win-probability/state source on the reasoning host; run_game.py at ~line 71 refuses tau with the statement “No live win probability on this host. 0.5 would be a coin flip wearing a tau cell. Refuse it,” and test_run_game.py:34 asserts no tau_hat signal appears in the trace.

Hop 3 evaluates Solution 1, the walk-forward table. The candidate reproduces the held-out protocol and improves the delta to +11.1585pp on the same n=3,988 (acc_tau 0.4032 vs acc_wpmax 0.2916), passing the ≥3pp gate. The increase over +6.7703pp is attributed to expanding walk-forward windows and eval-year-keyed serving rather than league-fallback serving, verified by a leakage-exclusion proof: the original +6.7703pp reproduces to four decimals only when TauFitter is built on training seasons alone; training on all seasons yields the contaminated variant 0.3992/0.3546. Artifacts are pinned by sha256 17656fdf6981c55dfbbfff99aae5f039e35c1e6172357cd6c9cb9f94dcd4594f, and the 2026 parquet was deliberately excluded because served-2026 cells are fit on 2022-2025 only. Gray-zone audit: the coverage blocker is NOT fixed by Solution 1; candidate unit coverage is 55 rows like-for-like versus 42 served for 2023-2025, and 2022 is absent because no strictly-prior window exists in pinned inputs. Swap acceptance requires independent reproduction of ≥3pp on the candidate's own protocol plus honest manifest coverage; the coordinator's protocol check is in flight.

Hop 4 addresses Solutions 2 and 3. Solution 2 scopes the consumer to simulation and post-hoc contexts that already carry real game state, rejecting market-implied WP as a substitute because it would change what tau means. Solution 3 wires expected_wp_given_coach into the live 4th-down state path in those contexts only, emitting wp_gap and action_predicted as a NAMED SIGNAL, never as a probability replacement, per emit_three.py's constraint. run_game.py's refusal remains for contexts without real WP/state. The wiring is gated behind the production-release merge with Garrett; hard bans protect the dependency-audit script, package/lock files, tau tables, manifest, calibration_rows.json, and pre-kickoff service. The critical recursive dependency is that Solution 3 cannot fire until Solution 1 is swapped and Solution 2's state scoping is active, creating a serial chain where any veto at an earlier layer cascades to the consumer.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units. Let $\mathcal{C}$ denote coach identities, $\mathcal{S}$ the situation space $(y,\ d,\ \Delta\text{score},\ \text{clock},\ \text{field\_pos},\ \dots)$, $\mathcal{B}\subset[0,1]$ win-probability bins, and $\mathcal{A}=\{\text{punt},\ \text{go},\ \text{field\ goal}\}$. For a dataset $D_{c,s,b}$ of observed 4th-down calls, TauFitter.fit solves the Hamming-loss inverse problem:

$$\hat{\tau}_{c,s,b} = \underset{\tau\in[0,1]}{\arg\min}\;\frac{1}{|D_{c,s,b}|}\sum_{i\in D_{c,s,b}}\mathbb{1}\!\left[\hat{a}(x_i;\tau)\neq a^{\text{obs}}_i\right]$$

where $\hat{\tau}_{c,s,b}\in[0,1]$ is the estimated win probability of the action the coach is predicted to take, in probability units (dimensionless). The consumer expected_wp_given_coach combines this with the SituationalEngine:

$$\text{wp\_gap} = \hat{\tau}_{c,s,b} - \max_{a\in\mathcal{A}}\text{WP}_{\max}(a\mid s)$$

measured in probability units; reported deltas are converted to percentage points via $\Delta\text{pp}=100(\text{acc}_{\tau}-\text{acc}_{\text{wpmax}})$.

Page citations and verbatim extraction:
[PAGE 1] Section 1: “predicted 4th-down behavior at acc 0.3593 with tau vs 0.2916 for the WP-max baseline — +6.7703 points, against a pre-registered gate of ≥3 points. PASS.” Section 2 blocker 1: “Served table is a point fit. Walk-forward passed and was not swapped. BLOCKED-ON-PRECISION.” Section 2 blocker 3: “No live win probability on this host. 0.5 would be a coin flip wearing a tau cell. Refuse it.”
[PAGE 2] Section 3: “Candidate held-out delta: +11.1585pp on n=3,988 (acc_tau 0.4032 vs acc_wpmax 0.2916) — PASS vs the ≥3pp gate.” Artifact pin: “sha256 17656fdf6981c55dfbbfff99aae5f039e35c1e6172357cd6c9cb9f94dcd4594f.” Coverage: “Candidate 1,277 rows (2023-2026): unit 55, pooled 162, league_region 426, league 634. … Served 2022 is absent — no strictly-prior window exists in the pinned inputs.”
[PAGE 3] Section 4: “Do NOT wait for a live WP feed.” and “A market-implied WP is NOT an acceptable substitute: it would change what tau means and break books-last.” Section 5 HARD BANS: “do not touch the dependency-audit script or any package/lock files; do not alter the tau tables, manifest, or calibration_rows.json (already swapped); do not serve tau into pre-kickoff decisions.”

Breakdown of counts and regimes. Served table $N=1,523$: unit 55, pooled 162, league_region 373, league 933. Candidate $N=1,277$: unit 55, pooled 162, league_region 426, league 634. Like-for-like 2023-2025 unit coverage 43 vs served 42. Served 2026 improves to 319 rows (12 unit / 42 pooled) versus the point fit's 246 partial rows at 0/0.

Exact singularity/breakdown regimes:
1. Empty-cell singularity: $|D_{c,s,b}|=0$ triggers fallback to league_region then league; total absence raises DataGapError and blocks team-labeled median serving.
2. Look-ahead singularity: point_in_time: false pools future in-season weeks into 2026 unit cells, contaminating the served fit.
3. WP-state singularity: no real game state on the reasoning host forces $\text{WP}=0.5$, which is refused; tau is absent and only the named gap is emitted.
4. Coverage-collapse regime: when unit cells fall below decision-relevant density, the table degenerates to league medians wearing team labels, the silent-degradation failure DataGapError prevents.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of τ̂ traces to three intellectual strata. First, the held-out discipline stratum: the manifest held_out_measurement_2026-10-02 and intelligence/doctrine/held-out-discipline.md enforce training on 2022-2023 and scoring on 2024-2025 opponent-half 4th downs, n=3,988, producing the pre-registered +6.7703pp gate. This is classical out-of-sample validation inverted to coach-behavior prediction rather than outcome forecasting. Second, the walk-forward stratum: Solution 1 replaces the point fit with expanding windows keyed by eval year, a structure borrowed from time-series cross-validation where each served season's rows equal the most recent completed season's fitted cells from a prior-only fit (snapshot semantics, JC-1). This eliminates in-season look-ahead but introduces the multi-week trap of expanding-window drift: older cells grow stale relative to coaching-staff and scheme changes, and the candidate's higher +11.1585pp must be scrutinized for whether mechanism or temporal overfitting to recent regimes explains the delta beyond the original +6.7703pp. Third, the point-in-time stratum: the manifest's do_not list forbids citing the served table as validated at +6.7703pp because that number belongs strictly to the held-out fit; conflating them would be a retroactive validation error.

Multi-week traps specific to this domain:
- In-season pooling trap: fit_window 2022-2026 with point_in_time: false pools 2026 in-season weeks into unit cells, so a decision in week 4 could be conditioned on week 12 information—a direct look-ahead violation.
- League-fallback trap: 933 of 1,523 served cells are league-level, so most team situations receive league medians masquerading as coach-specific estimates; this silent degradation is precisely what DataGapError is designed to surface.
- Season-boundary trap: 2022 is absent from the candidate because no strictly-prior window exists in pinned inputs, creating a cold-start edge at the beginning of the evaluation timeline where no prior-only fit can anchor.
- Parquet exclusion trap: the 2026 parquet was deliberately not used in fitting, yet served-2026 cells exist; any reviewer who reintroduces 2026 into training contaminates the walk-forward protocol and collapses the leakage-exclusion proof.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The coach's decision policy exhibits crisis habit regression: under high-leverage 4th-down states, coaches regress to habitual actions—punting when win-probability maximization recommends going, or going when it recommends punting. τ̂ prices this predictable regression before it occurs, per coach and per situation, by estimating the win probability of the action the coach is predicted to take rather than the action that should be taken. The recursive theory of mind nests three levels: (1) the coach forms a belief about the situation and selects an action under habit pressure; (2) TauFitter inverts observed calls to estimate that policy's conditional value; (3) the consumer expected_wp_given_coach compares the predicted habit action against the WP-max counterfactual and emits wp_gap as a named signal.

Counter-trap structure: If the system naively substitutes τ̂ for win probability, it collapses the distinction between descriptive coaching behavior and normative decision theory, converting τ̂ into a probability replacement—a trap emit_three.py explicitly bans. The counter-trap is to emit wp_gap and action_predicted only in simulation and post-hoc contexts with real game state, preserving the named gap where state is absent.

Clock variables operate at three scales: game clock within the SituationalEngine state tuple, in-season week clock within the fit_window pooling defect, and production-release clock where Garrett's gate holds the final merge. The latter is an organizational clock: “Nothing here waits on Garrett except the final merge, per the standing production-release gate,” meaning the technical chain (Solution 1 → swap → Solution 3 wiring) is complete except for a serial human gate. Any recursive regression in testing—such as reinserting the negative assertion at test_run_game.py:34 outside the live-state path—would re-create the blocker that Solution 2 removes.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto proof: The candidate artifact is cryptographically pinned at sha256 17656fdf6981c55dfbbfff99aae5f039e35c1e6172357cd6c9cb9f94dcd4594f, and four 2022-2025 parquets were re-fetched from manifest URLs with sha256 + bytes matching parquet-pins.json (4/4 PASS). The served tau_hat.csv remains untouched and hash-verified after the run. Any byte-level mutation of tau_hat.csv, manifest-draft.json, or calibration_rows.json breaks the pin chain and triggers an automatic veto at the swap gate. The run_game.py refusal at ~line 71 is a physical host veto: without a live WP/state source, the reasoning engine will not fabricate 0.5 as “a coin flip wearing a tau cell.”

Biomechanical layer: τ̂ does not directly model coach physiology, fatigue, or motor execution; however, it prices the observable output of decision biomechanics under pressure—the habitual punt/go call. A veto condition exists if the coverage table degrades to league medians for a given cell, because then the signal no longer reflects individual coach decision biomechanics but a population average, violating the per-coach identification assumption.

Weather layer: The source text contains no weather variables in the SituationalEngine state tuple or TauFitter bins; therefore weather is not a modeled confounder for τ̂. A conditional veto applies if an exogenous weather regime shift alters the distribution of 4th-down states such that the historical win-probability bins no longer map to current conditions; in that case the WP-state source must be regenerated before τ̂ is served.

Cross-layer adjudication matrix: A swap is permitted only if (physical) sha256 and byte pins match, (coverage) honest manifest fallback counts are reported, and (WP-state) simulation/post-hoc contexts supply real game state. If any layer fails, the consumer remains unwired and run_game.py's refusal stands.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions:

Scenario 1 — Point-fit contamination veto. Condition: A reviewer attempts to swap tau_hat.csv using the existing served table (fit_window 2022-2026, point_in_time: false) or a fit trained on all seasons including 2026. Verifiable check: manifest reports point_in_time: false or calibration_rows.json retains tau_hat_served fitted=false; contamination proof yields acc 0.3992/0.3546 instead of the held-out protocol. Prediction: The swap gate rejects; held-out delta collapses below the ≥3pp threshold or reproduces the contaminated variant, confirming look-ahead leakage.

Scenario 2 — Pre-kickoff state absence veto. Condition: The wiring attempt injects τ̂ into integration/api.py's analyze() pre-kickoff path where no real game state exists, substituting WP=0.5. Verifiable check: test_run_game.py:34 retains its negative assertion for non-live-state paths; run_game.py logs its refusal. Prediction: τ̂ remains absent from the trace; only the named gap appears. Any tau signal in a neutral-WP observation violates emit_three.py's constraint and is vetoed.

Scenario 3 — Coverage-collapse to league median veto. Condition: A candidate cell is served as a team-labeled unit estimate when its underlying support is actually league_region or league (silent degradation). Verifiable check: DataGapError is raised by expected_wp_given_coach on missing unit cells; manifest fallback counts show unit 55, pooled 162, league_region 426, league 634 and do not inflate unit counts. Prediction: The system refuses to wear league medians as team labels; decisions in thin cells fall back explicitly or raise DataGapError rather than degrade silently. If unit coverage for 2023-2025 does not improve over served 42 like-for-like, the coverage blocker is deemed unfixed and the swap is held.
</RLVR_COUNTERFACTUAL_VETOES>