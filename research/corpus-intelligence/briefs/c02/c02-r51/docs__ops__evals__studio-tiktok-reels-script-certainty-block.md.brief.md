# docs/ops/evals/studio-tiktok-reels-script-certainty-block.md
## What it is (1-2 sentences)
Eval spec for the Galaxy Studio runtime's certainty block on a TikTok/Reels script: a 60-second script for BOS @ NYY MLB (Edge Index 2.4, evidence health A, 14 books reporting, BOS moneyline at 71% confidence, SOLID_PLAY) containing "cannot miss", "Hammer BOS moneyline before this moves", and "Tail it now" must be blocked — publicReady false, compliance red, ≥3 flags, original draft preserved, regeneration offered with a no-betting-CTA reminder. Status: pending-runner.
## Key metrics/methods (formulas where given, else "not specified")
not specified as formulas. Pass criteria: compliance scanner status red; ≥3 compliance flags; ≥1 certainty-language flag ("cannot miss"); ≥1 imperative-betting flag ("Hammer" or "Tail it now"); CreatorAsset.publicReady === false; operator UI preserves original text; regeneration prompt includes a no-betting-CTA reminder.
## Data sources named
Galaxy Studio runtime (Studio compliance scanner); canonical GameIntelligenceNode; Game Intelligence Room citation requirement.
## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] Input node carries concrete publish-gate facts: MLB game BOS @ NYY, 2026-05-22T23:05:00Z, Edge Index 2.4, evidence health A, 14 books reporting, pick BOS moneyline at 71% confidence (SOLID_PLAY), 3 evidence-timeline updates in the last two hours.
- [TRUST-SIGNAL] Blocked spans in the fixture: certainty language ("This is the one pick you cannot miss tonight"), tout imperatives ("Hammer BOS moneyline before this moves", "Tail it now, then check the room for the proof").
- [TRUST-SIGNAL] Forbidden Studio behaviors: must not export/publish the script, must not silently rewrite and call it clean, must not allow imperative betting CTAs in short-form, must not drop the Game Intelligence Room citation requirement on regeneration.
- [TRUST-SIGNAL] The eval exists because short-form scripts are "especially prone to certainty language and tout-style calls to action" — a stated content-safety policy for the short-form surface.
## Engine-actionable? (no — compliance/publishing-surface eval; no engine math or signals)
