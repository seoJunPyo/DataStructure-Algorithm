/* user code */
function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

Linklist.prototype.append = function (val) {
  let train = new Train(val);
  let current = this.head;

  if (this.head == null) {
    this.head = train;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = train;
  }
};

function answer1(nums) {
  let ll = new Linklist();

  nums.forEach((a) => {
    ll.append(a);
  });

  for (train = ll.head; train != null; train = train.next) {
    process.stdout.write(`${train.number} -> `);
  }
  console.log("null");
  return ll;
}

function answer2(nums) {
  let ll = new Linklist();
  let current, prev;

  nums.forEach((a, i) => {
    current = new Train(a);

    if (i == 0) {
      ll.head = current;
    } else {
      prev.next = current;
    }

    prev = current;
  });

  for (current = ll.head; current != null; current = current.next) {
    process.stdout.write(`${current.number} -> `);
  }
  console.log("null");

  return ll;
}

/* main code */
let input = [
  // TC: 1
  [4, 7, 1, 10, 6],

  // TC: 2
  [3, 10, 6, 9, 11, 3, 4],

  // TC: 3
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  answer(input[i]).printNode();
}
