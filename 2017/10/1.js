function fn([nums, input]) {
  nums =
    nums ||
    Array(256)
      .fill(0)
      .map((_, i) => i);

  let skip = 0;
  let pos = 0;
  for (const l of input) {
    reverse(nums, pos, l);
    pos = (pos + l + skip) % nums.length;
    skip++;
  }

  return nums[0] * nums[1];
}

function reverse(arr, start, length) {
  if (start + length < arr.length) {
    arr.splice(start, length, ...arr.slice(start, start + length).reverse());
  } else {
    const reversed = arr
      .concat(...arr)
      .slice(start, start + length)
      .reverse();
    const p1 = reversed.slice(0, arr.length - start);
    const p2 = reversed.slice(arr.length - start, reversed.length);
    arr.splice(start, p1.length, ...p1);
    arr.splice(0, p2.length, ...p2);
  }
  return arr;
}

test([[0, 1, 2, 3, 4], [3, 4, 1, 5]], 12);

let input = [
  212,
  254,
  178,
  237,
  2,
  0,
  1,
  54,
  167,
  92,
  117,
  125,
  255,
  61,
  159,
  164
];
console.log(fn([, input]));

function test(input, output) {
  const res = fn(input);
  if (res !== output) {
    console.log(`FAIL -> Input: \`${input}\`
    Expected ${output}, got ${res}. `);
  }
}
