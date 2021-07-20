// 문제
// Canada Cosmos Control has received a report of another incident. They believe that an alien has illegally entered our space. A person who witnessed the appearance of the alien has come forward to describe the alien’s appearance. It is your role within the CCC to determine which alien has arrived. There are only 3 alien species that we are aware of, described below:

// TroyMartian, who has at least 3 antenna and at most 4 eyes;
// VladSaturnian, who has at most 6 antenna and at least 2 eyes;
// GraemeMercurian, who has at most 2 antenna and at most 3 eyes.

// 입력
// The first line contain the number of antenna that the witness claimed to have seen on the alien. The second line contain the number of eyes seen on the alien.

// 출력
// The output will be the list of aliens who match the possible description given by the witness. If no aliens match the description, there is no output.


//const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const inputs = "8\n6\n"
const input = inputs.toString().trim().split("\n").map(x => +x);

let antenna = input[0];
let eyes = input[1];

if (antenna >= 3 && eyes <= 4) {
    console.log("TroyMartian");
}
if (antenna <= 6 && eyes  >= 2) {
    console.log("VladSaturnian");
}
if (antenna <= 2 && eyes <= 3) {
    console.log("GraemeMercurian");
}
