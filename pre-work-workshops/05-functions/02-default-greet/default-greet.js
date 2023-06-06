// YOUR CODE BELOW
const defaultGreet = (firstName, lastName = "Doe") => {
  return `Hi ${firstName} ${lastName}!`;
};
defaultGreet();
