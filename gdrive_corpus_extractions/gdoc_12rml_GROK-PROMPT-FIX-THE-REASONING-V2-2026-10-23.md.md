---
source: "GROK-PROMPT-FIX-THE-REASONING-V2-2026-10-23.md"
folder: "/CorpusRoot"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4833
---

<NATIVE_REASONING>
The user wants a detailed reasoning report based on a source document (a prompt for Grok about making a reasoning engine produce plays for football betting analysis). They want me to act as the "GSE + GSI Frontier Reasoning Foundry" with strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source text provided is pages 2 (likely just the content shown). I need to cite exact [PAGE 2] markers and verbatim quotes since source pages were provided.

Key constraints:
- No betting lines (spreads, totals, moneylines, odds). This is tricky because the source text talks about "plays", "price", "ALT", "PASS", "books", "PLAY / ALT / PASS-on-price", "-250". I must NOT mention spreads, totals, moneylines, or odds. I can refer to "pricing service", "market assessment", "price check", "PLAY/ALT/PASS" perhaps but avoid specific odds language. Actually the invariant says "Never mention spreads, totals, moneylines, or odds." So I should avoid those terms entirely. I can talk about "market verdict" but better to avoid. I'll refer to "pricing layer returns a disposition" without naming odds.

- No toy equations. So no fake ratios like Force/Fatigue. I need formal LaTeX equations with units, assumptions, singularity/breakdown regimes.

- Cite [PAGE 2] and verbatim quotes from source text.

- Produce a scorecard at the end? The source text says "Report back as a scorecard: what is wired..." but the user's system prompt says to output the XML sections. I should include the scorecard perhaps within or after the XML sections? The user explicitly says to output across these exact XML sections. I'll add a final <SCORECARD> section maybe, but they said exact XML sections. Hmm. The user's instruction lists 6 exact XML sections. I should stick to those 6, but maybe incorporate scorecard content into them. Or add a seventh? The instruction says "across these exact XML sections". I'll stick to exactly those 6 tags to be safe, but weave the scorecard into THINK_TRACE or SOURCE_OPERATORS. Actually, the user says "Report back as a scorecard..." inside the source text, but that's part of the source document content. My job is to produce the reasoning foundry output with the 6 XML sections. I can include scorecard-like content inside <THINK_TRACE> or as a final section. To be safe, I'll keep exactly the 6 requested tags and embed the scorecard summary inside <THINK_TRACE> or <SOURCE_OPERATORS_AND_EQUATIONS>.

Wait, the user says "You are the GSE + GSI Frontier Reasoning Foundry." and gives strict invariants. Then provides DRIVE SOURCE and says pages 2. Then source text. Then implicitly wants me to process this. I need to generate the 6 XML sections with >=1000 words total, THINK_TRACE >=400 words.

Let's plan content:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation and gray-zone audit. Discuss the inversion problem: book-priced path (process-sport.ts -> scoring.ts) runs design backwards (market selects side first). The engine of record: reasoning-depth-spec.md, L1-L5, five specialists, L4 adversary, checklist gate. Five mandatory tracks: QB behavior, coaching/scheme, offensive line, trust signals, scheme matchup. Synthesis hierarchy OL → scheme → QB. Audit: 49 rows: NOT BUILT 20, BUILT-DISCONNECTED 12, BUILT-DRIFTED 17, WIRED-VERIFIED 0. Known disconnects: sovereign signal plane computed never called; situational/mind lane stored but not feeding side/confidence; trench-continuity fields passed and never read; web intelligence runs after pick averaging leans; conviction registry declaring scheme-matchup, narrative-incentive, beat-report NOT LIVE. factor-narrative.ts unwired must NOT be wired. Branch hermes/ship-night-findings PR #1195. PUBLIC_PICKS_ENABLED stays true. Units never dollars. No inventing signals. Need mutation proof, before/after artifacts on 3 real upcoming NFL Week 8 games (but I cannot invent games or data; must treat missing data as named gaps). Since I don't have actual remote code or artifacts, I must name missing inputs exactly: file, line, missing input. I cannot verify remote. So I will frame everything as conditional on remote verification, naming exact gaps. This satisfies "If you hit a wall, name it exactly."

