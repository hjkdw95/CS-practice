// 이중 연결 리스트
// 저장된 각 데이터가 이전 데이터의 포인터(prev) + 데이터(data) + 다음 데이터의 포인터(next)로 이루어진 것으로, 양방향 탐색 가능 구조이다.

// 노드 구현
function NodeMaker(element){
    this.element = element; 
    this.next = null; 
    this.prev = null; //추가
}

// linked list 구현
function DoublyLinkedList(){
    this.head = new NodeMaker("head"); // 맨 첫번재 꺼에는 element 우선 강제적으로 아무거나 넣는다(안쓰니까,,)
    this.append = append;
    this.insert = insert;
    this.remove = remove;
    this.find = find;
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

// 노드 추가
function append(newElement){
    const newNode = new NodeMaker(newElement)
    let current;
    //리스트가 비어있을 경우
    if(this.head == null){
        this.head = newNode;
    }else{ //리스트가 비어있지 않은 경우
        current = this.head;
        //리스트의 마지막 노드를 찾는다
        while(current.next !== null){
            current = current.next
        }
        //리스트의 마지막 노드에 삽입할 노드 연결
        current.next = newNode;
        newNode.prev = current;
    }
}

// 노드 중간 삽입
function insert(newElement, item){
    const newNode = new NodeMaker(newElement)
    let current = this.find(item); //삽입할 위치의 노드 찾기
    //새로운 노드랑 삽입할 위치의 노드랑 링크 연결시키기
    newNode.next = current.next;
    current.next = newNode;
    //prev 정리
    newNode.prev = current;
    newNode.next.prev = newNode; 
}

// 노드 삭제
function remove(item){
    //첫번째 노드일 경우
    if(this.head.data == item){
        this.head = this.head.next; //head 넘기기
        this.head.prev = null; //prev 끊기
    }else{ //첫번째가 아닌 경우
        let current = this.find(item);
        //맨 끝 노드일 경우
        if(current.next == null){
            current.prev.next = null; // next끊기
            current.prev = null; //prev끊기
        }else{//중간인 경우
            current.prev.next = current.next; //next끊기
            current.next.prev = current.prev; //prev끊기
            //아래 두개는 optional
            current.prev = null;
            current.next = null;
        }

    }
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

var list = new DoublyLinkedList();
list.append('A');
list.append('B');
list.append('D');
list.insert('E', 'B');
list.append('F');
list.insert('G', 'A');
list.remove('F');
list.remove('E');
list.remove('A');
let result = list.changeToString() // GBD
console.log(result);




