//링 버퍼로 큐를 구현하는 프로그램 만들기
class CircleQue {
    constructor(size){
        this._arr = []
        this.size = size;
        // length: 큐에 쌓아놓은 데이터 수
        // 큐가 가득 찼는지 아예 비었는지 구분해주는 역할
        // 큐가 비어있을 때 값은 0, 가득 찼을 떄 값은 size와 똑같다
        this.length = 0
        this.front = 0
        this.rear = -1
    }

    // 배열 길일가 0이면 비어있다
    isEmpty(){
        return (this.length == 0)
    }

    // 끝에 추가
    enQueue(item){
        // array길이가 지정한 사이즈보다 크면 가득 찬 상테이다
        if(this.length > this.size){
            console.log(new Error(`"큐가 가득 찼습니다.`))
        } else {
            // rear을 하나 늘려준다
            this.rear++;
            // 늘린 rear란에다가 item을 넣어준다
            this._arr[this.rear % this.size] = item;
            // 데이터의 값이 늘었으니 length의 길이도 늘려준다.
            this.length++;

        }          
    }

    // 앞에 제거
    deQueue(){
        if(this.isEmpty()){
            console.log(new Error(`"큐가 비었습니다.`));
        } else {
            const value = this.getFront() // front에 해당하는 값을 찾기
            // 앞에 제거하기
            this._arr[this.front % this.size] = null;
            // 제거하고 front 뒤로 밀어주기
            this.front++;
            // 데이터의 값이 줄었으니 length 길이도 줄여준다
            this.length--;

            return value;
        }
    }
    //  front에 해당하는 값을 찾기
    getFront(){
        if(this.isEmpty()){
            console.log(new Error(`"큐가 비었습니다.`));
        } else {
            // front에 해당하는 값을 가져오기
            return this._arr[this.front % this.size];
        }
    }
    findIndex(item){
        // 모든 데이터를 싹 다 뒤져야되니까 length로 찾는다
        for(let i = 0; i < this.length; i++){
            // 그런데 원형이기 때문에 원형으로 돌아가면서 검색할 수 있도록 size로 나눠준다
            let number = (i + this.front) % this.size;
            if(this._arr[number] === item){
                console.log(number);
            }
        }
        return -1;
    }
    // 초기화
    clear(){
        this.element = new Array()
        this.length = 0
        this.rear = 0
        this.front = -1
    }
    // 모든 데이터 출력하기
    dump(){
        let final = [] 
        if(this.isEmpty()){
            console.log(new Error(`"큐가 비었습니다.`));
        } else {
            // 변수 j는 front부터 rear까지 다 돈다
            for(let j = this.front; j < this.rear + 1; j++){
                // front부터 rear까지 push해 넣는다
                final.push(this._arr[(j + 1) % this.size])
            }
        }
        console.log(final);
    }
}


let circle = new CircleQue(5);
console.log(circle);
circle.deQueue();
circle.enQueue(1);
circle.enQueue(2);
circle.enQueue(3);
circle.enQueue(4);
circle.enQueue(5);
circle.deQueue();
circle.deQueue();
circle.deQueue();
circle.enQueue(6);
circle.enQueue(7);
circle.enQueue(8);
console.log(circle);
console.log(circle.getFront());
circle.findIndex(7);
circle.dump();






