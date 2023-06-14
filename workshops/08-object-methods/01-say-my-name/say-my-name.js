// YOUR CODE BELOW
let me = {
  name: "John",
  getGreeting() {
    return "Hi, my name is " + this.name + ".";
  },
};
console.log(me.name);
console.log(me.getGreeting());
