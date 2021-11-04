// 프로그래머스 게임 맵 최단거리 구하기
// 최단 거리를 구할땐 이진 탐색(BFS)
function solution(maps) {
  const dy = [1, 0, -1, 0]; // 하우상좌 순으로
  const dx = [0, 1, 0, -1];
  const row = maps.length; // y 전체
  const col = maps[0].length; // x 전체

  // 방문 횟수 세는 곳
  // 초기값을 1로 설정하고 목적지의 값이 1이면 도달하지 못한다고 판단
  // 해당칸에 이동한 경우 값을 1 증가시킨다.
  const visitCount = [...maps].map((r) => r.map((c) => 1)); // 지금 다 1로 초기값 설정하는 것!

  // 시작점 설정
  const queue = [[0, 0]]; // y, x

  while (queue.length) {
    const [y, x] = queue.shift(); // queue에서 값을 꺼내 구조분해할당 y = 0, x = 0

    // 이동할 수 있는 네 방향을 체크하기 위해 4번 루프를 돌린다.
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i]; // dy가 인덱스를 돌면서 네 방향을 체크한다 (좌표 하나하나씩 이동해보는 것)
      const nx = x + dx[i];

      // 이동하게 될 x, y값이 0보다는 커야되고, map의 크기보다는 작아야된다
      // 0보다 커야되는 이유는 0은 제자리이기 때문에..이동했다고 볼 수 없기 때문
      if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
        // map에 해당 길이 있고, 해당 위치를 처음 방문한 경우(visitCount의 초기값은 다 1이다)
        if (maps[ny][nx] === 1 && visitCount[ny][nx] === 1) {
          // 이동한 거리에 1 추가..! 움직일떄마다 해당 좌표에 숫자가 누적되는 형태
          visitCount[ny][nx] = visitCount[y][x] + 1;
          // 위치 옮겨주기
          queue.push([ny, nx]);
        }
      }
    }
  }
  // visitCount의 가장 끝자리 = 목적지 => 여기가 아직 1이라면 결국 어떻게든 도달하지 못했다는 거니까 -1 반환
  // 도착한 경우 움직인 횟수를 return (visitCount에 누적되어 이미 들어가ㅣㅆ음)
  return visitCount[row - 1][col - 1] === 1 ? -1 : visitCount[row - 1][col - 1];
}
