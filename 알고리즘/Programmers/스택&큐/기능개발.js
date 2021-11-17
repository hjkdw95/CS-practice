// 앞의 기능이 배포되어야 뒤 기능이 배포된다 => 큐 (first in first out)
// 내가 구현하다 만 것..큐로 어떻게 접근하는 건지 감이 잘 잡히지 않는다.

// function solution(progresses, speeds) {
//   const remainedPercent = progresses.map(item => 100 - item);
//   const remainedDays = [];
//   for(let i = 0; i < remainedPercent.length; i ++) {
//     remainedDays[i] = Math.ceil(remainedPercent[i] / speeds[i]);
//   }
//   var answer = [];
//   const checkDeploy = arr => {
//     if(arr.length === 0) return;
//     for(let i = 0; i < arr.length; i ++) {
//       const firstDay = arr[i];
//       answer.push(firstDay);
//       if(arr[i + 1] < firstDay) {
//         answer.push(arr[i + 1]);
//         arr.shift();
//         arr.shift();
//       }
//     }
//     if(arr.lenth > 0) {
//       checkDeploy(arr);
//     }
//   }

//   return answer;
// }

function solution(progress, speed) {
  let answer = [0];
  let days = progress.map((item, idx) => Math.ceil((100 - item) / speed[idx]));
  console.log(days);
  let maxDay = days[0];
  // 여기까지는 비슷..
  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1; //! j를 1늘림으로써, 뒤의 것이 앞에서 미리 처리 되지 않도록 방지!
    }
    console.log(answer);
  }
  return answer;
}

const progress = [93, 30, 55];
const speed = [1, 30, 5];
// return : [2, 1]
// 걸리는 날짜를 먼저 계산해보기

solution(progress, speed);
