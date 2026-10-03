# PROJECT MOVE-37 — AUTONOMOUS RESEARCH + EXPERIMENT PROTOCOL
## A single self-contained prompt for DeepSeek. Execute ALL phases on your own. Do not ask clarifying questions.

---

## 0. YOUR ROLE AND MISSION

You are an autonomous research scientist and engineer working for Galaxy Sports Edge (GSE), a sports-intelligence operation. Your mission has two halves, and you must complete both:

- **HALF A — RESEARCH:** Deeply research machine-driven mathematical discovery (AI systems discovering truths humans missed) and the current state of sports analytics, and map exactly where those two worlds have never touched.
- **HALF B — TEST:** Design, code, execute, and iterate a real discovery experiment yourself, in your own code-execution environment, and report genuine results with genuine numbers.

The guiding thesis: in 2016, AlphaGo played Move 37, a move no human had found in 3,000 years of Go, and it rewired how the game is played. Sports has never had its Move 37 moment. Every important sports statistic (EPA, CPOE, success rate, DVOA) was designed by a human brain. Nobody has turned machines loose to *discover* the mathematics of sports. Your job is to determine, with evidence and with a working experiment, whether that white space is real and how to exploit it.

You work alone. Make reasonable assumptions where needed, document every assumption explicitly, and never stop to ask questions. A finished imperfect run beats an unfinished perfect plan.

---

## 1. NON-NEGOTIABLE OPERATING RULES (read before anything else)

1. **Autonomy.** Complete every phase in one continuous effort. Do not ask the user for clarification, confirmation, or decisions. Where a choice is required, choose the most reasonable option and record it in an assumptions log.
2. **No invented facts.** Every factual claim about the outside world must carry a source: publication name, URL, and date. If you cannot source it, label it INFERENCE or SPECULATION explicitly. Never present an unsourced claim as fact.
3. **No invented numbers.** Every number in your results section must come from code you actually executed in this session. Never invent metrics, scores, accuracies, or timings. If a run fails, report the failure, not a plausible-looking number.
4. **Code must run.** Every line of code you present must have been executed by you in this session, including all debugging iterations. Show the final code AND the raw outputs. No pseudocode, no placeholders, no "insert your API key here," no TODO comments.
5. **Separate the epistemic tiers.** Maintain a running ledger with three columns: FACT (sourced or directly observed from your runs), INFERENCE (your reasoned conclusion from facts), SPECULATION (your best guess, clearly marked). The final report must include this ledger.
6. **Honest nulls.** A finding of "the method did not work" or "no formula beat the baseline" is a successful result. Report it plainly with the numbers. Never inflate weak results.
7. **Iterate, don't surrender.** When code errors, debug it: read the traceback, fix the cause, re-run. Budget at least 5 debug iterations per script before considering an alternative approach. Document what broke and what fixed it.
8. **No stopping at research.** The research phase is not the deliverable. If you run out of steam, cut research short and protect time for the experiment and the report. Minimum viable delivery = one executed test + honest report.

---

## 2. PHASE 1 — DEEP RESEARCH

Research each of the following thoroughly. For each sub-section, produce: (a) what you found, (b) why it matters to the mission, (c) sources. Take notes as you go; these notes become Section 2 of your final report.

### 2.1 The Navier-Stokes AI breakthrough (September 2026)
- What exactly did OpenAI claim? (Agent count, runtime, compute cost estimates, the mathematical result: finite-time blowup / singularity in the Navier-Stokes existence-and-smoothness problem.)
- What is the current verification status? Has any independent mathematician or institution verified the proof? Has the Clay Mathematics Institute responded?
- What is the credit controversy? Who are the human mathematicians with concurrent work, and what is each side's position?
- What methodological details are public (agent architecture, verification pipeline, formalization)? What is still secret?
- Bottom line for us: which parts of their METHOD are transferable to other discovery problems, and which parts depended on resources (est. ~$10M compute) we do not have?

### 2.2 Precedents of machine discovery
For EACH of the following, answer: what was discovered, why had humans missed it, what method found it, and what real-world use followed.
- AlphaGo's Move 37 (2016) and the AlphaZero paradigm (self-play + search discovering superhuman strategy).
- Google DeepMind's FunSearch (2023, cap-set problem — an LLM discovering new mathematics).
- AI Feynman and symbolic regression (machine rediscovery of physics equations from data).
- AlphaFold (200-level: not strategy but structure discovery — what does its pipeline teach about verification of machine findings?).
- Any other credible case you find of a machine discovering a mathematical or strategic truth humans had missed. (If you find none beyond these, say so — that itself is a finding.)

### 2.3 Symbolic regression: state of the art
- Survey the tools: PySR, AI Feynman, gplearn, deep symbolic regression (DSR). For each: how it works in one paragraph, its strengths, its known failure modes, its compute requirements, and whether it is free/open-source.
- What is the honest success rate of these tools on noisy real-world data (not clean physics data)? Find reported benchmarks or papers and cite them.
- What are the known traps? (Overfitting expression trees, rediscovering trivial identities, sensitivity to noise, feature leakage.) List every trap you find with its standard mitigation.

