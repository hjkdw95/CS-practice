// 1부터 n까지의 정수 합 구하기(while)
function sumWhile(n){
    let i = 1;
    let sum = 0;
    while(i <= n){
        sum += i;
        i ++;
    };
    return sum;
}

// 유효성 검사
console.log(sumWhile(6));


// 1부터 n까지의 정수 합 구하기(for)
// 변수가 1개인 경우 for을 사용하는 것이 좋다
let total = 0;

function sumFor(n){
    for(var k = 1; k <= n; k ++){
        total += k;
        // +=는 우변의 값을 좌변에 더한다는 것
    };
    return total;
}

// 유효성 검사
console.log(sumFor(3));


// do~while을 사용하여 양수의 합만 구해지도록 하기
function sumPlus(n){
    let all = 0;
    //do 가 사후 판단 반복문이여서 루프 본문이 반드시 한번 실행되기에 양수를 적어도 아래 글자가 콘솔에 찍혀나온다
    do{
        console.log("0 보다 큰 값을 입력하세요");
    }while(n < 0);

    for(var k = 0; k <= n; k ++){
        all += k;
        // +=는 우변의 값을 좌변에 더한다는 것
    };
    console.log(all);
}

// do~while 보완하는 함수 if문으로 만듬..
function sum(n){
    let full = 0;
    if(n <= 0){
        console.log("0보다 큰 값을 입력하세요")
    }else{
        for(var k = 0; k <= n; k++){
            full += k;
        };
        console.log(full);
    }
}

// 유효성 검사
sumPlus(1);