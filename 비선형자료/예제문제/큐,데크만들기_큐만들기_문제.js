/* 큐 만들기 */

/* user code */
function answer(cmds) {
  let result = [];

  let cmdsAll = ["enqueue", "dequeue", "empty", "front", "back", "size"];
  function Queue(array) {
    this.array = array ? array : [];
  }

  let queue = new Queue();
  Queue.prototype.enqueue = function (e) {
    return this.array.push(e);
  };

  Queue.prototype.dequeue = function () {
    return this.array.length === 0 ? -1 : this.array.shift();
  };

  Queue.prototype.front = function () {
    return this.array.length === 0 ? -1 : this.array[0];
  };

  Queue.prototype.back = function () {
    return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
  };

  Queue.prototype.isEmpty = function () {
    return this.array.length === 0 ? 1 : 0;
  };

  Queue.prototype.size = function () {
    return this.array.length;
  };

  cmds.forEach((cmd) => {
    switch (cmd) {
      case cmdsAll[1]:
        let dequeue = queue.dequeue();
        result.push(dequeue);
        break;
      case cmdsAll[2]:
        let empty = queue.isEmpty();
        result.push(empty);
        break;
      case cmdsAll[3]:
        let front = queue.front();
        result.push(front);
        break;
      case cmdsAll[4]:
        let back = queue.back();
        result.push(back);
        break;
      case cmdsAll[5]:
        let size = queue.size();
        result.push(size);
        break;
      default:
        let enqueue = cmd.split(" ");
        if (enqueue.length < 2) break;
        queue.enqueue(enqueue[1]);
        result.push(enqueue[1]);
        break;
    }
  });

  console.log(queue);
  return result;
}

/* main code */
let input = [
  // TC: 1
  ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue"],

  // TC: 2
  [
    "enqueue 3",
    "enqueue 4",
    "enqueue 5",
    "enqueue 6",
    "front",
    "back",
    "dequeue",
    "size",
    "empty",
  ],

  // TC: 3
  [
    "enqueue 7",
    "enqueue 8",
    "front",
    "back",
    "size",
    "empty",
    "dequeue",
    "dequeue",
    "dequeue",
    "size",
    "empty",
    "dequeue",
    "enqueue 9",
    "empty",
    "front",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
