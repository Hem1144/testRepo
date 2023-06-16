// YOUR CODE BELOW
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

// let sum = 0;

// function addToSum(num) {
//   sum += num;
// }

// let nums = [1, 2, 3,5,6,7];
// myForEach(nums, addToSum);
// console.log(sum);
