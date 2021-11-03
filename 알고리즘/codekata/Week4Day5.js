// 오름차순인 숫자 nums 배열과 찾아야할 target을 인자로 주면, target이 몇 번째 index인지 return 해주세요.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// 설명: 찾지 못하면 -1로 return 해주세요.

// nums 배열에 있는 요소는 서로 중복된 값이 없습니다.

const search = (nums, target) => {
  // 나의 답안
  // const halfIdx = Manth.round(nums.length / 2);
  // const half = nums[halfIdx];
  // if (half === target) {
  //   console.log(nums.indexOf(half));
  // } else if (half < target) {
  //   const newArr = nums.slice(halfIdx);
  //   // console.log(newArr);
  //   search(newArr, target);
  // } else if (half > target) {
  //   const newArr = nums.slice(0, halfIdx);
  //   // console.log(newArr);
  //   search(newArr, target);
  // }

  // 모델 답안
  // 인덱스를 반환하랬으니 인덱스를 기준삼는다
  let low = 0; //idx 0
  let high = nums.length - 1; // idx 5
  while (low <= high) {
    // 중간에 도달할때까지
    let mid = Math.floor((low + high) / 2); // 중간 idx 3 5
    if (nums[mid] < target) {
      // num[3] = 5 < 9,
      low = mid + 1; // low = 4
    } else if (nums[mid] > target) {
      // num[5] = 12 > 9
      high = mid - 1; // high = 4
    } else {
      console.log(mid);
      return mid;
    }
  }
  return -1;
};

// const nums = [-1, 0, 3, 5, 9, 12];
// const target = 9;

const nums = [-1, 0, 3, 5, 9, 12];
const target = 2;
search(nums, target);
