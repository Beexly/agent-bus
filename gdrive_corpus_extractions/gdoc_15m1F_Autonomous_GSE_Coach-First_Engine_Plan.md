---
source: "Autonomous GSE Coach-First Engine Plan"
folder: "/CorpusRoot"
pages: 40
model: deepseek/deepseek-v4.1-flash-1017
words: 8047
---

<NATIVE_REASONING>
The user has provided a massive source document (40 pages) about "Galaxy Sports Edge" — a sports betting/prediction engine. They want me to output in specific XML sections with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: State formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes. Cite [PAGE N] markers and verbatim quotes.
3. >= 1,000-word depth across XML sections.

Wait — there's a tension here. The source is heavily about sports betting (spreads, totals, moneylines, odds, sgp, etc.). But my invariant #1 says NEVER mention spreads, totals, moneylines, or odds. So I must describe the system without those terms — focus on the mathematical/engineering machinery: Sinkhorn optimal transport, HHI scaling, entropy metrics, Bayesian shrinkage, inverse-MDP, play-by-play Monte Carlo simulation, serializer canonicalization, seal hashing, telemetry, etc.

However, I need to cite [PAGE N] markers and verbatim quotes. The source text provided doesn't have explicit page markers. I need to infer pages. The document says "PAGES: 40" and "DRIVE SOURCE". Since I have the text but not with page delimiters, I'll have to cite pages approximately or note that page markers are inferred from section breaks. Actually, the instructions say "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The pages are referenced but no [PAGE N] markers exist in the text. I should handle this gracefully — perhaps map document sections to approximate page ranges and note the inference, or use the page count. Actually, since the source was described as "PAGES: 40" but the content doesn't include page markers, I should be honest (per the "Do not invent" rule) and treat this as a NAMED_GAP-style issue OR cite sections. Let me be careful: I can cite "Section 3.5" and note pages are not marked. But the instructions demand [PAGE N] markers. Hmm.

Best approach: acknowledge that the source text lacks explicit page delimiters, so I'll map section references to approximate page bands based on position, and clearly flag this. Or I could cite the section headings verbatim. The instruction says "cite exact [PAGE N] markers and verbatim quotes" when provided — but they're NOT provided in the text. So per Rule 1 (Do not invent), I should NOT fabricate page numbers. I will use section citations like [SECTION 3.5] and note the page-marker gap explicitly. That's the honest approach. Actually I can also use approximate page ranges flagged as inferred. Let me use "§" citations with clear notation that exact [PAGE N] markers were absent in the supplied text, and provide verbatim quotes with anchors. That respects both the spirit and the letter ("when source pages are provided").

Hmm, but user explicitly asked for [PAGE N]. Let me compromise: I'll note that page markers were not present in the supplied source text, so I anchor quotations to sections; and where I use "PAGE BAND" I mark it "inferred, not verified." That is the correct GSE-aligned behavior (Standing Rule 1).

Now let me plan the sections:

<THINK_TRACE> >=400 words. Deep multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Total >= 1,000 words. Let me aim for ~2,500-3,500 words to be safe and rich.

I must avoid betting nomenclature entirely. So I cannot describe "spread sides," "moneyline," "totals," "ATS," "hold," "SGPs," "DFS lineups," "props" in betting sense? The instruction says never mention spreads, totals, moneylines, or odds. I can mention "player prop" maybe not — that's betting. I should pivot the entire analysis toward the mathematical/engineering substrate: seal hashing, canonicalization, Sinkhorn, HHI, entropy metrics, Bayesian shrinkage, inverse-MDP, Monte Carlo, telemetry, AST firewalls. That's plenty of substance. The "Coach-First Doctrine" and "pure football simulation" can be described as signal-generation and probability calibration without odds language.

I can mention "market-odds layer" only as an excluded Class B layer? No — avoid "odds" word entirely. I can say "the late-bound external pricing layer (Class B) is excluded from the simulation core" — but "pricing" is fine, odds is not. Let me avoid "pricing" too maybe; use "external consensus layer." Actually "pricing" is okay-ish but I'll minimize.

Let me now derive the formal math carefully from the source.

**Sinkhorn-Knopp entropic OT**: For cost matrix C ∈ R^{5×5} (role interchangeability across [WR1, WR2, WR3, TE1, RB1]), base shares r, target c (after scratch), solve

min_{P ∈ U(r,c)} ⟨C, P⟩ - ε H(P), H(P) = -Σ P_ij (log P_ij - 1)

with ε = 0.10. Update u_i = r_i / (Σ_j K_ij v_j), v_j = c_j / (Σ_i K_ij u_i), K = exp(-C/ε). Marginal L1 error ≤ 1e-9. Mass moved = ½||P 1 - r||_1.

Singularity regimes: ε → 0 gives hard OT (non-unique/degenerate assignment; K becomes near-0 matrix, numerical underflow — Schmitzer log-domain stabilization needed); ε → ∞ gives uniform P (zero information). At ε = 0.10 with C entries up to 0.90 (max ~9ε), K ~ exp(-9) ≈ 1.2e-4 — near underflow, so log-domain required.

**HHI load scaling**: N_eff = 1/HHI. m = sqrt(N_league/N_team), clamped [0.55, 1.60]. HHI_league = 0.135 → N_league = 7.407. Detroit HHI 0.159 → N_eff = 6.289, m = sqrt(7.407/6.289) = sqrt(1.178) ≈ 1.085. New Orleans HHI 0.087 → N_eff = 11.494, m = sqrt(7.407/11.494) = sqrt(0.6444) ≈ 0.803. Matches "1.08×" and "0.81×" in the source. Good.

Breakdown: HHI → 0 (perfectly balanced) → N_eff → ∞ → m → 0 but clamped at 0.55; HHI → 1 (single contributor) → N_eff → 1 → m = sqrt(7.407) ≈ 2.72 clamped to 1.60. So the clamp regime matters.

**Empirical Bayes BTL shrinkage**: R = (I + A*S)^{-1} described. Standard BTL/Glicko-type: b_j = B^T W b + ..., with shrinkage. Also 1807-09236 empirical Bayes operator. The r_shrink in the simulator: r_shrink = 1/(1 + 45*0.04) = 1/(1+1.8) = 1/2.8 ≈ 0.357. Then (1 - r_shrink) = 0.643. So early_pass_rate deviation from 0.54 is shrunk by 0.643. Hmm — that means 64.3% of raw deviation passes through, 35.7% shrunk. k = 40 plays mentioned elsewhere. Actually "shrunk at k = 40 plays" — precision-weighted.

**Inverse-MDP fourth-down**: coach chooses policy maximizing frozen τ_coach = 0.42 quantile of future drive value V. 5-zone curve: 1.388 (own 1–20), 1.921 (own 21–40), 2.447 (midfield), 3.517 (opp 21–40), 4.482 (opp 1–20). Units: points per drive. The τ-quantile of the value distribution: Q_τ(V | s). Going for it on 4th-and-d compares E_{τ}[V(next|go)] vs FG vs punt. Break: τ → 1 (max) makes coach infinitely aggressive; τ → 0 makes coach maximally conservative. τ = 0.42 is sub-median → risk-neutral-to-slightly-conservative? Actually below median means the coach optimizes a pessimistic quantile → conservative. But the document calls τ a "risk preference" — 0.42 as inverse-MDP risk parameter.

Actually hold on — higher τ as "quantile level" = more aggressive (optimizing upper tail). τ = 0.42 < 0.5 means pessimistic → conservative. But the code says go_mask includes tau >= 0.40 for the 40-yd/5-yd case. Hmm, it's a preference parameter. Let me just describe it formally: the policy selects a ∈ {go, FG, punt} maximizing the τ-quantile functional Q_τ(V|s,a) subject to the frozen sealed map. Note τ_coach = 0.42 vs τ_rating = 4.6607 (points) — the naming collision. Two distinct parameters, unitless vs points.

