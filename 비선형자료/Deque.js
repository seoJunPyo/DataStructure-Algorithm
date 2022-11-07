// Double Ended Queue의 약자
// 삽입과 삭제가 양쪽 끝에서 발생한다

// 초기 설정값 세팅
function Deque(array = []) {
  this.array = array;
}

// 객체 내 데이터 반환
Deque.prototype.getBuffer = function () {
  return this.array.slice();
};

// 객체 내 데이터 유무
Deque.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// 앞쪽 데이터 추가
Deque.prototype.pushFront = function () {
  return this.array.unshift();
};

// 앞쪽 데이터 삭제
Deque.prototype.popFront = function () {
  return this.array.shift();
};

// 뒤쪽 데이터 추가
Deque.prototype.pushBack = function () {
  return this.array.push();
};

// 뒤쪽 데이터 삭제
Deque.prototype.popBack = function () {
  return this.array.pop();
};

// 가장 첫 데이터 반환
Deque.prototype.front = function () {
  return this.array.length === 0 ? undefined : this.array[0];
};

// 가장 마지막 데이터 반환
Deque.prototype.back = function () {
  return this.array.length === 0
    ? undefined
    : this.array[this.array.length - 1];
};

// 데이터 사이즈 반환
Deque.prototype.size = function () {
  return this.array.length;
};

// 데이터 초기화
Deque.prototype.clear = function () {
  return (this.array = []);
};
