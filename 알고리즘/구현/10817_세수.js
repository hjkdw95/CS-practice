// 문제
// 세 정수 A, B, C가 주어진다. 이때, 두 번째로 큰 정수를 출력하는 프로그램을 작성하시오. 

// 입력
// 첫째 줄에 세 정수 A, B, C가 공백으로 구분되어 주어진다. (1 ≤ A, B, C ≤ 100)

// 출력
// 두 번째로 큰 정수를 출력한다.

// let fs = require("fs");
// let input = fs.readFileSync("./dev/stdin").toString().split(' ');

let inputs = "20 10 10";
let input = inputs.toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

let sum = (A + B + C) / 3;

let a = Math.abs(A - sum); // Math.abs = 절대값으로 만들어주는 메소드
let b = Math.abs(B - sum);
let c = Math.abs(C - sum);

if (a <= b && a <= c) {
    console.log(A);
} else if (b <= a && b <= c) {
    console.log(B);
} else if (c <= a && c <= b) {
    console.log(C);
}

/*숏코딩 팁
.sort()를 사용하여 오름차순으로 하면 더 쉽게 풀 수 있다..!
console.log(require('fs').readFileSync('/dev/stdin').toString().split(' ').sort((a,b)=>a-b)[1]);
*/