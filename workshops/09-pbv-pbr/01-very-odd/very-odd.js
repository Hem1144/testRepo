// YOUR CODE BELOW
function veryOdd(arr) {
  let newArry = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArry.push(arr[i]);
    }
  }
  return newArry;
}
