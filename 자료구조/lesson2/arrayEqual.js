// 두 배열이 같은지 판단

function arrayEqual(object1, object2){
    // 배열의 길이가 같은지 여부
    if(object1.length != object2.length){
        return false;
    };
    // 배열의 내용물이 같은지 여부
    for(var i = 0; i < object1.length; i++){
        if(object1[i] !== object2[i]){
            return false;
        };
    };
    return true;
}

var a = new Array(1, 2, 3, 4, 5);
var b = new Array(1, 2, 3, 4, 5);

console.log(arrayEqual(a, b));