**GSE-SII pinned assertion**: 45/300 - 30/300 = 0.05. That's a Shannon-bits-style difference? 45/300 = 0.15, 30/300 = 0.10, diff = 0.05. Units: bits? It's a "scheme interaction" measure. The pinned test asserts bit-identical 0.05.

**Shannon entropy (SPESE)**: H(p) = -Σ p_i log_2 p_i, normalized by mass. Between-the-20s bits minus red-zone bits. Units: bits. If p is not normalized (mass ≠ 1), normalize first; reject negatives.

**Markov play-by-play simulator**: 10,000 trajectories, 5 coupled layers. Clock: 3600 s, decrement per play ~ Normal(pace, 3.2²) clamped [8, 40] s. 175-iteration cap. Transition probabilities: conversion p_conv = clip(0.64 - 0.05·ydstogo + 0.55·net_epa, 0.15, 0.82). Play-calling pass prob: base_p = {D1: 0.48, D2: 0.56, D3: 0.74} + pass_delta + trail_mod (0.08 + panic_pp when Q4 and trailing ≥7). Pass completion clip(0.645 + 0.38·net_epa, 0.48, 0.78). Pass yards ~ N(11.4 + 14.5·net_epa, 7.5²). Run yards ~ N(4.4 + 9.5·net_epa, 4.2²). Turnover prob clip(pass? 0.021 : 0.008 - 0.015·net_epa, 0.003, 0.045). Sack prob 0.062. TD value 6.95 (points, includes ~0.95 for 2-pt/XP expected). FG p = clip(0.97 - 0.011·max(0, yardline_100 - 15), 0.45, 0.98). HFA / 79.1 converts points to EPA scale (1 EPA ≈ 79.1 points? Actually 79.1 pts/EPA is the conversion used; 0.0947 EPA × 79.1 = 7.49 pts — matches "7.5-point impact of starting QB").

**Serializer canonicalization**: TS JSON.stringify insertion-order → digest dd6549a...; Python json.dumps sort_keys=True → 0821671.... Fix: recursive lexicographic key-sort (canonicalizeForSeal) + JSON.stringify with no spaces + SHA-256. Break: nested arrays of objects, undefined handling (TS drops undefined keys; Python has no undefined — must normalize), number formatting (float vs int, exponent notation), Unicode normalization.

**Seal hash**: 64-char SHA-256 Merkle root 23245bcb... (I shouldn't broadcast the literal? The source says never hard-code it — but citing it as an example from the doc is fine; however invariant says zero betting lines, not zero hashes. I'll mention it as "the sealed Merkle root cited in the source" but emphasize runtime resolution. Actually the source itself says don't hardcode 23245bcb. I'll refer to it generically as the active Merkle root and mention the collision hashes dd6549a/0821671 as the parity targets.)

**Telemetry schema**: JSONL append-only with NO_OVERWRITE_VIOLATION, fsync, bi-temporal (valid_time_iso vs transaction_time_iso), runtime-resolved sealed_hash, conditions_on frozen tuple {version: v1.0, tau: 0.42, qb_questionable_epa: 0.0947}, epistemic routing (Class A eligible sources: injury_note, practice_report, beat_writer; Class B only: dk_line, form4).

**Weather veto**: outdoor wind monotone tax −0.0285 EPA/play per 10 mph; pass rate 49.5% at 0–5 mph → 46.8% at 16–20 mph. Temperature non-monotone noise 20–45°F. Referee crews 16% penalty spread: 11.79 (Land Clark) to 13.70 (Clete Blakeman), 13.68 (Shawn Hochuli), league mean 12.85.

**Biomechanical**: 0.85s under-center play-action mesh hesitation; 0.71s LB freeze, ~3.4 yds displacement; sub-2.0s pressure sack rate 15.8% vs 10.1% at 2.5–2.9s (+57% relative, p=0.043); RLS separation: KC 3.45 yd, BUF 3.43 yd vs ARI 2.74 yd; Drake London 2.86 YPRR zone vs 1.57 man; Braelon Allen 4.77 YPC vs Breece Hall 2.93 YPC zone.

**Veto adjudication** — I need to define physical/biomechanical/weather vetoes that can override the simulation. E.g., wind > threshold vetoes deep-pass volume; QB_QUESTIONABLE re-resolution vetoes start projection; injury dropoff hard floor.

**RLVR counterfactual vetoes** — 3 verifiable scenarios with predictions. RLVR = RL with Verifiable Rewards (arXiv:2402.03300 GRPO). Scenarios:
1. Serializer parity test: if canonicalizeForSeal is not applied, golden-digest test must FAIL (digest mismatch dd6549a vs 0821671); after fix, PASS. Prediction: exact 64-char SHA-256 equality.
2. Sinkhorn numerical breakdown: if ε dropped to 1e-4 without log-domain, K underflows to 0 → NaN; prediction: marginal L1 error explodes > 1e-9, mass_moved → NaN.
3. Class B contamination: injecting dk_line record with status used_in_overlay must raise CLASS_A_FIREWALL_VIOLATION; prediction: raise ValueError, no write.
4. HHI clamp: extreme HHI triggers clamp at 1.60.
5. Tau mutation: mid-week τ change throws via assertTauSealed / locked-projection.ts; 6 unit tests.

Let me make them crisp and "verifiable" with specific assertions and predictions.

**Multi-hop derivation in THINK_TRACE**: chain from sealed Merkle → canonical serialization → Sinkhorn reallocation → metric computation (SII, QPTSR, RLS, SPESE, TOR, SVA, DWP) → Markov simulation → Step N residual annotation → settlement → GRPO update → back to pre-seal. Show where the gray zones are (τ naming collision, serializer parity, Class A/B boundary, ε regime, HHI clamp, ticket-null gate).

Now units. Let me assign SI/information units:
- EPA: points per play (expected points added), dimensionless ratio of points.
- τ_rating: points (σ prior in points = 4.6607).
- τ_coach: unitless (quantile level ∈ (0,1)).
- Sinkhorn ε: same units as C (EPA-ish cost units), so ε = 0.10 cost-units.
- Shannon entropy: bits (log base 2) — SPESE.
- SII: bits or dimensionless — from 45/300 − 30/300 = 0.05.
- HHI: dimensionless ∈ [1/n, 1].
- N_eff: count (dimensionless).
- PROB_PER_POINT = 0.033 per point (probability per point) — logistic slope.
- Wind: mph; tax −0.0285 EPA per 10 mph.
- Time: seconds (clock), 0.85 s mesh, 0.71 s freeze, 2.0/2.5–2.9 s pressure.
- Distance: yards.
- Mass moved: probability mass (dimensionless).
- Hash: 256-bit.
- The 288-bit bitmask = 9 × Uint32Array = 288 bits information.

Breakdown regimes:
- Sinkhorn: εc_max/ε ≫ 1 → underflow; here C_max/ε = 9 → e^-9 ≈ 1.23e-4, near float64 underflow boundary only in log-domain; naive multiplication K may underflow for larger C. Also rank deficiency in C (C symmetric Toeplitz-like with 0.05 diag) → near-degenerate transport plan.
- HHI clamp saturation.
- Monte Carlo: n_sims → ∞ gives CDF convergence ~ O(1/√n); at 10,000, standard error ~ 1% on tail probabilities.
- Entropy: p_i = 0 → 0 log 0 = 0 by convention; negative mass rejected.
- Empirical Bayes: k = 40 plays; as n → 0, r_shrink → 1 → full shrinkage to prior; as n → ∞, r_shrink → 0.
- Inverse-MDP: τ → 0 or 1 degenerates to worst/best-case quantile → non-smooth policy.
- Clock: 175-iteration cap binds when pace < ~20.6 s/play (3600/175 = 20.57).

Good, that's a lot of formal content.

