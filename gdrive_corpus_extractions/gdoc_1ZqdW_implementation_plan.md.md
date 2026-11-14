---
source: "implementation_plan.md"
folder: "/CorpusRoot"
pages: 3
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5130
---

<NATIVE_REASONING>
The user has provided a source document (implementation_plan.md) and wants me to act as the GSE + GSI Frontier Reasoning Foundry. I need to produce a response with specific XML sections, adhering to strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force / Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is a single page document (PAGES: 3 mentioned but only one block of text provided? Actually it says PAGES: 3 but the text seems to be one continuous document. I should cite [PAGE 1] or perhaps treat sections as pages? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since only one source text block is provided but labeled PAGES: 3, I need to be careful. Looking at the source text, it has sections separated by "________________". Maybe I should treat the whole thing as Page 1? Or perhaps the user means there are 3 pages but only pasted one? I'll cite [PAGE 1] for the provided text, and if I reference other parts, I'll note they are from the provided source block. Actually, to be safe, I'll cite [PAGE 1] for the main content, and maybe [PAGE 2] for the test matrix, [PAGE 3] for patches? But the text is continuous. Let me look: there are horizontal rules "________________" separating sections. I could interpret:
- Page 1: Executive Summary & Operational Readiness
- Page 2: Ground-Truth Inventory & Test Verification Matrix
- Page 3: Exact Patches to Apply...

That makes sense given PAGES: 3. I'll cite accordingly.

Key content to analyze:
1. Semantic Inversion fix in markov-simulator.ts: defMetricsForOffense = offenseHome ? metricsAway : metricsHome
2. Volume-Aware Trips-Weighted Pressure Aggregation: aggregatePressure function, weighted by snaps. Fixture: 4-rusher 10-snap (0 sacks) + 5-rusher 4-snap (2 sacks) => 2/14 ≈ 0.1429 sack rate, trips=14.
3. Realistic Ablation Suite: bounds $0 < |\Delta \text{margin}| < 10\text{ pts}$ and $0 < |\Delta \text{winProbHome}| < 0.35$.
4. Three Mechanical Fixes: Baseline contamination (null,null), Red-Zone Down-3 Gate (down >= 3 and non-empty redZoneEfficiency), Zero-Sack Floor (fallback to POOLED_DROPBACK.sackRate).
5. CIN @ BAL direction defect fixed.
6. Full Week 8 Intelligence Master landed.

Test matrix: various test suites passing.

Patches:
- Patch 1: Semantic inversion, 3 call sites.
- Patch 2: aggregatePressure code, quickPressureSackRate fallback.
- Patch 3: Realistic multi-package ablation test with specific fixtures and assertions.

Execution order: branch, apply patches, run tests, remove scratch scripts.

Now I need to write the response. It must be >= 1000 words total across sections. Each section has specific content requirements. I must avoid betting lines entirely. I must not invent fake ratios. I must use formal LaTeX equations with units.

Let's plan each section:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Trace the causal chain from semantic inversion to defensive metrics application.
- Derive why the old code penalized own offense: offMetrics = offenseHome ? metricsHome : metricsAway means when offense is home, it uses home defensive metrics (own team's defense) against own offense. This is a category error: defensive prowess should reduce opponent's offense, not own.
- Multi-hop: If home team has strong defense, old code applies strong defense metrics to home offense, reducing home offense's success, creating a self-penalty. Away team offense gets away defense metrics? Wait: offenseHome ? metricsHome : metricsAway. If offense is home (offenseHome=true), uses metricsHome (home defense). If offense is away, uses metricsAway (away defense). So each team's offense is gated by its own defense. Fix: defMetricsForOffense = offenseHome ? metricsAway : metricsHome. So home offense faces away defense; away offense faces home defense.
- Gray-zone audit: What if metrics are null? quickPressureSackRate handles null by returning POOLED_DROPBACK.sackRate. What if pressurePackages empty? Same fallback. Singularity: totalTrips = 0 returns sackRate 0, then quickPressureSackRate returns pooled. Breakdown: if all packages have snaps <= 0, agg.sackRate = 0, fallback to pooled. If pooled is also 0? Then sack rate 0, which is physically unrealistic but mathematically defined.
- Volume weighting derivation: totalSacks = sum(rate_i * snaps_i), totalTrips = sum(snaps_i), sackRate = totalSacks/totalTrips. Units: sacks per snap (dimensionless probability). Fixture: package A: 4 rushers, 10 snaps, 0 sacks => rate 0. Package B: 5 rushers, 4 snaps, 2 sacks => rate 0.5? Wait, the fixture says "4-rusher 10-snap + 5-rusher 4-snap fixture" with 2 sacks total? Let's check: "On the two-package fixture (4 rushers, 10 snaps, 0 sacks + 5 rushers, 4 snaps, 2 sacks): Trips-weighted: 2 / 14 ≈ 0.1429 (trips = 14)." So package B has 2 sacks in 4 snaps, rate 0.5. Weighted: (0*10 + 0.5*4)/14 = 2/14 ≈ 0.142857. Yes.
- Gray zones: the test fixture uses 10 snaps of 4-rusher no sack/pressure, 2 snaps of 5-rusher sack+pressure, 2 snaps of 5-rusher no sack but pressure. This yields pressure snaps distribution. Need to check if aggregatePressure uses quickPressureRate or sackRate. In code: rate = p.quickPressureRate !== undefined && p.quickPressureRate > 0 ? p.quickPressureRate : (p.sackRate ?? 0). But the fixture objects in Patch 3 don't have quickPressureRate or sackRate fields; they have sack: boolean, pressure: boolean. So how are pressurePackages constructed? There might be a mapping elsewhere. This is a gray zone: the test fixture constructs pressureSnaps array of play-level events, not pressurePackages. The aggregatePressure expects pressurePackages with sackRate/snaps/quickPressureRate. There's a potential mismatch between the test fixture (pressureSnaps) and the function input (pressurePackages). I should flag this as a gray-zone audit item: the test constructs raw snap events, but aggregatePressure consumes pre-aggregated packages. There must be an intermediate aggregation step not shown in the patch, or the test is incomplete. This is important.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Cite [PAGE 1] for executive summary, [PAGE 2] for test matrix, [PAGE 3] for patches.
- Define equations:
  - Old (defective): $M_{def,own} = \begin{cases} M_{home} & \text{if } o = \text{home} \\ M_{away} & \text{if } o = \text{away} \end{cases}$
  - New (corrected): $M_{def,opp} = \begin{cases} M_{away} & \text{if } o = \text{home} \\ M_{home} & \text{if } o = \text{away} \end{cases} = \text{defMetricsForOffense}$
  - Sack probability: $p_{\text{sack}} = \text{quickPressureSackRate}(M_{def,opp})$
  - aggregatePressure: $\bar{r} = \frac{\sum_{i} r_i s_i}{\sum_{i} s_i}$, $T = \sum_i s_i$, with $s_i > 0$. If $T=0$, $\bar{r}=0$.
  - quickPressureSackRate: $r = \begin{cases} \bar{r} & \text{if } \bar{r} > 0 \\ r_{\text{pooled}} & \text{otherwise} \end{cases}$
  - Ablation bounds: $0 < |\Delta \text{margin}| < 10$ pts, $0 < |\Delta p_{\text{win}}| < 0.35$ (dimensionless probability).
  - Units: margin in points (pts), winProb in [0,1], sackRate in sacks/snap (dimensionless), snaps dimensionless count.
- Verbatim quotes: quote the exact code snippets and fixture numbers.
- Breakdown regimes: totalTrips = 0 singularity; pooled sack rate = 0 edge; null metrics; empty pressurePackages.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Belichick-style defensive game planning, Markov decision processes in football simulation, coach simulation ablation studies.
- Multi-week traps: The document is dated 2026-10-25, Week 8. Traps could include: baseline contamination persisting across weeks if null,null not applied; red-zone gate bypass causing early-down progression errors; direction defect (CIN@BAL) causing home/away swap errors in subsequent weeks if not locked; semantic inversion causing systematic bias that compounds over a season simulation.
- Historical: Bill Belichick's defensive scheming, how defensive metrics should oppose offense. The "ablation" concept removes coach metrics to isolate value. Multi-week trap: if the inversion isn't fixed, defensive strength correlates negatively with own offensive output in simulation, creating a false "defense hurts offense" narrative that propagates through rankings.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure, the simulation might revert to using own defensive metrics (old habit) if the patch is partially applied or if code review misses one of three call sites.
- Counter-trap: An adversarial or naive reviewer might think "defensive metrics should measure the team's own defense" and revert Patch 1, reintroducing the inversion. The counter-trap is to verify all three call sites use defMetricsForOffense.
- Clock: Execution order dependencies. Patch 1 must be applied before Patch 2? Not necessarily, but both feed into quickPressureSackRate. Patch 3 depends on 1 and 2. The delta_isolate runs after each patch. Clock constraint: scratch scripts must be removed after audit report, else they pollute the integration branch.
- Theory of mind: The engineer writing Patch 3 assumes pressurePackages are built from pressureSnaps; if not, test fails. The reviewer must model the developer's assumption and verify the intermediate mapping exists.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Sack rate is bounded by physics: a 5-rusher package cannot have sack rate > 1.0 (100%). The fixture has 2 sacks / 4 snaps = 0.5, valid. 4-rusher 0/10 = 0. Weighted 0.1429 valid.
- Biomechanical: timeToThrow values (2.9s, 1.5s, 2.2s) are within human QB release windows; 1.5s is aggressive pressure, 2.9s is standard. These map to pressure likelihood but are not directly used in aggregatePressure (gray zone).
- Weather: No weather parameters in the source; no veto from weather because the code is indoor/controlled simulation? Actually the source mentions M&T Bank Stadium but no weather module. Veto: absence of weather coupling means the pressure aggregation is weather-invariant, which is a limitation but not a veto. However, if weather were introduced, wet conditions could alter sack rate; current code lacks this coupling, so a veto is not triggered but a caveat exists.
- Veto proof: The plausibility bounds $|\Delta \text{margin}| < 10$ pts and $|\Delta p_{\text{win}}| < 0.35$ act as veto thresholds: if ablation exceeds these, the test fails, vetoing unrealistic coach impact.
- No betting lines mentioned.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal framework. I need 3 scenarios where the system would veto or fail, with predictions.
- Scenario 1: If all pressurePackages have snaps = 0, aggregatePressure returns trips=0, sackRate=0, quickPressureSackRate falls back to POOLED_DROPBACK.sackRate. Prediction: sack probability reverts to pooled baseline, maskin
g package-specific variance; ablation delta collapses toward zero, potentially failing the > 0 assertion if metrics and no-metrics paths converge.
- Scenario 2: If POOLED_DROPBACK.sackRate = 0 and all package sack rates are 0, quickPressureSackRate returns 0. Prediction: zero-sack floor triggers, red-zone and third-down probabilities use zero defensive pressure, inflating offensive conversion rates beyond realistic bounds, causing margin delta to exceed 10 pts and fail plausibility.
- Scenario 3: If only Patch 1 is applied to 2 of 3 call sites (e.g., pass dropback updated but third-down conversion still uses own defense), the simulation retains partial self-penalty. Prediction: asymmetric defensive application creates home/away imbalance; CIN@BAL direction defect may compound if home_team not locked, leading to winProbHome shift > 0.35 in ablation, failing upper bound.
- Each must be verifiable: run unit tests with mocked metrics, check assertions.

Now I need to ensure word count >= 1000 across sections. I'll write substantial content in each.

Also strict invariant: ZERO BETTING LINES. I must not mention spreads, totals, moneylines, odds. The source mentions "winProbHome" and "margin" which are fine (not betting lines per se, but I should avoid framing them as betting). I won't mention odds.

ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. All equations must be formal, with units and assumptions. I'll be careful.

Cite exact [PAGE N] markers. I'll assign:
- [PAGE 1]: Executive Summary & Operational Readiness (first section)
- [PAGE 2]: Ground-Truth Inventory & Test Verification Matrix
- [PAGE 3]: Exact Patches to Apply...

I need to use verbatim quotes from source. I'll quote key lines.

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
</RLVR_COUNTERFACTUAL_VETOES>

I need to make sure total words >= 1000. I'll aim for ~150-250 words per section, with THINK_TRACE being 400+.

Let's write.

THINK_TRACE: Start with the semantic inversion. Multi-hop:
1. Code: offMetrics = offenseHome ? metricsHome : metricsAway.
2. When offenseHome=true, offMetrics = metricsHome (home team's defensive metrics).
3. Those metrics are then applied to the home offense on the field via sackRate, redZoneTdRate, thirdDownConvProb.
4. Result: strong home defense reduces home offense's success; weak home defense boosts it. This inverts causality: defensive prowess penalizes its own offense.
5. Fix: defMetricsForOffense = offenseHome ? metricsAway : metricsHome, so home offense faces away defense.
6. Three call sites updated.
7. Gray-zone audit: Patch 3 constructs pressureSnaps (play-level events) but aggregatePressure consumes pressurePackages (pre-aggregated with sackRate/snaps). There is no shown transformation from pressureSnaps to pressurePackages in Patch 3. This is a gray zone: either an unseen mapper exists, or the test constructs packages elsewhere. If missing, the test cannot compile or will use empty/default packages, making the realistic fixture a no-op.
8. Another gray zone: quickPressureSackRate uses quickPressureRate if > 0 else sackRate. The test fixtures do not set quickPressureRate or sackRate on package objects; they set play-level sack/pressure booleans. Without an aggregation layer, rate falls back to 0, then pooled sack rate is used, nullifying the volume-weighted intent.
9. Singularity: totalTrips=0 returns sackRate=0; then fallback to pooled. If pooled is 0, sack probability is exactly 0, which is physically unrealistic for an NFL game but mathematically defined.

That should be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- LaTeX equations.
- Citations [PAGE 1], [PAGE 2], [PAGE 3].
- Verbatim quotes.
- Units.

RETROCAUSAL_GENEALOGY:
- Historical lineage: Belichick defensive game planning, Markov chains in football, ablation studies.
- Multi-week traps: direction defect (CIN@BAL) if not locked causes home/away swap in future week simulations; semantic inversion creates season-long bias where good defenses suppress own offense; baseline contamination if null,null not used makes baseline not a true reference.
- Week 8 intelligence master landing (559 X posts etc.) provides external context but doesn't alter code logic.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: developer might revert to old mental model "my team's defense helps my team" and re-apply own metrics.
- Counter-trap: code reviewer must check all 3 call sites; if only 1 or 2 updated, partial inversion remains.
- Clock: execution order branch creation -> Patch 1 -> delta -> Patch 2 -> delta -> Patch 3 -> full tests -> remove scratch -> audit report. Missing removal leaves scratch scripts in integration branch.
- Modeling the developer: Patch 3 author assumes pressurePackages exist from pressureSnaps; if not, test is vacuous.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: sack rate <= 1. Fixture 0.1429 valid. 5-rusher 4 snaps 2 sacks = 0.5 valid.
- Biomechanical: timeToThrow 1.5s, 2.2s, 2.9s within plausible NFL ranges. Not used directly in aggregatePressure but feed pressure generation.
- Weather: None specified. Veto: absence of weather coupling means no environmental modulation of pressure; however this does not veto the fix, it's a scope limitation.
- Plausibility bounds as veto: if |Δmargin| >= 10 or |ΔwinProb| >= 0.35, test fails.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Zero-total-trips singularity. Prediction: fallback to pooled; ablation delta → 0; test fails lower bound (>0).
- Scenario 2: Pooled sack rate = 0 and all package rates = 0. Prediction: zero-sack floor holds but offensive success inflated; |Δmargin| may exceed 10 pts; upper bound veto.
- Scenario 3: Partial Patch 1 application (2/3 call sites). Prediction: asymmetric defensive application; home/away imbalance; winProbHome shift exceeds 0.35; CIN@BAL misdirection compounds if home_team not fixed.

Each verifiable by unit test with mocked bundles.

Word count check: I'll write generously.

Need to ensure no mention of betting lines. I won't.

Need to ensure no fake equations like Force/Fatigue. All equations are derived from the source.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit:

The source plan [PAGE 1] identifies a category error in `markov-simulator.ts` where the defensive interaction table is selected by `offMetrics = offenseHome ? metricsHome : metricsAway`. Tracing the causal hop: when `offenseHome` is true, the home team's own defensive metrics (`metricsHome`) are handed to the home offense currently on the field. Those metrics then feed three downstream operators—pass dropback sack probability, red-zone third/fourth-down TD conversion rate, and third-down conversion probability by coverage. The result is an inversion of causality: a strong home defense reduces the home offense's expected success, while a weak home defense inflates it. The defensive prowess of a team penalizes its own offensive output, which is physically nonsensical in a football simulation. Patch 1 [PAGE 3] corrects this by defining `defMetricsForOffense = offenseHome ? metricsAway : metricsHome`, so the home offense faces the away defense and the away offense faces the home defense.

Applying Patch 1 requires updating exactly three call sites inside `playGame`: (1) `const sackRate = quickPressureSackRate(defMetricsForOffense);`, (2) `const rate = redZoneTdRate(defMetricsForOffense, pass ? "pass" : "run", yl);`, and (3) `const convProb = thirdDownConvProb(defMetricsForOffense, dist);`. If any one site is missed, the simulation retains a hybrid state where only some phases of play use the opposing defense, producing asymmetric home/away distortion that is hard to detect in aggregate margin but visible in phase-conditioned residuals.

Patch 2 [PAGE 3] replaces `pressurePackages[0]` with `aggregatePressure`, a volume-weighted operator. Formal derivation: for packages indexed by $i$ with snap counts $s_i$ and rates $r_i$, the trips-weighted sack rate is $\bar{r} = \frac{\sum_i r_i s_i}{\sum_i s_i}$, with total trips $T = \sum_i s_i$. On the cited fixture [PAGE 1]—4 rushers, 10 snaps, 0 sacks plus 5 rushers, 4 snaps, 2 sacks—the arithmetic is $\bar{r} = (0 \cdot 10 + 0.5 \cdot 4) / 14 = 2 / 14 \approx 0.1429$, $T=14$. This prevents a single low-volume package from dominating the pressure model merely because it appears at index zero.

Gray-zone audit: Patch 3 [PAGE 3] constructs `pressureSnaps` as play-level event objects (`{rushers, coverage, timeToThrow, sack, pressure}`), yet `aggregatePressure` consumes `pressurePackages` shaped as `{sackRate?, snaps?, quickPressureRate?}`. The patch does not show the reduction mapping from play-level events to pre-aggregated packages. If no intermediate mapper exists in-tree, the test either fails to compile or silently receives empty/default packages, rendering the "realistic multi-package fixture" a no-op that falls back to `POOLED_DROPBACK.sackRate`. A second gray zone concerns `quickPressureSackRate`: it prefers `quickPressureRate` when defined and positive, otherwise falls back to `sackRate`. The Patch 3 fixtures set neither field, so every package rate resolves to 0, triggering the pooled fallback and nullifying the volume-weighted intent unless an external hydration layer injects those rates. Singularity regime: if `totalTrips = 0`, `aggregatePressure` returns `sackRate = 0`; `quickPressureSackRate` then returns `POOLED_DROPBACK.sackRate`. If the pooled rate is also 0, the sack probability is exactly 0, which is mathematically defined but physically unrealistic for an NFL dropback sample.

The three mechanical fixes [PAGE 1] interact with these patches: baseline contamination is removed by passing `null, null` to `simulateCoachGame`; the red-zone down-3 gate (`down >= 3` and non-empty `redZoneEfficiency`) prevents early-down bypass; and the zero-sack floor guarantees a non-degenerate fallback. The CIN @ BAL direction defect [PAGE 1] is a separate data-integrity issue: `home_team: BAL, away_team: CIN` at M&T Bank Stadium must be locked before ablation, because a home/away swap would make `defMetricsForOffense` point at the wrong defensive bundle and invert the home-field defensive interaction entirely.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, and verbatim citations.

[PAGE 1] Executive Summary, verbatim: "Opponent defensive tables (defMetricsForOffense = offenseHome ? metricsAway : metricsHome) are applied against the offense on the field, resolving the inverted behavior where a team's defensive prowess penalized its own offense."

[PAGE 1] Verbatim fixture arithmetic: "On the two-package fixture (4 rushers, 10 snaps, 0 sacks + 5 rushers, 4 snaps, 2 sacks): Trips-weighted: $2 / 14 \approx 0.1429$ (trips = 14)."

[PAGE 3] Patch 1 verbatim code:
```
// Defending team's metrics facing the offense on the field
const defMetricsForOffense = offenseHome ? metricsAway : metricsHome;
```
Call sites [PAGE 3]:
```
const sackRate = quickPressureSackRate(defMetricsForOffense);
const rate = redZoneTdRate(defMetricsForOffense, pass ? "pass" : "run", yl);
const convProb = thirdDownConvProb(defMetricsForOffense, dist);
```

[PAGE 3] Patch 2 verbatim operator:
```
export function aggregatePressure(
  packages: readonly { sackRate?: number; snaps?: number; quickPressureRate?: number }[]
): { sackRate: number; trips: number } {
  let totalSacks = 0;
  let totalTrips = 0;
  for (const p of packages) {
    const snaps = p.snaps ?? 0;
    if (snaps <= 0) continue;
    const rate =
      p.quickPressureRate !== undefined && p.quickPressureRate > 0
        ? p.quickPressureRate
        : (p.sackRate ?? 0);
    totalSacks += rate * snaps;
    totalTrips += snaps;
  }
  return {
    sackRate: totalTrips > 0 ? totalSacks / totalTrips : 0,
    trips: totalTrips,
  };
}
```
And:
```
function quickPressureSackRate(metrics: BelichickMetricBundle | null): number {
  if (!metrics || metrics.pressurePackages.length === 0) return POOLED_DROPBACK.sackRate;
  const agg = aggregatePressure(metrics.pressurePackages);
  if (agg.sackRate > 0) return agg.sackRate;
  return POOLED_DROPBACK.sackRate;
}
```

[PAGE 3] Patch 3 plausibility bounds, verbatim: "$0 < |\Delta \text{margin}| < 10\text{ pts}$ and $0 < |\Delta \text{winProbHome}| < 0.35$."

Formal equation set:

Defective self-reference (old):
\[
M^{\text{old}}_{\text{def, own}}(o) =
\begin{cases}
M_{\text{home}} & \text{if } o = \text{home} \\
M_{\text{away}} & \text{if } o = \text{away}
\end{cases}
\]
Corrected opponent reference (new):
\[
M^{\text{new}}_{\text{def, opp}}(o) =
\begin{cases}
M_{\text{away}} & \text{if } o = \text{home} \\
M_{\text{home}} & \text{if } o = \text{away}
\end{cases}
= \texttt{defMetricsForOffense}
\]

Volume-weighted aggregation:
\[
\bar{r} = \frac{\displaystyle\sum_{i=1}^{n} r_i s_i}{\displaystyle\sum_{i=1}^{n} s_i}, \qquad
T = \sum_{i=1}^{n} s_i, \qquad s_i > 0
\]
Units: $r_i$ in sacks per snap (dimensionless probability), $s_i$ in snap count (dimensionless), $\bar{r}$ in sacks/snap, $T$ in snaps.

Fallback operator:
\[
r_{\text{effective}} =
\begin{cases}
\bar{r} & \text{if } \bar{r} > 0 \\
r_{\text{pooled}} & \text{otherwise}
\end{cases}
\qquad
r_{\text{effective}} =
\begin{cases}
\bar{r} & \text{if } \text{metrics} \neq \text{null} \land \text{packages} \neq \emptyset \\
r_{\text{pooled}} & \text{otherwise}
\end{cases}
\]

Ablation constraints (dimensionless and points):
\[
0 < \left| \overline{\text{margin}}_{\text{with}} - \overline{\text{margin}}_{\text{without}} \right| < 10\ \text{pts}
\]
\[
0 < \left| p_{\text{win, home, with}} - p_{\text{win, home, without}} \right| < 0.35
\]
where $p_{\text{win}} \in [0,1]$ is a probability, not a betting line.

Breakdown regimes:
1. $T = 0 \Rightarrow \bar{r} = 0 \Rightarrow r_{\text{effective}} = r_{\text{pooled}}$. If $r_{\text{pooled}} = 0$, sack probability is exactly zero (degenerate).
2. $\text{metrics} = \text{null} \lor \text{pressurePackages} = \emptyset \Rightarrow r_{\text{effective}} = r_{\text{pooled}}$.
3. Patch 3 fixture-to-operator impedance mismatch: `pressureSnaps` (play-level) vs. `pressurePackages` (aggregate) with no shown reduction mapping; if absent, the realistic fixture does not exercise `aggregatePressure`.

[PAGE 2] Test matrix verification statuses are cited for context only; no equations are derived from pass/fail counts.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week trap analysis.

The ablation methodology descends from causal-inference practice in sports modeling: removing a coach's metric bundle to isolate the marginal contribution of staff-driven adjustments. The document's "Belichick Ablation" naming [PAGE 1] evokes Bill Belichick's defensive game-planning philosophy, in which the opposing defense's structural tendencies (coverage, pressure volume, third-down behavior) are treated as an exogenous constraint on the offense. The corrected operator `defMetricsForOffense` restores that exogenous relationship: the defense on the field is the opponent's, not the offense's own. This aligns with Markov decision-process simulations of football, where state transitions depend on the defensive bundle facing the active offense.

Multi-week trap 1—directional persistence: The CIN @ BAL defect [PAGE 1] is not isolated to one game. If `home_team: BAL, away_team: CIN` is not locked in-tree, subsequent week simulations that ingest this fixture will propagate a home/away swap. Because Patch 1 makes defensive metrics opponent-dependent, a swapped direction means Baltimore's offense faces Cincinnati's defense in the code while the data says the reverse. Over a multi-week season simulation, this compounds into a systematic home-field defensive bias that corrupts rankings and coach-value estimates.

Multi-week trap 2—baseline contamination: The baseline fix [PAGE 1] passes `null, null` to `simulateCoachGame` so it serves as a true un-metric reference. If this were not applied, the baseline would carry residual metric contamination, making the ablation delta ($\Delta$ margin, $\Delta$ winProb) artificially compressed. Across weeks, that compression hides coach impact decay or growth, leading to false conclusions about staff value stability.

Multi-week trap 3—red-zone gate bypass: The down-3 gate [PAGE 1] requires `down >= 3` and non-empty `redZoneEfficiency`. Without it, first- and second-down red-zone progression is bypassed. In a multi-week trace, early-down red-zone plays would be misclassified as third-down situations, inflating third-down conversion samples and distorting the defensive coverage conversion operator used in Patch 1's third call site.

The Week 8 Intelligence Master [PAGE 1]—559 X posts across 81 analysts, 49 SiriusXM Channel 87 episodes, 42 Open Source Football dissections—is committed in-tree as contextual landfill. It does not alter the formal operators above, but it represents the external signal layer against which the simulation's ablation outputs are plausibility-checked. If the code fixes are correct, the simulation's response to metric injection should remain within the stated bounds despite noisy external intelligence.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock dependency analysis.

Crisis habit regression: Under integration pressure, a developer may regress to the pre-fix mental model—"my team's defensive metrics describe my team"—and accidentally restore `offMetrics = offenseHome ? metricsHome : metricsAway` in one or more call sites. This regression is most likely during a hotfix when only one call site is touched and the others are assumed correct. The symptom is a partial inversion: pass dropbacks use the opponent, but red-zone or third-down logic still uses self-reference. The resulting simulation exhibits phase-dependent defensive effects that vanish in full-game margin but appear in situational residuals.

Counter-trap: The defensive counter-trap is a reviewer who believes defensive metrics should always belong to the team in possession and reverts Patch 1 wholesale. The counter-counter-trap is to require all three call sites [PAGE 3] to reference `defMetricsForOffense` in the same commit, verified by grep or AST inspection, and to assert that `metricsHome` never appears as a defensive input to an offense-controlled play. If the reviewer accepts a two-of-three patch, the simulation retains a hidden asymmetry: home offense faces away defense in the passing game but home defense in the red zone, which produces non-transitive team strength estimates.

Clock and execution order: The integration branch `integration/belichick-ablation-reconciled` must follow the sequence [PAGE 1]: create branch, apply Patch 1, run `_delta_isolate.ts`, apply Patch 2, run `_delta_isolate.ts`, apply Patch 3, run full Vitest and tsx suites, then remove scratch scripts (`_delta_check.ts`, `_delta_isolate.ts`, `_delta_realistic.ts`) after recording `docs/engine/audits/belichick-ablation-report-2026-10-25.json`. Clock violation: leaving scratch scripts in the branch pollutes the integration tree and may be imported by later test runners, causing non-deterministic deltas. Another clock violation is running the full suite before Patch 3 is applied; the ablation test would still use the degenerate 100% sack fixture and fail the realism bounds.

Theory of mind about the Patch 3 author: The author assumes an existing hydration layer maps `pressureSnaps` into `pressurePackages` with populated `sackRate`, `snaps`, and optionally `quickPressureRate`. If that assumption is false, the test constructs realistic play-level events but the operator never sees them. A reviewer must therefore model the developer's implicit dependency and verify the mapper exists before declaring Patch 3 verified.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer: Sack probability is bounded by $[0,1]$ sacks per snap. The Patch 2 fixture yields $\bar{r} \approx 0.1429$, which is physically admissible. The 5-rusher sub-package (2 sacks / 4 snaps = 0.5 sacks per snap) is aggressive but below the physical ceiling of 1.0. The 4-rusher sub-package (0 / 10 = 0) is admissible. No package exceeds 1.0, so the volume-weighted average cannot violate physical bounds. A veto would trigger if any `sackRate` or `quickPressureRate` exceeded 1.0 or fell below 0; the code does not clamp inputs, so a malicious or malformed metric bundle could produce $\bar{r} > 1$, which is physically impossible and must be rejected upstream.

Biomechanical layer: Patch 3 fixtures specify `timeToThrow` values of 2.9s, 1.5s, and 2.2s [PAGE 3]. These fall within observed NFL quarterback release windows under pressure. However, `aggregatePressure` does not consume `timeToThrow`; it consumes pre-aggregated `sackRate` or `quickPressureRate`. Thus biomechanical realism is asserted at the fixture layer but not enforced at the operator layer. A veto is not triggered because no biomechanical impossibility is encoded, but a completeness veto applies: without mapping time-to-throw to pressure probability, the operator cannot distinguish a 1.5s pressure package from a 2.9s package if both carry the same aggregate rate.

Weather layer: No weather parameters (temperature, precipitation, wind) appear in `markov-simulator.ts`, `belichick-ablation.test.ts`, or the patches [PAGE 1, PAGE 3]. The pressure aggregation is therefore weather-invariant. This is a scope limitation, not an active veto: if wet or cold conditions were shown to alter sack rates, the current operator would lack the coupling term to represent it. No weather-based veto is issued because the source code does not claim weather coupling.

Veto proof via plausibility bounds: The ablation assertions [PAGE 3] function as hard veto thresholds. If $|\Delta \text{margin}| \ge 10$ pts or $|\Delta p_{\text{winHome}}| \ge 0.35$, the test fails and the coach-metric bundle is rejected as implausible. These bounds prevent the simulation from attributing more than a 10-point swing or a 35-percentage-point win-probability swing to staff metrics alone, which would violate the realism constraint. The lower bounds ($>0$) veto a null result where metrics have no effect, which would indicate the ablation path is not actually connected to the simulation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions.

Scenario 1: Zero-total-trips singularity. Construct a `BelichickMetricBundle` where every element of `pressurePackages` has `snaps = 0` (or the array is empty). `aggregatePressure` returns `{sackRate: 0, trips: 0}`, and `quickPressureSackRate` falls back to `POOLED_DROPBACK.sackRate`. Verification: unit-test `quickPressureSackRate` with a mocked bundle containing only zero-snap packages and assert the returned value equals `POOLED_DROPBACK.sackRate`. Prediction: the ablation delta collapses because both with-metrics and without-metrics paths use the same pooled sack rate; the lower bound $|\Delta \text{margin}| > 0$ fails, vetoing the test.

Scenario 2: Pooled rate degenerate zero. Set `POOLED_DROPBACK.sackRate = 0` and all package `sackRate` / `quickPressureRate` values to 0. `aggregatePressure` returns $\bar{r} = 0$, the `agg.sackRate > 0` check fails, and `quickPressureSackRate` returns 0. Verification: run the full ablation suite with the pooled constant mocked to zero and assert whether `Math.abs(withMetrics.marginMean - withoutMetrics.marginMean) < 10` still holds. Prediction: offensive dropback sack probability becomes exactly zero, inflating offensive success and potentially pushing $|\Delta \text{margin}|$ above 10 pts or $|\Delta p_{\text{winHome}}|$ above 0.35; the upper-bound assertions veto the run.

Scenario 3: Partial Patch 1 application (counter-trap realization). Apply Patch 1 to the pass dropback call site only, leaving red-zone TD rate and third-down conversion using `metricsHome` when `offenseHome` is true. Verification: instrument all three call sites in `playGame` with a tracer that logs whether `defMetricsForOffense` or `metricsHome` was passed; run the markov simulator on a home-offense drive and assert every defensive interaction call uses the away bundle. Prediction: the home offense receives its own defensive metrics in red-zone and third-down contexts, creating an asymmetric self-penalty. Because the CIN @ BAL direction is fixed [PAGE 1], Baltimore as home would face Baltimore's own defense in those phases, depressing Baltimore's margin and shifting `winProbHome` beyond the 0.35 ablation bound; the test fails and the partial patch is vetoed.
</RLVR_COUNTERFACTUAL_VETOES>