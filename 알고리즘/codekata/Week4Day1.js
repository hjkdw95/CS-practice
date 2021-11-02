// 양수 N을 이진법으로 바꿨을 때, 연속으로 이어지는 0의 갯수가 가장 큰 값을 return해 주세요.

// 이어지는 0은 1과 1사이에 있는 것을 의미합니다.
// 1과 1사이에 있는 0을 binary gap 이라고 하겠습니다.
// input: 9
// output: 2
// input: 9
// output: 2
// 설명: 9의 이진수는 1001 입니다. 1과 1사이에 있는 0은 2 이므로, 2를 return

// input: 529
// output: 4
// input: 529
// output: 4
// 설명: 529의 이진수는 1000010001 입니다. binary gap은 4와 3 두개가 있습니다. 이 중 큰 값은 4이므로 4를 return

// input: 20
// output: 1
// input: 20
// output: 1
// 설명: 20의 이진수는 10100 입니다. 1과 1사이에 있는 연속된 0의 수는 1 뿐입니다. (뒤에 있는 0은 1사이에 있는 것이 아니므로)

// input: 15
// output: 0
// input: 15
// output: 0
// 설명: 15의 이진수는 1111 입니다. binary gap이 없으므로 0을 return

// input: 32
// output: 0
// input: 32
// output: 0
// 설명: 32의 이진수는 100000 입니다. binary gap이 없으므로 0을 return

const solution = (N) => {
  const binary = N.toString(2);
  const binaryArr = binary.split("1"); // ["", "0000"]
  let binaryGap = 0; // 가장 긴 0의 length를 갖는다

  for (let i = 0; i < binaryArr.length - 1; i++) {
    // 1로 끝나면 어차피 빈 문자열이고, 0으로 끝나는 경우는 세면 안되니까 전체 길이에서 1을 제외해준다.
    if (binaryArr[i].length === 0) {
      // 빈 문자열이면 skip
      continue;
    } else {
      binaryGap = Math.max(binaryGap, binaryArr[i].length);
    }
  }
  return binaryGap;
};

solution(9); // 1001 (2개)
solution(529);
solution(20);
solution(15);
solution(32);
solution(50);
