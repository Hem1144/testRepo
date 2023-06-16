// YOUR CODE BELOW
function reverseArray(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++;
    right--;
  }
}
