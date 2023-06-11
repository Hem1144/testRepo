// YOUR CODE BELOW
const myLastIndexOf = (arr, searchValue, startIdx) => {
  if (startIdx === undefined) {
    startIdx = arr.length - 1;
  }
  for (let i = startIdx; i >= 0; i--) {
    let ele = arr[i];
    if (ele === searchValue) {
      return i;
    }
  }
  return -1;
};
