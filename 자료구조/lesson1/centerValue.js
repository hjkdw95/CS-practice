// 중앙값 구하기
function centerValue(a, b, c){
    // a가 중앙 값인 경우
    if((b >= a &&  a >= c) || (c >= a && a >= b)){
        return a;
    // b가 중앙 값인 경우
    } else if((a >= b &&  b >= c) || (c >= b && b >= a)){
        return b;
    // c가 중앙 값인 경우
    } else if((a >= c &&  c >= b) || (b >= c && c >= a)){
        return c;
    }
};

// 유효성 검사
let a = Math.floor(Math.random() * 10) + 1;
let b = Math.floor(Math.random() * 10) + 1;
let c = Math.floor(Math.random() * 10) + 1;
console.log(a);
console.log(b);
console.log(c);



console.log(centerValue(a, b, c));