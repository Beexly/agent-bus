# PROJECT MOVE-37 — ROUND 05: TRIPLE-PASS VERIFICATION + IRL PROTOCOL
## Paste-ready prompt for DeepSeek (theorist). Execution lab = Motif VM. Courier = Garrett.

---

You are the theorist in a closed discovery loop. You have no code-execution environment: every number you have ever produced in this project is a prediction or a protocol, never an observation. The execution lab (a Linux VM running real code against real nflfastR play-by-play data, seasons 1999–2025+) is the only source of observations. Garrett couriers prompts and results between us. Your job in Round 05 is eight work packages below, under a non-negotiable triple-pass doctrine. Read the entire prompt before producing any output.

## 0. LOOP CONTRACT AND CLAIM TIERS (unchanged, restated for completeness)

- Every statement you make must carry exactly one tier label:
  - **[OBSERVED]** — a number that came back from the execution lab, quoted with its source file and line/table reference. You may only use this tier for the lab results quoted in §2.
  - **[INFERRED]** — a conclusion that follows deductively from labeled observations. Show the deduction.
  - **[SPECULATIVE]** — everything else: hypotheses, predictions, literature claims you have not personally verified, design choices. The majority of your output lives here. Label it.
- You are forbidden from presenting a [SPECULATIVE] statement with the grammar of an [OBSERVED] one. No "results show" for things you did not run. No "we found" for things the lab found — say "the lab found."
- Null and negative results are first-class deliverables. A killed hypothesis with a documented cause of death is worth more than a vague surviving one.
- Never fabricate a citation, a number, a quote, or a paper. If you cannot verify it, label it unverifiable and move on.

## 1. THE TRIPLE-PASS DOCTRINE (non-negotiable, applies to every work package)

For every claim, number, and protocol in this round, you will perform THREE independent passes and report all three:

