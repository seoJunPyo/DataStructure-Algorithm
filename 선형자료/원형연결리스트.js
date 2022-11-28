class Node {
	constructor(data, next = null, prev = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

class CircularLinkedList {
	constructor() {
		this.head = new Node(null);
		this.size = 0;
	}

	insert(idx, data) {
		let newNode = new Node(data);

		if (this.isEmpty()) {
			this.head.next = newNode;
			this.head.prev = newNode;

			newNode.next = this.head;
			newNode.prev = this.head;

			this.size++;
			return;
		}

		let cur = this.head;
		let count = 0;

		let isStart = false;

		while (!isStart || cur !== this.head) {
			isStart = true;

			if (count === idx) {
				break;
			}
			cur = cur.next;
			count++;
		}

		newNode.next = cur;
		newNode.prev = cur.prev;

		cur.prev.next = newNode;
		cur.prev = newNode;
		this.size++;
	}

	remove(data) {
		let cur = this.head;
		let isStart = false;
		if (this.getSize() === 1) {
			this.head.next = ths.head;
			this.head.prev = this.head;

			this.size--;
			return;
		}

		while (!isStart || cur !== this.head) {
			if (cur.data === data) {
				break;
			}
			cur = cur.next;
		}

		cur.next.prev = cur.prev;
		cur.prev.next = cur.next;

		cur.prev = null;
		cur.next = null;

		this.size--;
	}

	search(data) {
		let cur = this.head;
		let isStart = false;
		let idx = 0;

		while (!isStart || cur !== this.head) {
			if (cur.data === data) {
				console.log(`idx : ${idx} data : ${data}`);
				return;
			}
			cur = cur.next;
			idx++;
		}
	}

	print() {
		let cur = this.head;
		let isStart = false;

		while (!isStart || cur !== this.head) {
			isStart = true;
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

const cll = new CircularLinkedList();
cll.insert(1, '화');
cll.insert(1, '월');
cll.insert(3, '목');
cll.insert(3, '수');
cll.search('수');
cll.remove('월');
cll.print();
