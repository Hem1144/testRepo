// YOUR CODE BELOW

const myIncludes = (arr, searchVale) => {
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (ele === searchVale) {
      return true;
    }
  }
  return false;
};
