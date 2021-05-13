// 곱셈 계산기 만들기
function multi(n){
    for(var i = 1; i <= 9; i ++){
        document.write(`${n}x${i} = ${n * i}<br>`);
    }
}

//var n = prompt("몇 단?", "");

//multi(n);

// 직각 이등변 삼각형 출력해보기
function triangle(n){
    do{
        console.log("1 이상의 숫자를 입력해주세요");
    } while(n < 1);

    var star = "";
    for(var i = 1; i <= n; i++){       // 바깥 for은 세로행,
        for(var j = 1; j <= i; j++){
            star += "*";               // 안쪽 for은 가로열 나타냄
        }
        star += "<br>";                // 한 줄이 끝날 때마다 줄바꿈
    }
    document.write(star);
}

triangle(5);