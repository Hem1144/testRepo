// YOUR CODE BELOW
let addsNums = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};
function callThemAll(obj, value) {
  let results = [];

  for (let key in obj) {
    if (typeof obj[key] === "function") {
      results.push(obj[key](value));
    }
  }

  return results;
}
console.log(callThemAll(addsNums, 50));
