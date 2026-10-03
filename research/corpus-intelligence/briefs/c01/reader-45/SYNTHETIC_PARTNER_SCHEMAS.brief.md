# fable/aws/clean-rooms-demo/SYNTHETIC_PARTNER_SCHEMAS.md
## What it is (1-2 sentences)
Schema definitions for a synthetic AWS Clean Rooms demo showing how five partner types (GSE itself, media/content, DFS/fantasy, sportsbook/operator, sports data provider) would share privacy-safe aggregated data joined on fixture_id; explicitly states no real partner data is represented.
## Key metrics/methods (formulas where given, else "not specified")
not specified — all partner-side columns are bucketed aggregates (e.g. aggregate_engagement_rate, aggregate_roster_change_rate, aggregate_movement_bucket, aggregate_handle_bucket, aggregate_latency_bucket, aggregate_completeness_rate, model_uncertainty_bucket, source_freshness_bucket, role_shock_bucket, data_quality_bucket). Shared constraints: no user identifiers, no raw row-level records, no export below privacy threshold, aggregate outputs only.
## Data sources named
Five partner tables (synthetic/demo only): GSE, media/content partner, DFS/fantasy partner, sportsbook/operator partner, sports data provider.
## Findings (numbers and facts, not vibes)
No findings; synthetic schema demo only. The DFS partner table's `aggregate_roster_change_rate` + `roster_segment` on fixture_id would, if real, be a lineup-sharpness/sharp-money signal; the sportsbook table's `aggregate_movement_bucket` + `aggregate_handle_bucket` would be market-signal intake — both are synthetic placeholders.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
OTHER — infrastructure pattern only. INFERENCE: if ever wired to real data, the schema is a blueprint for privacy-safe external signal intake (sharp-market, lineup-churn, media-narrative) feeding the total-signal doctrine.
## Engine-actionable? (yes/no + one-line what)
no — synthetic demo; keep as reference for future real clean-room intake design.
