// YOUR CODE BELOW
const evenAndOdd = (arr) => {
  let evenArray = [];
  let oddArry = [];
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (ele % 2) {
      oddArry.push(ele);
    } else {
      evenArray.push(ele);
    }
  }

  return [evenArray, oddArry];
};
console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));