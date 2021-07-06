// Stack 구현하기
// 기본 JS 배열 메소드 사용하지 않고 구현해보기
class Stack {
    constructor() {
        // 스택의 본체
        this.arr = [];
        this.index = 0;
        
    }
    push(item){
        this.arr[this.index++] = item;
        }
    pop(){
        if(this.index <= 0) return null;
        // --는 표현식 평가 전에 1을 감소시킨다
        const result = this.arr[--this.index];
        return result;
    }
    // peak 메서드 만들기
    // peak: stack의 꼭대기에 있는 데이터를 몰래 엿보는 메서드
    peak(){
        if(this.arr.length > 0){
            return this.arr[this.arr.length -1];
        }
    }
    // indexOf 메서드
    // 배열인덱스가 큰 쪽에서 작은쪽으로 선형 검색
    IndexOf(item){
        for( let i = this.arr.length -1; i >= 0; --i){
            if(this.arr[i] === item){
                return i;
            };
        };
        // undefined 반환
        return -1;
    }
    // clear 메서드
    clear(){
        return this.arr = [];
    }
    // isEmpty 메서드
    isEmpty(){
        if(this.arr.length <= 0) return true;
        return false;
    }
}

let stack = new Stack();
stack.push(1); // arr: [1], index: 1
console.log(stack.arr);
stack.push(2); // arr: [1, 2], index: 2
console.log(stack.arr);
stack.push(3); // arr: [1, 2, 3], index: 3
console.log(stack.arr);
console.log(stack.IndexOf(2)); // index: 1
console.log(stack.pop()); // 3 , index: 2
console.log(stack.pop()); // 2 , index: 1
console.log(stack.pop()); // 1 , index: 0
console.log(stack.pop()); // null





