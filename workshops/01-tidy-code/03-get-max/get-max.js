// YOUR CODE BELOW
function getMax(number1, number2, number3) {
  if (number1 > number2) {
    if (number1 > number3) {
      return number1;
    }
    return number3;
  } else if (number2 > number3) {
    return number2;
  } else {
    return number3;
  }
}