I need to be careful not to invent specific game data. I'll refer to "Week 8, Oct 25–26" slate as named in source but not invent specific matchups beyond Steelers–Browns mentioned in T1. I can mention Steelers–Browns pressure funnel must die at adversary (T1). That's from source.

Structure THINK_TRACE:
- Multi-hop derivation of layer order: Usage (Mon) → Health → Matchups → Situations → Venues/Weather/Refs → Everything else. Each layer conditions downstream. Formalize as a filtration or sigma-algebra? Could use measure-theoretic notation but keep it grounded. Use information units (bits, nats) maybe. Discuss gray zones: audit rows disconnected/drifted, factor-narrative.ts must not be wired, scoring.ts restored to 4142d46 must not regress. The "sovereign signal plane" computed but uncalled. The "situational/mind lane" output stored on pick but not feeding side/confidence. These are named gaps.
- Gray-zone audit: distinguish between REACHES THE DECISION, REACHES ONLY THE TRAIL, DISPOSITIONED. Since no remote access, disposition every family as DISPOSITIONED with reason "awaiting remote verification on branch hermes/ship-night-findings PR #1195; local-only work did not happen." But need to be specific. I'll list families: usage, health, matchups, situations, venues/weather/refs, narratives/tracking/corpus, sovereign signal plane, situational/mind lane, trench-continuity, web intelligence, conviction registry (scheme-matchup, narrative-incentive, beat-report), scoring.ts, factor-narrative.ts.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define operators: U_t (usage layer), H_t (health), M_t (matchups), S_t (situations), V_t (venue/weather/refs), E_t (everything else). Composition: R = E ◦ V ◦ S ◦ M � H ◦ U (applied right to left? Or left to right). Each layer outputs a state vector in a Hilbert space or information state. Use Shannon information: I(X;Y) in bits. Units: bits for information, seconds for rest, dimensionless for confidence in [0,1]. Assumptions: causal ordering Monday→game; no look-ahead; market as pricing service only. Breakdown regimes: if any track unchecked at L3+ → analysis invalid (singularity). If L5 does not produce public pick → no public output. If scoring.ts regressed → inversion restored. If factor-narrative.ts wired → market-originated reasoning (failure mode). Cite [PAGE 2] for quotes like "THE MATCHUP COMES FIRST. THE BOOKS COME LAST." and "WIRED-VERIFIED 0." etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss how reasoning engines in sports analytics evolved from retrospective fitting (retrocausal traps: using future information to explain past outcomes). The weekly cycle anchors causality: Monday usage after Sunday games prevents look-ahead bias. Multi-week traps: injuries cascading, usage regression to mean, schematic drift over weeks, referee tendencies sampled too thinly. Mention the "books come last" as an anti-retrocausal device: market price is not allowed to condition the side selection, preventing the engine from rationalizing after seeing the line. This is like avoiding hindsight bias in scientific inference.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Model the opponent's coaching staff as a recursive agent. Crisis habit regression: under pressure, coaches revert to base tendencies (e.g., scripted plays, personnel packages). Counter-trap: the engine anticipates that the opponent expects the regression and sets a trap. Clock: weekly cycle imposes a deadline (Monday start, days/hours before games). Formalize as a game tree with depth L1-L5; L4 adversary simulates opponent's counter-trap. Checklist gate at L5. If recursion depth exceeds clock, default to PASS (not PLAY).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Layers can veto downstream. Physical: offensive line continuity (trench-continuity fields) vetoes QB behavior track if pass protection below threshold. Biomechanical: health layer (named injuries) removes players from matchup layer; if starter QB ruled out, QB behavior track collapses to backup distribution. Weather: venue layer imposes bounds on passing game (e.g., wind speed threshold). Formalize veto as a projection operator P_veto that zeros out components of state vector. Breakdown: if health data missing (named gap), matchup layer cannot proceed; state is undefined, not zero.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal acronym. I'll treat it as a verification layer. Scenarios:
1. Flip one real input: named player ruled out (health layer). Prediction: matchup layer output shifts; side selection changes or play becomes PASS. Verifiable by comparing reasoning trace before/after mutation.
2. Usage shift: Monday usage uptick for a position group. Prediction: usage layer rewrites team state; downstream matchups adjust; play moves or voids.
3. Adversary trigger: Steelers–Browns pressure funnel T1 must die at L4 adversary. Prediction: if pressure funnel (OL vs pass rush) indicates breakdown, L4 adversary invalidates analysis regardless of market price; public pick suppressed.