**Citations**: I'll use [§3.5] etc. and include verbatim quotes. I'll note page markers absent. Actually let me use a hybrid: "[PAGE ≈ N]" flagged inferred, or just "[SRC §X, p. N–M inferred]". Hmm. To be safe and compliant with "when source pages are provided," I'll state upfront: "The supplied text carries no explicit [PAGE N] delimiters; page bands below are inferred from section order across the 40-page bundle and flagged as such. All verbatim quotes are exact." That's honest.

Verbatim quotes I can pull:
- "sportsbook lines, odds, de-vigged probabilities, and public betting splits do not govern football reality and are read strictly last at Step N (Zone 3 / Class B)" — but that mentions odds. Quoting is different from mentioning? Invariant says "Never mention spreads, totals, moneylines, or odds." Quoting a source sentence containing "odds" technically mentions it. Hmm. Risky. I should avoid quoting that. I can paraphrase or quote other sentences without betting terms. Let me choose quotes carefully:
  - "If any session's memory or prompt history disagrees with GSE AGENT ALIGNMENT, the file on disk wins"
  - "Never fabricate a formula, coefficient, join key, SHA-256 digest, test count, file path, arXiv citation, or season range that is not present in a captured artifact or a file on disk."
  - "Resolve sealed_hash dynamically at runtime"
  - "Never write a wall-clock timestamp (new Date()) into the coachMindsetHash payload"
  - "Do not reseal mid-week"
  - "A named infrastructure or data blocker (NAMED_GAP_RECEIPT) always beats a plausible-sounding fabricated number."
  - "A commit that does not reach origin/engine/public-baseline-2026-10-24 ... does not exist"
  - "Public betting splits" — avoid.
  - "the engine simulates every play of every game 5,000 to 10,000 times from the bottom up using five coupled mathematical layers"
  - "Pinned GSE-SII (45/300 − 30/300 = 0.05) passes bit-identically"
  - "marginal error 8.47e-11 ≪ 1e-9"
  - "Recursive key-sorted serializer closes TS (dd6549a...) vs. Python (0821671...) conflict; both emit identical 64-char SHA-256"
  - "JavaScript's JSON.stringify(obj) serializes object keys in insertion order whereas Python's json.dumps(obj, sort_keys=True, separators=(",", ":")) sorts keys lexicographically at every nesting depth"
  - "outdoor wind imposes a monotone tax of −0.0285 EPA/play per 10 mph (suppressing pass rate from 49.5% at 0–5 mph to 46.8% at 16–20 mph"
  - "referee crews span a 16% penalty spread (11.79 flags/game for Land Clark to 13.70 for Clete Blakeman and 13.68 for Shawn Hochuli around the 12.85 league mean)"
  - "starting field position follows a 3.2× value gradient (1.388 pts/drive inside own 20 to 4.482 pts/drive inside opp 20)"
  - "a coaching change shifts team quality by a mean of +0.046 EPA/play (+3.6 points/game) and a maximum of +0.202 EPA/play (+15.9 points/game"
  - "sub-2.0s simulated pressures/creepers converting to sacks at 15.8% vs. 10.1% at 2.5–2.9s (+57% relative lift, p = 0.043, Cycle c35)"
  - "0.71s freeze, ~3.4 yds displacement"
  - "fast 0.85s under-center play-action mesh hesitation"
  - "HHI_league = 0.135 (N_league = 7.41)" and "Detroit (HHI = 0.159, N_eff = 6.30, m = 1.08×) and ... New Orleans (HHI = 0.087, N_eff = 11.43, m = 0.81×)"
  - "ε = 0.10, Schmitzer log-domain stabilization, marginal L1 error ≤ 1e-9"
  - "assertTauSealed and Merkle recomputation"
  - "throws a hard runtime exception on any mid-week τ mutation, verified by six unit tests"
  - "146 modules sit at ENABLED=false (46 liftable, 100 gated/stub)"
  - "ticket: null" — that's fine, not a betting term per se (ticket = routing ticket). Actually "ticket" in source means a calibration routing receipt, not a betting slip. Fine to mention as code token? It could read as betting "ticket." I'll call it "the `ticket: null` construction-time literal" — it's a code token. I think it's fine, but to be safe I'll mention it minimally as "null-ticket construction literals."

Let me be careful about "money% - ticket%" — avoid. "stake-weighted divergence" — avoid altogether or describe abstractly as "external consensus divergence." Better to skip.

"DFS lineups," "SGP" — avoid.

OK. Also "de-vig," "hold," "rake" — avoid. "Pinnacle," "DraftKings," "BetMGM" — these are sportsbooks; mentioning names might be OK but implicitly betting. Avoid.

Now, the "CROSS_LAYER_VETO_ADJUDICATION" — physical/biomechanical/weather veto proof. I'll define three veto classes:
1. Weather veto: wind ≥ threshold vetoes deep-pass assumptions; formal condition: if u_wind ≥ 20 mph, deep-pass EPA delta forced ≤ −0.057 (2 × −0.0285) and pass-rate prior shifted down by ≥ 2.7 pp. Integrity proof: monotone, evidence-cited, pre-game-known covariate, no post-hoc fitting.
2. Biomechanical veto: sub-2.0s pressure → sack hazard 15.8% (vs 10.1% baseline) overrides nominal protection rating; formal hazard ratio 1.564, binomial p = 0.043. If LT/OL availability flag fires, the execution multiplier (OL 0.91) multiplies the Sinkhorn-reallocated share.
3. Physical/kinematic veto: LB freeze 0.71 s / 3.4 yd displacement → seam void opens TOR; vetoes "spine intact" assumption.
4. Referee crew: 16% flag spread → drive-extending penalty hazard; formal Δλ = ±0.85 flags/game.
5. Clock/pace veto: if pace < 20.57 s/play, the 175-iteration cap binds and truncates trajectories → total-play distribution truncated; veto against using the tail.

Also "singularity/breakdown regimes" for each.

Now word counts. Let me draft with substantial length. Aim ~2,800 words total.

Let me also handle: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So avoid inventing ratios. All equations I write must be traceable to the source. I'll mark inferred-generalizations clearly (e.g., "general form," "standard definition of entropic OT") vs. source-anchored values.

I should also do the "gray-zone audit" — enumerate ambiguities: τ collision, page-marker absence, ε scale, HHI clamp, 175-cap, whether 6.95 is TD+XP, whether r_shrink formula is k=40 precision weighting (the code uses 45*0.04; 45*0.04 = 1.8, so r = 1/2.8). Note the mismatch between "k = 40 plays" and the code's 45·0.04 — that's a genuine gray zone worth flagging. 45 × 0.04 = 1.8; and k=40 would be 1/k = 0.025; 45*0.04 is not 40. So there's a discrepancy: source says "shrunk at k = 40 plays" but code uses 45 and 0.04. Flag it. Good catch — that's exactly the kind of audit the prompt wants.

Also: `away_net_epa = ((off_epa - drop) * eff_mult) - def_epa` — subtraction of opponent def_epa where def_epa is negative for good defenses, so subtracting a negative adds. Consistent.

Also home gets `+ (hfa / 79.1)` = 1.56/79.1 = 0.0197 EPA ≈ 1.56 points. Good.

Also `r_shrink = 1.0 / (1.0 + 45.0 * 0.04)` = 1/2.8 = 0.3571. Then `(1 - r_shrink) = 0.6429`. So pass_delta = 0.6429 × (rate − 0.54). For CIN early_pass_rate 0.63 → delta = 0.6429 × 0.09 = 0.0579. So p_pass on D1 = 0.48 + 0.0579 = 0.538. Reasonable.

Also note `clock_sec` starts 3600 for all sims, so all games are 60 min — no OT. And 175-play cap → 175 plays max. At ~27 s/play that's 4725 s > 3600, so clock binds first. 3600/27 = 133 plays. Fine.

Also the 4th-down go_mask logic and tau >= 0.40 threshold.

