# GSE Phase 6 Data Snapshot — 2026-09-13

Frozen snapshot created: 2026-09-14T02:49:49.973429+00:00 (UTC)
nflreadpy version: 0.1.5 | polars version: 1.44.2

## Source
All data pulled via `nflreadpy` from nflverse (nflverse GitHub release data).
One season at a time, each table written to its own parquet immediately (no RAM accumulation).

## Weather status
NO weather table exists in nflverse / nflreadpy (no `load_weather`; no weather-like loader in the 0.1.5 API list).
Weather is a RECORDED GAP: no weather data in this snapshot. Do not use this snapshot for wind/temperature modeling.

## teams (season-independent)
- `teams.parquet`: 36 rows, 16 cols (see `teams_columns.txt`), sha256 `1d1d105ff0b0fca8...`

## Per-season tables

| season | pbp rows | sched rows | rosters_wk | rosters | injuries | depth | officials | pbp spread_line (play) | pbp total_line (play) | sched spread (game) | sched total (game) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1999 | 46136 | 259 | n/a | 2039 | n/a | n/a | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2000 | 45491 | 259 | n/a | 2046 | n/a | n/a | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2001 | 44969 | 259 | n/a | 2045 | n/a | 36736 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2002 | 47355 | 267 | 31086 | 2031 | n/a | 34594 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2003 | 46811 | 267 | 30938 | 2034 | n/a | 34298 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2004 | 46705 | 267 | 31009 | 2063 | n/a | 28898 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2005 | 46823 | 267 | 30751 | 2048 | n/a | 32803 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2006 | 46299 | 267 | 31323 | 2061 | n/a | 33721 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2007 | 46266 | 267 | 31337 | 2076 | n/a | 38547 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2008 | 45917 | 267 | 31361 | 2077 | n/a | 38651 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2009 | 46519 | 267 | 31632 | 2104 | 4821 | 38423 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2010 | 46892 | 267 | 31926 | 2152 | 4491 | 38421 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2011 | 47448 | 267 | 31338 | 2099 | 4971 | 37941 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2012 | 47834 | 267 | 31431 | 2120 | 5533 | 37312 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2013 | 48158 | 267 | 31901 | 2137 | 5070 | 37066 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2014 | 47629 | 267 | 31964 | 2153 | 5078 | 32542 | n/a | 100.00% | 100.00% | 100.00% | 100.00% |
| 2015 | 48122 | 267 | 32098 | 2190 | 5232 | 37058 | 1933 | 100.00% | 100.00% | 100.00% | 100.00% |
| 2016 | 47651 | 267 | 35020 | 3061 | 5115 | 36612 | 1978 | 100.00% | 100.00% | 100.00% | 100.00% |
| 2017 | 47245 | 267 | 51321 | 3082 | 5104 | 36620 | 1919 | 100.00% | 100.00% | 100.00% | 100.00% |
| 2018 | 47109 | 267 | 52238 | 3142 | 5133 | 36560 | 1874 | 100.00% | 100.00% | 100.00% | 100.00% |
| 2019 | 47260 | 267 | 51632 | 3114 | 5392 | 36308 | 1914 | 100.00% | 100.00% | 100.00% | 100.00% |
| 2020 | 47705 | 269 | 44130 | 3068 | 5661 | 36168 | 1957 | 100.00% | 100.00% | 100.00% | 100.00% |
| 2021 | 49922 | 285 | 46696 | 2961 | 5587 | 37487 | 2072 | 100.00% | 100.00% | 100.00% | 100.00% |
| 2022 | 49434 | 284 | 46163 | 3134 | 5682 | 37780 | 2065 | 100.00% | 100.00% | 100.00% | 100.00% |
| 2023 | 49665 | 285 | 45655 | 3090 | 5599 | 37327 | 2067 | 100.00% | 100.00% | 100.00% | 100.00% |
| 2024 | 49492 | 285 | 46579 | 3216 | 6215 | 37312 | 2055 | 100.00% | 100.00% | 100.00% | 100.00% |
| 2025 | 48771 | 285 | 46849 | 3137 | 6068 | 554215 | 2066 | 100.00% | 100.00% | 100.00% | 100.00% |

Coverage note: `spread_line`/`total_line` in pbp are play-level copies of the game line; game-level fraction uses unique `game_id`.

## File checksums (sha256)

