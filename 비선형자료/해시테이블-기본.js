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
		} else {
			console.log('충돌 있음');
		}
	}

	get(key) {
		let hash = this.hashing(key);

		if (this.isEmpty(this.bucket[hash])) {
			console.log('데이터가 없습니다.');
		} else if (this.bucket[hash].name !== key) {
			console.log('다른 값이 존재합니다.');
		} else {
			console.log(this.bucket[hash]);
		}
	}

	del(key) {
		let hash = this.hashing(key);

		if (this.isEmpty(this.bucket[hash])) {
			console.log('데이터가 없습니다.');
		} else if (this.bucket[hash].name !== key) {
			console.log('다른 값이 존재합니다.');
		} else {
			this.bucket[hash] = {};
		}
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

HT.set('john', '010-1234-5678');
HT.set('brad', '010-1234-5678');
HT.set('kaiz', '010-1234-5678');
HT.print();
HT.del('kaiz');
HT.print();