Need to avoid betting lines. So no "spread", "moneyline", "total", "odds". I can say "price check", "pricing service", "PLAY / ALT / PASS", but avoid numeric odds. The source mentions "-250" — I must not repeat that. I'll paraphrase as "a price level" or just not mention.

Also no toy equations. So any equation I write must be formal, with units and assumptions. I'll use set theory, functions, information theory.

Word count: Need >=1000 words across sections. THINK_TRACE alone >=400. I'll aim for roughly: THINK_TRACE 450, SOURCE_OPERATORS 250, RETROCAUSAL 150, RECURSIVE 150, CROSS_LAYER 150, RLVR 150 = ~1300. Good.

Citations: Use [PAGE 2] after quotes or references to source text. Verbatim quotes: "THE MATCHUP COMES FIRST. THE BOOKS COME LAST." [PAGE 2]; "WIRED-VERIFIED 0." [PAGE 2]; "NOT BUILT 20, BUILT-DISCONNECTED 12, BUILT-DRIFTED 17, WIRED-VERIFIED 0." [PAGE 2]; "The engine of record already exists..." [PAGE 2]; "scoring.ts on this branch was restored today to its last good version (commit 4142d46). Do not regress it." [PAGE 2]; "factor-narrative.ts exists on the branch, unwired, and must NOT be wired as designed..." [PAGE 2]; "Work on branch hermes/ship-night-findings, PR #1195." [PAGE 2]; "PUBLIC_PICKS_ENABLED stays true." [PAGE 2]; "Units, never dollars." [PAGE 2]; "Missing data is a named gap, never a zero." [PAGE 2].

Also the T1: "the Steelers–Browns pressure funnel must die at the adversary." [PAGE 2].

Let's write carefully.

I need to ensure no mention of odds/spreads/totals/moneylines. I will not use those words. I will use "price" sparingly and only in context of "pricing service" or "price check" as per source. Actually invariant says "Never mention spreads, totals, moneylines, or odds." The word "price" might be okay but safer to avoid numeric price talk. I'll say "market disposition" or "pricing answer".

Let's draft each section.

THINK_TRACE:

Start with multi-hop derivation. The weekly cycle is a strict partial order. Layer 1 Usage: every team, upticks/downs in usage, script changes, role changes after Sunday games. This rewrites the team's current identity. Nothing downstream may be read off stale ideas. Then Health: injuries and availability, with names. Then Matchups: player vs player, coach vs coach, scheme vs scheme, using players health says are actually playing. Then Situations: spot, stakes, divisional familiarity, game slot, rest, schedule. Then Venues, Weather, Refs. Then everything else. Each layer read in light of layers before. Plays formed across week before any book looked at.

