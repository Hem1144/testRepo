// YOUR CODE BELOW
const mySlice = (
  originalString,
  startIdx = 0,
  endIdx = originalString.length
) => {
  let splicedString = "";
  for (let i = startIdx; i < endIdx; i++) {
    const curString = originalString[i];
    splicedString += curString;
  }
  return splicedString;
};
