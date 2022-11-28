class Node {
	constructor(data, next = null, prev = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = new Node(null, null, null);
		this.tail = new Node(null, null, null);

		this.head.next = this.tail;
		this.tail.prev = this.head;

		this.size = 0;
	}

	insertAt(idx, data) {
		let newNode = new Node(data);

		let count = 0;
		let cur = this.head;

		while (cur !== null) {
			if (count === idx) {
				break;
			}
			cur = cur.next;
			count++;
		}

		newNode.prev = cur.prev;
		newNode.next = cur;
		cur.prev.next = newNode;
		cur.prev = newNode;

		this.size++;
	}

	remove(data) {
		if (this.isEmpty()) {
			return;
		}

		let cur = this.head;

		while (cur !== null) {
			if (cur.data === data) {
				cur.next.prev = cur.prev;
				cur.prev.next = cur.next;

				cur.next = null;
				cur.prev = null;
				this.size--;
				return;
			}
			cur = cur.next;
		}

		return false;
	}

	search(data) {
		let cur = this.head;
		let idx = 0;

		while (cur !== null) {
			if (cur.data === data) {
				console.log(`idx : ${idx} , data : ${data}`);
				return;
			}
			cur = cur.next;
			idx++;
		}
		console.log('not exist');
		return false;
	}

	print() {
		let cur = this.head;

		console.log(`크기 : ${this.size}`);
		while (cur !== null) {
			console.log(cur.data);
			cur = cur.next;
		}
	}

	getSize() {
		return this.size;
	}

	isEmpty() {
		return !this.size;
	}
}

const dl = new DoublyLinkedList();
dl.insertAt(1, '월');
dl.remove('월');
dl.remove('월');
dl.print();
dl.search('일');
