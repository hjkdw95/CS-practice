// 게임 캐릭터가 처음 걸어본 길이
// 100점 중 10점 받았다
// 좌표..길찾기 문제가 참 어렵다
function solution(dirs) {
  // 내가 푼 답
  //
  // 사실 올바르지 않다. 그냥 지나간 거리를 누적한 것에 불과하기때문에 한계가 있다.
  // 사실 접근법부터 잘 모르겠어서..문제의 의도에 맞지 않게 풀어버렸다
  //
  // const newPosition = [0, 0];
  // const arr = dirs.split("");
  // arr.map((value) => {
  //   if (value === "U" || value === "D") {
  //     ++newPosition[1];
  //   } else if (value === "L" || value === "R") {
  //     ++newPosition[0];
  //   }
  // });
  // const newArr = [newPosition[0] > 5 ? 5 : newPosition[0], newPosition[1] > 5 ? 5 : newPosition[1]];
  // return newArr[0] + newArr[1];

  // model 답안
  const move = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  let check = new Set(); // 오 set을 만들어서 객체를 활용하나보다
  // *set* :  값을 저장해놓는 객체. 삽입 순서대로 요소를 순회할 수 있다!
  // set을 사용하는 이유 : 좌표를 방문했는지가 아니고! 좌표까지의 길을 지났냐가 문제이다.
  // 도착점이 [1,1]이라면, [0,1]에서 왔는지, [1,0]에서 왔는지가 중요!!!!
  let now = [0, 0];

  // for문은 싫은데..
  for (let i = 0; i < dirs.length; i++) {
    // 새로운 좌표값 구하기 = 캐릭터가 도착할 좌표
    let nx = now[0] + move[dirs[i]][0];
    let ny = now[1] + move[dirs[i]][1];

    // 경계를 넘어가면 무시하도록
    if (nx > 5 || ny > 5 || nx < -5 || ny < -5) continue;

    // 중복되는 위치인지 전체 좌표 체크
    // 시작점 좌표 + 도착점 좌표 문자열로 저장
    // [0, 0]에서 [1, 0]을 가는 거나 [1, 0]에서 [0, 0], 즉 역방향으로 가는 것도 똑같은 길을 사용하기 때문에 두가지 경우를 모두 저장한다 -> 나중에 나눠준다
    // set을 사용하는 이유가 여기서도 나타나는데 set.add할 경우 중복된 값은 이쁘게 무시되고 중복없이 깔끔하게 답이 나오기때문에 이럴 때 사용하면 유용하다 -> 처음 가본 길만 저장 가능!
    // 과거 x, y, 현재 x, y
    check.add("" + now[0] + now[1] + nx + ny);
    // 현재 x, y, 과거 x, y
    check.add("" + nx + ny + now[0] + now[1]);
    // 마무리로 옮겨간 위치로 now를 옮겨준다
    now = [nx, ny];
  }
  // 위에서 중복값 처리하려고 위치 바꿔서 두번 처리해줬기 때문에 여기서 2로 나눠준다
  return check.size / 2;
}

const dirs = "ULURRDLLU";
solution(dirs);
