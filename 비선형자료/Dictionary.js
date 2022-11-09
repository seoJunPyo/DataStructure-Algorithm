// key-value 형태로 다양한 자료형 개체(Entity)를 저장하는 구조
function Dictionary(items = {}) {
  this.items = items;
}

//getBuffer 모든 객체 반환
Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

// clear 초기화
Dictionary.prototype.clear = function () {
  return (this.items = {});
};

// size 길이 반환
Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

// has 객체 존재여부
Dictionary.prototype.has = function (key) {
  return this.items.hasOwnProperty(key);
};

// set 객채추가
Dictionary.prototype.set = function (key, value) {
  return (this.items[key] = value);
};

// get 특정 객체 반환
Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

// remove 객체 삭제
Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};

// keys 모든 key 값을 배열로 반환
Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
};

// values 모든 value를 배열로 반환
Dictionary.prototype.values = function () {
  return Object.values(this.items);
};

//each
Dictionary.prototype.each = function (fn) {
  for (let k in this.items) {
    fn(k, this.items[k]);
  }
};

function printDictionary(key, value) {
  console.log(`key : ${key}, value : ${value}`);
}

let dict = new Dictionary();
dict.set("age", 18);
dict.set("name", "alice");
dict.set("heigth", 180);
console.log(dict);
dict.each(printDictionary);