Let me also compute the "45/300 - 30/300 = 0.05" — that's 0.15 - 0.10 = 0.05. As a pinned SII value.

Now the ⟨C, P⟩ vs entropy: F_ε(P) = ⟨C,P⟩ + ε Σ P_ij log P_ij (or minus εH). Units: cost units.

Let me write it.

Also need "RETROCAUSAL_GENEALOGY" — historical/scientific lineage: 
- Sinkhorn & Knopp 1967 (matrix scaling); Cuturi 2013 (entropic regularization, arXiv:1306.0895 — I can cite standard); Schmitzer 2019 log-domain stabilization (arXiv:1610.06519).
- Bradley-Terry 1952 / Luce 1959 choice model; Glickman 1999 (Glicko) Bayesian shrinkage; Empirical Bayes (James-Stein 1961; Efron-Morris 1975).
- Inverse MDP / quantile MDP: the doc cites arXiv:2309.00756 (inverse MDP fourth-down). 
- arXiv:1807.09236 (Empirical Bayes BTL).
- arXiv:2609.33664 (pass-blocking HMM), arXiv:2502.16313 (snap-timing Gamma multilevel), arXiv:2606.18512 (causal panel), arXiv:2609.33814 (unregularized OT), arXiv:2610.02395 (FlashSinkhorn 2), arXiv:2109.11761 (e-process calibration), arXiv:2402.09698 (Ramdas), arXiv:2402.03300 (GRPO), arXiv:2501.13956 (Graphiti TKG), arXiv:2510.12323 (RAG-Anything).
- Marchenko-Pastur / BBP (BBP 2005) for residual spike detection.
- Shannon 1948 (entropy).
- Ville 1939 (Ville's inequality).
- PAVA / isotonic regression (Barlow et al. 1972).
- Mondrian conformal prediction (Vovk; arXiv:2107.00363 for Mondrian).
- Archimedean copula (Genest & MacKay 1986).
- Negative binomial overdispersion (VMR = 1.88 vs Poisson 1.0).
- Kahneman-Tversky prospect theory for loss aversion / panic; actually the doc uses "panic_pp" — trailing 7–14 panic residuals. Could cite prospect theory.
- Belichick-Adams lineage: Belichick (4th-down aggressiveness) + Adams (the fictional/math modeler) — "Belichick-Adams Coach-First Doctrine."
- Clauset-Shalizi-Newman for power-law? Not needed.

Multi-week traps:
1. Memory drift across 13 sessions → re-derivation. Trap: agent trusting chat history over disk.
2. Sandbox hash confusion (faab2827 vs 23245bcb vs 85b5cd33).
3. Two parallel metric implementations.
4. Class B data leaking into Class A pre-serializer-fix.
5. Mid-week τ re-estimation temptation.
6. Mid-week reseal temptation.
7. Cron drift (duplicate Sunday crons, orphan v2.5-thu).
8. Untracked candidates/ directory (D3).
9. Hash literal hard-coding.
10. Ticket-null construction sites.
11. Citation fabrication (307/319 unverified).
12. Invalid commit cffa75a referenced but absent from history (D8).

Good, that's a rich genealogy.

**RECURSIVE_THEORY_OF_MIND** — crisis habit regression vs counter-trap vs clock. This asks: model the agent's own failure modes recursively. Framing: under deadline pressure (clock = Tuesday 04:00 CT seal), the agent regresses to "helpful" behaviors that violate standing rules — fabricating a hash, re-estimating τ, pulling Class B signal forward. Counter-trap: pre-register the veto and make the honest failure (NAMED_GAP_RECEIPT) cheaper than the fabrication. The clock: the seal is a hard wall; the only permitted actions after 04:00 are read-only overlays. TOMM (theory of mind) recursion: I model the next agent modeling me. Three levels.

Also "crisis habit regression": LLMs under context pressure default to plausible-sounding numbers (Rule 10). Counter-trap design: fail-closed validators, runtime seal resolution, AST firewalls, 4-seat review, fresh-process test receipts, exact-digest golden tests.

**CROSS_LAYER_VETO_ADJUDICATION** — must argue that a physical/biomechanical/weather fact can veto the statistical layer. Hierarchy: physics > biomechanics > information > model. Provide proofs: 
- Monotonicity proof for wind.
- Hazard-ratio proof for pressure→sack.
- Kinematic constraint proof for LB freeze distance.
- Referee penalty hazard.
- Pace/clock truncation.
- And the "no veto from the external consensus layer into Class A" — one-way firewall.

**RLVR_COUNTERFACTUAL_VETOES** — 3+ verifiable scenarios. I'll do 4 maybe but the spec says 3. I'll do exactly 3 well-developed, plus maybe a table.

Scenario A: Serializer parity.
Counterfactual: omit canonicalizeForSeal.
Prediction: TS digest = dd6549a…, Python = 0821671…, golden-digest test FAILS; after fix, identical 64-hex equality. Reward signal: binary pass/fail. Verified by spawning python3.

Scenario B: Sinkhorn numerical regime.
Counterfactual: ε = 1e-4, no log-domain.
Prediction: K entries = exp(-0.90/1e-4) = exp(-9000) = 0 → division by 1e-12 floor → u,v → 0 → P = 0 → marginal L1 error = 2.0 (> 1e-9) and mass_moved = 0 falsely; or NaN. Veto fires.

Scenario C: Class B → Class A contamination.
Counterfactual: set status = used_in_overlay on a dk_line record.
Prediction: ValueError CLASS_A_FIREWALL_VIOLATION, zero bytes appended, fsync not reached, file length unchanged. Verifiable by file size before/after.

Scenario D (bonus): mid-week τ mutation.
Counterfactual: mutate sealed tau 0.42 → 0.43 after seal.
Prediction: locked-projection.ts throws; 6 unit tests fail; canonical_hash diverges from expected_hash; simulate_matchup_pbp assertion trips.

Scenario E (bonus): HHI clamp.
Counterfactual: feed HHI = 0.01.
Prediction: m clamped to 1.60, not sqrt(13.5) = 3.67.

I'll present 3 primary + a compact additional table.

Now write it all. I'll be disciplined about the betting-term ban. Let me scan my planned text for banned words: spread, total, moneyline, odds. I must avoid:
- "spread" — avoid; use "margin distribution" instead.
- "total" — careful! "total" appears in "total plays" (fine, not a betting total) but I should distinguish. "Total plays" is a football stat, not a betting total. Hmm, the invariant says "Never mention spreads, totals, moneylines, or odds" — capitalized context means betting totals. But a strict reader might flag "total plays." I'll write "play count" or "plays per game" to be safe. Avoid the word "total" entirely where possible.
- "moneyline" — avoid. Use "outcome probability."
- "odds" — avoid. Use "implied probability" or "consensus."
- "ATS" — avoid.
- "hold," "vig," "rake" — these are betting economics; avoid or use "transaction cost." I'll say "transaction cost" abstractly or skip.
- "cover" — avoid.
- "line" — avoid! "line" appears in betting. But also in "line of code," "line 184." Hmm. I'll use "row" or "entry" or "code row" instead. Actually "line" in source code context is fine-ish but let me minimize and say "code row/locus."
- "handicap" — avoid.
- "prop" — avoid.
- "parlay" / "SGP" — avoid.
- "DFS" — avoid.
- "bet" / "wager" — avoid.
- "sharp money" — avoid; use "external consensus divergence."
- "tickets" — the source uses "ticket: null" as a code token; I'll call it "null routing token" to avoid confusion. Good idea.

Also "book" — avoid. "Six-book" → "six-source consensus layer" or just omit.

OK. Also "market" — the doc uses "market." Is "market" a betting term? It's borderline. I'll use "external consensus layer" / "late-bound external layer." Avoid "market."

Also "de-vig" — avoid.

Let me write.

Structure with headers exactly as specified. Let me produce.

I'll include a short preamble noting the citation convention (honest about missing page markers). Then the XML sections.

Let me now write the content with care for depth.

Draft:

---

Citation convention note: The supplied 40-page bundle text carries no explicit [PAGE N] delimiters in the transmitted body; page bands below are inferred from section order and flagged "inferred," never asserted as captured. Verbatim quotations are exact substrings of the supplied text and are anchored to the nearest section heading. Where a value cannot be anchored, it is marked NAMED_GAP per Standing Rule 1.

**<THINK_TRACE>** (~600 words)

Multi-hop derivation:

Hop 1 — Identity: The whole pipeline is gated by one 256-bit object identity. The Merkle root is computed over a JSON payload that must be canonicalized. Hence hash parity is upstream of every downstream claim. If two runtimes disagree on key ordering, the "same" state yields two identities.

Hop 2 — Canonicalization: F_canon: V → Σ* (finite byte string), then H: Σ* → {0,1}^256.

Hop 3 — Overlay: Given canonical identity, the injury overlay solves entropic OT.

Hop 4 — Metrics: seven kernels consume the reallocated shares.

Hop 5 — Simulation: 10,000 trajectories.

Hop 6 — Annotation: external consensus read last, read-only.

Hop 7 — Settlement: micro-outcome grading → GRPO → equation precision weights → back to pre-seal at Tuesday 00:00–03:59 CT. The loop is closed, which is why the seal boundary must be a hard wall; otherwise the loop becomes a feedback channel from the external layer into Class A.

Gray-zone audit: enumerate ~10 issues.

1. τ collision (0.42 vs 4.6607) — resolved as unit mismatch; the trap is any future "reconciliation."
2. Page markers absent — NAMED_GAP.
3. r_shrink: source says k = 40 plays; code uses (1 + 45×0.04) = 2.8. Flag: 45 and 0.04 are not k = 40; either the code or the doc is stale. This is a live gray zone requiring a named test.
4. ε = 0.10 with C_max = 0.90 → C/ε = 9 → K ~ 1.2e-4; naive float64 fine here but not at ε = 1e-3 (C/ε = 900 → underflow). The source's log-domain requirement is load-bearing.
5. HHI clamp [0.55, 1.60] — source quotes m = 1.08 and 0.81 for DET/NO, both inside clamp; clamp only fires at extremes.
6. 175-iteration cap vs 3600 s clock: cap binds below 20.57 s/play.
7. TD value 6.95 — implicit XP/2-pt blend; not derived in source.
8. hfa/79.1 = 0.0197 EPA; 1.56 pts; consistent with 79.1 pts/EPA conversion but the conversion constant itself is a gray zone.
9. "Class A eligible" source-type set excludes dk_line/form4 but the serializer conflict keeps ALL new data Class B — so Path 4A is unreachable until parity is green. That's the deepest gray zone: the code permits injury_note → used_in_overlay, but Rule 4 forbids it. Resolution: honor the stricter rule.
10. ticket-null: 4 permitted post-gate loci vs 15 construction-time loci.

That's a strong audit.

**<SOURCE_OPERATORS_AND_EQUATIONS>** — formal math with units, breakdown.

Include: canonicalization + SHA-256; Sinkhorn; HHI; entropy; SII pinned; Empirical Bayes shrinkage; inverse-MDP quantile; Markov transition kernels; metric definitions; e-process.

**<RETROCAUSAL_GENEALOGY>** — lineage + traps.

**<RECURSIVE_THEORY_OF_MIND>** — 3-level recursion.

**<CROSS_LAYER_VETO_ADJUDICATION>** — veto hierarchy with proofs.

**<RLVR_COUNTERFACTUAL_VETOES>** — 3 scenarios + predictions.

Let me now write in full, watching length. I'll aim for high density.

One more: "PAGES: 40" — I'll say the bundle spans 40 pages, and give inferred bands like "pp. 1–3 (inferred)" for section 1. Actually, let me map roughly:
- Title + intro: pp. 1–2
- §1 Standing rules: pp. 2–5
- §1.2 table: pp. 4–6
- §1.3 session map: pp. 6–8
- §2 three-zone: pp. 8–11
- §2.1 5-step: pp. 11–13
- §2.2 ledger: pp. 13–15
- §3 plans: pp. 15–20
- §3.2 code: pp. 17–22
- §3.3 gates: pp. 22–27
- §3.4: pp. 27–28
- §3.5 simulator: pp. 28–36
- §3.6: pp. 36–38
- §4 cadence: pp. 38–40
- §5 commercial: pp. 39–40

I'll flag these as inferred.

Now write.

I need to make sure I don't say "spread" even in quoting. The quote about wind: "outdoor wind imposes a monotone tax of −0.0285 EPA/play per 10 mph (suppressing pass rate from 49.5% at 0–5 mph to 46.8% at 16–20 mph" — clean.

"starting field position follows a 3.2× value gradient (1.388 pts/drive inside own 20 to 4.482 pts/drive inside opp 20)" — clean.

"referee crews span a 16% penalty spread" — contains "spread"! Avoid that quote or truncate before "spread." I'll quote: "11.79 flags/game for Land Clark to 13.70 for Clete Blakeman and 13.68 for Shawn Hochuli around the 12.85 league mean" — clean, and mention the 16% variation in my own words as "16% variation."

"coaching change shifts team quality by a mean of +0.046 EPA/play (+3.6 points/game) and a maximum of +0.202 EPA/play (+15.9 points/game, WAS Rivera → Quinn)" — clean.

Good.

Let me write now. I'll keep paragraphs tight but numerous.

For the Markov kernel block, present the transition probabilities as formal LaTeX with source anchors.

Let me produce final answer.

Word count check: I'll write generously.

Also must include "assumptions" and "exact singularity/breakdown regimes" in SOURCE_OPERATORS_AND_EQUATIONS. I'll add explicit "Assumptions" and "Breakdown regime" for each equation block. Good.

Let me write it out now.
</NATIVE_REASONING>

# GSE Frontier Reasoning Foundry — Adjudication of the Coach-First Engine Plan

**Citation convention (Standing Rule 1 compliance).** The transmitted 40-page body contains **no explicit `[PAGE N]` delimiters** in the text I received. Rather than fabricate page numbers — a direct violation of "Never fabricate a formula, coefficient, join key, SHA-256 digest, test count, file path, arXiv citation, or season range that is not present in a captured artifact" — I anchor every quotation to its nearest section heading and mark approximate page bands as **inferred**. Verbatim quotes are exact substrings. Anything unanchorable is tagged `NAMED_GAP`. This is the honest-failure path the source itself privileges: "A named infrastructure or data blocker (NAMED_GAP_RECEIPT) always beats a plausible-sounding fabricated number."

---

<THINK_TRACE>

**Multi-hop derivation chain.** The engine is a seven-link dependency chain in which every downstream claim inherits the integrity of the first link, and every integrity failure is a *silent* one.

*Hop 1 — Identity.* The entire state is addressed by a 256-bit Merkle root ("coachMindsetHash"). Nothing downstream can be trusted unless the pre-image bytes are deterministic. So the load-bearing primitive is not the simulator, not the Sinkhorn solver, not the seven metrics — it is the serializer.

*Hop 2 — Canonicalization.* Define the canonicalizer \(F:\mathcal{V}\to\Sigma^{*}\) mapping a nested value tree to a byte string, then \(H:\Sigma^{*}\to\{0,1\}^{256}\) (SHA-256). The source states the collision verbatim: "JavaScript's JSON.stringify(obj) serializes object keys in insertion order whereas Python's json.dumps(obj, sort_keys=True, separators=(',', ':')) sorts keys lexicographically at every nesting depth" [§3.6 / inferred pp. 36–37]. That single sentence explains why identically-valued states produce `dd6549a…` on one runtime and `0821671…` on the other. Two identities for one state is not a bug in hashing; it is a bug in \(F\).

*Hop 3 — Overlay.* Given a stable identity, injury flags trigger entropy-regularized optimal transport over the 5×5 role-interchangeability cost matrix \(C\) on `[WR1, WR2, WR3, TE1, RB1]` with ε = 0.10 and "Schmitzer log-domain stabilization, marginal L1 error ≤ 1e-9" [§3.5]. This is the only mid-week mutation channel, and it is required to be mass-conserving and identity-preserving simultaneously — a hard constraint pair.

*Hop 4 — Metrics.* Reallocated shares feed seven consolidated kernels in `gse-proprietary-seven.ts`: SII, QPTSR, RLS, SPESE, TOR, SVA, DWP [§1.2]. Their aggregate correctness is pinned by a single regression assertion: "Pinned GSE-SII (45/300 − 30/300 = 0.05) passes bit-identically" [§1.2 / §13 session row]. Note the arithmetic: 0.150 − 0.100 = 0.050. The test is an identity, not a fit, which is why it survives refactors.

*Hop 5 — Simulation.* "the engine simulates every play of every game 5,000 to 10,000 times from the bottom up using five coupled mathematical layers" [§3.5]. Five layers = sealed read-only loader → Sinkhorn + HHI scaling → coordinator tensor + seven metrics → Empirical-Bayes shrinkage + inverse-MDP fourth-down policy → post-simulation external-residual annotation.

*Hop 6 — Annotation.* The external consensus layer is read strictly last and strictly read-only; the source is explicit that MappingProxyType "raises TypeError on mutation" [§2 / Zone 3 row].

*Hop 7 — Settlement feedback.* T+2h grading of "120–300 play-level micro-outcomes per game" feeds "Empirical Bayes Kalman + KL-regularized GRPO (arXiv:2402.03300)" and only spawns a new kernel if residuals show "a Baik-Ben Arous-Péché (BBP) eigenvalue spike outside the Marchenko-Pastur noise bulk" [§4.1]. This closes the loop — which is precisely why the Tuesday 04:00 CT wall must be a *hard* wall: without it, the learning loop becomes a channel from the late-bound external layer back into Class A.

**Gray-zone audit (ten live ambiguities).**

1. **τ naming collision.** 0.42 vs 4.6607 is resolved in-source as unit mismatch — unitless inverse-MDP risk quantile vs. rating-model prior standard deviation *in points*. The trap is any future "reconciliation" of the two into one number; the source forbids it explicitly.
2. **Shrinkage constant drift.** The prose says early-down deltas are "shrunk at k = 40 plays," but the shipped simulator computes `r_shrink = 1.0/(1.0 + 45.0*0.04)` = 1/2.8 ≈ 0.3571. `45 × 0.04` is *not* \(k=40\). Either the document or the code is stale. This is a genuine, unclosed `NAMED_GAP` that a fresh-process test should pin.
3. **ε regime.** With \(C_{\max}=0.90\) and ε = 0.10, the exponent is −9, so \(K\sim e^{-9}\approx 1.23\times10^{-4}\). Float64 survives; ε = 1e-3 would give \(e^{-900}\) and hard underflow. The log-domain requirement is load-bearing, not decorative.
4. **HHI clamp.** The multiplier is clamped to \([0.55, 1.60]\); the quoted Detroit (1.08×) and New Orleans (0.81×) both sit inside the clamp, so the clamp's behavior is *untested* by the quoted evidence.
5. **Iteration cap vs. clock.** The simulator caps at 175 iterations against a 3600 s clock, so the cap binds only below 20.57 s/play — nearly unreachable at quoted paces (26.2–28.3 s), meaning the cap is a latent, not active, truncation.
6. **Touchdown value 6.95** is an implicit extra-point/2-point blend; the source never derives it.
7. **HFA conversion.** `hfa/79.1` = 1.56/79.1 = 0.0197 EPA, consistent with 79.1 points/EPA, but that conversion constant itself is never justified in the captured text.
8. **Class A unreachability.** The telemetry code permits `injury_note → used_in_overlay`, but Standing Rule 4 forbids *all* new mid-week data from Class A "until both runtimes use recursive lexicographical key-sorting." The stricter rule wins; Path 4A is dead until parity is green.
9. **Null routing token count.** 4 permitted post-gate loci vs. 15 construction-time loci — a 19-vs-15 discrepancy between the sweep prose and the remediation plan.
10. **Absent page markers** (this document) and **absent commit `cffa75a`** (D8) are the same class of defect: referenced-but-unverifiable artifacts.

</THINK_TRACE>

---

<SOURCE_OPERATORS_AND_EQUATIONS>

### E1. Canonical seal identity

\[
F_{\text{canon}}(v)=\text{sort}_{\text{lex}}\big(\text{keys}(v)\big)\ \text{recursively};\qquad
\mathcal{H}=H_{\text{SHA-256}}\big(\text{JSON}(F_{\text{canon}}(\text{payload}))\big)
\]

**Units:** \(\mathcal{H}\in\{0,1\}^{256}\) (256 bits = 64 hex chars). **Assumptions:** no `undefined`/`NaN` leakage; arrays preserve order; keys sorted at every depth; no insignificant whitespace (`separators=(",", ":")`). **Breakdown regimes:** (i) insertion-order divergence — the exact `dd6549a…` vs `0821671…` collision; (ii) `undefined`-key elision in TS with no Python analogue; (iii) float formatting divergence (`1e-7` vs `0.0000001`); (iv) Unicode normalization (NFC vs NFD) in free-text excerpts. **Evidence:** "Recursive key-sorted serializer closes TS (dd6549a...) vs. Python (0821671...) conflict; both emit identical 64-char SHA-256" [§2.2, TASK-ACT6A].

### E2. Entropic optimal transport (mid-week overlay)

\[
P^{\star}=\arg\min_{P\in U(r,c)}\ \langle C,P\rangle+\varepsilon\sum_{i,j}P_{ij}\log P_{ij},
\qquad U(r,c)=\{P\ge 0:\ P\mathbf{1}=r,\ P^{\top}\mathbf{1}=c\}
\]

Sinkhorn recursion with \(K_{ij}=e^{-C_{ij}/\varepsilon}\):

\[
u_i \leftarrow \frac{r_i}{\sum_j K_{ij}v_j},\qquad
v_j \leftarrow \frac{c_j}{\sum_i K_{ij}u_i}
\]

Convergence certificate: \(\|P\mathbf{1}-r\|_1+\|P^{\top}\mathbf{1}-c\|_1\le 10^{-9}\); mass transported \(=\tfrac12\|P\mathbf{1}-r\|_1\).

**Units:** \(C\) and \(\varepsilon\) share cost units (EPA-scale); \(r,c,P\) are probability mass (dimensionless). **Assumptions:** \(r,c\) strictly positive after the scratch floor (`c[idx]=0.01` then renormalized); C fixed for the ISO week. **Breakdown:** ε→0 ⇒ hard assignment, \(K\) underflows, plan may be non-unique (degenerate); ε→∞ ⇒ \(P\to rc^{\top}\), zero information, overlay becomes a no-op. **Evidence:** "ε = 0.10, Schmitzer log-domain stabilization, marginal L1 error ≤ 1e-9"; companion solver literature "arXiv:2609.33814" and "arXiv:2610.02395" explicitly may not alter ε or C mid-week [§3.5].

### E3. Effective-contributor load scaling

\[
N_{\text{eff}}=\frac{1}{\mathrm{HHI}},\qquad
m=\mathrm{clamp}_{[0.55,\,1.60]}\!\left(\sqrt{\frac{N_{\text{league}}}{N_{\text{team}}}}\right),\qquad
N_{\text{league}}=\frac{1}{0.135}=7.407
\]

Check against source: Detroit HHI 0.159 ⇒ \(N_{\text{eff}}=6.289\), \(m=\sqrt{7.407/6.289}=1.085\) ("1.08×"); New Orleans HHI 0.087 ⇒ \(N_{\text{eff}}=11.494\), \(m=\sqrt{7.407/11.494}=0.803\) ("0.81×"). Both quoted multipliers reproduce. **Units:** dimensionless. **Breakdown:** HHI→1 (single-contributor) gives raw \(m=2.72\) ⇒ clamp saturates at 1.60; HHI→0 gives \(m\to0\) ⇒ clamp floors at 0.55. The clamp, not the formula, governs the tails — an untested regime. **Evidence:** "HHI_league = 0.135 (N_league = 7.41)" [§3.5].

### E4. Metric kernels (definitions and units)

\[
\mathrm{SPESE}=H_{2}(p^{(20\text{–}80)})-H_{2}(p^{(\text{RZ})}),\qquad
H_{2}(p)=-\sum_i \hat p_i\log_2 \hat p_i,\ \ \hat p_i=\frac{p_i}{\sum_j p_j}
\]

**Units:** bits. **Assumptions:** normalized by mass; "rejects negatives." **Breakdown:** \(p_i=0\) handled by \(0\log 0\equiv 0\); any negative mass is a hard reject rather than a silent renormalize. **Evidence:** "shannonBits normalizes by mass and rejects negatives" [§1.2].

\[
\mathrm{SII}\big|_{\text{pinned}}=\frac{45}{300}-\frac{30}{300}=0.150-0.100=0.050
\]

**Units:** dimensionless (information-rate diff). **Breakdown:** the assertion is an algebraic identity; any refactor that changes it is a regression, not a tuning opportunity.

\[
\mathrm{QPTSR}:\ \frac{p_{\text{sack}\mid t<2.0\text{s}}}{p_{\text{sack}\mid 2.5\le t\le2.9\text{s}}}=\frac{0.158}{0.101}=1.564\ (+56.4\%,\ p=0.043)
\]

**Units:** dimensionless hazard ratio. **Breakdown:** small-\(n\) instability below ~40 pressure events per bin.

\[
\mathrm{RLS}:\ \Delta_{\text{sep}}=\bar y_{\text{break}}-(\text{cushion}+\text{shell offset})
\]

Empirical anchors: KC 3.45 yd, BUF 3.43 yd, ARI 2.74 yd; Drake London 2.86 YPRR vs. zone, 1.57 vs. man. **Units:** yards (and yards/route-run). **Breakdown:** falls back to the cell/tendency surface because live 10 Hz XY tracking is an admitted gap.

\[
\mathrm{TOR}:\ \lambda_{\text{tkl}}=N_{\text{opp plays}}\cdot s_{\text{LB}}\cdot \pi_{\text{box}}(11/12/21)\cdot\big(1+\phi_{\text{PA}}\big),\quad \phi_{\text{PA}}\approx f(0.71\,\text{s freeze},\ 3.4\,\text{yd})
\]

**Units:** tackles/game (count); freeze in seconds; displacement in yards. **Breakdown:** linearity fails once freeze exceeds route depth.

### E5. Empirical-Bayes shrinkage and inverse-MDP fourth-down policy

\[
R=(I+AS)^{-1},\qquad
\delta_{\text{shrunk}}=(1-r_{\text{shrink}})\,\big(\text{rate}-0.54\big),\qquad
r_{\text{shrink}}=\frac{1}{1+45\cdot 0.04}=0.3571
\]

**Units:** pass-rate deltas in probability; \(r_{\text{shrink}}\) dimensionless. **Breakdown:** \(n\to0\Rightarrow r_{\text{shrink}}\to1\Rightarrow\) full shrinkage to prior; \(n\to\infty\Rightarrow r_{\text{shrink}}\to0\Rightarrow\) raw estimate. **Flagged discrepancy:** prose says \(k=40\) plays, code encodes \(45\times0.04\). This is `NAMED_GAP`.

\[
a^{\star}(s)=\arg\max_{a\in\{\text{go},\text{FG},\text{punt}\}} Q_{\tau_{\text{coach}}}\!\big(V(s,a)\big),\qquad \tau_{\text{coach}}=0.42
\]

with the frozen five-zone drive-value curve \(V\): 1.388 (own 1–20), 1.921 (own 21–40), 2.447 (midfield), 3.517 (opp 21–40), 4.482 (opp 1–20) points/drive. **Units:** \(V\) in points; \(\tau_{\text{coach}}\) unitless quantile level ∈ (0,1); \(\tau_{\text{rating}}=4.6607\) in **points** (prior σ). **Breakdown:** \(\tau\to0\) or \(\tau\to1\) degenerates to worst-/best-case quantile selection and produces a discontinuous policy; \(\tau=0.42\) is below the median, i.e. a pessimistic quantile functional. **Evidence:** "the coach chooses … by maximizing the frozen τ_coach = 0.42 quantile of future drive value (arXiv:2309.00756)" and "starting field position follows a 3.2× value gradient (1.388 pts/drive inside own 20 to 4.482 pts/drive inside opp 20)" [§3.5, §4.2].

### E6. Play-by-play Markov transition kernels

\[
p_{\text{conv}}=\mathrm{clip}\!\left(0.64-0.05\,d+0.55\,\overline{\mathrm{EPA}},\ 0.15,\ 0.82\right),\quad d=\text{yards to go}
\]
\[
p_{\text{pass}}=\mathrm{clip}\!\left(b_{d}+\delta_{\text{pass}}+\mathbb{1}[Q4\wedge \Delta\le -7]\cdot(0.08+\pi),\ 0.15,\ 0.90\right),\quad b=(0.48,0.56,0.74)
\]
\[
Y_{\text{pass}}\sim\mathcal{N}\!\big(11.4+14.5\,\overline{\mathrm{EPA}},\ 7.5^{2}\big),\qquad
Y_{\text{run}}\sim\mathcal{N}\!\big(4.4+9.5\,\overline{\mathrm{EPA}},\ 4.2^{2}\big)
\]
\[
p_{\text{TO}}=\mathrm{clip}\!\left(\{\text{pass}:0.021,\ \text{run}:0.008\}-0.015\,\overline{\mathrm{EPA}},\ 0.003,\ 0.045\right),\qquad p_{\text{sack}}=0.062
\]
\[
t_{\text{play}}\sim\mathcal{N}\big(\text{pace},\ 3.2^{2}\big)\ \text{clamped}\ [8,40]\,\text{s},\qquad T_0=3600\,\text{s},\qquad N_{\max}=175
\]

**Units:** probabilities dimensionless; yards in yd; time in s. **Breakdown:** the 175-cap binds when pace < 3600/175 = **20.57 s/play**, truncating the play-count distribution's right tail; touchdown constant 6.95 is an undocumented XP/2-pt blend; no overtime branch exists (all trajectories start at 3600 s and terminate at 0).

### E7. Sequential calibration e-process

\[
\Pr\!\left(\sup_{t\ge 0} e_t \ge \frac{1}{\alpha}\right)\le \alpha\quad\text{(Ville's inequality)},\qquad \alpha=0.05\Rightarrow e_{\text{threshold}}=20
\]

**Units:** \(e_t\) is a likelihood ratio (dimensionless). **Breakdown:** the guarantee is a *supremum over stopping times*; it survives optional stopping only if \(e_t\) is a nonnegative martingale — any mid-stream re-fit of the bet breaks the martingale property and voids the bound. **Evidence:** "P(e_τ >= 1/α) <= α at any stopping time τ" and "SHADOW_EPROCESS_ENABLED = false (gateAction: 'none')" [§3.3, block 5].

</SOURCE_OPERATORS_AND_EQUATIONS>

---

<RETROCAUSAL_GENEALOGY>

**Lineage of the primitives.**

*Matrix scaling.* Sinkhorn–Knopp (1967) diagonal scaling → Cuturi's entropic regularization → Schmitzer log-domain stabilization. The GSE implementation is textbook plus a frozen ε, a fixed C, and a marginal-L1 certificate. The *genealogical* point is that Sinkhorn is a fixed-point iteration, so instability is inherited from the operator's conditioning, not from the code.

*Paired-comparison rating.* Bradley–Terry (1952) → Luce choice axioms → Glicko-style Bayesian shrinkage (Glickman) → the source's `1807-09236-empirical-bayes-btl.ts` `shrinkBtl()` and `R = (I+AS)^{-1}`. The shrinkage operator is James–Stein (1961) / Efron–Morris (1975) in disguise.

*Decision theory.* Expected-utility maximization → quantile/risk-sensitive MDPs → inverse-MDP recovery of a coach's latent risk preference (`2309-00756`). Recovering τ rather than assuming it is the innovation; the τ = 0.42 value is a *fitted* preference, not a design choice.

*Sequential testing.* Ville (1939) → e-values → `arXiv:2109.11761` (Arnold–Henzi–Ziegel) and `arXiv:2402.09698` (Ramdas et al.). The 20.0 rejection threshold is \(1/\alpha\) at \(\alpha=0.05\).

*Random-matrix diagnostics.* Marchenko–Pastur bulk → Baik–Ben Arous–Péché spike detection, used as the *only* license to synthesize a new kernel from residuals.

*Control-room lineage.* The "Belichick–Adams Coach-First Doctrine" is a doctrinal framing: football state determines the distribution; external consensus is a downstream sensor.

**Multi-week traps (retrocausal failure surfaces).**

1. **Chat-memory supremacy.** "If any session's memory or prompt history disagrees with GSE AGENT ALIGNMENT, the file on disk wins." Any agent that trusts its own context re-derives settled facts — this is how thirteen sessions produced ~1,900 dense messages and two parallel metric implementations.
2. **Digest confusion.** Three distinct hashes (`23245bcb…`, `85b5cd33…`, `faab2827…`) circulated across two machines. The trap recurs any time a test fixture digest is pasted into production code.
3. **Two-machine split.** Windows `C:/Users/Garrett/Sports` vs. Linux `/opt/model` produced "missing file" panics that were actually path-split artifacts.
4. **Untracked seal directory.** `candidates/` is untracked (D3) — git cannot recover it. A single `rm -rf` destroys the entire week's identity.
5. **Cron drift.** Duplicate Sunday entries plus an orphan Thursday entry (D6) mean cadence and reality diverge silently.
6. **Phantom commit.** `cffa75a` is cited but absent from history (D8) — retrocausal citation of work that never landed.
7. **Fabrication pressure.** 307 of 319 citations unverified; the honest countermeasure is the 4-layer AST and metadata verifier, not more prose.

</RETROCAUSAL_GENEALOGY>

---

<RECURSIVE_THEORY_OF_MIND>

**Level 0 — the agent's own regression under clock pressure.** As the Tuesday 04:00 CT wall approaches, an agent's cheapest path to "usefulness" is to emit a plausible number. The source names this exactly: "Never fabricate a formula, coefficient, join key, SHA-256 digest, test count, file path, arXiv citation, or season range." The regression is *habitual*, not malicious: helpfulness prior beats verification cost. Every observed failure in the ledger — the twin metric implementations, the hard-coded digests, the phantom commit — is a downstream symptom of that one prior.

**Level 1 — the counter-trap.** You cannot fix a helpfulness prior with exhortation. You fix it by making the honest failure *cheaper* than the fabrication: `NAMED_GAP_RECEIPT` as a first-class output; runtime `resolve_runtime_sealed_hash()` so no digest need ever be typed; fail-closed validators that raise on Class-B contamination; an AST firewall that fails CI on any `OddsInput` import or `marketFairProb` reference in Class A; fresh-process test receipts so quoted handoffs cannot masquerade as measurements. The counter-trap converts verification from a virtue into a *precondition*.

**Level 2 — the next agent modeling me.** I must assume my successor inherits my artifacts and none of my reasoning. Therefore every claim I emit must be either (a) a verbatim anchor, (b) a reproducible computation, or (c) explicitly `NAMED_GAP`. The recursion terminates only when the artifact is self-verifying — which is exactly why the source insists the alignment file *wins over memory*.

**The clock as a hard wall.** The seal is not a deadline; it is a phase boundary. Pre-04:00 the system is parametric and mutable. Post-04:00 the only legal operations are read-only overlays and mass-conserving transport under frozen C. "Do not reseal mid-week" and "locked-projection.ts throws a hard runtime exception on any mid-week τ mutation, verified by six unit tests" are the same statement in two registers. Any agent that models the clock as "a deadline I can negotiate" will re-estimate τ under pressure. The counter-trap is to make the exception *unignorable*: a thrown error, not a lint warning.

</RECURSIVE_THEORY_OF_MIND>

---

<CROSS_LAYER_VETO_ADJUDICATION>

Veto precedence, highest to lowest: **physics → biomechanics → information geometry → statistical model → external consensus.** The last is a one-way sensor and can never veto upward.

**V1 — Weather (physical) veto.** Claim: "outdoor wind imposes a monotone tax of −0.0285 EPA/play per 10 mph (suppressing pass rate from 49.5% at 0–5 mph to 46.8% at 16–20 mph, whereas temperature is non-monotone noise between 20°F and 45°F)" [§4.2]. *Proof of veto authority:* the wind term is pre-game-known, monotone in a measured covariate, and independent of the model's fitted parameters — so it can only *subtract*, never manufacture, edge. Temperature's non-monotonicity disqualifies it as a veto and admits it only as a variance term. *Formal:* \(\partial \,\mathrm{EPA}/\partial u \le 0\) for \(u\) = wind speed (mph); the deep-pass share is bounded above by the 0–5 mph prior minus 2.7 pp at 16–20 mph.

**V2 — Biomechanical hazard veto.** Claim: "sub-2.0s simulated pressures/creepers converting to sacks at 15.8% vs. 10.1% at 2.5–2.9s (+57% relative lift, p = 0.043)" [§3.5]. *Proof:* the hazard ratio 1.564 is measured at \(p=0.043\), so the 95% lower bound (by normal approximation on the log-hazard) still exceeds 1.0 — the veto direction is established even at the boundary of significance. This vetoes any "protection is intact" assumption whenever the OL execution multiplier (0.91) is active.

**V3 — Kinematic displacement veto.** Claim: "0.71s freeze, ~3.4 yds displacement" and OL/TE state persistence "ρ >= 0.70 with p_fail <= 0.02." *Proof:* a freeze of 0.71 s at NFL closing speeds implies the seam void opens before the second-level defender can re-key; the TOR kernel's linearity in freeze duration is therefore valid only over that window.

**V4 — Pace/clock truncation veto.** The 175-iteration cap vs. 3600 s clock creates a hard right-tail truncation below 20.57 s/play. Any inference drawn from the extreme slow-pace tail is vetoed as an artifact of the cap, not a property of the game.

**V5 — Officiating hazard (institutional, not physical).** Quoted: "11.79 flags/game for Land Clark to 13.70 for Clete Blakeman and 13.68 for Shawn Hochuli around the 12.85 league mean" — a 16% variation [§4.2]. This is a *drive-extension* hazard and, unlike wind, it is assigned, not measured — so it may shift variance but may not be treated as a monotone physical law.

**V6 — Downward firewall.** The external consensus layer cannot veto Class A. Any attempt is a `TypeError` at the `MappingProxyType` boundary. Vetoes flow *down*, never *up*.

</CROSS_LAYER_VETO_ADJUDICATION>

---

<RLVR_COUNTERFACTUAL_VETOES>

**Scenario A — Serializer parity (canonicalization veto).**
*Counterfactual:* ship `locked-projection.ts` without `canonicalizeForSeal`.
*Prediction:* TS emits `dd6549