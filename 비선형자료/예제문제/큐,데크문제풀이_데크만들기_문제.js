/* 데크 만들기 */

/* user code */
function answer(cmds) {
  let result = [];

  // 코드 구현 시작 영역

  // …

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  ["push_back 1", "push_front 2", "pop_front", "pop_back", "pop_front"],

  // TC: 2
  [
    "push_back 3",
    "push_front 4",
    "push_back 5",
    "push_front 6",
    "front",
    "back",
    "pop_front",
    "size",
    "empty",
  ],

  // TC: 3
  [
    "push_back 7",
    "push_front 8",
    "front",
    "back",
    "size",
    "empty",
    "pop_front",
    "pop_back",
    "pop_front",
    "size",
    "empty",
    "pop_back",
    "push_front 9",
    "empty",
    "front",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
