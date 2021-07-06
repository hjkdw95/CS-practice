// 새로운 배열을 하나 만들기
let object = new Array(5);

object[0] = 0;
object[3] = 0;
object[5] = 0;
object[1] = 37;
object[2] = 51;
object[4] = object[1] * 2;

for(var i = 0; i < object.length; i ++){
    console.log(`object[${i}] = ${object[i]}`)
};



// 배열 요소의 최댓값 구하기
let max = object[0]
function arrayMax(){
    for(var i = 0; i < object.length; i++){
        if(object[i] > max){
            max = object[i];
        } else;
    }
};

arrayMax();

console.log(max);


// swap 매서드
function swap(array, index1, index2){
    var i = array[index1];
    array[index1] = array[index2];
    array[index2] = i;

    console.log(`${array[index2]}`);
}


// 배열을 역순으로 나열하기
for(var i = 0; i < object.length / 2; i++){
    swap(object, i, object.length - i);
}

console.log(object);


