class Node {
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(cur, data) {
		if (cur == null) {
			this.root = new Node(data);
			return;
		}

		if (data < cur.data) {
			if (cur.left == null) {
				cur.left = new Node(data);
			} else {
				this.insert(cur.left, data);
			}
		} else {
			if (cur.right == null) {
				cur.right = new Node(data);
			} else {
				this.insert(cur.right, data);
			}
		}
	}

	search(cur, data) {
		if (cur == null) {
			console.log('search data not exist');
			return;
		}

		if (data < cur.data) {
			this.search(cur.left, data);
		} else if (data > cur.data) {
			this.search(cur.right, data);
		} else {
			console.log(`Search :`, cur);
		}
	}

	remove(cur, data) {
		if (cur == null) {
			console.log('remove data not exist');
			return cur;
		}

		if (data < cur.data) {
			cur.left = this.remove(cur.left, data);
		} else if (data > cur.data) {
			cur.right = this.remove(cur.right, data);
		} else {
			console.log('remove!');
			if (cur.left == null && cur.right == null) {
				if (cur == this.root) {
					this.root = null;
				}

				return null;
			} else if (cur.right == null) {
				return cur.left;
			} else if (cur.left == null) {
				return cur.right;
			} else {
				let rightSubTreeNode = cur.right;
				while (rightSubTreeNode.left) {
					rightSubTreeNode = rightSubTreeNode.left;
				}

				cur.data = rightSubTreeNode.data;
				cur.right = this.remove(cur.right, cur.data);
			}
		}

		return cur;
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
bt.insert(bt.root, 20);
bt.insert(bt.root, 15);
bt.insert(bt.root, 13);
bt.insert(bt.root, 11);
bt.insert(bt.root, 14);
bt.insert(bt.root, 25);
bt.insert(bt.root, 30);
bt.insert(bt.root, 21);
bt.insert(bt.root, 24);
bt.insert(bt.root, 32);

// console.log('===preoder===');
// bt.preoder(bt.root);
// console.log('===inorder===');
// bt.inorder(bt.root);
// console.log('===inorder===');
// bt.postoder(bt.root);

bt.remove(bt.root, 20);
bt.inorder(bt.root);
bt.remove(bt.root, 21);
bt.inorder(bt.root);
bt.remove(bt.root, 24);
bt.inorder(bt.root);
bt.remove(bt.root, 11);
bt.inorder(bt.root);
bt.remove(bt.root, 21);
bt.inorder(bt.root);
bt.remove(bt.root, 13);
bt.inorder(bt.root);
bt.remove(bt.root, 14);
bt.inorder(bt.root);
bt.remove(bt.root, 15);
bt.inorder(bt.root);
bt.remove(bt.root, 30);
bt.inorder(bt.root);
bt.remove(bt.root, 32);
bt.inorder(bt.root);
bt.remove(bt.root, 25);
bt.inorder(bt.root);
