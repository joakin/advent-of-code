const DIR = {
  RIGHT: 0,
  UP: 1,
  LEFT: 2,
  BOTTOM: 3
};
const abs = Math.abs;

test(120, 122);
test(320, 330);
test(750, 806);

function fn(input) {
  let pos = [0, 0];
  let n = 1;
  let dir = DIR.RIGHT;
  let size = 1;
  let walk = size;
  let store = [{ n, pos: pos.slice() }];

  while (n < input) {
    if (dir === DIR.RIGHT) {
      pos[0]++;
    } else if (dir === DIR.UP) {
      pos[1]++;
    } else if (dir === DIR.LEFT) {
      pos[0]--;
    } else if (dir === DIR.BOTTOM) {
      pos[1]--;
    } else {
      throw new Error(`Unknown dir ${dir}`);
    }

    walk--;
    if (walk === 0) {
      dir = (dir + 1) % 4;
      if (dir === DIR.RIGHT || dir === DIR.LEFT) {
        size++;
      }
      walk = size;
    }

    n = store.reduce(
      (sum, cell) =>
        abs(pos[0] - cell.pos[0]) <= 1 && abs(pos[1] - cell.pos[1]) <= 1
          ? sum + cell.n
          : sum,
      0
    );
    store.push({ n, pos: pos.slice() });
  }

  return n;
}

let input = 368078;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Expected ${output}, got ${res}. Input: ${input}`);
  }
}
