// 해시 - 위장
const input = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
  ["glasses", "eyewear"],
];

const newCase = [
  ["crowmask", "face"],
  ["bluesunglasses", "face"],
  ["smoky_makeup", "face"],
];

// 경우의 수를 구하는 문제이기에 각 key마다 가지고 있는 value의 수를 곱해줄 것이다
function solution(clothes) {
  let answer = 1;
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    let key = clothes[i][1];
    // value가 없는 경우 값을 1로 지정 (옷을 입지 않은 경우)하고
    // 값이 있는 경우 옷의 갯수 1을 더해준다
    obj[key] = (obj[key] || 1) + 1;
  }

  for (var key in obj) {
    answer *= obj[key];
  }
  // 모두 다 안입는 경우인 1을 삭제
  return answer - 1;
}

solution(input);
