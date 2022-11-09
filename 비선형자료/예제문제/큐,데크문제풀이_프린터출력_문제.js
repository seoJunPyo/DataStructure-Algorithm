/* 프린터 출력 */

/* user code */

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (e) {
  return this.array.push(e);
};

Queue.prototype.dequeue = function () {
  return this.array.length === 0 ? -1 : this.array.shift();
};

Queue.prototype.front = function () {
  return this.array.length === 0 ? -1 : this.array[0];
};

Queue.prototype.max = function () {
  return Math.max(...this.array);
};

function answer(priorities, select) {
  let result = -1;
  let count = 0;
  let vq = new Queue();
  let pq = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    vq.enqueue(i);
    pq.enqueue(priorities[i]);
  }

  while (true) {
    if (pq.front() === pq.max()) {
      count++;
      if (vq.front() === select) {
        result = count;
        break;
      } else {
        vq.dequeue();
        pq.dequeue();
      }
    } else {
      vq.enqueue(vq.dequeue());
      pq.enqueue(pq.dequeue());
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [[3], 0],

  // TC: 2
  [[3, 4, 5, 6], 2],

  // TC: 3
  [[1, 1, 5, 1, 1, 1], 0],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
