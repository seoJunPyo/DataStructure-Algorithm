class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	insertFirst(data) {
		let newNode = new Node(data, null);

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
			this.size++;
			return;
		}
		newNode.next = this.head;
		this.head = newNode;
		this.size++;
	}

	insertLast(data) {
		let newNode = new Node(data, null);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
			this.size++;
			return;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		this.size++;
	}

	insertAt(idx, data) {
		let newNode = new Node(data, null);

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
			this.size++;
			return;
		} else if (idx === 1) {
			this.insertFirst(data);
			return;
		}

		let current = this.head;
		let count = 1;

		while (current !== null) {
			if (idx === count + 1) {
				break;
			}
			current = current.next;
			count++;
		}

		newNode.next = current.next;
		current.next = newNode;
		this.size++;
	}

	removeFirst() {
		if (this.isEmpty()) {
			return false;
		}

		let cur = this.head;

		this.head = cur.next;
		cur.next = null;
		this.size--;
	}

	removeLast() {
		if (this.isEmpty()) {
			return false;
		} else if (this.getSize() === 1) {
			this.head = null;
			this.tail = null;
			this.size--;
			return;
		}

		let cur = this.head;

		while (cur !== null) {
			if (cur.next === this.tail) {
				break;
			}
			cur = cur.next;
		}
		cur.next = null;
		this.tail = cur;
		this.size--;
	}

	remove(data) {
		if (this.isEmpty()) {
			return false;
		}

		let cur = this.head;

		if (cur.data === data) {
			this.head = cur.next;
		} else {
			while (cur !== null) {
				if (cur.next === null) {
					return false;
				}
				if (cur.next.data === data) {
					break;
				}
				cur = cur.next;
			}
			cur.next = cur.next.next;
		}
		this.size--;
	}

	search(data) {
		let idx = 1;
		let cur = this.head;

		while (cur !== null) {
			if (cur.data === data) {
				console.log(`${idx}????????? ${data}??? ????????????.`);
				return [cur, idx];
			}
			cur = cur.next;
			idx++;
		}

		console.log('???????????? ???????????? ????????????.');
		return false;
	}

	print() {
		let current = this.head;

		console.log(`?????? : ${this.size}`);

		while (current !== null) {
			console.log(current.data);
			current = current.next;
		}
	}
	getSize() {
		return this.size;
	}

	isEmpty() {
		return !this.size;
	}
}

const ll = new LinkedList();

ll.insertFirst('???');
ll.insertFirst('???');
ll.insertLast('???');
ll.insertAt(3, '???');
ll.insertAt(3, '???');
ll.remove('???');
ll.print();
ll.remove('???');
ll.print();
ll.remove('???');
ll.print();
ll.remove('???');
ll.print();
ll.remove('???');
ll.print();
ll.remove('???');
ll.print();
ll.remove('???');
ll.print();
ll.remove('???');
ll.print();
