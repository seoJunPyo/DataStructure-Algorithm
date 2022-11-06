/* 괄호 계산 */

/* user code */
function answer(str) {
  let result = 0;
  let stack = [];
  let temp = 1;

  for (let i = 0; i < str.length; i++) {
    let mark = str[i];
    switch (mark) {
      case "(":
        temp *= 2;
        stack.push(mark);
        break;
      case "[":
        temp *= 3;
        stack.push(mark);
        break;
      case ")":
        if (stack.length === 0 || stack[stack.length - 1] != "(") {
          return 0;
        }
        if (str[i - 1] === "(") {
          result += temp;
        }
        stack.pop();
        temp /= 2;
        break;
      case "]":
        if (stack.length === 0 || stack[stack.length - 1] != "[") {
          return 0;
        }
        if (str[i - 1] === "[") {
          result += temp;
        }
        stack.pop();
        temp /= 3;
        break;
    }
  }

  if (stack.length !== 0) {
    return 0;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  "(()[[]])",

  // TC: 2
  "[][]((])",

  // TC: 3
  "(()[[]])([])",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
