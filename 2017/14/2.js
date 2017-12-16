const knot = require("./knot");

function fn(input) {
  const grid = Array(128)
    .fill(null)
    .map((_, i) =>
      knot(`${input}-${i}`)
        .split("")
        .map(hex2binary)
        .join("")
        .split("")
        .map(x => (x === "0" ? "." : "#"))
    );
  let regions = 0;

  for (const [x, row] of grid.entries())
    for (const [y, cell] of row.entries())
      if (cell === "#") {
        const filled = floodFill(grid, x, y, "#", (regions + 1).toString());
        if (filled) regions++;
      }

  return regions;
}

function floodFill(grid, x, y, targetColor, replacementColor) {
  if (targetColor === replacementColor) return false;
  if (grid[x][y] !== targetColor) return false;

  grid[x][y] = replacementColor;

  const neighbours = around(grid, x, y);
  neighbours.forEach(([x, y]) => {
    floodFill(grid, x, y, targetColor, replacementColor);
  });

  return true;
}

function around(grid, x, y) {
  const neighbours = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
  return neighbours.filter(
    ([x, y]) => x < grid.length && y < grid[0].length && x >= 0 && y >= 0
  );
}

function hex2binary(n) {
  const len = n.length;
  return parseInt(n, 16)
    .toString(2)
    .padStart(len * 4, "0");
}

test(`flqrgnkx`, 1242);

let input = `hwlqcszp`;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Input: \`${input}\`
    Expected ${output}, got ${res}. `);
  }
}
