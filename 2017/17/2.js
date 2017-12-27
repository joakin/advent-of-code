function fn(input) {
  const steps = input;
  let ringLength = 1;
  let n = 1;
  let pos = 0;
  let secondElement = null;

  while (n <= 50000000) {
    // 1. Move steps around the ring
    pos = (pos + steps) % ringLength;
    // 2. A new element is inserted
    ringLength++;
    // 3. Position is the newly inserted element
    pos = (pos + 1) % ringLength;

    if (pos === 1) secondElement = n;

    n++;
  }

  return secondElement;
}

let input = 329;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Input: \`${input}\`
    Expected ${output}, got ${res}. `);
  }
}
