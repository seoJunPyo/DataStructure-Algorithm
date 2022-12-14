/* user code */
function File(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

// function answer(ll) {
//   let newFiles = [];
//   let current, prev;

//   for (let file = ll.head; file != null; file = file.next) {
//     newFiles.push(file.number);
//   }
//   newFiles = newFiles.reverse();

//   let newLl = new LinkedList();

//   for (let i = 0; i < newFiles.length; i++) {
//     current = new File(newFiles[i]);

//     if (i == 0) {
//       newLl.head = current;
//     } else {
//       prev.next = current;
//     }
//     prev = current;
//   }

//   return newLl;
// }

function answer(ll) {
  let current = ll.head,
    prev,
    next;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  ll.head = prev;

  return ll;
}

/* main code */
let input = [
  // TC: 1
  [7, 3, 1],

  // TC: 2
  [4, 6, 9, 1, 3],

  // TC: 3
  [3, 4, 1, 2, 7, 9, 6],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
};

LinkedList.prototype.makeFiles = function (files) {
  let current = this.head;
  let node;
  for (let i = 0; i < files.length; i++) {
    node = new File(files[i]);
    node.next = current;
    this.head = node;

    current = node;
  }
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);

  let ll = new LinkedList();
  ll.makeFiles(input[i]);
  answer(ll).printNode();
}

/* 포인터 조작 하기 
  1. 필요한 포인터 변수화
  2. 반복문 조작시, 다음 포인터로 넘어갈 수 있게 치환
  3. 다음 조건에 만족하는 포인터 연결 조작
*/
