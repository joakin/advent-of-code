function fn([aSeed, bSeed]) {
  const a = generator(aSeed, 16807);
  const b = generator(bSeed, 48271);
  let pairs = 40 * 1000 * 1000;
  let matches = 0;

  while (pairs) {
    const [av, bv] = [a.next().value, b.next().value].map(valueToKey);
    if (av === bv) matches++;
    // if (pairs % 1000000 === 0) console.log(pairs, matches);
    pairs--;
  }

  return matches;
}

function valueToKey(n) {
  const s = n.toString(2);
  return s.substring(s.length - 16);
}

function* generator(seed, factor) {
  let value = seed;
  while (true) {
    value = (value * factor) % 2147483647;
    yield value;
  }
}

// test([65, 8921], 588);

let input = [679, 771];
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Input: \`${input}\`
    Expected ${output}, got ${res}. `);
  }
}
