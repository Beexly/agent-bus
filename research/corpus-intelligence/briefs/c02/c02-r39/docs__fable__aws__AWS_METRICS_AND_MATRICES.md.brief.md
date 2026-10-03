# docs/fable/aws/AWS_METRICS_AND_MATRICES.md
## What it is (1-2 sentences)
A local-first operating metric set (updated 2026-07-03) that measures whether the repo is becoming more AWS-literate without spending money: 5 learning metrics, 5 architecture metrics, 4 cost metrics, 5 security metrics, and 4 falsification metrics, each with a target posture — but explicitly not collected; they are operating definitions only until a command or file proves collection.
## Key metrics/methods (formulas where given, else "not specified")
Named percent-of metrics (formulas not given beyond plain-English definitions): learning_to_repo_action_rate, public_safe_proof_rate, no_secret_confirmation_rate (target 100%), no_paid_confirmation_rate (target 100%), gse_relevance_coverage (target 100%), service_rows_with_rejection_criteria (target 100%), service_rows_with_no_cost_spike, owner_gate_coverage (target 100%), local_before_cloud_ratio, unsupported_claim_count (decrease only by evidence), default_monthly_cap_usd (target 0), paid_action_block_rate (target 100%), services_with_cost_driver_notes, kill_switch_coverage (target 100% before live work), wildcard_policy_findings (target zero before approval), secret_scan_pass_rate (target 100%), unknown_data_rights_blocks (all blocked), public_surface_count (target zero until approved), agent_blocked_tool_coverage (target 100%), candidate_kill_rule_coverage (target 100%), fixture_only_demo_count, rejected_service_count, assumption_to_evidence_lag (shrinking).
## Data sources named
None. The file explicitly states these metrics are not collected — they are operating definitions to use in reports without claiming collection.
## Findings (numbers and facts, not vibes)
- 23 metrics defined across 5 categories (learning 5, architecture 5, cost 4, security 5, falsification 4) [OTHER]
- 100%-target metrics: no_secret_confirmation_rate, no_paid_confirmation_rate, gse_relevance_coverage, service_rows_with_rejection_criteria, owner_gate_coverage, kill_switch_coverage (before live work), paid_action_block_rate, secret_scan_pass_rate, agent_blocked_tool_coverage, candidate_kill_rule_coverage [TRUST-SIGNAL]
- Zero-target metrics: default_monthly_cap_usd = 0, wildcard_policy_findings = zero before approval, public_surface_count = zero until approved [OTHER]
- Falsification doctrine: candidate_kill_rule_coverage target 100% (every edge candidate gets an explicit falsification rule); unsupported_claim_count decreases only by evidence; assumption_to_evidence_lag must shrink [TRUST-SIGNAL]
- File explicitly states: do not claim these metrics are collected unless a command or file proves collection [TRUST-SIGNAL]
- INFERENCE: the falsification metrics (explicit kill rules per edge candidate, evidence-only claim downgrades) map onto the engine's per-rule backtest requirement.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The falsification category is a ready-made edge-candidate gate for engine research: every edge candidate needs an explicit falsification rule; claims downgrade only via evidence [TRUST-SIGNAL]
- No QB/coaching/OL/scheme content; ops-metrics only [OTHER]
## Engine-actionable? (yes/no + one-line what)
yes — adopt the falsification category (explicit kill rule per edge candidate, evidence-only claim downgrades, shrinking assumption-to-evidence lag) as the engine's edge-candidate lifecycle rule.
