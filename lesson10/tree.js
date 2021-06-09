//  이진 트리
// 노드 구현
function NodeMaker(element, left, right){
    this.element = element; 
    this.left = left; 
    this.right = right;
}

class BST{
    constructor(){
        this.root = null;
    }
    
    //트리에 노드 추가
    insert(element){
        const newNode = new NodeMaker(element, null, null);
        // 만약 빈 트리라면 
        if(this.root === null){
            this.root = newNode;
        }else{ //빈 트리가 아닌 경우
            let current = this.root;
            let parent;
            while(true){
                parent = current;
                // 데이터가 현재 노드보다 작을 경우 - 좌측 배치
                if(element < current.element){
                    current = current.left; // 현재 위치를 현재 노드의 좌측으로 이동 -> 현재 노드는 parent가 된다
                    // 현재 데이터의 노드가 null일 경우
                    if(current === null){
                        //좌측에 node 삽입
                        parent.left = newNode;
                        break;
                    }
                }else{ //데이터가 현재 노드보다 클 경우 - 우측 배치
                    // 현재 위치를 현재 노드의 우측으로 이동 -> 현재 노드는 parent가 된다
                    current = current.right;
                    if(current === null){
                        // 우측에 삽입
                        parent.right = newNode;
                        break;
                    }
                }
            }
        }

    }

    // 트리에서 노드 삭제
    delete(element){
        let current = this.search(element); // 지우고 싶은 노드
        let parent = this.getParent(current); // 지우고 싶은 노드의 부모

        if(current.right === null && current.left === null){ //leaf인 경우
            //node를 null로 만든다
            if(parent.left.element = element){
                parent.left = null;
            }else{
                parent.right = null;
            }  
        }else if(current.right !== null && current.left !== null){ //자식이 두곳 다 있는 경우
            // 지우려는 데이터의 element만 맨 아래로 보내서 벹어낼 것이다

            // 삭제하고픈 데이터의 오른쪽 자식 중에서 가장 작은 값을 구한다 
            // 왜냐면 가운데가 오른쪽 값 min보다 작고 왼쪽 max보다 크니까
            let min = this.getMin(current.right);
            // 최솟값을 복사한다
            let tempNode = min;
            //최솟값의 부모 노드를 구한다
            let minParent = this.getParent(min);

            //최소값 노드와 부모 노드와의 사이를 끊는다
            if(minParent.right.element === min.element){
                minParent.right = null;
            }else{
                minParent.left = null;
            }

            //지우려는 데이터와 최솟값 노드의 데이터를 교체한다
            current.element = tempNode.element;
            //지워진 노드 위치에 온 최소값 노드에 자식 노드를 연결해준다
            current.right = tempNode.right;
        }else{ //자식이 하나만 있을 때
            //삭제하려는 노드의 자식 요소를 찾는다
            let child = current.left === null? current.right : current.left;
            // 삭제하려는 노드의 부모노드와 삭제 노드의 자식요소를 연결한다
            if(parent.left === current){
                parent.left = child;
            }else{
                parent.right = child;
            }
        }
    }

    // 노드 찾기
    search(element){
        let current = this.root;
        while(current.element !== element){ //트리를 한번 훑는다
            // 현재 위치가 우리가 찾기 원하는 노드보다 큰 경우 -> 현위치의 좌측으로 훑는다
            if(current.element > element){
                current = current.left
            }else{ //현재 위치가 검색 노드보다 작은 경우 우측으로 훑는다
                current = current.right;
            }
        }
        return current;
    }

    // 부모 노드 반환
    getParent(node){
        let current = this.root;
        let parent;
        while(current.element !== node.element){ //트리를 한번 훑는다
            parent = current;
            if(node.element < current.element){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return parent;
    }

    // 트리의 최솟값 반환
    getMin(node){
        let current = node;
        while(current.left !== null){
         current = current.left;   // 파고들기
        }
        return current; //맨 아래 값 반환
    }

    // 트리의 최대값 반환
    getMax(node){
        let current = node;
        while(current.right !== null){
            current = current.right;
        }
        return current;
    }

    // 전위 순회 (재귀함수로 구현)
    preOrder(node){
        console.log(node.element);
        if(node.left !== null){
            this.preOrder(node.left);
        }
        if(node.right !== null){
            this.preOrder(node.right);
        }
    }

    // 중위 순회
    inOrder(node){
        if(node.left !== null){
            this.inOrder(node.left);
        };
        console.log(node.element);
        if(node.right !== null){
            this.inOrder(node.right);
        }
    }

    // 후위 순회
    postOrder(node){
        if(node.left !== null){
            this.postOrder(node.left);
        }
        if(node.right !== null){
            this.postOrder(node.right);
        }
        console.log(node.element);
    }
}

var tree = new BST();
tree.insert('F');
tree.insert('B');
tree.insert('G');
tree.insert('A');
tree.insert('D');
tree.insert('I');
tree.insert('C');
tree.insert('E');
tree.insert('H');

// tree.preOrder(tree.root); // F, B, A, D, C, E, G, I, H
// tree.inOrder(tree.root); // A, B, C, D, E, F, G, H, I
// tree.postOrder(tree.root); // A, C, E, D, B, H, I, G, F

tree.delete('D')
//tree.inOrder(tree.root); // A, B, C, E, F, G, H, I
tree.delete('F');
tree.inOrder(tree.root); // A, B, C, E, G, H, I