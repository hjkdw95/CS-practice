// 프로그래머스 스티커 문제 lv3
//  스티커를 뜯어내어 얻을 수 있는 숫자의 합의 최댓값을 return 하는 solution 함수를 완성해 주세요.

/* 개념
경우의 수로 비교하는 것
홀수로 진행될 때랑, 짝수로 진행될 때의 경우의 수가 다르므로 홀/짝 나눠서 max값 구한 후 그 두개의 max값을 비교
*/

function solution(sticker) {
  // 예외처리
  if (sticker.length === 1) return sticker[0];
  if (sticker.length === 2) return Math.max(sticker[0], sticker[1]);

  // 첫번째 스티커를 뗀 경우
  // maxOdd, maxEven array는 각각 sticker array의 각 인덱스마다 가질 수 있는 가장 큰 수의 합을 나열한 배열이다
  let maxOdd = new Array(sticker.length - 1).fill(0);
  // 첫번째 스티커를 땐 경우 [1]이 [0]을 따라간다
  // 왜냐면 어차피 1을 못떼니까 같은 값으로 처리 (이후 연산을 위해서)
  maxOdd[0] = sticker[0];
  maxOdd[1] = sticker[0];

  // 첫번째 스티커를 떼면 자연스럽게 두번째 것은 없어지기에 [2]부터 count에 들어간다
  // maxOdd[i-1]은 이전 index 에서 가장 큰 수의 합이 들어가있음
  // maxOdd[i]자리에는 이전 최대값 vs 전전 최대값 + 이번 값 한 값 중 가장 큰 값을 넣어준다
  // 왜 이렇게 하냐면, 꼭 두칸 간격으로 더해준다고 큰 값이 나오지 않기 때문에 하나하나 비교해줘야 한다 -> 만약 어떻게 해도 이전값이 더 크면 건너뛰어야되니까
  for (let i = 2; i < sticker.length - 1; i++) {
    maxOdd[i] = Math.max(maxOdd[i - 1], maxOdd[i - 2] + sticker[i]);
  }
  // maxOdd안에 들어간 각 index별 합의 최대값 중 최대값을 뽑아낸다
  const finalOdd = Math.max(...maxOdd);

  // 두번째 스티커를 뗀 경우도 첫번째를 뽑은 것과 비슷하게 진행하면 된다
  let maxEven = new Array(sticker.length).fill(0);
  // odd와 다른 점
  // 0번째 것은 skip하기 때문에 (왜냐면 뜯은거 양 옆은 쓸 수 없으니까) 0으로 적어준다
  maxEven[0] = 0;
  maxEven[1] = sticker[1];
  // 두번째 스티커를 뗀 경우 length 맨 끝까지 탐색할 수 있다 (왜냐면 첫번째때와 다르게, 맨 끝의 것이 처음 뜯는 스티커에 영향을 받지 않기 때문)
  for (let i = 2; i < sticker.length; i++) {
    maxEven[i] = Math.max(maxEven[i - 1], maxEven[i - 2] + sticker[i]);
  }
  const finalEven = Math.max(...maxEven);

  // 짝/홀 경우 중에 가장 큰 값을 반환하기
  const final = Math.max(finalOdd, finalEven);
  return final;
}
