function fn(input) {
  const graph = parse(input);
  let communicatedWithZero = new Set();

  walk(graph, "0", node => communicatedWithZero.add(node));

  return communicatedWithZero.size;
}

function walk(graph, entryNode, onNode) {
  const visited = new Set([entryNode]);
  const queue = [].concat(...graph[entryNode]);

  onNode(entryNode);

  while (queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      onNode(node);
      visited.add(node);
      // Add not visited connections to queue
      queue.splice(
        queue.length,
        0,
        ...graph[node].filter(n => !visited.has(n))
      );
    }
  }
}

function parse(input) {
  return input
    .trim()
    .split("\n")
    .map(row => row.split(" <-> "))
    .map(([from, to]) => ({
      from,
      to: to.split(", ")
    }))
    .reduce((graph, { from, to }) => {
      graph[from] = to;
      return graph;
    }, {});
}

test(
  `
0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5
`,
  6
);

let input = `
0 <-> 584, 830
1 <-> 415, 531
2 <-> 514, 1419
3 <-> 3
4 <-> 1043
5 <-> 440
6 <-> 452, 1651, 1861
7 <-> 368, 783, 1364
8 <-> 813
9 <-> 79, 1562
10 <-> 465, 1947
11 <-> 408, 1095
12 <-> 12, 1386
13 <-> 179, 497, 1196, 1918
14 <-> 1650
15 <-> 211, 1763
16 <-> 598, 809, 1659
17 <-> 17, 222, 1233, 1716
18 <-> 254, 521
19 <-> 1928
20 <-> 477, 1388
21 <-> 133
22 <-> 1410
23 <-> 502
24 <-> 142, 658, 1177
25 <-> 1975
26 <-> 1639
27 <-> 719
28 <-> 267
29 <-> 1239
30 <-> 951, 997, 1814
31 <-> 750, 1073
32 <-> 191, 567, 1501
33 <-> 312
34 <-> 801
35 <-> 740
36 <-> 883, 1039
37 <-> 37
38 <-> 1073
39 <-> 823, 1375, 1790
40 <-> 618, 987
41 <-> 188, 988
42 <-> 1805, 1994
43 <-> 870, 969, 1107, 1110
44 <-> 1623
45 <-> 551, 1745
46 <-> 634, 790, 1637
47 <-> 314, 458
48 <-> 493, 1347, 1573
49 <-> 339, 1539
50 <-> 158, 308
51 <-> 176, 877
52 <-> 1191, 1236, 1616
53 <-> 900
54 <-> 188
55 <-> 336, 1134
56 <-> 422, 1110
57 <-> 817
58 <-> 862
59 <-> 373, 732
60 <-> 1431, 1974
61 <-> 1246, 1564
62 <-> 1015, 1227
63 <-> 166, 234, 288, 1746
64 <-> 1183
65 <-> 472
66 <-> 184, 1979
67 <-> 1430
68 <-> 1416, 1674, 1883
69 <-> 309, 675
70 <-> 1230
71 <-> 145, 343
72 <-> 446, 1185, 1187, 1421, 1819
73 <-> 248, 1278, 1779
74 <-> 502, 1470, 1857
75 <-> 645, 914
76 <-> 800, 968
77 <-> 1691
78 <-> 78
79 <-> 9, 1396
80 <-> 519, 636, 1091
81 <-> 292
82 <-> 286, 945
83 <-> 403, 737
84 <-> 806, 1435, 1893
85 <-> 895, 955
86 <-> 505
87 <-> 1125
88 <-> 88
89 <-> 908
90 <-> 1656
91 <-> 91, 1476
92 <-> 1524, 1699
93 <-> 1298, 1994
94 <-> 94, 1315
95 <-> 1996
96 <-> 575, 1837
97 <-> 620
98 <-> 1097, 1144
99 <-> 266, 684
100 <-> 1471
101 <-> 262, 549
102 <-> 209, 1585
103 <-> 1333
104 <-> 1794
105 <-> 287, 787
106 <-> 672, 891
107 <-> 900, 979
108 <-> 439, 1679, 1767
109 <-> 431, 621, 861, 1297
110 <-> 1043
111 <-> 1355, 1479
112 <-> 1195
113 <-> 320, 1710
114 <-> 159
115 <-> 767, 984
116 <-> 1918
117 <-> 1445
118 <-> 471, 599
119 <-> 1599, 1625
120 <-> 653, 1056
121 <-> 1083, 1143
122 <-> 1099, 1952
123 <-> 474, 1491
124 <-> 789, 1645
125 <-> 825, 1862
126 <-> 1913
127 <-> 1312
128 <-> 1016, 1704
129 <-> 1516, 1892
130 <-> 762, 1013, 1343
131 <-> 188, 864
132 <-> 380
133 <-> 21, 340, 371
134 <-> 772
135 <-> 1062
136 <-> 942
137 <-> 652, 923, 1520, 1580, 1596
138 <-> 1321, 1975
139 <-> 139, 1664
140 <-> 1061, 1357
141 <-> 1589
142 <-> 24, 1629, 1866
143 <-> 903, 1466, 1798
144 <-> 144, 792
145 <-> 71
146 <-> 575, 1401
147 <-> 692
148 <-> 204, 447, 1294
149 <-> 407, 642
150 <-> 982
151 <-> 542, 995, 1027
152 <-> 1586
153 <-> 686
154 <-> 289, 580
155 <-> 259, 786, 859, 1487
156 <-> 1096
157 <-> 1939
158 <-> 50, 341, 741, 1007, 1064
159 <-> 114, 159, 325, 831
160 <-> 1088
161 <-> 425
162 <-> 195
163 <-> 479, 930
164 <-> 1486, 1755
165 <-> 228, 808
166 <-> 63
167 <-> 1673
168 <-> 168
169 <-> 243, 466
170 <-> 1105
171 <-> 570
172 <-> 178, 526, 1318, 1364
173 <-> 1126
174 <-> 1330, 1383, 1754
175 <-> 606, 1180
176 <-> 51, 1685
177 <-> 1872
178 <-> 172
179 <-> 13, 304
180 <-> 424
181 <-> 1092
182 <-> 1329
183 <-> 1195, 1861
184 <-> 66, 1912
185 <-> 185, 400
186 <-> 1305, 1644
187 <-> 648, 1931
188 <-> 41, 54, 131, 1114
189 <-> 206
190 <-> 1794
191 <-> 32, 1399
192 <-> 466
193 <-> 906, 1244, 1334
194 <-> 1614
195 <-> 162, 1660
196 <-> 788
197 <-> 1028, 1083
198 <-> 1089, 1666
199 <-> 879, 1609
200 <-> 220
201 <-> 201
202 <-> 1431
203 <-> 1503
204 <-> 148
205 <-> 205, 868
206 <-> 189, 1561
207 <-> 902, 1115
208 <-> 712, 880
209 <-> 102, 843, 1474
210 <-> 707, 1411
211 <-> 15, 845, 950
212 <-> 360, 468, 1848
213 <-> 1355
214 <-> 888
215 <-> 1270, 1604, 1718
216 <-> 620, 1222
217 <-> 1521, 1894
218 <-> 227, 935, 1793, 1803
219 <-> 566
220 <-> 200, 1474
221 <-> 540, 1836
222 <-> 17, 487, 697
223 <-> 1631
224 <-> 742, 894
225 <-> 1701
226 <-> 387, 905, 1871
227 <-> 218
228 <-> 165, 865
229 <-> 1150
230 <-> 1286
231 <-> 1789
232 <-> 233, 1232, 1243, 1375
233 <-> 232
234 <-> 63, 447, 1165
235 <-> 1992
236 <-> 667, 1219
237 <-> 1681, 1704, 1725
238 <-> 1147, 1434
239 <-> 517
240 <-> 743
241 <-> 1100, 1126
242 <-> 1344
243 <-> 169, 1582
244 <-> 1185, 1815
245 <-> 577, 1090
246 <-> 476, 818, 1465
247 <-> 592, 1928
248 <-> 73, 1761
249 <-> 1937
250 <-> 956
251 <-> 960
252 <-> 746
253 <-> 1545
254 <-> 18
255 <-> 255, 1362
256 <-> 830, 1927
257 <-> 461, 954
258 <-> 489, 1338
259 <-> 155, 712, 1802
260 <-> 1121
261 <-> 261
262 <-> 101, 1009, 1020
263 <-> 1791, 1968
264 <-> 1816
265 <-> 917, 1307
266 <-> 99, 1041
267 <-> 28, 459, 752, 1855
268 <-> 296, 694
269 <-> 1275
270 <-> 1113
271 <-> 750, 1174
272 <-> 580
273 <-> 1470
274 <-> 1138
275 <-> 512, 920
276 <-> 863, 1570
277 <-> 1830
278 <-> 1674
279 <-> 901, 934
280 <-> 1004
281 <-> 366, 545, 1161
282 <-> 1744, 1878
283 <-> 330
284 <-> 1279
285 <-> 873
286 <-> 82, 357
287 <-> 105
288 <-> 63, 510
289 <-> 154
290 <-> 1456
291 <-> 1154, 1156
292 <-> 81, 753, 805, 1034
293 <-> 1722
294 <-> 1918
295 <-> 315, 731
296 <-> 268, 994, 1045
297 <-> 1011
298 <-> 862, 1020
299 <-> 299, 442, 1452
300 <-> 1393, 1438
301 <-> 1351, 1507
302 <-> 751, 1128
303 <-> 1530, 1755
304 <-> 179, 960
305 <-> 418, 625
306 <-> 1525, 1728
307 <-> 817, 937, 1138
308 <-> 50
309 <-> 69, 309
310 <-> 1307
311 <-> 503, 981, 1025
312 <-> 33, 856
313 <-> 750, 1018
314 <-> 47, 489, 726
315 <-> 295, 1663
316 <-> 565, 1900
317 <-> 1105, 1384
318 <-> 988
319 <-> 830
320 <-> 113, 320
321 <-> 1500
322 <-> 389, 1377
323 <-> 791
324 <-> 785
325 <-> 159, 800, 1721
326 <-> 326, 1316
327 <-> 1097
328 <-> 660, 1006
329 <-> 590
330 <-> 283, 330, 1223, 1502
331 <-> 1436, 1471
332 <-> 332
333 <-> 1060
334 <-> 824
335 <-> 520, 678, 1302
336 <-> 55, 410, 1092, 1093
337 <-> 1369
338 <-> 772, 1442
339 <-> 49
340 <-> 133, 1393
341 <-> 158
342 <-> 724
343 <-> 71, 483, 970, 1446
344 <-> 344, 617
345 <-> 830, 1174
346 <-> 1551
347 <-> 1230, 1637, 1673, 1907
348 <-> 804
349 <-> 522, 1405
350 <-> 574, 800, 1021
351 <-> 1494
352 <-> 352
353 <-> 627, 1658
354 <-> 1822
355 <-> 527
356 <-> 1108, 1175
357 <-> 286, 435, 782, 961
358 <-> 905
359 <-> 691, 715
360 <-> 212
361 <-> 1071, 1788
362 <-> 963, 1286, 1861
363 <-> 612, 884, 1687
364 <-> 451, 1668, 1805
365 <-> 558, 604, 1593
366 <-> 281
367 <-> 1054, 1472
368 <-> 7
369 <-> 1686
370 <-> 396, 1919
371 <-> 133, 896
372 <-> 1909
373 <-> 59, 491, 1838
374 <-> 561
375 <-> 478, 1117, 1179
376 <-> 1261, 1674
377 <-> 822, 1188
378 <-> 1536, 1551, 1635
379 <-> 379
380 <-> 132, 1866
381 <-> 1935
382 <-> 1980
383 <-> 1139
384 <-> 1502
385 <-> 613
386 <-> 781, 987
387 <-> 226
388 <-> 388
389 <-> 322
390 <-> 1009, 1198
391 <-> 430, 1429
392 <-> 1639
393 <-> 1897
394 <-> 1568, 1701
395 <-> 928
396 <-> 370, 885
397 <-> 474, 622
398 <-> 1174, 1280
399 <-> 1449, 1661
400 <-> 185, 1135
401 <-> 839
402 <-> 1167, 1977
403 <-> 83, 935
404 <-> 749
405 <-> 405, 1775
406 <-> 812, 913, 1719
407 <-> 149, 875
408 <-> 11
409 <-> 635
410 <-> 336, 653, 757
411 <-> 1406
412 <-> 520
413 <-> 791, 1129
414 <-> 581
415 <-> 1, 769, 1250
416 <-> 424, 903
417 <-> 417, 1112
418 <-> 305
419 <-> 1414
420 <-> 743, 1912
421 <-> 1411
422 <-> 56, 1365, 1895
423 <-> 1228, 1874
424 <-> 180, 416
425 <-> 161, 548, 1428, 1817
426 <-> 474
427 <-> 477, 1982
428 <-> 654, 1016, 1781, 1889
429 <-> 1165, 1258
430 <-> 391, 1648
431 <-> 109
432 <-> 432, 612, 1324
433 <-> 1678
434 <-> 988, 1272, 1322
435 <-> 357
436 <-> 1267, 1682
437 <-> 975
438 <-> 1632, 1865
439 <-> 108, 439, 775
440 <-> 5, 1510, 1635, 1744
441 <-> 441
442 <-> 299, 615, 801
443 <-> 443
444 <-> 794, 1042, 1868
445 <-> 1427
446 <-> 72, 1536
447 <-> 148, 234
448 <-> 469, 720, 1418
449 <-> 449
450 <-> 1628
451 <-> 364
452 <-> 6
453 <-> 546
454 <-> 894, 1001, 1137
455 <-> 1235, 1764
456 <-> 1232
457 <-> 1864, 1946
458 <-> 47
459 <-> 267, 624, 1675
460 <-> 509, 610, 1406, 1548
461 <-> 257
462 <-> 979, 1340, 1500, 1989
463 <-> 551, 1483
464 <-> 1291, 1397, 1543, 1786
465 <-> 10, 1661
466 <-> 169, 192, 553
467 <-> 1394, 1987
468 <-> 212
469 <-> 448
470 <-> 1536
471 <-> 118, 477, 1962
472 <-> 65, 983, 1763
473 <-> 1988
474 <-> 123, 397, 426
475 <-> 475
476 <-> 246, 718, 1177
477 <-> 20, 427, 471
478 <-> 375, 495
479 <-> 163, 479, 1705, 1914
480 <-> 744
481 <-> 497, 1051
482 <-> 1134
483 <-> 343, 783
484 <-> 556, 1360, 1735
485 <-> 1464
486 <-> 901, 1387
487 <-> 222
488 <-> 621, 1206, 1560
489 <-> 258, 314
490 <-> 1714
491 <-> 373, 1038
492 <-> 1127, 1848, 1960
493 <-> 48
494 <-> 638, 1948
495 <-> 478, 1397
496 <-> 1180
497 <-> 13, 481, 1119
498 <-> 1275
499 <-> 1158
500 <-> 988, 1058, 1758
501 <-> 715, 1186, 1697
502 <-> 23, 74, 605, 1514
503 <-> 311
504 <-> 550, 744, 807, 1378, 1636
505 <-> 86, 1925
506 <-> 506
507 <-> 1944
508 <-> 1130
509 <-> 460
510 <-> 288, 1254, 1434, 1997
511 <-> 714, 884
512 <-> 275
513 <-> 1730
514 <-> 2, 999
515 <-> 1593
516 <-> 615
517 <-> 239, 816
518 <-> 518, 765
519 <-> 80, 1003
520 <-> 335, 412, 915
521 <-> 18, 569
522 <-> 349
523 <-> 523, 543
524 <-> 524, 1270
525 <-> 1285, 1850
526 <-> 172
527 <-> 355, 528, 1345
528 <-> 527, 1229
529 <-> 621, 1798
530 <-> 993, 1608
531 <-> 1, 647
532 <-> 1474
533 <-> 592
534 <-> 1142
535 <-> 1484
536 <-> 554, 803
537 <-> 1507
538 <-> 588, 812
539 <-> 539, 571
540 <-> 221
541 <-> 1261
542 <-> 151, 1650
543 <-> 523
544 <-> 1672
545 <-> 281, 1207, 1522
546 <-> 453, 1169, 1809
547 <-> 985, 1115, 1729
548 <-> 425, 640
549 <-> 101
550 <-> 504, 1535, 1717
551 <-> 45, 463, 1517, 1833
552 <-> 734, 1667
553 <-> 466, 1921
554 <-> 536
555 <-> 1401
556 <-> 484, 910, 1930
557 <-> 557
558 <-> 365
559 <-> 619, 630
560 <-> 560
561 <-> 374, 1961
562 <-> 1863
563 <-> 1238, 1733
564 <-> 950
565 <-> 316, 1157
566 <-> 219, 824, 1274
567 <-> 32
568 <-> 1121
569 <-> 521, 593, 1336, 1982
570 <-> 171, 967
571 <-> 539, 891
572 <-> 785
573 <-> 1009
574 <-> 350
575 <-> 96, 146, 1575
576 <-> 601, 830, 1921
577 <-> 245, 604
578 <-> 1837
579 <-> 1018, 1757
580 <-> 154, 272, 888
581 <-> 414, 1734
582 <-> 1866
583 <-> 971, 1936
584 <-> 0, 1082
585 <-> 1371
586 <-> 586, 926
587 <-> 672
588 <-> 538
589 <-> 1776
590 <-> 329, 733
591 <-> 897, 1511
592 <-> 247, 533, 1313
593 <-> 569, 929, 1551, 1994
594 <-> 1249
595 <-> 1728, 1797, 1872
596 <-> 856, 1209
597 <-> 1488, 1520
598 <-> 16
599 <-> 118
600 <-> 1337, 1355, 1703
601 <-> 576
602 <-> 1615
603 <-> 1264
604 <-> 365, 577, 1356
605 <-> 502
606 <-> 175, 1491, 1584
607 <-> 1777
608 <-> 760, 1779
609 <-> 737
610 <-> 460
611 <-> 611
612 <-> 363, 432, 1963
613 <-> 385, 708, 875, 1289, 1557, 1618
614 <-> 1303
615 <-> 442, 516
616 <-> 1556, 1676
617 <-> 344
618 <-> 40, 641, 1124
619 <-> 559, 1649
620 <-> 97, 216
621 <-> 109, 488, 529
622 <-> 397, 886
623 <-> 623, 716
624 <-> 459
625 <-> 305, 1126
626 <-> 936, 1998
627 <-> 353, 846, 1672
628 <-> 628, 1734
629 <-> 977, 1257, 1958
630 <-> 559, 1559, 1977
631 <-> 1744
632 <-> 1008, 1620
633 <-> 818, 1678
634 <-> 46, 1259
635 <-> 409, 663
636 <-> 80, 1622
637 <-> 1856
638 <-> 494, 734, 1983
639 <-> 639, 1402
640 <-> 548, 1156, 1493
641 <-> 618
642 <-> 149
643 <-> 643
644 <-> 1233, 1512
645 <-> 75, 645, 1909
646 <-> 675
647 <-> 531, 1346, 1352
648 <-> 187, 1137, 1585
649 <-> 1048
650 <-> 1360
651 <-> 1072, 1168
652 <-> 137, 652, 771, 1282
653 <-> 120, 410
654 <-> 428, 1669
655 <-> 1403
656 <-> 1589
657 <-> 1707
658 <-> 24, 730
659 <-> 1282, 1823
660 <-> 328, 1453
661 <-> 727
662 <-> 1190, 1788, 1857
663 <-> 635, 1622
664 <-> 1471
665 <-> 665
666 <-> 1064, 1955
667 <-> 236, 667
668 <-> 1222, 1709
669 <-> 766, 1048, 1127
670 <-> 670, 1168
671 <-> 1165
672 <-> 106, 587, 1201, 1950
673 <-> 949
674 <-> 1623
675 <-> 69, 646, 1489, 1976
676 <-> 948
677 <-> 1576, 1743
678 <-> 335, 1084
679 <-> 1081
680 <-> 680, 747
681 <-> 1015
682 <-> 1062
683 <-> 823, 1160
684 <-> 99, 1415
685 <-> 1695
686 <-> 153, 1674
687 <-> 873, 1959
688 <-> 1688
689 <-> 1125, 1439, 1614
690 <-> 1787
691 <-> 359, 691, 1945
692 <-> 147, 1425, 1426
693 <-> 1327, 1329
694 <-> 268, 1263
695 <-> 695, 1055, 1482
696 <-> 780
697 <-> 222, 1059
698 <-> 1486
699 <-> 799
700 <-> 1598
701 <-> 872, 1103
702 <-> 1546, 1853
703 <-> 703
704 <-> 1533
705 <-> 1822
706 <-> 1894, 1969
707 <-> 210, 729, 909
708 <-> 613
709 <-> 709
710 <-> 1634
711 <-> 1863
712 <-> 208, 259
713 <-> 713
714 <-> 511, 1420
715 <-> 359, 501
716 <-> 623
717 <-> 1104, 1193, 1431
718 <-> 476
719 <-> 27, 1861
720 <-> 448, 720, 1374
721 <-> 1632, 1721
722 <-> 1944
723 <-> 723
724 <-> 342, 1782
725 <-> 1485
726 <-> 314, 1451
727 <-> 661, 1348
728 <-> 1569
729 <-> 707
730 <-> 658, 1656
731 <-> 295
732 <-> 59, 1368
733 <-> 590, 733
734 <-> 552, 638, 1908
735 <-> 834
736 <-> 983
737 <-> 83, 609
738 <-> 1189, 1339, 1647
739 <-> 947, 1588
740 <-> 35, 1883
741 <-> 158, 784
742 <-> 224
743 <-> 240, 420
744 <-> 480, 504
745 <-> 1604
746 <-> 252, 823, 1225
747 <-> 680
748 <-> 1366, 1474
749 <-> 404, 1578
750 <-> 31, 271, 313
751 <-> 302
752 <-> 267
753 <-> 292, 1848
754 <-> 1394, 1847
755 <-> 755
756 <-> 1168
757 <-> 410, 1352, 1484, 1830
758 <-> 852, 1037
759 <-> 759
760 <-> 608
761 <-> 1060, 1272, 1943
762 <-> 130, 1533
763 <-> 774
764 <-> 1270
765 <-> 518
766 <-> 669, 829, 1477
767 <-> 115, 1933, 1935
768 <-> 768
769 <-> 415, 1475
770 <-> 1087, 1370
771 <-> 652
772 <-> 134, 338, 1102, 1865
773 <-> 1678, 1995
774 <-> 763, 1712
775 <-> 439, 981, 1505
776 <-> 776, 1284
777 <-> 915, 1192
778 <-> 1268, 1269, 1371
779 <-> 1101
780 <-> 696, 894, 1144, 1339
781 <-> 386, 1464
782 <-> 357
783 <-> 7, 483
784 <-> 741, 1149
785 <-> 324, 572, 817
786 <-> 155, 1460
787 <-> 105, 1368
788 <-> 196, 1143, 1433
789 <-> 124, 944, 1216, 1829
790 <-> 46, 790, 1361
791 <-> 323, 413, 1564, 1704, 1775
792 <-> 144, 1079, 1839, 1860
793 <-> 1248, 1880
794 <-> 444, 1739, 1862
795 <-> 861
796 <-> 1997
797 <-> 991, 1256, 1282
798 <-> 1666
799 <-> 699, 895
800 <-> 76, 325, 350, 1808
801 <-> 34, 442, 1153
802 <-> 1035
803 <-> 536, 1294
804 <-> 348, 982
805 <-> 292, 1382
806 <-> 84, 1162
807 <-> 504
808 <-> 165, 808
809 <-> 16, 1298, 1542
810 <-> 1127
811 <-> 1911
812 <-> 406, 538
813 <-> 8, 1733
814 <-> 1140
815 <-> 1400, 1596
816 <-> 517, 1648
817 <-> 57, 307, 785, 1596
818 <-> 246, 633
819 <-> 1955, 1956
820 <-> 820, 1677
821 <-> 1440, 1879
822 <-> 377, 1032
823 <-> 39, 683, 746, 1313
824 <-> 334, 566
825 <-> 125
826 <-> 995
827 <-> 827, 1328
828 <-> 828, 1215
829 <-> 766, 1549
830 <-> 0, 256, 319, 345, 576
831 <-> 159
832 <-> 1320
833 <-> 1772, 1891
834 <-> 735, 834
835 <-> 835, 908
836 <-> 1975
837 <-> 1491
838 <-> 838
839 <-> 401, 1068, 1236, 1780, 1849
840 <-> 840, 1069
841 <-> 1702
842 <-> 1669
843 <-> 209
844 <-> 1940
845 <-> 211, 898, 1508, 1708
846 <-> 627
847 <-> 1037, 1369
848 <-> 1237
849 <-> 1136, 1800, 1856
850 <-> 1116
851 <-> 1480, 1759
852 <-> 758, 1515
853 <-> 1708
854 <-> 886
855 <-> 1853
856 <-> 312, 596, 1485, 1990
857 <-> 931, 1697
858 <-> 1912
859 <-> 155
860 <-> 922
861 <-> 109, 795, 1971
862 <-> 58, 298, 1392
863 <-> 276, 1856
864 <-> 131, 1690
865 <-> 228, 933, 1913
866 <-> 900, 1932
867 <-> 1700
868 <-> 205, 1363
869 <-> 1954
870 <-> 43
871 <-> 1660
872 <-> 701, 1226, 1252
873 <-> 285, 687
874 <-> 1181, 1915
875 <-> 407, 613, 1353
876 <-> 1218
877 <-> 51, 937
878 <-> 1733
879 <-> 199, 1315
880 <-> 208
881 <-> 1708
882 <-> 1108
883 <-> 36, 1682
884 <-> 363, 511
885 <-> 396, 983
886 <-> 622, 854
887 <-> 887
888 <-> 214, 580, 1272
889 <-> 889
890 <-> 1387
891 <-> 106, 571
892 <-> 1433
893 <-> 1032, 1638
894 <-> 224, 454, 780
895 <-> 85, 799
896 <-> 371
897 <-> 591, 1721
898 <-> 845
899 <-> 899
900 <-> 53, 107, 866
901 <-> 279, 486, 1332, 1734
902 <-> 207, 1043, 1164, 1491
903 <-> 143, 416, 1015, 1722
904 <-> 1178
905 <-> 226, 358
906 <-> 193, 1001
907 <-> 964
908 <-> 89, 835
909 <-> 707, 963
910 <-> 556, 910, 1495
911 <-> 1203, 1613, 1954
912 <-> 1348
913 <-> 406
914 <-> 75
915 <-> 520, 777, 1463
916 <-> 916, 1422, 1537, 1799
917 <-> 265, 1487, 1824, 1920, 1931
918 <-> 1731, 1828
919 <-> 1116, 1794
920 <-> 275, 920
921 <-> 1218
922 <-> 860, 1433
923 <-> 137, 1455
924 <-> 1656
925 <-> 1628
926 <-> 586, 1846
927 <-> 1566
928 <-> 395, 1499, 1807
929 <-> 593, 1594
930 <-> 163
931 <-> 857
932 <-> 1319
933 <-> 865, 1113
934 <-> 279
935 <-> 218, 403
936 <-> 626, 1211, 1242, 1444
937 <-> 307, 877
938 <-> 1145, 1389
939 <-> 1396, 1981
940 <-> 940, 1415
941 <-> 1255, 1813
942 <-> 136, 1206, 1373
943 <-> 1540
944 <-> 789
945 <-> 82, 1500
946 <-> 946
947 <-> 739
948 <-> 676, 1077, 1783, 1985
949 <-> 673, 1271
950 <-> 211, 564, 1371
951 <-> 30, 996, 1546
952 <-> 952
953 <-> 1558
954 <-> 257, 1011, 1365, 1583
955 <-> 85, 1104
956 <-> 250, 956
957 <-> 1096
958 <-> 1750
959 <-> 1196, 1621
960 <-> 251, 304
961 <-> 357, 1727
962 <-> 962
963 <-> 362, 909
964 <-> 907, 1227, 1999
965 <-> 965
966 <-> 1593
967 <-> 570, 1159, 1544, 1960
968 <-> 76, 1541
969 <-> 43, 969
970 <-> 343, 1834
971 <-> 583
972 <-> 1763, 1993
973 <-> 1797, 1992
974 <-> 1835
975 <-> 437, 1790
976 <-> 1245, 1279
977 <-> 629, 1001
978 <-> 1192
979 <-> 107, 462, 1730
980 <-> 1631
981 <-> 311, 775, 1670
982 <-> 150, 804, 1561, 1920
983 <-> 472, 736, 885
984 <-> 115, 1116
985 <-> 547, 1829
986 <-> 1174
987 <-> 40, 386
988 <-> 41, 318, 434, 500, 1038
989 <-> 1002, 1922
990 <-> 1010, 1395
991 <-> 797
992 <-> 1432
993 <-> 530
994 <-> 296
995 <-> 151, 826, 1434
996 <-> 951, 1122
997 <-> 30, 1461
998 <-> 1372
999 <-> 514, 1283, 1386
1000 <-> 1499
1001 <-> 454, 906, 977
1002 <-> 989
1003 <-> 519, 1523, 1795
1004 <-> 280, 1229, 1946
1005 <-> 1534, 1538
1006 <-> 328, 1117
1007 <-> 158
1008 <-> 632, 1869
1009 <-> 262, 390, 573
1010 <-> 990, 1805
1011 <-> 297, 954
1012 <-> 1689
1013 <-> 130
1014 <-> 1903
1015 <-> 62, 681, 903, 1249, 1888
1016 <-> 128, 428
1017 <-> 1425, 1576, 1740
1018 <-> 313, 579, 1845
1019 <-> 1903
1020 <-> 262, 298
1021 <-> 350
1022 <-> 1126
1023 <-> 1371
1024 <-> 1024, 1237
1025 <-> 311
1026 <-> 1431, 1437
1027 <-> 151
1028 <-> 197
1029 <-> 1029
1030 <-> 1194
1031 <-> 1031
1032 <-> 822, 893
1033 <-> 1618, 1795
1034 <-> 292, 1822
1035 <-> 802, 1667
1036 <-> 1214
1037 <-> 758, 847
1038 <-> 491, 988
1039 <-> 36
1040 <-> 1584, 1768
1041 <-> 266
1042 <-> 444, 1104, 1220
1043 <-> 4, 110, 902
1044 <-> 1633, 1682
1045 <-> 296, 1652
1046 <-> 1444
1047 <-> 1047, 1255
1048 <-> 649, 669
1049 <-> 1882
1050 <-> 1573
1051 <-> 481
1052 <-> 1149
1053 <-> 1441
1054 <-> 367, 1928
1055 <-> 695
1056 <-> 120
1057 <-> 1410, 1684
1058 <-> 500
1059 <-> 697, 1944
1060 <-> 333, 761, 1310, 1566
1061 <-> 140, 1061, 1492
1062 <-> 135, 682, 1062, 1377
1063 <-> 1519, 1587, 1858
1064 <-> 158, 666
1065 <-> 1459, 1467, 1902
1066 <-> 1969
1067 <-> 1218
1068 <-> 839
1069 <-> 840, 1574
1070 <-> 1814
1071 <-> 361
1072 <-> 651, 1218
1073 <-> 31, 38
1074 <-> 1241, 1468
1075 <-> 1075
1076 <-> 1490, 1634
1077 <-> 948, 1111, 1279, 1832
1078 <-> 1078
1079 <-> 792
1080 <-> 1327
1081 <-> 679, 1653, 1719
1082 <-> 584
1083 <-> 121, 197, 1341
1084 <-> 678
1085 <-> 1576
1086 <-> 1540, 1726
1087 <-> 770, 1403
1088 <-> 160, 1841
1089 <-> 198, 1399, 1627
1090 <-> 245, 1090
1091 <-> 80, 1307
1092 <-> 181, 336, 1211
1093 <-> 336, 1851
1094 <-> 1598, 1659
1095 <-> 11, 1337
1096 <-> 156, 957, 1103
1097 <-> 98, 327
1098 <-> 1235, 1261, 1567
1099 <-> 122, 1348
1100 <-> 241
1101 <-> 779, 1253, 1526
1102 <-> 772
1103 <-> 701, 1096, 1978
1104 <-> 717, 955, 1042
1105 <-> 170, 317
1106 <-> 1911
1107 <-> 43
1108 <-> 356, 882, 1123, 1991
1109 <-> 1120
1110 <-> 43, 56
1111 <-> 1077, 1547
1112 <-> 417
1113 <-> 270, 933
1114 <-> 188
1115 <-> 207, 547
1116 <-> 850, 919, 984, 1202
1117 <-> 375, 1006, 1423, 1727
1118 <-> 1855
1119 <-> 497, 1736
1120 <-> 1109, 1829
1121 <-> 260, 568, 1151, 1155, 1644
1122 <-> 996
1123 <-> 1108
1124 <-> 618, 1204, 1610, 1630, 1844
1125 <-> 87, 689, 1228
1126 <-> 173, 241, 625, 1022, 1461
1127 <-> 492, 669, 810
1128 <-> 302, 1128
1129 <-> 413
1130 <-> 508, 1852
1131 <-> 1918
1132 <-> 1413, 1527
1133 <-> 1133, 1654
1134 <-> 55, 482
1135 <-> 400
1136 <-> 849
1137 <-> 454, 648, 1646
1138 <-> 274, 307
1139 <-> 383, 1951
1140 <-> 814, 1140
1141 <-> 1141
1142 <-> 534, 1722
1143 <-> 121, 788
1144 <-> 98, 780
1145 <-> 938, 1145
1146 <-> 1242
1147 <-> 238, 1680, 1699
1148 <-> 1725
1149 <-> 784, 1052
1150 <-> 229, 1970
1151 <-> 1121, 1379
1152 <-> 1575
1153 <-> 801, 1288
1154 <-> 291
1155 <-> 1121, 1785
1156 <-> 291, 640
1157 <-> 565, 1157
1158 <-> 499, 1158
1159 <-> 967
1160 <-> 683
1161 <-> 281
1162 <-> 806, 1555, 1616
1163 <-> 1268
1164 <-> 902
1165 <-> 234, 429, 671
1166 <-> 1596
1167 <-> 402
1168 <-> 651, 670, 756
1169 <-> 546
1170 <-> 1170, 1478, 1877
1171 <-> 1171
1172 <-> 1224, 1856
1173 <-> 1367, 1584, 1820
1174 <-> 271, 345, 398, 986, 1295
1175 <-> 356, 1890
1176 <-> 1936, 1961
1177 <-> 24, 476, 1742
1178 <-> 904, 1280
1179 <-> 375
1180 <-> 175, 496
1181 <-> 874
1182 <-> 1182, 1184
1183 <-> 64, 1736
1184 <-> 1182
1185 <-> 72, 244
1186 <-> 501
1187 <-> 72
1188 <-> 377
1189 <-> 738
1190 <-> 662, 1987
1191 <-> 52
1192 <-> 777, 978
1193 <-> 717
1194 <-> 1030, 1272
1195 <-> 112, 183
1196 <-> 13, 959, 1308, 1691
1197 <-> 1197
1198 <-> 390, 1729
1199 <-> 1242
1200 <-> 1815
1201 <-> 672, 1433
1202 <-> 1116, 1691
1203 <-> 911
1204 <-> 1124, 1420
1205 <-> 1428, 1942
1206 <-> 488, 942, 1603, 1608
1207 <-> 545
1208 <-> 1583
1209 <-> 596
1210 <-> 1580
1211 <-> 936, 1092
1212 <-> 1317
1213 <-> 1213
1214 <-> 1036, 1391, 1395
1215 <-> 828
1216 <-> 789
1217 <-> 1241
1218 <-> 876, 921, 1067, 1072
1219 <-> 236
1220 <-> 1042
1221 <-> 1531, 1669
1222 <-> 216, 668, 1222, 1773, 1884
1223 <-> 330, 1591
1224 <-> 1172, 1260, 1677
1225 <-> 746
1226 <-> 872
1227 <-> 62, 964
1228 <-> 423, 1125
1229 <-> 528, 1004, 1667
1230 <-> 70, 347
1231 <-> 1231, 1955
1232 <-> 232, 456
1233 <-> 17, 644
1234 <-> 1239, 1737
1235 <-> 455, 1098, 1910
1236 <-> 52, 839
1237 <-> 848, 1024
1238 <-> 563, 1824
1239 <-> 29, 1234
1240 <-> 1240
1241 <-> 1074, 1217
1242 <-> 936, 1146, 1199
1243 <-> 232, 1298
1244 <-> 193
1245 <-> 976, 1321
1246 <-> 61, 1469
1247 <-> 1247
1248 <-> 793
1249 <-> 594, 1015
1250 <-> 415
1251 <-> 1732
1252 <-> 872, 1454, 1925
1253 <-> 1101, 1315
1254 <-> 510
1255 <-> 941, 1047
1256 <-> 797
1257 <-> 629, 1663, 1881
1258 <-> 429, 1740
1259 <-> 634
1260 <-> 1224
1261 <-> 376, 541, 1098, 1624
1262 <-> 1783
1263 <-> 694
1264 <-> 603, 1495, 1504
1265 <-> 1868
1266 <-> 1266, 1553
1267 <-> 436, 1403
1268 <-> 778, 1163, 1900
1269 <-> 778
1270 <-> 215, 524, 764
1271 <-> 949, 1271, 1329
1272 <-> 434, 761, 888, 1194
1273 <-> 1565, 1605
1274 <-> 566, 1612, 1634, 1878
1275 <-> 269, 498, 1484, 1537
1276 <-> 1876
1277 <-> 1819
1278 <-> 73
1279 <-> 284, 976, 1077, 1657
1280 <-> 398, 1178, 1755
1281 <-> 1281
1282 <-> 652, 659, 797, 1463
1283 <-> 999
1284 <-> 776
1285 <-> 525
1286 <-> 230, 362
1287 <-> 1287, 1882
1288 <-> 1153
1289 <-> 613
1290 <-> 1432
1291 <-> 464
1292 <-> 1605
1293 <-> 1293
1294 <-> 148, 803, 1443
1295 <-> 1174
1296 <-> 1296, 1592
1297 <-> 109, 1792
1298 <-> 93, 809, 1243
1299 <-> 1299, 1975
1300 <-> 1441
1301 <-> 1793, 1856
1302 <-> 335
1303 <-> 614, 1307, 1941
1304 <-> 1847
1305 <-> 186
1306 <-> 1306, 1765
1307 <-> 265, 310, 1091, 1303
1308 <-> 1196, 1916
1309 <-> 1365, 1831
1310 <-> 1060
1311 <-> 1639
1312 <-> 127, 1481, 1750
1313 <-> 592, 823
1314 <-> 1552, 1863
1315 <-> 94, 879, 1253
1316 <-> 326
1317 <-> 1212, 1936
1318 <-> 172, 1986
1319 <-> 932, 1319
1320 <-> 832, 1512
1321 <-> 138, 1245
1322 <-> 434, 1439
1323 <-> 1323, 1715
1324 <-> 432
1325 <-> 1325, 1445
1326 <-> 1572
1327 <-> 693, 1080, 1494, 1641
1328 <-> 827
1329 <-> 182, 693, 1271
1330 <-> 174
1331 <-> 1331
1332 <-> 901
1333 <-> 103, 1333, 1404
1334 <-> 193, 1615
1335 <-> 1335, 1516
1336 <-> 569
1337 <-> 600, 1095
1338 <-> 258
1339 <-> 738, 780, 1662
1340 <-> 462
1341 <-> 1083
1342 <-> 1662
1343 <-> 130, 1615
1344 <-> 242, 1344
1345 <-> 527, 1600
1346 <-> 647
1347 <-> 48
1348 <-> 727, 912, 1099, 1413
1349 <-> 1506
1350 <-> 1544
1351 <-> 301, 1351
1352 <-> 647, 757, 1683
1353 <-> 875
1354 <-> 1432, 1771
1355 <-> 111, 213, 600, 1818, 1915
1356 <-> 604, 1506
1357 <-> 140
1358 <-> 1990
1359 <-> 1706
1360 <-> 484, 650
1361 <-> 790, 1633
1362 <-> 255
1363 <-> 868
1364 <-> 7, 172, 1364
1365 <-> 422, 954, 1309, 1586
1366 <-> 748
1367 <-> 1173
1368 <-> 732, 787
1369 <-> 337, 847, 1682
1370 <-> 770
1371 <-> 585, 778, 950, 1023, 1821
1372 <-> 998, 1372, 1957
1373 <-> 942
1374 <-> 720
1375 <-> 39, 232, 1871
1376 <-> 1911
1377 <-> 322, 1062
1378 <-> 504
1379 <-> 1151, 1939
1380 <-> 1380
1381 <-> 1787
1382 <-> 805
1383 <-> 174, 1636
1384 <-> 317, 1384
1385 <-> 1781
1386 <-> 12, 999, 1843
1387 <-> 486, 890
1388 <-> 20
1389 <-> 938
1390 <-> 1390, 1623
1391 <-> 1214
1392 <-> 862, 1669
1393 <-> 300, 340, 1817, 1841
1394 <-> 467, 754
1395 <-> 990, 1214, 1395
1396 <-> 79, 939, 1881
1397 <-> 464, 495, 1991
1398 <-> 1398, 1642, 1686
1399 <-> 191, 1089, 1643
1400 <-> 815
1401 <-> 146, 555
1402 <-> 639
1403 <-> 655, 1087, 1267, 1700
1404 <-> 1333
1405 <-> 349, 1638, 1746
1406 <-> 411, 460, 1406
1407 <-> 1407, 1459, 1688
1408 <-> 1534
1409 <-> 1731
1410 <-> 22, 1057, 1734
1411 <-> 210, 421, 1783
1412 <-> 1631
1413 <-> 1132, 1348
1414 <-> 419, 1680
1415 <-> 684, 940
1416 <-> 68
1417 <-> 1809
1418 <-> 448
1419 <-> 2
1420 <-> 714, 1204
1421 <-> 72, 1897
1422 <-> 916
1423 <-> 1117
1424 <-> 1745, 1749
1425 <-> 692, 1017
1426 <-> 692, 1565
1427 <-> 445, 1488, 1810
1428 <-> 425, 1205, 1428
1429 <-> 391, 1934
1430 <-> 67, 1690
1431 <-> 60, 202, 717, 1026, 1558
1432 <-> 992, 1290, 1354
1433 <-> 788, 892, 922, 1201
1434 <-> 238, 510, 995
1435 <-> 84
1436 <-> 331
1437 <-> 1026
1438 <-> 300
1439 <-> 689, 1322
1440 <-> 821, 1573
1441 <-> 1053, 1300, 1505, 1967
1442 <-> 338
1443 <-> 1294, 1696
1444 <-> 936, 1046
1445 <-> 117, 1325
1446 <-> 343
1447 <-> 1465
1448 <-> 1520
1449 <-> 399, 1674
1450 <-> 1897
1451 <-> 726, 1694
1452 <-> 299
1453 <-> 660, 1547
1454 <-> 1252, 1551, 1762
1455 <-> 923
1456 <-> 290, 1456
1457 <-> 1457
1458 <-> 1626, 1645
1459 <-> 1065, 1407
1460 <-> 786
1461 <-> 997, 1126, 1661
1462 <-> 1596
1463 <-> 915, 1282
1464 <-> 485, 781
1465 <-> 246, 1447, 1613, 1797
1466 <-> 143
1467 <-> 1065
1468 <-> 1074, 1919
1469 <-> 1246
1470 <-> 74, 273
1471 <-> 100, 331, 664, 1952
1472 <-> 367
1473 <-> 1473
1474 <-> 209, 220, 532, 748, 1760
1475 <-> 769, 1921
1476 <-> 91, 1487
1477 <-> 766, 1711, 1729, 1766
1478 <-> 1170
1479 <-> 111
1480 <-> 851
1481 <-> 1312, 1481
1482 <-> 695
1483 <-> 463, 1599
1484 <-> 535, 757, 1275
1485 <-> 725, 856, 1485
1486 <-> 164, 698, 1756
1487 <-> 155, 917, 1476, 1772
1488 <-> 597, 1427
1489 <-> 675
1490 <-> 1076, 1672, 1922
1491 <-> 123, 606, 837, 902
1492 <-> 1061
1493 <-> 640
1494 <-> 351, 1327
1495 <-> 910, 1264
1496 <-> 1567
1497 <-> 1497
1498 <-> 1723
1499 <-> 928, 1000, 1995
1500 <-> 321, 462, 945
1501 <-> 32
1502 <-> 330, 384, 1707
1503 <-> 203, 1687
1504 <-> 1264
1505 <-> 775, 1441, 1917
1506 <-> 1349, 1356
1507 <-> 301, 537
1508 <-> 845
1509 <-> 1981
1510 <-> 440
1511 <-> 591
1512 <-> 644, 1320
1513 <-> 1879
1514 <-> 502, 1705
1515 <-> 852
1516 <-> 129, 1335, 1827
1517 <-> 551, 1752
1518 <-> 1697, 1714, 1873
1519 <-> 1063, 1519, 1898
1520 <-> 137, 597, 1448
1521 <-> 217
1522 <-> 545, 1522, 1801
1523 <-> 1003
1524 <-> 92
1525 <-> 306
1526 <-> 1101
1527 <-> 1132
1528 <-> 1691
1529 <-> 1630
1530 <-> 303
1531 <-> 1221
1532 <-> 1532
1533 <-> 704, 762
1534 <-> 1005, 1408, 1966
1535 <-> 550, 1535
1536 <-> 378, 446, 470
1537 <-> 916, 1275
1538 <-> 1005, 1619
1539 <-> 49, 1720
1540 <-> 943, 1086
1541 <-> 968, 1777
1542 <-> 809
1543 <-> 464
1544 <-> 967, 1350
1545 <-> 253, 1618
1546 <-> 702, 951
1547 <-> 1111, 1453
1548 <-> 460
1549 <-> 829
1550 <-> 1758
1551 <-> 346, 378, 593, 1454
1552 <-> 1314, 1552
1553 <-> 1266
1554 <-> 1554
1555 <-> 1162, 1673
1556 <-> 616
1557 <-> 613
1558 <-> 953, 1431
1559 <-> 630, 1879
1560 <-> 488, 1901
1561 <-> 206, 982
1562 <-> 9
1563 <-> 1715
1564 <-> 61, 791
1565 <-> 1273, 1426
1566 <-> 927, 1060
1567 <-> 1098, 1496
1568 <-> 394, 1568, 1999
1569 <-> 728, 1591
1570 <-> 276, 1602
1571 <-> 1582
1572 <-> 1326, 1572, 1741
1573 <-> 48, 1050, 1440, 1817
1574 <-> 1069
1575 <-> 575, 1152, 1605, 1886
1576 <-> 677, 1017, 1085
1577 <-> 1953
1578 <-> 749, 1578
1579 <-> 1652, 1974, 1992
1580 <-> 137, 1210
1581 <-> 1696
1582 <-> 243, 1571
1583 <-> 954, 1208
1584 <-> 606, 1040, 1173
1585 <-> 102, 648
1586 <-> 152, 1365
1587 <-> 1063, 1972
1588 <-> 739, 1990
1589 <-> 141, 656, 1589
1590 <-> 1590
1591 <-> 1223, 1569
1592 <-> 1296
1593 <-> 365, 515, 966, 1698
1594 <-> 929, 1826
1595 <-> 1595
1596 <-> 137, 815, 817, 1166, 1462
1597 <-> 1969
1598 <-> 700, 1094
1599 <-> 119, 1483, 1671
1600 <-> 1345
1601 <-> 1601, 1731
1602 <-> 1570
1603 <-> 1206, 1984
1604 <-> 215, 745
1605 <-> 1273, 1292, 1575
1606 <-> 1606
1607 <-> 1649
1608 <-> 530, 1206
1609 <-> 199
1610 <-> 1124, 1675
1611 <-> 1611
1612 <-> 1274, 1923
1613 <-> 911, 1465
1614 <-> 194, 689
1615 <-> 602, 1334, 1343
1616 <-> 52, 1162
1617 <-> 1956
1618 <-> 613, 1033, 1545
1619 <-> 1538
1620 <-> 632, 1620
1621 <-> 959
1622 <-> 636, 663
1623 <-> 44, 674, 1390
1624 <-> 1261
1625 <-> 119
1626 <-> 1458
1627 <-> 1089, 1627
1628 <-> 450, 925, 1628
1629 <-> 142
1630 <-> 1124, 1529
1631 <-> 223, 980, 1412, 1788
1632 <-> 438, 721
1633 <-> 1044, 1361
1634 <-> 710, 1076, 1274
1635 <-> 378, 440
1636 <-> 504, 1383, 1988
1637 <-> 46, 347
1638 <-> 893, 1405
1639 <-> 26, 392, 1311, 1639
1640 <-> 1865
1641 <-> 1327
1642 <-> 1398, 1723
1643 <-> 1399
1644 <-> 186, 1121, 1644, 1804
1645 <-> 124, 1458
1646 <-> 1137, 1859
1647 <-> 738
1648 <-> 430, 816
1649 <-> 619, 1607
1650 <-> 14, 542
1651 <-> 6, 1970
1652 <-> 1045, 1579
1653 <-> 1081, 1742
1654 <-> 1133
1655 <-> 1924
1656 <-> 90, 730, 924
1657 <-> 1279
1658 <-> 353, 1693
1659 <-> 16, 1094
1660 <-> 195, 871, 1991
1661 <-> 399, 465, 1461
1662 <-> 1339, 1342
1663 <-> 315, 1257
1664 <-> 139
1665 <-> 1766
1666 <-> 198, 798
1667 <-> 552, 1035, 1229
1668 <-> 364
1669 <-> 654, 842, 1221, 1392
1670 <-> 981
1671 <-> 1599
1672 <-> 544, 627, 1490
1673 <-> 167, 347, 1555
1674 <-> 68, 278, 376, 686, 1449
1675 <-> 459, 1610, 1812
1676 <-> 616, 1878
1677 <-> 820, 1224
1678 <-> 433, 633, 773
1679 <-> 108
1680 <-> 1147, 1414
1681 <-> 237
1682 <-> 436, 883, 1044, 1369
1683 <-> 1352
1684 <-> 1057, 1770
1685 <-> 176
1686 <-> 369, 1398, 1751, 1906
1687 <-> 363, 1503
1688 <-> 688, 1407, 1712
1689 <-> 1012, 1689
1690 <-> 864, 1430
1691 <-> 77, 1196, 1202, 1528, 1973
1692 <-> 1692
1693 <-> 1658
1694 <-> 1451, 1751, 1870
1695 <-> 685, 1695
1696 <-> 1443, 1581
1697 <-> 501, 857, 1518
1698 <-> 1593
1699 <-> 92, 1147, 1720
1700 <-> 867, 1403
1701 <-> 225, 394
1702 <-> 841, 1709
1703 <-> 600
1704 <-> 128, 237, 791, 1894
1705 <-> 479, 1514
1706 <-> 1359, 1706
1707 <-> 657, 1502
1708 <-> 845, 853, 881, 1910
1709 <-> 668, 1702
1710 <-> 113
1711 <-> 1477
1712 <-> 774, 1688
1713 <-> 1806
1714 <-> 490, 1518
1715 <-> 1323, 1563
1716 <-> 17
1717 <-> 550
1718 <-> 215
1719 <-> 406, 1081
1720 <-> 1539, 1699, 1935
1721 <-> 325, 721, 897
1722 <-> 293, 903, 1142
1723 <-> 1498, 1642
1724 <-> 1724, 1836
1725 <-> 237, 1148
1726 <-> 1086, 1835
1727 <-> 961, 1117
1728 <-> 306, 595
1729 <-> 547, 1198, 1477
1730 <-> 513, 979, 1753
1731 <-> 918, 1409, 1601
1732 <-> 1251, 1732
1733 <-> 563, 813, 878, 1850
1734 <-> 581, 628, 901, 1410
1735 <-> 484
1736 <-> 1119, 1183
1737 <-> 1234, 1860
1738 <-> 1738
1739 <-> 794
1740 <-> 1017, 1258
1741 <-> 1572
1742 <-> 1177, 1653
1743 <-> 677
1744 <-> 282, 440, 631
1745 <-> 45, 1424
1746 <-> 63, 1405
1747 <-> 1992
1748 <-> 1878
1749 <-> 1424, 1753
1750 <-> 958, 1312
1751 <-> 1686, 1694
1752 <-> 1517
1753 <-> 1730, 1749
1754 <-> 174
1755 <-> 164, 303, 1280
1756 <-> 1486, 1952, 1966
1757 <-> 579
1758 <-> 500, 1550
1759 <-> 851, 1759
1760 <-> 1474
1761 <-> 248, 1761
1762 <-> 1454
1763 <-> 15, 472, 972
1764 <-> 455
1765 <-> 1306
1766 <-> 1477, 1665
1767 <-> 108
1768 <-> 1040
1769 <-> 1769
1770 <-> 1684
1771 <-> 1354, 1842
1772 <-> 833, 1487
1773 <-> 1222
1774 <-> 1931
1775 <-> 405, 791
1776 <-> 589, 1776
1777 <-> 607, 1541
1778 <-> 1778
1779 <-> 73, 608
1780 <-> 839
1781 <-> 428, 1385
1782 <-> 724, 1805
1783 <-> 948, 1262, 1411
1784 <-> 1784
1785 <-> 1155
1786 <-> 464
1787 <-> 690, 1381, 1825
1788 <-> 361, 662, 1631
1789 <-> 231, 1834
1790 <-> 39, 975
1791 <-> 263, 1988
1792 <-> 1297
1793 <-> 218, 1301
1794 <-> 104, 190, 919
1795 <-> 1003, 1033
1796 <-> 1796, 1904
1797 <-> 595, 973, 1465
1798 <-> 143, 529
1799 <-> 916
1800 <-> 849, 1816
1801 <-> 1522
1802 <-> 259
1803 <-> 218
1804 <-> 1644
1805 <-> 42, 364, 1010, 1782
1806 <-> 1713, 1954
1807 <-> 928
1808 <-> 800
1809 <-> 546, 1417, 1851
1810 <-> 1427, 1974
1811 <-> 1966
1812 <-> 1675
1813 <-> 941
1814 <-> 30, 1070
1815 <-> 244, 1200, 1965
1816 <-> 264, 1800
1817 <-> 425, 1393, 1573
1818 <-> 1355
1819 <-> 72, 1277
1820 <-> 1173
1821 <-> 1371
1822 <-> 354, 705, 1034
1823 <-> 659
1824 <-> 917, 1238
1825 <-> 1787, 1825
1826 <-> 1594
1827 <-> 1516
1828 <-> 918
1829 <-> 789, 985, 1120, 1980
1830 <-> 277, 757
1831 <-> 1309
1832 <-> 1077
1833 <-> 551
1834 <-> 970, 1789
1835 <-> 974, 1726, 1835
1836 <-> 221, 1724
1837 <-> 96, 578
1838 <-> 373
1839 <-> 792
1840 <-> 1840
1841 <-> 1088, 1393
1842 <-> 1771, 1842
1843 <-> 1386
1844 <-> 1124
1845 <-> 1018
1846 <-> 926
1847 <-> 754, 1304
1848 <-> 212, 492, 753
1849 <-> 839
1850 <-> 525, 1733
1851 <-> 1093, 1809
1852 <-> 1130, 1852
1853 <-> 702, 855
1854 <-> 1946
1855 <-> 267, 1118
1856 <-> 637, 849, 863, 1172, 1301
1857 <-> 74, 662
1858 <-> 1063
1859 <-> 1646
1860 <-> 792, 1737
1861 <-> 6, 183, 362, 719
1862 <-> 125, 794
1863 <-> 562, 711, 1314
1864 <-> 457
1865 <-> 438, 772, 1640
1866 <-> 142, 380, 582
1867 <-> 1867
1868 <-> 444, 1265
1869 <-> 1008
1870 <-> 1694
1871 <-> 226, 1375
1872 <-> 177, 595
1873 <-> 1518
1874 <-> 423
1875 <-> 1924
1876 <-> 1276, 1876
1877 <-> 1170, 1899
1878 <-> 282, 1274, 1676, 1748
1879 <-> 821, 1513, 1559
1880 <-> 793, 1974
1881 <-> 1257, 1396
1882 <-> 1049, 1287
1883 <-> 68, 740
1884 <-> 1222
1885 <-> 1934
1886 <-> 1575
1887 <-> 1966
1888 <-> 1015
1889 <-> 428
1890 <-> 1175
1891 <-> 833
1892 <-> 129
1893 <-> 84
1894 <-> 217, 706, 1704
1895 <-> 422
1896 <-> 1896
1897 <-> 393, 1421, 1450
1898 <-> 1519
1899 <-> 1877
1900 <-> 316, 1268
1901 <-> 1560, 1943
1902 <-> 1065, 1959
1903 <-> 1014, 1019, 1903
1904 <-> 1796
1905 <-> 1905
1906 <-> 1686
1907 <-> 347
1908 <-> 734, 1938
1909 <-> 372, 645
1910 <-> 1235, 1708
1911 <-> 811, 1106, 1376, 1911
1912 <-> 184, 420, 858
1913 <-> 126, 865
1914 <-> 479
1915 <-> 874, 1355, 1915
1916 <-> 1308
1917 <-> 1505
1918 <-> 13, 116, 294, 1131, 1946
1919 <-> 370, 1468
1920 <-> 917, 982
1921 <-> 553, 576, 1475
1922 <-> 989, 1490
1923 <-> 1612
1924 <-> 1655, 1875, 1935
1925 <-> 505, 1252
1926 <-> 1926
1927 <-> 256
1928 <-> 19, 247, 1054
1929 <-> 1975
1930 <-> 556
1931 <-> 187, 917, 1774
1932 <-> 866
1933 <-> 767, 1933
1934 <-> 1429, 1885, 1934
1935 <-> 381, 767, 1720, 1924
1936 <-> 583, 1176, 1317, 1936
1937 <-> 249, 1937
1938 <-> 1908
1939 <-> 157, 1379
1940 <-> 844, 1940
1941 <-> 1303
1942 <-> 1205, 1979
1943 <-> 761, 1901
1944 <-> 507, 722, 1059
1945 <-> 691
1946 <-> 457, 1004, 1854, 1918
1947 <-> 10
1948 <-> 494
1949 <-> 1949
1950 <-> 672
1951 <-> 1139, 1951
1952 <-> 122, 1471, 1756
1953 <-> 1577, 1953
1954 <-> 869, 911, 1806
1955 <-> 666, 819, 1231
1956 <-> 819, 1617
1957 <-> 1372
1958 <-> 629
1959 <-> 687, 1902
1960 <-> 492, 967
1961 <-> 561, 1176
1962 <-> 471, 1964
1963 <-> 612
1964 <-> 1962
1965 <-> 1815
1966 <-> 1534, 1756, 1811, 1887
1967 <-> 1441
1968 <-> 263
1969 <-> 706, 1066, 1597
1970 <-> 1150, 1651
1971 <-> 861
1972 <-> 1587
1973 <-> 1691
1974 <-> 60, 1579, 1810, 1880
1975 <-> 25, 138, 836, 1299, 1929
1976 <-> 675
1977 <-> 402, 630
1978 <-> 1103
1979 <-> 66, 1942
1980 <-> 382, 1829
1981 <-> 939, 1509
1982 <-> 427, 569
1983 <-> 638
1984 <-> 1603
1985 <-> 948
1986 <-> 1318
1987 <-> 467, 1190
1988 <-> 473, 1636, 1791
1989 <-> 462
1990 <-> 856, 1358, 1588
1991 <-> 1108, 1397, 1660
1992 <-> 235, 973, 1579, 1747
1993 <-> 972
1994 <-> 42, 93, 593
1995 <-> 773, 1499
1996 <-> 95, 1996
1997 <-> 510, 796
1998 <-> 626
1999 <-> 964, 1568
`;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Input: \`${input}\`
    Expected ${output}, got ${res}. `);
  }
}
