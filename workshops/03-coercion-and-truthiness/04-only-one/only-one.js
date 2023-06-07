// YOUR CODE BELOW
const onlyOne = (one, two, three) => {
  if (
    (one && !two && !three) ||
    (!one && two && !three) ||
    (!one && !two && !three)
  )
    return true;
  else {
    return false;
  }
};
