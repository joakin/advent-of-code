test(`0 2 7 0`, 4);

function fn(input) {
  const xs = input
    .trim()
    .split(/\t| /)
    .map(parseFloat);
  let xss = xs.toString();

  const uniques = new Set();
  uniques.add(xss);
  const history = [xss];
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

    xss = xs.toString();
    uniques.add(xss);
    history.push(xss);
    tries++;
  } while (uniques.size - 1 === tries);

  const dup = history.pop();
  return history.length - history.lastIndexOf(dup);
}

let input = `2	8	8	5	4	2	3	1	5	5	1	2	15	13	5	14`;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Expected ${output}, got ${res}. Input: \`${input}\``);
  }
}
