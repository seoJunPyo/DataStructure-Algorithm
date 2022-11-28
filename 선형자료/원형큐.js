class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class CircularQueue {
	constructor() {
		this.front = null;
		this.rear = null;

		this.size = 8;
		this.count = 0;

		for (let i = 0; i < this.size; i++) {
			let newNode = new Node(null, null);

			if (i == 0) {
				this.front = newNode;
				this.rear = newNode;
			} else if (i == this.size - 1) {
				this.rear.next = newNode;
				this.rear = newNode;

				this.rear.next = this.front;
				this.rear = this.front;
			} else {
				this.rear.next = newNode;
				this.rear = newNode;
			}
		}
	}

	push(data) {
		if (this.rear.next !== this.front) {
			this.rear = this.rear.next;
			this.rear.data = data;

			this.count++;
		}
	}

	pop() {
		if (this.front !== this.rear) {
			this.front = this.front.next;
			this.front.data = null;

			this.count--;
		}
	}

	print() {
		let cur = this.front.next;

		while (cur != this.front) {
			console.log(cur.data);
			cur = cur.next;
		}
	}

	getSize() {
		return this.count;
	}

	isEmpty() {
		return this.front === this.rear;
	}
}

const cq = new CircularQueue();
cq.push('월');
cq.push('화');
cq.push('수');
cq.push('목');
cq.push('금');
cq.push('토');
cq.push('일');
cq.pop();
cq.pop();
cq.pop();

cq.print();