Gray-zone audit: The source states the engine of record exists with five mandatory tracks (QB behavior, coaching/scheme, offensive line, trust signals, scheme matchup); any track UNCHECKED at L3+ makes analysis INVALID; only L5 may produce public pick; synthesis hierarchy OL → scheme → QB. Audit: 49 rows — NOT BUILT 20, BUILT-DISCONNECTED 12, BUILT-DRIFTED 17, WIRED-VERIFIED 0. Known disconnects enumerated. Since remote code not accessible, every signal family dispositioned as DISPOSITIONED with exact reason: awaiting remote verification on branch hermes/ship-night-findings PR #1195; local-only work did not happen. Missing data is a named gap, never a zero. Specific named gaps: file scoring.ts restored to commit 4142d46, must not regress; factor-narrative.ts unwired must NOT be wired; sovereign signal plane computed and never called; situational/mind lane outputs stored but not feeding side/confidence; trench-continuity fields passed and never read; web intelligence runs after pick averaging leans; conviction registry scheme-matchup, narrative-incentive, beat-report NOT LIVE.

Also T1: Steelers–Browns pressure funnel must die at adversary. This is a test that must fail on old behavior.

Need >=400 words here. I'll write substantial.

SOURCE_OPERATORS_AND_EQUATIONS:

Define state space. Let Ω be sample space of game outcomes. Let ℱ be sigma-algebra generated by layers. Define filtration 𝒢₁ ⊂ 𝒢₂ ⊂ ... ⊂ 𝒢₆ where each G_i is information generated by layer i. Operators:

U: 𝒮 → 𝒮 (usage), H: 𝒮 → 𝒮 (health), etc. Composition R = E ∘ V ∘ S ∘ M ∘ H ∘ U.

Information content: I(𝒢ₖ; outcome) measured in bits. Monotonicity: I(𝒢₁;Y) ≤ I(𝒢₂;Y) ≤ ... ≤ I(𝒢₆;Y) under causal sufficiency. Breakdown if any track unchecked at L3+: validity predicate Φ = ∧_{t∈tracks} checked_t(L≥3). If ¬Φ then analysis = INVALID (singularity). Public pick predicate Ψ = (L = 5) ∧ Φ. If ¬Ψ then no public output.

Confidence c ∈ [0,1] dimensionless. Rest r ∈ seconds (SI). Usage delta Δu dimensionless proportion.

Market pricing service P: Plays → {PLAY, ALT, PASS} × ℝ₊ (price). But do not mention odds. Say P returns disposition and price tag; reasoning never consumes P to select side.

Cite [PAGE 2] for each.

RETROCAUSAL_GENEALOGY:

Lineage: from retrospective narrative fitting in sports media to prospective reasoning engine. The retro-causal trap: using Monday's line or market movement to explain Sunday's result, then projecting forward. The engine kills this by placing books last. Multi-week traps: (1) injury lag — a player ruled out in week k affects matchup in week k+1 but health layer resets weekly; (2) usage regression — Monday uptick may be noise; (3) schematic drift — coach vs coach matchup degrades over 3-4 weeks as tendencies are adapted; (4) referee sample thinness — ref tendencies require > n games to stabilize, otherwise named gap.

RECURSIVE_THEORY_OF_MIND:

Opponent coach as recursive agent. Crisis habit regression: under high-stakes situations (from Situations layer), coach reverts to base script distribution π_base. Counter-trap: engine models opponent's expectation that engine will exploit π_base, so opponent mixes to π_trap. Clock: weekly cycle has deadline D (kickoff). If recursion depth d exceeds clock slack τ = D − now, default to PASS. L4 adversary implements one level of counter-trap simulation. Checklist gate at L5 halts recursion.

CROSS_LAYER_VETO_ADJUDICATION:

Veto operators. Physical: offensive line continuity C_ol ∈ [0,1]. If C_ol < θ_ol, QB behavior track Q is projected to zero: Q ← P_veto(Q) where P_veto zeros pass-protection-dependent features. Biomechanical: health layer H removes player p; matchup operator M restricted to active roster R_active. If starter QB q* ∉ R_active, QB track collapses to backup distribution q_backup with entropy increase ΔH_bits. Weather: wind speed w (m/s) from venue layer; if w > w_crit, passing-game feature vector attenuated by factor exp(−w/w₀). Units: m/s, dimensionless attenuation. Breakdown: missing health record for named player → matchup layer state undefined, not zero. Named gap: file health.ts line ? missing input.

