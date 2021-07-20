// 문제
// Given an odd integer N, calculate the sum of all the odd integers between 1 and N inclusive.

// 입력
// First line of the input contains T, the number of test cases. Each test case contains a single integer N. N is between 1 and 100.

// 출력
// For each test case output the value 1+3+….+N.

//const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=>+x);

let inputs = "10\n1\n3\n5\n7\n9\n11\n13\n15\n17\n19";
let input = inputs.trim().split("\n").map(x => +x);

for (let i = 1; i <= input[0]; i++) {
    // T찾기
    let t = input[i];
    let result = 0;
    // 1부터 T사이에 있는 홀수의 합을 구해라
    for (let j = 1; j <= t; j += 2) {
        result = result + j;
    }
    console.log(result);
}