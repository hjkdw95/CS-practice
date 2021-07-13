// 문제
//! 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 
// 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
// N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 

// 입력
// 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

// 출력
// 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = 110;
let result = 0;

function sequence(num) {
    for(let i = 1; i <= num; i++) {
        // 아래에서 index로 각 자릿수 비교해줘야되기 때문에 stringify한다
        let hansu_check =String(i);
        //찢은걸 비교하기 - 한수가 맞는지 확인하기
        // 각 요소들을 뺐을 때 값이 같은가?
        if (i < 100) { // 100 미만의 경우 모두 한수의 조건을 만족한다
            result ++;
        }
        // 100 이상일 경우는 각 자리마다 비교한 값이 같아야된다
        let A = Number(hansu_check[0]) - Number(hansu_check[1]);
        let B = Number(hansu_check[1]) - Number(hansu_check[2]);
        if (A === B) {
            result ++;
        }
    }
}

sequence(num);
console.log(result);

