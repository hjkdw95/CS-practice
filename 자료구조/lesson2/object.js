// object 활용하기
// physcData를 통해서 평균 키 및 시력의 분포도 구하기


// constructor
function physcData(name, height, doublevision){
    this.name = name;
    this.height = height;
    this.doublevision = doublevision;
}

//physical data
let park = new physcData("박현규", 162, 0.3);
let ham = new physcData("함진아", 173, 0.7);
let choi = new physcData("최윤미", 175, 2.0);
let hong = new physcData("홍연의", 171, 1.5);
let lee = new physcData("이수진", 168, 0.4);
let kim = new physcData("김영준", 174, 1.2);
let yong = new physcData("박용규", 169, 0.8);
let classData = [park, ham, choi, hong, lee, kim, yong];

// 키의 평균 값을 구하기
function aveHeight(data){
    let sum = 0;
    for(let i = 0; i < data.length; i++){
        sum += data[i].height;
    };
    return sum/data.length;
};

// 시력 분포 구하기
// 각 시력별 array 제작
const visionZeroPointFive = [];
const visionOne = [];
const visionTwo = [];

function distVision(data){
    // 각 단계에 맞게 array에 내역 push해 넣기
    for(i = 0; i < data.length; i++){
        if(data[i].doublevision <= 0.5){
            visionZeroPointFive.push(data[i].doublevision);
        } else if(data[i].doublevision <= 1.0){
            visionOne.push(data[i].doublevision);
        } else if(data[i].doublevision <= 2.0){
            visionTwo.push(data[i].doublevision);
        } else;
    };
    // array에 정리된 내역을 인원수로 뽑기
    let five = visionZeroPointFive.length;
    let one = visionOne.length;
    let two = visionTwo.length;
    // 출력
    console.log(`~0.5: ${five}명, ~1.0: ${one}명, ~2.0: ${two}명`);
};

distVision(classData);