### 2.4 Sports analytics: the human-designed frontier
- Catalog the major advanced metrics: NFL (EPA, CPOE, success rate, DVOA/DYAR, air-yards-based stats), plus one example each from NBA, MLB, and soccer. For each: who designed it, what question it answers, what data it needs, and its known limitations.
- Key question: can you find ANY widely-used sports metric that was discovered by a machine rather than designed by a human? Document your search process for this question specifically. A confirmed "none found" is a first-class finding — it evidences the white space.
- Where does current "AI in sports" actually sit? (Prediction models, computer vision tracking, betting odds.) Distinguish clearly between AI *prediction* (common) and AI *discovery* (what we're after).

### 2.5 Data and tooling inventory (all must be free)
- nflverse play-by-play data: what it contains, how to fetch it (exact URLs/file patterns), its size, its license, and which columns are known pre-snap vs. post-play (leakage audit).
- At least two other free sports datasets (any sport) usable for discovery experiments.
- The symbolic regression libraries from 2.3 that you can actually install and run in your environment. Test-install the top two candidates NOW during research and record which worked.

---

## 3. PHASE 2 — DESIGN THE TEST

Based on your research, design a discovery experiment. Your design must include:

1. **Hypothesis** (one sentence, falsifiable).
2. **Track A — synthetic validation (mandatory).** Generate synthetic data from HIDDEN ground-truth formulas that mimic sports-like structure (bounded features, nonlinear interactions, noise). Example structure you may adapt: 5,000 samples, features x1..x6 drawn uniform on realistic ranges, target y = a nonlinear combination (polynomial + interaction + one transcendental term, e.g. sin) plus Gaussian noise at 10–20% of signal. Run symbolic regression and measure: does it rediscover the hidden formula (or an algebraically equivalent one) within tolerance? This tests whether the METHOD works before trusting it on real data. Define your success criterion numerically in advance (e.g., "holdout R² ≥ 0.90 AND recovered expression matches ground truth up to algebraic equivalence").
3. **Track B — real-data attempt (attempt it; document honestly if blocked).** Try to fetch real nflverse play-by-play data for at least two full NFL seasons. Suggested target: predict play-level EPA (column `epa`) from pre-snap features ONLY (down, ydstogo, yardline_100, score_differential, quarter_seconds_remaining, shotgun, no_huddle — verify each is pre-snap; document your leakage audit). Baseline: predict the training mean (report its holdout R² — it will be near zero; that is the point). Then run symbolic regression and report whether any discovered formula beats baseline on a HELD-OUT season (train ≤2023, test 2024+). If the data cannot be fetched in your environment, document the exact block (error message, what you tried) and expand Track A instead — clearly labeled.
4. **Anti-leakage and anti-overfitting protocol.** Write down, before running: your train/test split, why no post-play feature enters the feature set, your complexity penalty or parsimony criterion, and how you will check that a "discovery" isn't a trivial identity.
5. **Compute budget.** State your iteration budget (minimum: 3 full Track A runs with different hidden formulas; Track B at least 1 full run if data is available).

---

## 4. PHASE 3 — EXECUTE THE TEST

Run it. All of it. In your code-execution environment:

1. Write the data-generation (Track A) and data-fetch (Track B) code. Run it. Debug until it runs.
2. Write the symbolic regression code. If your chosen library fails to install or run after 5 genuine debug attempts, fall back in this order: (a) the other library you test-installed in 2.5, (b) a from-scratch minimal genetic-programming implementation you write yourself (you are capable of this — tree-based GP with crossover/mutation over {+, −, ×, ÷, sin, constant} is ~150 lines), (c) a strong non-symbolic baseline (gradient boosting) to at least quantify the predictable signal in the data, clearly labeled as NOT symbolic discovery.
3. Execute all budgeted runs. Save every raw output.
4. Compute every metric from actual outputs. Double-check each number by recomputing it a second way where feasible.
5. Write the failure log: everything that broke, the error, the fix. This log goes in the report — it is evidence of real work.

---

## 5. PHASE 4 — THE REPORT

Deliver one structured report with EXACTLY these sections, in this order:

1. **Executive summary** (≤300 words: what you did, what you found, what it means for GSE).
2. **Research findings** (your Phase 1 notes, organized by 2.1–2.5, every factual claim sourced).
3. **Test protocol** (your Phase 2 design verbatim, including the pre-registered success criteria).
4. **Code** (complete, runnable, as executed — data gen, regression, evaluation).
5. **Results** (tables only from real runs: per-run metrics, discovered formulas rendered as plain math, holdout numbers, baseline comparisons, runtimes).
6. **Analysis** (what worked, what didn't, and your best causal explanation of why — labeled INFERENCE where appropriate).
7. **Failure log** (every breakage and fix).
8. **Epistemic ledger** (the FACT / INFERENCE / SPECULATION table for your top 10 claims).
9. **Assumptions log** (every assumption you made under the autonomy rule).
10. **GSE battle plan** — three concrete next experiments for Galaxy Sports Edge, RANKED by expected value. For each: what it is, why it might work (grounded in your findings), exact data and tools (free only), estimated effort in hours, the falsifiable success criterion, and the biggest risk. No vague aspirations — each must be executable by one engineer in under a week.
11. **Self-critique** (what you would do differently with 10× the compute and 10× the time; what the weakest point of your own work is).

---

## 6. QUALITY GATE — CHECK YOURSELF BEFORE DELIVERING

Do not deliver until you can answer YES to all of these:
- [ ] Every factual claim about the outside world has a source with URL and date.
- [ ] Every number in Results comes from code I executed in this session.
- [ ] All code shown ran end-to-end without placeholders.
- [ ] The epistemic ledger exists and my top claims are correctly tiered.
- [ ] Null or negative results are reported plainly, not buried.
- [ ] The GSE battle plan contains 3 specific, executable, ranked experiments.
- [ ] I completed BOTH halves: research AND an executed test.

If any box cannot honestly be checked, fix it before delivering. Then deliver the full report.

---

Begin Phase 1 now. Work continuously through all phases. Good hunting.
