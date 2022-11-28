class Node {
	constructor(data) {
		this.data = data;
		this.child = [];
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	insert(parentNode, data) {
		let newNode = new Node(data);

		if (this.root === null) {
			this.root = newNode;
			return;
		}

		let node = this.search(parentNode);
		if (parentNode === null) {
			return;
		}

		node.child.push(newNode);
	}

	search(targetData) {
		if (this.root == null) {
			return;
		}

		let curNode = this.root;
		let targetNode = null;

		let queue = [];
		queue.push(this.root);

		while (queue.length) {
			curNode = queue.shift();

			if (curNode.data === targetData) {
				targetNode = curNode;
				break;
			}

			let len = curNode.child.length;
			for (let i = 0; i < len; i++) {
				queue.push(curNode.child[i]);
			}
		}

		// console.log(`result : ${targetNode}`);
		return targetNode;
	}

	remove(targetData) {
		if (this.root == null) {
			return;
		}

		let cur = this.root;
		let queue = [];
		queue.push(cur);

		while (queue.length) {
			cur = queue.shift();

			let targetIdx = -1;

			let len = cur.child.length;

			for (let i = 0; i < len; i++) {
				if ((cur.child[i].data = targetData)) {
					targetIdx = i;
					break;
				}
			}
			if (targetIdx != -1) {
				cur.child.splice(targetIdx, 1);
				break;
			}

			for (let i = 0; i < len; i++) {
				queue.push(cur.child[i]);
			}
		}
	}

	print() {
		console.log('===print===');

		let cur = this.root;
		let queue = [];
		queue.push(cur);

		while (queue.length) {
			cur = queue.shift();
			console.log('cur :', cur);

			let len = cur.child.length;

			for (let i = 0; i < len; i++) {
				queue.push(cur.child[i]);
			}
		}
	}
}

const tree = new Tree();
tree.insert(null, 'a');
tree.insert('a', 'b');
tree.insert('a', 'c');
tree.insert('b', 'd');
tree.insert('b', 'e');
tree.insert('b', 'f');
tree.insert('c', 'g');
tree.remove('b');
tree.print();
