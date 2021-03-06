// 문제
// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 
// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

// 출력
// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split("\n"); 

let inputs = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n";
let input = inputs.toString().split("\n");

// 입력값 배열로 받기
let numbers = [];
for (let i = 0; i < 10; i++){
    numbers.push(Number(input[i]));
}

// 나머지 값을 restNum에 배열로 저장하기
let restNum = numbers.map(num => {
    return num % 42;
})

let diffNum = []; // 중복되지 않는 나머지 값 모아둔 배열
// diffNum에 해당 숫자가 없으면 array에 추가한다 ( = 서로 다른 나머지들만 모임)
restNum.forEach(num => {
    if(diffNum.indexOf(num) === -1) { 
        diffNum.push(num);
    }
});

console.log(diffNum.length);
