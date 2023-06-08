// YOUR CODE BELOW
const myIndexOf = (source, searchValue, startIdx = 0) => {
  for (let i = startIdx; i <= source.length - searchValue.length; i++) {
    let substring = source.slice(i, i + searchValue.length);

    if (substring === searchValue) {
      return i;
    }
  }
  return -1;
};
console.log(myIndexOf("hello", "h")); // => 0
console.log(myIndexOf("hello", "e")); // => 1
console.log(myIndexOf("hello", "l")); // => 2
console.log(myIndexOf("hello", "l")); // => 2
console.log(myIndexOf("hello", "o")); // => 4

console.log(myIndexOf("twice twice", "ice", 5));

console.log(myIndexOf("happy string", "sad"));
