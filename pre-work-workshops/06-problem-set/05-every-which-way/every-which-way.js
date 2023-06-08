// YOUR CODE BELOW
const everyWhichWay = (num1, num2, num3) => {
  if (num1 + num2 === num3) {
    return "sum";
  } else if (num1 - num2 === num3) {
    return "difference";
  } else if (num1 * num2 === num3) {
    return "product";
  } else if (num1 / num2 === num3) {
    return "fraction";
  } else {
    return null;
  }
};
console.log(everyWhichWay(10, 20, 30));
console.log(everyWhichWay(50, 20, 30));
console.log(everyWhichWay(10, 3, 30));
console.log(everyWhichWay(100, 10, 10));
console.log(everyWhichWay(1, 13, 30));
