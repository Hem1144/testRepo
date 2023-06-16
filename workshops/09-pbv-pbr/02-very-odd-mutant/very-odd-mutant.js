function veryOddMutant(nums) {
  let countRemoved = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums[i] = "normie";
      countRemoved++;
    }
  }

  return countRemoved;
}
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(allTheNums);
console.log("allTheNums:", allTheNums);
console.log("countRemoved:", countRemoved);
