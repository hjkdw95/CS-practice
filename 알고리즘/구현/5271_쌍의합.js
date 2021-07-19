// 문제
// 1보다 크거나 같고 12보다 작거나 같은 자연수 n이 주어졌을 때, 합이 n이 되는 두 자연수의 쌍을 찾는 프로그램을 작성하시오.
// 예를 들어, 5가 주어진 경우 가능한 쌍은 1,4와 2,3이 있다. 두 수는 항상 달라야 한다. 즉, 3,3은 올바른 쌍이 아니다. 또, 첫 번째 수가 두 번째 수보다 작아야 한다.
// 출력하는 쌍은 항상 사전순으로 출력해야 한다. 즉, 각 쌍의 작은 수로 비교를 해야 한다. 예를 들어 1,5는 2,4보다 사전순으로 앞선다.

// 입력
// 첫째 줄에 테스트 케이스의 수 (< 100)가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, n이 주어진다.

// 출력
// 각 테스트 케이스마다 n을 만드는 쌍을 사전순으로 출력한다. n을 만드는 쌍이 없는 경우에는 아무것도 출력하지 않는다.

// 예제 출력 형식을 참고해 출력한다.

//const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(x=>+x);

let inputs = "4\n2\n3\n4\n5";
let input = inputs.trim().split("\n").map(x => +x); // 숫자로 나열
// (+) 숫자화 연산자. 피연산자가 숫자값이 아니라면 피연산자를 숫자로 변환하기를 시도합니다.

let output = "";

let n = +input[0]; // 첫번째 입력값은 출력값에 반영 안되니까(테스트 케이스의 수여서) 첫번째 값은 버린다 
for(let i=1; i<=n; i++){ // 첫번째 입력값 만큼 input을 받았기에 해당 갯수만큼 돌린다
	const c = input[i];   // input의 첫번째 테스트케이스부터 순서대로 돌린다

	let arr = [];
	for(let j=1; j<c-j; j++){
		arr.push([j, c-j]); // 3 -> [1, 2] , 4 -> [1, 3]
	}

    output += `Pairs for ${c}: ${arr.map(x => x.join(" ")).join(', ')}\n`
}
console.log(output);


/* 해설
문제 부분의 입력이 뭘 말하는 지 자세히 이해해야 되는 문제였다.
첫째 줄은 테스트 케이스의 수(앞으로 뒤따라올 숫자의 갯수)가 적혀있는 것.
그렇기 때문에 첫번째 입력값인 4는 앞으로 4개가 따라온다는 것으로 인지하면 된다.
예시에서 4를 첫줄에 줬기에, 이 이후로 4개의 자연수가 나온다고 인지하면 된다.
*/