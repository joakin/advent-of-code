function fn(input) {
  const instructions = parse(input);
  const env = {};
  let maxNum = -Infinity;
  for (const i of instructions) {
    run(i, env);
    maxNum = Math.max(maxNum, getMax(env));
  }
  return maxNum;
}

function getMax(env) {
  return Math.max.apply(null, Object.values(env));
}

function run({ cmp, op }, env) {
  if (runIf(cmp, env)) {
    runOp(op, env);
  }
}

function runIf(cmp, env) {
  return eval(`${getRegister(cmp.reg, env)} ${cmp.fn} ${cmp.arg}`);
}

function runOp({ fn, reg, arg }, env) {
  const val = getRegister(reg, env);
  env[reg] = fn === "inc" ? val + arg : fn === "dec" ? val - arg : val;
}

function getRegister(name, env) {
  return env[name] || 0;
}

function parse(input) {
  return input
    .trim()
    .split("\n")
    .map(line => {
      const [reg, op, num, _, reg2, cmp, num2] = line.split(" ");
      return {
        op: { fn: op, reg, arg: parseFloat(num) },
        cmp: { reg: reg2, fn: cmp, arg: parseFloat(num2) }
      };
    });
}

test(
  `
b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10
`,
  10
);

let input = `
utc dec -736 if p > -7
tn inc -876 if qlm == 4
uz dec 294 if l < 10
a inc -904 if me >= -7
tn inc 622 if ppl <= 6
fr dec 17 if ufk > -10
hkt inc -511 if mdk == 0
t inc -290 if xxh <= -1
l dec 727 if ufk < 7
tn inc -576 if l == -727
z inc 464 if dea >= -2
ufk inc 755 if utc >= 735
utc dec -720 if qlm <= 5
a dec -277 if ufk <= 755
xxh dec -640 if u == 0
hkt inc 875 if m != -6
ny inc -351 if p >= -4
l inc 674 if dea > -7
ufk dec -826 if p == 0
mdk inc 377 if utc == 1456
ppl dec 793 if q <= 4
z dec 114 if mdk > 368
ny dec -412 if ny >= -353
utc dec 176 if a != -620
utc dec -610 if p <= 1
l inc -541 if xxh <= 635
l inc 102 if ny < 66
qlm dec 700 if l >= 43
dea dec -202 if tn <= 38
a inc 785 if a <= -629
ny inc 414 if fr <= -21
l inc 250 if hw <= -10
l inc -516 if l > 41
utc dec 358 if mdk > 373
p dec -38 if z == 350
uz dec -71 if a == -627
t inc -713 if fr > -13
l inc 242 if tn <= 53
dea dec 600 if hw <= 8
hw dec -92 if fr != -19
hkt dec 67 if l <= -232
qlm dec 523 if hw == 92
utc dec -608 if q != -8
m dec 314 if me < 9
xxh inc -937 if xxh >= 638
qlm dec 494 if m <= -313
fr dec -590 if m <= -306
utc inc -539 if tn == 46
hkt dec 831 if p >= 43
dea inc 510 if a > -627
p inc 319 if m > -305
m inc 736 if xxh >= -302
ppl inc -712 if mdk == 377
ny inc 21 if p <= 41
hw inc -569 if hw != 92
ppl inc 150 if dea < -595
xxh dec -953 if z != 356
ppl inc 578 if qlm <= -1714
uz dec -733 if p >= 35
xxh inc 100 if xxh >= 660
hw dec -491 if ppl < -767
t dec -64 if z < 347
me dec 802 if dea > -601
hkt inc 431 if hkt > 359
utc inc -600 if q != 0
u inc -223 if tn < 48
tn inc 443 if uz <= 513
l inc -349 if ny == 82
utc inc -499 if xxh <= 661
a inc 600 if hw >= 578
z dec -636 if utc > 1099
tn inc 75 if z == 986
hkt dec 364 if mdk < 377
ufk inc 249 if fr == 573
l inc -429 if uz > 507
hw dec -621 if ppl == -778
l inc -620 if z != 980
l inc 319 if tn == 564
q dec -478 if ny <= 82
utc dec -169 if uz < 519
fr inc 124 if dea >= -607
m dec -674 if p != 28
m dec 744 if p != 44
l dec -620 if hw <= 582
utc dec -950 if p >= 37
uz dec -122 if xxh < 660
l inc -563 if z < 996
hkt inc -514 if m <= 361
l dec 525 if mdk == 377
xxh inc -666 if u != -228
a inc 934 if a <= -23
a inc 817 if xxh >= -11
me inc 450 if tn < 563
hw inc 475 if xxh < -1
fr dec 493 if xxh < -8
uz inc -985 if qlm > -1724
ppl inc 856 if qlm >= -1720
hw inc -368 if me > -804
ny dec -219 if p != 38
u inc 1000 if ny > 79
q dec 551 if hkt == 281
uz dec 317 if dea >= -600
uz inc -916 if qlm <= -1726
hkt dec 915 if mdk != 380
mdk inc 484 if l == -2392
xxh inc 326 if dea > -607
u dec -803 if me > -811
q dec 689 if tn != 565
hw dec 908 if p == 38
z inc -173 if ppl > 72
z dec 371 if tn < 565
p inc 185 if u > 1571
a inc 490 if mdk != 864
tn dec -27 if u == 1580
qlm inc 77 if m > 345
p dec 364 if ufk <= 1836
dea dec 308 if me == -802
a inc -345 if hw == -218
ny inc 603 if p <= -138
fr inc -4 if utc > 2217
me inc 118 if hkt <= -626
hw inc -590 if z < 443
me dec 279 if q <= -756
me inc -50 if dea == -908
ppl inc 708 if u <= 1586
t inc -429 if mdk >= 854
m dec -372 if uz > -676
fr dec -840 if ppl == 787
qlm dec -442 if tn != 584
u dec 227 if l == -2402
m inc 279 if z <= 446
xxh inc -951 if t > -421
t dec 530 if xxh != 317
fr inc -621 if mdk <= 869
a dec 480 if fr < 424
q inc 988 if l == -2384
u inc 313 if q < -757
hw dec 237 if hkt == -634
mdk dec 945 if t > -969
me inc 631 if ny >= 679
ny dec -740 if uz == -670
t inc -310 if utc > 2213
p dec -453 if utc >= 2218
mdk inc -266 if hw == -1045
a inc -887 if qlm == -1198
ppl dec 521 if t >= -1270
dea dec -685 if xxh != 310
l inc -472 if m < 1013
ufk inc -920 if l <= -2860
u dec -503 if me <= -373
ufk inc 547 if m > 998
l inc -287 if p <= 309
qlm dec -173 if q <= -755
u dec -928 if z > 437
hw inc 43 if hkt < -626
utc inc -694 if me == -382
fr dec -938 if tn > 584
q inc 9 if mdk == -350
dea inc 119 if m < 1012
ny dec 210 if ufk <= 1465
xxh inc 352 if q > -758
dea inc 483 if hkt >= -639
tn inc -652 if t >= -1266
ufk inc 674 if ny >= 1207
ppl dec 311 if z >= 442
qlm inc 655 if m < 1005
z dec 580 if uz < -661
utc inc -977 if ppl <= -36
xxh inc -25 if l == -2864
me dec 252 if uz > -674
mdk dec -98 if z <= -129
p inc -276 if utc < 541
hw dec 796 if xxh <= 649
q inc -726 if z != -137
fr dec 433 if ufk <= 2140
hw inc -701 if z < -131
hw dec 587 if mdk <= -244
ny dec -734 if mdk <= -249
qlm dec -311 if utc != 546
ufk dec -405 if q > -1481
p dec 97 if t != -1275
t dec 597 if qlm >= -49
ufk dec 389 if uz < -660
l inc 765 if a < 504
fr dec -948 if tn >= 586
qlm dec 79 if m > 997
ny inc 764 if p < 225
a dec 419 if m != 1003
q dec -860 if q != -1475
fr inc 426 if hw > -3080
ufk inc 0 if ppl != -36
utc inc 939 if p >= 206
m inc 830 if xxh < 650
m inc -511 if hw > -3091
u inc -720 if qlm > -134
dea inc -147 if a <= 503
u inc -322 if tn != 591
ny dec 900 if ny != 2713
ny inc -737 if me == -634
fr inc -494 if l != -2097
mdk inc -363 if ny != 1976
l inc 991 if hkt > -636
l dec 179 if dea != 232
q dec -264 if ny != 1977
l dec -976 if uz > -667
tn inc 791 if hkt > -637
ppl dec 225 if utc < 1495
uz dec -527 if m > 1317
a inc -644 if me < -624
uz inc 160 if q >= -361
u inc 577 if xxh > 650
q inc 124 if xxh < 653
l inc 268 if dea > 222
hw inc 795 if uz < 10
uz dec 934 if uz < 26
tn inc 966 if ufk == 2150
me dec -71 if p <= 222
me inc 186 if ppl > -270
m dec -377 if xxh <= 649
ny dec 275 if mdk > -248
qlm dec -574 if fr != 1371
utc dec 78 if xxh > 638
l inc 494 if u > 3315
tn dec -595 if qlm > 435
tn dec 113 if a <= -140
fr inc -610 if ufk < 2148
uz inc -791 if u != 3334
uz inc 356 if t < -1276
l dec -463 if utc < 1414
tn inc -266 if a < -137
p inc 747 if utc >= 1402
z inc -671 if hkt == -634
tn inc -441 if u != 3324
fr inc 172 if hkt > -638
tn dec -558 if qlm < 439
a dec -234 if tn <= 2155
t inc -325 if l >= 126
t dec -685 if l > 110
ufk inc -912 if z < -805
ufk dec 0 if fr < 941
fr dec 276 if a == -142
xxh inc -972 if p < 967
ufk inc 188 if mdk >= -245
me inc -255 if t > -583
qlm inc 451 if uz > -1710
fr inc -921 if z >= -814
q inc 272 if uz < -1705
u dec 216 if p <= 956
a inc 30 if z > -812
tn dec -202 if dea == 232
m inc 792 if ny != 1976
uz dec -867 if z == -809
ppl inc -765 if qlm != 894
hkt inc 301 if xxh < -322
p dec -839 if dea == 232
utc dec -920 if m > 1694
a inc -206 if mdk == -252
ny dec -545 if ppl <= -1029
me dec -860 if q >= 39
ufk inc 644 if tn <= 2359
hw dec 959 if t == -584
qlm dec 667 if xxh != -321
ufk inc 598 if a > -323
ppl dec -514 if hw <= -4039
uz dec 708 if p == 1801
hw inc -902 if hkt != -333
qlm dec 249 if tn != 2366
mdk inc -570 if z > -812
fr inc -47 if tn > 2350
me inc -62 if hw != -4037
qlm dec 796 if dea > 239
q dec -201 if ppl == -521
z inc 265 if ufk != 2481
hw dec 597 if q >= 239
ny dec 417 if uz > -1540
hkt dec -866 if m <= 1704
m inc 103 if m == 1699
ufk inc -733 if qlm <= -28
mdk dec -416 if z > -546
ufk dec 477 if z < -543
l dec 224 if m < 1799
q inc 646 if u < 3327
hkt dec -501 if qlm != -29
ppl inc 321 if p > 1797
a dec 678 if ufk == 1268
u inc -878 if fr > -302
t dec 523 if uz != -1552
mdk dec -490 if fr != -304
p dec -603 if ufk >= 1264
tn inc -234 if qlm > -33
mdk dec -51 if q <= 881
a inc 672 if me < 244
z dec 473 if m != 1797
mdk dec -727 if utc == 2331
ppl inc -59 if me == 235
a dec -937 if uz <= -1547
uz dec -352 if m >= 1798
fr inc 693 if utc < 2333
t inc 493 if hkt != 526
hw inc 86 if hkt >= 533
t dec 49 if ny != 2512
utc inc 273 if me != 235
xxh inc -871 if dea == 232
z dec -707 if dea != 234
mdk dec 362 if ny > 2528
tn inc -825 if t <= -658
uz dec 655 if xxh < -1195
dea dec 231 if me < 242
mdk dec -260 if xxh != -1200
ppl dec -842 if mdk != 321
l inc -957 if qlm == -23
m dec 393 if ny > 2515
ufk inc -648 if me < 243
dea inc -251 if fr < 399
a inc 772 if mdk < 323
hkt inc 997 if fr > 383
l dec 13 if dea == -240
hkt dec -935 if tn >= 1291
uz dec 992 if u < 3324
hw dec -970 if t <= -655
m inc 132 if mdk == 321
hw inc 908 if hkt > 2464
me inc -975 if l != 119
ny dec -76 if dea >= -251
ppl dec -844 if u >= 3322
qlm dec 286 if ny >= 2597
xxh dec 903 if uz != -1843
u dec 992 if hkt <= 2471
tn dec -663 if me > -735
ny dec -598 if ppl >= 583
m inc 84 if mdk != 318
ufk inc -260 if t <= -668
u dec -443 if fr >= 388
l dec -116 if hw <= -2670
m inc 816 if dea < -240
t inc 319 if mdk != 317
me inc -681 if z < -301
m inc 451 if uz != -1845
t inc 472 if mdk <= 330
qlm inc -125 if z == -310
ufk inc -419 if p > 2401
l dec -7 if xxh <= -2096
m dec 325 if fr < 380
mdk inc -391 if hkt <= 2465
xxh inc 491 if z != -315
p inc -832 if utc > 2324
t dec 304 if a > 2056
xxh dec 107 if dea < -243
l inc 220 if hw < -2681
p dec -316 if p > 1565
mdk inc 333 if utc == 2332
ppl dec 961 if a >= 2055
fr inc 230 if z <= -310
hkt dec -715 if fr >= 615
l inc -466 if p <= 1888
qlm inc 185 if xxh >= -1725
u inc -710 if t == -168
z inc 15 if ppl < -371
utc inc 422 if hw < -2683
fr dec 688 if t > -181
mdk dec 606 if a < 2064
me dec 323 if z <= -289
ppl dec 150 if uz > -1844
t inc 617 if q > 879
hw inc -212 if qlm != -255
a inc 338 if m <= 2901
utc dec 545 if l < -228
tn dec 407 if z > -303
mdk dec 784 if ppl >= -378
q inc -352 if z == -295
uz inc -644 if ppl <= -372
fr dec 209 if dea < -242
tn dec -605 if p >= 1879
hkt dec 77 if mdk != -1470
hw dec -280 if hw < -2676
ufk dec 375 if qlm >= -248
p inc -958 if xxh <= -1710
a inc 653 if z != -295
utc inc 493 if qlm == -255
xxh dec -649 if q > 530
z inc -993 if me != -1749
t inc 119 if mdk <= -1451
ufk dec 883 if utc <= 2825
m inc -545 if qlm == -255
tn inc 626 if dea != -253
tn dec -111 if p > 923
tn inc -719 if u <= 2780
u inc 976 if u != 2767
z inc -495 if ppl != -368
z dec 481 if dea != -246
ppl dec 539 if ppl >= -381
uz dec 213 if uz >= -2504
a inc -9 if tn < 1509
ny dec 719 if u < 3757
uz inc 718 if hkt <= 3103
ny dec 378 if u >= 3748
me dec 163 if xxh >= -1076
t dec -569 if hkt > 3105
fr inc -280 if a <= 2407
l dec -908 if q != 527
a inc -13 if me < -1912
dea dec 584 if mdk <= -1464
hw inc -988 if l >= 692
tn dec 847 if mdk < -1451
hw inc 568 if utc > 2822
t dec 133 if tn < 659
z inc 271 if q <= 539
mdk inc -33 if q <= 545
l inc 185 if dea >= -259
xxh inc 36 if xxh != -1064
a dec 70 if xxh >= -1042
z inc 956 if p > 931
utc inc -778 if dea != -244
dea inc -868 if z > -1985
t dec -872 if u >= 3750
ppl dec 420 if u < 3747
dea inc 372 if xxh >= -1043
hkt dec 32 if u != 3759
t inc 23 if uz == -1985
ny dec 106 if ufk == -683
dea dec -794 if t == 1441
hkt dec -233 if t < 1435
q dec -186 if ufk == -683
u dec 328 if a >= 2331
xxh inc -179 if z <= -1991
utc inc -614 if qlm > -254
fr dec 136 if m != 2349
uz inc -942 if uz >= -2000
me inc 391 if m >= 2340
l dec -448 if utc > 2054
me dec -64 if fr > -696
utc dec -621 if qlm > -256
z dec -622 if dea == 132
a dec -228 if ny == 1992
qlm inc 957 if a <= 2563
t dec 178 if hkt == 3304
me dec -583 if uz >= -2940
xxh dec 22 if ny >= 1988
ufk dec 294 if fr <= -690
l dec 666 if a != 2559
tn dec 135 if qlm >= 704
hkt inc 524 if q == 722
uz inc 448 if dea > 118
q inc 299 if hkt >= 3832
u dec 502 if p <= 931
qlm dec -530 if l > 863
m dec -677 if m > 2344
uz inc -254 if qlm < 1236
p inc 164 if tn != 663
ny inc -208 if me >= -874
hw inc 688 if ny >= 1775
q dec -90 if ny < 1787
qlm inc 602 if l <= 874
xxh inc 442 if uz == -2739
mdk inc 235 if xxh == -793
a dec -225 if u > 2911
m dec -706 if hkt <= 3831
a dec 229 if ufk <= -977
ppl dec 256 if xxh == -788
t inc 1000 if p < 1087
hw inc -970 if a <= 2564
hw dec 398 if ny >= 1779
ppl inc 984 if ufk != -968
utc inc -979 if ufk != -967
hw dec -383 if utc > 1678
p dec 283 if xxh == -793
hw inc -434 if ny <= 1786
u dec -226 if l == 868
l dec 943 if tn > 675
xxh inc -64 if p >= 807
ppl inc 577 if fr == -694
dea inc 629 if ppl > 636
u dec 113 if ufk != -984
a inc 482 if dea < 760
dea dec -232 if xxh == -857
ny inc -952 if ufk < -967
hkt inc 159 if p < 811
z inc 530 if mdk == -1258
m dec -745 if dea <= 988
m inc -554 if mdk >= -1258
fr inc -798 if xxh >= -864
q dec -139 if utc > 1690
m dec 962 if p < 808
a inc -409 if u <= 2809
u dec -30 if ppl > 643
uz dec 502 if u < 2834
l dec -653 if qlm == 1834
qlm inc 732 if me <= -869
tn dec 200 if fr >= -1495
ny inc -26 if a <= 2632
hkt inc -601 if ppl < 656
t inc -277 if l <= 1521
a inc -86 if xxh < -847
hkt dec -42 if qlm >= 2566
dea dec 218 if p >= 807
ufk dec 870 if q > 815
z inc 141 if z == -1463
l dec 873 if mdk > -1263
u dec 897 if ppl <= 653
dea inc -239 if p < 809
xxh inc 525 if uz >= -2746
dea inc 827 if mdk > -1266
dea dec -988 if ppl != 636
ny dec 330 if m < 3923
q inc -413 if hw > -2554
hw inc 983 if mdk < -1250
mdk dec 932 if hw >= -1573
fr inc -984 if u >= 1934
xxh dec -344 if qlm > 2566
p dec 189 if tn != 464
hw inc -986 if ny < 473
m dec 233 if z > -1323
mdk inc -803 if a >= 2542
u dec -858 if dea > 2570
me dec 215 if dea >= 2590
q inc 945 if dea >= 2589
z inc 55 if ny >= 471
xxh dec -63 if a <= 2544
fr dec -864 if ufk != -969
me dec -330 if me <= -861
ufk inc -96 if dea <= 2586
fr inc 348 if uz >= -2739
qlm inc -249 if q <= 805
qlm dec -752 if uz < -2736
hkt dec -389 if q < 818
dea inc -169 if ppl == 646
xxh inc -689 if z <= -1268
tn inc 911 if m <= 3697
ppl inc -390 if a != 2551
a inc 87 if ufk != -1074
z inc 413 if ppl == 262
p inc 476 if mdk < -2052
p dec -570 if z != -1257
uz inc 266 if hkt <= 3654
ppl inc -29 if ny <= 474
ny inc -154 if ppl <= 264
ufk inc -614 if uz < -2741
dea dec -627 if xxh == -269
me inc 553 if p < 1670
q inc -413 if a > 2636
q dec 754 if utc == 1688
p dec 857 if m == 3688
dea dec 883 if ufk >= -1074
uz inc -485 if l == 647
dea dec -979 if me <= 15
hkt dec 738 if l > 642
xxh inc 298 if tn < 1372
uz dec 235 if l != 651
m dec -170 if tn > 1379
hkt inc 902 if a > 2619
hkt inc 354 if hw < -1573
qlm dec 512 if uz != -3462
u inc -676 if t != 984
a inc 635 if z == -1267
ppl inc -756 if q <= 60
t inc 662 if mdk == -2061
qlm dec -900 if p > 807
z dec 877 if hkt == 4176
a dec -841 if uz > -3466
dea inc 141 if u != 2115
q inc 917 if dea != 3270
ppl inc -582 if tn >= 1375
dea dec -309 if xxh < -271
utc inc -353 if hw <= -1578
mdk dec 643 if q != 979
hw inc -595 if fr != -1254
xxh inc 736 if ny != 325
hkt inc -692 if z == -2144
p dec 500 if hw < -2170
uz dec -168 if ppl >= -1083
u dec 419 if hw > -2181
fr inc -653 if u != 1704
m inc -677 if qlm < 3716
qlm dec -341 if u >= 1704
me dec -926 if utc >= 1329
qlm dec -462 if hw != -2174
fr dec 604 if hw != -2173
p dec -826 if uz >= -3291
hkt inc -855 if ny <= 315
utc dec -647 if dea > 3269
xxh inc 483 if z < -2143
l dec 93 if utc >= 1979
dea inc -680 if fr != -1264
me inc -293 if ufk != -1063
uz dec 279 if t == 1636
xxh inc -145 if u <= 1705
q inc 269 if a > 4097
ufk dec 734 if l >= 552
z dec -270 if utc > 1977
tn inc -154 if t <= 1645
mdk inc 455 if uz < -3283
dea inc 350 if utc < 1992
hw dec -300 if ppl <= -1085
ufk inc 337 if u >= 1699
ppl inc -634 if l != 558
t dec -583 if xxh == 805
t dec 384 if dea >= 3620
p dec -873 if m == 3011
ufk inc -710 if uz < -3287
hw inc -808 if hkt <= 3490
hw dec -464 if u > 1702
m dec -102 if mdk > -2256
fr dec 579 if t > 1829
dea dec -839 if qlm < 4519
ufk dec -741 if l <= 545
me inc -520 if z <= -1865
mdk dec 824 if hkt < 3493
qlm inc -703 if q <= 1243
t dec 284 if qlm < 4517
fr dec -527 if ufk == -2183
me dec -995 if xxh == 805
utc inc 498 if hw < -2525
hw dec -350 if ufk <= -2174
dea inc 143 if mdk == -3073
utc dec 812 if l < 552
ufk dec 679 if hkt <= 3490
a inc -464 if ny < 317
ufk inc 116 if hkt > 3483
hw inc 77 if mdk < -3063
hkt dec 851 if ny < 329
uz dec -37 if uz != -3287
hkt dec 45 if xxh == 805
uz dec -682 if fr <= -1850
dea inc 695 if hkt > 2582
p dec 857 if hkt <= 2592
fr inc 114 if dea < 5309
q dec -714 if p < 1158
utc dec 896 if ufk != -2752
uz dec -937 if ufk < -2741
p inc -807 if tn <= 1232
ufk inc 788 if fr >= -1730
ufk dec 519 if l > 558
ufk dec 142 if tn < 1227
ppl dec -561 if ufk > -2103
dea dec 463 if fr >= -1728
m inc 139 if tn != 1218
fr dec -606 if q >= 1951
qlm inc 934 if fr >= -1122
a dec -910 if xxh < 815
hw dec -564 if a <= 5015
u dec -648 if hw > -1532
hkt dec 601 if hkt <= 2588
q dec -480 if hkt < 1997
uz dec 596 if hkt >= 1983
p dec -971 if u > 2347
z dec 790 if m == 3252
fr inc 281 if hw <= -1517
uz dec 636 if hw == -1516
l dec -582 if ny > 315
ny inc 202 if dea < 5306
mdk inc -251 if ppl > -1147
me dec 826 if p == 1317
qlm dec -11 if p == 1317
z inc -166 if a >= 5011
ny inc 455 if l >= 1127
utc dec -156 if qlm < 4525
q dec -147 if l <= 1129
ufk inc 36 if ny < 978
ppl dec -871 if uz < -2907
fr inc 776 if t >= 1548
qlm inc -510 if u != 2352
z inc 373 if dea >= 5294
uz dec -975 if fr <= -59
fr dec -670 if z < -2459
utc dec 322 if q != 2428
l dec 3 if ppl != -282
uz dec 728 if ny > 971
ny dec -396 if p > 1308
a inc -502 if mdk <= -3067
ny dec -492 if uz <= -2666
ppl inc -720 if t >= 1554
uz inc -323 if hw != -1533
ppl inc 805 if m >= 3252
p inc 310 if qlm != 4520
m dec 743 if dea >= 5299
ppl inc 847 if t <= 1546
p dec 89 if u != 2352
a inc 472 if z < -2455
me dec 301 if utc > 914
ppl inc 740 if q < 2434
ufk inc -633 if l > 1138
ppl inc -51 if hw > -1529
u dec -714 if fr >= -56
z dec 510 if me >= 0
l inc 664 if mdk != -3073
qlm dec -742 if l < 1142
ny dec -473 if tn == 1225
fr inc -805 if ufk > -2093
xxh dec -151 if fr > -74
hw inc -734 if hw <= -1528
p dec 976 if uz >= -2990
mdk inc 523 if m == 2509
u dec -176 if utc < 923
me inc 766 if hkt != 1987
ppl dec -392 if mdk != -2557
l inc -756 if u > 2527
fr inc -990 if xxh > 955
l inc 901 if ufk > -2100
xxh dec -856 if ppl >= 137
hkt dec -989 if t == 1561
p dec 846 if p > 339
hkt inc -429 if dea != 5302
u dec 534 if hw <= -1517
uz dec 178 if xxh > 1803
z dec 655 if m <= 2516
xxh inc -340 if ny < 2334
u inc -545 if dea != 5295
p inc -996 if uz > -3172
dea dec -140 if hkt != 1984
q inc -764 if a <= 4985
z inc 263 if uz == -3167
l dec -929 if a <= 4985
p inc -214 if uz >= -3170
uz inc 393 if hw >= -1533
tn inc -624 if me == -5
me inc -474 if ufk != -2106
ppl dec 475 if l <= 2214
qlm inc 417 if u != 1449
p inc -490 if qlm > 5257
a inc 526 if u <= 1452
ny inc -347 if u <= 1454
p dec 397 if uz < -2765
t dec 548 if u <= 1448
ufk dec 514 if ufk > -2102
l dec 744 if uz != -2782
fr dec 810 if ppl == -333
ppl dec -338 if qlm > 5258
qlm dec 272 if q > 1665
m dec 521 if ufk >= -2614
uz dec 558 if me < -477
p inc -632 if m >= 1987
dea inc -237 if fr != -1864
mdk dec 3 if utc > 917
l inc -406 if dea >= 5213
dea inc -268 if z == -2849
utc inc 675 if q > 1664
me dec -905 if p < -3230
ufk inc -799 if u != 1439
xxh inc 718 if hkt != 1987
tn inc 156 if qlm >= 4984
p inc -680 if fr == -1866
ppl inc 423 if hkt >= 1980
p inc -759 if ufk != -3405
me inc 496 if qlm <= 4995
m dec 111 if mdk != -2545
u dec 351 if z < -2843
uz dec -405 if xxh != 1804
ny dec -634 if utc == 1592
qlm inc 294 if l == 1463
xxh inc -994 if a <= 5511
a inc 460 if uz == -2927
t inc -313 if u != 1093
l inc 254 if hkt > 1978
dea dec -290 if ppl <= 429
ny inc 190 if z <= -2844
ppl inc -865 if dea == 5220
z dec 372 if utc <= 1595
l dec -563 if u < 1104
z inc -283 if xxh < 821
q inc 967 if utc == 1595
q dec -621 if ppl > 433
l dec -221 if tn > 757
l dec -935 if a >= 5962
l inc -62 if l != 3225
hkt dec -654 if t > 1240
dea inc 87 if p == -4673
l dec -166 if u <= 1098
dea dec 183 if hw != -1529
q dec 70 if p == -4667
a dec -673 if ny < 2188
q dec 295 if mdk != -2563
m dec -26 if a == 6644
qlm inc 378 if xxh != 816
a dec 174 if l <= 3320
fr inc 117 if dea >= 5131
hkt dec -732 if hkt >= 2634
ufk inc -838 if mdk != -2547
ny inc -964 if a >= 6461
hw dec -264 if a == 6470
z dec -834 if ufk >= -4251
l inc -658 if m > 1897
xxh inc 400 if fr >= -1753
hw dec 380 if hw <= -1265
t inc -608 if utc < 1597
ppl dec 352 if a > 6467
l dec -355 if utc > 1591
l dec 846 if dea <= 5128
ppl dec 756 if fr < -1746
utc dec 259 if p == -4673
tn dec 160 if hw < -1257
t inc -625 if t != 640
xxh dec 804 if dea > 5130
ny dec 227 if z <= -2665
ppl dec 306 if uz != -2922
q dec -671 if hw < -1262
tn dec 149 if ufk == -4248
p dec -583 if mdk == -2553
hw inc 312 if uz <= -2919
hkt inc 111 if tn >= 456
q dec -23 if uz > -2918
hw inc -291 if l > 3008
me inc -744 if utc > 1327
uz dec 188 if utc >= 1336
hw dec -575 if z < -2663
ppl dec 977 if ny != 988
l dec -84 if dea < 5135
p inc 905 if uz == -3115
m inc 636 if m == 1903
hkt dec 95 if p < -3178
u inc 249 if utc > 1331
uz dec -196 if qlm == 5662
hkt inc -621 if fr > -1750
z inc -859 if l < 3093
l inc -789 if ppl > -1957
me inc 916 if tn >= 457
uz dec -115 if xxh != 406
z dec -353 if z <= -2669
hw inc -965 if ppl != -1960
t inc 333 if qlm == 5662
t dec 860 if z == -2310
p dec -841 if l > 3104
qlm inc 225 if t == 341
utc inc -937 if p <= -3185
qlm inc -191 if xxh < 424
m dec 607 if q != 2354
uz inc 807 if p >= -3178
fr dec -431 if uz == -2804
ppl dec -312 if t <= 341
a dec -764 if mdk >= -2557
utc dec 505 if a >= 7228
ufk dec -148 if tn != 449
utc dec -371 if utc != -100
dea dec -11 if utc < 272
ufk inc 329 if utc != 261
utc dec -484 if z <= -2312
m dec 784 if ppl == -1651
xxh dec 669 if m <= 1147
xxh inc -798 if me == 178
p dec -832 if ppl == -1651
ufk inc 266 if fr > -1318
a inc -993 if fr >= -1319
xxh inc 25 if ppl != -1652
u inc -353 if hw == -1631
p inc -338 if q >= 2340
p dec 517 if utc >= 741
ppl dec -221 if dea > 5137
hw dec 949 if mdk < -2544
tn inc 201 if ufk != -3781
mdk inc 855 if t > 334
m dec 604 if q <= 2353
me inc 268 if tn <= 644
tn inc -372 if m > 540
l dec 275 if qlm >= 5687
mdk dec -13 if p == -3199
z dec -725 if tn > 286
dea inc -843 if dea == 5142
hw inc -603 if a >= 6234
ppl inc 850 if tn <= 279
l inc -601 if uz == -2804
m inc 10 if z >= -2319
fr inc -412 if xxh != -351
me dec 726 if tn >= 277
ny dec -719 if me < -544
hw dec 413 if q > 2349
a dec -229 if hkt == 2651
t inc 620 if t != 347
uz inc -216 if t <= 963
fr inc 614 if me != -549
xxh inc 536 if z < -2309
q inc 974 if me < -548
q inc -131 if ny == 1711
tn dec 110 if tn > 274
l inc 47 if p == -3208
xxh inc -872 if dea >= 4295
tn inc -667 if tn <= 169
q dec 562 if mdk >= -1700
a inc -16 if xxh != -685
hw dec 649 if xxh == -695
ufk inc 239 if l != 2268
t dec 935 if ppl <= -576
m dec 1000 if fr > -1120
hkt inc -167 if xxh == -695
ny inc 926 if uz > -3027
m inc -729 if xxh > -693
m inc -677 if a > 6221
p dec -412 if qlm >= 5691
m dec -678 if ufk < -3526
ppl inc 206 if z < -2308
m inc -961 if m != -445
t inc -989 if mdk > -1701
ppl dec 43 if q <= 1654
xxh inc -619 if ny == 2637
ppl dec 168 if xxh < -1312
t inc 191 if xxh > -1320
me inc 387 if hw >= -3826
p inc 517 if q <= 1648
q dec 577 if ppl > -589
u dec -841 if fr <= -1115
dea dec -791 if p <= -2793
hkt inc 216 if tn != -500
uz dec -333 if hkt >= 2490
dea inc 46 if a > 6217
mdk inc -168 if fr > -1117
t inc -606 if fr > -1122
me inc 662 if hkt != 2491
uz dec 384 if p > -2806
uz inc -848 if xxh < -1308
ny inc 617 if tn < -497
fr dec -359 if utc != 750
m dec -911 if ufk <= -3530
ppl dec -190 if mdk != -1858
u dec -400 if t > -1388
me inc -381 if u == 2235
hw inc -548 if m == 466
qlm inc -940 if mdk <= -1860
dea dec 180 if z <= -2316
hw inc 17 if tn != -504
fr dec -769 if me > -277
ppl inc -630 if hkt == 2482
hw inc 825 if xxh == -1314
utc dec -38 if hw < -3529
q dec 851 if uz <= -3918
me dec -417 if me > -274
q inc 505 if ny < 3248
ny dec 299 if fr > 9
utc dec 996 if z == -2317
z inc 157 if ppl == -395
mdk inc -11 if mdk == -1866
t dec -222 if ny <= 2964
q dec 1000 if u <= 2244
tn dec -704 if ppl >= -399
l inc 666 if utc > -212
q inc 890 if dea >= 4951
tn inc 255 if xxh > -1324
me dec -317 if p == -2796
utc dec 651 if m >= 460
dea dec -945 if q > 110
ny inc -755 if z > -2169
a inc 1 if utc < -858
uz dec 840 if utc >= -861
l dec 131 if ufk != -3542
hkt inc -442 if u > 2236
mdk dec -156 if hw == -3531
ufk dec 380 if uz != -4756
xxh dec 198 if p == -2796
fr inc -946 if z != -2165
q dec -736 if dea < 5898
qlm inc -284 if fr == -934
z dec 895 if t < -1152
me dec -370 if l != 2806
a dec -949 if dea >= 5906
l inc -913 if uz <= -4758
uz inc 15 if t > -1158
m inc 535 if xxh > -1516
me inc -896 if u > 2228
m inc -821 if fr == -934
me dec 754 if m <= 189
xxh inc 685 if p >= -2802
utc inc 149 if uz == -4744
ufk dec -486 if hw <= -3535
tn dec 617 if u != 2228
fr inc -971 if ny < 2191
l dec 933 if z < -3053
q dec 269 if qlm > 4467
me inc 449 if l < 968
utc inc -359 if l <= 965
tn inc -465 if p <= -2798
xxh dec -811 if t <= -1149
fr dec -106 if m <= 182
uz inc 603 if p < -2794
uz inc 310 if z <= -3064
ny inc -764 if hw >= -3538
mdk dec -843 if ufk < -3416
a inc 49 if tn != -158
dea inc 129 if ufk >= -3433
ny dec 515 if ny < 1438
q inc -603 if ufk < -3419
tn dec 470 if hkt < 2496
m inc -669 if utc <= -1067
dea inc 401 if ny >= 912
p inc 129 if tn >= -631
p dec -708 if hw != -3540
dea inc 932 if mdk == -1024
tn dec -244 if ufk == -3426
ny dec 632 if utc >= -1075
ny dec -958 if z > -3063
me dec -67 if hkt == 2490
fr inc 431 if mdk > -1038
ny dec -435 if z < -3052
ny inc 997 if ny != 1686
dea inc 397 if hw < -3537
hw dec 232 if xxh == -16
q inc 826 if p > -1960
q inc -807 if z < -3045
uz dec -645 if a < 6227
me inc -725 if qlm < 4477
xxh dec -440 if z == -3055
mdk inc 647 if m <= -489
t dec -497 if dea != 6827
hkt dec -874 if hkt == 2490
`;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Input: \`${input}\`
    Expected ${output}, got ${res}. `);
  }
}
