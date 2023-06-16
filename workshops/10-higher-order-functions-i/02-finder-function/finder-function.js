// YOUR CODE BELOW
function finderFunction(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
}

function isEven(num) {
  return !(num % 2);
}
let numbers = [1, 3, 5, 64, 7, 12, 77, 79, 55, 14,22,46,66];
let odds = [9, 13, 15, 17];
console.log(finderFunction(numbers, isEven)); 
console.log(finderFunction(odds, isEven)); 
