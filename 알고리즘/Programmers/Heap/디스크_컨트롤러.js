const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
];

// 현재 태스크의 종료 범위 안에 요청된 태스크중, 길이가 짧은 태스크 부터 수행한다
// 요청 시간이 같다면, 길이가 짧은 태스크부터 수행한다

// 스케줄링 알고리즘 중 최단 작업 우선 스케줄링(Shortest Job First, SJF)을 구현하는 문제이다.
// SJF는 운영체제의 스케줄러가 CPU 점유 시간이 가장 짧은 프로세스부터 우선적으로 할당하는 것이다.

// 작업 대기열을 담을 최소 heap
class Heap {
  constructor() {
    this.item = [];
  }

  get length() {
    return this.item.length;
  }

  get heap() {
    return this.item;
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return index * 2 + 1;
  }

  getRightChild(index) {
    return index * 2 + 2;
  }

  swap(a, b) {
    // 구조분해 할당을 이용하면서 임시 변수를 생성할 필요 없이 값을 쉽게 교환할 수 있다.
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // 노드를 추가할 때 bubbleUp 방식으로 부모와 값을 비교하며 heapify를 실행한다
  bubbleUp(idx) {
    if (idx < 0) return; // idx 1까지만 탐색하도록 (0은 비워둔다)
    const left = this.getLeftChild(idx);
    const right = this.getRightChild(idx);
    // 왼쪽 노드와 오른쪽 노드를 비교해서 작은 것의 인덱스를 반환한다
    const swapChildren = this.item[right] && this.item[right][1] < this.item[left][1] ? right : left;
    // 상위 노드와 비교해서 작은 것을 계속 상단으로 올린다
    if (this.item[swapChildren][1] < this.item[idx][1]) {
      this.swap(swapChildren, idx);
      this.bubbleUp(this.getParent(idx));
    }
  }

  // 루트 노드를 삭제한 후 bubbleDown 방식으로 자식들과 값을 비교하며 heapify를 실행한다
  bubbleDown(idx) {
    if (idx > Math.floor(this.length / 2) - 1) return; // 최하단 노드를 넘으면 종료
    const left = this.getLeftChild(idx);
    const right = this.getRightChild(idx);
    const swapChildren = this.item[right] && this.item[right][1] < this.item[left][1] ? right : left;
    if (this.item[swapChildren][1] < this.item[idx][1]) {
      this.swap(swapChildren, idx);
    }
    this.bubbleDown(swapChildren); // 계속 하단 노드로 탐색한다
  }

  shift() {
    this.swap(0, this.length - 1); // 0과 최하단 노드의 위치 변경
    const pop = this.item.pop(); // 0이였던 것(이제 최하단) 을 빼준다
    this.bubbleDown(0); // 위치가 변경되었으니 bubbleDown실행하여 heap 정리
    return pop;
  }

  push(value) {
    this.item.push(value);
    this.bubbleUp(this.getParent(this.length - 1)); // 새로 추가되었으니 bubbleUp 실행하여 heap 정리
  }
}

function solution(jobs) {
  const heap = new Heap(); // heap 생성
  const length = jobs.length;
  let answer = 0;
  let time = 0; // 프로세서의 현재 시간

  let newJobs = jobs.sort((a, b) => a[0] - b[0]); // 입력 시점 순으로 나열
  // 남은 작업이 있을 동안
  while (newJobs.length || heap.length) {
    // 디스크의 현재 시간과 동일하거나 미리 요청된 작업이 존재한다면 heap에 추가한다.
    // heap에 추가할 때마다 bubbleUp 방식으로 heapify를 실행한다.
    while (newJobs.length && newJobs[0][0] <= time) {
      heap.push(newJobs.shift());
    }
    // 만약에 디스크의 현재 시간과 동일하거나 미리 요청된 작업이 없다면,
    // 디스크의 현재 시간 이후에 요청된 작업이 존재하는지 확인해 heap에 추가한다
    if (!heap.length) {
      const newTime = newJobs[0][0];
      while (newJobs.length && newJobs[0][0] === newTime) {
        heap.push(newJobs.shift());
      }

      // 디스크의 현재 시간을 새롭게 추가된 작업의 요청 시간으로 갱신한다
      time = newTime;
    }

    // 작업 대기열에서 가장 소요 시간이 짧은 작업을 꺼낸다.
    // heap에서 꺼낼 때 마다 bubbleDown 방식으로 heapify를 실행한다
    const done = heap.shift();

    // 새로 꺼낸 작업의 종료 시간을 더해 디스크의 현재 시간을 갱신한다
    time += done[1];
    answer += time - done[0];
  }
  console.log(Math.floor(answer / length));
  return Math.floor(answer / length);
}

solution(jobs);
