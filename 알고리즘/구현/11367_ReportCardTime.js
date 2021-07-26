// 문제
// Little hobbitses go to hobbit school in the Shire. They just finished a course, which involved tea-making, meal-eating, nap-taking, and gardening. Based on the following grading scale, assign each hobbit a letter grade based on their final numerical course grade.

// A+: 97-100
// A: 90-96
// B+: 87-89
// B: 80-86
// C+: 77-79
// C: 70-76
// D+: 67-69
// D: 60-66
// F: 0-59
// 입력
// The input will begin with a single line containing just a whole number, n, of the number of hobbits in the class, followed by n lines in the form a b, where a is the hobbit’s name (only alphabetical characters) and b is the hobbit’s grade, given as a whole number. The length of hobbit's name is less than 10.

// 출력
// For each test case, print out a list of every hobbits name and letter grade, each on its own line. There should be no additional white space following test cases.

//const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let inputs = "5\nBilbo 13\nSam 90\nPippin 78\nFrodo 97\nMerry 70"
let input = inputs.split("\n");

let num = +input[0];

for (let i = 1; i <= num; i++) {
    let list = input[i].split(" ");
    let name = list[0];
    let score = +list[1];
    let grade;

    if(score > 96) {
        grade = "A+"
    } else if (score > 89) {
        grade = "A"
    } else if (score > 86) {
        grade = "B+"
    } else if (score > 79) {
        grade = "B"
    } else if (score > 76) {
        grade = "C+"
    } else if (score > 69) {
        grade = "C"
    } else if (score > 66) {
        grade = "D+"
    } else if (score > 59) {
        grade = "D"
    } else {
        grade = "F"
    }

    console.log(`${name} ${grade}`);
}

