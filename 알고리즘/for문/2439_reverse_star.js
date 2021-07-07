// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.


let stars = '';
let blanks = '';

function starCounter(starCount){
    // star = 1, 2, 3, 4, 5
    for (let star = 1; star <= starCount; star++) {
        // 별 먼저 채우기
        stars += "*";
        // starCount - star = 4, 3, 2, 1, 0
        for (let blank = 0; blank < starCount - star; blank++){
            blanks += " ";
        }
        console.log(blanks + stars);
        blanks = ''; // blanks 문자열에 blank가 줄을 넘겼을 때 누적되지 않도록 reset
    }
}

starCounter(5);