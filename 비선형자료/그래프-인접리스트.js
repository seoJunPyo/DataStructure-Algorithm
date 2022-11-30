class Graph {
	constructor() {
		this.size = 5;

		this.adj = Array.from({ length: this.size }, () => []);
	}

	get(from, to) {
		console.log(`get : from - ${from}, to - ${to}`);

		let vertext = this.adj[from].filter((el) => el.to === to);
		vertext = vertext[0];

		if (vertext) {
			console.log(vertext.value);
		} else {
			console.log('not found');
		}

		return vertext === undefined ? 0 : vertext.data;
	}

	set(from, to, value) {
		console.log(`set : from - ${from}, to - ${to} , value - ${value}`);

		if (this.get(from, to) !== 0) {
			console.log('Already exist');
		} else {
			this.adj[from].push({ to: to, value: value });
		}
	}

	remove(from, to) {
		console.log(`remove : from - ${from}, to - ${to}`);
		if (this.get(from, to) !== 0) {
			this.adj[from] = this.adj[from].filter((el) => el.to !== to);
		} else {
			console.log('Not found');
		}
	}

	print() {
		console.log('print');
		console.log(this.adj);
	}

	clear() {
		console.log('clear');
		this.adj = Array.from({ length: this.size }, () => []);
	}
}

const graph = new Graph();
graph.set(0, 1, 1);
graph.set(0, 3, 1);
graph.set(0, 4, 1);
graph.set(3, 0, 1);
graph.set(3, 1, 1);
graph.set(3, 1, 1);
graph.set(3, 1, 2);

graph.remove(0, 1);
graph.get(0, 1);
graph.clear();

graph.print();
