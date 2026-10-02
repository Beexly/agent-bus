# docs/arxiv-program/research/2026-09-21/arxiv-deep/2083-voyager-open-ended-embodied-agent.md
## What it is (1-2 sentences)
Voyager (arXiv:2305.16291v2, Wang et al. 2023) is an LLM-powered open-ended lifelong-learning agent for Minecraft that continuously explores and accumulates reusable skills without human intervention, built from three modules: automatic curriculum, a vector-indexed skill library, and an iterative prompting loop with self-verification. File verdict: ADAPT — the triad maps directly onto a lifelong "signal library" for the GSE discovery loop (MOVE-37 flagged).

## Key metrics/methods (formulas where given, else "not specified")
- No equations stated (systems paper).
- Automatic curriculum (§2.1): GPT-4 proposes the next task conditioned on exploration progress + agent state, pursuing "discovering as many diverse things as possible" (in-context novelty search); temperature 0.1 for diversity, 0 elsewhere.
- Skill library (§2.2): every successfully self-verified action program (e.g. craftStoneShovel(), combatZombieWithSword()) stored in a vector DB keyed by the GPT-3.5 text-embedding-ada-002 embedding of its program description; program itself is the value; top-5 relevant skills retrieved by embedding similarity to plan + environment feedback; complex skills compose simpler ones.
- Iterative prompting mechanism (§2.3): three feedback types per round — (a) environment feedback (observations), (b) execution errors from the code interpreter, (c) self-verification: a separate GPT-4 critic judges from agent state + task whether the program succeeded, and if not, gives a critique with a completion suggestion (checks success AND reflects on mistakes). Loop generate → execute → feed back → refine until self-verification passes; if stuck after 4 rounds, query the curriculum for another task.
- Baselines re-implemented: ReAct, Reflexion (ReAct + execution errors + the self-verification module), AutoGPT (no skill library, no self-verification, no automatic curriculum). Environment: MineDojo + Mineflayer JavaScript APIs; evaluation = unique items discovered within N prompting iterations, distance traveled, tech-tree milestones (wooden/stone/iron/diamond).
- Stack: gpt-4-0314 + gpt-3.5-turbo-0301 + text-embedding-ada-002. GPT-4 is 15× more expensive than GPT-3.5.

## Data sources named
No fixed dataset — live Minecraft simulation episodes (MineDojo/Mineflayer). Generalization test: skill library built in one world, tested on novel tasks in a new Minecraft world with a 50-iteration budget.

## Findings (numbers and facts, not vibes)
- Exploration (§3.3, Fig. 1): Voyager discovers 63 unique items within 160 prompting iterations — 3.3× more novel items than counterparts; travels 2.3× longer distances; unlocks wooden tech level 15.3× faster (prompting iterations), stone 8.5× faster, iron 6.4× faster than baselines; Voyager is the ONLY method to unlock the diamond level (Table 1). [OTHER]
- Generalization (Table 2, Fig. 8): Voyager consistently solves all novel tasks in the new world; baselines solve none within 50 prompting iterations. Giving Voyager's skill library to AutoGPT also boosts AutoGPT — the library is a "plug-and-play asset." [OTHER]
- Ablations (Fig. 9, Appendix B.3): replacing the automatic curriculum with a random one drops discovered item count by 93%; a manually designed curriculum also falls short of the automatic one. Voyager without the skill library plateaus in later stages. Self-verification is the most important feedback type — removing it drops discovered item count by 73%. GPT-4 obtains 5.7× more unique items than GPT-3.5 for code generation. [COACHING, TRUST-SIGNAL, OTHER]
- Cost note (§4): GPT-4 is 15× more expensive than GPT-3.5, but the code-generation capability jump is non-substitutable. [OTHER]
- File's limitation facts: success is judged by the agent's own self-verification critic — a self-graded metric with no ground-truth oracle (critic precision/recall not reported), so the "63 unique items" and tech-tree claims inherit the critic's error rate; Minecraft's deterministic-ish environment flatters iterative debugging vs stochastic domains; text-only perception at the time. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 3.3×/2.3×/15.3×/8.5×/6.4× exploration gains and diamond-only result → OTHER (quantified payoff of lifelong skill accumulation)
- Curriculum removal −93%, self-verification removal −73%, no-library plateau → COACHING (automatic curriculum = discovery scheduling), TRUST-SIGNAL (self-verification as the load-bearing component), OTHER
- Skill library as "plug-and-play asset" boosting even AutoGPT → OTHER (shared retrievable signal codebase)
- Compositional skills (complex built from simpler) matching how GSE features compose (e.g., matchup-adjusted EPA on raw EPA + charting splits) → SCHEME, OTHER
- Self-graded critic with unreported precision/recall; determinism caveat → TRUST-SIGNAL
- No QB-BEHAVIOR or OL content.

## Engine-actionable? (yes/no + one-line what)
Yes — build the lifelong signal library: vector-DB-indexed store of verified signals (executable backtest code + holdout metrics + journal entry, gated by ΔBrier ≥ 0.002 deterministic re-run as the self-verification module), a nightly automatic curriculum proposing next discovery tasks with coverage awareness of thin lanes (weather, special teams, referee crews), top-5 skill retrieval at idea time so new proposals compose existing verified code, and the 4-stuck-rounds give-up rule.
