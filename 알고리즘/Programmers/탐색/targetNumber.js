// 자바스크립트에서는 재귀 함수를 이용하여 DFS를 구현할 수 있다.
// 각각 노드의 자식 노드를 탐색하는 함수를 스택에 추가한 뒤,
// 더 이상 자식 노드가 없을 때 마지막에 추가된 자식 노드 먼저 실행 후 스택에서 제거하는
// 후입선출(LIFO) 방식이 이용된다.
// DFS 방법에 따라 모든 숫자가 (+)인 경우를 모두 탐색한 뒤 다음 인덱스의 숫자가 (-)인 경우를 탐색한다.
function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);

  function dfs(index, sum) {
    // 트리의 깊이(depth)가 numbers 배열의 길이와 같아진다면 결과 값이 target과 동일한지 비교합니다.
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return; // 마지막 인덱스에 다다랐을 경우, 해당 함수를 stack에서 제거한다
    }

    dfs(index + 1, sum + numbers[index]); // +인 자식 노드
    dfs(index + 1, sum - numbers[index]); // -인 자식 노드
  }
  return answer;
}

// BFS는 큐로 구현하고 DFS는 재귀함수를 통해 구현한다
