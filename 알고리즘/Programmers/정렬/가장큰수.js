function solution(numbers) {
  var answer = numbers
    .map((item) => String(item))
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

// 문자열이니까 붙였을 떄 어떤게 더 큰지 조합을 따져봐야되어서 b와 a를 묶어서 평가하는 듯
// 맨 앞에서부터 조합을 비교하면서 완성해나가는 것

// const stringNum = ["6", "10", "2"];
// [6, 10, 2] 1062 vs 6102 (106 vs 610)
// [6, 2, 10] 6210 vs 6102 (210 vs 102)
// [6, 2, 10] 6210 vs 6102 (26 vs 62)