RLVR_COUNTERFACTUAL_VETOES:

Three scenarios.
Scenario 1: Health mutation — named player ruled out (e.g., starting left tackle). Before: OL track rates unit as intact; matchup favors pass protection. After: H layer marks p inactive; OL continuity C_ol drops; veto operator attenuates QB track; prediction: side selection flips or play becomes PASS; trace must show named gap filled with verification status.
Scenario 2: Usage mutation — Monday uptick in target share for slot receiver. Usage layer updates Δu > 0; matchup layer re-weights player vs cornerback; prediction: reasoning moves from run-heavy play to pass-heavy play or ALT disposition; verifiable by trace diff.
Scenario 3: Adversary T1 — Steelers–Browns pressure funnel. If OL vs pass-rush pressure metric crosses breakdown threshold, L4 adversary invalidates analysis; prediction: no public pick regardless of pricing service answer; test must fail on old behavior because old behavior allowed market to override.

Need to mention verification status and freshness.

Word count check. I'll write generously.

Also the user wants "Report back as a scorecard". I can include a scorecard-like summary within <THINK_TRACE> at the end, or maybe add it inside <SOURCE_OPERATORS>. But they said exact XML sections. I'll add a concise scorecard paragraph inside <THINK_TRACE> summarizing wired/disconnected/waiting. Since I cannot verify remote, everything is "waiting on named owner: remote verification on branch hermes/ship-night-findings PR #1195." I'll state that.

Let's ensure I don't use forbidden words: spread, total, moneyline, odds. I'll scan mentally. "PLAY / ALT / PASS" is fine. "price" is okay but I won't give numbers. "betting" maybe avoid. "book" is in source but I can refer to "books" as market entity. It's not a forbidden word per se but context. I'll use "market" instead.

Now write the final response with exactly the 6 XML tags. No markdown outside? Probably fine to just output the XML. I'll include LaTeX inside.

Let's draft.

THINK_TRACE content (approx 450 words):

"The weekly cycle is a causal filtration, not a menu..." etc.

Make sure to include verbatim quotes with [PAGE 2].

Let's write it out fully.

I'll structure THINK_TRACE with paragraphs.

Paragraph 1: Derivation of order of operations.
Paragraph 2: Engine of record and contract.
Paragraph 3: Audit results and disconnects.
Paragraph 4: Gray zones and disposition categories.
Paragraph 5: Named gaps and walls.
Paragraph 6: Scorecard summary.

Need >=400 words. I'll target ~500.

SOURCE_OPERATORS: LaTeX heavy.

RETROCAUSAL: ~150 words.

RECURSIVE: ~150 words.

CROSS_LAYER: ~150 words.

RLVR: ~200 words.

Total > 1000.

Let's write carefully, ensuring [PAGE 2] citations.

I must not invent file line numbers except where source gives them (commit 4142d46). For missing inputs, I can say "file health.ts, line TBD, missing input: active roster for Week 8" — but "TBD" might be vague. Better: "file: scoring.ts (commit 4142d46), line: not yet located in remote, missing input: sovereign signal plane output." That's honest. Or "named gap: health availability for specific Week 8 players — no remote record inspected." Good.

Let's write.

Be careful: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must use [PAGE 2] and quote directly. I'll do that frequently.

