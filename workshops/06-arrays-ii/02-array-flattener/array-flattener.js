// YOUR CODE BELOW
const arrayFlattener = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (Array.isArray(ele)) {
      for (j = 0; j < ele.length; j++) {
        let innerEle = ele[j];
        result.push(innerEle);
      }
    } else {
      result.push(ele);
    }
  }
  return result;
};
console.log(arrayFlattener([1, 7, 8, [(2, 3)], 4]));
