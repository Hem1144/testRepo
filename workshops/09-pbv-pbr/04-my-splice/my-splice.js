// YOUR CODE BELOW
function mySplice(array, startIndex, deleteCount, newVal) {
  let removedElements = [];
  let keptElements = [];

  for (let i = 0; i < startIndex; i++) {
    let ele = array[i];
    keptElements.push(ele);
  }
  if (newVal !== undefined) {
    keptElements.push(newVal);
  }
  for (let i = startIndex; i < startIndex + deleteCount; i++) {
    let element = array[i];
    removedElements.push(element);
  }
  for (let i = startIndex + deleteCount; i < array.length; i++) {
    let element = array[i];
    keptElements.push(element);
  }
  while (array.length) {
    array.pop();
  }
  for (let i = 0; i < keptElements.length; i++) {
    let element = keptElements[i];
    array.push(element);
  }
  return removedElements;
}
let myArray = [1, 2, 3];jiw
console.log(mySplice(myArray, 1, 1, "apples"));
