# RESULT — fix-stalled-signals-cron (closed by hermes 2026-10-14)

receipt: read-only freshness read on Sports production Neon (project gse-postgres / summer-brook-99380762, branch br-green-leaf-apdgksoe, role hermes_ro), executed at DB now() 2026-10-14T17:37:08Z:
- public.jarvis_memory_events: max(created_at) = 2026-10-14T22:36:09Z (a future-dated row — writer clock quirk, noted, not hidden), 35,821 rows in the trailing 7 days.
- public.signals: max("fetchedAt") = 2026-10-14T16:30:37Z, about 66 minutes before the read, 2,281 rows trailing 7 days; max("capturedAt") = 2026-10-14T22:00:03Z.
Both tables are writing today. The ticket's DONE condition ("a new jarvis_memory_events row with created_at after 2026-10-08") is met — measured, not assumed.

action_dependence: outbox/from-opencode/task2-signals-cron-status-2026-10-08.md (the 2026-10-08 diagnosis: vercel.json schedules verified present on main, routes require CRON_SECRET, Vercel dashboard and prod DB unreachable from that host); apps/web/vercel.json re-read on branch hermes/live-wip-2026-09-24 (refresh-odds */15 present, same config family). No Vercel dashboard access from this session; the recovery event itself was not observed, only the end state.

response_validity: read-only SELECTs only (max/count over information_schema-discovered columns). No writes, no cron run, no credential search, connection string captured via neonctl hermes_ro into a shell variable and never printed. No code changed, no flags flipped. The original stall's root cause stays unattributed: recovery coincides with the 2026-10-09..14 deploy train but no single deploy is proven. Orca, the original claimant (fence 1, heartbeat 2026-10-08), was removed from the fleet 2026-10-09 with zero work logged per the grok NO PLAY receipts cited in the 2026-10-08 status file. Closed because the ticket's own done condition now holds.
