// 입력한 정수값의 부호(양수/음수/0)를 판단하여 출력하는 프로그램
function judgeSign(n){
    if(n > 0){
        return `이 수는 양수입니다.`
    } else if(n < 0){
        return `이 수는 음수입니다.`
    } else{
        return `이 수는 0입니다.`
    }
};
