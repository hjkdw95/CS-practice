// 문제
// 1보다 크거나 같고 12보다 작거나 같은 자연수 n이 주어졌을 때, 합이 n이 되는 두 자연수의 쌍을 찾는 프로그램을 작성하시오.
// 예를 들어, 5가 주어진 경우 가능한 쌍은 1,4와 2,3이 있다. 두 수는 항상 달라야 한다. 즉, 3,3은 올바른 쌍이 아니다. 또, 첫 번째 수가 두 번째 수보다 작아야 한다.
// 출력하는 쌍은 항상 사전순으로 출력해야 한다. 즉, 각 쌍의 작은 수로 비교를 해야 한다. 예를 들어 1,5는 2,4보다 사전순으로 앞선다.

// 입력
// 첫째 줄에 테스트 케이스의 수 (< 100)가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, n이 주어진다.

// 출력
// 각 테스트 케이스마다 n을 만드는 쌍을 사전순으로 출력한다. n을 만드는 쌍이 없는 경우에는 아무것도 출력하지 않는다.

// 예제 출력 형식을 참고해 출력한다.

// let fs = require("fs");
// let input = fs.readFileSync("./dev/stdin").toString().split(' '); 
let input = "4,2,345"
let number = Number(input);
let answer = [];
let A;
let B;

for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);         
    let quotient = num / 2; // 몫 구하기
    if(quotient != 1) { // 예외처리(2)
        for (let j = Math.floor(quotient); j > 0; j--) { 
            if (num % 2 == 0) { // 짝수
                A = quotient - j + 1;    // 0 1 2
                B = quotient + j - 1;    // 6 5 4
                if (A != B) {
                    answer.push(`${A} ${B}`)
                }
            } else if (num % 2 != 0) { // 홀수  
                A = Math.floor(quotient) - j + 1; // 0 1
                B = Math.floor(quotient) + j; // 4 3
                answer.push(`${A} ${B}`);
            }; 
        }
        let result = answer.map(a => ` ${a}`);
        console.log(`Pairs for ${num}:${String(result)}`);
        answer = [];
    } else {
        console.log(`Paris for ${num}: `)
    }   
    
}
