// 노드 선언
function Node(data) {
  this.data = data;
  this.next = null;
}

// 연결리스트
function LinkedList(data) {
  this.head = null;
  this.length = 0;
}

// 연결리스트 사이즈
LinkedList.prototype.size = function () {
  return this.length;
};

// 연결리스트 비었나
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// 연결리스트 출력 예쁘게
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

// 연결리스트 맨 끝에 추가
LinkedList.prototype.append = function (val) {
  let node = new Node(val);
  let current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};

// 원하는 위치에 노드추가
LinkedList.prototype.insert = function (val, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(val),
    current = this.head,
    index = 0,
    prev;

  if (position == 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
  }
  this.length++;

  return true;
};

// 노드 제거하기 value
LinkedList.prototype.remove = function (val) {
  let current = this.head,
    prev = current;

  while (current.data != val && current.data != null) {
    prev = current;
    current = current.next;
  }
  if (current.data != val) {
    return null;
  }
  if (current === this.head) {
    this.head = current.next;
  } else {
    prev.next = current.next;
  }
  this.length--;

  return current.data;
};

//인덱스
LinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
    idx = 0,
    prev;

  if (position == 0) {
    this.head = current.head;
  } else {
    while (idx++ < position) {
      prev = current;
      current = current.next;
    }
  }

  prev.next = current.next;
  this.length--;

  return current.data;
};

//인덱스
LinkedList.prototype.indexOf = function (val) {
  let current = this.head,
    idx = 0;

  while (current.data != null) {
    if (current.data == val) {
      return idx;
    }
    idx++;
    current = current.next;
  }

  return -1;
};

LinkedList.prototype.serchValue = function (position) {
  let current = this.head,
    idx = 0,
    prev;

  if (position < 0 || position > this.length) {
    return null;
  }

  while (idx++ < position) {
    prev = current;
    current = current.next;
  }
  console.log(prev.data);
  return prev.data;
};

/* test code */
let ll = new LinkedList();
console.log(ll);
// output : LinkedList { head: null, length: 0 }

ll.head = new Node(123);
ll.length++;
console.log(ll);
// output : LinkedList { head: Node { data: 123, next: null }, length: 1 }

ll.head.next = new Node(456);
ll.length++;
console.log(ll);
// output : LinkedList { head: Node { data: 123, next: Node { data: 456, next: null } }, length: 2}

ll.append(678);
console.log(ll.size());

ll.printNode(); // output : 123 -> 456 -> null

ll.insert(100, 2);
ll.insert(100, 0); // output : 100 -> 123 -> 456 -> 100 -> 678 -> null
ll.printNode();
ll.remove(100);
ll.printNode();
ll.removeAt(3);
ll.printNode();
ll.indexOf(100);
ll.serchValue(3);
