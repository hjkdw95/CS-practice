// 숫자로 이루어진 리스트 nums를 인자로 주면, 그 안에서 어떤 연속적인 요소를 더했을 때 가장 큰 값이 나오나요? 가장 큰 값을 찾아 return해주세요.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// 설명: [4,-1,2,1] 를 더하면 6이 가장 크기 때문

const maxSubArray = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    // 이전 까지 누적된 것 + 지금 것 까지 더한거랑 지금 것을 비교
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

const Input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

maxSubArray(Input); // 6
