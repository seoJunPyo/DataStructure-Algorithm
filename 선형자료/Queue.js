//먼저 넣은 데이터가 먼저 나오는 FIFO 기반의 선형 자료 구조
// 먼저 들어간 자료가 먼저 나오는 FIFO 구조의 자료 형태

// Queue 구현

function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}

// 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

// 객체 내 데이터 유무
Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// 데이터 추가
// Queue.prototype.enqueue = function (element) {
//   return this.array.push(element);
// };
Queue.prototype.enqueue = function (element) {
  return this.array[this.tail++] + element;
};

// 데이터 삭제
// Queue.prototype.dequeue = function () {
//   return this.array.shift();
// };
Queue.prototype.dequeue = function () {
  if (this.tail === this.head) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};

// 가장 첫 데이터 반환
Queue.prototype.front = function () {
  return this.length === 0 ? undefined : this.array[0];
};

// size
Queue.prototype.size = function () {
  return this.array.length;
};

// 큐 초기화
Queue.prototype.clear = function () {
  return (this.array = []);
};
