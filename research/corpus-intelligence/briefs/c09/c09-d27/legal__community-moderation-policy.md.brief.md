# legal/community-moderation-policy.md
## What it is (1-2 sentences)
The Galaxy Community Moderation & Safety Policy (v1, dated 2026-06-12) — the prerequisite gate that must be fully implemented and tested before ANY live community room (Sunday Couch, Brotherhood Table, No-Shame Room) ships. It sets principles, hard removal rules, operational launch requirements, and a ban list of things that will never be built.
## Key metrics/methods (formulas where given, else "not specified")
- Operational requirements: named human moderator on duty for every scheduled live window (rooms close when nobody is on duty); every message reportable in ≤2 taps; per-user rate limits + live slow mode; server-side pre-filter of trust-claims banned list + harassment patterns; immutable removal/ban audit log with reason codes; human-reviewed appeals; data retention default = messages 90 days then purge; helpline pinned in every room; age gate inherited from platform.
- Hard rules: harassment/hate/threats/doxxing → immediate removal, repeat → ban; pick-selling/paid-group recruiting/affiliate funnels → removal; chasing-losses encouragement → removal + responsible-play nudge; underage indicators → immediate ban + review; self-harm signals → helpline template, never moderate-and-ignore.
## Data sources named
No external data sources; internal: cockpit moderation queue, trust-claims registry, `lib/brand.ts` HELPLINE, responsible-gaming triage rules.
## Findings (numbers and facts, not vibes)
- Three named live-room formats (Sunday Couch, Brotherhood Table, No-Shame Room); launch sequence is policy merge → closed invite-only pilot (one room, one game window, two moderators, full debrief) → owner go/no-go; The Beat remains the open non-chat surface.
- Prohibited builds: engagement mechanics rewarding volume (streak-shaming, loudest-voice leaderboards — leaderboards rank verified decision quality only); behavioral profiling for monetization; anonymous-but-trackable dark patterns.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: trust/safety doctrine for community surfaces — no engine intelligence content (no QB, coaching, scheme, or market material).
## Engine-actionable? (yes/no + one-line what)
No — community safety/moderation doctrine; no model, metric, or engine feature.
