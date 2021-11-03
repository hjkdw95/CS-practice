// 다음과 같이 input이 주어졌을 때,같은 알파벳으로 이루어진 단어끼리 묶어주세요.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// output에서 순서는 상관없습니다.

// 객체로 같은 글자끼리 묶어서 정리
const groupAnagrams = (strs) => {
  const map = {};
  for (let str of strs) {
    // sort()는 글자를 순서대로 나열해준다
    // sort()를 거치면서 글자들은 모두가 다 알파벳 순서대로 나열된다
    const key = [...str].sort().join("");

    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }
  return Object.values(map);
};

const Input = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(Input);
