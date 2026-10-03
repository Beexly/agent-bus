# fable/aws/AWS_CLEAN_ROOMS_PARTNERSHIP_PLAN.md
## What it is (1-2 sentences)
A 2026-07-03 plan for privacy-preserving AWS Clean Rooms collaborations with partner data types (media, DFS, sportsbook, data providers, teams, creators, leagues), with explicit honesty guardrails that no partner, collaboration, analysis rule, or dataset currently exists.

## Key metrics/methods (formulas where given, else "not specified")
- Privacy thresholds per partner type: media/content k>=50; DFS/fantasy k>=100; sportsbook/operator k>=100; sports data provider k>=25; team/training k>=25; creator/community k>=50; league/team-adjacent k>=25. (k = minimum aggregation row count.)
- Pre-live requirements: named partner, contract + source-rights review, data-minimization plan, allowed/disallowed query lists, aggregation thresholds, export policy, owner approval + cost ceiling.
- Analysis framing per partner type, e.g. DFS partner: player role/uncertainty features × aggregate roster/contest behavior → "do role-shock flags align with aggregate roster swings"; sportsbook: model uncertainty buckets × aggregate line/handle movement classes → "do public events precede aggregate market movement classes"; disallowed: individual lineup reconstruction, betting-user profiling, player-level health inference.

## Data sources named
- AWS Clean Rooms official docs (docs.aws.amazon.com/clean-rooms); no live partner datasets exist.

## Findings (numbers and facts, not vibes)
- Repo reality explicitly stated: no partner dataset, no collaboration, no analysis rule exists, no partnership claimed.
- Blocked until partner/legal approval: live collaboration, partner data, analysis-rule creation, exports, identity resolution.
- No-cost repo actions: synthetic schemas in docs/fable/aws/clean-rooms-demo/, public-safe allowed/disallowed query examples, partner discussion notes without uploading data.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: data-partnership privacy infrastructure. Conceptually relevant to ingesting DFS roster-behavior aggregates (role-shock vs roster swings) and sportsbook line-movement aggregates as engine signals — if partnerships ever materialize.

## Engine-actionable? (yes/no + one-line what)
No — partnership plan with no partners yet; synthetic-schema scaffolding only.
