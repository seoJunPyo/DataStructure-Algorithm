/* 
각 노드가 데이터와 포인터를 가지며, 두줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조
- prev : data : data 의 구조로 구성
- 이전 노드에도 접근 용이한 구조
 */

//Node()
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// size()
DoubleLinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty()
DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// printNode()
DoubleLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(` ${node.data} ->`);
  }
  console.log("null");
};

DoubleLinkedList.prototype.printNodeInverse = function () {
  let temp = [];

  process.stdout.write("null <-");
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(` ${temp[i]} <- `);
  }
  console.log("tail");
};

// append() - O(1)으로 LinkedList에 비해 빠름
DoubleLinkedList.prototype.append = function (val) {
  let node = new Node(val);

  if (this.head == null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  this.length++;
};

DoubleLinkedList.prototype.insert = function (val, pos = 0) {
  if (pos < 0 || pos > this.length) {
    return false;
  }

  let node = new Node(val);
  let current = this.head,
    idx = 0,
    prev;

  if (pos == 0) {
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if (pos == this.length) {
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
    while (idx++ < pos) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
    current.prev = node;
    node.prev = prev;
  }

  this.length++;

  return true;
};

// node 제거
DoubleLinkedList.prototype.remove = function (val) {
  let current = this.head,
    prev = current;

  while (current.data != val && current.next != null) {
    prev = current;
    current = current.next;
  }
  if (current.data != val) {
    return null;
  }
  if (current === this.head) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;
  return true;
};

DoubleLinkedList.prototype.removeAt = function (pos = 0) {
  if (pos < 0 || pos >= this.length) {
    return null;
  }

  let current = this.head,
    prev,
    idx = 0;
  if (pos == 0) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (pos == this.length - 1) {
    current = this.tail;
    this.null = current.prev;
    this.tail.next = null;
  } else {
    while (idx++ < pos) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;
  return current.data;
};

DoubleLinkedList.prototype.indexOf = function (val) {
  let current = current.next,
    idx = 0;

  while (current != null) {
    if (current.data == val) {
      return idx++;
    }

    idx++;
    current = current.next;
  }

  return -1;
};
// Test case

// DLL 생성
let dll = new DoubleLinkedList();

dll.append(1);
dll.append(10);
dll.append(100);
dll.insert(3, 2);
dll.insert(2, 1);
// console.log(dll);
dll.remove(3);
dll.printNode();
dll.removeAt(2);
dll.printNode();
