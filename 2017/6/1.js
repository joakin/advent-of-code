test(`0 2 7 0`, 5);

function fn(input) {
  const xs = input
    .trim()
    .split(/\t| /)
    .map(parseFloat);

  const history = new Set();
  history.add(xs.toString());
  let tries = 0;

  do {
    let mem = Math.max.apply(null, xs);
    let i = xs.indexOf(mem);
    xs[i] = 0;
    i = (i + 1) % xs.length;
    while (mem) {
      xs[i]++;
      mem--;
      i = (i + 1) % xs.length;
    }

    history.add(xs.toString());
    tries++;
  } while (history.size - 1 === tries);

  return tries;
}

let input = `2	8	8	5	4	2	3	1	5	5	1	2	15	13	5	14`;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Expected ${output}, got ${res}. Input: \`${input}\``);
  }
}
