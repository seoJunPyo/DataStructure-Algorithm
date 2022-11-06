/* 접시 꺼내기 */

/* user code */

function answer(str) {
  let result = [];
  let dish = [...str].sort();
  let stack = [];
  let j = 0;

  for (i = 0; i < str.length; i++) {
    while (stack.length === 0 || stack[stack.length - 1] < str[i]) {
      stack.push(dish[j++]);
      result.push(0);
    }
    if (stack[stack.length - 1] === str[i]) {
      stack.pop();
      result.push(1);
    }
  }

  if (stack.length > 0) return [];

  return result;
}

/* main code */
let input = [
  // TC: 1
  "bacd",

  // TC: 2
  "dabc",

  // TC: 3
  "edcfgbijha",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
