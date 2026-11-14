---
source: "Overtime_Rules_and_Incentives_in_the_Nat.pdf"
folder: "/GSE-Research/sports-research-papers/randoms"
pages: 26
model: auto
words: 1043
---

<THINK_TRACE>
The source text at [PAGE 2] establishes the central claim: “The model predicts that the average number of points during a season will rise, yet the average point differential among clubs within the same conference will fall.” The same page adds, “The result is more competitive and exciting conference games requiring fewer overtime periods and potential ties. Empirical data support these hypotheses.” This is a deep multi-hop derivation because the chain begins with the NHL overtime rule change, moves through payoff revaluation, game-theoretic expected value, team behavior, and finally empirical validation.

At [PAGE 3], the source describes Rule 89: ties at the end of regulation now award one point each, and a five-minute overtime period uses four skaters and one goalie. The first overtime goal awards one additional point, while the losing club retains its regulation point. Under the old rule, the overtime winner earned two points and the loser earned none. This changes the incentive structure from a sudden-death binary to a points-based conditional contest. The source then notes at [PAGE 4] that the model should provide “an incentive for clubs to divert scarce talent toward games in which they play a team from the same conference.”

The derivation continues through the two-stage game at [PAGE 6], where win, loss, and tie probabilities are represented by \(p_1\), \(p_2\), and \(p_3\), with \(p_1+p_2+p_3=1\). The expected value of a contest is a weighted sum of payoffs. The source uses contour lines in expected payoff space to show how the opportunity set changes. At [PAGE 8], the expected payoff equations show point compression within conferences and point expansion for interconference play. At [PAGE 10-11], the slope of contour lines and the overtime success differential affect strategic play.

The gray-zone audit must note that the model assumes unconditional and independent probabilities, while real NHL contests are conditional on talent, injuries, home ice, and other state variables. The singularity regime appears when \(p_3=0\), because then the new and old overtime rules have no tie-related payoff difference. The breakdown regime appears when overtime success probabilities change sharply, altering the differential \(p_1'-p_2'\). The source states at [PAGE 20] that empirical results for the 1999-2000 season were used to test whether “playing for a tie” became attractive. The deep reasoning must hold together formal incentives, behavioral response, and estimation uncertainty.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source operator is a two-stage game with a regulation stage and an optional overtime stage. The probability operator is written formally as:
\[
p_1+p_2+p_3=1,
\]
where \(p_1\), \(p_2\), and \(p_3\) are dimensionless probabilities of winning, losing, and tying in regulation. The expected value operator is:
\[
V=\sum_{s} p_s \pi_s,
\]
where \(p_s\) is the probability of outcome \(s\) and \(\pi_s\) is the relative point payoff. For within-conference play under the old rule, the source uses relative payoffs such as win \(=2\), loss \(=-2\), and tie \(=0\). Under Rule 89, the within-conference loss payoff becomes \(-1\), while the tie at the end of regulation carries no relative change within the conference. Units are points per contest, and probabilities are dimensionless. Assumptions include full use of team resources and independence of outcomes from opponent quality.

The source reports the expected payoff relation at [PAGE 8] and the point-differential equations at [PAGE 8-9]. The model predicts average point changes and variance changes. The exact singularity regime is when ties are impossible, \(p_3=0\), because then the overtime rule change does not affect the expected value through the tie branch. The breakdown regime is when overtime success is highly unequal, since the source examines the differential between overtime win and loss probabilities at [PAGE 11]. Formal citations include [PAGE 6], [PAGE 8], [PAGE 10], and [PAGE 11].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage begins with the NHL’s earlier overtime experimentation, including the 1983-1984 season change intended to reduce ties, as noted at [PAGE 4]. The percentage of overtime decisions peaked at 41.5% in the 1985-1986 season and reached 24.7% in 1997-1998, according to [PAGE 4]. Rule 89 was adopted for the 1999-2000 season. The authors trace prior economic work on tournament incentives, including Taylor and Trogdon’s 2002 analysis of the NBA, cited at [PAGE 26], and Allen’s 2002 NHL study, also cited at [PAGE 26]. The multi-week trap is that the authors compare 1998-1999, 1999-2000, and 2000-2001 seasons, with the first season after Rule 89 as a critical transition. The source states at [PAGE 4] that “The statistical evidence on how competitive balance affects attendance is mixed.” This historical and empirical layering is essential for retroactive causal reasoning.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory of mind audit considers how a team might regress under crisis. The crisis habit regression would be a team returning to older conservative strategies, such as playing for ties or protecting leads. The counter-trap would be the new overtime incentive that discourages losing within conference play. The clock would be the time pressure of a regulation contest leading to strategic patience or urgency. The source does not use these exact terms, but the recursive structure is relevant to how clubs update beliefs about payoff relevance.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical and biomechanical veto proof is important. The source notes that under Rule 89, overtime uses four skaters and one goalie rather than five skaters and one goalie at [PAGE 3]. This alters physical load and fatigue conditions. A biomechanical veto could reject a strategy that assumes a team can maintain high-intensity play under reduced skater numbers. Weather is not a direct variable in the source, so a weather veto would be inapplicable unless applied to outdoor contexts. The veto proof layer must still respect recovery, goalie workload, and skater capacity.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios can be stated. First, if within-conference loss payoff had remained \(-2\) under Rule 89, the expected point compression would be weaker. Second, if interconference ties did not award a relative point, the incentive to “play for a tie” would be lower. Third, if overtime success had not improved, the opportunity set for losing in regulation would not shift as predicted. The source predicts more effort directed toward conference contests, particularly by lesser-talented clubs, at [PAGE 4]. The empirical data support point compression at [PAGE 17]. Predictions: within-conference point variance falls; interconference point variance rises; fewer overtime periods are needed for competitive games.
</RLVR_COUNTERFACTUAL_VETOES>