// 문제
// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

// 입력
// 알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

// 출력
// 입력으로 주어진 글자의 아스키 코드 값을 출력한다.

/* 아스키 코드?
아스키 코드는 1963년 미국 ANSI에서 표준화한 정보교환용 7비트 부호체계이다. 000(0x00)부터 127(0x7F)까지 총 128개의 부호가 사용된다. 이는 영문 키보드로 입력할 수 있는 모든 기호들이 할당되어 있는 부호 체계이며, 매우 단순하고 간단하기 때문에 어느 시스템에서도 적용가능하다는 장점이 있으나, 2바이트 이상의 코드를 표현할 수 없기 때문에 국제표준의 위상은 유니코드에게 넘어갔다. 
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let answer = String(input);

console.log(answer.charCodeAt(0));

// charCodeAt() : ASCII to Unicode
// fromCharCode() : Unicode to ASCII