// YOUR CODE BELOW
const bacteriaTime = (currentNum, targetNum) => {
  if (targetNum < currentNum) {
    return "targetNum must be larger than currentNum";
  }

  let currentTime = 0;
  let aliveBacetria = currentNum;

  while (aliveBacetria < targetNum) {
    currentTime += 20;
    aliveBacetria *= 2;
  }
  return currentTime;
};
