//원형 형태의 데이터 FIFO 기반의 구조

const DEFAULT_SIZE = 5;
// CircularQueue 초기 속성값 설정
function CircularQueue(array = [], size = DEFAULT_SIZE) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array[array.length - 1];
}

// getBuffer 객체 내 데이터 반환
CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty 객체 내 데이터 유무
CircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};

// isFull 객체 내 데이터 꽉 차있는지
CircularQueue.prototype.isFull = function () {
  return this.length === this.size;
};

// enqueue 데이터 추가
CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;

  this.array[this.tail] = element;
  this.tail = (this.tail + 1) % this.size;
  this.length++;

  return true;
};

// dequeue 데이터 삭제
CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  let element = this.array(this.head);
  delete this.array[this.head];
  this.head = (this.head + 1) % this.size;
  this.length--;

  return element;
};

// front 맨 앞값 출력
CircularQueue.prototype.front = function () {
  return this.length === 0 ? undefined : this.array[this.head];
};

//데이터 사이즈 출력
CircularQueue.prototype.dataSize = function () {
  return this.length;
};

// 데이터 초기화
CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};

let cq = new CircularQueue([1, 2, 3]);
console.log(cq);
