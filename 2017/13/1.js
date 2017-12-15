function fn(input) {
  const layers = parse(input);
  let caught = 0;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i]) {
      const { scanner, range } = layers[i];
      if (scanner === 0) caught += i * range;
    }
    step(layers);
  }

  return caught;
}

function step(layers) {
  return layers.forEach(layer => {
    if (layer) {
      const { range, scanner, dir } = layer;
      layer.scanner = scanner + dir;
      layer.dir =
        layer.scanner === 0 || layer.scanner === range - 1 ? dir * -1 : dir;
    }
  });
}

function parse(input) {
  const firewalls = input
    .trim()
    .split("\n")
    .map(row => row.split(": ").map(parseFloat));

  return firewalls.reduce((layers, [depth, range]) => {
    layers[depth] = { range, scanner: 0, dir: 1 };
    return layers;
  }, Array(firewalls[firewalls.length - 1][0] + 1).fill(null));
}

test(
  `
0: 3
1: 2
4: 4
6: 4
`,
  24
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
