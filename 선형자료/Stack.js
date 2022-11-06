//LIFO 기반의 선형 자료구조
function Stack(array) {
  this.array = array ? array : [];
}

// getBuffer()  객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty() 객체 내 데이터 유무
Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

// push() 객체안에 데이터 추가
Stack.prototype.push = function (element) {
  return this.array.push(element);
};

// pop() 객체안 데이터 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
};

// peak() 가장 끝 데이터를 반환
Stack.prototype.peak = function () {
  return this.array[this.array.length - 1];
};

// size() 데이터 갯수
Stack.prototype.size = function () {
  return this.array.length;
};

//indexOf 데이터 위차값 조회
Stack.prototype.indexOf = function (element, position = 0) {
  for (i = position; i < this.array.length; i++) {
    if (element == this.array[i]) return i;
  }
  return -1;
};

// includes 데이터 존재 여부 확인
Stack.prototype.includes = function (element) {
  for (i = 0; i < this.array.length; i++) {
    if (element == this.array[i]) return true;
  }
  return false;
};

let stack = new Stack([1, 2, 3]);
console.log(stack.includes(2));
