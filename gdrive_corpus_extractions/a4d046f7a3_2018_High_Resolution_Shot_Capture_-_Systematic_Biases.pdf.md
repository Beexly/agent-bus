---
source: "2018 High Resolution Shot Capture - Systematic Biases.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 10
model: baidu/ernie-5.5-flash-preview:free
words: 7645
---

<NATIVE_REASONING>
The user has provided a research paper source text (Marty 2018, on high-resolution shot capture for basketball shooting evaluation) and wants me to analyze it according to a specific XML-structured format with 6 sections, each with specific word counts, totaling >= 1,000 words.

Let me review the STRICT INVARIANTS:
1. ZERO BETTING LINES: No spreads, totals, moneylines, odds. Fine—this is a shooting evaluation paper, no betting involved.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE> >= 400 words
- <SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown
- <RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps
- <RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock
- <CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof
- <RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions

This is a legitimate request to do deep analysis of a sports analytics research paper. There's no betting involved (the paper is about shooter evaluation, not betting). I should comply with the formatting requirements while being accurate to the source material.

Let me think about what this paper actually says so I can ground my analysis in the real content:

Key facts from the paper:
- Marty 2018, UC San Diego, "High-resolution shot capture reveals systematic biases and an improved method for shooter evaluation"
- 22 million+ shots captured by Noahlytics
- Sensor hangs ~13 feet above basket
- 5,649 individuals (NBA, WNBA, NCAA, high school), male and female
- Three shot entry attributes: Left-Right, Depth, Angle
- Left-Right: -9" (leftmost), 0" (straight), +9" (rightmost) from shooter's perspective
- Depth: 0" (front of hoop), 18" (back of hoop)
- Angle: flat ~36°, high arc ~55°
- 6-inch by 6-inch squares for court heat maps
- Right corner: shoot 2.34 inches left of center; left corner: 1.05 inches right of center
- NBA player L-R std dev ~4 inches from corner 3
- Sacrificing up to 4% from right corner, up to 2% from left corner
- Handedness hypothesis (more right-handed shooters)
- GMZ = Guaranteed Make Zone
- Depth: shorter shots go deeper, longer shots go shorter
- Mid-range ~11 inch depth, long 2-pt ~10 inch, 3-pt ~9 inch
- Mean depth decreases: 10.1 inches at 15-18 ft to 7.8 inches at 27-30 ft
- GMZ center: 11.5 inches at 15-18 ft to 10.5 inches at 27-30 ft
- ~1.5% decrease for 24-27 ft 3-pt, ~2.9% decrease for 27-30 ft 3-pt
- Ranking section: shots 18-22 feet
- Players A, B, C: 27,636 / 25,031 / 10,524 shots; 50% / 58% / 75%
- Sessions of 25, 100, 500, 1000 shots; >1000 needed to rank reliably
- Nine features: mean of each attribute (3), std dev of each attribute (3), spearman correlation between each pair of attributes (3) = 9
- Plus raw shooting percentage = 10 dimensions
- t-SNE for unsupervised clustering
- Gradient Boosting Regression for supervised model
- 2/3 train, 1/3 test split
- Half the MSE of raw shooting percentage
- Spearman rank correlation increased
- Bias from limited training range (30%-90%): inflates poor players, deflates great players
- Movement defined as mean distance between consecutive shots; excluded sessions with >2 feet movement
- Negative correlation between movement and shooting percentage

Now let me build the formal equations that ARE grounded in the source (not toy equations):
- Left-Right, Depth, Angle as measured quantities
- Binomial sampling model for shooting percentage: p̂ = k/n, Var(p̂) = p(1-p)/n
- This explains the session-size overlap issue (25 vs 1000+ shots)
- Spearman rank correlation
- MSE
- Gradient boosting
- t-SNE

Let me think about the physics: 
- Projectile motion of a basketball
- Entry angle and the effective hoop area (the projected area of the hoop as seen by the descending ball)
- The "effective target size" scales with the entry angle

Actually there's real physics here I can formalize properly. The hoop is a circle of diameter 18 inches (rim) and the ball has diameter ~9.4 inches (regulation men's). The margin for a swish is (rim - ball)/2 on radius... The effective opening presented to a ball entering at angle θ from horizontal is an ellipse with minor axis = D·sin(θ). This is well-known physics (Noah Basketball, and academic work by Silverberg, Tran, Adams on optimal shot angles).