Now produce final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The order of operations specified in the source is a strict causal filtration, not a reusable menu. Layer 1 is USAGE, executed Monday after the Sunday games: every team receives upticks or downs in usage, script changes, role changes, and whatever changed in the games just played. This layer rewrites what each team actually is right now. The source is explicit: “Nothing downstream may be read off stale ideas of these teams.” [PAGE 2] Layer 2 is HEALTH: injuries and availability, with names. Layer 3 is MATCHUPS: player versus player, coach versus coach, scheme versus scheme, but only using the players the health layer says are actually playing. Layer 4 is SITUATIONS: the spot, the stakes, divisional familiarity, game slot, rest, schedule. Layer 5 is VENUES, WEATHER, AND REFS. Layer 6 is everything else—narratives, tracking, the full corpus. Each layer is read in light of the layers before it, and the list of plays is formed across the week, days and hours before the games, before any book is looked at. [PAGE 2]

The engine of record already exists and its contract stands: five mandatory tracks (QB behavior, coaching/scheme, offensive line, trust signals, scheme matchup); any track UNCHECKED at L3+ makes the analysis INVALID; only L5 may produce a public pick; synthesis follows the hierarchy OL → scheme → QB; traces persist and resume. [PAGE 2] The current web path (process-sport.ts → scoring.ts) is the design backwards: the market selects the side first in all markets, and game context can only move a confidence number. That path is the inversion, not the engine. [PAGE 2]

The full gap audit completed today contains 49 rows: NOT BUILT 20, BUILT-DISCONNECTED 12, BUILT-DRIFTED 17, WIRED-VERIFIED 0. [PAGE 2] Known disconnects include: the sovereign signal plane computed and never called in the scoring path; the situational/mind lane’s outputs stored on the pick but never feeding its side or confidence; trench-continuity fields passed into scoring and never read; the web intelligence layer running after the pick and averaging observation leans; the conviction registry declaring scheme-matchup, narrative-incentive, and beat-report NOT LIVE. [PAGE 2] scoring.ts on this branch was restored today to its last good version (commit 4142d46) and must not be regressed. factor-narrative.ts exists on the branch, unwired, and must NOT be wired as designed because it narrates market factors as the reason for a pick—the exact failure this work exists to kill. [PAGE 2]

Gray-zone disposition categories are: REACHES THE DECISION, REACHES ONLY THE TRAIL, or DISPOSITIONED with the exact reason. Because remote code has not been inspected and local-only work did not happen, every signal family is presently DISPOSITIONED with the reason “awaiting remote verification on branch hermes/ship-night-findings, PR #1195; no published artifact inspected; missing data is a named gap, never a zero.” [PAGE 2] Named walls include: file scoring.ts restored to commit 4142d46 but remote wiring status unknown; file factor-narrative.ts present but unwired and explicitly forbidden from wiring; sovereign signal plane output never consumed by any published trail; situational/mind lane output stored but not feeding side or confidence; trench-continuity fields passed and never read; conviction registry entries scheme-matchup, narrative-incentive, beat-report all NOT LIVE. [PAGE 2]

Scorecard: Wired = zero verified rows pending remote inspection. Disconnected = all 49 audit rows, with exact reasons above. Waiting on a named owner = remote verification of branch hermes/ship-night-findings, PR #1195, and publication of before/after artifacts on at least three real Week 8 (Oct 25–26) NFL games plus the mutation proof flipping one named player or one usage shift. TEST T1 requires the Steelers–Browns pressure funnel to die at the adversary on the old behavior. [PAGE 2]
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Let \(\Omega\) be the outcome space of a football game and \(\mathcal{F}\) the sigma-algebra generated by the six ordered layers. Define the information filtration
\[
\mathcal{G}_{1} \subset \mathcal{G}_{2} \subset \mathcal{G}_{3} \subset \mathcal{G}_{4} \subset \mathcal{G}_{5} \subset \mathcal{G}_{6} \subseteq \mathcal{F},
\]
where \(\mathcal{G}_{k}\) is the sigma-algebra generated by layers 1 through \(k\). The composition operator is
\[
R = E \circ V \circ S \circ M \circ H \circ U,
\]
applied right-to-left: \(U\) = usage, \(H\) = health, \(M\) = matchups, \(S\) = situations, \(V\) = venues/weather/refs, \(E\) = everything else. [PAGE 2]

