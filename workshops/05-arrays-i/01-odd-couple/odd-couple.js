// YOUR CODE BELOW
function oddCouple(nums) {
  let oddNums = [];
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (currentNum % 2) {
      oddNums.push(currentNum);
      if (oddNums.length === 2) {
        return oddNums;
      }
    }
  }
  return oddNums;
}
console.log(oddCouple([10, 15, 20]));
console.log(oddCouple([1, 2, 3, 4, 5]));
