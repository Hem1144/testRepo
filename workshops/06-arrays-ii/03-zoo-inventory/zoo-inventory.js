// YOUR CODE BELOW
const zooInventory = (zoo) => {
  let animal = [];
  for (let i = 0; i < zoo.length; i++) {
    let [animalName, [animalType, animalAge]] = zoo[i];
    animal.push(`${animalName} the ${animalType} is ${animalAge}.`);
  }
  return animal;
};
