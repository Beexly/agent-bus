# arxiv-program/research/2026-09-21/arxiv-deep/0120-reliabilitybench-evaluating-llm-agent-reliability.md
## What it is (1-2 sentences)
Full-paper deep read of ReliabilityBench (arXiv:2601.06112v1), a 3D reliability-surface evaluation framework for tool-using LLM agents under production-like stress: consistency under repetition (k), robustness to paraphrased tasks (epsilon), and fault tolerance under infrastructure failure (lambda). Verdict recorded in file: ADAPT — the methodology, deterministic state-based oracles, and chaos fault injection give GSE a pre-deployment protocol for its own agents.
## Key metrics/methods (formulas where given, else "not specified")
- Reliability surface: R(k, epsilon, lambda) = E over tasks of pass^k(perturb_epsilon(tau), A) given fault profile lambda; pass^k = P(all k runs succeed) (Eq. 1, clean quote from paper).
- Derived: Surface Volume V = integral of R over [0,kmax]x[0,1]x[0,1]; Degradation Gradient grad-R = (dR/dk, dR/depsilon, dR/dlambda); Critical Threshold (k*, epsilon*, lambda*) where R drops below theta. (Eqs. 7, 8 marked RECONSTRUCTED — PDF extraction garbled; formulas inferred from prose.)
- Action Metamorphic Relations (Table 2 taxonomy): linguistic (synonym, paraphrase, voice), structural (reordering, split/merge), contextual (distractor, mid-task correction), temporal (date format, relative time); correctness = end-state equivalence v(Sf,S0) = v(S'f,S0), not trajectory similarity.
- Chaos fault injection (Table 3 taxonomy): network (TransientTimeout, ConnectionReset), rate limit (SoftRateLimit 429-retryable, HardRateLimit non-recoverable), data (PartialResponse, SchemaDrift, StaleData, EmptyResponse); profiles lambda=0.0/0.1/0.2/0.3 with failure_rate 0.0/0.075/0.175/0.275 and fault_weights per level (Appendix B); injector wraps tool execution: draw u~Uniform(0,1), select fault, return error (recoverable) or modified response (non-recoverable).
- State-based oracles: deterministic verifier v(S0,Sf) per task (e.g., reservations[flight_id].status=="confirmed"); no LLM judges.
- Perturbation level Eq. (4): X_epsilon = sum_i w_i * 1[MR_i applied] [RECONSTRUCTED]; fault profile Eq. (9): Lambda(lambda) = {(F_i, p_i(lambda))}, sum p_i approx lambda (clean quote).
- Experimental grid: 20 tasks x 3 epsilon (0.0/0.1/0.2) x 2 lambda (0.0/0.2) x 2 agents (ReAct, Reflexion) x 2 runs = 480 episodes/model main; ablation 320 (20 tasks x 4 fault types x 2 agents x 2 runs); grand total 1,280 episodes. Models: Gemini 2.0 Flash (primary), GPT-4o (comparison).
## Data sources named
Synthetic task suite (20 tasks, 4 domains: Scheduling, Travel, Support, Ecommerce; each with state-dict initial state, 25+ domain-specific tools; Appendix A tool signatures; Appendix C sample tasks). Complexity L1/L2 per domain (Table 4). No real external dataset. Model/pricing data from December 2024.
## Findings (numbers and facts, not vibes)
- Perturbation degradation (Table 5, Gemini, k=2): epsilon=0.0: 96.88% -> epsilon=0.1: 88.12% -> epsilon=0.2: 88.12%. 8.8% drop baseline-to-medium perturbation. GPT-4o: 95.00% -> 87.50% -> 88.75%.
- Model comparison: Gemini pass2 91.04% vs GPT-4o 90.42% (-0.62% gap) at 82x lower cost ($0.12 vs $9.77 per 480 episodes; $0.025 vs $2.04 per 100 episodes). Full 1,280-episode run cost under $10.
- Architecture (Table 6, Gemini): ReAct surface volume 0.900 vs Reflexion 0.875; epsilon=0 pass 97.5% vs 96.3%; epsilon=0.2 pass 90.0% vs 86.3%. Simpler ReAct more robust under stress.
- Fault tolerance: ReAct degrades 7.5% from lambda=0 to 0.2; Reflexion 10.0%. dR/dlambda steeper for Reflexion (-0.50 per 0.1 lambda vs -0.38). Combined (epsilon=0.2, lambda=0.2): 84.0% pass2.
- Recovery (Table 8, lambda=0.2): ReAct 47 faults encountered, 38 recovered (80.9%), +1.2 extra tool calls; Reflexion 52/35 (67.3%), +1.8 calls.
- Fault ablation (Table 9): mixed baseline 96.25%; timeout-only 98.75% (+2.50%, minimal impact); rate-limit-only 93.75% (-2.50%, highest impact); partial-response-only 97.50% (+1.25%).
- Domains (Table 7, lambda=0, ReAct): Scheduling pass@1 100%/pass2 100% (2.1 avg calls); Travel 87.5%/75.0% (5.4); Support 91.7%/83.3% (4.8); Ecommerce 87.5%/75.0% (4.6).
- Failure patterns: travel — missing payment context; support — escalation inconsistency; rate limits cause task abandonment rather than retry; schema drift propagates through subsequent calls.
- Assumptions/limits (§6.2): 1,280 episodes reasonable power but 10,000+ needed for tight CIs on rare failures; synthetic domains lack real-API complexity (auth, realtime data); only k=2 tested; heavy perturbations epsilon=0.3 deferred; models limited to Gemini 2.0 Flash and GPT-4o.
- Overlap: complementary to 0113 ContinuityBench (handoff layer) and adjacent to 0112 FailureAtlas, 0115 HiveMind, 0116 governed MCP; no dedup hit in research map; no existing repo work on agent reliability benchmarking.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: No QB, coaching, OL, or scheme content — this is AI-agent reliability evaluation methodology, directly applicable to GSE's own agent infrastructure (research/content/data-fetch agents), not to football modeling.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the reliability grid (k x epsilon x lambda with real GSE fault modes: 429 rate limits, Odds API quota exhaustion, schema drift) as a pre-deployment gate for unattended agent runs; headline heuristic: multiply any single-run benchmark by 0.7-0.8 to estimate production reliability.
