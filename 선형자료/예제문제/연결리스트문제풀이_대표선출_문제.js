/* user code */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  let result = [];

  let cirCular = new LinkedList();
  let current, prev;

  for (i = 1; i <= n; i++) {
    current = new Node(i);

    if (i === 1) {
      cirCular.head = current;
    } else {
      prev.next = current;
    }
    prev = current;
  }
  current.next = cirCular.head;

  current = cirCular.head;
  while (--m) {
    prev = current;
    current = current.next;
  }

  let count;
  while (current.next != current) {
    result.push(current);
    prev.next = current.next;

    count = k;
    while (--k) {
      prev = current;
      current = current.next;
    }
  }

  result.push(current.data);
  return result;
}

/* main code */
let input = [
  // TC: 1
  [8, 2, 3],

  // TC: 2
  [10, 2, 3],

  // TC: 3
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}
