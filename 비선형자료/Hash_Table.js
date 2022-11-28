const HASH_SIZE = 1013;

// 생성자
function Element(key, value) {
	this.key = key;
	this.value = value;
}

function HashTable() {
	this.table = new Array(HASH_SIZE);
	this.length = 0;
}

// 해쉬함수
HashTable.prototype.hashCode = function (key) {
	let hash = 5381;
	for (let i = 0; i < key.length; i++) {
		hash += hash * 33 + key.charCodeAt(i);
	}
	return hash % HASH_SIZE;
};

// put 데이터 추가
HashTable.prototype.put = function (key, value) {
	let index = this.hashCode(key);
	console.log(`key : ${key}, index : ${index}`);

	if (this.table[index] !== undefined) {
		return false;
	}

	this.table[index] = new Element(key, value);
	this.length++;

	return true;
};

// get 데이터 가져오기
HashTable.prototype.get = function (key) {
	return this.table[this.hashCode(key)];
};

// remove 데이터 삭제하기
HashTable.prototype.remove = function (key) {
	let element = this.table[this.hashCode(key)];

	if (element !== undefined) {
		delete this.table[this.hashCode(key)];
		this.length--;
	}

	return element;
};

let ht = new HashTable();

//clear 초기화
HashTable.prototype.clear = function () {
	this.table = new Array(HASH_SIZE);
	this.length = 0;
};

//size
HashTable.prototype.size = function () {
	return this.length;
};

//getBuffer
HashTable.prototype.getBuffer = function () {
	let array = [];
	for (let i = 0; i < this.table.length; i++) {
		if (this.table[i]) {
			array.push(this.table[i]);
		}
	}

	return array;
};

// print
HashTable.prototype.print = function () {
	for (let i = 0; i < this.table.length; i++) {
		if (this.table[i]) {
			console.log(`${i} -> ${this.table[i].key} : ${this.table[i].value}`);
		}
	}
};
ht.put('바보', 127);
ht.put('이건', 48);
ht.put('룽르', 392);
console.log(ht.remove('이건'));
console.log(ht.getBuffer());
ht.print();
