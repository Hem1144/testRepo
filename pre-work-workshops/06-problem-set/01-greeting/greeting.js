// YOUR CODE BELOW
const greeting = (name) => {
  if (name && typeof name === "string") {
    return `Hello ${name}!`;
  } else {
    return "Hello!";
  }
};
