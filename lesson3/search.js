// 1. 선형 검색
// 선형 검색을 통해 주어진 배열(array)에 주어진 값(target)이 요소로 존재하는지 확인하여 존재하는 경우 해당 인덱스를 반환하고 존재하지 않는 경우 -1을 반환하는 함수를 구현하라. 단, 어떠한 빌트인 함수도 사용하지 않고 for문을 사용하여 구현해야 한다.(array와 target은 모두 데이터 타입이 숫자이다)

//문제: 
function linearSearch(array, target) {
    //this is where your code starts
    for(let i = 0; i < array.length; i ++){
        if(array[i] === target){
            return i;
        }
    };
    // undefined 반환
    return -1;

}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // -1


// 2. 보초법
// 문제는 위의 것을 재활용

function sentinelSearch(array, target) {
    // 보초 추가
    array.push(target);
    for(let i = 0; i < array.length; i ++){
        if(array[i] === target && i < array.length - 1){
            return i;
        }
    };
    // undefined 반환
    return -1;
};


console.log(sentinelSearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(sentinelSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(sentinelSearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(sentinelSearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(sentinelSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(sentinelSearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(sentinelSearch([1, 2, 3, 4, 5, 6], 7)); // -1


// 보초법의 경우 판단횟수는 줄어드나, if문을 복잡하게 쓰게 된다는 단점이 있다.
// Javascript 환경에 100% 맞지는 않은 것 같다.



// 3. 이진 검색
// 문제 : 이진 검색을 통해 주어진 배열(array)에 주어진 값(target)이 요소로 존재하는지 확인하여 존재하는 경우 해당 인덱스를 반환하고 존재하지 않는 경우 -1을 반환하는 함수를 구현하라. 단, 아래의 빌트인 함수 이외에는 어떤 빌트인 함수도 사용하지 않아야 하며, while문을 사용하여 구현하여야 한다.

function binarySearch(array, target) {
    // Where your code begins..
    
    // 시작점 설정
    let start = 0;
    // 도착점 설정
    let end = array.length -1;
    
        

    while(start <= end){
        var center = Math.floor((start + end)/2); // 중앙값 설정
        // 타겟이 큰 경우
        if(target > array[center]){
            start = center + 1;
        // 타겟이 작은 경우
        } else if(target < array[center]){
            end = center -1;
        } else {
            return center;
        };
    };
    return -1;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1

