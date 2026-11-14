---
source: "10_26_26 Agent Log (4) - Copy"
folder: "/CorpusRoot"
pages: 65
model: deepseek/deepseek-v4.1-flash-1017
words: 9513
---

<NATIVE_REASONING>
The user asks for a detailed plan to build the coach simulation and an explanation of the inverse-MDP fourth-down module. The system prompt demands a specific XML-structured report with ≥1000 words, sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Zero betting lines (no spreads/totals/moneylines/odds mentioned as such — careful: the source is full of betting lines. I must NOT mention spreads, totals, moneylines, or odds. That's a hard invariant. So I must avoid words like "spread", "moneyline", "totals" as betting concepts. Hmm — but "spread" in statistics ("distribution spread") is fine? Risky. Better to avoid the betting senses entirely. I can discuss the simulator generating score distributions and pace, without referencing market lines. I should avoid "Pinnacle/DraftKings" market numbers. I can cite page markers — the source has pages 65 but no [PAGE N] markers embedded in the text provided. The instructions say "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source text doesn't include page markers. I should note page coverage but I can cite verbatim quotes from the document. I'll cite quotes and note that the drive provides 65 pages without inline [PAGE N] markers, so I cite by section heading + verbatim quote rather than fabricating page numbers. That's the honest approach — fabricating [PAGE 12] would violate the "do not invent" spirit. Actually invariant 2 says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I can provide citations to the drive as [DRIVE: 65 pp] and section references, plus verbatim quotes. I'll include a note.

Content requirements:

1. Detailed plan to build the coach simulation (play-by-play simulator): state-conditioned transition lookup from pbp, coach decision distributions, Monte Carlo loop, injury dropoff application, outputs (median score, distribution, pace), public-splits residual as post-hoc diagnostic only (and NOT to write back). But careful: "public splits" — is that a betting line? Public betting percentages — mentioning them is describing a residual check. Invariant says never mention spreads, totals, moneylines, or odds. Public splits percentages are not in that list, but they're betting-adjacent. The task asks to apply crowd residual. I can describe it as "crowd-position residual flag" without naming lines/odds. I'll keep it abstract: "public-betting fraction flag" — hmm, that mentions betting. The invariant specifically lists spreads, totals, moneylines, odds. Public ticket percentages are not those. I'll refer to "crowd-side residual flag (ticket-share fraction)" — that's fine, it's a probability/fraction, and I'll express it mathematically. I'll avoid quoting the actual market numbers from the source (e.g., "PIT −4"). I'll refer to games by team names without line values. Actually safer: avoid enumerating specific game lines entirely. I can mention "the Cleveland–Pittsburgh game" and say "the crowd-side residual flag" without a number. Hmm, the doc's numbers are line values. I'll use only the residual fractions (61%, 74%) which are ticket shares, and describe the re-ranking as a residual flag. That seems acceptable — but is a ticket-percentage "odds"? No.

Actually, let me be careful and maybe minimize: describe the residual mechanism formally as r_g = f(π_ticket, ...) and note it's diagnostic-only and never mutates the seal. That satisfies task 5 and 6 without quoting lines.

2. Explain inverse-MDP fourth-down module: what it is. Formal: forward MDP defines optimal policy π* maximizing expected value; coach observed policy π_coach; inverse RL recovers reward or risk-preference parameter τ such that the observed policy is optimal/soft-optimal under entropy-regularized objective. τ = risk preference in the utility, e.g., R_τ = V - τ·Risk, or τ as the inverse temperature in a Boltzmann/quantal-response policy: P(go) ∝ exp(Q/τ). Recovered τ = 0.42 pre-seal from 2018–2026 4th-down decisions; frozen in hash; mid-week may not re-estimate. Cite Sandholtz et al. 2309.00756 from the source (quoted). Provide LaTeX with units: τ dimensionless (risk-aversion coefficient, units of utility per unit of value variance), or if Boltzmann, τ in EPA units (expected points). Must state singularity/breakdown regimes: τ→0 = risk-neutral/argmax (policy degenerates to deterministic, recovery ill-posed since likelihood becomes a step function → log-likelihood unbounded / grad → 0/0); τ→∞ = uniform random policy, posterior flat, τ unidentifiable (Fisher information → 0); identifiability requires variation in Q across states (if Q differences >> τ or << τ, information collapses); non-stationarity across coaches means a single scalar τ is a population summary, mixture models break; state-space coverage gaps → empty cells → shrinkage needed.

Also cover: Bellman equation, Q-values from sealed EPA surface, soft-Bellman / max-entropy IRL (Ziebart), risk-sensitive (exponential utility) form. Give both forms and say the sealed implementation recovers τ=0.42 as a scalar summary of 4th-down decisions.

Breakdown regimes:
- τ → 0⁺: ∇_τ ℓ ~ O(1/τ²) → numerical overflow; softmax saturates; use log-sum-exp.
- τ → ∞: Fisher information I(τ) → 0, identifiability fails; standard error diverges as τ/√n.
- Q-tie states (Q_go ≈ Q_punt): policy insensitive to τ → zero information; need states with |ΔQ| ~ τ.
- Non-stationarity: rule changes (2018 kickoff? actually the 4th-down analytics era), roster/coach changes → τ drifts; frozen post-seal so drift is a bias not an error.
- Sparse cells: shrunk to league mean with k=40-type shrinkage (from soul profiles). 

3. Plan to build the simulator with concrete architecture, file layout, function signatures, pseudocode, tests, acceptance criteria. Must be runnable-ish code: loader that reads sealed object without re-seal (hash verify, read-only), transition table builder, coach policy surface, Monte Carlo loop, injury overlay multiplicative EPA dropoff, outputs, residual flag, import-graph audit.

I should not fabricate file paths as existing. The source says /opt/model/sealed_engine.py, sealed_baseline.json, /opt/model/data/pbp_2026.parquet. Those are documented. I can write loader code against a documented schema but must flag that key names are unverified — good, that's the honest "record the blocker, do not fabricate" requirement.

4. Requirement 7: identify modules that claim to implement a paper but are generic baselines. From the source: the sweep notes; also "engine_reverse.py" etc. Genuine candidates: 
- `2309-00756-inverse-mdp-fourth-down.ts` — claimed Sandholtz inverse-MDP; actual body per source is a scalar τ freeze with no re-estimation, and the local repo has no such file (Sep-18 snapshot). So: claimed paper implementation, actual body = unverified/absent → generic baseline risk.
- EB-BTL `1807-09236-empirical-bayes-btl.ts` — claimed Morris parametric EB; actual: shrinkage constant only.
- `sinkhorn-targets.ts` — Cuturi 2013 Lemma 2 claim; actual: fixed-ε Sinkhorn without annealing/certificate (from sweep: annealed Sinkhorn would be an upgrade, implying current is fixed-ε generic).
- Hawkes steam detector — no paper; synthetic only.
- CQR — claimed CQR but empirical 0.857 coverage; thin sample.
- Pass-blocking HMM — claimed 2609.33664 but human gate open.
- Bradley-Terry pass-rush — claimed BT but equal-exposure defect (paper 2604.01491 fixes it) → generic BT, not opponent-adjusted.
- DC/copula prop layer — claimed Dixon-Coles; τ(0,0)=1.257 suggests actual implementation exists.
- pinhole-jacobian.ts — TS errors, likely placeholder.
I'll list these as audit targets with the *reason* they're suspect, explicitly marking that file bodies were not readable in the Sep-18 checkout (documented in the source: "None of these files exist in it").

5. Cross-layer veto adjudication: physical/biomechanical/weather veto. Weather: wind −0.0285 EPA/10mph quoted; temperature non-monotone; officials 16% crew flag spread; drive value curve; QB replacement per-player −1.31 to +0.81. Veto rules: if wind > threshold the pass-rate transition must be re-conditioned (but that's a re-estimation? No — it's a conditioning variable already measured, applied multiplicatively as a pre-sealed parameter... careful: the invariant says mid-week may only reallocate weights via Sinkhorn and multiply by pre-sealed dropoff factors. Weather conditioning is a state input, not a re-estimation, provided the slope was sealed. I'll say: seal the wind slope; conditioning on realized wind is a state input, not a parameter change.) Biomechanical: QB dropback mechanics, pass-rush leverage, snap-timing — veto if the injury overlay's player-level replacement isn't in the sealed table (fall back to position constant 0.0947 → that's an approximation with a measured bias).

6. RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. Must be checkable. E.g.:
- Veto 1: τ re-estimation detector. Counterfactual: run mid-week module with a perturbation that would re-fit τ; prediction: hash unchanged and τ reads 0.42; a deliberately injected `estimate_tau()` call must raise. Verifiable via digest equality.
- Veto 2: market-import contamination: static import-graph audit; prediction: zero edges from market modules into transition table/coach surface/EPA table; inject a fake import and the audit must fail (proves the test has teeth).
- Veto 3: Sinkhorn mass conservation: L1 marginal error < 1e-9 and total mass equality; counterfactual: drop a player flag and confirm share mass returns exactly; prediction: hash unchanged, mass 1.989 as documented for week 7.
- Veto 4 maybe: canonical serialization golden digest across Python/TS.
Each with prediction and failure criterion.

Also THINK_TRACE ≥400 words of multi-hop derivation and gray-zone audit.

Word count ≥1000 total across sections; I'll write substantially more (~2500-3500 words).

Let me handle "zero betting lines" strictly. I will not write "spread", "total", "moneyline", "odds" in the betting sense. Hmm, "total" appears as "total plays" and "median total" (points scored) — the task itself says "Output median total, spread, and pace." That's the task's language. But invariant 1 forbids betting lines. I can interpret "median total" as total points scored (a simulation output, not a line) and "spread" as score differential. To be safe, I'll rename outputs: "median points scored (both teams)", "score differential distribution", "pace (plays per game)". And I'll explicitly note I'm reporting simulation outputs, not quoted market numbers. I think that's the right call: I'll use "score differential" instead of "spread" to avoid the word entirely. Also avoid "odds", "moneyline", "total" as market nouns. I'll use "points scored" instead of "total".

Careful with "de-vig" — that's odds-related. I'll avoid or mention only as a prohibited import (the invariant says market numbers never enter; I can say "market-derived quantities are excluded" without naming). Actually I should probably avoid the word "vig" entirely. Let me just refer to "market-derived quantities."

But task 6 asks to confirm zero market/splits imports — I need to name the excluded modules. I can say "market-feed modules" generically.

Public splits: I'll call it "crowd ticket-share residual." Ticket share is a fraction. I'll use symbols π_crowd. I think that's OK — it's not a line. I'll be careful to state the residual never writes back.

Now the structure. Let me write.

Sections:

<THINK_TRACE> — ≥400 words. Multi-hop derivation: from seal invariant → what the simulator can legally consume → why transition lookup is a conditioning object not an estimation → why coach policy slice is a lookup with pre-sealed shrinkage → why τ is scalar summary and cannot be re-fit → Monte Carlo identifiability → variance budget → why the crowd residual must be last and non-mutating. Gray-zone audit: what counts as "re-estimation" vs "conditioning"; the empty-cell problem; the distinction between the sealed EPA dropoff (multiplicative) and re-derived EPA; the cross-language hash risk.

<SOURCE_OPERATORS_AND_EQUATIONS> — LaTeX: seal digest definition (SHA-256 over canonical JSON), transition table estimator with shrinkage, soft-Bellman/inverse-MDP τ with Boltzmann + risk-sensitive exponential utility, Fisher information for τ, Sinkhorn updates, Monte Carlo estimator with variance, EPA dropoff multiplication, conformal quantile, wind slope, drive value curve. Units for each. Breakdown regimes enumerated. Verbatim quotes with citations.

<RETROCAUSAL_GENEALOGY> — lineage: Bellman 1957 → Ziebart 2008 MaxEnt IRL → Sandholtz 2023/2024 (2309.00756) → sealed τ=0.42; Cuturi 2013 → Sinkhorn 1964/1967 → Peyré & Cuturi 2019 → annealed Sinkhorn 2026 (2609.33814); Morris 1983 → Yurko 2019 nflWAR → EB-BTL 1807.09236; Lei et al. 2018 → Barber 2021/2023 → Angelopoulos & Bates → DDCI 2610.26987. Multi-week traps: rule changes, coach turnover, τ drift, exchangeability violation in weekly conformal, entropic blur in fixed-ε Sinkhorn, prior leakage in EB.

<RECURSIVE_THEORY_OF_MIND> — coach as an agent modeling the opponent modeling him; crisis habit regression: under high leverage coaches revert to habit (panic axis: Sirianni +7.82 vs McDermott −5.51, 13.3 pp); counter-trap: if the market/simulator expects regression to habit, a coach who deviates is exploitable but only within the sealed decision distribution; clock: tempo, timeout burn, 40-second clock, drive length. The recursive part: the simulator's policy must be the coach's belief-conditioned policy, not the optimal one; second-order: opponent's adjustment to your tendency.

<CROSS_LAYER_VETO_ADJUDICATION> — physical/biomechanical/weather veto proof: wind monotone tax, temp non-monotone, officials crew spread 16%, drive value 3.2×, QB replacement per-player 2.1 EPA spread. Veto ordering and hard rules: which layers may veto an output and which are advisory.

<RLVR_COUNTERFACTUAL_VETOES> — 3 (or 4) scenarios with predictions and pass/fail.

Also need: the detailed plan (deliverable) and the inverse-MDP explanation. I'll fold the plan into SOURCE_OPERATORS (with code blocks) and a dedicated subsection. The XML sections are fixed but I can add subsections inside them. The output must be a single markdown report with (a)-(e). I'll put (a)-(e) inside the XML sections appropriately, maybe add a preamble and a "DELIVERABLE" area inside SOURCE_OPERATORS_AND_EQUATIONS. Actually the required sections are exact XML sections; I can add content within them. I'll add a short preamble outside? The instruction says ">= 1,000-WORD DEPTH across these exact XML sections" — so all sections must exist. A brief preamble is probably fine but let me keep it minimal or put everything inside. I'll include a short header block before the XML (title + page-citation note), which is fine.

Let me write the code.

Loader:

```python
# /opt/model/sim/load_sealed.py
import hashlib, json, pathlib, sys

SEALED = pathlib.Path("/opt/model/sealed_baseline.json")

def canonical(obj) -> bytes:
    return json.dumps(obj, sort_keys=True, separators=(",", ":")).encode()

def load_sealed(path=SEALED):
    raw = path.read_bytes()
    doc = json.loads(raw)
    expected = doc["coachMindsetHash"]          # name per drive
    body = {k: v for k, v in doc.items() if k != "coachMindsetHash"}
    got = hashlib.sha256(canonical(body)).hexdigest()
    if got != expected:
        raise SystemExit(f"[fail] seal mismatch: recomputed {got[:16]} != {expected[:16]}")
    return ReadOnly(doc)
```

Wait — the drive says the hash is over a canonical form; exact field layout unverified. I must flag that: "the field names below are the ones the drive names (coachMindsetHash, C, τ, EPA dropoff table); the exclusion set for the digest body is unverified — the loader must be reconciled against sealed_engine.py's own canonicalisation, and the golden-digest test is the check."

ReadOnly wrapper: prevents mutation, returns deep-frozen copies. Use `types.MappingProxyType` recursively or a frozen dataclass; simpler: return the dict and assert read-only by never writing, plus a `verify_unchanged()` that re-hashes at exit. I'll do: load → hash → run sim → re-hash file bytes at end and assert identical. That's the "no re-seal" proof.

Transition table:

For state s = (down d, distance bucket b, field zone z, score differential bucket g, personnel p), estimate P(next state s' | s) empirically from pbp with Dirichlet/EB shrinkage toward the league marginal:

p̂(s'|s) = (n(s,s') + κ·m(s')) / (n(s) + κ)

where m(s') is the shrunk league conditional (backoff: s→(d,b,z)→(d,b)→d→league). Units: n is a count (dimensionless integer), κ is a pseudo-count with units of plays. Kelly/James-Stein style. This is the standard hierarchical backoff. Cite Morris 1983 for parametric EB, and the drive's "same shrinkage already used for BTL ratings."

Coach surface: decision probabilities at 4th down from τ:

P(go | s) = exp(Q_go(s)/τ) / Σ_a exp(Q_a(s)/τ) — Boltzmann/quantal response with τ in EPA units. Or risk-sensitive form:

Q_τ(s,a) = Q(s,a) − τ·Var(s,a) or exponential utility U_τ(x) = (1 − e^{−x/τ}) scaled.

Inverse: τ̂ = argmax_τ Σ log P(a_i | s_i; τ). Gradient: ∂ℓ/∂τ = Σ_i [ (1/τ²)( Q(a_i) − Σ_a P(a)Q(a) ) ]. Fisher info I(τ) = (1/τ⁴) Var_s[Var_a(Q)] roughly. Actually for softmax with temperature τ, ∂ log p/∂τ = (Q_a − E[Q])/τ². So Fisher: E[(∂ℓ/∂τ)²] = (1/τ⁴) E[Var_a(Q)]? Let's check: for one observation, score = (Q_a − Q̄)/τ², E over a of score² = Var_a(Q)/τ⁴. Sum over n states → I(τ) = n·E_s[Var_a(Q)]/τ⁴. So SE(τ̂) ≈ τ²/√(n·E[Var_a Q]). That's a clean derivable result — good, use it. Breakdown: if E_s[Var_a(Q)] → 0 (states with Q-ties), SE → ∞. If τ → 0, SE → 0 formally but the linearization fails and policy becomes deterministic → likelihood is a step function → gradient zero a.e. → τ unidentifiable from a deterministic policy (only ordering information). Good singularity statement.

Also exponential-risk utility form: maximize E[U] with U(x) = −exp(−x/τ), τ>0 risk tolerance in EPA units; τ→∞ risk-neutral; τ→0 maximin. That's the classic Arrow-Pratt absolute risk aversion A(x) = 1/τ, units 1/EPA.

Monte Carlo:

- N=100,000 sims per game (report variance; MC standard error = σ/√N; for a score differential with σ≈13.5 points, SE ≈ 0.043 points at N=100k — good number to state; and for a median, SE ≈ 1.253σ/√N ≈ 0.054).
- Step: given state, sample next-state transition, sample EPA increment, accumulate clock, check absorbing state (score change, possession change, end of half).
- Injury overlay: multiply the affected unit's expected EPA by (1 − δ) where δ ∈ sealed dropoff table; δ_QB_Q = 0.0947.
- Record: final scores, plays count, pace = plays/60 min.

Variance budget: state-sampling variance, parameter (sealed, fixed) zero, MC error, and model-form error (unquantified — the honest gap).

Outputs: median points for each team, differential distribution quantiles, pace median, and a "conformal residual" only as diagnostic against realized outcomes later — not against market.

Crowd residual: r_g = π_crowd,side − 0.5; rank shift applied after sim; explicitly a display-layer function `apply_crowd_residual(edges, splits)` returning a new frame; assert sealed object bytes unchanged before/after.

Import audit: `python -m sim.audit_imports` walking the AST of every module in sim/ and asserting no import of market/crowd modules; plus a runtime sentinel: monkeypatch/`sys.modules` guard that raises on import of forbidden modules inside the sim process.

Now the modules-that-claim-a-paper list (task 7). Present as a table with claimed paper / actual body / verdict / risk. Mark that bodies were not readable in the Sep-18 checkout (verbatim from source: "the local repo snapshot does **not** contain the TS modules named in the tables"). So this is a *hypothesis list to audit*, not a finding. That's the honest framing and satisfies "do not fabricate."

Also blockers section: 
- Sealed baseline field names/CC C layout unverified.
- pbp parquet schema: the drive lists pbp_2026.parquet with 18,561 plays weeks 1–7 — but the plan needs 2018–2026; the drive only documents 2024–2026 pulls (injuries_2024/2025.csv) and pbp_2026. So the multi-season pbp is a blocker. Task says "2018–2026 pbp parquet" — must flag that only 2026 pbp is documented at /opt/model/data/. Do not fabricate. Good catch — this is a real blocker to state.
- Personnel field: drive says "Personnel packages are not in the current parquet — the identity layer is missing its strongest axis (11 vs 12 personnel entropy)." Verbatim quote. So the personnel conditioning variable in the state is unavailable → must either drop personnel from the state vector or use a proxy (n_offense_players? not present). Flag it.
- Coach labels: "home_coach/away_coach; interim tags and mid-season changes will smear a season."
- Cross-language canonicalization.
- No `coachMindsetHash` in the local checkout (verbatim: "`rg coachMindsetHash` and `rg PROB_PER_POINT` return **zero hits** repo-wide").

These are excellent, verifiable, non-fabricated blockers grounded in the source. 

Now the "detailed plan" — phases? The constraint says "Do not propose multi-week phases." So express the plan as a build order (steps S1–S9) within one execution cycle, not week-phased. Good.

Let me now write with attention to word count and quality. I'll aim ~3000 words.

Citations: I'll use `[DRIVE §…]` and verbatim quotes. Since no [PAGE N] markers exist in the supplied text, I'll state that up front.

Let me draft the key verbatim quotes I'll use:
- "All projections, rankings, fourth-down policies, and positional value tables originate from a bottom-up Belichick-Adams Coach-First simulation locked every Tuesday at 04:00 CT (v1.0)."
- "At seal, the engine serializes team ratings, scheme interchangeability cost matrix CCC, inverse-MDP fourth-down risk preference τ\tauτ, and the Sealed EPA Dropoff Table into a 64-character SHA-256 digest (coachMindsetHash)."
- "Mid-week injury versions (v2.0–v4.0) may only reallocate execution weights via entropy-regularized Sinkhorn-Knopp optimal transport and multiply by pre-sealed EPA dropoff factors."
- "External market numbers have zero causal influence and never enter the baseline."
- "The residual flag is diagnostic; it does not mutate ratings, τ\tauτ, CCC, the EPA table, or the hash."
- "Sandholtz et al. (2023/2024) — Inverse-MDP fourth-down τ\tauτ"
- "Personnel packages are not in the current parquet — the identity layer is missing its strongest axis (11 vs 12 personnel entropy)."
- "the local repo snapshot does **not** contain the TS modules named in the tables"
- "`rg coachMindsetHash` and `rg PROB_PER_POINT` return **zero hits** repo-wide."
- "seal(): refuses a second seal in the same ISO week" — actual quote: "`seal()` refuses a second seal in the same ISO week — the lock is real, not decorative."
- "Wind −0.0285 EPA per 10 mph", "Temperature is NOT monotone"
- "panic spread 13.3 pp", "Sirianni +7.82 vs McDermott −5.51"
- "QB_QUESTIONABLE = 0.095 EV-weighted (0.116 conditional)"
- "P(start | QB1 Questionable) = 0.341 (15 of 44)"
- "0.341 × 0.1159 + 0.659 × 0.0838 = 0.0947"
- "the 0.048 candidate is ~half the measured effect"
- "Lei et al. (2018) — Split conformal, Theorems 1–2"
- "Cuturi (2013) — Sinkhorn distances, Lemma 2"
- "Morris (1983) — Parametric Empirical Bayes"
- "Yurko et al. (2019) — nflWAR"
- "no successor to 2309.00756"
- "zero arXiv papers using the literal string 'de-vig'" — contains "de-vig" which is odds terminology. Skip that quote. Also avoid "spread" quotes.

Careful: The drive quote "External market numbers have zero causal influence" is fine.

Also "Sealed EPA Dropoff Table (including QB_QUESTIONABLE EV-weighted factor 0.0947)".

Now write.

For the THINK_TRACE, must be ≥400 words. I'll do ~600.

Let me write the actual content now, carefully.

One more: "median total, spread, and pace" from the task — I'll output "median points (home, away, combined)", "score-differential quantiles", "pace (plays per 60 min)". Good.

Also I should mention Sinkhorn-Knopp updates formally:

Given cost matrix C (sealed), marginals r, c, entropic regularization ε:
K = exp(−C/ε); u ← r ⊘ (K v); v ← c ⊘ (Kᵀ u). Converges linearly at rate related to ε; mass conservation ‖K diag(v) u − r‖₁ < 1e-9. Units: C in "interchangeability cost" (utility units), ε same units as C, u,v dimensionless scaling vectors.

Breakdown: ε→0 numerical underflow (K→0), needs log-domain; ε→∞ plan → r cᵀ (rank-1, all information destroyed); condition number of the scaling problem ≥ 1/(min marginal) etc.

Good. And the DDCI recursion formula from the source: `α_{t+1} = α_t + γ₁(α − err_t) + γ₂(q̂_emp − q̂_t)` — cite.

Now, task 5: crowd residual exactly as the Action Network table — "contrarian plays rise; crowded plays drop." Formalize: rank score S_g = e_g + λ_c·(0.5 − π_g) where π_g is the ticket share on our side; λ_c is a display constant, NOT sealed, applied post-sim, and re-ranking only. Predictions: the game with 61% against rises above the one with 74% with it, exactly as the drive's table shows ("LV has the second-biggest model edge but 74% of tickets are already on it ... It drops from second to fourth"). I can cite that verbatim without naming lines — quote says "74% of tickets" — that's a ticket share, fine. And "TEN has the smallest edge but the crowd is on the other side, so it rises from fifth to third." Fine.

But careful: quoting "LV +1" would be a line. I'll quote selectively.

Alright. Also the drive's later correction: money divergence showed sharp stake against our plays — I should mention that the ticket-only residual was later contradicted by money-weighted divergence ("**My ticket-only read was wrong.**"). That's an excellent gray-zone audit point: the residual flag is unstable between ticket-share and stake-share, and only two games expose stake-share. Great for RECURSIVE_THEORY_OF_MIND / gray zone. Verbatim: "**My ticket-only read was wrong.** I said PIT, DET and TEN were contrarian. The money says the opposite". No lines named there except team abbreviations. Fine.

Now write the report.

Length: I'll write it fully. Let's go.

I'll include code blocks. Let me make them coherent and runnable-looking, with explicit "UNVERIFIED FIELD" flags.

State vector: s = (d, y, z, g, h, p) where d = down ∈ {1,2,3,4}, y = distance-to-go bucket, z = field zone (own 1–20, own 21–40, midfield, opp 21–40, opp 1–20 — matching the drive's drive-value zones), g = score-differential bucket, h = half/clock bucket, p = personnel (BLOCKED).

Transition: sample (d', y', z', Δpoints, Δclock).

Coach surface: only the 4th-down slice uses τ; everything else uses empirical split by coach with shrinkage k=40 (the drive uses "shrunk at k=40 plays" for soul profiles).

Monte Carlo: per-game N sims; antithetic? No, keep simple; report SE.

Let me write out the fit for τ with derivation and Fisher info.

For the risk-sensitive exponential utility:
U_τ(x) = −exp(−x/τ), τ > 0, x in expected points.
Certainty equivalent CE = −τ ln E[exp(−x/τ)].
Arrow–Pratt A(x) = 1/τ, units 1/point.
τ → ∞ recovers risk-neutral CE = E[x]; τ → 0⁺ gives CE → min support (maximin).

For the softmax/quantal-response form (which is what yields a likelihood):
P(a|s) = exp(β Q(s,a)) / Σ exp(β Q(s,b)), β = 1/τ, τ in points.
The two forms coincide under exponential utility with Gumbel noise (logit model). Good — that's a genuine identity worth stating: choice under exponential utility + Gumbel(τ) additive shocks → softmax with temperature τ. That's the multi-hop derivation: risk preference ⇔ inverse temperature under the logit. Nice.

Identifiability: τ recovered from 4th-down decisions; τ=0.42 points.

Fisher info derivation as above.

Also: the τ must not be re-estimated mid-week because it's inside the digest. Test: a module that calls `estimate_tau()` post-seal must raise; the guard checks sealed-timestamp vs now.

OK. Writing now. I'll be disciplined about not using forbidden words. Let me scan my planned prose for "spread" — I'll use "score differential", "dispersion of outcomes", "margin". "Total" — use "points scored", "combined points". "Odds" — avoid entirely; use "market-derived quantities" / "priced likelihoods"? Avoid. "Moneyline" — never. Also avoid "bet", "wager"? Not banned, but let me minimize; "stake" and "capacity" appear in source; I'll avoid. Use "position sizing"? Not needed.

I'll refer to the excluded inputs as "post-hoc external price and crowd-share observations" — hmm "price" is fine.

Let me write.

Word budget: THINK_TRACE 700, SOURCE 1400, RETRO 450, TOM 450, VETO 450, RLVR 500 → ~3950 words. That's fine (over 1000 required).

Write now.
</NATIVE_REASONING>

# GSE COACH SIMULATION — BUILD PLAN, INVERSE-MDP SPECIFICATION, AND INVARIANT AUDIT

**Drive:** `/CorpusRoot/10_26_26 Agent Log (4) - Copy` — 65 pages.
**Page-citation note (stated, not hidden):** the supplied drive text carries no inline `[PAGE N]` markers. Rather than fabricate page numbers, every citation below is to the drive's own section heading plus a **verbatim quote** from the drive, so each claim is checkable against the source. Where the drive is silent, the gap is recorded as a blocker rather than filled.

---

<THINK_TRACE>
**Multi-hop derivation of what the simulator is legally allowed to be.**

Hop 1 — the seal is the only epistemic anchor. The drive states: *"At seal, the engine serializes team ratings, scheme interchangeability cost matrix CCC, inverse-MDP fourth-down risk preference τ\tauτ, and the Sealed EPA Dropoff Table into a 64-character SHA-256 digest (coachMindsetHash)."* Everything downstream must therefore be a *function of a fixed argument list*, not an inference procedure. That single sentence collapses the design space: the simulator cannot be a model that learns, because a model that learns produces a new argument list, and a new argument list produces a new digest.

Hop 2 — therefore the simulator must be a **conditional sampler, not an estimator**. The distinction is subtle and it is the whole gray zone. Estimating a transition kernel from play-by-play data *looks* like re-estimation. It is not, provided the kernel is a deterministic, auditable function of (a) the frozen data snapshot already on disk and (b) a frozen shrinkage hyperparameter. The drive already licenses this pattern in a different component: *"the rest is a direct empirical lookup with the same shrinkage already used for BTL ratings"* — i.e. shrinkage is a *pre-sealed convention*, not a per-run fit. The build must make that convention explicit and constant, or the transition table becomes a covert estimator and the seal is decorative.

Hop 3 — the coach surface splits into two regimes that must not be conflated. The fourth-down slice is summarised by the single scalar τ because that slice is where the risk trade-off is identified. Every other decision (play-action rate, tempo, personnel grouping, timeout burn) is a *descriptive frequency* estimated from the same play-by-play with the k=40 shrinkage the drive uses for behavioural axes (*"All axes are shrunk at k=40 plays"*). Regime A is a structural parameter inside the hash. Regime B is a lookup table. Regime B may be rebuilt; Regime A may not. The build plan must physically separate the two files or the boundary will erode under deadline.

Hop 4 — the Monte Carlo loop is where non-linearity enters, and that is the first place that can quietly break the invariant. If the loop applies the sealed dropoff factor *before* sampling, the injured team's whole distribution shifts and the dropoff is being used as a mean-shift parameter. If it applies it *after* sampling the outcome, the factor acts as a multiplicative reweight on realised expected points and is exactly what the drive sanctions: *"multiply by pre-sealed EPA dropoff factors."* Multiplication after sampling is the legal composition; anything additive, re-fitted, or state-dependent is a new parameter.

Hop 5 — the crowd residual must be the last function called and must be *pure*. The drive is explicit: *"The residual flag is diagnostic; it does not mutate ratings, τ\tauτ, CCC, the EPA table, or the hash."* Purity is testable: hash the sealed file bytes before and after the residual and assert byte equality. A residual implemented as an in-place edit to a results frame is fine; a residual implemented as a mutation of any object reachable from the sealed document is a seal violation regardless of intent.

**Gray-zone audit — the four places this plan could be a lie.**

*Zone 1: the personnel conditioning variable.* The drive specifies conditioning on *"down, distance, field zone, score differential, personnel"* — but the same drive records: *"Personnel packages are not in the current parquet — the identity layer is missing its strongest axis (11 vs 12 personnel entropy)."* The state vector therefore has a declared dimension with no data behind it. Silently substituting a proxy is fabrication; silently dropping it changes the state space and must be declared. This report drops it and declares it.

*Zone 2: the multi-season play-by-play file.* The task names a 2018–2026 parquet. The drive documents only `pbp_2026.parquet` (18,561 plays, weeks 1–7) at `/opt/model/data/`, plus injuries for 2024 and 2025. A 2018–2026 play-by-play file is **not documented as present**. That is a blocker, not a detail — the coach surface's shrinkage and the τ recovery both depend on the longer window.

*Zone 3: file existence versus file claims.* The drive's own audit records: *"the local repo snapshot does **not** contain the TS modules named in the tables"* and *"`rg coachMindsetHash` and `rg PROB_PER_POINT` return **zero hits** repo-wide."* Any plan that asserts "module X already implements paper Y" is asserting something the drive itself could not verify. Task 7's output must therefore be a *ranked audit hypothesis list*, not a findings list.

*Zone 4: the residual is unstable in its own source.* The drive later retracts its own first-pass residual read: *"**My ticket-only read was wrong.** I said PIT, DET and TEN were contrarian. The money says the opposite."* A diagnostic whose sign flips between ticket-share and stake-share is a *weak* diagnostic. It can re-rank; it must never gate.
</THINK_TRACE>

---

<SOURCE_OPERATORS_AND_EQUATIONS>

## (a) Invariant confirmation

The invariant holds in the drive's own text and is restated here as the build's acceptance condition:

> *"All projections, rankings, fourth-down policies, and positional value tables originate from a bottom-up Belichick-Adams Coach-First simulation locked every Tuesday at 04:00 CT (v1.0)."* — [DRIVE §Session Scope]

> *"Mid-week injury versions (v2.0–v4.0) may only reallocate execution weights via entropy-regularized Sinkhorn-Knopp optimal transport and multiply by pre-sealed EPA dropoff factors."* — [DRIVE §Core Invariant Restated]

> *"External market numbers have zero causal influence and never enter the baseline."* — [DRIVE §Core Invariant Restated]

Seal mechanics are recorded as verified: *"`sealed_engine.py` hashes a canonical form (`sort_keys=True`, compact separators) and `seal()` refuses a second seal in the same ISO week — the lock is real, not decorative."* [DRIVE §23:55]

**Definition.** Let `S` be the sealed document. The digest is

$$
H \;=\; \mathrm{SHA256}\!\Big(\;\mathrm{canon}\big(S \setminus \{\texttt{coachMindsetHash}\}\big)\;\Big), \qquad \mathrm{canon} = \texttt{json.dumps}(\cdot,\ \texttt{sort\_keys}{=}\mathrm{True},\ \texttt{separators}{=}(",",":"))
$$

Units: `H` is a 256-bit string rendered as 64 hex characters. **Breakdown regimes:** (i) key-order divergence — any runtime whose serialiser preserves insertion order (JavaScript `JSON.stringify`) produces a different digest for identical content, making cross-language verification vacuous; the drive flags exactly this and prescribes a golden-digest fixture. (ii) Second-seal collision — if the ISO-week guard is bypassed, `H` changes mid-week and every downstream claim becomes unauditable. (iii) Partial-object serialisation — a dead database credential yields a partial table and therefore a *valid* digest over *invalid* content; the drive orders the fix correctly: *"mint → write → live-verify → seal ordering."*

## (b) Loader — read the sealed object without triggering a re-seal

```python
# /opt/model/sim/load_sealed.py
"""Read-only accessor for the Tuesday seal. Never writes. Never re-seals."""
import hashlib, json, pathlib, types

SEALED = pathlib.Path("/opt/model/sealed_baseline.json")

def _canon(obj) -> bytes:
    return json.dumps(obj, sort_keys=True, separators=(",", ":")).encode("utf-8")

def _freeze(x):
    if isinstance(x, dict):  return types.MappingProxyType({k: _freeze(v) for k, v in x.items()})
    if isinstance(x, list):  return tuple(_freeze(v) for v in x)
    return x

def load_sealed(path: pathlib.Path = SEALED) -> dict:
    raw  = path.read_bytes()                    # byte snapshot: the purity witness
    doc  = json.loads(raw)
    # FIELD NAMES UNVERIFIED: reconciled against sealed_engine.py's own canonicaliser,
    # not guessed. The drive names coachMindsetHash, C, tau, EPA dropoff table.
    claimed = doc["coachMindsetHash"]
    body    = {k: v for k, v in doc.items() if k != "coachMindsetHash"}
    recomputed = hashlib.sha256(_canon(body)).hexdigest()
    if recomputed != claimed:
        raise SystemExit(f"[fail] seal mismatch {recomputed[:16]} != {claimed[:16]}")
    doc["_raw_sha256"] = hashlib.sha256(raw).hexdigest()   # purity witness
    return doc

def assert_untouched(path: pathlib.Path, witness: str) -> None:
    now = hashlib.sha256(path.read_bytes()).hexdigest()
    if now != witness:
        raise AssertionError("[fail] sealed object mutated during simulation")
```

Every downstream module receives `_freeze(sealed)` — a mapping-proxy graph that raises `TypeError` on any write. That converts the invariant from a policy into a runtime property.

**What the loader pulls, and how each is used:**

| Sealed field | Consumer | Constraint |
|---|---|---|
| team ratings | none (the simulator does not read ratings; it reads *distributions*) | read-only |
| `C` (scheme interchangeability cost) | Sinkhorn overlay only | read-only; ε must be sealed alongside |
| `τ` = 0.42 | 4th-down slice of the coach surface | read-only; no post-seal estimator |
| EPA dropoff table, incl. `QB_QUESTIONABLE = 0.0947` | injury overlay multiplier | read-only |

The `QB_QUESTIONABLE` value is derived, not asserted: the drive shows *"`P(start | QB1 Questionable) = 0.341` (15 of 44)"* and *"`0.341 × 0.1159 + 0.659 × 0.0838 = **0.0947**`"* [DRIVE §23:20]. The frozen scalar is the **expected** adjustment; the conditional value `0.116` applies only after a start is confirmed.

## (c) State-conditioned transition lookup

State `s = (d, y, z, g, h)` — down, distance bucket, field zone, score-differential bucket, half/clock bucket. **Personnel is declared absent** (drive: no personnel packages in the current parquet).

Zones are taken from the drive's own drive-value partition so the simulator and the sealed evaluator share a coordinate system: own 1–20, own 21–40, midfield, opp 21–40, opp 1–20 — *"a drive starting inside the opponent 20 is worth **3.2×** one starting inside your own 20"* [DRIVE §PART 2 §3].

**Estimator (backoff empirical Bayes, zero new hyperparameters):**

$$
\hat p(s' \mid s) \;=\; \frac{n(s,s') + \kappa\, m_{b(s)}(s')}{n(s) + \kappa},
\qquad
m_{b}(s') = \frac{n_b(s')}{n_b}
$$

| Symbol | Meaning | Units |
|---|---|---|
| `n(s,s')` | observed transition count | plays (count) |
| `κ` | pseudo-count from the backoff level | plays |
| `b(s)` | backoff level: `(d,y,z)` → `(d,y)` → `(d)` → league | — |
| `m_b` | backoff marginal | dimensionless probability |

`κ` is a **fixed constant**, chosen once from the play-by-play and written into the sim config as a named constant — *not* tuned per slate. Base: Morris (1983) parametric empirical Bayes, cited by the drive as *"Morris (1983) — Parametric Empirical Bayes"*. **Breakdown:** `n(s) → 0` collapses to the marginal (safe); a backoff level with `n_b = 0` produces a division by zero → must assert `n_b ≥ 1` or fall to the league marginal; count leakage across seasons is real because the drive notes coach labels *"will smear a season"* on interim tags.

## (d) Coach surface

Two physically separate files.

**Regime A — the structural slice (inside the hash).** Fourth-down choice `a ∈ {go, kick, punt}`. Under exponential utility with Gumbel(τ) additive shocks the choice rule is the softmax with temperature τ (units: expected points):

$$
P(a \mid s) = \frac{\exp\!\big(Q(s,a)/\tau\big)}{\sum_{b}\exp\!\big(Q(s,b)/\tau\big)},
\qquad
U_\tau(x) = -\exp(-x/\tau),\quad A(x) = \frac{1}{\tau}
$$

where `A(x)` is Arrow–Pratt absolute risk aversion in units of 1/point. `τ → ∞` recovers risk neutrality; `τ → 0⁺` recovers maximin. The sealed `τ = 0.42` is the recovered scalar.

**Inverse problem (pre-seal only).** The score function for one observation is

$$
\frac{\partial \log P(a_i \mid s_i;\tau)}{\partial \tau}
= \frac{Q(s_i,a_i) - \bar Q(s_i)}{\tau^{2}},
\qquad
\bar Q = \sum_b P(b\mid s)\,Q(s,b)
$$

and therefore the Fisher information and the asymptotic standard error are

$$
\mathcal I(\tau) = \frac{n\,\mathbb E_s\!\big[\mathrm{Var}_a Q(s,\cdot)\big]}{\tau^{4}}
\quad\Longrightarrow\quad
\mathrm{SE}(\hat\tau) \approx \frac{\tau^{2}}{\sqrt{n\,\mathbb E_s[\mathrm{Var}_a Q]}} .
$$

**Singularity / breakdown regimes, exact:**

1. `τ → 0⁺`: the likelihood becomes a step function; the gradient is zero almost everywhere and `∂ log P/∂τ ~ 1/τ²` overflows in floating point. Softmax must be evaluated in log-sum-exp form. τ is then identified only up to the *ordering* of Q, not by magnitude.
2. `τ → ∞`: policy → uniform; `P(a|s)` becomes insensitive to `Q`; the estimator is flat and `SE(τ) → ∞`. Recovery is ill-posed.
3. `E_s[Var_a Q] → 0`: states where going and kicking are equally valuable carry **zero** information about τ regardless of sample size. Coverage must be inspected; a play-by-play window dominated by tie states yields an unidentifiable τ that will still return a number.
4. `Q` curvature: the Fisher information assumes `Q` is known exactly. If `Q` itself is estimated, `SE(τ̂)` is understated by an amount proportional to the estimation error in `Q` — the classic errors-in-variables attenuation.
5. Non-stationarity: rule and roster changes drift the true τ; because τ is frozen inside `H`, drift manifests as a *bias in the simulator*, not an error in the hash. That is the deliberate trade.

**Regime B — descriptive frequency surface (outside the hash).** For non-fourth-down decisions, per-coach empirical frequencies with the drive's own shrinkage (`k = 40 plays`), conditioned on the same state. This table may be rebuilt from the frozen data snapshot without touching `H`, because it is a lookup and not a structural parameter.

## (e) Monte Carlo loop

```python
# /opt/model/sim/coach_sim.py  (skeleton — shapes fixed, field names unverified)
def simulate_game(sealed, trans, coach, injury_flags, n=100_000, seed=0):
    rng = random.Random(seed)
    out = []
    for _ in range(n):
        s, pts = trans.kickoff(), [0, 0]
        plays, clock = 0, 0.0
        while clock < 3600.0:
            a  = coach.sample_action(s, sealed["tau"], rng)      # Regime A on 4th down
            s2 = trans.sample(s, a, rng)                          # backoff lookup
            d  = trans.points(s, s2)
            # INJURY OVERLAY: multiplicative, applied to realised expected points,
            # using ONLY factors already inside the sealed dropoff table.
            d  = d * (1.0 - injury_flags.multiplier(s, s2))
            pts[s2["poss"]] += d
            plays += 1; clock += s2["dt"]
            s = s2
            if s["absorbing"]: break
        out.append((tuple(pts), plays))
    return out
```

Outputs are **simulation outputs, not quoted external numbers**: median points per team, the combined-points median, the empirical quantiles of the score differential, and pace (plays per 60 minutes of game clock). Monte-Carlo error is quantified, not hidden: for a differential with `σ ≈ 13.5` points and `N = 100,000`, `SE ≈ σ/√N ≈ 0.043` points; for a median, `SE ≈ 0.054`.

**Variance budget (must be printed with every result):**

| Source | Status | Magnitude |
|---|---|---|
| Monte-Carlo sampling | measured | `≈0.04–0.05` points at `N=10⁵` |
| Sealed-parameter uncertainty | **zero by construction** | fixed by `H` |
| Transition-estimation error | real, unquantified | driven by `κ` and cell counts |
| Model-form error (Markov assumption) | real, unquantified | the honest gap |

The last two lines are the difference between a simulator and a prophecy; they belong in the output, not the appendix.

## (f) Crowd residual — pure function, last in the chain

Let `π_g` be the ticket share on the simulator's side for game `g`, and let `e_g` be the simulated edge. The residual is a **rank transform**:

$$
r_g = \tfrac12 - \pi_g, \qquad S_g = e_g + \lambda_c\, r_g , \qquad \lambda_c \notin H
$$

The drive's own worked example confirms the direction and the magnitude of the reordering: *"LV has the second-biggest model edge but **74% of tickets are already on it** — the most crowded number on the board. It drops from second to fourth. TEN has the smallest edge but the crowd is on the other side, so it rises from fifth to third."* [DRIVE §PUBLIC SPLITS]

**Purity proof (required in code, not prose):** capture `sha256(sealed_baseline.json)` before the residual call and assert equality after. Because `load_sealed` returns mapping proxies, a mutation attempt raises rather than succeeding silently.

**Adjudication of the residual itself:** the drive retracts its own ticket-share ordering once stake-share is read — *"**My ticket-only read was wrong.**"* Only two games expose stake-weighted divergence. The residual is therefore **grade B**: permitted to re-rank a display list, forbidden to gate, size, or touch `H`.

## (g) Import-graph audit

Two independent checks, because a static check alone can be defeated by dynamic import:

```bash
python -m sim.audit_imports --root /opt/model/sim            # AST walk
python -m sim.audit_imports --root /opt/model/sim --runtime  # sys.modules sentinel
```

Static: parse every `.py`/`.ts` under `sim/`, assert the import set ∩ `FORBIDDEN = ∅`. Dynamic: install a `sys.meta_path` finder *before* importing `coach_sim` that raises on any forbidden module name.

**`FORBIDDEN` set (must be enumerated and version-controlled):** every market-feed client, every crowd-share client, every de-vig/devig utility, every conformal-vs-price diagnostic. The drive's own P0 precedent is the template: *"a CI grep that fails on any `from \"*/sealed*\"` inside P0, not just the 5 cases."*

## (h) Task 7 — modules that claim a paper but may be generic baselines

**Framing (mandatory):** the drive states the local snapshot *"does **not** contain the TS modules named in the tables"*, so these are **audit hypotheses to be checked against the workstation tree**, ranked by expected severity. They are not findings.

| Module (claimed) | Claimed paper | Expected generic body | Why it fails the claim | Test that settles it |
|---|---|---|---|---|
| `2309-00756-inverse-mdp-fourth-down.ts` | Sandholtz 2023/24 | a constant `TAU = 0.42` plus a guard | A constant is the *output* of the paper, not the paper. If there is no softmax likelihood and no Fisher-information calculation anywhere, the body is a baseline wearing the paper's name. | grep for `logsumexp`, `Var_a`, `SE(tau)`; run the τ-perturbation veto below |
| `1807-09236-empirical-bayes-btl.ts` | Morris 1983 | a hand-set shrinkage constant | Parametric EB requires a *fitted* prior with a stated fit window. A magic `k` is James–Stein-flavoured, not EB. | assert the prior's fit window ends before the seal week |
| `sinkhorn-targets.ts` | Cuturi 2013, Lemma 2 | fixed-ε Sinkhorn, no certificate | The sweep notes the certified annealed variant exists (2609.33814) precisely because fixed-ε blurs mass. Fixed ε is the *baseline* of that literature. | assert `ε` is inside `H`; assert marginal L1 `< 1e-9` |
| Bradley-Terry pass-rush | BT + 2604.01491 | plain BT on win/loss | The drive itself names the defect: equal-exposure comparison. The paper's contribution is *joint* blocker/rusher estimation. | rank-correlation against pressure rate on the full edge population |
| Hawkes steam detector | none published | synthetic-only estimator | The sweep records *"No Hawkes-for-line-movement paper"* — the body cannot be a paper implementation because no paper exists. | refuse to promote until capture duration ≥ the drive's ~6 h/slate |
| CQR | Lei 2018 / Barber 2021 | order statistic only | Empirical coverage 0.857 against a 0.80 target = intervals too wide; safe but not the paper's tightness claim. | re-check at n ≥ 200 |

## (i) Blockers — recorded, not substituted

1. **Multi-season play-by-play.** The task names 2018–2026. The drive documents only `pbp_2026.parquet` (weeks 1–7) plus `injuries_2024/2025.csv`. The longer window is **not documented as present**.
2. **Personnel field.** Absent by the drive's own admission; the state vector is built without it and the omission is declared.
3. **Sealed field names.** `coachMindsetHash`, `C`, `τ`, and the dropoff table are named in prose; their exact keys are unverified. The loader must be reconciled against `sealed_engine.py` before first run — a wrong key is a silent `KeyError`, a wrong *exclusion set* is a silent digest mismatch.
4. **Cross-language canonicalisation.** Python canonicalises; a TypeScript writer using `JSON.stringify` inherits insertion order. Golden-digest fixture required before the next seal.
5. **Coach label smearing.** Interim tags and mid-season changes contaminate any per-coach surface; `n` must be printed per coach and thin cells must fall to league.

</SOURCE_OPERATORS_AND_EQUATIONS>

---

<RETROCAUSAL_GENEALOGY>

**The inverse-MDP line.** Bellman's dynamic programming gives the forward object: a value function and an optimal policy. Ziebart's maximum-entropy inverse reinforcement learning inverts it — the observed policy is treated as noisy-optimal under an entropy-regularised objective, which is exactly where the temperature parameter is born. The drive anchors the football-specific instantiation to *"Sandholtz et al. (2023/2024) — Inverse-MDP fourth-down τ\tauτ"*, and that citation is the reason τ is a *recovered preference* rather than a hand-set conservatism dial. The genealogy matters operationally: a temperature recovered by maximum likelihood carries a standard error; a temperature chosen by a coach's intuition does not. `τ = 0.42` is the former, which is why it can be frozen with a defensible claim and why re-deriving it mid-week would be a substantive change in the object, not a refresh.

**The transport line.** Sinkhorn (1964) and Sinkhorn–Knopp (1967) supply the matrix-scaling iteration; Cuturi (2013) supplies the entropic relaxation that makes it fast and differentiable, cited by the drive as *"Cuturi (2013) — Sinkhorn distances, Lemma 2"*; Peyré & Cuturi (2019) supply the computational treatment. The drive's own constraints — *"reallocate execution weights via entropy-regularized Sinkhorn-Knopp optimal transport"* — are exactly this lineage. The forward-looking edge is the certified annealed variant (2609.33814) that removes the entropic blur of a fixed ε. The historical lesson: fixed ε was a *speed* compromise in 2013, and inheriting it in 2026 means inheriting a compromise whose justification has expired.

**The shrinkage line.** Morris (1983) parametric empirical Bayes → Yurko et al. (2019) nflWAR → the drive's EB-BTL component. The trap is prior leakage: an EB prior fitted on the same seasons it shrinks is in-sample optimism dressed as regularisation. The drive's own audit warns of precisely this class of error on the isotonic map — *"If the knots are refit on the same rows they are scored on, the 5.2 pt correction is partly memorized."*

**The conformal line.** Lei et al. (2018) Theorems 1–2 → Barber et al. (2021, 2023) jackknife+ → Angelopoulos & Bates order-statistic quantile → the 2026 online/dual-feedback variants (2610.26987), whose recursion the drive correctly identifies as the one thing that touches the seal architecture, with the fix stated in the same breath: *"seal the **update rule** `(γ₁,γ₂,α,q̂₀)`, not the value."*

**Multi-week traps, named.** (i) Weekly data breaks exchangeability, so nominal coverage is not guaranteed — tolerable *only* because the flag is diagnostic. (ii) Rule and roster drift makes a frozen τ a bias, not an error. (iii) Interim-coach tags smear seasons and silently move every per-coach axis. (iv) Fixed-ε transport smears mass across positions in a way that looks like a rounding artefact. (v) The longest-running trap: a research sweep that returns *"no successor to 2309.00756"* means the structural component has no upgrade path and must be maintained by inspection rather than by literature.
</RETROCAUSAL_GENEALOGY>

---

<RECURSIVE_THEORY_OF_MIND>

**The coach is not optimising; the coach is optimising a model of the game that includes a model of you.** That is the recursion the simulator must encode. A purely optimal policy would make every coach identical and every game a solved board. The observed surface is different, and the drive measures the difference: panic — Q4 pass-rate over the coach's own baseline — spans *"13.3 pp between Sirianni and McDermott"* with Sirianni at `+7.82` and McDermott at `−5.51`, both on ~3,200 plays. Same state, opposite instincts. That is not noise; it is identity.

**Crisis habit regression.** The mechanism is well-posed once stated: under rising leverage, a coach's policy regresses toward his *habitual* policy, not toward the optimal one, because habit is the low-variance response and deliberation is expensive under time pressure. The drive's NERVE / FRONT split is the discriminating instrument — the same band measured early and late, where *"a team aggressive early and timid late is a coach protecting himself."* That sentence is the whole theory-of-mind layer in one line: the observable is the *difference* between two self-portraits, not either portrait alone.

**The counter-trap.** If the simulator encodes habit and an opponent encodes the simulator's encoding of habit, the exploitable position is the coach who breaks habit. But breaking habit is only knowable after the fact unless the deviation is *structural* — a new coordinator, a backup quarterback, a rule emphasis. Hence the design rule: the simulator predicts habit with high confidence and attaches an explicit, unmodelled residual to structural change. The drive's own week-level observation supports the direction: the interesting edges cluster where a *structural* change (a backup under center) meets a *habitual* policy (a coach who does not adjust), not where a coach simply had a bad quarter.

**The clock as a second-order object.** Tempo, timeout burn, and no-huddle rate are the coach's beliefs about the opponent's beliefs: hurry-up is a statement that the opposing defence cannot communicate in time. The drive's extremes — Washington at 44.8% no-huddle against a next-best of 17.4 — are an identity claim by the staff, not a rate. Modelling tempo as a per-coach constant with k=40 shrinkage is the only defensible treatment, and the shrinkage is exactly what keeps a two-game stretch from topping the board.

**What the recursion forbids.** It forbids the simulator from using any opponent-adaptive parameter that updates within the game-from-the-coach's-perspective. If the simulated coach "learns" mid-game, the loop is no longer sampling from a sealed policy and the output is not reproducible from `H`. Coaching adaptation must be pre-baked as state-conditional policy, not as online learning.
</RECURSIVE_THEORY_OF_MIND>

---

<CROSS_LAYER_VETO_ADJUDICATION>

**Which layers may veto a simulated output, and which are advisory.** A veto is a hard stop on publishing a simulation result; an advisory is a printed warning. Conflating them is how a diagnostic becomes a silent parameter.

| Layer | Measurement (verbatim from drive) | Authority | Veto condition |
|---|---|---|---|
| **Wind (physical)** | *"Wind −0.0285 EPA per 10 mph, monotone"*; bucket means `+0.0185 → −0.0185` across 0–5 → 16–20 mph; pass rate `.495 → .468` | **VETO** on any pass-heavy state whose transition row was built without a wind covariate | realised wind ≥ the top bucket and the state's pass-rate row is unadjusted → refuse to publish that game's output |
| **Temperature (physical)** | *"Temperature is NOT monotone"*; `<20°F −0.032`, `20–32°F +0.024`, `33–45°F −0.027` | **ADVISORY only** | a smooth gradient must never be applied; only the extreme-cold flag may enter |
| **Officials (behavioural-physical)** | league `12.85` flags/game, 16 crews spanning `11.79–13.70` — *"16% crew spread"*; home bias `−0.24` to `+0.47` | **ADVISORY** | veto only if a crew assignment is unknown and the flag count is a first-order driver of the simulated drive count |
| **Field-position value (physical)** | own 1–20 `1.388` → opp 1–20 `4.482` points/drive, `"3.2×"` | **VETO** on internal inconsistency | if the Monte Carlo's implied drive-value curve deviates from the sealed curve by more than Monte-Carlo error, the transition table is wrong and the run is void |
| **QB replacement (biomechanical)** | 159 qualified QB-seasons, delta `−1.31` to `+0.81` EPA/play — a `2.1 EPA` spread | **VETO** when the replacement is not in the sealed per-player table | falling back to the position constant `0.0947` is permitted *only* with the approximation printed; using it silently is a veto failure |
| **Pass-rush leverage / snap timing (biomechanical)** | Bradley-Terry validated on 3 players; snap-timing *"wired; outside Tuesday path"* | **NOT ADMISSIBLE** | not in `H` → cannot veto, cannot enter |

**The proof obligation.** Each veto must be falsifiable: the run must print the layer's input value, the threshold, and the decision. A veto with no printed input is indistinguishable from a bug. The wind layer is the cleanest because the drive reports a *monotone* slope — monotonicity is a testable property of the fitted curve and fails loudly if the data is contaminated by late-season correlation.

**The layering rule.** Physical and biomechanical vetoes outrank behavioural adjustments because behaviour is estimated *conditional on* the physical state; a coach's panic rate measured in calm air does not transfer to a 20 mph game without re-conditioning. That ordering is not aesthetic — it is the causal direction.
</CROSS_LAYER_VETO_ADJUDICATION>

---

<RLVR_COUNTERFACTUAL_VETOES>

Each scenario is a counterfactual with a verifiable prediction. A scenario that cannot fail is not a test.

**Veto 1 — τ re-estimation detector.**
*Counterfactual:* a mid-week job calls an estimator that would re-fit τ on the week's decisions.
*Injection:* monkeypatch the τ accessor to attempt a write to `sealed["tau"]`.
*Prediction:* the mutation raises `TypeError` on the mapping proxy **and** `sha256(sealed_baseline.json)` is byte-identical before and after; the job exits non-zero; τ still reads `0.42`.
*Failure criterion:* the job completes with exit 0 and any digest other than the pre-run digest. If the guard is a convention rather than a proxy, this test will pass trivially on a good day and fail silently on a bad one — which is why the proxy is mandatory.

**Veto 2 — market/crowd import contamination.**
*Counterfactual:* a developer adds a convenience import of a market-feed client into `coach_sim.py` to "check the number afterwards."
*Injection:* plant `import market_client` at module scope in a scratch copy of the sim tree.
*Prediction:* the AST audit returns `VIOLATION: coach_sim.py:1` and exits 1; the runtime sentinel raises `ImportError` before `coach_sim` finishes importing; the sealed digest is untouched because the import never executes.
*Failure criterion:* audit exits 0. A second, sharper form: plant the import *inside a function body* (dynamic) — the AST walk must still catch it; if only the runtime sentinel catches it, the static layer has a hole worth documenting.

**Veto 3 — Sinkhorn mass conservation under a removed injury flag.**
*Counterfactual:* the week-7 overlay reallocated share mass after flags were applied; remove one flag and re-run the overlay.
*Injection:* drop one player from `inactivePlayerIds` and re-run the transport step.
*Prediction:* total transported mass returns to exactly `1.0` (L1 row-marginal error `< 1e-9`), the removed player's share returns to its pre-flag value to within `1e-9`, and `coachMindsetHash` is **unchanged** — consistent with the drive's own reporting that the week-7 pass moved `1.989` total share mass while *"coachMindsetHash and τ=0.42 unchanged."*
*Failure criterion:* any change to `H`, or a marginal error above tolerance while the solver still reports convergence.

**Veto 4 — canonical-serialisation divergence.**
*Counterfactual:* the same state object is serialised in Python (sorted keys, compact separators) and in a JavaScript runtime (`JSON.stringify`, insertion order).
*Injection:* permute the key insertion order of two fields and hash both sides.
*Prediction:* the Python digest is invariant to the permutation; the naive JS digest changes. The golden-digest fixture must therefore assert a *single* expected digest and be run in both runtimes.
*Failure criterion:* both digests change (both serialisers are order-dependent) or neither changes (the test is not exercising the permutation). This is the cross-language residual risk the drive already names; the counterfactual is what upgrades it from a note to a gate.

---

## (c) Resulting slate outputs and crowd residual — how to run it

```bash
python3 -m sim.load_sealed --verify                     # digest + byte witness
python3 -m sim.build_transitions --pbp /opt/model/data/pbp_2026.parquet --kappa 40
python3 -m sim.coach_sim --n 100000 --seed 0 --out /opt/model/out/sim.parquet
python3 -m sim.crowd_residual --in /opt/model/out/sim.parquet --out /opt/model/out/ranked.parquet
python3 -m sim.audit_imports --root /opt/model/sim --runtime
```

Reported per game: simulated median points for each side, combined-points median, score-differential quantiles, pace in plays per 60 minutes, the Monte-Carlo standard error, and the crowd-residual rank shift. **No external quoted numbers appear in the output** — the post-hoc comparison is a separate, later join and is explicitly non-mutating (drive: *"The residual flag is diagnostic; it does not mutate ratings, τ\tauτ, CCC, the EPA table, or the hash."*).

The re-ranking the residual produces is exactly the ordering the drive's table demonstrates and then partly retracts — contrarian positions rise, crowded positions fall — and is therefore published as **grade-B display ordering**, not as a gate.

---

## (e) New gaps found during this build pass

1. **No documented multi-season play-by-play file.** The plan runs on `pbp_2026.parquet` alone until the longer window is confirmed present.
2. **The state vector has a hole where personnel used to be.** Declared, not patched.
3. **No Fisher-information output exists anywhere in the described stack.** τ is frozen without a printed standard error, which means its precision is currently un