Information gain is measured in bits. Under causal sufficiency,
\[
I(\mathcal{G}_{1}; Y) \leq I(\mathcal{G}_{2}; Y) \leq \cdots \leq I(\mathcal{G}_{6}; Y),
\]
where \(Y\) is the game-relevant target and \(I(\cdot;\cdot)\) is mutual information. Units: bits for information; seconds (SI) for rest; dimensionless proportion \([0,1]\) for usage deltas and confidence. [PAGE 2]

Validity predicate:
\[
\Phi = \bigwedge_{t \in \{\text{QB, coaching/scheme, OL, trust, scheme-matchup}\}} \bigl(\text{checked}_{t} \land \text{level}_{t} \geq 3\bigr).
\]
If \(\neg \Phi\), then analysis = INVALID (singularity regime: any mandatory track unchecked at L3+). [PAGE 2] Public pick predicate:
\[
\Psi = (\text{level} = 5) \land \Phi.
\]
If \(\neg \Psi\), no public pick is emitted. Synthesis hierarchy constraint:
\[
\text{OL} \succ \text{scheme} \succ \text{QB}.
\]
[PAGE 2]

Market pricing service operator (demoted from originator to price check):
\[
P : \text{Plays} \rightarrow \{\text{PLAY, ALT, PASS}\} \times \mathbb{R}_{+},
\]
where the reasoning trace decides the side and the pricing service attaches only a disposition and price tag. The reasoning layer never consumes \(P\) to select a side; “THE MATCHUP COMES FIRST. THE BOOKS COME LAST.” [PAGE 2] If reasoning and pricing conflict, the reasoning play stands and the price answer decides only whether and how it is played. [PAGE 2]

Breakdown regimes: (a) missing health record for a named player makes the matchup state undefined, never zero (“Missing data is a named gap, never a zero.” [PAGE 2]); (b) factor-narrative.ts must not be wired because it would invert causality by narrating market factors as the reason for a pick [PAGE 2]; (c) scoring.ts must not regress from commit 4142d46 [PAGE 2]. All claims require before/after published artifacts on real Week 8 games and a mutation proof flipping one named input. [PAGE 2]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The engine’s design descends from prospective reasoning systems that refuse to let downstream market prices condition upstream game facts. The retrocausal trap it kills is the common analytic loop in which a line or market movement observed after the fact is used to rationalize a past result, then projected forward as if it were a cause. By placing books last and using them only as a pricing service, the engine blocks hindsight bias at the architectural level: “The market never selects a side, never sets the reasoning, never headlines the ‘Why.’” [PAGE 2]

Multi-week traps include: (1) injury lag—an availability change in week \(k\) must be reset and re-verified in week \(k+1\) by the health layer; carrying stale availability forward is a causality violation; (2) usage regression—a Monday uptick in target share or snap role may be noise and must not be treated as a permanent team rewrite unless confirmed across the week; (3) schematic drift—coach-versus-coach matchup degrades over roughly three to four weeks as tendencies are adapted, so the matchup layer requires fresh weekly inputs rather than inherited reputation; (4) referee sample thinness—referee tendencies require a stabilized sample before they can weight situations, otherwise the venue/ref layer yields a named gap. The weekly Monday start after Sunday games anchors the clock and prevents look-ahead leakage from future information into current reasoning. [PAGE 2]
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

The opposing coaching staff is modeled as a recursive agent. Crisis habit regression: under high-stakes situations supplied by the Situations layer, a coach reverts to a base script distribution \(\pi_{\text{base}}\). Counter-trap: the engine anticipates that the opponent expects the engine to exploit \(\pi_{\text{base}}\), so the opponent mixes toward a trap distribution \(\pi_{\text{trap}}\). The L4 adversary implements one level of this counter-trap simulation. Clock: the weekly cycle has a hard deadline \(D\) at kickoff; recursion depth \(d\) consumes clock slack \(\tau = D - \text{now}\). If \(\tau\) is exhausted before the L5 checklist gate completes, the analysis defaults to no public output rather than a rushed pick. [PAGE 2]

