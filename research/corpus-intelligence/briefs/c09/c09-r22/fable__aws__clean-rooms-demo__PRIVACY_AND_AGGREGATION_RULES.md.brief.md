# fable/aws/clean-rooms-demo/PRIVACY_AND_AGGREGATION_RULES.md
## What it is (1-2 sentences)
The privacy and aggregation rule set for the Clean Rooms demo: synthetic data only, no row-level exports, minimum aggregation thresholds, and mandatory provenance on every output.

## Key metrics/methods (formulas where given, else "not specified")
- Default aggregation threshold for user/audience/operator data: 50–100 rows (see AWS_CLEAN_ROOMS_PARTNERSHIP_PLAN.md for per-partner-type k values).

## Data sources named
- None (synthetic data only until partner/legal approval).

## Findings (numbers and facts, not vibes)
- No row-level exports; any row-level export is blocked. No identity joins. No model training unless contract allows. No source data moved to AWS unless the registry permits storage. Every output must record source tables, aggregation level, and legal marker.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: privacy governance for hypothetical partner data — relevant only as the intake compliance layer if future partner data feeds QB/scheme analytics.

## Engine-actionable? (yes/no + one-line what)
No — governance rules for data that doesn't exist yet.
