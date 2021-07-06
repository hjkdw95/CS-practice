// 최대값 구하기

// 랜덤 숫자로 테스트
let a = Math.floor(Math.random() * 3) + 1;
let b = Math.floor(Math.random() * 3) + 1;
let c = Math.floor(Math.random() * 3) + 1;
console.log(a);
console.log(b);
console.log(c);


function maxValue(a, b, c){
    // 1. b가 a, c 보다 큰지 확인
    if(b > a && b > c){
        return b;
    // 2. c가 a, b 보다 큰지 확인
    } else if( c > a && c > b){
        return c;
    } else{
        return a;
    };
}


console.log(maxValue(a, b, c));



