// From 2017/10/2.js

module.exports = function knotHash(input) {
  const nums = Array(256)
    .fill(0)
    .map((_, i) => i);
  const parsedInput = parse(input);

  let skip = 0;
  let pos = 0;
  let rounds = 64;
  for (let i = 0; i < rounds; i++)
    for (const l of parsedInput) {
      reverse(nums, pos, l);
      pos = (pos + l + skip) % nums.length;
      skip++;
    }

  return partition(nums, 16)
    .map(xor)
    .map(toHex)
    .join("");
};

function toHex(n) {
  return n.toString(16).padStart(2, "0");
}

function xor(nums) {
  return nums.reduce((res, n) => res ^ n, 0);
}

function partition(arr, size) {
  if (arr.length % size !== 0)
    throw new Error(`Array of length ${arr.length} not divisible by ${size}`);

  return arr.reduce(
    (res, el, i) => {
      let lastArr = res[res.length - 1];
      if (lastArr.length === size) {
        res.push([]);
        lastArr = res[res.length - 1];
      }
      lastArr.push(el);
      return res;
    },
    [[]]
  );
}

function parse(input) {
  return addRandomShitToInput(
    input
      .trim()
      .split("")
      .map(charToInt)
  );
}

function addRandomShitToInput(input) {
  return input.concat(17, 31, 73, 47, 23);
}

function charToInt(c) {
  return c.charCodeAt(0);
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
