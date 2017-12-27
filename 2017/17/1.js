function fn(input) {
  const steps = input;
  const ring = [0];
  let n = 1;
  let pos = 0;
  while (n <= 2017) {
    pos = (pos + steps) % ring.length; // Move steps around the ring
    ring.splice(pos, 0, n); // Insert the new element
    pos++; // Position is the newly inserted element
    n++;
  }

  return ring[pos % ring.length];
}

test(3, 638);

let input = 329;
console.log(fn(input));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Input: \`${input}\`
    Expected ${output}, got ${res}. `);
  }
}
