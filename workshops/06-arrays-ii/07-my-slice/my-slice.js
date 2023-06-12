// YOUR CODE BELOW
function mySlice(originalArray, startIdx, endIdx) {
  debugger;

  if (startIdx === undefined) {
    startIdx = 0;
  } else if (startIdx < 0) {
    startIdx = originalArray.length + startIdx;
  }
  if (endIdx === undefined) {
    endIdx = originalArray.length;
  } else if (endIdx < 0) {
    endIdx = originalArray.length + endIdx;
  }

  let arrayCopy = [];
  for (let i = startIdx; i < endIdx; i++) {
    let ele = originalArray[i];
    arrayCopy.push(ele);
  }

  return arrayCopy;
}

console.log(mySlice([1, 2, 3], 1, 2));
console.log(mySlice([1, 2, 3], 1));
console.log(mySlice([1, 2, 3]));
console.log(mySlice([1, 2, 3], -2));
