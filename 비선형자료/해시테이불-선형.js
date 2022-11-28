class HashMap {
	constructor() {
		this.bucket = [];
		this.size = 6;
		this.bucket.length = this.size;
		this.bucket = this.bucket.fill(null).map((elem) => ({}));
	}

	set(key, value) {
		console.log(`key : ${key}, value : ${value}`);

		let hash = this.hashing(key);

		if (this.isEmpty(this.bucket[hash])) {
			this.bucket[hash] = { name: key, phoneNumber: value };
			return;
		}

		console.log('충돌발생!');
		for (let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size) {
			if (this.isEmpty(this.bucket[i])) {
				this.bucket[i] = { name: key, phoneNumber: value };
				return;
			}
		}

		console.log('버킷이 가득 찼습니다.');
	}

	get(key) {
		let hash = this.hashing(key);

		if (this.bucket[hash].name === key) {
			console.log(this.bucket[hash]);
			return;
		}

		for (let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size) {
			if (this.bucket[i].name === key) {
				console.log(this.bucket[i]);
				return;
			}
		}

		console.log('데이터가 없습니다.');
	}

	del(key) {
		let hash = this.hashing(key);

		if (this.bucket[hash].name === key) {
			this.bucket[hash] = {};
			return;
		}

		for (let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size) {
			if (this.bucket[i].name === key) {
				this.bucket[i] = {};
				return;
			}
		}

		console.log('데이터가 없습니다.');
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
		return JSON.stringify(data) === JSON.stringify({});
	}
}

const HT = new HashMap();
HT.set('john', '101010');
HT.set('kaiz', '23030');
HT.set('oliva', '13214');
HT.set('zoe', '13214');
HT.set('lilly', '13214');
HT.set('billy', '124');
HT.del('zoe');
HT.del('silly');
HT.print();
