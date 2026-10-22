# Hermes red-team of 2026-10-22

Branch: Beexly/Sports audit/reconciliation-2026-10-20
SHA: 1c753a2a4a4f440db2b29a44bde0a6312a4902ef
Remote matches that SHA. Not pushed to main.

## Faults found and fixed

- keyNumberMass used Math.round. In JavaScript Math.round(-3.5) is -3, so a negative half-yard margin missed the key number. It now rounds half away from zero. -3.5 counts as 4.
- marcelWeightedRate indexed MARCEL_SEASON_WEIGHTS with a runtime season that can be outside 0-2. That produced NaN. It now throws.
- gaussianNeighborWeights treated a distance of 0 as the nearest neighbor. t-SNE sets the self term to 0. A zero distance now gets weight 0 and the rest are renormalized.
- The Zoo acceleration scale, (displacement / reported speed) / 0.1, was described and not implemented. It is in now. A reported acceleration of 10, displacement 0.4, and speed 2 corrects to 20, not 2. The first expected value was an arithmetic error in the test, not in the formula.

## Checked and not a fault

- Builder HMAC matches the MIT py-sdk vector LkTJvnKgvjeM6QZCq3mMps-FuPuJilYLylZOE3qqnYI= for the fake secret. No live key was used.
- Equal ratings in a best of seven is 0.5.
- A shared trend cancels in the 2x2 difference-in-differences.
- Hill at the half-saturation point is 0.5 for slope 2.
- Gamma-Poisson posterior mean is (14.5 / 28.5) after the stated update.
- Publish stays off. polymarketPublishAllowed returns false.

## Not closed, because the source did not publish the number

- Open-field radius, chase-down yard minimum, blocker corridor width. The functions require the argument.
- Tackle-model weights, the 88.9% figure, the PFF 2020 ranking, and the unnamed metric-improvement claim. Not re-run. Not invented.
- The 2D t-SNE embedding is not optimized. The neighbor conditional is.

## Harvest index

ADD-PATHS.txt is on the branch. 2,097 of 2,100 listed files are in the tree. The three missing files are the credential files deleted earlier. They stay deleted.