| file | sha256 | rows | downloaded (UTC) |
|---|---|---|---|
| teams.parquet | `1d1d105ff0b0fca8806bfa047c96ef001d150c0bcbba481db5babbafa1f36636` | 36 | resumed-from-existing-file |
| pbp_1999.parquet | `6263ca0dcafed4110f1da80be5126eedc2fba948b3de111dc2e8dd94165ce595` | 46136 | resumed-from-existing-file |
| schedules_1999.parquet | `b590c0c595ae702489068ed30d25460a1da2f129ce47c4143c8c28618fbb2749` | 259 | resumed-from-existing-file |
| `rosters_weekly_1999.parquet` | SKIPPED: out of nflverse range for this table (2002-2026) | - | - |
| rosters_1999.parquet | `3ed70f5499cc84f71a0bae8e53732cda75f920f9e529653329c1e761a36706c5` | 2039 | resumed-from-existing-file |
| `injuries_1999.parquet` | SKIPPED: out of nflverse range for this table (2009-2026) | - | - |
| `depth_charts_1999.parquet` | SKIPPED: out of nflverse range for this table (2001-2026) | - | - |
| `officials_1999.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2000.parquet | `29a0904f123de7fe9c10ff07e7605bb29d753ff87f2026659605e60b2c0aa243` | 45491 | resumed-from-existing-file |
| schedules_2000.parquet | `d11ca64a246a9b9ce98beb15af6a337887f1a31658a1271d510ef62e094fd927` | 259 | resumed-from-existing-file |
| `rosters_weekly_2000.parquet` | SKIPPED: out of nflverse range for this table (2002-2026) | - | - |
| rosters_2000.parquet | `aa28f34ab671f1b6f905e5bd4e613eb119ab1235ed701da782ba7b3ddf9ea055` | 2046 | resumed-from-existing-file |
| `injuries_2000.parquet` | SKIPPED: out of nflverse range for this table (2009-2026) | - | - |
| `depth_charts_2000.parquet` | SKIPPED: out of nflverse range for this table (2001-2026) | - | - |
| `officials_2000.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2001.parquet | `7b34b78901915ca98449190a1a911308275cc764eb3e565376c3d44667933dc1` | 44969 | resumed-from-existing-file |
| schedules_2001.parquet | `59deb3483354d8e24a55eef5e508f4824a3cdfff44936adea6d02af34c64fffd` | 259 | resumed-from-existing-file |
| `rosters_weekly_2001.parquet` | SKIPPED: out of nflverse range for this table (2002-2026) | - | - |
| rosters_2001.parquet | `a709c31820f5a634bae560b9220a0bd774357e85c9c0c767eedaee258bd3facf` | 2045 | resumed-from-existing-file |
| `injuries_2001.parquet` | SKIPPED: out of nflverse range for this table (2009-2026) | - | - |
| depth_charts_2001.parquet | `ade67599017a65b83424c199a5b7564e5b9015d3a2de143b8d7cef6c91e91896` | 36736 | resumed-from-existing-file |
| `officials_2001.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2002.parquet | `46fe8b49e4f94e479cf8e5dbb87d90b577d76d0a503d6bf4f2191902f95391a2` | 47355 | resumed-from-existing-file |
| schedules_2002.parquet | `b394de36fc6286647bdfa1a82383b0fec5f83a5e0aeaefc010336c72f1365545` | 267 | resumed-from-existing-file |
| rosters_weekly_2002.parquet | `ff5065be3a5a3c31f17769590b85e27bfeaec22c040d12c6ae636157d000a509` | 31086 | resumed-from-existing-file |
| rosters_2002.parquet | `47238d898a80053190b48134ae16a6373ce7993cc8c7693091191afe58008bdf` | 2031 | resumed-from-existing-file |
| `injuries_2002.parquet` | SKIPPED: out of nflverse range for this table (2009-2026) | - | - |
| depth_charts_2002.parquet | `403b110a6c2dfd7f7cbf589856fad233980a8125cc82220b196d3f0c961c5cb9` | 34594 | resumed-from-existing-file |
| `officials_2002.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2003.parquet | `c45fa61ddb3eba8c316f8c680362284ed01174728ca6e22bdfdba6083d5ec707` | 46811 | resumed-from-existing-file |
| schedules_2003.parquet | `70b3c8a10df7a205ee8bc446fa40dca4f7408f3900d063f1881860119de4834c` | 267 | resumed-from-existing-file |
| rosters_weekly_2003.parquet | `2f28e96c1cc0238bdc36d4fbc75952b3af2a5f88a1875ed79b92012ffce1937b` | 30938 | resumed-from-existing-file |
| rosters_2003.parquet | `709a1921bdba3c4fd259bdb2360ea5fbec038d21c390a0e80a79d02abf18f27f` | 2034 | resumed-from-existing-file |
| `injuries_2003.parquet` | SKIPPED: out of nflverse range for this table (2009-2026) | - | - |
| depth_charts_2003.parquet | `dd941ff3c412648b8c79e343f7bd93e9ee899f190e32e4c4448a0a82116f219c` | 34298 | resumed-from-existing-file |
| `officials_2003.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2004.parquet | `c95a80bffc740d438965320a6014f9cb839fa57e92e114b2783fc76d8acce653` | 46705 | resumed-from-existing-file |
| schedules_2004.parquet | `64d26bdf22af5736b507a04b82c73b17ded7765ad2940c02d880abbe5779d978` | 267 | resumed-from-existing-file |
| rosters_weekly_2004.parquet | `24c9ed7c7ba0f3187a22871cade086a443cdcc945e5e2283f1846e3af2b2857a` | 31009 | resumed-from-existing-file |
| rosters_2004.parquet | `0a4755dcd92773f3d13deffd69a77bf87f4fc1df59aa7af4b0e5f915ef5e5bdc` | 2063 | resumed-from-existing-file |
| `injuries_2004.parquet` | SKIPPED: out of nflverse range for this table (2009-2026) | - | - |
| depth_charts_2004.parquet | `8920e15748b622c2f78bfb21687c714685eb80196a8be3c0fc6a8998cd277ad0` | 28898 | resumed-from-existing-file |
| `officials_2004.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2005.parquet | `c7e4b4984af805df9719a23004a967593e7d503025b1c301973606e0e4f7cc61` | 46823 | resumed-from-existing-file |
| schedules_2005.parquet | `3535ab82c2c6b866d94623aba9f37eac3b7497fd5ff61898904e03420d80795a` | 267 | resumed-from-existing-file |
| rosters_weekly_2005.parquet | `f9c3dff3abb8bd7f03e882d73e840a4aae214d36395992f997178ce53b39d039` | 30751 | resumed-from-existing-file |
| rosters_2005.parquet | `cfec57b69396c10d3696eb1345acdc7217def07560cdec9ca2691ec7777f4747` | 2048 | resumed-from-existing-file |
| `injuries_2005.parquet` | SKIPPED: out of nflverse range for this table (2009-2026) | - | - |
| depth_charts_2005.parquet | `1dc213a56b6b9fa614893148e01304c7284ed834f45d0f00c32dc4429cc60d48` | 32803 | resumed-from-existing-file |
| `officials_2005.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2006.parquet | `fc649f335756c10efd512070aa6b978ffb864cb2ec8ec7856cb084b0d313b11e` | 46299 | resumed-from-existing-file |
| schedules_2006.parquet | `04e8c1a0394137e8493db6bf228a75ab1e0e8104eca4056380c13168174fca98` | 267 | resumed-from-existing-file |
| rosters_weekly_2006.parquet | `4ca8b46ba7104a85fcd174345adf534bb064d8b27e6ebf6ee8681a6111530748` | 31323 | resumed-from-existing-file |
| rosters_2006.parquet | `7c26d303e54a21f97bb6e78fbda7ff5d448fb5d6c5bdc45208c9db5704949d07` | 2061 | resumed-from-existing-file |
| `injuries_2006.parquet` | SKIPPED: out of nflverse range for this table (2009-2026) | - | - |
| depth_charts_2006.parquet | `fb8390a24831112c290ed6e20f4546935ac17249912d3834c533657a1c7684c6` | 33721 | resumed-from-existing-file |
| `officials_2006.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2007.parquet | `0b04c5c7d2e5806a466d2618579cba8d7f7860b69a82bf76c0bd983e7f67a8ed` | 46266 | resumed-from-existing-file |
| schedules_2007.parquet | `ed35269017c5342a04e621717760da8ccdc68421f7a38685eaa355af90d875b2` | 267 | resumed-from-existing-file |
| rosters_weekly_2007.parquet | `5be7756f9c2a83796929b8c28b70e5ffafee1eb0153c8b012e2110cc448307c5` | 31337 | resumed-from-existing-file |
| rosters_2007.parquet | `b25cd0374eef07c9ce129bfeb5f125ea5f097076bb79036aed284248fd5fde64` | 2076 | resumed-from-existing-file |
| `injuries_2007.parquet` | SKIPPED: out of nflverse range for this table (2009-2026) | - | - |
| depth_charts_2007.parquet | `57666065438f443ae58038c66bc9e8915cbc9b11a29c19b5bd2b8edda2fde2db` | 38547 | resumed-from-existing-file |
| `officials_2007.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2008.parquet | `b58e0ea324ec8c06920cf3047390ff9a2304d95f888eda4287b02fba1f288966` | 45917 | resumed-from-existing-file |
| schedules_2008.parquet | `76a274f12d0efbdc6220870e083597fe6669f33bf5f94d30ade9d11efbc3423d` | 267 | resumed-from-existing-file |
| rosters_weekly_2008.parquet | `a7463fe7f071a4d908bd91f185f878728d76c686987a43934774790f83fe11a6` | 31361 | resumed-from-existing-file |
| rosters_2008.parquet | `279a4330c957a7d7e28f3153feb486206e4d9962a9f5200ec1447b9a8a5cf1d5` | 2077 | resumed-from-existing-file |
| `injuries_2008.parquet` | SKIPPED: out of nflverse range for this table (2009-2026) | - | - |
| depth_charts_2008.parquet | `ee790c140926db347fe6e764f2e62f0e1446b7c2a1c034458552682d4e31a9a7` | 38651 | resumed-from-existing-file |
| `officials_2008.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2009.parquet | `5bfb6559343c04092d1ad66c1479782d085d9f390e6806be0a7ca7ec37124806` | 46519 | resumed-from-existing-file |
| schedules_2009.parquet | `b720c554d58f8e8bc4ef4fe3ada0528f1f4065bde6926395f5c4ed46f6c19579` | 267 | resumed-from-existing-file |
| rosters_weekly_2009.parquet | `aded782ac4cc2a892159565f2df933170ad069cb80f9309549601aeeaae6e988` | 31632 | resumed-from-existing-file |
| rosters_2009.parquet | `e2d16817958c15f542129159a6087791fa9c419f054d9d8c5d21ac89c91034fc` | 2104 | resumed-from-existing-file |
| injuries_2009.parquet | `d12cc75579894878b9b0a8582f231e442462f80f9ccff1d62f51ddf3aaca93ca` | 4821 | resumed-from-existing-file |
| depth_charts_2009.parquet | `7a2f84b9b92165aaec386a39b2cfdc03ade8f7a5768c07148a261bc426e745b7` | 38423 | resumed-from-existing-file |
| `officials_2009.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2010.parquet | `74ad605fea53c27afd00eee71c53b86b5cfbf7133d1a7b5b8f0067d817e55785` | 46892 | resumed-from-existing-file |
| schedules_2010.parquet | `c6eb6d6390b8808ab6fe7a1c177d45b2d31c4dc3f7b5ccf3a9ff525c9afe758f` | 267 | resumed-from-existing-file |
| rosters_weekly_2010.parquet | `dbf5adc511c48319991467f56e1d7d9df7c983bb5036f89b8bdc739db175c3ed` | 31926 | resumed-from-existing-file |
| rosters_2010.parquet | `db324effa9a1fb56ddfeaf03c7a61af424e25430a844c0901392c3f679e43802` | 2152 | resumed-from-existing-file |
| injuries_2010.parquet | `0376ff700ff95ffc7fc50b86a22941bd683a4107400fc9f0a7d675061efc1d9a` | 4491 | resumed-from-existing-file |
| depth_charts_2010.parquet | `6eda4ecf1d1e81e7feb38cd99d430b322d48444b42a8404e5bf735c71e34070c` | 38421 | resumed-from-existing-file |
| `officials_2010.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2011.parquet | `26727f9d2b0e4f9f616e746b87b9a29359f37a4b484f66f7312baf883d85e958` | 47448 | resumed-from-existing-file |
| schedules_2011.parquet | `367cd43a9a9499d875a00dc12d2476ea3bfabc36dfbb82399a695f5230618232` | 267 | resumed-from-existing-file |
| rosters_weekly_2011.parquet | `447e0eda09a2ffa5918c2c3b4fb9d66daf81ba0cf2b2f9b9a96f5a25db98c7cd` | 31338 | resumed-from-existing-file |
| rosters_2011.parquet | `252618f715cd305eca90958a387d81cd3a058b2a9e2f73988522e9d832bede79` | 2099 | resumed-from-existing-file |
| injuries_2011.parquet | `fbe463450cadafb45fad3b15d3d474403e2f88344f4f84ff83154da82f4935ad` | 4971 | resumed-from-existing-file |
| depth_charts_2011.parquet | `88dc4b3694af0c8e904d8464528bf26a092ea6998b1a686e04793430b69ea81c` | 37941 | resumed-from-existing-file |
| `officials_2011.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2012.parquet | `3277aded9792c419cc853cf307f2206c3fb0908d91750b4e1d3d66b567407c66` | 47834 | resumed-from-existing-file |
| schedules_2012.parquet | `94fd313c6126390c47c936cc04c986ec6a2526cad776f078e61c8e740171ceb0` | 267 | resumed-from-existing-file |
| rosters_weekly_2012.parquet | `0edaaef42d4972c29297e896dce6d36cbf38046f72807995dcac4d0ffb83816f` | 31431 | resumed-from-existing-file |
| rosters_2012.parquet | `74c8cc13525c626eee7ffa91f69e725e24bcb995413ab2bcdbe40657bd02d180` | 2120 | resumed-from-existing-file |
| injuries_2012.parquet | `a238d5e4af5c662a576540a7fe50f71185008d2e9e995ae76f96e54ef1fcfa25` | 5533 | resumed-from-existing-file |
| depth_charts_2012.parquet | `bddec1cc10d60492f196d090dbd43c2db0f23c9eb72194fe5750b5ea9c9bf89e` | 37312 | resumed-from-existing-file |
| `officials_2012.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2013.parquet | `2a31a7cd0e7e2306f626a0f1f4bb96679e5b3e92a8729695858adca35d8b2686` | 48158 | resumed-from-existing-file |
| schedules_2013.parquet | `48b55301b46a4acc55b1263555b01d62475fce5196f943176cf5bb23b5b979b6` | 267 | resumed-from-existing-file |
| rosters_weekly_2013.parquet | `ee97af362f770b6a632f6fa4c99d301afe240ca2383dac949e206d5997ca4892` | 31901 | resumed-from-existing-file |
| rosters_2013.parquet | `bc0a5e8000dbf628bf2d551c1c73a3e6b463e660429aec3a3e62fa3e00b88dc7` | 2137 | resumed-from-existing-file |
| injuries_2013.parquet | `58e5c0bdc1d8f9d907d9b11cd044800b86573a4321c4a1b72308ad579d78928a` | 5070 | resumed-from-existing-file |
| depth_charts_2013.parquet | `93432b67f59114523fc767494e0ec33e78f11a34cd891e2a40d95ed194d84e4f` | 37066 | resumed-from-existing-file |
| `officials_2013.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2014.parquet | `c6910558e235dac664b1b7f02654d47ea8d51904ef9ace5d4f015165604e0b12` | 47629 | resumed-from-existing-file |
| schedules_2014.parquet | `56c8544f26975a429dd1dcd67996b28cb3680c742c79c2367bfea1e35ae93940` | 267 | resumed-from-existing-file |
| rosters_weekly_2014.parquet | `f5d6554525d453a8329d5a2bfdbed14abb7a406f4c258922b997ecc8b0dbc7d3` | 31964 | resumed-from-existing-file |
| rosters_2014.parquet | `0b5f21f803eb4d2739a97b867970836a02e8f7d576ec63aaf0f20756bcfc3d48` | 2153 | resumed-from-existing-file |
| injuries_2014.parquet | `b61fff9320799ce3ba03fb263f72193166be663f9fd6eec0b6b2597d97edbce0` | 5078 | resumed-from-existing-file |
| depth_charts_2014.parquet | `39b007c1814635fd35a6c93adacc81cc86f5966cc205451fb0976f459a61237d` | 32542 | resumed-from-existing-file |
| `officials_2014.parquet` | SKIPPED: out of nflverse range for this table (2015-2026) | - | - |
| pbp_2015.parquet | `b3314a52b781a00417528b2e3388d2596098cdbe7b565d3c962d7171a98ae70f` | 48122 | resumed-from-existing-file |
| schedules_2015.parquet | `68c3bf6df90e969fe80aa46eb3351ad624e5e7c3f85c664644811508bbb647c3` | 267 | resumed-from-existing-file |
| rosters_weekly_2015.parquet | `0af43e8d75e00616fdedffdc73b6a76c268fe685716afc6099c4f6240f2a38ef` | 32098 | resumed-from-existing-file |
| rosters_2015.parquet | `fd5803ede6cde18c4ceafe01ba9384dfdff987c5ea3332e9f4307f6e56f95d2f` | 2190 | resumed-from-existing-file |
| injuries_2015.parquet | `b17b3df9d35adb005e6df91f25999bbe8fec413df02e18b68f41bdad2eb4bdf6` | 5232 | resumed-from-existing-file |
| depth_charts_2015.parquet | `b0e831c90d433436188a53c69ec107d7b99b949ebb772ed5e2989d700c4d3481` | 37058 | resumed-from-existing-file |
| officials_2015.parquet | `c0225885ae10af7cbe176933b5c6315bb013863e7de9595fca0f72a6d5cb0f64` | 1933 | resumed-from-existing-file |
| pbp_2016.parquet | `75fde790db65a5e5765930e5780c1452e96a6a58d4d802c79f10f5842a387bbc` | 47651 | resumed-from-existing-file |
| schedules_2016.parquet | `8f71a4074c589e5a94c43b1b89e6028f65a89f99b950d7a02457bc28657b1790` | 267 | resumed-from-existing-file |
| rosters_weekly_2016.parquet | `f9c06d464aa792524baeb3bc9bd99e2ee789799011c2a14b354bf967eb54c32b` | 35020 | resumed-from-existing-file |
| rosters_2016.parquet | `3832eb7e42fd43cd2912589bb7cadb65772e63431b055ca3caec11c097611089` | 3061 | resumed-from-existing-file |
| injuries_2016.parquet | `bdfdc2f69eac23a92b0ef21f82820c29fef665996dc877bb6243d9b946b7bddf` | 5115 | resumed-from-existing-file |
| depth_charts_2016.parquet | `f16d97dc32299176c53c2325bbcd5345885122764ad36498339b3f0609947fee` | 36612 | resumed-from-existing-file |
| officials_2016.parquet | `9fff64c0fde4b9ddfc7fae35425c29a34354a16ae88ed4117f99ed6f21a32a01` | 1978 | resumed-from-existing-file |
| pbp_2017.parquet | `0166785545b15de785075a154668996b8cb71294f7a7c3d9acbf4ae90a99f2dc` | 47245 | resumed-from-existing-file |
| schedules_2017.parquet | `6616b0e0cb9b8358881654e4aa5e22e24bb67958a337cbb13782d27a3c3a04e7` | 267 | resumed-from-existing-file |
| rosters_weekly_2017.parquet | `e08db5a5b46438379d57cd00839beb70e3b4b5ab7135d00f1d3e2167b87d9b3e` | 51321 | resumed-from-existing-file |
| rosters_2017.parquet | `3e3f00917f3645a8f9f61a6f6b1e11f68739e0805a2b89217c83cf8707bc7919` | 3082 | resumed-from-existing-file |
| injuries_2017.parquet | `5f1dda6592877a26ade565a6864b90b86a5255917ab6d06305bec6bb981462f8` | 5104 | resumed-from-existing-file |
| depth_charts_2017.parquet | `3db3826d9d1a221a95d068681980bc0450325bb80fe7f7970b331366eeb44822` | 36620 | resumed-from-existing-file |
| officials_2017.parquet | `d5598dd29df560297e6908baa1700f3636e96bd986e3f93b541dd33a418451f3` | 1919 | resumed-from-existing-file |
| pbp_2018.parquet | `152e44436368be4c253d14c0cb0f8335a53f3790ce5ebdbb7648551371d62d2b` | 47109 | resumed-from-existing-file |
| schedules_2018.parquet | `0517aae45dacef1cabea9e0345ea2a3bc7dda1299dd76cb1ffd50c4696a58291` | 267 | resumed-from-existing-file |
| rosters_weekly_2018.parquet | `fbb0028f79f07d83ed6ce882bd022a95653f10cacd3bed990f75825feb5c2892` | 52238 | resumed-from-existing-file |
| rosters_2018.parquet | `3d15406bccb7d620b196ec7e97c675cdce96e986c81d2f71b988828f7beabacf` | 3142 | resumed-from-existing-file |
| injuries_2018.parquet | `d45f4a0280f1f10abd7f72965d29bd17e11b1539d78e536620709130d964c052` | 5133 | resumed-from-existing-file |
| depth_charts_2018.parquet | `44857b3e4f4814cca31e1541d48cb97407c2c1ed59f6c4c46b6cf1da47b7711c` | 36560 | resumed-from-existing-file |
| officials_2018.parquet | `df62bbc94c8a5c933864ded453494c68cb86ff18d5cf4116120b862e238bfa14` | 1874 | resumed-from-existing-file |
| pbp_2019.parquet | `3878b8c99f5f3d977203b0e249b55ca913e59db3971420075ed35a0991610f6e` | 47260 | resumed-from-existing-file |
| schedules_2019.parquet | `4db9adbb172de1476cecd73088981b353a6c05e97768dad1cf631dadfa403a56` | 267 | resumed-from-existing-file |
| rosters_weekly_2019.parquet | `050ddd66e0a04bb3be6830c239119707d6850b2bb7ea0f0e3f5040aa983aad26` | 51632 | resumed-from-existing-file |
| rosters_2019.parquet | `b0d0f06b33c64d75e92853db867ebadd313112d91a63e84bf32fa3d7383d0696` | 3114 | resumed-from-existing-file |
| injuries_2019.parquet | `f582f091ba157f2495b11583fe98f1e02ced22da2a99c5d40a3cf3821e8c6734` | 5392 | resumed-from-existing-file |
| depth_charts_2019.parquet | `3b2ad2b9205133b1e72df71631a78b3a48201fbcb2c871ab02213776af70056f` | 36308 | resumed-from-existing-file |
| officials_2019.parquet | `17053dcee570acc0e710bb41810b8693dfa3258c38492b5627aa6d460c915649` | 1914 | resumed-from-existing-file |
| pbp_2020.parquet | `d86d1e3f98b64bd839c8533a3867cb0f0e3d6216cd11bddd11efd5bc6c594a04` | 47705 | resumed-from-existing-file |
| schedules_2020.parquet | `93e73882e9b596f8c244dab217bcb5aeab70c4e4431b6cd4dd7607a2383f4398` | 269 | resumed-from-existing-file |
| rosters_weekly_2020.parquet | `b7af6d44195fab22530fe29d31f95cc4d47b9396c2c08c495bb4bd772e454f46` | 44130 | resumed-from-existing-file |
| rosters_2020.parquet | `d81655d5fc85302639f0c9a58c2485e9d6d58095c95eda99393158fc1df1f01f` | 3068 | resumed-from-existing-file |
| injuries_2020.parquet | `005018dc64106e9cede5e1b6b6ea387e160c126758bac0698309784e14bad131` | 5661 | resumed-from-existing-file |
| depth_charts_2020.parquet | `45499284112a7053b02099fafccf64c7c7a695efe150655146dd5030fbd9738c` | 36168 | resumed-from-existing-file |
| officials_2020.parquet | `220466f45aee826b950af69e2eb32926ebadf8f6f726d4a65dc3450fdd78959e` | 1957 | resumed-from-existing-file |
| pbp_2021.parquet | `d2fbf41c83c843e1c6db4ec117ef9b4b49b7730666f21005fc9951dce09d0e0a` | 49922 | resumed-from-existing-file |
| schedules_2021.parquet | `6c2b25a860bf549a5172d655df209debbd9b2c41b24402d33cc01950abf69a55` | 285 | resumed-from-existing-file |
| rosters_weekly_2021.parquet | `5f141d11ea96ee76df318a46a855350df091216bc4d2a4f1915414df414d6dea` | 46696 | resumed-from-existing-file |
| rosters_2021.parquet | `2f9a8102f5809d2c063a987f271a6d036580596e82a7f7a4925fc28461b91967` | 2961 | resumed-from-existing-file |
| injuries_2021.parquet | `7c1eb2d85e2c274fdcd76477403db8d602406b8dd18b5a18e09e93a0a15fa489` | 5587 | resumed-from-existing-file |
| depth_charts_2021.parquet | `f5093d2de34a25fb8dde47b486d7c8c0482d57d38315c06d82ec534aaaf7cd97` | 37487 | resumed-from-existing-file |
| officials_2021.parquet | `6c8696118d028082e09e3ab768351bb0b8ff2ccea5f6bdce3ce8d1addfa6238f` | 2072 | resumed-from-existing-file |
| pbp_2022.parquet | `311971fb4404dc8759a9f77c50ef2f4933fbd2d24deb5a747987058d0b6788a8` | 49434 | resumed-from-existing-file |
| schedules_2022.parquet | `4df92f492652dacc5460a44ec948a703f9fe7be75a0aba2d4dfd4987b481bb9c` | 284 | resumed-from-existing-file |
| rosters_weekly_2022.parquet | `fa2c8d47607e560d49025d657f0f3ab611a33805bd6af263cb405fc68a4fe8a5` | 46163 | resumed-from-existing-file |
| rosters_2022.parquet | `a59bf63681170896022c5d1f22777317a8768f159549ad3da39e50281eae90ea` | 3134 | resumed-from-existing-file |
| injuries_2022.parquet | `55b2ce3b864497357a2cae1fff36b3721fa0d7ac241dd620a6d97bad6a76ce6e` | 5682 | resumed-from-existing-file |
| depth_charts_2022.parquet | `a1f953cefacfda323b112039bf5d2ba32a315a0d5ab17230aa8a6730c78d2a60` | 37780 | resumed-from-existing-file |
| officials_2022.parquet | `50580121951db916fad483d26f1ea67160872a278f4fc7ca2dcefc17ad003bfe` | 2065 | resumed-from-existing-file |
| pbp_2023.parquet | `bd3484731408def6b0ec93225bba2bd7b2c65769ca707a2b9444d891abdc6776` | 49665 | resumed-from-existing-file |
| schedules_2023.parquet | `374486417a0ba32495817457c26b77e09499c7614b0285086cf41ccef9d759cc` | 285 | 2026-09-14T02:50:04.171670+00:00 |
| rosters_weekly_2023.parquet | `10cb0ce7a05004a1285367a1ee0dbe42cb55c7c4cd5ac3759458cfd7a581d893` | 45655 | 2026-09-14T02:50:06.150935+00:00 |
| rosters_2023.parquet | `fefebb74c9b46fb4a33c577b406d4119ea70f572fb257cf9f7ae3f146d31b67b` | 3090 | 2026-09-14T02:50:08.030755+00:00 |
| injuries_2023.parquet | `77c2a8cbd3e656fb26f1362b5b0997714dc355710a94224f78170fae6687ecf1` | 5599 | 2026-09-14T02:50:09.388648+00:00 |
| depth_charts_2023.parquet | `1a9f9ef5491e2469387f8ef8243bca3d70cc78f13302f2ca7b07b376df16bb77` | 37327 | 2026-09-14T02:50:11.132905+00:00 |
| officials_2023.parquet | `a07fbfeea2370a2de01e7abfcb29adaee5e1b6a112fa2268e2aa2ff97323f2e7` | 2067 | 2026-09-14T02:50:12.400762+00:00 |
| pbp_2024.parquet | `e332d33a0c83a33073cde85f8e8f1ac0caebcc552eda7e7c92612ff306bafa73` | 49492 | 2026-09-14T02:50:20.060740+00:00 |
| schedules_2024.parquet | `53f6e036f443c71e6aa54396f4890259ce7580c1052b30424559418612ea1b31` | 285 | 2026-09-14T02:50:20.115323+00:00 |
| rosters_weekly_2024.parquet | `e9cda9cb5961df42951e443e791b6def1d26f8a5305defdccf70017a4c95f7d4` | 46579 | 2026-09-14T02:50:21.794350+00:00 |
| rosters_2024.parquet | `bdc663a5587dfd80d8f9133436cd8d9e067219abd4ad94ff7dafe678be06454e` | 3216 | 2026-09-14T02:50:23.223614+00:00 |
| injuries_2024.parquet | `cdde27fcf929ce6d211ee24141fa8bb595669b74f1a5b54151c655789801254b` | 6215 | 2026-09-14T02:50:24.498454+00:00 |
| depth_charts_2024.parquet | `e3954bccc36e7b1608c23214fb00c3db6a6f9f83b4e67561af73a069abe368f1` | 37312 | 2026-09-14T02:50:26.079558+00:00 |
| officials_2024.parquet | `969451beccc6d716e693fa5f0d5ad2c614b0a549bb989686d19b76949caef65c` | 2055 | 2026-09-14T02:50:26.116680+00:00 |
| pbp_2025.parquet | `5ed293fdf54d79e34426133829f3111faf577db29b8cfc25cf910d75eb55b2ef` | 48771 | 2026-09-14T02:50:30.135232+00:00 |
| schedules_2025.parquet | `81066567d1c138059687806a679f5a233d91196fb535ea06a2541596dfdd378c` | 285 | 2026-09-14T02:50:30.308619+00:00 |
| rosters_weekly_2025.parquet | `2e7b906336cf38860d7208d9306700d106c66cb73af356fd7b33bf28a9552b98` | 46849 | 2026-09-14T02:50:32.252327+00:00 |
| rosters_2025.parquet | `d8a84e61d45e8e275f4b8b59110c3e4d5968915f0c8c0a7bd5b2d3335e43111a` | 3137 | 2026-09-14T02:50:34.019076+00:00 |
| injuries_2025.parquet | `8d8a87d4cf13cf53c0a01dccd9c76805dcff9be7fcbab0be3724f078bffc01ad` | 6068 | 2026-09-14T02:50:35.396971+00:00 |
| depth_charts_2025.parquet | `c33c367191252d50a3dbbe712c60ce2caad479ff7db8ba5adaea80e9dbecf3e0` | 554215 | 2026-09-14T02:50:39.320477+00:00 |
| officials_2025.parquet | `bba953e8b688dad3240ceaa9e12c90469b73a0aed951a43ac2e24a8e657f38bb` | 2066 | 2026-09-14T02:50:39.371983+00:00 |

## Notes / anomalies (verified by independent audit 2026-09-14)

- VERIFIED TOTALS (independent re-scan of all 159 parquet files; row counts and SHA-256 all match manifest.json, 0 mismatches):
  - Total PBP plays 1999-2025: 1,279,628 across 27 seasons.
  - Line coverage is 100% at BOTH play level and game level for every season: 1,279,628/1,279,628 plays and 7,273/7,273 distinct games have non-null spread_line AND total_line. (nflverse backfills closing lines for all games 1999+.)
  - Seasonal rosters: 27 seasons (1999-2025), 66,480 rows total.
  - Weekly rosters: 24 seasons (2002-2025; nflverse has no weekly rosters before 2002), 906,378 rows total.
  - teams.parquet: 36 rows x 16 cols (season-independent).
- 2025 COMPLETENESS: schedules_2025 has 285 rows = 272 REG + 6 WC + 4 DIV + 2 CON + 1 SB (full season incl. Super Bowl); pbp_2025 contains 285 distinct game_ids matching schedules. The 2025 season is COMPLETE (season ended Feb 2026).
- 2022 schedules = 284 rows (not 285): the Week 17 BUF-CIN game was canceled (Damar Hamlin) and never rescheduled - genuine upstream gap, not a download failure.
- 2020 schedules = 269 rows (COVID-season anomaly in the nflverse release; carried as-is).
- depth_charts_2025 is an upstream schema break: 554,215 rows x 12 cols in a new ESPN-sourced format (dt/team/player_name/pos_*), vs ~37k rows x 15 cols (nflverse club_code/depth_team format) for all prior seasons. Data is genuine; do not compare 2025 depth charts directly with earlier seasons without re-mapping.
- injuries `season` column is Float64 in 2009-2020 files and Int32 from 2021 onward (upstream dtype inconsistency; values are correct).
- Known out-of-range skips (nflverse has no such data; recorded, not fabricated): weekly rosters 1999-2001, depth charts 1999-2000, injuries 1999-2008, officials 1999-2014.
- Weather: NO weather table exists in nflverse / nflreadpy 0.1.5. Weather availability = NONE via this source; recorded as an explicit gap (see "Weather status" above). Never inferred or manufactured.
- Column sidecars: all 159 parquet files have a matching `<name>_columns.txt` with the full column list (372 cols for pbp, 46 for schedules, 36 for rosters/weekly, 16 for injuries, 15 for depth_charts (12 for 2025), 9 for officials, 16 for teams).
- One externally-fetched file: `pbp_2023.parquet` (49,665 rows x 372 cols) was downloaded directly from the nflverse GitHub release URL via curl after the in-library downloader stalled twice on that table; it was validated with Polars (correct season, required columns present) before being checksummed and recorded like every other file.
