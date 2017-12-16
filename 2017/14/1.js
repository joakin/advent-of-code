const knot = require("./knot");

function fn(input) {
  const grid = Array(128)
    .fill(null)
    .map((_, i) =>
      knot(`${input}-${i}`)
        .split("")
        .map(hex2binary)
        .join("")
    );

  return grid
    .join("")
    .split("")
    .reduce((sum, d) => parseFloat(d) + sum, 0);
}

function hex2binary(n) {
  return parseInt(n, 16).toString(2);
}

test(`flqrgnkx`, 8108);

let input = `hwlqcszp`;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Input: \`${input}\`
    Expected ${output}, got ${res}. `);
  }
}
