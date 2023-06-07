// YOUR CODE BELOW
const lastCharacter = (first, last) => {
  if (
    first &&
    last &&
    typeof first &&
    typeof last &&
    typeof last === "string"
  ) {
    first.slice(-1) = last.slice(-1);
    return true;
  }
  return false;
};
