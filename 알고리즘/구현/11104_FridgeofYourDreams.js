// 문제
// Eirik drinks a lot of Bingo Cola to help him program faster, and over the years he has burned many unnecessary calories walking all the way to the kitchen to get some. To avoid this he has just bought a small fridge, which is beautifully placed next to his computer. To make it match his fancy big-tower with all its blinking LEDs, it is necessary to style it a bit.

// He has bought a weight sensor with a display and a small general purpose programmable chip, to put underneath the fridge. The idea is to make the display show how many litres of Bingo Cola there is in the fridge. To do this he must read a binary register in the sensor, and convert it to a decimal number to be displayed.

// 입력
// The first line of input gives n ≤ 1000, the number of test cases. Then follow n lines with positive numbers represented as 24-bit binary strings (0s and 1s).

// 출력
// For each number, output its decimal representation, without any leading zeros.


//const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let inputs = "5\n000000000000000000000001\n000000000001010101010101\n000000000000000000001010\n101011001010101100101101\n111111111111111111111111";
let input = inputs.trim().split("\n");
let output = "";

let n = +input[0];

for(let i = 1; i <= n; i++) {
    let num = input[i];
    console.log(parseInt(num, 2))
}

