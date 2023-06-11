// YOUR CODE BELOW
const myJoin = (array, seperator) => {
  if (seperator === undefined) {
    seperator = ",";
  }
  let joiner = "";
  for (let i = 0; i < array.length; i++) {
    let ele = array[i];

    if (i != 0) {
      joiner += seperator;
    }
    if (ele !== undefined && ele !== null) {
      joiner += ele;
    }
  }
  return joiner;
};
console.log(myJoin(["hello", undefined, "world"], "-"));
console.log(myJoin(myJoin(["let's", "make", "a", "list"], " ")));
console.log(myJoin(["a", "b", "c"], "+"));
console.log(myJoin(["Peter", "Paul", "Mary"]));
