// YOUR CODE BELOW
const exponentiate = (base, power) => {
  let zeroPower = 1;
  for (let i = 1; i <= power; i++) {
    zeroPower *= base;
  }

  return zeroPower;
};
