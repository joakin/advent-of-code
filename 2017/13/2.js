function fn(input) {
  const layers = parse(input);
  let caught;
  let i;
  let delay = -1;

  do {
    delay++;

    caught = false;

    for (i = 0; i < layers.length; i++) {
      if (layers[i] != null) {
        const range = layers[i];
        if (scannerAtZero(range, i + delay)) {
          caught = true;
          break;
        }
      }
    }
  } while (i < layers.length - 1 || caught);

  return delay;
}

function scannerAtZero(range, t) {
  return t % (range + (range - 2)) === 0;
}

function parse(input) {
  const firewalls = input
    .trim()
    .split("\n")
    .map(row => row.split(": ").map(parseFloat));

  return firewalls.reduce((layers, [depth, range]) => {
    layers[depth] = range;
    return layers;
  }, Array(firewalls[firewalls.length - 1][0] + 1).fill(null));
}

test(
  `
0: 3
1: 3
`,
  1
);
test(
  `
0: 3 1: 2
4: 4
6: 4
`,
  10
);

let input = `
0: 3
1: 2
2: 4
4: 6
6: 5
8: 8
10: 6
12: 4
14: 8
16: 6
18: 8
20: 8
22: 6
24: 8
26: 9
28: 12
30: 8
32: 14
34: 10
36: 12
38: 12
40: 10
42: 12
44: 12
46: 12
48: 12
50: 14
52: 12
54: 14
56: 12
60: 14
62: 12
64: 14
66: 14
68: 14
70: 14
72: 14
74: 14
78: 26
80: 18
82: 17
86: 18
88: 14
96: 18
`;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Input: \`${input}\`
    Expected ${output}, got ${res}. `);
  }
}
