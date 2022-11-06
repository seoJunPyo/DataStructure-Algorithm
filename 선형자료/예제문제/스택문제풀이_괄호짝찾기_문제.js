/* 괄호 짝 찾기 */
/* user code */

function answer(str) {
  let result = [];
  let string = [...str];
  let indexOpen = [];
  let count = 0;

  string.forEach((a, i) => {
    if (a === "(") {
      indexOpen.push(i);
      count++;
    } else if (a === ")") {
      if (indexOpen.length === 0) {
        count++;
        return [];
      }
      result.push([indexOpen.pop(), i]);
      count++;
    }
  });

  if (count % 2 !== 0) {
    result = [];
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  "(a+b)",

  // TC: 2
  "(a*(b+c)+d)",

  // TC: 3
  "(a*(b+c)+d+(e)",

  // TC: 4
  "(a*(b+c)+d)+e)",

  // TC: 5
  "(a*(b+c)+d)+(e*(f+g))",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
