[2026-09-14 01:33:37] T1 run start mode=sample seed=20260913 code_hash=1f9e9e966dcc
[2026-09-14 01:33:37] placebo: synthetic null pipeline
[2026-09-14 01:33:42] placebo: h_true=0.9197 lz=1.0432 plug=0.9238 te_ind=0.0034 mi_ind=0.004424
[2026-09-14 01:34:10] SAMPLE mode: pulling nflreadpy pbp season=2024 (NOT the frozen snapshot)
[2026-09-14 01:34:37] columns present=13 missing=['offense_personnel', 'defense_personnel', 'defenders_in_the_box']
[2026-09-14 01:34:38] qualifying plays=34902 seasons=[2024]
[2026-09-14 01:35:15] team-seasons with descriptors: 32
[2026-09-14 01:35:26] T1a correlations: {"test.lz_entropy": 0.419, "test.h_order1": 0.6034, "test.h_sit": 0.2588}
[2026-09-14 01:35:27] duel skipped (sample mode lacks train/test eras)
[2026-09-14 01:35:27] TE INFEASIBLE: no defensive channel with >50% coverage
[2026-09-14 01:35:27] MI INFEASIBLE: offense_personnel coverage <50%
[2026-09-14 01:35:27] wrote /home/hatch/workspace/gse-discovery/phase6/t1-info/results_SAMPLE-2024.json
[2026-09-14 01:35:27] T1 run end
[2026-09-14 03:13:12] T1 run start mode=full seed=20260913 code_hash=1f9e9e966dcc
[2026-09-14 03:13:12] placebo: synthetic null pipeline
[2026-09-14 03:13:14] placebo: h_true=0.9197 lz=1.0432 plug=0.9238 te_ind=0.0034 mi_ind=0.004424
[2026-09-14 03:13:31] FULL mode: reading frozen snapshot
[2026-09-14 03:13:31] pbp files: 54
[2026-09-14 03:13:33]   pbp_1999.parquet: 46136 rows x 13 cols
[2026-09-14 03:13:33]   pbp_2000.parquet: 45491 rows x 13 cols
[2026-09-14 03:13:33]   pbp_2001.parquet: 44969 rows x 13 cols
[2026-09-14 03:13:33]   pbp_2002.parquet: 47355 rows x 13 cols
[2026-09-14 03:13:33]   pbp_2003.parquet: 46811 rows x 13 cols
[2026-09-14 03:13:34]   pbp_2004.parquet: 46705 rows x 13 cols
[2026-09-14 03:13:34]   pbp_2005.parquet: 46823 rows x 13 cols
[2026-09-14 03:13:34]   pbp_2006.parquet: 46299 rows x 13 cols
[2026-09-14 03:13:34]   pbp_2007.parquet: 46266 rows x 13 cols
[2026-09-14 03:13:35]   pbp_2008.parquet: 45917 rows x 13 cols
[2026-09-14 03:13:35]   pbp_2009.parquet: 46519 rows x 13 cols
[2026-09-14 03:13:35]   pbp_2010.parquet: 46892 rows x 13 cols
[2026-09-14 03:13:35]   pbp_2011.parquet: 47448 rows x 13 cols
[2026-09-14 03:13:35]   pbp_2012.parquet: 47834 rows x 13 cols
[2026-09-14 03:13:36]   pbp_2013.parquet: 48158 rows x 13 cols
[2026-09-14 03:13:36]   pbp_2014.parquet: 47629 rows x 13 cols
[2026-09-14 03:13:36]   pbp_2015.parquet: 48122 rows x 13 cols
[2026-09-14 03:13:36]   pbp_2016.parquet: 47651 rows x 13 cols
[2026-09-14 03:13:36]   pbp_2017.parquet: 47245 rows x 13 cols
[2026-09-14 03:13:37]   pbp_2018.parquet: 47109 rows x 13 cols
[2026-09-14 03:13:37]   pbp_2019.parquet: 47260 rows x 13 cols
[2026-09-14 03:13:37]   pbp_2020.parquet: 47705 rows x 13 cols
[2026-09-14 03:13:38]   pbp_2021.parquet: 49922 rows x 13 cols
[2026-09-14 03:13:38]   pbp_2022.parquet: 49434 rows x 13 cols
[2026-09-14 03:13:38]   pbp_2023.parquet: 49665 rows x 13 cols
[2026-09-14 03:13:38]   pbp_2024.parquet: 49492 rows x 13 cols
[2026-09-14 03:13:39]   pbp_2025.parquet: 48771 rows x 13 cols
[2026-09-14 03:13:39]   pbp_1999.parquet: 46136 rows x 13 cols
[2026-09-14 03:13:39]   pbp_2000.parquet: 45491 rows x 13 cols
[2026-09-14 03:13:39]   pbp_2001.parquet: 44969 rows x 13 cols
[2026-09-14 03:13:40]   pbp_2002.parquet: 47355 rows x 13 cols
[2026-09-14 03:13:40]   pbp_2003.parquet: 46811 rows x 13 cols
[2026-09-14 03:13:40]   pbp_2004.parquet: 46705 rows x 13 cols
[2026-09-14 03:13:40]   pbp_2005.parquet: 46823 rows x 13 cols
[2026-09-14 03:13:41]   pbp_2006.parquet: 46299 rows x 13 cols
[2026-09-14 03:13:41]   pbp_2007.parquet: 46266 rows x 13 cols
[2026-09-14 03:13:41]   pbp_2008.parquet: 45917 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2009.parquet: 46519 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2010.parquet: 46892 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2011.parquet: 47448 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2012.parquet: 47834 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2013.parquet: 48158 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2014.parquet: 47629 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2015.parquet: 48122 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2016.parquet: 47651 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2017.parquet: 47245 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2018.parquet: 47109 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2019.parquet: 47260 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2020.parquet: 47705 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2021.parquet: 49922 rows x 13 cols
[2026-09-14 03:13:42]   pbp_2022.parquet: 49434 rows x 13 cols
[2026-09-14 03:13:43]   pbp_2023.parquet: 49665 rows x 13 cols
[2026-09-14 03:13:43]   pbp_2024.parquet: 49492 rows x 13 cols
[2026-09-14 03:13:43]   pbp_2025.parquet: 48771 rows x 13 cols
[2026-09-14 03:13:56] qualifying plays=1813622 seasons=[1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
[2026-09-14 03:15:37] DATA FIX: snapshot contains pbp/pbp_YYYY.parquet duplicates of top-level pbp_YYYY.parquet (54 files for 27 seasons); the 03:13 run double-loaded every season (1.81M qualifying from 1.28M rows) and was KILLED before any results were written. load_pbp_snapshot now dedupes by basename (keeps shallowest path = top-level, 1,279,628 rows = manifest total).
[2026-09-14 03:15:40] T1 run start mode=full seed=20260913 code_hash=1f9e9e966dcc
[2026-09-14 03:15:40] placebo: synthetic null pipeline
[2026-09-14 03:15:41] placebo: h_true=0.9197 lz=1.0432 plug=0.9238 te_ind=0.0034 mi_ind=0.004424
[2026-09-14 03:15:48] FULL mode: reading frozen snapshot
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_1999.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2000.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2001.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2002.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2003.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2004.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2005.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2006.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2007.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2008.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2009.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2010.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2011.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2012.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2013.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2014.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2015.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2016.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2017.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2018.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2019.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2020.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2021.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2022.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2023.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2024.parquet
[2026-09-14 03:15:48]   dedupe: skipping duplicate /home/hatch/workspace/gse-discovery/data_snapshot_20260913/pbp/pbp_2025.parquet
[2026-09-14 03:15:48] pbp files: 27 (after dedupe)
[2026-09-14 03:15:49]   pbp_1999.parquet: 46136 rows x 13 cols
[2026-09-14 03:15:50]   pbp_2000.parquet: 45491 rows x 13 cols
[2026-09-14 03:15:50]   pbp_2001.parquet: 44969 rows x 13 cols
[2026-09-14 03:15:50]   pbp_2002.parquet: 47355 rows x 13 cols
[2026-09-14 03:15:50]   pbp_2003.parquet: 46811 rows x 13 cols
[2026-09-14 03:15:50]   pbp_2004.parquet: 46705 rows x 13 cols
[2026-09-14 03:15:51]   pbp_2005.parquet: 46823 rows x 13 cols
[2026-09-14 03:15:51]   pbp_2006.parquet: 46299 rows x 13 cols
[2026-09-14 03:15:51]   pbp_2007.parquet: 46266 rows x 13 cols
[2026-09-14 03:15:51]   pbp_2008.parquet: 45917 rows x 13 cols
[2026-09-14 03:15:51]   pbp_2009.parquet: 46519 rows x 13 cols
[2026-09-14 03:15:52]   pbp_2010.parquet: 46892 rows x 13 cols
[2026-09-14 03:15:52]   pbp_2011.parquet: 47448 rows x 13 cols
[2026-09-14 03:15:52]   pbp_2012.parquet: 47834 rows x 13 cols
[2026-09-14 03:15:52]   pbp_2013.parquet: 48158 rows x 13 cols
[2026-09-14 03:15:52]   pbp_2014.parquet: 47629 rows x 13 cols
[2026-09-14 03:15:53]   pbp_2015.parquet: 48122 rows x 13 cols
[2026-09-14 03:15:53]   pbp_2016.parquet: 47651 rows x 13 cols
[2026-09-14 03:15:53]   pbp_2017.parquet: 47245 rows x 13 cols
[2026-09-14 03:15:53]   pbp_2018.parquet: 47109 rows x 13 cols
[2026-09-14 03:15:53]   pbp_2019.parquet: 47260 rows x 13 cols
[2026-09-14 03:15:53]   pbp_2020.parquet: 47705 rows x 13 cols
[2026-09-14 03:15:54]   pbp_2021.parquet: 49922 rows x 13 cols
[2026-09-14 03:15:55]   pbp_2022.parquet: 49434 rows x 13 cols
[2026-09-14 03:15:55]   pbp_2023.parquet: 49665 rows x 13 cols
[2026-09-14 03:15:55]   pbp_2024.parquet: 49492 rows x 13 cols
[2026-09-14 03:15:55]   pbp_2025.parquet: 48771 rows x 13 cols
[2026-09-14 03:16:08] qualifying plays=906811 seasons=[1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
[2026-09-14 03:23:22] team-seasons with descriptors: 861
[2026-09-14 03:24:10] T1a correlations: {"train.lz_entropy": 0.0641, "train.h_order1": 0.1256, "train.h_sit": 0.2229, "validate.lz_entropy": 0.0962, "validate.h_order1": 0.1138, "validate.h_sit": 0.3401, "test.lz_entropy": 0.1208, "test.h_order1": 0.2062, "test.h_sit": 0.2012}
[2026-09-14 03:24:14] duel: train plays=393924 test plays=276440
[2026-09-14 03:24:16] duel: base MAE=0.9590 chal MAE=0.9589 dMAE=0.00000 paired_p=0.0259
[2026-09-14 03:24:16] TE INFEASIBLE: no defensive channel with >50% coverage
[2026-09-14 03:24:16] MI INFEASIBLE: offense_personnel coverage <50%
[2026-09-14 03:24:16] wrote /home/hatch/workspace/gse-discovery/phase6/t1-info/results_FULL-SNAPSHOT.json
[2026-09-14 03:24:16] T1 run end
[2026-09-14 03:32:35] NOTE: stray loader lines from a post-hoc descriptor-means helper (imported run_t1.log) were removed from this log; raw preserved at /tmp/RUNLOG.bak. Means: train n=381 LZ=1.1066+/-0.0291 H1=0.9798+/-0.0187 Hsit=0.8007+/-0.0291 EPA/play=-0.0347 | validate n=224 LZ=1.0912+/-0.0349 H1=0.9693+/-0.0227 Hsit=0.7923+/-0.0349 EPA/play=-0.0118 | test n=256 LZ=1.0950+/-0.0338 H1=0.9717+/-0.0220 Hsit=0.8043+/-0.0323 EPA/play=-0.0007.
