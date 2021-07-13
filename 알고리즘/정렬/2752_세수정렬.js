// 문제
// 동규는 세수를 하다가 정렬이 하고싶어졌다.
// 숫자 세 개를 생각한 뒤에, 이를 오름차순으로 정렬하고 싶어 졌다.
// 숫자 세 개가 주어졌을 때, 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램을 작성하시오.

// 입력
// 숫자 세 개가 주어진다. 이 숫자는 1보다 크거나 같고, 1,000,000보다 작거나 같다. 이 숫자는 모두 다르다.

// 출력
// 제일 작은 수, 그 다음 수, 제일 큰 수를 차례대로 출력한다.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let numbers = input.map(Number);
//compareFunction 활용
// compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다. <- 오름차순
// compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다. 
// compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다. <- 내림차순

// 아래와 같은 식으로 오름차순을 정리할 수 있으며, 이를 sort 메소드로 보다 편하게 사용 가능하다
// function compareNumbers(a, b) {
//   return a - b;
// }
numbers.sort((a, b) => a - b)
.join(" ");
console.log(numbers);


        // if (hansu_check.length = 2) {
        //     result++;
        // }
        // if (hansu_check.length = 3) {
        //     if(hansu_check[1] - hansu_check[0] == hansu_check[2] - hansu_check[1]) {
        //         result++; // 한수가 맞으면 result에 1을 추가해주기
        //     };  
        // } 

