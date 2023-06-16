// YOUR CODE BELOW
function deeperCopy(originalArray) {
  let copy = [];

  for (let i = 0; i < originalArray.length; i++) {
    let element = originalArray[i];

    if (Array.isArray(element)) {
      let nestedCopy = [];

      for (let j = 0; j < element.length; j++) {
        let innerElement = element[j];
        nestedCopy.push(innerElement);
      }

      copy.push(nestedCopy);

    } else {
      copy.push(element);
    }
  }

  return copy;
}