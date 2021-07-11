// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다.
//! 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 입력의 마지막에는 0 두 개가 들어온다. -> 종료시켜야 한다

// 출력
// 각 테스트 케이스마다 A+B를 출력한다.
//! 입출력 예시를 보면 알겠지만, 입력값도 줄줄이 a,b 묶음으로 받아져야 되고, 출력값도 "줄을 나눠서" 출력되어야 한다.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n"); 
// 줄줄이 들어오니까 줄나눔으로 입력값 받기
// input[0] = [1 1]
// input[1] = [2 3]이런 식...

let inputs = []; // 입력값 받아낼 곳 input 값이 계속 변하니까 let으로 지정!
let result = ""; // 출력값
let isNotZero = true;
let n = 0; // 입력값 줄줄이 돌릴 때 사용

while(isNotZero){
    if (n !== 0) {
    result += '\n'; // 첫번째 줄 다음부터는 출력 값 줄을 바꿔줘라 (문자열이니까 줄나눔 의식해서 하는 것)
    }
    
    inputs.push(input[n].split(' '));
    // inputs에 각 쌍쌍의 입력값들을 1줄, 2줄 순으로 들어가게 한다
    // 1st) n=0, input = 1 1 -> inputs = [1, 1]
    // 2nd) n=1, input = 2 3 -> inputs = [2, 3]
    let sum = Number(inputs[n][0]) + Number(inputs[n][1]);  
    // 1+1
    if(sum === 0) {
        isNotZero = false;
    } else {
        result += sum.toString();
        // 1st result = "2"
        // 2nd result = "2
        //               5" 위에서 줄바꿈을 해서 아랫줄에 출력값이 기재됨
        n++;
    }
}
console.log(result);