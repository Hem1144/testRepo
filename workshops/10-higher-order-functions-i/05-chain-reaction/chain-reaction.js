// YOUR CODE BELOW
function chainReaction(startingValue, func) {
  let res = startingValue;
  for (let i = 0; i < func.length; i++) {
    res = func[i](res);
  }
  return res;
}
