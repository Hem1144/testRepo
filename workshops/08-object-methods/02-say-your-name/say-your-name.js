// YOUR CODE BELOW
const me2 = {
  name: "Bravo",
  getGreeting: function (you) {
    return "Hi " + you.name + "," + " my name is " + this.name + ".";
  },
};

const you = {
  name: "Pathan",
};

console.log(me2.name);
console.log(you.name);

console.log(me2.getGreeting(you));
