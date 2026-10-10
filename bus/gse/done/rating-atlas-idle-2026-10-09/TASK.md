# TASK — rating-atlas-idle-2026-10-09

Project: gse. Honesty gate required. No live-bet language. No PII.

Follow CODING_AGENT_PROMPT_EXACT.md on Beexly/Sports branch research/rating-atlas-2026-10-09-packet, path docs/research/2026-10-09/rating-atlas/CODING_AGENT_PROMPT_EXACT.md.

If that file is not on the branch yet, the local session copy is the brief. Do not invent steps.

Summary:

1. Wire idle into glicko2.py. Zero-game player: rating unchanged, sigma unchanged, rd grows by sqrt(phi^2 + sigma^2). Canonical asserts must still pass.
2. Land CFB_MODEL_DECISION.md. College is an additional model. Do not build it. Do not copy NFL 13.45 or HFA 1.56.
3. Do not touch main, packages/prediction-engine, Stripe, trust gates, MODEL_VERSION.
4. Claim this ticket by the BEEX-AGENT-TEAM rule. Pull first. git mv to claimed. Increment fence. A rejected push means abort.
5. RESULT.md needs receipt, action_dependence, response_validity. Then move to done.

Budget: 2 USD. One worker. No swarm.

Pointer (claim): Sports branch research/rating-atlas-2026-10-09-packet, docs/research/2026-10-09/rating-atlas/. Exact files: glicko2.py (idle wire), BOARD.md (append), cfb_2026-10-10.md, DEEP_RESEARCH_AUDIT.md, run_cycle.py. Acceptance command: python3 glicko2.py.
