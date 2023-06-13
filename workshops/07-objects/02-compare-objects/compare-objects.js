// YOUR CODE BELOW
function compareObjects(one, two) {
  let key1 = Object.keys(one);
  let key2 = Object.keys(two);

  if (key1.length !== key2.length) {
    return false;
  }
  for (let i = 0; i < key1.length; i++) {
    if (key1[i] !== key2[i]) {
      return false;
    }
    if (one[key1[i]] !== two[key2[i]]) {
      return false;
    }
  }
  return true;
}

console.log(compareObjects({ name: "nick" }, { name: "nick" }));
console.log(compareObjects({ name: "zeke" }, { name: "zeke", age: 12 }));