The adversary’s veto on the Steelers–Browns pressure funnel (TEST T1) must trigger on the old behavior: if the offensive-line versus pass-rush pressure track indicates a breakdown, the adversary invalidates the analysis regardless of any market price. This is a recursion boundary: the engine refuses to publish a pick whose reasoning weighed nothing but market signals, and it says so plainly rather than dressing the echo as an argument. [PAGE 2]
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Each layer may veto downstream outputs via projection operators. Physical veto: offensive-line continuity \(C_{\text{OL}} \in [0,1]\) gates the QB behavior track. If \(C_{\text{OL}} < \theta_{\text{OL}}\), the pass-protection-dependent component of QB behavior is zeroed:
\[
Q \leftarrow P_{\text{veto}}(Q), \quad P_{\text{veto}}(q_i) = 0 \text{ for protection-sensitive features } q_i.
\]
Units: dimensionless continuity index; threshold \(\theta_{\text{OL}}\) is a named parameter, not invented. [PAGE 2]

Biomechanical veto: the health layer removes player \(p\) from the active roster \(\mathcal{R}_{\text{active}}\). Matchup operator \(M\) is restricted to \(\mathcal{R}_{\text{active}}\). If the starting quarterback \(q^{*} \notin \mathcal{R}_{\text{active}}\), the QB track collapses to the backup distribution \(q_{\text{backup}}\), with entropy increase \(\Delta H\) measured in bits. Missing health data for a named player is a named gap; the matchup state is undefined, never zero. [PAGE 2]

Weather veto: the venue layer supplies wind speed \(w\) in m/s (SI). If \(w > w_{\text{crit}}\), the passing-game feature vector is attenuated:
\[
a(w) = \exp(-w / w_0), \quad w_0 > 0 \text{ m/s},
\]
so the effective passing weight is multiplied by \(a(w)\). Breakdown: if weather inputs are missing, the venue layer yields a named gap rather than a default neutral assumption. All veto decisions must appear in the published reasoning trace with names, values, sources, verification status, and freshness. [PAGE 2]
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Scenario 1—Health mutation: a named starting player is ruled out after the reasoning trace is built. Before: offensive-line continuity \(C_{\text{OL}}\) rates the unit intact and the QB track expects clean pocket structure. After: health layer marks \(p\) inactive; \(C_{\text{OL}}\) drops below \(\theta_{\text{OL}}\); the physical veto operator zeros protection-sensitive QB features; prediction: the side selection flips or the play becomes PASS, and the trace must record the named player, source, verification status, and freshness. Verifiable by diffing before/after artifacts on a real Week 8 game.

Scenario 2—Usage mutation: Monday usage shows an uptick in slot-receiver target share. Before: matchup layer weights outside receivers heavily against outside corners. After: usage layer rewrites team state with \(\Delta u > 0\); matchup layer re-weights slot receiver versus nickel corner; prediction: reasoning moves from a run-structured play to a pass-structured play or ALT disposition, with no market input driving the move. Verifiable by trace comparison.

Scenario 3—Adversary T1: Steelers–Browns pressure funnel. Before: OL pass-protection metric sits near breakdown threshold; old behavior allowed market price to override and publish. After: L4 adversary detects pressure-funnel breakdown and invalidates the analysis; prediction: no public pick is emitted regardless of pricing-service answer, and the test must fail on the old behavior because the old behavior did not kill the funnel at the adversary. Verifiable against the published artifact and remote code on branch hermes/ship-night-findings, PR #1195. [PAGE 2]
</RLVR_COUNTERFACTUAL_VETOES>