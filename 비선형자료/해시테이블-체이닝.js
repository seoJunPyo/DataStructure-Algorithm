class HashMap {
	constructor() {
		this.bucket = [];
		this.size = 6;
		this.bucket.length = this.size;
		this.bucket = this.bucket.fill(null).map((elem) => []);
	}

	set(key, value) {
		console.log(`[set] key : ${key}, value : ${value}`);

		let hash = this.hashing(key);

		this.bucket[hash].push({ name: key, phoneNumber: value });
	}

	get(key) {
		console.log(`[get] key : ${key}`);

		let hash = this.hashing(key);

		let len = this.bucket[hash].length;

		for (let i = 0; i < len; i++) {
			if (this.isSame(this.bucket[hash][i].name, key)) {
				console.log(this.bucket[hash][i]);
				return;
			}
		}
		console.log('값이 존재하지 않습니다.');
	}

	del(key) {
		console.log(`[del] key : ${key}`);

		let hash = this.hashing(key);

		let len = this.bucket[hash].length;

		for (let i = 0; i < len; i++) {
			if (this.isSame(this.bucket[hash][i].name, key)) {
				this.bucket[hash].splice(i, 1);
				return;
			}
		}
		console.log('값이 존재하지 않습니다.');
	}

	hashing(key) {
		let ret = 0;
		let len = key.length;

		for (let i = 0; i < len; i++) {
			ret += key[i].charCodeAt();
		}

		ret = ret % this.size;
		return ret;
	}

	print() {
		console.log(this.bucket);
	}

	isEmpty(data) {
		return JSON.stringify(data) === JSON.stringify([]);
	}

	isSame(d1, d2) {
		return !this.isEmpty() && d1 === d2;
	}
}

let HT = new HashMap();
HT.set('john', 235424);
HT.set('brad', 235424);
HT.set('kaiz', 235424);
HT.set('oilvia', 235424);
HT.set('zoe', 235424);
HT.set('ava', 235424);
HT.print();
HT.del('john');
HT.print();
