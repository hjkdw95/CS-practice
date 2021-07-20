// 문제
// Given two integers, calculate and output their sum.

// 입력
// The input contains several test cases. The first line contains and integer t (t ≤ 100) denoting the number of test cases. Then t tests follow, each of them consisiting of two space separated integers x and y (−109 ≤ x, y ≤ 109).

// 출력
// For each test case output output the sum of the corresponding integers.

//const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').split(" ").map(x=>+x);

const inputs = "4\n-100 100\n2 3\n0 110101\n-1000000000 1\n"
const input = inputs.toString().trim().split("\n");


let num = Number(input[0]); // 4
for (let i = 1; i <= num; i ++) {
    let integer = input[i].split(" ").map(x => +x);
    console.log(`${integer[0] + integer[1]}`);
}