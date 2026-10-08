# BEEX AGENT TEAM — addendum

Date: 2026-10-08
Applies to: BEEX-AGENT-TEAM.md
Does not reopen the org chart. Motif is the brain. Orca is the hands. The git bus is the record.

## What the 6 Oct–7 Oct 2026 papers change

1. Log every handoff. On each claim write `from`, `to`, `project`, `task_type`, `passed`. Do not decompose a repeated task type from scratch once that log has a passing row. This is a read of our own bus, not a new system. Source: WorkflowOps, arXiv:2610.07860, 6 Oct 2026.
2. Cheap match first. Route with the capability manifest and the handoff log. Call a frontier model only when the match is low-confidence or the task is not lint/format. WorkflowOps cut routing calls by over 80% this way.
3. Coding tasks cite a file in the target repo before the first edit. A second agent "to read the docs" is not allowed. Implementation, not the plan, is where scripts fail. Source: arXiv:2610.10184, 7 Oct 2026. Their multi-agent path raised runnable scripts from 14.8% to 59.3% and spent far more tokens. We take the retrieval lesson, not the headcount.
4. One author and one reviewer, with a hard limit, beat a larger crew on cost. Source: arXiv:2610.09995, 7 Oct 2026. Fourteen runs: author–reviewer matched multi-agent file completion at about one-third the cost per file, with a human gate between stages. This is the degrade rule and the Motif accept. Do not add players to copy a paper.
5. Agreement is not evidence. A self-check the system wrote is internal consistency. Promote a Hindsight observation only from an accepted result that points at evidence outside the agent's own output. Source: Curriculum Brain, arXiv:2610.05860, 5 Oct 2026 (their 67.6% "resolved" figure is against their own checks). Same warning as the Kaggle note "verdict ≠ independent corroboration."
6. A correct memory record is not a correct execution. `RESULT.md` must carry three fields or it stays in quarantine: `receipt` (tool or call id), `action_dependence` (files or docs actually read), `response_validity` (exit code, or an explicit `no-tests`). Removing those three made 82.4% of opposite-label pairs indistinguishable; putting them back separated 97.9%. Source: Beyond Corrected Memory, arXiv:2610.08101, 6 Oct 2026.
7. Do not create an agent because a task looks new. A new `agents/<id>.yaml` requires Garrett. WorkflowOps auto-creates specialists. We do not.

## Ignored

- arXiv:2610.09307 vLLM-Omni. A serving runtime for speech, image, and video. Not an agent org.
- arXiv:2607.11364 BackgroundMellow. Cinematic audio. Not an agent org.
- Karyukti, the Pantoja Monte Carlo consensus notebook, the Saroop streaming notebook, and the CrewAI vs Agno vs AutoGen writeup. Feature bake-offs or agreement-as-truth. Kaggle pages did not return a usable body on 2026-10-08. The pasted search list is mostly unrelated churn and hackathon notes.
- CrewAI, Agno, AutoGen, LangGraph. Not adopted. The bus already is the state graph.

## Stop condition unchanged

Any of the five weekly metrics non-zero after the week-4 holdout, or a failed force-push, secret, or FREEZE test on the real machines, reverts to plain agent-bus markdown.
