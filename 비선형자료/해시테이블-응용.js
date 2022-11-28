class HashMap {
	constructor() {
		this.bucket = [];
		this.size = 6;
		this.bucket.length = this.size;
		this.bucket = this.bucket.fill(null).map((elem) => []);
	}

	set(key, value) {
		console.log(`[set] key : ${key}, value : ${value}`);

		let hash1 = this.hashing1(key);
		let hash2 = this.hashing2(key);

		this.bucket[hash1].push({ subHash: hash2, name: key, phoneNumber: value });
	}

	get(key) {
		console.log(`[get] key : ${key}`);

		let hash1 = this.hashing1(key);
		let hash2 = this.hashing2(key);

		let len = this.bucket[hash1].length;

		for (let i = 0; i < len; i++) {
			if (this.isSame(this.bucket[hash1][i].subHash, hash2)) {
				if (this.isSame(this.bucket[hash1][i].name, key)) {
					console.log(this.bucket[hash1][i]);
					return;
				}
			}
		}

		console.log('not exist');
	}

	del(key) {
		console.log(`[del] key : ${key}`);

		let hash1 = this.hashing1(key);
		let hash2 = this.hashing2(key);

		let len = this.bucket[hash1].length;

		for (let i = 0; i < len; i++) {
			if (this.isSame(this.bucket[hash1][i].subHash, hash2)) {
				if (this.isSame(this.bucket[hash1][i].name, key)) {
					this.bucket[hash1].splice(i, 1);
					return;
				}
			}
		}

		console.log('not exist');
	}

	hashing1(key) {
		let ret = 0;
		let len = key.length;

		for (let i = 0; i < len; i++) {
			ret += key[i].charCodeAt();
		}

		ret = ret % this.size;

		return ret;
	}

	hashing2(key) {
		let ret = 0;
		let len = key.length;

		for (let i = 0; i < len; i++) {
			ret = ret * 8 + key[i].charCodeAt();
		}

		ret = ret % this.size;

		return ret;
	}

	print() {
		console.log('---print---');
		console.log(this.bucket);
	}

	isEmpty(data) {
		return JSON.stringify(data) === JSON.stringify([]);
	}

	isSame(d1, d2) {
		return !this.isEmpty() && d1 === d2;
	}
}

const ht = new HashMap();

ht.set('john', '000709');
ht.set('brad', '000709');
ht.set('kaiz', '000709');
ht.set('olivia', '000709');
ht.set('lilly', '000709');
ht.set('zoe', '000709');
ht.set('ava', '000709');
ht.del('zoe');
ht.del('lilly');
ht.del('kaiz');
ht.del('ddd');
ht.print();
