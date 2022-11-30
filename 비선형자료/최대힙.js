class Heap {
	constructor(size) {
		this.size = size;
		this.heap = Array.from({ length: this.size }, () => 0);
		this.cnt = 0;
	}

	print() {
		console.log('print');
		console.log(this.heap);
	}

	push(data) {
		this.heap[++this.cnt] = data;

		let cur = this.cnt;
		let par = Math.floor(cur / 2);

		while (cur > 1 && this.heap[cur] > this.heap[par]) {
			[this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

			cur = par;
			par = Math.floor(cur / 2);
		}
	}

	pop() {
		if (this.cnt === 0) {
			return null;
		}

		const data = this.heap[1];

		this.heap[1] = this.heap[this.cnt--];

		let cur = 1;
		let child;

		while (1) {
			child = cur * 2;

			if (child < this.cnt && this.heap[child] < this.heap[child + 1]) {
				child++;
			}

			if (child > this.cnt || this.heap[cur] > this.heap[child]) {
				break;
			}

			[this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

			cur = child;
		}
		return data;
	}
}

const heap = new Heap(11);

heap.push(2);
heap.push(1);
heap.push(4);
heap.push(3);
heap.pop();
heap.pop();

heap.print();
