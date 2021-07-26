// 문제
// Given a sentence in English, output the counts of consonants and vowels.

// Vowels are letters in [’A’,’E’,’I’,’O’,’U’,’a’,’e’,’i’,’o’,’u’].

// 입력
// The test file starts with an integer S(1 ≤ S ≤ 100), the number of sentences.

// Then follow S lines, each containing a sentence - words of length 1 to 20 separated by spaces. Every sentence will contain at least one word and be comprised only of characters [a-z][A-Z] and spaces. No sentence will be longer than 1000 characters.

// 출력
// For each sentence, output the number of consonants and vowels on a line, separated by space.


const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');


let vowelArray = ["A","E","I","O","U","a","e","i","o","u"];
let space = [" "];

let endpoint = +input[0];
for(let i = 1; i <= endpoint; i++) {
    let num = input[i].split("");
    let vowels = num.filter(x => vowelArray.includes(x));
    let others = num.filter(x => !vowelArray.includes(x));
    let consonants = others.filter(x => !space.includes(x));
    console.log(`${consonants.length} ${vowels.length}`);
}