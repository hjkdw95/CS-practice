function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [0, 0, 0];

  // 아래 두가지 방법 모두 가능
  // 원리는 답안이 여러개 들어오면 각각 a, b, c인덱스를 순회하면서 각각 점수를 늘려주는 것이다.

  // for(let i = 0; i < answers.length; i ++) {
  //   if(answers[i] === a[i % a.length]) score[0]++;
  //   if(answers[i] === b[i % b.length]) score[1]++;
  //   if(answers[i] === c[i % c.length]) score[2]++;
  // };
  score[0] = answers.filter((item, idx) => item === a[idx % a.length]).length;
  score[1] = answers.filter((item, idx) => item === b[idx % b.length]).length;
  score[2] = answers.filter((item, idx) => item === c[idx % c.length]).length;

  let answer = [];

  const max = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    // 점수가 같은 경우는 배열에 push 처리
    if (max === score[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}
