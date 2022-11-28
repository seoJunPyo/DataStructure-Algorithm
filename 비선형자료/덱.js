class Node {
	constructor(data, prev = null, next = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

class Deque {
	constructor() {
		this.front = null;
		this.rear = null;
		this.size = 0;
	}

	pushFront(data) {
		let newNode = new Node(data);

		if (this.isEmpty()) {
			this.front = newNode;
			this.rear = newNode;
			this.size++;
			return;
		}

		this.front.prev = newNode;
		newNode.next = this.front;
		this.front = newNode;
		this.size++;
	}

	popFront() {
		if (this.isEmpty()) {
			return false;
		} else if (this.getSize() === 1) {
			this.front = null;
			this.rear = null;
			this.size--;
			return;
		}

		this.front = this.front.next;
		this.front.prev = null;
		this.size--;
	}

	pushRear(data) {
		let newNode = new Node(data);

		if (this.isEmpty()) {
			this.front = newNode;
			this.rear = newNode;
			this.size++;
			return;
		}

		this.rear.next = newNode;
		newNode.prev = this.rear;
		this.rear = newNode;
		this.size++;
	}

	popRear() {
		if (this.isEmpty()) {
			return false;
		} else if (this.getSize() === 1) {
			this.front = null;
			this.rear = null;
			this.size--;
			return;
		}

		this.rear = this.rear.prev;
		this.rear.next = null;
		this.size--;
	}

	print() {
		let cur = this.front;

		while (cur !== null) {
			console.log(cur.data);
			cur = cur.next;
		}
	}

	isEmpty() {
		return !this.size;
	}

	getSize() {
		return this.size;
	}
}

let dq = new Deque();
dq.pushFront('화');
dq.pushFront('월');
dq.pushRear('수');
dq.pushRear('목');
dq.pushRear('금');
dq.popFront();
dq.popRear();

dq.print();
