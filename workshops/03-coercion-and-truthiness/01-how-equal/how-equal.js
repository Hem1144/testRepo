// YOUR CODE BELOW
const howEqual = (one, two) => {
  if (one === two) {
    return "strictly";
  } else if (one == two) {
    return "loosely";
  } else {
    return "not equal";
  }
};
howEqual();
