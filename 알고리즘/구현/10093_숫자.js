// 문제
// 두 양의 정수가 주어졌을 때, 두 수 사이에 있는 정수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 두 정수 A와 B가 주어진다.

// 출력
// 첫째 줄에 두 수 사이에 있는 수의 개수를 출력한다.
// 둘째 줄에는 두 수 사이에 있는 수를 오름차순으로 출력한다.

// 서브태스크
// 번호	    배점	제한
// 1	   30	  1 ≤ A, B ≤ 1000.
// 2	   70	  1 ≤ A, B ≤ 1015, A와 B의 차이는 최대 100,000.



//const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(x=>+x);

let inputs = "8 14";
let input = inputs.trim().split(" ").map(x => +x);

let A = input[0];
let B = input[1];
let nums = [];

// 두 수 사이에 있는 수의 개수 구하기
if (A > B) {
    console.log( A - B - 1);
    // 두 수 사이의 정수 오름차순으로 정리
    for (let i = B + 1; i < A; i++){
        nums.push(i);
    }
} else if (B > A) {
    console.log( B - A - 1);
    for (let i = A + 1; i < B; i++){
        nums.push(i);
    }
} else {
    console.log(0);
}
console.log(nums.join(' '));

