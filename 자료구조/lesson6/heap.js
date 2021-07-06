// 최대 힙 구현하기
class BinaryHeap{
    constructor(){
        this.heap = [30, 20, 10, 7, 9, 5]
    }

    //힙에 요소 추가
    insert(data){
        this.heap.push(data);
        this.bubbleUp();
    }

    //일반 배열을 힙으로 재정렬 - 데이터 삽입시 호출되는 메서드
    bubbleUp(){
        let index = this.heap.length -1;

        while(index > 0){
            let element = this.heap[index]; //맨 끝에 넣어준다
            let parentIndex = Math.floor((index -1)/2) // 가지가 2갈래로 부모에서 뻗히니까 2로 나누는 것이다. index가 0부터 시작하니까 -1해준다
            let parent = this.heap[parentIndex];

            //부모가 input된 것보다 크거나 같을 경우 루프 중단
            if(parent >= element) break;

            //부모와 요소 교환
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    //가장 높은 값을 추출해내고, 힙을 재정렬한다
    extractMax(){
        const max = this.heap[0];
        //힙의 첫번째 요소를 마지막 요소와 교환
        this.heap[0] = this.heap.pop();
        this.skidDown(0);
        return max;
    }

    //힙을 재정렬한다 - 삭제시 호출되는 메서드
    skidDown(current){
        let left = 2*current + 1; 
        let right = 2*current + 2; 
        let largest = current;
        const length = this.heap.length;

        // 최상위 변수의 값을 왼쪽, 오른쪽 자식의 값과 비교 해 큰 값을 largest에 넣는다
        if(left <= length && this.heap[left] > this.heap[largest]){
            largest = left; 
        }
        // 아래에서 largest는 left일 수도 있고, current일 수도 있다
        if(right <= length && this.heap[right] > this.heap[largest]){
            largest = right; 
        }

        // 가장 큰 값의 인덱스가 현재 인덱스와 같지 않은 경우
        if(largest !== current){
            // 가장 큰 값의 인덱스와 현재 인덱스를 교체한다
            [this.heap[largest], this.heap[current]] = [this.heap[current], this.heap[largest]]
            // 최대 힙이 다 구성되지 않은 상태이니, 구성할 때까지 재귀적 호출을 한다
            this.skidDown(largest); //largest가 원래 있던 인덱스로 내려가서 다시 정렬
        }

    }
}

let heap = new BinaryHeap;
heap.extractMax();
console.log(heap.heap);
