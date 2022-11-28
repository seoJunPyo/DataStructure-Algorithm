class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.size = 0;
	}

	push(data) {
		let newNode = new Node(data);

		if (this.isEmpty()) {
			this.top = newNode;
			this.size++;
			return;
		}

		newNode.next = this.top;
		this.top = newNode;

		this.size++;
	}

	pop() {
		if (this.isEmpty()) {
			return false;
		}

		let cur = this.top;

		this.top = this.top.next;
		this.size--;
	}

	print() {
		let cur = this.top;
		console.log(`size : ${this.getSize()}`);

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

const stack = new Stack();
