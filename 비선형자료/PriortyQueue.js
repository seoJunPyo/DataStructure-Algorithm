// 우선 순위를 고려하여 먼저넣은 데이터가 먼저 나오는 FIFO 기반의 선형 자료구조
// 배열기반으로 구현

// 데이터와 우선순위를 저장하는 생성자 함수
function Element(data, priorty) {
  this.data = data;
  this.priorty = priorty;
}

// PriortyQueue - element 관리를 위한 함수
function PriortyQueue() {
  this.array = [];
}

//getBuffer 객체 내 데이터 셋 반환
PriortyQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.data);
};

// isEmpty 객체 내 데이터 유무
PriortyQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// enqueue 데이터 추가
PriortyQueue.prototype.enqueu = function (data, priorty) {
  let element = new Element(data, priorty);
  let added = false;

  for (let i = 0; i < this.array.length; i++) {
    if (element.priorty < this.arrayp[i].priorty) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }

    if (!added) {
      this.array.push(element);
    }

    return this.array.length;
  }
};

// dequeue 데이터 삭제
PriortyQueue.prototype.dequeue = function () {
  return this.array.shift();
};

// front 가장 첫 데이터 반환
PriortyQueue.prototype.front = function () {
  return this.array.length === 0 ? undefined : this.array[0];
};

// size 자료 갯수 반환
PriortyQueue.prototype.size = function () {
  return this.array.length;
};

// clear 자료 초기화
PriortyQueue.prototype.clear = function () {
  this.array = [];
};
