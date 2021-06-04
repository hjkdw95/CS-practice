/* 하노이의 탑
전제 조건 : 가장 큰 원반이 목적지의 맨 아래에 놓여야 된다.
나머지 원반들은 순서대로 다른 기둥에 쌓여있어야 한다
*/

function hanoi(num, from, to, other){
    // num : 원반 갯수, from : 출발지 기둥 번호, to: 목적지 기둥 번호, other: 나머지 기둥 번호
    if(num === 0) return;
    // 첫번째 호출에서는 받아온 원반보다 하나 적은 원반들을 목적지가 아닌 곳으로 보낸다
    hanoi(num - 1, from, other, to);
    // 두번째로 맨 아래 원반을 목적지로 이동시킨다
    console.log(`${num}을 ${from}번에서 ${to}로 옮긴다`);
    // 마지막으로 다른 곳에 쌓아놨던 원반들을 목적지로 이동시킨다
    hanoi(num - 1, other, to, from);
};

hanoi(3, 0, 1, 2)