Let me formalize:
- Rim diameter: D_rim = 18 in = 0.4572 m
- Ball diameter: D_ball ≈ 9.39 in (men's) = 0.2386 m
- Effective clearance radius when entering at angle θ: the ball center must pass through a reduced region.

The effective target area for the ball center is an ellipse with:
- major axis a = D_rim − D_ball
- minor axis b = (D_rim − D_ball)·sin(θ)

So the effective target area A_eff(θ) = π·a·b/4... wait let me be careful.

For a circular rim of diameter D_r and a ball of diameter D_b, the locus of allowable ball-center positions at the rim plane is a circle of diameter (D_r − D_b). When the ball approaches at angle θ to the horizontal (θ = 90° is straight down), the projection onto the rim plane is an ellipse with:
- Semi-major axis: α = (D_r − D_b)/2
- Semi-minor axis: β = (D_r − D_b)/2 · sin(θ)

So the effective area presented to the ball center is:
A_eff(θ) = π·α·β = π·[(D_r − D_b)/2]²·sin(θ)

This is legitimate projectile/geometry physics, and it explains why higher arc (larger θ) is more forgiving — Noah's Angle attribute (36° to 55°) directly maps to sin(θ). This is NOT a toy equation; it's derived from rim geometry and ball size.

Let me compute: with D_r = 18", D_b = 9.39", (D_r − D_b)/2 = 4.305". At θ = 36°, sin = 0.588; at θ = 55°, sin = 0.819. So A_eff ratio = 0.819/0.588 = 1.39, a ~39% larger effective target at 55° vs 36°. That's a real, defensible physical result.

The GMZ (Guaranteed Make Zone) is the central region where even with lateral/depth dispersion the ball center stays within the clearance ellipse. The paper reports GMZ center at ~11.5" depth (15-18 ft) and ~10.5" (27-30 ft). Note: rim center depth in the paper's frame — front = 0", back = 18", so center of rim = 9". GMZ center at 11.5" is behind rim center (deeper). Interesting — the paper says players shoot short of GMZ center, meaning players shoot shallower than optimal.

Wait, let me reconcile. Depth: 0" front, 18" back. Rim center = 9". GMZ center at 11.5" means optimal is slightly past center (toward back). Players' mean depth is 10.1" (15-18 ft) and 7.8" (27-30 ft). So players shoot short of GMZ center — mean depth (10.1) < GMZ center (11.5) at short range, and (7.8) < (10.5) at long range. Yes, consistent with "players shoot shorter than optimal." Good.

Now the sampling statistics. For binomial: if true make rate is p, in a session of n shots, observed rate p̂ has:
E[p̂] = p, Var(p̂) = p(1−p)/n, SD(p̂) = sqrt(p(1−p)/n)

For player C (p = 0.75) at n = 25: SD = sqrt(0.75·0.25/25) = sqrt(0.1875/25) = sqrt(0.0075) = 0.0866 = 8.66%
For player A (p = 0.50) at n = 25: SD = sqrt(0.25/25) = sqrt(0.01) = 0.10 = 10%

So a single 25-shot session of player C (75%) could easily be below player A's (50%) by chance — the distributions overlap heavily. This is the paper's exact point (Figure 4A). At n = 1000:
SD(C) = sqrt(0.1875/1000) = 0.0137 = 1.37%
SD(A) = sqrt(0.25/1000) = 0.0158 = 1.58%
Now the separation (25 percentage points between A and C means) vs SD ~1.5% → clean separation. This is the "sessions of over 1,000 shots are necessary to rank shooters reliably" claim [PAGE 6].

This is all real, derivable, and grounded. 

Now let me also think about the singularity/breakdown regimes (invariant 2 asks for these):
- t-SNE breakdown: perplexity choice, cluster sizes appear even in noise (well-known t-SNE artifact). Divergence of KL as perplexity → N. This is a real breakdown regime.
- Gradient boosting bias from range truncation (30-90%): regression to the mean at the tails — this is the boundary bias, the paper explicitly notes it inflates poor shooters and deflates great ones [PAGE 8, 10].
- Binomial estimator: at small n, normal approximation to binomial breaks down (np < 5 or n(1-p) < 5 rule). For corner 3s, p is low and n per cell small.
- The movement confounder: correlation between movement and FG% is a Simpson's-paradox / confounding risk.

Let me think about "weather veto" for CROSS_LAYER_VETO — this is a basketball context, indoor. But there are physical vetoes: 
- Biomechanical: the handedness hypothesis (right corner worse) — this is a physical/biomechanical claim. I can adjudicate whether the physical layer supports it.
- Wind/air: indoor gym, negligible, so "weather" is essentially nulled — I can state this honestly.
- The dominant physical veto: bank shots contaminate the L-R and Depth maps at 45° from hoop (the paper explicitly removes these regions). This is a real physical confound.

Let me make sure I don't fabricate. I'll ground every numeric claim in the source with [PAGE N] citations and verbatim quotes where possible.

Let me gather verbatim quotes with page markers:
- [PAGE 2] "The Noahlytics system utilizes a sensor that hangs about 13 feet above the basket, capturing all shots taken." "The data in this paper comes from 5,649 individuals."
- [PAGE 2] "Left-Right is the left to right deviation of the shot at the hoop. A shot which lands exactly on the leftmost part of the hoop from the perspective of the shooter has a Left-Right value of -9", a straight shot has a Left-Right value of 0" and a shot which lands on the rightmost part of the hoop has a Left-Right value of +9"." "a shot which lands directly on the front of the hoop ... has a Depth value of 0" and a shot which lands directly on the back of the hoop has a Depth value of 18"." "A relatively flat shot can have an Angle value of 36° and a relatively high arcing shot can have an Angle value of 55°."
- [PAGE 4] "players shooting from the right corner shoot 2.34 inches left of the hoop center" "players shooting from the left corner shoot 1.05 inches right of the hoop center" "An average NBA player shoots with Left-Right standard deviation of about 4 inches from the corner 3-point distance" "an NBA player with average Left-Right distribution is sacrificing up to 4% of shooting percentage from the right corner and up to 2% of shooting percentage from the left corner" "we hypothesize this difference is due to a much higher percentage of right-handed shooters."
- [PAGE 5] "shorter shots go deeper in the hoop and longer shots go shorter in the hoop" "Mid-range shots average about 11 inch Depth (white) while long 2-point shots average about 10 inch Depth (light red) and 3-point shots average about 9 inch Depth (dark red)" "the mean Depth value decreases as shots get longer, from 10.1 inches at 15-18 feet to 7.8 inches at 27-30 feet" "the center of the GMZ region remains more constant, only shifting from 11.5 inches at 15-18 feet to 10.5 inches at 27-30 feet" "about a 1.5% decrease in shooting percentage for the typical NBA 3-point shot of 24-27 feet" "the long 3-point shot has an even more dramatic 2.9% decrease in shooting percentage."
- [PAGE 5-6] "In this section, we focus on shots of length 18-22 feet" "Players A, B and C took 27,636, 25,031 and 10,524 18-22 foot shots, respectively... The players averaged 50%, 58% and 75% made shots" "Sessions of over 1,000 shots are necessary to rank shooters reliably."
- [PAGE 7] "the mean for each shot attribute (Left-Right, Depth and Angle), the standard deviation for each shot attribute and spearman correlation between each pair of shot attributes" = nine features. "We chose to use Gradient Boosting Regression to allow for the optimization of arbitrary differentiable loss functions."
- [PAGE 8] "The model has half the mean squared error of raw shooting percentage" "There is currently a bias in the estimator due to the limited range of training percentages that inflates the predicted shooting percentages of poor players and deflates the predicted shooting percentages of great players."
- [PAGE 10] "the training data only has players with overall shooting percentages between 30% and 90%" "we excluded all sessions with an average movement of greater than two feet" "movement as the average (mean) distance between consecutive shots"
- Citation [3] is Marty & Lucey 2017 (prior year's paper on 3-point shooting and GMZ).

Good, I have plenty of grounded material.

Now let me write the six sections. I need >= 1,000 words total, with THINK_TRACE >= 400 words. Let me aim higher for safety, maybe 1,600-2,000 words total.

Let me structure:

<THINK_TRACE> (>= 400 words): Deep multi-hop derivation and gray-zone audit. I'll walk through: (1) how the coordinate frame is defined (shooter-relative, front=0/back=18), (2) the sampling-statistics derivation of why 25 shots fail and 1000 needed, (3) the effective-target geometry linking Angle to make probability, (4) the depth/GMZ asymmetry, (5) gray zones: bank-shot contamination, movement confound, range-truncation bias, t-SNE artifacts, the handedness hypothesis being untested. Audit what the paper asserts vs what it proves.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Binomial estimator variance, effective target ellipse geometry, MSE, Spearman, gradient boosting objective, t-SNE KL. Units, page citations, breakdown/singularity regimes.

<RETROCAUSAL_GENEALOGY>: Goldsberry 2012 CourtVision → Marty & Lucey 2017 → Marty 2018. Noah Basketball lineage. Multi-week traps: the temptation to keep using raw FG% because it's the historical convention; the prior year's mistake of pooling all 3s.

<RECURSIVE_THEORY_OF_MIND>: crisis habit regression vs counter-trap vs clock. This is about the coach/player/evaluator's mind. Under crisis (small sample, deadline like draft day), they regress to raw FG% habit. Counter-trap = the 10-dim model. Clock = the 10-month tracking window, draft/trade deadlines, the "as data accumulates over years" future-prediction.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Indoor → wind nulled. Bank shots at 45° are the physical confound, explicitly removed. Handedness biomechanics. Ball/rim geometry veto: the 9.39" ball vs 18" rim clearance.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios with predictions. RLVR = reinforcement learning from verifiable rewards — I interpret this as falsifiable test scenarios where the paper's method would be vetoed/fail. Give 3 concrete, verifiable predictions.

Let me write these carefully, grounding everything, using proper LaTeX, and not inventing toy ratios. The only equations I use are ones actually implied by the source (binomial sampling, geometry of the rim/ball, MSE, Spearman, boosting, t-SNE). I'll clearly flag assumptions.

Let me be careful about the "effective target" — I should note the ball diameter is an external physical constant (regulation 9.39" / size 7 men's, ~9.5" for women's size 6... actually women's ball is smaller ~9.07-9.23"). I'll state this as an assumption since the paper doesn't give ball size. I'll mark it clearly as an external physical parameter, not from the source.

Actually, let me reconsider the effective target geometry more carefully to make sure it's right.

The rim is a horizontal circle of radius R = D_r/2 = 9". The ball is a sphere of radius r = D_b/2 ≈ 4.7". For the ball to pass through without touching the rim, the center of the ball must pass through a horizontal circle of radius (R − r) = 9 − 4.7 = 4.3" at the instant the ball center is in the rim plane... 

Hmm, actually this isn't quite right either because the ball is a sphere passing through a plane. The condition for the sphere of radius r to pass through a circular hole of radius R without contact is that the center passes within (R − r) of the axis, measured in the plane. So the allowable region for the ball center in the rim plane is a disk of radius (R − r).

Now the ball approaches along a direction making angle θ with the horizontal. The "effective target" as seen perpendicular to the trajectory is this disk foreshortened. But what matters for make/miss given lateral (L-R) and depth dispersion measured IN the rim plane is: the ball center's crossing point (in the rim plane) must lie within the disk of radius (R−r) = 4.3". 

Wait — but then angle wouldn't matter for the in-plane clearance. The subtlety: the paper measures L-R, Depth (in rim plane) and Angle separately. For a fixed in-plane crossing point, does entry angle affect make probability? 

The real reason arc matters: (1) A steeper entry means the ball is descending more vertically, so the in-plane clearance requirement is the binding constraint (a ball entering nearly horizontally would hit the rim from the side even if its "crossing point" is central — the sphere would clip the front rim). (2) The classic result (Silverberg & Tran, "Optimal Targets for Bank Shots and Direct Shots"): the probability the ball passes through depends on the projection of the ball's clearance onto the plane perpendicular to the velocity.

Let me reconsider. The standard treatment: consider the ball's center following a straight line (at the rim, approximate trajectory as locally straight) with direction making angle θ below horizontal. The rim is a circle of radius R in the horizontal plane. The ball (radius r) clears the rim iff the line of the ball center passes at horizontal distance... no.

The correct condition: The ball clears iff the trajectory of the center does not bring the sphere within contact of the rim circle. Equivalently, project everything onto the plane perpendicular to the velocity direction. In that perpendicular plane, the rim circle projects to an ellipse, and the ball is a circle of radius r. The ball clears iff the projected center passes within the projected ellipse shrunk by r.

The rim circle of radius R, viewed along a direction θ below horizontal, projects to an ellipse with semi-major axis R (the horizontal axis perpendicular to the velocity's horizontal component) and semi-minor axis R·sin(θ) (the axis along the horizontal component of velocity). 

So the effective opening in the perpendicular plane is an ellipse with semi-axes R and R·sin(θ). The ball center (projected) must stay within this ellipse shrunk by the ball radius r. Approximating the "shrunk by r" as reducing both semi-axes by r:
- semi-major: (R − r)
- semi-minor: (R·sin(θ) − r)

This is the well-known effective clearance. The effective area:
A_eff(θ) ≈ π·(R − r)·(R·sin(θ) − r)

This shows: as θ decreases, R·sin(θ) − r shrinks, and there's a critical angle θ_c where R·sin(θ_c) = r, i.e., sin(θ_c) = r/R, below which the ball cannot physically pass regardless of aim (the minor axis of clearance goes to zero → SINGULARITY / breakdown). 

Compute: r/R = 4.7/9 = 0.522 → θ_c = arcsin(0.522) = 31.5°. So below ~31.5° entry angle, a centered shot still cannot fit — this is the physical breakdown regime! And the paper's flat shot is 36°, just above this. This is a beautiful, real, derivable singularity. Let me double check: sin(31.5°) = 0.522. r = 4.695" (9.39/2), R = 9". r/R = 0.5217. arcsin(0.5217) = 31.45°. Yes.

For women's ball, D_b ≈ 9.23" → r = 4.615", r/R = 0.513, θ_c = 30.85°.

So the critical entry angle is ~31°, and the paper's flattest observed shots (36°) clear it by only ~5°. The effective clearance minor axis at 36°: R·sin(36°) − r = 9·0.588 − 4.695 = 5.29 − 4.695 = 0.595". At 55°: 9·0.819 − 4.695 = 7.37 − 4.695 = 2.675". So the depth-direction clearance goes from ±0.6" at 36° to ±2.68" at 55° — a 4.5× increase in the tightness-limited dimension. This is a genuinely strong, source-consistent physical result. It's NOT a toy equation; it's the classical projectile-clearance geometry, and it's exactly why the Angle attribute matters and why the GMZ has a finite depth extent.

This is great material. Let me use it, clearly labeling ball diameter as an external physical constant (assumption), since the paper gives rim = 18" but not ball size.

Let me also verify the lateral (major axis) clearance: R − r = 9 − 4.695 = 4.305". The paper says L-R ranges -9 to +9 (rim edges) and an NBA player has L-R SD ~4" from the corner. The GMZ lateral half-width ≈ 4.3". With SD 4" and mean offset 2.34" (right corner), a large fraction of shots fall outside ±4.3" → explains the ~4% loss. I can sanity-check: if mean L-R = −2.34" (2.34 left), SD = 4", the probability |X| < 4.3" ... actually the make also requires depth within GMZ. But roughly, shifting the mean from 0 to 2.34 with SD 4 reduces the centered probability. Let me compute the lateral-only make proxy: P(−4.3 < X < 4.3) with X~N(μ, 4²).
- μ=0: P = P(−1.075 < Z < 1.075) = 2Φ(1.075) − 1 = 2(0.8586) − 1 = 0.717
- μ=2.34: P(−4.3−2.34 < ... ) = P((−4.3−2.34)/4 < Z < (4.3−2.34)/4) = P(−1.66 < Z < 0.49) = Φ(0.49) − Φ(−1.66) = 0.6879 − 0.0485 = 0.639
- Reduction: (0.717 − 0.639)/0.717 = 10.9%. Hmm, that's larger than the 4% reported.

But the paper's 4% is the TOTAL shooting percentage loss accounting for the joint distribution (both L-R and depth must be within GMZ, and the ball radius margin already bakes into the GMZ). My lateral-only proxy overstates because it treats the full ±4.3" as hard make window ignoring that the ball can still go in off the rim (rolls). Also the corner-3 make base rates are ~35-38%, not 72%. The GMZ is a "guaranteed make" sub-region, not the whole make region — many makes happen outside the GMZ via rim rolls. So my proxy isn't directly the reported 4%. I should be careful: I'll present the geometry as the mechanism and note that the exact 4%/2% figures come from the paper's simulation (Figure 2B-C) which I can't fully reconstruct, but the direction and order of magnitude are consistent. I won't overclaim that my number reproduces theirs. Good — honesty about what's verified vs not.

Actually, let me reconsider whether to present the Gaussian integral at all, since it doesn't reproduce their number and could look like a "toy equation." I think it's fine as long as I'm explicit that it's an order-of-magnitude mechanism check, not a reproduction of their simulation, and I flag the discrepancy (my lateral-only proxy gives ~10%, theirs is 4%, the gap because GMZ ≠ full make region and rim-roll makes aren't counted as misses). That's exactly the kind of gray-zone audit the format wants. I'll include it with heavy caveats.

Let me now also get the binomial numbers right for the ranking section:
- Player A p=0.50, Player B p=0.58, Player C p=0.75
- n=25: SD_A = 10.0%, SD_B = 9.9%, SD_C = 8.66%
- Overlap: C's mean (75%) is 25 pts above A's (50%); with SDs ~9-10%, that's 2.5 SD apart → but session-to-session a C-session mean could dip to ~58% (−1.7 SD) and an A-session could rise to ~67% (+1.7 SD). Actually the paper's point is that individual SESSIONS overlap: a single 25-shot session of C can score below a single 25-shot session of A "by chance." Let me check: for C to score below A in a given session, need p̂_C < p̂_A. With both ~binomial... P(p̂_C < p̂_A) is non-trivial when SDs are large. At n=25 the overlap is "very high" per paper. At n=1000, SDs ~1.4-1.6%, gap 25 points = ~16 SD → essentially zero overlap. Good.

Let me compute n=1000: SD_A = sqrt(0.25/1000) = 0.0158 = 1.58%; SD_C = sqrt(0.1875/1000)=0.0137=1.37%. Yes.

Now, the "sessions of over 1,000 shots are necessary" — I can note the breakdown: the normal approximation to the binomial requires np ≥ ~5 and n(1−p) ≥ ~5; for ranking by non-overlap you need the between-player gap (in SD units) to exceed ~3-4, which for a 25-point gap and SD = sqrt(p(1-p)/n) gives n ≥ (25/(3·... ))² ... Let me solve: to get gap/SD ≥ 3 (roughly), 0.25 / sqrt(0.19/n) ≥ 3 → sqrt(0.19/n) ≤ 0.0833 → 0.19/n ≤ 0.00694 → n ≥ 27.4?? That gives only ~28 shots for 3 SD separation. Hmm, that contradicts "1000 needed."

Wait, I need to reconsider. The paper's Players A, B, C differ by 8% and 17% (50, 58, 75). The hardest pair to separate is A vs B: 50% vs 58%, gap = 8 points = 0.08. For 3-sigma separation: 0.08 / sqrt(0.24/n) ≥ 3 → sqrt(0.24/n) ≤ 0.0267 → 0.24/n ≤ 0.000711 → n ≥ 337. For cleaner separation (say the distributions to have "low overlap," maybe 4-5 sigma), n ≥ ~600-1000. So the A-vs-B pair (8-point gap) is what drives the 1000-shot requirement, not A-vs-C. That makes sense and I can show it. Good, this is a real derivation consistent with the paper.

Actually let me reconsider what "rank reliably" means. To rank 3 players reliably (all pairwise), the binding constraint is the smallest gap = A vs B = 0.08. Need n such that pairwise separation is clean. At n=1000, SD_A=1.58%, SD_B=1.55%, gap 8% → 8/1.55 ≈ 5.2 sigma → very clean. At n=250, SD ≈ 3.1%, gap 8% → 2.6 sigma → substantial overlap. At n=25, SD≈10%, gap 8% → 0.8 sigma → massive overlap. This precisely reproduces the paper's qualitative finding (25 terrible, 100 still overlapping, >1000 reliable). Excellent — this is a genuine derivation from the source's own numbers. I'll present this.

Let me compute a few precisely:
- gap(A,B) = 0.58 − 0.50 = 0.08
- Pooled-ish SD at n: use SD_A ≈ SD_B ≈ sqrt(0.24/n) (since 0.5·0.5=0.25, 0.58·0.42=0.2436, ~0.24)
- n=25: SD=sqrt(0.24/25)=sqrt(0.0096)=0.098=9.8%; separation = 0.08/0.098 = 0.82σ
- n=100: SD=sqrt(0.24/100)=0.049=4.9%; sep=1.63σ
- n=500: SD=sqrt(0.24/500)=0.0219=2.19%; sep=3.65σ
- n=1000: SD=sqrt(0.24/1000)=0.0155=1.55%; sep=5.16σ

So separation crosses ~3σ around n≈340 and ~5σ at n≈1000. The paper's ">1000 for reliable" corresponds to wanting ~5σ (very conservative, negligible misrank probability). This is a clean, honest derivation. 

Now let me write. I'll keep the LaTeX clean and clearly separated. I need to hit word counts. Let me write generously.

One more thing: I must respect ZERO BETTING LINES (no odds/spreads) — trivially satisfied, this is analytics. And ZERO TOY EQUATIONS — I'll only use real derivations. Good.

Let me also make sure the RETROCAUSAL_GENEALOGY "multi-week traps" and RECURSIVE_THEORY_OF_MIND sections address the human/decision dynamics, and CROSS_LAYER_VETO does physical/biomech/weather, and RLVR gives 3 verifiable counterfactuals with predictions.

For CROSS_LAYER_VETO:
- Weather/wind: indoor arena, air is still; aerodynamic drag on a basketball over ~5-8 m flight is small but nonzero; wind ≈ 0 indoors → weather veto is essentially NULL, so it cannot explain the biases. I'll state the drag consideration honestly: the paper's depth bias (shooting short on long shots) could in principle be partly aerodynamic (drag makes long shots fall short if aim/force calibrated to vacuum), but the paper attributes it to a systematic aiming bias relative to GMZ, not drag. Actually drag is a real physical effect: a projectile under quadratic drag falls short of its vacuum range, so players who calibrate power by feel might consistently land short on long shots — this is a plausible PHYSICAL mechanism underlying the "longer shots land shorter" observation! But the paper frames it as fixable by "training to shoot at GMZ center." I can adjudicate: the depth-short bias is consistent with a drag/force-calibration physical cause, but the paper's L-R bias (right corner worse) is NOT explained by drag — it's biomechanical (handedness). So the cross-layer veto: drag could co-explain depth, but cannot explain L-R; handedness explains L-R but not depth. No single layer explains both; the physical/biomechanical layers are separable. Nice adjudication.

Let me estimate drag relevance: basketball drag. Terminal-ish. The drag force F_d = ½ρC_d A v². For a shot, v ~ 7-8 m/s, ρ=1.2 kg/m³, C_d≈0.5, A=π(0.12)²=0.045 m². F_d = 0.5·1.2·0.5·0.045·64 ≈ 0.86 N. Ball weight mg = 0.62·9.81 = 6.1 N. So drag ~14% of weight at launch — not negligible; over the flight it produces a measurable shortfall, more so for longer/higher-speed shots. So drag is a physically real contributor to long shots landing short. Good, defensible.

For biomechanics: right-handed shooters' mechanics produce a right-corner left-bias and left-corner right-bias (both biased toward the body's centerline / follow-through direction). The paper's asymmetry (2.34" vs 1.05") with a "higher percentage of right-handed shooters" hypothesis. I'll adjudicate: consistent with population handedness skew (~85-90% right-handed), and the asymmetry direction is physically sensible (right corner is across the body for a righty → larger miss). But the paper did NOT collect handedness → it's an untested hypothesis → flag as a gray zone / a needed data collection (falsifiable).

For RLVR counterfactual vetoes (3 falsifiable scenarios with predictions):
1. If we re-run the ten-dimension model on left-handed shooters only, the right/left corner asymmetry should shrink or flip if handedness drives it. Prediction: for lefties, right-corner bias magnitude < left-corner bias magnitude (mirror of righties). Verifiable with the Noahlytics data + handedness labels.
2. If the depth-short bias is a force-calibration/drag artifact rather than aim bias, then instructing shooters to aim at GMZ center (deeper) should NOT fully recover the 2.9% on 27-30 ft threes if the cause is uncalibrated power under drag — OR conversely the paper predicts it WILL recover if it's aim. Verifiable A/B: retrain aim vs retrain power. Paper's claim ⇒ aim retraining recovers ~2.9%.
3. t-SNE clusters are unsupervised and can appear spuriously; if we replace the nine rim features with nine random noise features of matched scale and perplexity, t-SNE should still produce three visually separated clusters. If it does, the Figure 4B clustering is not evidence of real signal. Verifiable: run t-SNE on shuffled features. Prediction: apparent clusters persist → the visual is not probative; the supervised MSE/Spearman results (Figure 5) are the real evidence. This is a strong RLVR veto on the unsupervised figure.

These are all verifiable. Good.

Also a breakdown for the range-truncation bias: predictions clipped to [30%, 90%]; a true 95% shooter is underestimated, a true 20% shooter overestimated. This biases MSE upward (paper admits) but Spearman (rank) is invariant to monotone compression within the un-clipped range except at the tails where ties form. Falsifiable: extend training data to include <30% and >90% shooters → bias should shrink; MSE should drop further. Verifiable.

Let me now write it all out. I'll be thorough. Target ~1,800-2,200 words.

Let me draft each section.

I'll write the LaTeX inline with $...$ and display with $$...$$ as appropriate, using markdown. Since this is prose/analysis, markdown for the XML-like section headers is fine (they're literally requested tags).

Let me write.

For word counts, let me make THINK_TRACE clearly >400 words. I'll aim ~550.

Let me write carefully and make sure I cite pages and quote verbatim where I can.

Draft:

---

<THINK_TRACE>
(~550 words covering multi-hop derivation + gray-zone audit)
...

I'll write now. Let me make sure the equations are correct and clearly labeled with assumptions and units.

Assumptions to state:
- Rim diameter D_r = 18 in = 0.4572 m (from [PAGE 2]: Depth 0" front to 18" back).
- Ball diameter D_b: regulation size-7 men ≈ 9.39 in (0.2386 m), size-6 women ≈ 9.27 in — external physical constant, NOT in source. I'll assume 9.39 in.
- Rim radius R = 9 in, ball radius r = 4.695 in.
- Shots treated as independent Bernoulli(p) within a stationary session (paper restricts to low-movement sessions to approximate this — [PAGE 10]).

Let me finalize numbers:
- Critical angle: θ_c = arcsin(r/R) = arcsin(4.695/9) = arcsin(0.5217) = 31.45°.
- Effective minor clearance at angle θ: c(θ) = R sinθ − r.
  - θ=36°: 9(0.5878) − 4.695 = 5.290 − 4.695 = 0.595 in.
  - θ=55°: 9(0.8192) − 4.695 = 7.373 − 4.695 = 2.678 in.
- Effective lateral clearance (major): R − r = 4.305 in.

Binomial:
- Var(p̂) = p(1−p)/n; SD.
- A/B separation derivation as above.

Let me write the final answer.

I want to be careful with the claim that drag explains depth. I'll present it as a candidate physical mechanism the paper does NOT invoke, and note it's a gray zone. I'll compute drag/weight ~14% to justify plausibility.

Also I should note the "weather veto" — indoor, wind ≈ 0, so weather is nulled. Honest.

Let me write it all now. I'll keep it rigorous and cite pages.

I think I should not use tool calls here — this is an analysis/writing task based on provided source text, no files to read (the source is inline). The instruction mentions a "DRIVE SOURCE" path but the actual text is provided inline, so I don't need to read files. I'll just produce the analysis.

Let me write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
Multi-hop derivation and gray-zone audit. The paper's entire inferential chain rests on a coordinate convention that is easy to misread, so I fix it first. [PAGE 2] states the frame is shooter-relative: "the point on the hoop closest to the shooter is always defined as the front of the hoop," with Left-Right ∈ [−9″, +9″], Depth ∈ [0″ (front), 18″ (back)], and Angle ∈ [≈36°, ≈55°]. Two derived consequences follow. First, rim center sits at Depth = 9″, yet the Guaranteed Make Zone (GMZ) center is reported at 11.5″ (15–18 ft) and 10.5″ (27–30 ft) [PAGE 5] — i.e., optimal depth is *behind* rim center, and player means (10.1″ and 7.8″) fall *short* of it. Second, because Depth is measured in the rim plane, the make geometry must be reconstructed from rim/ball clearance, not from the make map alone.

Hop 2 — sampling statistics. The ranking failure (Fig 4A) is pure binomial variance, not "skill." With per-shot make probability $p$ and session size $n$, the session percentage $\hat p = k/n$ has $\mathrm{Var}(\hat p)=p(1-p)/n$. Plugging the paper's own means (A=0.50, B=0.58, C=0.75 [PAGE 6]) reproduces its qualitative claim: the A-vs-B gap (0.08) is only ~0.8σ at $n=25$, ~1.6σ at $n=100$, ~3.7σ at $n=500$, ~5.2σ at $n=1000$. So the binding pair is A-vs-B (8-point gap), and ">1,000 shots to rank reliably" corresponds to demanding ~5σ separation. This is a genuine derivation from source numbers, not a fitted curve.

Hop 3 — make geometry. The Angle attribute only matters because the rim presents a foreshortened aperture to a descending sphere. Treating the ball radius $r$ and rim radius $R$, the effective clearance ellipse (in the plane ⟂ velocity) has semi-axes $(R-r)$ laterally and $(R\sin\theta - r)$ in depth. This yields a hard breakdown at $\theta_c=\arcsin(r/R)\approx 31.5°$ (men's ball): below it, *no* aim scores. The paper's flattest observed shot (36°) clears by only ~5°, and depth clearance balloons from ~0.6″ at 36° to ~2.7″ at 55° — a ~4.5× loosening. This is why the GMZ has finite depth extent and why arc is non-negotiable.

Gray-zone audit. (a) The paper's headline losses (up to 4% right corner, 2% left [PAGE 4]; 1.5% and 2.9% depth [PAGE 5]) come from a simulation (Fig 2B-C, 3B) I cannot fully reconstruct; a crude Gaussian lateral-only proxy with mean offset 2.34″ and SD 4″ predicts ~10% loss, well above their 4%, because the GMZ is a *guaranteed-make core*, not the full make region — rim-roll makes are counted as makes but lie outside the GMZ. I therefore treat the *mechanism and sign* as verified and the *magnitudes* as unverified from text alone. (b) Bank shots contaminate both heat maps at 45° off the rim ([PAGE 3, 5]) and are explicitly excised — any re-analysis must replicate that excision or it will manufacture fake "biases." (c) The movement confounder ([PAGE 10], >2 ft/session excluded) is a Simpson's-paradox guard; pooling mobile and stationary shots would corrupt everything. (d) t-SNE (Fig 4B) is suggestive only — it can cluster noise — so the *supervised* MSE/Spearman results (Fig 5) carry the real evidentiary weight. (e) The handedness explanation for the 2.34″ vs 1.05″ asymmetry is explicitly an untested hypothesis ([PAGE 4]: "the Noahlytics system does not currently collect data on the handedness").

Net: the paper's *statistics* (session-size, MSE halving, rank correlation) and its *geometry* (GMZ, arc) are derivable and sound; its *effect sizes* are simulation outputs I can bound but not reproduce; and its *causal* claims (handedness, aim-vs-power for depth) are hypotheses, not proofs.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All symbols SI where possible; inches retained only when quoting source. External constant assumed (NOT in source): ball diameter $D_b=9.39''$ (size-7), so $r=4.695''$; from [PAGE 2], $D_r=18''$, $R=9''$.

(1) Coordinate/aim model. Crossing point $(x,d)$ in rim plane; miss requires exit from clearance set. Left-Right bias $\bar x$, Depth bias $\bar d$.

(2) Sampling estimator. For a stationary session (independence justified by [PAGE 10] movement cut),
$$\hat p=\frac{k}{n},\quad \mathbb E[\hat p]=p,\quad \mathrm{Var}(\hat p)=\frac{p(1-p)}{n}\ \text{(dimensionless)},\quad \sigma_{\hat p}=\sqrt{\tfrac{p(1-p)}{n}}.$$
Pairwise separability (dimensionless $z$): $z_{AB}(n)=\dfrac{|p_A-p_B|}{\sqrt{\bar p(1-\bar p)/n}}$. With $p_A{=}0.50,p_B{=}0.58$: $z=0.82,1.63,3.65,5.16$ at $n=25,100,500,1000$. Singularity: normal approximation to binomial breaks when $np<5$ or $n(1-p)<5$; for a corner-3 base rate $p\approx0.36$ this fails below $n\approx14$, so per-cell percentages in the 6″×6″ maps (dimensionless cells) are unreliable exactly where the bias is largest.

(3) Effective target geometry. Project rim (radius $R$) along velocity at angle $\theta$ to horizontal; ball radius $r$. Clearance semi-axes:
$$a(\theta)=R-r=4.305'',\qquad b(\theta)=R\sin\theta-r.$$
Effective make window area $A_{\text{eff}}(\theta)=\pi\,a(\theta)\,b(\theta)$ (in$^2$), valid for $\theta>\theta_c$.
Breakdown (hard singularity): $b(\theta_c)=0\Rightarrow \theta_c=\arcsin(r/R)=\arcsin(0.5217)=31.45^\circ$. For $\theta\le\theta_c$, $A_{\text{eff}}\le0$: zero makes regardless of aim. Evaluated: $b(36^\circ)=0.595''$, $b(55^\circ)=2.678''$ → depth tolerance ratio $2.678/0.595=4.5$.

(4) Aerodynamic layer (mechanism check for depth-short bias). Quadratic drag $F_d=\tfrac12\rho C_d A v^2$; with $\rho=1.2\,\mathrm{kg/m^3},C_d\approx0.5,A=\pi(0.12)^2=0.045\,\mathrm{m^2},v\approx7.5\,\mathrm{m/s}$: $F_d\approx0.76\,\mathrm N$ vs weight $mg=6.1\,\mathrm N$, i.e. $\sim12\%$. Vacuum-range calibration therefore undershoots more at longer range — a physical contributor to "longer shots land shorter."

(5) Regression objective. Gradient Boosting Regression ([PAGE 7]) fits $F(x)=\sum_m \gamma_m h_m(x)$ minimizing a differentiable loss $L$; MSE reported ([PAGE 8]) $\mathrm{MSE}=\tfrac1N\sum_i(\hat y_i-y_i)^2$, with model MSE $\approx\tfrac12\,\mathrm{MSE}_{\text{raw FG\%}}$. Range-truncation bias: $\hat y\in[0.30,0.90]$ ([PAGE 10]) forces $\mathbb E[\hat y\,|\,y]$ to compress at the tails; MSE inflates, but Spearman $\rho$ (rank) is invariant to the monotone compression except where clipping creates ties ($y<0.30$ or $y>0.90$).

(6) t-SNE. Minimizes $\mathrm{KL}(P\|Q)=\sum_{i\ne j}p_{ij}\log(p_{ij}/q_{ij})$ over 9 rim features + raw FG% = 10-D ([PAGE 7]); $p_{ij}$ from perplexity-defined Gaussian affinities. Breakdown: perplexity $\to N$ diverges; cluster blobs appear in pure noise, so it is visualization, not inference.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage is a three-generation narrowing of the "why." Gen-0: Goldsberry's CourtVision (2012, ref [1]) added *spatial* shot charts — "advocated for analysis to go beyond summary percentages" ([PAGE 1]). Gen-1: Marty & Lucey 2017 (ref [3]) introduced the GMZ — "3-point shots are most likely to score when shot at the center of the Guaranteed Make Zone" ([PAGE 4]) — but "grouped all 3-point shots together and did not consider how shot distance impacts shot Depth" ([PAGE 4]). Gen-2: this paper adds a second spatial axis at the rim (entry attributes) on top of floor location, using 22M shots and 5,649 individuals ([PAGE 2]). The intellectual trajectory is: *where* → *how the ball enters* → *why the percentage is what it is*.

Multi-week traps baked into this lineage. Trap 1 — convention inertia: the field's gold standard remains cumulative FG% ([PAGE 8] "gold standard … the cumulative percentage"), so an analyst under deadline pressure regresses to the metric the paper proves is noise-dominated at realistic sample sizes. Trap 2 — the pooling fallacy the authors themselves fell into last year: aggregating all 3-pointers masked the depth-distance trend; disaggregating by distance band (15–18, 24–27, 27–30 ft) is what exposed the 10.1″→7.8″ mean-depth drift ([PAGE 5]). An analyst who re-pools reproduces the old null. Trap 3 — bank-shot contamination: the 45° backboard signatures dominate both heat maps ([PAGE 3, 5]); failing to excise them fabricates "biases" that are pure shot-selection artifacts. Trap 4 — the movement confounder ([PAGE 10]): a "striking correlation between shooter movement … and shooting percentage" means any multi-week longitudinal comparison that mixes mobile and set shots commits a Simpson reversal. Each trap is *time-dependent*: it bites harder the more weeks of pooled, unstratified, moving-player data accumulate, precisely the data volume that tempts analysts to trust their sample.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three minds recursively model each other: the shooter, the coach, and the evaluator/analyst. Crisis habit regression: under acute pressure — draft night, a trade deadline, a tryout with 25 shots — the evaluator's prior collapses onto raw session FG% because it is fast and legible. The paper formalizes why this is a trap: at $n=25$ the A-vs-B separation is 0.8σ, so "some days Player C might produce a lower shooting percentage than Player A by chance" ([PAGE 6]). The evaluator *knows* small samples are noisy yet still ranks on them, because the alternative (10-D model) is opaque. That is the recursive loop: the evaluator distrusts the metric, trusts the number, and the number lies.

Counter-trap: the ten-dimension model ([PAGE 7–8]) converts nine rim-pattern features (means, SDs, and pairwise Spearman correlations of L-R/Depth/Angle) plus raw FG% into a rank estimate with half the MSE and higher Spearman ρ ([PAGE 8]). Its counter-move against regression is that it is *insensitive to which day* the 25 shots came from — Player A is "more frequently predicted to be a poor shooter and Player C … a better shooter despite the variability of their performance on any given day" ([PAGE 8]). It de-noises the evaluator's decision by pooling orthogonal physical signals.

Clock: three nested clocks govern behavior. (i) Session clock — 25-shot blocks cut by timestamp ([PAGE 10]); too short to rank. (ii) Season/career clock — the 10-month tracking window that made A/B/C's true means (50/58/75%) knowable ([PAGE 6]); only ">1,000 shots" sessions let the clock resolve rank. (iii) Horizon clock — the authors' forecast that "as data is collected over several years … the model [will learn] to predict potential future shooter ability" ([PAGE 8]). The recursive hazard: a coach optimizing against clock (iii) (development) may rationally accept short-term clock (i) noise, but an evaluator bound to clock (ii) (this week's roster) will not — and mis-ranks the developing shooter. Modeling the coach modeling the player's future, under the wrong clock, is where organizations lose the most value. The corrective is to make the evaluator's loss function rank-based (Spearman-invariant to the known [30%,90%] compression bias) rather than point-estimate-based.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Weather/wind layer: NULL. Indoor arenas (Noahlytics sensor 13 ft above the rim [PAGE 2]) mean ambient wind ≈ 0, so no crosswind can explain the *lateral* corner bias. The only aerodynamic term that survives is drag, which is a *speed/range* effect, not a left-right one. Drag magnitude (Eq. 4, ~12% of weight) is large enough to matter for depth: a projectile calibrated to vacuum range lands progressively shorter at longer distance, matching the observed 10.1″→7.8″ mean-depth decline ([PAGE 5]). Adjudication: drag is a *viable co-cause of the depth-short bias* the paper attributes purely to aim relative to GMZ center; the paper's fix ("simply training to shoot at the center of the GMZ," [PAGE 5]) implicitly assumes an aim/geometry cause and would under-deliver the promised 2.9% if the residual is power-calibration under drag.

Biomechanical layer: dominant for the *lateral* bias. Right corner is across the body for a right-handed shooter; the paper reports 2.34″ left-of-center (right corner) vs 1.05″ right-of-center (left corner) and hypothesizes population handedness skew ([PAGE 4]). Direction is physically coherent: both biases point the ball back toward the shooter's midline, and the larger across-body error (2.34″) exceeds the same-side error (1.05″). Veto test: handedness is *not collected*, so this remains a hypothesis; if measured, left-handers must show the mirrored pattern or the biomechanical layer is falsified.

Geometric layer: hard veto on flat shots. Eq. 3's breakdown at $\theta_c\approx31.5°$ means any biomechanical/aim claim about a 36° shot operates with only ~0.6″ depth clearance ([PAGE 2] flat = 36°); a 2″ short bias at that arc is *three clearance-widths* — a near-certain miss — whereas the same 2″ bias at 55° (2.7″ clearance) is survivable. Cross-layer proof of separation: no single layer explains both signatures. Drag explains depth-short but is blind to left-right; handedness explains left-right but is symmetric in range; geometry gates both by arc. Therefore the two headline biases are physically *decoupled* and must be diagnosed independently — a fact the paper's unified "shoot at GMZ center" prescription obscures.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto 1 — Handedness mirror (falsifies the biomechanical claim). Collect shooter handedness (the missing datum, [PAGE 4]) and re-run the corner analysis on left-handers only. Prediction: if handedness drives the asymmetry, left-handers show right-corner bias < left-corner bias (mirror of the 2.34″ > 1.05″ righty pattern). Verifiable via Noahlytics rim data + a handedness label; failure (symmetric bias) vetoes the biomechanical layer and points to a court-geometry/camera-frame artifact instead.

Veto 2 — Aim-vs-power dissociation for depth (falsifies "just aim at GMZ"). Randomized retraining: Group 1 retrained to aim deeper (at 10.5–11.5″ GMZ center); Group 2 retrained on power/force only, same aim. Paper's implicit claim ([PAGE 5], "recovered by simply training to shoot at the center of the GMZ") predicts Group 1 recovers most of the 2.9% loss on 27–30 ft threes. Aerodynamic veto (Eq. 4) predicts Group 2 recovers a nontrivial residual because drag undershoot is a force-calibration error. Verifiable by pre/post depth means and FG% at 27–30 ft; if Group 2 ≈ Group 1, the "aim-only" story is vetoed.

Veto 3 — t-SNE noise control (falsifies Fig 4B as evidence). Replace the nine rim features with nine mean-matched, variance-matched *shuffled* features (permutation null) at identical perplexity, and regenerate Fig 4B. Prediction: three visually "clustered" blobs persist (t-SNE manufactures clusters in noise, Eq. 6). Verifiable by re-running the published pipeline (code at github.com/Rachelmarty20/Noah, [PAGE 9]) on permuted inputs; persistence of apparent clusters vetoes the *unsupervised* figure as evidence and confirms that only the supervised MSE-halving and Spearman-ρ gains ([PAGE 8]) are load-bearing. Corollary prediction: extending training beyond the [30%,90%] range ([PAGE 10]) will shrink the tail compression bias and further lower test MSE without changing Spearman ρ materially.
</RLVR_COUNTERFACTUAL_VETOES>