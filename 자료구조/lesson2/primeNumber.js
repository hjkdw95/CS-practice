// 1000이하의 소수의 나열
function primeNumber(){

    let results = [];
    // 소수 구하기 위한 반복문
    // x모든 자연수의 집합
    for(let x = 2; x <= 1000; x++){
        // 기본값은 true로 설정
        let isPrimeNumber = true;
        // y : x를 나누는 값
        for(let y = 2; y < x; y++){
            // 실수 아닌 값 분류
            if(x%y === 0){
                isPrimeNumber = false;
            }
        };
        if(isPrimeNumber){
            results.push(x);
        };
    };
    return results;
}

console.log(primeNumber());






