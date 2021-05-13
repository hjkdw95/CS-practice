// 한 해의 경과 일 수를 계산하는 프로그램
let month = ["평년", "운년"];

// 평년 일수
month[0] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// 윤년 일수
month[1] = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


// 서기 year년은 윤년인가?(윤년 1 / 평년 0)
function isLeap(year){
    return (year%100 == 0 && year%400 !== 0)? 0 : 1;
};

// 서기 y년 m월 d일의 그 해 경과 일 수를 구한다
function dayOfYear(y, m, d){
    let days = d; // 일수
    // 1월~(m-1)월 까지의 일 수를 더함
    for(let i = 1; i < m; i++){
        days+=month[isLeap(y)][i-1];
    }
    // 1월은 따로 조건설정을 안해줬기에 그냥 d가 바로 나온다
    return days;
}

console.log(dayOfYear(2021, 2, 28));