- **Pass A — direct:** the most obvious research path / derivation / design.
- **Pass B — adversarial:** deliberately try to break the Pass A result. Different query vocabulary, different source class (e.g., if Pass A used a paper's abstract, Pass B reads the methods section or the replication package; if Pass A used a docs page, Pass B checks the underlying source code or changelog), different mathematical framing.
- **Pass C — orthogonal:** a third route sharing no intermediate sources with A or B (different search engine framing, different database, different derivation starting point, different model class for a replication design).

**Adjudication rule:** 3/3 agreement = CONFIRMED. 2/3 agreement = PROVISIONAL, with the dissenting pass documented in full and a lab test proposed to resolve it. 1/3 or 0/3 = REJECTED — drop the claim and say so explicitly. You may not silently keep a claim that failed adjudication.

**Effort honesty annex:** at the end of your response, list (a) every sub-task in this prompt you completed, (b) every sub-task you partially completed and what is missing, (c) every sub-task you did not attempt and why. Then do a **second shift**: one more full pass over all eight work packages looking specifically for what you missed, under-weighted, or let yourself off easy on — and report what the second shift found. If the second shift finds nothing, say so and explain what you checked.

## 2. ROUND-4 EXECUTION RESULTS — your raw material (all [OBSERVED], lab files cited)

The lab executed your Round-4 designs with seven harness fixes implemented (tournament changelog: `~/workspace/gse-discovery/symbolic-regression/TOURNAMENT_CHANGELOG_2026-09-13.md`; primary report: `~/workspace/gse-discovery/symbolic-regression/REPORT_WPA2_STRATIFIED.md`). Results:

**2a. Redesign A — time-stratified WPA² symbolic regression.** Strata built on `game_seconds_remaining` (EARLY: >2700; LATE: <900) after your specification error (§3).
- LATE stratum ceilings: GBM 0.3079/0.2979 (train/test), OLS 0.0514/0.0420, calibrated human time-term heuristic 0.1233/0.1165.
- Six late-game SR runs: **no program included the time term in any run.** Best SR R² 0.0369/0.0385; best expressions were transformations of `score_differential`; smooth linear models beat the best SR expressions.
- Pre-registered verdict: **SEARCH-SPACE LIMITATION CONFIRMED at the strongest test.**
- EARLY stratum control: replicated a down-only saturating form at R² 0.1126/0.0922, beating linear OLS — the kink is not decorative, but the finding is a trivial single-feature/coefficient result, not a flagship discovery.

**2b. Redesign C — soft-target regularization (beta 0.9) on full WPA².**
- Seed 42: collapsed to a constant, R² −0.0300. Seed 123: collapsed to a constant, R² −0.0207. Seed 7: score-differential transform, R² −0.0030.
- No time term appeared in any seed. All three runs are **worse than log-cosh alone**, whose prior best was 0.0157.
- Pre-registered verdict: **SR DECLARED STRUCTURALLY INCAPABLE of this target class.**

**2c. Play-type residual gate.** Target: `pass_indicator − xpass`.
- Observed ceiling: primary 0.0527, replication 0.0375. Your preregistered kill prediction (<0.03) **did not hold** — the residual is alive, but thin and mostly linear (OLS 0.0400/0.0264).
- The residual is bounded and light-tailed, so MSE is the appropriate loss if SR is later authorized on it.
- Mean residual ≈ −0.043: consistent with xPass overprediction OR a sample-selection artifact. **Unconfirmed — do not present it as a calibration flaw.**
- No SR has been run on this residual target. The spend decision is yours to argue.

**2d. IRL — not attempted.** This is the standing hard block and your Priority Zero (§4).

**2e. Standing gates from earlier rounds** (still in force): every future target must clear a real predictability ceiling well above R² 0.01 before search budget is spent; GLI-0.1 falsified (0.0037 vs your 0.112); Phase-4 "discovery" valid but trivial; Koopman momentum rejected (p=0.89); heavy-tail attractor diagnosis stands (log-cosh killed the +0.63 attractor → −0.02).

## 3. YOUR SPECIFICATION ERROR IN ROUND 4 (accountability, then a standing rule)

You specified strata on `quarter_seconds_remaining` as if it were game-level time. In nflfastR it is **quarter-level and maxes at 900 seconds**. Your literal specification was degenerate: `qsec > 2700` selects zero rows; `qsec < 900` selects effectively all plays. The lab caught this, rebuilt the strata on `game_seconds_remaining`, and documented the correction. Note the residual confound this leaves behind: the SR feature set still contained `quarter_seconds_remaining`, which coincides with the late-game gradient inside Q4 — any "time-like" signal the SR found may be this artifact, not genuine game-clock structure.

**Standing rule from this error:** every variable you name in any protocol must be verified against the nflfastR data dictionary **three ways** (docs page + column-list dump semantics + one known-values sanity check, e.g., max/quantiles you predict in advance and the lab confirms). Any protocol using an unverified column definition will be returned unexecuted. Apply this rule retroactively: in Work Package 6, audit every column your Round 1–4 protocols used and flag any whose definition you never verified.

## 4. WORK PACKAGE 1 — IRL RUNNABLE REFINEMENT PROTOCOL [PRIORITY ZERO / HARD BLOCK]

This is the single most important deliverable of Round 05. In your revised EV ranking you placed refined IRL at #1 (0.32): full coaching utility-function recovery plus real-time fourth-down decision prediction. The lab has never executed it because you have never supplied a runnable specification. Supply one now.

**4a. The protocol must be executable by a competent engineer with no further clarification.** It must contain, at minimum:
1. **Exact data specification:** every column used, with nflfastR table/field names verified per the §3 standing rule (three-way verification, predictions of value ranges stated in advance). Inclusion/exclusion criteria stated as exact predicates (down, distance, yardline, score differential, time — with the game-vs-quarter time distinction handled explicitly and defensively).
2. **The utility-function recovery estimator, fully specified:** the parametric or nonparametric family for the coach's utility function; the exact likelihood or moment conditions; the identification argument (what variation identifies risk aversion separately from beliefs about conversion probability — state the identification assumption explicitly and label it [SPECULATIVE]); the optimizer, its initialization, its convergence criterion, and its failure modes.
3. **The belief model:** how fourth-down conversion probability and its uncertainty are estimated (exact model, exact features, exact calibration procedure). If you use published fourth-down models, name them and verify the claims about them under the triple-pass doctrine.
4. **The real-time decision-prediction head:** exact mapping from (recovered utility, belief distribution, game state) to a predicted go/kick/punt decision; the decision rule's tie-breaking; the latency-relevant computational complexity stated honestly.
5. **Evaluation protocol:** exact train/test splits (by season, with the reason for the split stated), exact metrics (accuracy, log-loss, calibration curves, and a utility-weighted metric you define), exact baselines (always-go, always-kick, historical-frequency, and the best published fourth-down bot you can name — verified, not hallucinated).
6. **Pre-registered predictions:** numeric thresholds, stated BEFORE the lab runs anything, for (i) decision-prediction accuracy vs. each baseline, (ii) the recovered risk-aversion parameter's sign and plausible range, (iii) calibration slope of the belief model. For each: the number, the reasoning that produced it, and the **kill criterion** — the observed value below which you will declare this IRL refinement dead.
7. **Three independent replications by design:** specify two additional independent implementations the lab could run that share no code path with the primary (different estimator family, different belief model, different split) — this is your "re-test 3 times" for IRL, delivered as designs now.

**4b. Adversarial appendix for WP-1 (required):** the three strongest reasons this IRL refinement could fail or be vacuous (e.g., coaches are not utility-maximizers but heuristic-followers; the identification assumption fails because beliefs and preferences co-move; the decision is 95% explained by three heuristics making utility recovery unidentified). For each: the diagnostic the lab should run to detect it, and the kill criterion.

**4c. Honesty constraint:** if, after three passes, you conclude that a *runnable* IRL refinement protocol cannot be specified without an untestable identification assumption doing all the work, say so plainly and downgrade IRL in the atlas re-ranking (§11) with the evidence. A documented impossibility result is an acceptable output. A hand-wavy protocol is not.

## 5. WORK PACKAGE 2 — LITERATURE RE-RESEARCH AND RE-VERIFICATION (4 claims × 3 passes)

In Round 4 you made four literature-adjacent claims that the lab has **not** independently verified. For each claim below, run the full triple-pass doctrine (§1) — three independent research passes with different query strategies and different source classes — and report all three passes, the adjudication, and the exact verdict. For every CONFIRMED or PROVISIONAL claim, quote the single most supporting sentence you found and give the full citation (authors, year, venue, and a stable identifier: DOI, arXiv ID, or canonical URL — never a bare domain).

- **Claim L1:** "nflfastR xPass already exists, so raw play-type prediction is not white space." Verify: that the xPass model exists in nflfastR, what it actually predicts (pre-snap pass probability — confirm the exact definition and feature set), who built it and when, and whether any published work uses its *residual* (`pass − xpass`) as a discovery target. The residual-gate result (§2c) makes this load-bearing: if residual mining of xPass is itself published, say so.
- **Claim L2:** "Sandholtz et al. 2024 already performed the base fourth-down IRL experiment." Verify: the paper exists, its year, what it actually estimated (utility recovery? belief estimation? both?), its data source and sample, its headline quantitative result, and — critically — what it did NOT do, i.e., the precise gap your WP-1 protocol would fill. If the paper does not exist as you described it, document the correction.
- **Claim L3:** "Soft-target regularization plus complexity control may eliminate GP overfitting." Verify against the actual symbolic-regression / genetic-programming regularization literature: name the specific techniques (not hand-waves), who proposed them, what they were shown to do quantitatively, and whether any result exists on a target with the statistical profile of WPA² (heavy-tailed, low ceiling). Your Round-4 soft-target design failed in the lab (§2b) — reconcile the literature with that failure across three passes.
- **Claim L4:** "Bayesian Surprise has a principled KL-divergence definition but is impractical from point-estimate WP alone." Verify: the formal definition, its origin, whether any sports-domain application exists, and whether the "impractical from point-estimate WP" limitation is yours or is established in the literature. If established, cite it; if yours, label it [SPECULATIVE] and defend it across three passes.

**Additional re-research demand:** for each of L1–L4, name the **strongest paper or result that argues against your claim's implications** (the best counter-source you can find), summarize its argument fairly in 3–5 sentences, and state whether it changes your adjudication. Finding no counter-source after three genuine passes is reportable; finding none after one lazy pass is not.

## 6. WORK PACKAGE 3 — NUMERIC SELF-AUDIT (every number you asserted, Rounds 1–4)

Build a table with one row per quantitative claim you have made in Rounds 1–4 (your predicted R² values, EV rankings and their probabilities, the <0.03 kill threshold, the 0.35 Koopman prior, the 0.112 GLI-0.1 prediction, every "expected" effect size in every protocol). Columns: the claim (verbatim quote from your prior output) | round | tier it was stated at vs. tier it deserved | re-derivation Pass A | re-derivation Pass B (different framing) | re-derivation Pass C (different starting assumptions) | adjudication (CONFIRMED / PROVISIONAL / REJECTED) | lab outcome where one exists | corrected value you now endorse.

**The standard is re-derivation, not repetition.** Writing the same number three times is a failed pass. Each pass must genuinely recompute or re-derive from a different starting point. Where a number cannot be re-derived because its original derivation was never shown, mark it UNSOURCED — and count how many of your historical numbers are unsourced. Report that count prominently.

## 7. WORK PACKAGE 4 — CODE SELF-AUDIT (3 scripts × 3 review passes)

The lab executed your `move37_phase4_v2.py`, `move37_koopman.py`, and `tournament.py` but has **not** completed an independent line-by-line audit of the harness modifications. You will audit your own delivered code: three independent review passes per script (Pass A: logic-correctness read; Pass B: adversarial read assuming a bug exists and hunting it — off-by-ones, leakage between train/test, seed handling, wrong-column usage per §3, silent exception swallowing; Pass C: specification-conformance read — does the code actually implement what your protocol text said it implements, line by line).

Deliver a findings table per script: location (function/line region) | severity (CRITICAL / MAJOR / MINOR) | the defect or the reason you are confident none exists there | whether the defect could have altered any [OBSERVED] lab result in §2, and if so, which one and in which direction. If you find a defect that plausibly invalidates a lab verdict, say so explicitly and propose the exact re-run that would settle it. If three genuine passes find nothing, certify that with the same seriousness — "no findings" is a claim too, and it goes through adjudication like any other.

## 8. WORK PACKAGE 5 — INDEPENDENT REPLICATION DESIGNS (3 falsifications × 3 replications)

"Re-test everything 3 times" — you cannot run code, so you will design the re-tests. For each of the three lab falsifications below, design **three fully independent replication protocols** the lab can execute, varying along at least two of these axes per replication: random seeds, model class (SR variant, non-SR symbolic method, interpretable ML), feature set (including deliberate ablation of `quarter_seconds_remaining` to isolate the §3 confound), target transformation, train/test partitioning (by era, by team, by game script), and loss function.

- **F1:** time-stratified WPA² SR — "no time term in six late-game runs; search-space limitation confirmed."
- **F2:** soft-target regularization — "three seeds, two constants, all worse than log-cosh alone; SR structurally incapable."
- **F3:** play-type residual gate — "ceiling 0.0527/0.0375, thin and mostly linear; kill prediction <0.03 failed."

Each of the nine replication designs must include: exact specification (runnable, §3 column rule in force), pre-registered numeric predictions with reasoning, and kill criteria that state in advance what observed outcome would overturn vs. entrench the original verdict. At least one replication per falsification must be designed to **maximize the chance of overturning** the verdict (steel-manned opposition, not a straw re-run). Label which one that is and why it is the strongest challenge.

## 9. WORK PACKAGE 6 — NEW HYPOTHESIS GENERATION (find more; minimum 12)

The falsifications closed doors; your job is to find the doors nobody has checked. Produce **at least twelve (12) new falsifiable hypotheses**, each with: the hypothesis stated in one sentence | the target variable (exact, §3 column rule) | why it is not covered by any prior round (cite the round and the reason) | the pre-registered prediction (numeric) | the kill criterion | the cheapest lab test that could kill it.

**Mandatory mining sites** (you must draw at least one hypothesis from each — these are the survivors and anomalies the lab actually observed):
1. The residual mean ≈ −0.043 (§2c): design the test that determines whether it is xPass miscalibration or sample-selection artifact. State both hypotheses' distinct observable signatures *before* the lab runs anything.
2. The 0.0527/0.0375 residual ceiling's structure: what *kind* of signal is it (linear? interaction? regime-dependent)? Decompose it before proposing any SR spend.
3. The early-game down-only saturating kink (R² 0.1126/0.0922): is there a second feature that interacts with down to lift this beyond triviality? Name candidates with mechanistic justification, not vibes.
4. The §3 confound: `quarter_seconds_remaining`'s Q4 gradient — isolate it deliberately and test whether any prior "time-like" signal survives its ablation.
5. The GBM late-game ceiling (0.3079/0.2979): decompose *what the GBM is using* — feature-importance-driven hypothesis generation about which interactions carry the ceiling, and whether any are compactly expressible.
6. The min-bottleneck residue from Round 2 (scoring chance capped by the worse of field position vs. distance): you left this as a "coefficient, not a discovery" — take one more serious pass at whether a non-obvious functional form hides there, with a kill criterion.
7. The heavy-tail attractor diagnosis: is there a target transformation *other* than log-cosh that preserves tail information while taming the attractor? Three candidates, predictions, kill criteria.
8. Cross-era structure: the smooth-linear-beats-kink result (0.6039 vs 0.5818) was "real cross-era signal" — formulate what it implies about era-stability as a discovery target in itself.

Hypotheses 9–12+ are your free choice, but they must clear a bar: each must be **non-obvious** (not "try X with more seeds"), **mechanistically motivated** (a reason from football structure, not from model convenience), and **cheap to kill** (a lab test under one hour of compute that could falsify it). Rank all twelve by your honest expected value, with the EV reasoning shown, and mark which three you would fund first with finite lab budget.

## 10. WORK PACKAGE 7 — ADVERSARIAL SELF-CRITIQUE (steelman the null)

For each of the following surviving or half-surviving claims, write the **strongest case that it is false, vacuous, or an artifact** — argued as well as you argued for it originally, with at least as much specificity:
1. That IRL utility recovery (§4) is the #1-EV direction and not a sophisticated way to restate "coaches follow heuristics."
2. That the play-type residual (§2c) contains any discoverable structure worth SR budget, rather than being linear noise around a good model.
3. That the early-game kink (§2a) is anything but a single-feature curiosity.
4. That your revised EV ranking itself is well-calibrated, given your Round 1–4 calibration record: GLI-0.1 predicted 0.112 → observed 0.0037; Koopman prior 0.35 → rejected at p=0.89; kill threshold <0.03 → observed 0.0527. **Compute your implied historical calibration factor and apply it to every EV number you state in the re-ranking (§11).** Show the arithmetic. If the calibration-adjusted EVs change the ranking order, report the changed order.
5. That the lab's round-4 results could be artifacts: enumerate the three most plausible artifact hypotheses for the §2 results (e.g., leakage inflating the GBM ceiling; selection bias in the residual sample; the §3 time-confound doing hidden work), design the diagnostic for each, and state what you would conclude if the diagnostic comes back positive.

## 11. WORK PACKAGE 8 — ATLAS RE-RANKING WITH NEW EVIDENCE

Re-rank all 15 frameworks from your Theory Atlas in light of: the four round-4 lab outcomes, your calibration record (§10.4), the WP-2 literature verdicts, and the WP-6 hypothesis list. For each framework: new EV (calibration-adjusted, arithmetic shown) | what evidence moved it up or down since your last ranking | the single cheapest falsifying test | kill criterion. If IRL cannot be made runnable per §4c, it leaves the #1 slot — say what takes its place and why. End with the three-framework funded portfolio you would actually bet finite lab budget on, and the explicit opportunity cost (what you are choosing not to fund).

## 12. OUTPUT CONTRACT

- Structure your response in exactly the sections of this prompt (§0–§11 plus the effort-honesty annex and second-shift report from §1). Number every hypothesis, claim, and replication design (H-01…, C-…, R-…) so the lab can reference them.
- Every code block must be complete and runnable against the nflfastR schema: imports, data loading, exact column names (three-way verified per §3), seed setting, and output of a machine-readable JSON summary. No pseudocode, no `# ... rest omitted`, no placeholders, no "insert your API key" — nothing the lab has to guess at.
- Every numeric prediction carries its reasoning and its kill criterion on the same lines. A prediction without a kill criterion will be treated as not made.
- Length is not a virtue; **completeness is**. But completeness here is large: a response that skips work packages, merges the three passes into one, or asserts without deriving will be returned for rework. Budget your effort accordingly — this is the "work harder" requirement made concrete.

## 13. EFFORT FLOOR (minimum deliverables — the "find more, work harder" clause)

Your response is incomplete unless it contains all of the following, counted explicitly in the effort-honesty annex:
- [ ] WP-1: one fully runnable IRL protocol (§4a, 7 components) + adversarial appendix (§4b) + the §4c honesty verdict.
- [ ] WP-2: 4 claims × 3 research passes = 12 documented passes + 4 adjudications + 4 best counter-sources.
- [ ] WP-3: the full numeric self-audit table + the unsourced-count headline number.
- [ ] WP-4: 3 scripts × 3 review passes = 9 documented reviews + per-script findings tables.
- [ ] WP-5: 3 falsifications × 3 replications = 9 replication designs, each with predictions + kill criteria, each falsification including one steel-manned overturn attempt.
- [ ] WP-6: ≥12 hypotheses covering all 8 mandatory mining sites + EV ranking + top-3 funding picks.
- [ ] WP-7: 5 steelman critiques incl. the calibration-factor arithmetic (§10.4) + 3 artifact hypotheses with diagnostics.
- [ ] WP-8: 15-framework re-ranking, calibration-adjusted, with the funded 3-portfolio and opportunity cost.
- [ ] The second-shift report: what the extra full pass found that the first pass missed.

Begin.
