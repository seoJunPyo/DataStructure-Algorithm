/* 카드 뽑기 */

/* user code */
function answer(n) {
  let result = [];
  let queue = [];

  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  for (let i = 0; i < n; i++) {
    result.push(queue.shift());
    queue.push(queue.shift());
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,

  // TC: 2
  7,

  // TC: 3
  10,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
