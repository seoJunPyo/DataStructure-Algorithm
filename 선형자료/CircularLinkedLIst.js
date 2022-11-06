function Node(data) {
  this.data = data;
  this.head = null;
}

function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

CircularLinkedList.prototype.size = function () {
  return this.length;
};

CircularLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

CircularLinkedList.prototype.append = function (val) {
  let node = new Node(val),
    current = this.head;

  if (this.head == null) {
    this.head = node;
  } else {
    while (current.next != this.head) {
      current = current.next;
    }
    current.next = node;
  }

  node.next = this.head;
  this.length++;
};

CircularLinkedList.prototype.insert = function (val, pos = 0) {
  if (pos < 0 || pos > this.length) {
    return false;
  }

  let node = new Node(val),
    current = this.head,
    idx = 0,
    prev;

  if (pos === 0) {
    node.next = current;

    if (this.isEmpty()) {
      current = node;
    } else {
      while (current.next != this.head) {
        current = current.next;
      }
    }

    this.head = node;
    current.next = this.head;
  } else {
    while (idx++ < pos) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;

    if (node.next === null) {
      node.next = this.head;
    }
  }

  this.length++;
  return true;
};

CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");

  if (this.length != 0) {
    process.stdout.write(`${this.head.data} -> `);
    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
  }
  console.log("null");
};

CircularLinkedList.prototype.remove = function (val) {
  let current = this.head,
    prev = current,
    data;

  while (current.data != val && current.next != this.head) {
    prev = current;
    current = current.next;
  }

  if (current.data != val) {
    return null;
  }

  data = current.data;
  if (current == this.head) {
    while (current != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    prev.next = current.next;
  }

  this.length--;
  return data;
};

CircularLinkedList.prototype.removeAt = function (pos) {
  if (pos < 0 || pos > this.length) return false;

  let current = this.head,
    idx = 0,
    prev,
    data;

  if (pos == 0) {
    data = current.data;

    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.next = this.head;
  } else {
    while (idx++ < pos) {
      prev = current;
      current = current.next;
    }

    data = current.data;

    prev.next = current.next;
  }

  this.length--;
  return data;
};

CircularLinkedList.prototype.indexOf = function (val) {
  let current = this.head,
    idx = 0;

  do {
    if (current.data === val) {
      return idx;
    }

    idx++;
    current = current.next;
  } while (current != this.head);

  return -1;
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);

cll.insert(2, 1);
cll.insert(3, 3);

// cll.removeAt();
console.log(cll);
console.log(cll.size());
cll.printNode();
