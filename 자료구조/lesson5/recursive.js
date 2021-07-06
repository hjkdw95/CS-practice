// 팩토리얼을 재귀함수를 사용하여 만들기
function factorial(n){
    if(n > 0){
        return n * factorial(n - 1);
        /*
        for(let i = 1; i < n; i++){
            result += result * i;
        }
        return result;
        */
    }else{
        return 1;
    }
}

console.log(factorial(5));

// 재귀함수를 활용하여 최대공약수 구하기(유클리드 호제법)
function euclidGCD(x, y){
    let i;
    while(y != 0){
        i = x%y;
        x = y;
        y = i;
    }
    return x;
}

console.log(euclidGCD(12, 6));