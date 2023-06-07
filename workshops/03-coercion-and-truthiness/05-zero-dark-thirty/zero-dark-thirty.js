// YOUR CODE BELOW
function zeroDarkThirty(number) {
  if (number === 0) {
    return NaN;
  }

  let numString = number.toString();

  let resultString = numString.replace(/0/g, "");

  let result = parseFloat(resultString);

  return result;
}
