// 문제
// 두 양의 정수가 주어졌을 때, 첫 번째 수가 두 번째 수보다 큰지 구하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 두 정수가 주어진다. 두 수는 백만보다 작거나 같은 양의 정수이다. 입력의 마지막 줄에는 0이 두 개 주어진다.

// 출력
// 각 테스트 케이스마다, 첫 번째 수가 두 번째 수보다 크면 Yes를, 아니면 No를 한 줄에 하나씩 출력한다.


let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split('\n');  // input = "1 1\n2 3\n3 4\n9 8\n5 2\n0 0";
// input[0] = 1, 1
// input[1] = 2, 3
// input[2] = 3, 4 ...

let i = 0

while(true){ //끝날 때 까지 돌게 한다
    let newArray = input[i].split(" ") // 1,1
    let A = Number(newArray[0]);
    let B = Number(newArray[1]);
    i++;
    if( A == 0 && B == 0) { //0이 나오면 멈추기
        break;
    }
    if(A > B) {
        console.log("Yes");
    }  else { // 일반적인 경우에 else 안써도 알아서 else로 처리되지만 백준의 경우 무조건 else 적어줘야
        console.log("No");
    }
}
