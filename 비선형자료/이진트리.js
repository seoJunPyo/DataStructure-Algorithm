class Node {
	constructor(data) {
		this.data = data;
		this.rigth = null;
		this.left = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	preoder(cur) {
		if (cur == null) {
			return;
		}

		console.log(cur.data);
		this.preoder(cur.left);
		this.preoder(cur.right);
	}

	inorder(cur) {
		if (cur == null) {
			return;
		}

		this.inorder(cur.left);
		console.log(cur.data);
		this.inorder(cur.right);
	}

	postoder(cur) {
		if (cur == null) {
			return;
		}

		this.postoder(cur.left);
		this.postoder(cur.right);
		console.log(cur.data);
	}
}

const bt = new BinaryTree();

bt.root = new Node('A');
bt.root.left = new Node('B');
bt.root.right = new Node('C');
bt.root.left.left = new Node('D');
bt.root.left.right = new Node('E');
bt.root.right.left = new Node('F');
bt.root.right.right = new Node('G');
bt.root.right.left.left = new Node('L');
bt.root.right.left.right = new Node('M');

console.log('===preoder===');
bt.preoder(bt.root);
console.log('===inorder===');
bt.inorder(bt.root);
console.log('===inorder===');
bt.postoder(bt.root);
