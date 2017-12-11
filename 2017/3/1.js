const DIR = {
  RIGHT: 0,
  UP: 1,
  LEFT: 2,
  BOTTOM: 3
};

test(1, 0);
test(12, 3);
test(23, 2);
test(1024, 31);

function fn(input) {
  let pos = [0, 0];
  let n = 1;
  let dir = DIR.RIGHT;
  let size = 1;
  let walk = size;
  while (n < input) {
    n += 1;

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
  }

  return Math.abs(pos[0]) + Math.abs(pos[1]);
}

let input = 368078;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Expected ${output}, got ${res}. Input: ${input}`);
  }
}
