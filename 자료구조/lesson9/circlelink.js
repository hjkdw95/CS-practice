// 원형 노드 구현
//원형 연결리스트는 노드의 next가 null을 가리키는 것이 아니라 head노드를 다시 가리켜서 순환 구조를 갖는 연결 리스트다.

class NodeMaker{
    constructor(element){
        this.element = element; 
        this.next = null; 
    }
}
    
// Circular list 구현
class CircularList{
    constructor(){
        this.head = null
    }

    // 노드 추가
    append(item){
        const newNode = new NodeMaker(item);
        let current;
        // 리스트가 비어있을 경우
        if(this.head == null){
            this.head = newNode;
            this.head.next = this.head; //1개의 도돌이표로 지정
        }else{ //리스트가 비어있지 않은 경우
            current = this.head;
            //리스트의 마지막 노드를 찾는다
            while(current.next !== this.head){ //!current.next가 this.head이면 한바퀴 돈 것
                current = current.next; //맨 마지막 노드로 이동
            }
            //리스트 마지막에 삽입할 노드 연결
            current.next = newNode;
            //!노드의 next에 head를 연결하여 원형으로 만든다
            newNode.next = this.head;
        }
    }

    // 노드 중간 삽입
    insert(newElement, item){
        const newNode = new NodeMaker(newElement)
        let current = this.find(item); 
        newNode.next = current.next;
        current.next = newNode;
    }

    // 노드 삭제
    remove(item){
        //첫번째 노드일 경우
        if(this.head.element === item){
            let preNode = this.findPreviousItem(item); //삭제할 노드를 가리키는 노드 찾기
            this.head = this.head.next; //head.next의 obj를 head로 옮긴다
            preNode.next = this.head; //삭제할 노드 다음 노드를 가리키게 하기 (즉 건너뛰게 하기)
        }else{ //첫번째가 아닐 경우
            let preNode = this.findPreviousItem(item);
            preNode.next = preNode.next.next
        }

    }

    //노드 찾기
    find(item){
        let currNode = this.head;
        while(currNode.element != item){
            currNode = currNode.next;
        }
        return currNode;
    }

    // 이전 노드 찾기
    findPreviousItem(item){
        let currNode = this.head;
        //현재 노드가 맨 끝이 아니면서, 현재 노드의 다음 값이 item인 경우를 찾는다
        while(currNode.next.element != item){ //한바퀴 돈다
            currNode = currNode.next
        }
        return currNode;
    }

    // 연결 리스트의 요소들을 출력
    changeToString(){
        let currNode = this.head;
        while(currNode.next !== this.head){ //한바퀴 돈다
            console.log(currNode.element)
            currNode = currNode.next;
        }
        console.log(currNode.element)
    }
}



let list = new CircularList();
list.append('A');
list.append('B');
list.append('D');
list.insert('E', 'B');
list.append('F');
list.insert('G', 'A');
list.remove('F');
list.remove('E');
list.remove('A');
list.changeToString();
 // GBD





