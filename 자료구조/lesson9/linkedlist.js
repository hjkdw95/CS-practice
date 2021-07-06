// 노드 구현
function NodeMaker(element){
    this.element = element; //요소가 저장되는 변수
    this.next = null; //다음 노드를 지정하는 포인터
}

// linked list 구현
function LinkedList(){
    this.head = new NodeMaker("head"); // 맨 첫번재 꺼에는 element 우선 강제적으로 아무거나 넣는다(안쓰니까,,)
    this.append = append;
    this.insert = insert;
    this.remove = remove;
    this.find = find;
    this.findPreviousItem = findPreviousItem;
    this.changeToString = changeToString;
}

//노드 찾기
function find(item){
    let currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

// 이전 노드 찾기
function findPreviousItem(item){
    let currNode = this.head;
    //현재 노드가 맨 끝이 아니면서, 현재 노드의 다음 값이 item인 경우를 찾는다
    while(currNode.next != null && currNode.next.element != item){ 
        currNode = currNode.next
    }
    return currNode;
}

// 노드 추가
function append(newElement){
    const newNode = new NodeMaker(newElement) // 새로운 노드 생성
    let current = this.head; //시작 노드
    while(current.next != null){ //next가 0이면 맨 끝 -> 맨 끝자리 찾기
        current = current.next //맨 끝 노드로 이동
    }
    current.next = newNode //맨 끝 노드 next자리에 새로운 노드 넣기
}

// 노드 중간 삽입
function insert(newElement, item){
    const newNode = new NodeMaker(newElement) //새로운 노드 생성
    let current = this.find(item); //삽입할 위치의 노드 찾기
    //새로운 노드랑 삽입할 위치의 노드랑 링크 연결시키기
    newNode.next = current.next; // 기존의 포인터 값을 새로운 노드에 저장해서, newNode다음에 원래 순서가 오도록 하는 것이다
    current.next = newNode; // 기존의 포인터 값을 newNode에 맞춘다
}

// 노드 삭제
function remove(item){
    let preNode = this.findPreviousItem(item); //삭제할 노드를 가리키는 노드 찾기
    preNode.next = preNode.next.next; //삭제할 노드 다음 노드를 가리키게 하기 (즉 건너뛰게 하기)
}

// 연결 리스트의 요소들을 출력
function changeToString(){
    let str = "[";
    let currNode = this.head;
    while(currNode.next != null){
        str += currNode.next.element+' '; //str 뒤에 element를 공백 하나씩 두고 띄어라
        currNode = currNode.next;
    }
    return str + "]";
}

let newList = new LinkedList();
newList.append(1);
newList.insert(2, 1);
newList.insert(3, 2);
newList.remove(2)
newList.append(4);
newList.append(5);
console.log(newList.changeToString());




